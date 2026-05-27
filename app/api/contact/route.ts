import { createHash } from "node:crypto";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

import type { ContactFormFields } from "@/lib/contact";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

const MAX_REQUEST_BYTES = 8_192;
const EXPECTED_FIELDS = new Set(["name", "email", "project", "message", "website"]);
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTROL_CHARACTER_PATTERN = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;

let rateLimit: Ratelimit | undefined;

function response(message: string, status = 200) {
  return NextResponse.json(
    { message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}

function hasSameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");

  if (!origin) {
    return false;
  }

  try {
    return new URL(origin).origin === request.nextUrl.origin;
  } catch {
    return false;
  }
}

function stringValue(
  input: Record<string, unknown>,
  field: keyof ContactFormFields,
  optional = false,
) {
  const value = input[field];

  if (optional && value === undefined) {
    return "";
  }

  return typeof value === "string" ? value : null;
}

function parseFields(value: unknown): ContactFormFields | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  const input = value as Record<string, unknown>;

  if (Object.keys(input).some((field) => !EXPECTED_FIELDS.has(field))) {
    return null;
  }

  const rawName = stringValue(input, "name");
  const rawEmail = stringValue(input, "email");
  const rawProject = stringValue(input, "project", true);
  const rawMessage = stringValue(input, "message");
  const website = stringValue(input, "website", true);

  if (
    rawName === null ||
    rawEmail === null ||
    rawProject === null ||
    rawMessage === null ||
    website === null ||
    rawName.length > 100 ||
    rawEmail.length > 254 ||
    rawProject.length > 120 ||
    rawMessage.length > 4000 ||
    website.length > 200
  ) {
    return null;
  }

  if ([rawName, rawEmail, rawProject, rawMessage].some((field) => CONTROL_CHARACTER_PATTERN.test(field))) {
    return null;
  }

  const fields = {
    name: rawName.replace(/\s+/g, " ").trim(),
    email: rawEmail.trim(),
    project: rawProject.replace(/\s+/g, " ").trim(),
    message: rawMessage.trim(),
    website,
  };

  if (!fields.name || !fields.message || !EMAIL_PATTERN.test(fields.email)) {
    return null;
  }

  return fields;
}

function hasConfiguration() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.UPSTASH_REDIS_REST_URL &&
      process.env.UPSTASH_REDIS_REST_TOKEN,
  );
}

function getRateLimit() {
  if (!rateLimit) {
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    });

    rateLimit = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, "15 m"),
      prefix: "kapa:contact",
    });
  }

  return rateLimit;
}

function requestIdentifier(request: NextRequest) {
  const ipAddress =
    request.headers.get("x-real-ip")?.trim() ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";

  // Keep raw visitor IP addresses out of Redis while retaining per-address limits.
  return createHash("sha256").update(ipAddress).digest("hex");
}

export async function POST(request: NextRequest) {
  if (process.env.CONTACT_API_ENABLED !== "true") {
    return response("Contact form email delivery is not enabled.", 503);
  }

  if (!hasSameOrigin(request)) {
    return response("This submission could not be accepted.", 403);
  }

  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
    return response("Please check your form details and try again.", 400);
  }

  const contentLength = Number(request.headers.get("content-length"));

  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return response("Please shorten your message and try again.", 413);
  }

  let rawBody: string;
  let parsedBody: unknown;

  try {
    rawBody = await request.text();

    if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
      return response("Please shorten your message and try again.", 413);
    }

    parsedBody = JSON.parse(rawBody) as unknown;
  } catch {
    return response("Please check your form details and try again.", 400);
  }

  const fields = parseFields(parsedBody);

  if (!fields) {
    return response("Please check your form details and try again.", 400);
  }

  if (fields.website) {
    // Respond normally so automated submitters cannot learn that the trap was triggered.
    return response("Thanks. Your message has been sent and we will be in touch soon.");
  }

  if (!hasConfiguration()) {
    console.error("Contact form delivery is not configured.");
    return response("Your message could not be sent. Please email us directly.", 503);
  }

  try {
    const { success } = await getRateLimit().limit(requestIdentifier(request));

    if (!success) {
      console.warn("A contact form submission was blocked by the rate limit.");
      return response("Too many messages have been sent. Please try again later or email us directly.", 429);
    }
  } catch {
    console.error("The contact form rate limit service is unavailable.");
    return response("Your message could not be sent. Please email us directly.", 503);
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "Kapa Software Website <website@mail.kapasoftware.com>",
      to: [siteConfig.email],
      replyTo: fields.email,
      subject: "New website project inquiry",
      text: [
        "A new inquiry was submitted through kapasoftware.com.",
        "",
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Project type: ${fields.project || "Not provided"}`,
        "",
        "Message:",
        fields.message,
      ].join("\n"),
    });

    if (error) {
      console.error("The contact form email provider rejected a delivery attempt.");
      return response("Your message could not be sent. Please email us directly.", 502);
    }
  } catch {
    console.error("The contact form email provider is unavailable.");
    return response("Your message could not be sent. Please email us directly.", 502);
  }

  return response("Thanks. Your message has been sent and we will be in touch soon.");
}
