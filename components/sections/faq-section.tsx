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
    <SectionShell>
      <div className="grid gap-12 lg:grid-cols-[0.68fr_1fr] lg:gap-20">
        <SectionHeading
          eyebrow="Questions"
          align="left"
          title="Useful detail before a project starts."
        />

        <div className="border-t">
          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div key={faq.question} className="border-b">
                <button
                  className="flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
                  aria-expanded={isOpen}
                  onClick={() => setActive(isOpen ? -1 : index)}
                >
                  <span className="text-base font-medium text-foreground">{faq.question}</span>
                  <ChevronDown
                    className={cn("h-4 w-4 shrink-0 text-primary transition-transform", isOpen && "rotate-180")}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pb-6 text-sm leading-7 text-muted">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
