import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { ProcessSection } from "@/components/sections/process-section";
import { pageHeroes } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Process",
  description: pageHeroes.process.subtitle,
};

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
