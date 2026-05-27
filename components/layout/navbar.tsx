"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { BrandLogo } from "@/components/layout/brand-logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navItems, routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-0 sm:px-4">
      <motion.nav
        className="nav-glass relative mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between overflow-hidden border-b px-5 sm:border-x sm:px-6 lg:px-8"
        aria-label="Primary navigation"
        initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: "easeOut" }}
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-[-26%] w-1/4 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={shouldReduceMotion ? undefined : { x: ["0%", "540%"], opacity: [0, 0.55, 0] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 7, ease: "easeInOut" }}
        />

        <Link href={routes.home} className="relative z-10" aria-label="Kapa Software home">
          <BrandLogo priority />
        </Link>

        <div className="relative z-10 hidden h-full items-center lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "relative flex h-full items-center px-4 text-sm font-medium transition hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted",
                )}
              >
                {isActive ? (
                  <>
                    <motion.span
                      layoutId="nav-panel"
                      className="absolute inset-x-1 inset-y-4 rounded-md bg-primary/[0.08]"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 bottom-0 h-px bg-primary"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  </>
                ) : null}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="relative z-10 hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href={routes.contact}
            className="relative inline-flex h-10 items-center justify-center overflow-hidden rounded-md border border-primary/40 bg-primary px-5 text-sm font-semibold text-slate-950 transition hover:bg-accent"
          >
            Start a Project
          </Link>
        </div>

        <div className="relative z-10 flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-md border bg-surface/45 text-foreground transition hover:border-primary/45"
            onClick={() => setOpen((value) => !value)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={shouldReduceMotion ? false : { opacity: 0, rotate: -45 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, rotate: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, rotate: 45 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="nav-glass mx-auto max-w-7xl border-b px-5 pb-5 pt-2 sm:border-x sm:px-6 lg:hidden"
          >
            <div className="grid">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "border-b px-1 py-3 text-sm transition",
                    pathname === item.href ? "text-primary" : "text-muted hover:text-foreground",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="mt-4 inline-flex h-11 items-center justify-center rounded-md bg-primary text-sm font-semibold text-slate-950"
                href={routes.contact}
                onClick={() => setOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
