import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { SectionShell } from "@/components/sections/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { engagementPlans } from "@/lib/site-content";
import { routes } from "@/lib/routes";

export function EngagementSection() {
  return (
    <SectionShell className="border-b bg-surface/[0.16]">
      <div className="grid gap-12 lg:grid-cols-[0.68fr_1fr] lg:gap-20">
        <SectionHeading
          eyebrow="Starting Points"
          align="left"
          title="Choose the work format, then scope it properly."
          subtitle="Every engagement is shaped around requirements, content, integrations, and release needs."
        />

        <div className="divide-y border-t">
          {engagementPlans.map((plan, index) => (
            <article key={plan.planName} className="py-7 sm:py-8">
              <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <p className="text-xs font-medium text-primary">0{index + 1}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-foreground">{plan.planName}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-muted">{plan.description}</p>
                </div>
                <p className="rounded-full border px-4 py-2 text-xs text-muted">{plan.suitedFor}</p>
              </div>
              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <ul className="grid gap-2 text-sm text-muted sm:grid-cols-3 sm:gap-x-5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="before:mr-2 before:text-primary before:content-['/']">{feature}</li>
                  ))}
                </ul>
                <Link href={routes.contact} className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground transition hover:text-primary">
                  {plan.buttonText}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
