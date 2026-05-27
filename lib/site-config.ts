export const siteConfig = {
  name: "Kapa Software",
  email: "inquiries@kapasoftware.com",
  description:
    "Kapa Software builds modern websites, web applications, automations, and digital systems for growing businesses.",
  themeStorageKey: "kapa-theme",
  introStorageKey: "kapa-intro-seen",
} as const;

export const mailtoHref = `mailto:${siteConfig.email}`;
