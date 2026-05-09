import { EngagementSection } from "@/components/engagement-section";
import { PageHero } from "@/components/page-hero";
import { ServicesSection } from "@/components/services-section";
import { SiteShell } from "@/components/site-shell";

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Websites, apps, and systems built with modern execution."
        subtitle="Explore the core services Kapa Software Group uses to turn digital ideas into polished business tools."
        showVisual
      />
      <ServicesSection />
      <EngagementSection />
    </SiteShell>
  );
}
