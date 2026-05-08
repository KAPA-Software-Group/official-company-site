import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { WorkSection } from "@/components/work-section";

export default function WorkPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Work"
        title="Project examples for websites, product pages, and tools."
        subtitle="See the kinds of digital products and operating systems Kapa Software Group can shape for growing businesses."
      />
      <WorkSection />
    </SiteShell>
  );
}
