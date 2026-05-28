import { CapabilityStrip } from "@/components/sections/capability-strip";
import { FeatureBento } from "@/components/sections/feature-bento";
import { HeroSection } from "@/components/sections/hero-section";
import { HomeCta } from "@/components/sections/home-cta";
import { ProcessPinned } from "@/components/sections/process-pinned";
import { ScrollStatement } from "@/components/sections/scroll-statement";

export default function Home() {
  return (
    <>
      {/* Attention */}
      <HeroSection />
      <CapabilityStrip />
      {/* Interest */}
      <FeatureBento />
      {/* Desire */}
      <ScrollStatement />
      <ProcessPinned />
      {/* Action */}
      <HomeCta />
    </>
  );
}
