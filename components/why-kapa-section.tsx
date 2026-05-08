"use client";

import { motion } from "framer-motion";
import { Blocks, BrainCircuit, IterationCcw, Layers3 } from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const values = [
  {
    title: "Business-first thinking",
    description:
      "Every interface and feature is shaped around the outcome it needs to create.",
    icon: BrainCircuit,
  },
  {
    title: "Modern technical stack",
    description:
      "Fast, maintainable foundations built with tools that scale beyond launch.",
    icon: Blocks,
  },
  {
    title: "Clean design systems",
    description:
      "Reusable visual patterns that make the product feel sharp and consistent.",
    icon: Layers3,
  },
  {
    title: "Fast iteration",
    description:
      "Focused releases, practical feedback loops, and improvements that keep momentum.",
    icon: IterationCcw,
  },
];

export function WhyKapaSection() {
  return (
    <section id="about" className="bg-surface/35 px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Practical execution with a modern software mindset." />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.42, delay: index * 0.07 }}
            >
              <Card className="h-full p-6 hover:-translate-y-1 hover:border-primary/55 hover:shadow-glow">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
