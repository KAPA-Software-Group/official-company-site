"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
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

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className="liquid-glass-strong mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3"
        aria-label="Primary navigation"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="Kapa Software Group home">
          <BrandLogo priority />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "group relative text-sm font-medium transition hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-px w-full origin-left bg-primary transition-transform duration-300 group-hover:scale-x-100",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link className={cn(buttonVariants({ size: "sm" }))} href="/contact">
            Start a Project
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border bg-surface/70 text-foreground transition hover:border-primary/60 hover:bg-primary/10"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

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
              className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: "easeOut" }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl"
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
                  whileHover={{ x: 6 }}
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
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  className={cn(buttonVariants({ className: "mt-2 w-full" }))}
                  href="/contact"
                  onClick={() => setOpen(false)}
                >
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
