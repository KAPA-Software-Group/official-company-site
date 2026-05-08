"use client";

import { motion } from "framer-motion";
import {
  AppWindow,
  CalendarCheck,
  Gauge,
  LayoutTemplate,
  PanelsTopLeft,
  Workflow,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    title: "Custom Websites",
    description:
      "High-performing marketing sites built with strong structure, clear messaging, and premium visual systems.",
    icon: PanelsTopLeft,
  },
  {
    title: "Web Applications",
    description:
      "Modern app interfaces, user flows, and product foundations for business-critical workflows.",
    icon: AppWindow,
  },
  {
    title: "Landing Pages",
    description:
      "Focused conversion pages for campaigns, launches, offers, and targeted service lines.",
    icon: LayoutTemplate,
  },
  {
    title: "Booking & Intake Systems",
    description:
      "Streamlined forms, booking flows, routing logic, and intake experiences that reduce manual work.",
    icon: CalendarCheck,
  },
  {
    title: "Business Automation",
    description:
      "Connected workflows that move data, trigger actions, and keep repetitive operations consistent.",
    icon: Workflow,
  },
  {
    title: "Dashboards & Client Portals",
    description:
      "Operational dashboards and secure client-facing systems for visibility, reporting, and service delivery.",
    icon: Gauge,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="px-4 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Built for more than just a basic website."
          subtitle="We combine clean design, modern development, and business-focused execution to create digital systems that are fast, scalable, and easy to use."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09 } },
          }}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 26 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Card className="group relative h-full overflow-hidden p-6 hover:-translate-y-1 hover:border-primary/55 hover:shadow-glow">
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/16 blur-3xl" />
                  <div className="absolute -bottom-20 left-8 h-40 w-40 rounded-full bg-accent/12 blur-3xl" />
                </div>
                <div className="relative">
                  <div className="mb-7 grid h-12 w-12 place-items-center rounded-2xl border bg-primary/10 text-primary">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
