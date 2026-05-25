import type { Metadata } from "next";

import { FAQSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { WhyKapaSection } from "@/components/sections/why-kapa-section";
import { pageHeroes } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "About",
  description: pageHeroes.about.subtitle,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={pageHeroes.about.eyebrow}
        title={pageHeroes.about.title}
        subtitle={pageHeroes.about.subtitle}
      />
      <WhyKapaSection />
      <FAQSection />
    </>
  );
}
