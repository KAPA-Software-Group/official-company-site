"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border bg-surface/75 px-4 py-3 shadow-[0_18px_70px_rgb(2_6_23/0.14)] backdrop-blur-2xl dark:bg-surface/58"
        aria-label="Primary navigation"
      >
        <a href="#" className="flex items-center gap-3" aria-label="Kapa Software Group home">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-primary text-sm font-black text-slate-950 shadow-glow">
            K
          </span>
          <span className="text-sm font-bold tracking-tight sm:text-base">
            Kapa Software Group
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-sm font-medium text-muted transition hover:text-foreground"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a className={cn(buttonVariants({ size: "sm" }))} href="#contact">
            Start a Project
          </a>
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border bg-surface/92 p-4 shadow-[0_18px_70px_rgb(2_6_23/0.16)] backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-muted transition hover:bg-primary/10 hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                className={cn(buttonVariants({ className: "mt-2 w-full" }))}
                href="#contact"
                onClick={() => setOpen(false)}
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
