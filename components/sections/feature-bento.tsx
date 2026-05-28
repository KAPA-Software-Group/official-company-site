"use client";

import { Reveal, RevealGroup, RevealGroupItem } from "@/components/visuals/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities, services } from "@/lib/site-content";
import { cn } from "@/lib/utils";

// First service anchors the wide cell; the rest fill the dense bento.
const [leadService, ...restServices] = services;

export function FeatureBento() {
  return (
    <section className="px-5 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            align="left"
            title="One studio for the whole digital system."
            subtitle="Strategy, interface, build, and the connective automation behind it — handled end to end so nothing is stitched together after the fact."
          />
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[15rem] lg:grid-flow-dense lg:grid-cols-3">
          {/* Big anchor cell */}
          <RevealGroupItem className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <article className="group flex h-full flex-col justify-between rounded-2xl border bg-card p-8 transition-colors hover:border-primary/50">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-xl border bg-surface text-primary transition-transform duration-500 group-hover:scale-110">
                  <leadService.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-7 max-w-md font-display text-2xl font-semibold leading-tight tracking-tight text-foreground sm:text-3xl">
                  {leadService.title} that earn trust and route every visitor to a clear next step.
                </h3>
                <p className="mt-4 max-w-md text-pretty text-base leading-7 text-muted">
                  {leadService.description}
                </p>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {capabilities.slice(0, 6).map((cap) => (
                  <li
                    key={cap}
                    className="rounded-full border bg-surface px-3 py-1.5 text-xs font-medium text-muted"
                  >
                    {cap}
                  </li>
                ))}
              </ul>
            </article>
          </RevealGroupItem>

          {/* Remaining service cells: first two are square, last spans wide */}
          {restServices.map((service, index) => (
            <RevealGroupItem
              key={service.title}
              className={cn(index === restServices.length - 1 && "lg:col-span-2")}
            >
              <article className="group flex h-full flex-col justify-between rounded-2xl border bg-card p-7 transition-colors hover:border-primary/50 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border bg-surface text-primary transition-transform duration-500 group-hover:scale-110">
                    <service.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-5 text-pretty text-sm leading-6 text-muted">{service.description}</p>
                <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  {service.output}
                </p>
              </article>
            </RevealGroupItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
