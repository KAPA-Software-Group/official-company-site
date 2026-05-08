"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import { HeroSplineScene } from "@/components/hero-spline-scene";
import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button";
import { ShaderAnimation } from "@/components/ui/shader-animation";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-radial-blue px-4 pb-20 pt-36 sm:pt-40 lg:min-h-screen lg:pb-28 lg:pt-44">
      <div className="absolute inset-0 -z-20 opacity-[0.18] mix-blend-screen dark:opacity-[0.28]">
        <ShaderAnimation className="h-full w-full" />
      </div>
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
            <LiquidButton onClick={() => (window.location.href = "#contact")}>
              Start a Project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </LiquidButton>
            <MetalButton variant="primary" onClick={() => (window.location.href = "#services")}>
              View Services
            </MetalButton>
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

        <HeroSplineScene />
      </div>
    </section>
  );
}
