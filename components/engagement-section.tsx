import {
  ModernPricingPage,
  type PricingCardProps,
} from "@/components/ui/animated-glassy-pricing";
import { SectionHeading } from "@/components/ui/section-heading";

const plans: PricingCardProps[] = [
  {
    planName: "Starter",
    description: "Clean online presence for small businesses.",
    price: "Website",
    features: ["3-5 core pages", "Responsive design", "Basic SEO setup", "Contact form"],
    buttonText: "Start Starter",
    buttonVariant: "secondary",
  },
  {
    planName: "Growth",
    description: "Sharper positioning and conversion structure.",
    price: "Website",
    features: [
      "Custom design system",
      "Landing pages",
      "Analytics setup",
      "CMS/blog-ready structure",
      "Conversion-focused sections",
    ],
    buttonText: "Start Growth",
    isPopular: true,
    buttonVariant: "primary",
  },
  {
    planName: "Custom",
    description: "Internal tools and digital platforms.",
    price: "Software",
    features: ["Web apps", "Dashboards", "Client portals", "Automations", "Integrations"],
    buttonText: "Discuss Custom",
    buttonVariant: "primary",
  },
];

export function EngagementSection() {
  return (
    <section className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Flexible ways to work together." />

        <div className="mt-14">
          <ModernPricingPage
            title={
              <>
                Choose the <span className="text-cyan-400">right starting point</span>
              </>
            }
            subtitle="Flexible engagement models for websites, growth systems, and custom software."
            plans={plans}
            showAnimatedBackground
          />
        </div>
      </div>
    </section>
  );
}
