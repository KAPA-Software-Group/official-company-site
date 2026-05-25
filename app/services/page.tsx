import type { Metadata } from "next";

import { EngagementSection } from "@/components/sections/engagement-section";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesSection } from "@/components/sections/services-section";
import { pageHeroes } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Services",
  description: pageHeroes.services.subtitle,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={pageHeroes.services.eyebrow}
        title={pageHeroes.services.title}
        subtitle={pageHeroes.services.subtitle}
      />
      <ServicesSection />
      <EngagementSection />
    </>
  );
}
