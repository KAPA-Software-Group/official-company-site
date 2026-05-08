import { CapabilityStrip } from "@/components/capability-strip";
import { EngagementSection } from "@/components/engagement-section";
import { FAQSection } from "@/components/faq-section";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProcessSection } from "@/components/process-section";
import { ServicesSection } from "@/components/services-section";
import { WhyKapaSection } from "@/components/why-kapa-section";
import { WorkSection } from "@/components/work-section";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <CapabilityStrip />
      <ServicesSection />
      <WorkSection />
      <ProcessSection />
      <WhyKapaSection />
      <EngagementSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
