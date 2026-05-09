"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";

export function PageTransition({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={pathname}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 10, filter: "blur(5px)" }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6, filter: "blur(3px)" }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
