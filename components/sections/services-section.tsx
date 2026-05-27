import { SectionShell } from "@/components/sections/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/visuals/reveal";
import { services } from "@/lib/site-content";

export function ServicesSection() {
  return (
    <SectionShell id="services" className="border-b">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1fr] lg:gap-20">
        <SectionHeading
          align="left"
          eyebrow="Capabilities"
          title="Work shaped around what needs to improve."
          subtitle="The right format depends on the problem: a clearer presence, a product explanation, or a more useful operating tool."
          className="lg:sticky lg:top-32 lg:self-start"
        />

        <div className="divide-y border-t">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.045}>
              <article className="grid gap-4 py-7 sm:grid-cols-[3.25rem_1fr] sm:py-8">
                <div className="flex items-start gap-3 sm:block">
                  <span className="text-xs text-primary">0{index + 1}</span>
                  <service.icon className="ml-auto h-5 w-5 text-primary sm:ml-0 sm:mt-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-foreground sm:text-2xl">{service.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-muted sm:text-base">{service.description}</p>
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-primary">{service.output}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
