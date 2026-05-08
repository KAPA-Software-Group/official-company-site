import { CapabilityStrip } from "@/components/capability-strip";
import { HeroSection } from "@/components/hero-section";
import { SiteShell } from "@/components/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <CapabilityStrip />
    </SiteShell>
  );
}
