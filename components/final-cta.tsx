"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section id="contact" className="px-4 py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border bg-surface/80 px-6 py-16 text-center shadow-glow sm:px-10 sm:py-20"
      >
        <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:38px_38px] opacity-[0.18]" />
        <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/22 blur-3xl animate-pulseGlow" />
        <h2 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-5xl">
          Have a project in mind? Let&apos;s build it properly.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-muted sm:text-lg">
          Tell us what you&apos;re trying to create and we&apos;ll help turn it into a
          clean, modern digital product.
        </p>
        <a className={cn(buttonVariants({ size: "lg", className: "mt-9" }))} href="mailto:hello@kapasoftwaregroup.com">
          Start a Project
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}
