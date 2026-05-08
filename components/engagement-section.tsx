"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter Website",
    startingPoint: "Focused online presence",
    bestFor: "Small businesses that need a clean online presence",
    features: ["3-5 core pages", "Responsive design", "Basic SEO setup", "Contact form"],
  },
  {
    name: "Growth Website",
    startingPoint: "Stronger positioning",
    bestFor: "Businesses that need stronger positioning and conversion",
    features: [
      "Custom design system",
      "Landing pages",
      "Analytics setup",
      "CMS/blog-ready structure",
      "Conversion-focused sections",
    ],
    featured: true,
  },
  {
    name: "Custom Software",
    startingPoint: "Digital systems",
    bestFor: "Businesses that need internal tools or digital platforms",
    features: ["Web apps", "Dashboards", "Client portals", "Automations", "Integrations"],
  },
];

export function EngagementSection() {
  return (
    <section className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Flexible ways to work together." />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.42, delay: index * 0.08 }}
            >
              <Card
                className={cn(
                  "relative h-full overflow-hidden p-6 hover:-translate-y-1 hover:border-primary/55 hover:shadow-glow",
                  plan.featured && "border-primary/60 bg-primary/10",
                )}
              >
                {plan.featured ? (
                  <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-slate-950">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Popular
                  </div>
                ) : null}
                <p className="text-sm font-semibold text-primary">Starting point</p>
                <h3 className="mt-3 text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="mt-2 text-sm font-semibold text-muted">{plan.startingPoint}</p>
                <p className="mt-5 min-h-14 text-sm leading-7 text-muted">{plan.bestFor}</p>
                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={cn(
                    buttonVariants({
                      variant: plan.featured ? "primary" : "secondary",
                      className: "mt-8 w-full",
                    }),
                  )}
                >
                  Start a Project
                </a>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
