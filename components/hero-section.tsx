"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  DatabaseZap,
  Sparkles,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const codeLines = [
  "const launch = await kapa.build({",
  "  stack: 'Next.js + automation',",
  "  speed: 'production-ready',",
  "  outcome: 'growth system'",
  "});",
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-radial-blue px-4 pb-20 pt-36 sm:pt-40 lg:min-h-screen lg:pb-28 lg:pt-44">
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[size:44px_44px] opacity-[0.16]" />
      <div className="absolute left-1/2 top-16 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-pulseGlow" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border bg-surface/70 px-3 py-2 text-sm font-medium text-muted backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Premium websites, apps, and business systems
          </div>
          <h1 className="text-balance text-4xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Modern websites and software systems for growing businesses.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted sm:text-xl">
            Kapa Software Group designs and builds high-performing websites,
            web applications, automations, and digital platforms that help
            businesses move faster and look sharper online.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className={cn(buttonVariants({ size: "lg" }))} href="#contact">
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
              href="#services"
            >
              View Services
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-sm text-muted">
            {["Fast builds", "Sharp design", "Scalable systems"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
          className="relative"
          aria-label="Animated software interface preview"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/10 blur-3xl" />
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[2rem] border bg-surface/78 p-3 shadow-[0_30px_110px_rgb(2_6_23/0.28)] backdrop-blur-2xl"
          >
            <div className="rounded-[1.5rem] border bg-background/86 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-300/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <div className="rounded-full border px-3 py-1 text-xs font-medium text-muted">
                  Kapa Command Center
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1fr_0.82fr]">
                <div className="rounded-3xl border bg-card/80 p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        Growth System
                      </p>
                      <p className="text-xs text-muted">Live product snapshot</p>
                    </div>
                    <span className="rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-primary">
                      Online
                    </span>
                  </div>
                  <div className="flex h-36 items-end gap-2 rounded-2xl bg-background/70 p-4">
                    {[38, 54, 42, 68, 72, 88, 76, 96].map((height, index) => (
                      <motion.span
                        key={height + index}
                        initial={{ height: 16 }}
                        animate={{ height: shouldReduceMotion ? height : [20, height, height - 10, height] }}
                        transition={{
                          duration: 2.6,
                          delay: index * 0.12,
                          repeat: shouldReduceMotion ? 0 : Infinity,
                          repeatDelay: 2.4,
                        }}
                        className="flex-1 rounded-t-xl bg-gradient-to-t from-deep to-primary"
                        style={{ minHeight: 18 }}
                      />
                    ))}
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      ["98", "Performance"],
                      ["42%", "More leads"],
                      ["8d", "To launch"],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-2xl border bg-surface/60 p-3">
                        <p className="text-lg font-bold text-foreground">{value}</p>
                        <p className="text-xs text-muted">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-3xl border bg-card/80 p-5">
                    <div className="mb-4 flex items-center gap-3">
                      <Code2 className="h-5 w-5 text-primary" aria-hidden="true" />
                      <p className="text-sm font-semibold">Build pipeline</p>
                    </div>
                    <div className="space-y-2 rounded-2xl bg-slate-950 p-4 font-mono text-[11px] leading-5 text-slate-200">
                      {codeLines.map((line, index) => (
                        <motion.p
                          key={line}
                          initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
                          animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                          transition={{ delay: 0.55 + index * 0.09 }}
                        >
                          <span className="text-cyan-300">{String(index + 1).padStart(2, "0")}</span>{" "}
                          {line}
                        </motion.p>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl border bg-card/80 p-4">
                      <BarChart3 className="mb-4 h-5 w-5 text-primary" aria-hidden="true" />
                      <p className="text-2xl font-bold">312</p>
                      <p className="text-xs text-muted">Qualified actions</p>
                    </div>
                    <div className="rounded-3xl border bg-card/80 p-4">
                      <DatabaseZap className="mb-4 h-5 w-5 text-primary" aria-hidden="true" />
                      <p className="text-2xl font-bold">14</p>
                      <p className="text-xs text-muted">Automated flows</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
