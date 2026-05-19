import { EngagementSection } from "@/components/sections/engagement-section";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesSection } from "@/components/sections/services-section";
import { pageHeroes } from "@/lib/site-content";

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
