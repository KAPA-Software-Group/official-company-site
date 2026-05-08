"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with growing service businesses, startups, local companies, and teams that need sharper websites or practical software systems.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "No. We build websites, web applications, dashboards, automations, portals, booking systems, and custom digital workflows.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can improve structure, visuals, performance, messaging, conversion paths, and technical foundations.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. Support can include maintenance, new pages, performance improvements, analytics, automation updates, and product iteration.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Simple websites often take a few weeks. Larger websites, applications, and systems depend on scope, integrations, and content readiness.",
  },
];

export function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-surface/35 px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Questions before we start." />

        <div className="mt-12 divide-y rounded-3xl border bg-card/70">
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
      </div>
    </section>
  );
}
