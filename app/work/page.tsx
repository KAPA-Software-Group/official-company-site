import { PageHero } from "@/components/sections/page-hero";
import { WorkSection } from "@/components/sections/work-section";
import { pageHeroes } from "@/lib/site-content";

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow={pageHeroes.work.eyebrow}
        title={pageHeroes.work.title}
        subtitle={pageHeroes.work.subtitle}
      />
      <WorkSection />
    </>
  );
}
