"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ShaderAnimation } from "@/components/ui/shader-animation";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-32 text-white">
      <div className="absolute inset-0 -z-30 opacity-35 mix-blend-screen">
        <ShaderAnimation className="h-full w-full" />
      </div>

      <div className="absolute inset-0 -z-20 bg-grid-pattern bg-[size:52px_52px] opacity-[0.08]" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 left-[-30%] -z-10 w-[42%] skew-x-[-16deg] bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent blur-sm"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ["0%", "280%", "0%"],
                opacity: [0.12, 0.42, 0.12],
              }
        }
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/3 -z-10 h-32 bg-gradient-to-b from-transparent via-blue-500/18 to-transparent"
        animate={shouldReduceMotion ? undefined : { y: [-90, 160, -90], opacity: [0.15, 0.38, 0.15] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(2_6_23/0.22),rgb(2_6_23/0.62)_72%,rgb(2_6_23/0.92))]" />

      <motion.h1
        initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-6xl text-center text-balance text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl"
      >
        Build the digital system your business should have had from day one.
      </motion.h1>
    </section>
  );
}
