"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -18,
    scale: 0.96,
    filter: "blur(10px)",
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.28,
      ease: "easeOut",
      staggerChildren: 0.055,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.97,
    filter: "blur(8px)",
    transition: {
      duration: 0.18,
      ease: "easeIn",
    },
  },
};

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    x: -14,
    y: 8,
  },
  open: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.24,
      ease: "easeOut",
    },
  },
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <motion.nav
        className="liquid-glass-strong relative mx-auto flex max-w-7xl items-center justify-between overflow-hidden rounded-full border px-4 py-3"
        aria-label="Primary navigation"
        initial={shouldReduceMotion ? false : { opacity: 0, y: -24, scale: 0.96, filter: "blur(12px)" }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ type: "spring", stiffness: 300, damping: 24, mass: 0.8 }}
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-[-35%] w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent blur-sm"
          initial={shouldReduceMotion ? false : { x: "0%", opacity: 0 }}
          animate={shouldReduceMotion ? undefined : { x: "430%", opacity: [0, 1, 0] }}
          transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 3.5 }}
        />
        <motion.div whileHover={shouldReduceMotion ? undefined : { scale: 1.05, rotate: -2 }} whileTap={{ scale: 0.96 }}>
          <Link href="/" className="relative z-10 flex items-center gap-3" aria-label="Kapa Software Group home">
          <BrandLogo priority />
          </Link>
        </motion.div>

        <motion.div
          className="liquid-pill relative z-10 hidden items-center gap-1 rounded-full border px-1.5 py-1.5 lg:flex"
          initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.35, ease: "easeOut" }}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <motion.div
                key={item.label}
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 520, damping: 24 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group relative block overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition hover:text-foreground",
                    isActive ? "text-foreground" : "text-muted",
                  )}
                >
                  <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-cyan-200/75 transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="absolute inset-y-0 left-[-65%] w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 blur-[1px] transition-all duration-500 group-hover:left-[120%] group-hover:opacity-100" />
                  {isActive ? (
                    <motion.span
                      layoutId="nav-slider"
                      className="absolute inset-0 rounded-full border border-white/20 bg-[rgb(var(--primary)/0.22)] shadow-[inset_1px_1px_0_rgb(255_255_255/0.28),inset_-1px_-1px_0_rgb(2_6_23/0.12),0_8px_32px_rgb(56_189_248/0.28)] backdrop-blur-xl"
                      animate={shouldReduceMotion ? undefined : { boxShadow: ["0 8px 26px rgb(56 189 248 / 0.18)", "0 10px 40px rgb(103 232 249 / 0.38)", "0 8px 26px rgb(56 189 248 / 0.18)"] }}
                      transition={{ layout: { type: "spring", stiffness: 520, damping: 28 }, boxShadow: { duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="relative z-10 hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <motion.div whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              className="group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full border border-primary/55 bg-[rgb(var(--primary)/0.58)] px-5 text-sm font-bold text-slate-950 shadow-[inset_1px_1px_0_rgb(255_255_255/0.42),inset_-1px_-1px_0_rgb(2_6_23/0.12),0_10px_32px_rgb(56_189_248/0.24)] backdrop-blur-xl transition hover:bg-[rgb(var(--primary)/0.72)] hover:shadow-[inset_1px_1px_0_rgb(255_255_255/0.5),inset_-1px_-1px_0_rgb(2_6_23/0.14),0_16px_46px_rgb(56_189_248/0.42)] dark:text-slate-950"
              href="/contact"
            >
              <span className="absolute inset-0 bg-gradient-to-b from-white/34 via-white/10 to-transparent" />
              <span className="absolute inset-y-0 left-[-70%] w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/55 to-transparent transition-all duration-500 group-hover:left-[125%]" />
              <span className="relative z-10">Start a Project</span>
            </Link>
          </motion.div>
        </div>

        <div className="relative z-10 flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <motion.button
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border bg-surface/70 text-foreground transition hover:border-primary/60 hover:bg-primary/10"
            onClick={() => setOpen((value) => !value)}
            whileHover={shouldReduceMotion ? undefined : { scale: 1.08, rotate: 3 }}
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={shouldReduceMotion ? false : { opacity: 0, rotate: -90, scale: 0.6 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, rotate: 0, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial="closed"
            animate="open"
            exit="exit"
            variants={menuVariants}
            style={{ transformOrigin: "top right" }}
            className="liquid-glass-strong mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border p-4 lg:hidden"
          >
            <motion.div
              aria-hidden="true"
              className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/80 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute inset-y-0 left-[-40%] w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={shouldReduceMotion ? false : { x: "0%", opacity: 0 }}
              animate={shouldReduceMotion ? undefined : { x: "300%", opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, ease: "easeInOut", delay: 0.08 }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/25 blur-3xl"
              initial={{ opacity: 0, scale: 0.75 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.32 }}
            />
            <div className="grid gap-2">
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  whileHover={shouldReduceMotion ? undefined : { x: 9, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative block overflow-hidden rounded-2xl px-4 py-3 text-sm font-medium transition hover:bg-primary/10 hover:text-foreground",
                      pathname === item.href ? "bg-primary/10 text-foreground" : "text-muted",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    <span
                      className={cn(
                        "absolute inset-y-2 left-0 w-1 origin-y rounded-full bg-primary transition-transform duration-300 group-hover:scale-y-100",
                        pathname === item.href ? "scale-y-100" : "scale-y-0",
                      )}
                    />
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  className="group relative mt-2 inline-flex h-11 w-full items-center justify-center overflow-hidden rounded-full border border-primary/55 bg-[rgb(var(--primary)/0.58)] px-5 text-sm font-bold text-slate-950 shadow-[inset_1px_1px_0_rgb(255_255_255/0.42),inset_-1px_-1px_0_rgb(2_6_23/0.12),0_10px_32px_rgb(56_189_248/0.24)] backdrop-blur-xl transition hover:bg-[rgb(var(--primary)/0.72)] dark:text-slate-950"
                  href="/contact"
                  onClick={() => setOpen(false)}
                >
                  <span className="absolute inset-0 bg-gradient-to-b from-white/34 via-white/10 to-transparent" />
                  <span className="absolute inset-y-0 left-[-70%] w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/55 to-transparent transition-all duration-500 group-hover:left-[125%]" />
                  <span className="relative z-10">Start a Project</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
