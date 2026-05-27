"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";

const ShaderAnimation = dynamic(
  () => import("@/components/visuals/shader-animation").then((mod) => mod.ShaderAnimation),
  { ssr: false },
);

type IdleCapableWindow = Pick<Window, "setTimeout" | "clearTimeout"> & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (requestId: number) => void;
};

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [showShader, setShowShader] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion !== false || showShader) return;

    const browserWindow: IdleCapableWindow = window;

    if (browserWindow.requestIdleCallback) {
      const requestId = browserWindow.requestIdleCallback(() => setShowShader(true), { timeout: 1200 });
      return () => browserWindow.cancelIdleCallback?.(requestId);
    }

    const timerId = browserWindow.setTimeout(() => setShowShader(true), 250);
    return () => browserWindow.clearTimeout(timerId);
  }, [shouldReduceMotion, showShader]);

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-32 text-white">
      <div className="absolute inset-0 -z-30 opacity-35 mix-blend-screen">
        {showShader ? <ShaderAnimation className="h-full w-full" disabled={shouldReduceMotion ?? false} /> : null}
      </div>

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

      <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.94 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6 flex h-20 w-16 items-center justify-center sm:mb-8 sm:h-32 sm:w-28"
        >
          <Image
            src="/brand/kapa-mark.png"
            alt="Kapa Software"
            width={587}
            height={698}
            priority
            loading="eager"
            className="h-full w-full object-contain drop-shadow-[0_0_34px_rgb(103_232_249_/_0.34)]"
          />
        </motion.div>
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
          className="text-balance text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          Build the digital system your business should have had from day one.
        </motion.h1>
      </div>
    </section>
  );
}
