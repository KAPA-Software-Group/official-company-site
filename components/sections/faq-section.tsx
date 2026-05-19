"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { SectionShell } from "@/components/sections/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <SectionShell className="bg-surface/35" narrow>
      <SectionHeading title="Questions before we start." />

      <div className="liquid-glass mt-12 divide-y overflow-hidden rounded-3xl border">
        {faqs.map((faq, index) => {
          const isOpen = active === index;

          return (
            <div key={faq.question}>
              <button
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-7"
                aria-expanded={isOpen}
                onClick={() => setActive(isOpen ? -1 : index)}
              >
                <span className="text-base font-bold text-foreground">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-primary transition-transform",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-6 text-sm leading-7 text-muted sm:px-7">
                      {faq.answer}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}
