"use client";

import { Reveal } from "@/components/visuals/reveal";
import { processSteps } from "@/lib/site-content";

export function ProcessPinned() {
  return (
    <section className="px-5 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Pinned left column */}
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <Reveal>
            <h2 className="text-balance font-display text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[3.1rem]">
              A compact process, start to finish.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-base leading-7 text-muted sm:text-lg">
              Clear decisions before polished delivery. Each stage builds on the last, so the work
              stays legible and the release is something you can stand behind.
            </p>
          </Reveal>
        </div>

        {/* Scrolling steps with a connecting spine */}
        <ol className="relative border-l border-border/15 pl-8 sm:pl-10">
          {processSteps.map((step, index) => (
            <li key={step.title} className="relative pb-12 last:pb-0">
              <Reveal delay={index * 0.05}>
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.6rem] top-1.5 grid h-7 w-7 place-items-center rounded-full border bg-surface text-[0.7rem] font-semibold text-primary sm:-left-[3.1rem]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-lg text-pretty text-base leading-7 text-muted">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
