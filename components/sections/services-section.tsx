import { SectionShell } from "@/components/sections/section-shell";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealGroupItem } from "@/components/visuals/reveal";
import { services } from "@/lib/site-content";

export function ServicesSection() {
  return (
    <SectionShell id="services">
      <SectionHeading
        title="Built for more than just a basic website."
        subtitle="We combine clean design, modern development, and business-focused execution to create digital systems that are fast, scalable, and easy to use."
      />

      <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <RevealGroupItem key={service.title}>
            <Card className="group relative h-full overflow-hidden p-6 hover:-translate-y-1 hover:border-primary/55 hover:shadow-glow">
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/16 blur-3xl" />
                <div className="absolute -bottom-20 left-8 h-40 w-40 rounded-full bg-accent/12 blur-3xl" />
              </div>
              <div className="relative">
                <div className="liquid-pill mb-7 grid h-12 w-12 place-items-center rounded-2xl border text-primary">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
              </div>
            </Card>
          </RevealGroupItem>
        ))}
      </RevealGroup>
    </SectionShell>
  );
}
