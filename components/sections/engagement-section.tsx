import { SectionShell } from "@/components/sections/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { ModernPricingPage } from "@/components/visuals/animated-glassy-pricing";
import { engagementPlans } from "@/lib/site-content";

export function EngagementSection() {
  return (
    <SectionShell>
      <SectionHeading title="Flexible ways to work together." />

      <div className="mt-14">
        <ModernPricingPage
          title={
            <>
              Choose the <span className="text-cyan-400">right starting point</span>
            </>
          }
          subtitle="Flexible engagement models for websites, growth systems, and custom software."
          plans={engagementPlans}
        />
      </div>
    </SectionShell>
  );
}
