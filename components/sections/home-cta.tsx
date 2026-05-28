"use client";

import Link from "next/link";

import { Reveal } from "@/components/visuals/reveal";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";

export function HomeCta() {
  return (
    <section className="px-5 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
      <Reveal className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-[#081218] px-6 py-20 text-center text-white sm:px-12 sm:py-28">
          <h2 className="mx-auto max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
            Build the digital system your business should have had from day one.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-white/80 sm:text-lg">
            Tell us what you are trying to build. We will map the scope and the fastest credible
            path to a finished, fully customized product.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={routes.contact}>Start a Project</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="w-full border-white/40 bg-transparent text-white hover:border-white hover:bg-white hover:text-slate-950 sm:w-auto"
            >
              <Link href={routes.services}>Explore Services</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
