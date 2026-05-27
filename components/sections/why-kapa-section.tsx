import { SectionShell } from "@/components/sections/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/visuals/reveal";
import { kapaValues } from "@/lib/site-content";

export function WhyKapaSection() {
  return (
    <SectionShell id="about" className="border-b">
      <div className="grid gap-12 lg:grid-cols-[0.88fr_1fr] lg:gap-20">
        <SectionHeading
          eyebrow="Approach"
          align="left"
          title="Taste supported by useful decisions."
          subtitle="A premium digital product is not decoration. It is clear language, considered structure, dependable code, and details that respect users."
        />

        <div className="grid gap-x-8 border-t sm:grid-cols-2">
          {kapaValues.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.05}>
              <article className="border-b py-7 sm:min-h-52">
                <value.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold tracking-[-0.02em] text-foreground">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{value.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
