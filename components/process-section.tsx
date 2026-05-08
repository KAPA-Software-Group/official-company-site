"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    title: "Discover",
    description:
      "We define goals, users, competitors, features, and the business outcome.",
  },
  {
    title: "Design",
    description:
      "We create the visual direction, page structure, and core user flows.",
  },
  {
    title: "Build",
    description:
      "We develop a fast, responsive, scalable product using a modern stack.",
  },
  {
    title: "Launch",
    description:
      "We test, deploy, connect analytics, and prepare the site for real users.",
  },
  {
    title: "Optimize",
    description:
      "We improve based on feedback, performance, and business needs.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="A clear process from idea to launch." />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-border/50 md:left-0 md:right-0 md:top-8 md:mx-auto md:h-px md:w-full" />
          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.42, delay: index * 0.08 }}
                className="relative pl-12 md:pl-0"
              >
                <div className="absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full border bg-background text-sm font-bold text-primary shadow-glow md:relative md:left-auto md:top-auto md:mx-auto">
                  {index + 1}
                </div>
                <div className="rounded-3xl border bg-card/70 p-5 md:mt-7">
                  <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
