import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { WorkSection } from "@/components/sections/work-section";
import { pageHeroes } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Work",
  description: pageHeroes.work.subtitle,
};

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
