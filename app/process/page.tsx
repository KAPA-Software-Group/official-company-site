import { PageHero } from "@/components/sections/page-hero";
import { ProcessSection } from "@/components/sections/process-section";
import { pageHeroes } from "@/lib/site-content";

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow={pageHeroes.process.eyebrow}
        title={pageHeroes.process.title}
        subtitle={pageHeroes.process.subtitle}
      />
      <ProcessSection />
    </>
  );
}
