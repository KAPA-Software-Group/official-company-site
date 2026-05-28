"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Globe, Lock, PenLine } from "lucide-react";

import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";

const PHASES = [
  { id: "idea", label: "Idea", icon: PenLine },
  { id: "build", label: "Build", icon: Code2 },
  { id: "live", label: "Live", icon: Globe },
] as const;

const PHASE_DURATION = 2800;

const URL_BY_PHASE = ["notebook.txt", "localhost:3000", "kapa.dev/your-idea"];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      setPhase(2);
      return;
    }
    const timer = setInterval(
      () => setPhase((p) => (p + 1) % PHASES.length),
      PHASE_DURATION,
    );
    return () => clearInterval(timer);
  }, [shouldReduceMotion]);

  const fadeUp = {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 18 },
    animate: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
  };

  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(120%_120%_at_50%_0%,#0a262c_0%,#050b10_58%,#02060b_100%)] text-white">
      {/* Full-bleed background video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Moody dark overlay so the page feels cinematic and the text reads clearly. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[rgb(2_6_11/0.82)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(115%_90%_at_50%_50%,transparent_35%,rgb(2_6_11/0.6)_100%)]"
      />

      {/* faint dot grid for depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.4] [background-image:radial-gradient(rgb(255_255_255/0.05)_0.6px,transparent_0.6px)] [background-size:5px_5px]"
      />

      <div className="mx-auto grid min-h-[100svh] max-w-6xl items-center gap-14 px-5 py-24 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Copy */}
        <div className="flex flex-col items-start text-left">
          <motion.span
            {...fadeUp}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/70"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--primary))]" />
            Idea to deployed
          </motion.span>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
            className="mt-6 text-balance font-sans text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Your idea,{" "}
            <span className="relative whitespace-nowrap text-[rgb(var(--primary))]">
              live
              <span className="ml-2 inline-flex h-2.5 w-2.5 translate-y-[-0.35em] rounded-full bg-emerald-400 align-middle shadow-[0_0_12px_rgb(52_211_153/0.9)]">
                {!shouldReduceMotion && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-emerald-400"
                    animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
                    transition={{ duration: 1.6, ease: "easeOut", repeat: Infinity }}
                  />
                )}
              </span>
            </span>{" "}
            on the web.
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.16 }}
            className="mt-6 max-w-md text-pretty text-base font-light text-white/65 sm:text-lg"
          >
            Hand us a rough note, a sketch, or a few lines of code. We turn it
            into a polished website — designed, built, and live on the internet.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="active:scale-[0.98]">
              <Link href={routes.contact}>
                Bring my idea online
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="border-white/15 text-white hover:bg-white/[0.06] active:scale-[0.98]"
            >
              <Link href={routes.work}>See the work</Link>
            </Button>
          </motion.div>
        </div>

        {/* Transformation mockup */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="w-full"
        >
          <PhaseTracker phase={phase} reduce={shouldReduceMotion} />
          <BrowserWindow phase={phase} reduce={shouldReduceMotion} />
        </motion.div>
      </div>
    </section>
  );
}

