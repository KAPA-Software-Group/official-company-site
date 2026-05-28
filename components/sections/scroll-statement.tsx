"use client";

import { Reveal } from "@/components/visuals/reveal";

export function ScrollStatement() {
  return (
    <section className="border-y bg-surface px-5 py-28 sm:px-6 sm:py-40 lg:px-8 lg:py-48">
      <Reveal className="mx-auto max-w-5xl">
        <p className="font-display text-3xl font-semibold leading-[1.18] tracking-tight text-foreground sm:text-4xl lg:text-[3.4rem] lg:leading-[1.15]">
          We build the system, not just the screens. From the first line of code to the website your
          business runs on, every layer is designed to fit how you actually work.
        </p>
      </Reveal>
    </section>
  );
}
