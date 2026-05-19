"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, User } from "lucide-react";
import { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  contactFlowPaths,
  createMailtoHref,
  formFlowAuraPaths,
} from "@/lib/contact";
import { mailtoHref, siteConfig } from "@/lib/site-config";

function ContactFlowBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--background)/0.12),rgb(var(--background)/0.94)_82%)]" />
      <div className="absolute right-[-12%] top-28 h-[620px] w-[62%] rounded-[3rem] bg-primary/10 blur-3xl" />
      <svg
        className="absolute inset-0 h-full w-full text-primary"
        viewBox="0 0 1400 820"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        {contactFlowPaths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.06 + path.id * 0.012}
            initial={shouldReduceMotion ? false : { pathLength: 0.18, opacity: 0 }}
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    pathLength: [0.18, 1, 0.18],
                    pathOffset: [0, 0.9, 0],
                    opacity: [0.22, 0.52, 0.22],
                  }
            }
            transition={{
              duration: 16 + path.id * 0.45,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: path.id * 0.12,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function FormFlowAura() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute -inset-10 -z-10">
      <div className="absolute inset-8 rounded-[3rem] bg-primary/10 blur-3xl" />
      <svg
        className="absolute inset-0 h-full w-full text-primary"
        viewBox="0 0 760 640"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        {formFlowAuraPaths.map((path, index) => (
          <motion.path
            key={path}
            d={path}
            stroke="currentColor"
            strokeWidth={1.1 + index * 0.2}
            strokeOpacity={0.3 - index * 0.04}
            initial={shouldReduceMotion ? false : { pathLength: 0.25, opacity: 0 }}
            animate={
              shouldReduceMotion
                ? undefined
                : { pathLength: [0.25, 1, 0.25], pathOffset: [0, 0.8, 0], opacity: [0.28, 0.72, 0.28] }
            }
            transition={{
              duration: 10 + index * 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function ContactSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const project = String(form.get("project") || "").trim();
    const message = String(form.get("message") || "").trim();

    window.location.href = createMailtoHref({ name, email, project, message });
  }

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-radial-blue px-4 pb-20 pt-36 sm:pt-40 lg:pt-44">
      <ContactFlowBackground />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Contact</p>
          <h1 className="mt-5 max-w-3xl text-balance text-5xl font-black leading-[0.95] tracking-tight text-foreground sm:text-7xl">
            Let&apos;s build it properly.
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted">
            Send the project details and Kapa Software Group will respond with a clear next step.
          </p>
          <div className="mt-8 inline-block rounded-2xl bg-gradient-to-b from-white/12 to-black/10 p-px shadow-glow backdrop-blur">
            <a
              href="#project-message"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-6 text-base font-semibold text-foreground transition duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <a
            href={mailtoHref}
            className="mt-6 flex w-max items-center gap-3 text-sm font-semibold text-primary transition hover:text-accent"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {siteConfig.email}
          </a>
        </div>

        <div className="relative isolate">
          <FormFlowAura />
          <form
            id="project-message"
            onSubmit={handleSubmit}
            className="liquid-glass-strong relative z-10 rounded-[2rem] border p-5 shadow-glow sm:p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <User className="h-4 w-4 text-primary" aria-hidden="true" />
                  Name
                </span>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="h-12 w-full rounded-2xl border bg-surface/70 px-4 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="h-12 w-full rounded-2xl border bg-surface/70 px-4 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="you@company.com"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-foreground">
                Project type
              </span>
              <input
                name="project"
                className="h-12 w-full rounded-2xl border bg-surface/70 px-4 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="Website, app, automation, dashboard"
              />
            </label>

            <label className="mt-5 block">
              <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                <MessageSquare className="h-4 w-4 text-primary" aria-hidden="true" />
                Message
              </span>
              <textarea
                name="message"
                required
                rows={7}
                className="w-full resize-none rounded-2xl border bg-surface/70 px-4 py-3 text-sm leading-6 text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:ring-2 focus:ring-primary/30"
                placeholder="Tell us what you want to build, timeline, and anything important."
              />
            </label>

            <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
              Send Message
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