function PhaseTracker({ phase, reduce }: { phase: number; reduce: boolean | null }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      {PHASES.map((p, i) => {
        const Icon = p.icon;
        const active = i === phase;
        const done = i < phase;
        return (
          <div key={p.id} className="flex flex-1 items-center gap-2">
            <motion.div
              animate={
                reduce
                  ? undefined
                  : { scale: active ? 1 : 0.96, opacity: active || done ? 1 : 0.5 }
              }
              transition={{ type: "spring", stiffness: 420, damping: 26 }}
              className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
                active
                  ? "border-[rgb(var(--primary))]/60 bg-[rgb(var(--primary))]/15 text-[rgb(var(--primary))]"
                  : "border-white/10 bg-white/[0.03] text-white/55"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {p.label}
            </motion.div>
            {i < PHASES.length - 1 && (
              <div className="relative h-px flex-1 overflow-hidden bg-white/10">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-[rgb(var(--primary))]"
                  animate={{ width: i < phase ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function BrowserWindow({ phase, reduce }: { phase: number; reduce: boolean | null }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a1216]/85 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)] backdrop-blur">
      {/* top bar */}
      <div className="flex items-center gap-3 border-b border-white/[0.08] bg-white/[0.02] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-white/[0.08] bg-black/30 px-3 py-1.5 text-xs text-white/55">
          {phase === 2 ? (
            <Lock className="h-3 w-3 shrink-0 text-emerald-400" />
          ) : (
            <span className="h-3 w-3 shrink-0" />
          )}
          <AnimatePresence mode="wait">
            <motion.span
              key={phase}
              initial={reduce ? false : { opacity: 0, y: 4 }}
              animate={
                reduce
                  ? undefined
                  : { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } }
              }
              exit={
                reduce
                  ? undefined
                  : { opacity: 0, y: -4, transition: { duration: 0.15, ease: "easeIn" } }
              }
              className="truncate font-mono"
            >
              {URL_BY_PHASE[phase]}
            </motion.span>
          </AnimatePresence>
        </div>
        {phase === 2 && (
          <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300 sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live
          </span>
        )}
      </div>

      {/* stage area */}
      <div className="relative h-[280px] sm:h-[320px]">
        <AnimatePresence mode="wait">
          {phase === 0 && <IdeaStage key="idea" reduce={reduce} />}
          {phase === 1 && <BuildStage key="build" reduce={reduce} />}
          {phase === 2 && <LiveStage key="live" reduce={reduce} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

const stageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.28, ease: "easeIn" } },
} as const;

function Stage({
  children,
  reduce,
  className,
}: {
  children: React.ReactNode;
  reduce: boolean | null;
  className?: string;
}) {
  return (
    <motion.div
      variants={reduce ? undefined : stageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`absolute inset-0 p-6 ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

function IdeaStage({ reduce }: { reduce: boolean | null }) {
  const lines = [
    { w: "72%", rot: "-0.6deg" },
    { w: "90%", rot: "0.4deg" },
    { w: "55%", rot: "-0.3deg" },
    { w: "80%", rot: "0.7deg" },
  ];
  return (
    <Stage reduce={reduce} className="flex flex-col">
      <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/40">
        <PenLine className="h-3.5 w-3.5" />
        rough notes
      </div>
      <div className="relative flex-1 rounded-lg border border-amber-200/15 bg-amber-100/[0.04] p-5">
        <div className="space-y-3.5">
          {lines.map((l, i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { opacity: 0, width: 0 }}
              animate={reduce ? undefined : { opacity: 1, width: l.w }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 + i * 0.04 }}
              style={{ rotate: l.rot }}
              className="h-2.5 rounded-full bg-amber-100/25"
            />
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2 text-sm text-amber-100/50">
          <span className="text-base">✏️</span>
          “a clean site for my idea…”
        </div>
      </div>
    </Stage>
  );
}

function BuildStage({ reduce }: { reduce: boolean | null }) {
  const code: { indent: number; tokens: { t: string; c: string }[] }[] = [
    { indent: 0, tokens: [{ t: "export default", c: "text-sky-300" }, { t: " function ", c: "text-white/50" }, { t: "Site", c: "text-[rgb(var(--primary))]" }, { t: "() {", c: "text-white/50" }] },
    { indent: 1, tokens: [{ t: "return ", c: "text-sky-300" }, { t: "(", c: "text-white/50" }] },
    { indent: 2, tokens: [{ t: "<Hero ", c: "text-emerald-300" }, { t: "title", c: "text-amber-200" }, { t: "=", c: "text-white/40" }, { t: '"Your idea"', c: "text-orange-300" }, { t: " />", c: "text-emerald-300" }] },
    { indent: 2, tokens: [{ t: "<Deploy ", c: "text-emerald-300" }, { t: "to", c: "text-amber-200" }, { t: "=", c: "text-white/40" }, { t: '"web"', c: "text-orange-300" }, { t: " />", c: "text-emerald-300" }] },
    { indent: 1, tokens: [{ t: ")", c: "text-white/50" }] },
    { indent: 0, tokens: [{ t: "}", c: "text-white/50" }] },
  ];
  return (
    <Stage reduce={reduce} className="flex flex-col">
      <div className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/40">
        <Code2 className="h-3.5 w-3.5" />
        building
      </div>
      <div className="flex-1 rounded-lg border border-white/[0.08] bg-black/40 p-4 font-mono text-[13px] leading-relaxed">
        {code.map((line, i) => (
          <motion.div
            key={i}
            initial={reduce ? false : { opacity: 0, x: -8 }}
            animate={reduce ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.25, ease: "easeOut", delay: 0.08 + i * 0.045 }}
            className="flex"
          >
            <span className="mr-4 w-4 shrink-0 select-none text-right text-white/25">
              {i + 1}
            </span>
            <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
              {line.tokens.map((tok, j) => (
                <span key={j} className={tok.c}>
                  {tok.t}
                </span>
              ))}
              {i === code.length - 1 && !reduce && (
                <motion.span
                  className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[2px] bg-[rgb(var(--primary))]"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
                />
              )}
            </span>
          </motion.div>
        ))}
      </div>
    </Stage>
  );
}

function LiveStage({ reduce }: { reduce: boolean | null }) {
  return (
    <Stage reduce={reduce} className="bg-[radial-gradient(120%_100%_at_50%_0%,rgb(var(--primary)/0.12),transparent_70%)]">
      <div className="flex h-full flex-col rounded-lg border border-white/[0.08] bg-white/[0.03] p-5">
        {/* mini nav */}
        <div className="flex items-center justify-between">
          <div className="h-2.5 w-16 rounded-full bg-[rgb(var(--primary))]" />
          <div className="flex gap-2">
            <div className="h-2 w-8 rounded-full bg-white/20" />
            <div className="h-2 w-8 rounded-full bg-white/20" />
            <div className="h-2 w-10 rounded-full bg-white/[0.35]" />
          </div>
        </div>
        {/* hero block */}
        <div className="mt-7 space-y-3">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="h-4 w-3/4 rounded-md bg-white/80"
          />
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.16 }}
            className="h-4 w-1/2 rounded-md bg-white/45"
          />
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 420, damping: 22, delay: 0.24 }}
            className="mt-2 inline-flex h-7 w-28 items-center justify-center rounded-full bg-[rgb(var(--primary))] text-[10px] font-semibold text-slate-950"
          >
            Get started
          </motion.div>
        </div>
        {/* content tiles */}
        <div className="mt-auto grid grid-cols-3 gap-2.5 pt-5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.3 + i * 0.04 }}
              className="h-12 rounded-md border border-white/[0.06] bg-white/[0.05]"
            />
          ))}
        </div>
      </div>
    </Stage>
  );
}
