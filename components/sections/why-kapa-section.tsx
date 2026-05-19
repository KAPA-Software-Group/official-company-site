import { SectionShell } from "@/components/sections/section-shell";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/visuals/reveal";
import { kapaValues } from "@/lib/site-content";

export function WhyKapaSection() {
  return (
    <SectionShell id="about" className="bg-surface/35">
      <SectionHeading title="Practical execution with a modern software mindset." />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {kapaValues.map((value, index) => (
          <Reveal key={value.title} delay={index * 0.07}>
            <Card className="h-full p-6 hover:-translate-y-1 hover:border-primary/55 hover:shadow-glow">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border bg-primary/10 text-primary">
                <value.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{value.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
