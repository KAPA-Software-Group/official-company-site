import { FAQSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/sections/page-hero";
import { WhyKapaSection } from "@/components/sections/why-kapa-section";
import { pageHeroes } from "@/lib/site-content";

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
