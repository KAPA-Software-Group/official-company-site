import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Kapa Software about your website, app, automation, or digital system project.",
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
    </>
  );
}
