import { siteConfig } from "@/lib/site-config";

export type ContactFormFields = {
  name: string;
  email: string;
  project: string;
  message: string;
  website: string;
};

type MailtoContactFields = Omit<ContactFormFields, "website">;

export function createMailtoHref(fields: MailtoContactFields) {
  const subject = encodeURIComponent(
    `Project inquiry from ${fields.name || "Kapa website"}`,
  );
  const body = encodeURIComponent(
    [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      `Project type: ${fields.project}`,
      "",
      fields.message,
    ].join("\n"),
  );

  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}
