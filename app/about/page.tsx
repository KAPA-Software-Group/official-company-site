import { FAQSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";
import { WhyKapaSection } from "@/components/why-kapa-section";

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title="Modern software thinking for business websites and tools."
        subtitle="Kapa Software Group focuses on clean design, scalable builds, and digital systems that support real operations."
      />
      <WhyKapaSection />
      <FAQSection />
    </SiteShell>
  );
}
