"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers3 } from "lucide-react";

import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export function HeroSplineScene() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
      className="relative"
      aria-label="Interactive 3D software studio scene"
    >
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/10 blur-3xl" />
      <Card className="relative h-[560px] overflow-hidden border-primary/15 bg-slate-950 text-slate-50 shadow-[0_30px_110px_rgb(2_6_23/0.34)] sm:h-[620px] lg:h-[680px]">
        <Spotlight className="-top-40 left-0 md:-top-24 md:left-44" fill="#67E8F9" />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:42px_42px] opacity-[0.08]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(56,189,248,0.22),transparent_34%),radial-gradient(circle_at_22%_70%,rgba(37,99,235,0.18),transparent_28%)]" />

        <div className="relative z-10 flex h-full flex-col lg:flex-row">
          <div className="flex min-h-[240px] flex-1 flex-col justify-center p-6 sm:p-8 lg:max-w-[44%]">
            <div className="mb-5 inline-flex w-max items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-3 py-2 text-xs font-semibold text-cyan-100 backdrop-blur">
              <Cpu className="h-4 w-4 text-primary" aria-hidden="true" />
              Interactive build systems
            </div>
            <h2 className="max-w-md text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
              Software interfaces that feel modern before a word is read.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
              3D motion, technical UI, and conversion-focused structure combine into a
              premium first impression for Kapa Software Group.
            </p>
            <div className="mt-7 grid max-w-sm grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <Layers3 className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-bold">Design systems</p>
                <p className="mt-1 text-xs text-slate-400">Sharp, reusable UI</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <ArrowUpRight className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm font-bold">Launch ready</p>
                <p className="mt-1 text-xs text-slate-400">Fast, scalable builds</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[300px] flex-1 lg:min-h-0">
            <div className="absolute inset-0 lg:-left-12">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="h-full w-full"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
