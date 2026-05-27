import { SectionShell } from "@/components/sections/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/visuals/reveal";
import { processSteps } from "@/lib/site-content";

export function ProcessSection() {
  return (
    <SectionShell id="process" className="border-b bg-surface/[0.16]">
      <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
        <SectionHeading
          eyebrow="Working Process"
          align="left"
          title="A short route from ambiguity to delivery."
          subtitle="Each stage creates decisions the next stage can use."
        />

        <ol className="grid gap-x-8 border-t sm:grid-cols-2">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.04}>
              <li className="min-h-[10rem] border-b py-6">
                <p className="text-xs font-medium text-primary">0{index + 1}</p>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-foreground">{step.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-muted">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
