"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const projects = [
  {
    title: "Clinic Website Redesign",
    type: "Healthcare website",
    description:
      "A sharper service site structure with appointment-focused paths and trust-building content sections.",
    tags: ["Next.js", "SEO", "Booking"],
    bars: [38, 66, 52, 78],
  },
  {
    title: "SaaS Landing Page",
    type: "Product marketing",
    description:
      "A conversion-focused launch page with feature storytelling, pricing structure, and analytics setup.",
    tags: ["React", "Motion", "Analytics"],
    bars: [72, 42, 88, 62],
  },
  {
    title: "Operations Dashboard",
    type: "Internal software",
    description:
      "A clean operational command center for monitoring work, surfacing priorities, and reducing manual reporting.",
    tags: ["Dashboards", "API", "Automation"],
    bars: [48, 82, 58, 92],
  },
];

export function WorkSection() {
  return (
    <section id="work" className="bg-surface/35 px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected project examples"
          title="Digital products designed to look sharp and perform."
          subtitle="Example project formats that show how Kapa Software Group can shape websites, product pages, and internal tools."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="group h-full overflow-hidden p-4 hover:-translate-y-1 hover:border-primary/55 hover:shadow-glow">
                <div className="relative overflow-hidden rounded-[1.4rem] border bg-background/80 p-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-accent/10 opacity-80" />
                  <div className="relative rounded-2xl border bg-surface/75 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="h-2.5 w-24 rounded-full bg-primary/45" />
                      <div className="h-7 w-7 rounded-full border bg-card" />
                    </div>
                    <div className="grid grid-cols-[0.55fr_1fr] gap-3">
                      <div className="space-y-2">
                        <div className="h-16 rounded-2xl bg-primary/15" />
                        <div className="h-16 rounded-2xl bg-accent/12" />
                      </div>
                      <div className="flex h-36 items-end gap-2 rounded-2xl bg-background/70 p-3">
                        {project.bars.map((bar) => (
                          <span
                            key={bar}
                            className="flex-1 rounded-t-xl bg-gradient-to-t from-deep to-primary transition-all duration-500 group-hover:from-primary group-hover:to-accent"
                            style={{ height: `${bar}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-primary">{project.type}</p>
                    <ArrowUpRight className="h-5 w-5 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border bg-surface/70 px-3 py-1 text-xs font-semibold text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
