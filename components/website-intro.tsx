"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const INTRO_KEY = "kapa-intro-seen";

export function WebsiteIntro() {
  const [show, setShow] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let timer: number | undefined;

    const frame = window.requestAnimationFrame(() => {
      const hasSeenIntro = sessionStorage.getItem(INTRO_KEY) === "true";

      if (hasSeenIntro) {
        return;
      }

      setShow(true);
      sessionStorage.setItem(INTRO_KEY, "true");

      const duration = shouldReduceMotion ? 700 : 2600;
      timer = window.setTimeout(() => setShow(false), duration);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-slate-950 text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: "blur(10px)" }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <motion.div
            aria-hidden="true"
            className="absolute inset-y-0 left-[-25%] w-1/3 skew-x-[-16deg] bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent blur-sm"
            initial={shouldReduceMotion ? false : { x: "0%", opacity: 0 }}
            animate={shouldReduceMotion ? undefined : { x: "380%", opacity: [0, 1, 0] }}
            transition={{ duration: 1.35, ease: "easeInOut", delay: 0.25 }}
          />

          <div className="relative flex flex-col items-center px-6 text-center">
            <motion.div
              className="absolute h-56 w-56 rounded-full border border-cyan-300/20"
              initial={shouldReduceMotion ? false : { scale: 0.7, opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { scale: [0.7, 1.08, 1], opacity: [0, 0.65, 0.28] }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <motion.div
              className="relative flex h-32 w-28 items-center justify-center sm:h-40 sm:w-36"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.78, rotate: -6 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <Image
                src="/brand/kapa-mark.png"
                alt="Kapa Software Group"
                width={587}
                height={698}
                priority
                loading="eager"
                className="h-full w-full object-contain drop-shadow-[0_0_42px_rgb(103_232_249_/_0.45)]"
              />
            </motion.div>

            <motion.div
              className="mt-8 h-px w-56 overflow-hidden bg-white/10"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.65 }}
            >
              <motion.div
                className="h-full bg-cyan-300"
                initial={shouldReduceMotion ? false : { x: "-100%" }}
                animate={shouldReduceMotion ? undefined : { x: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut", delay: 0.72 }}
              />
            </motion.div>

            <motion.p
              className="mt-5 text-sm font-black uppercase tracking-[0.38em] text-cyan-100 sm:text-base"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 1.05 }}
            >
              KAPA
            </motion.p>
            <motion.p
              className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300 sm:text-sm"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 1.22 }}
            >
              Software Group
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
