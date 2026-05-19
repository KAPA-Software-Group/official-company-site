import { SectionShell } from "@/components/sections/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/visuals/reveal";
import { processSteps } from "@/lib/site-content";

export function ProcessSection() {
  return (
    <SectionShell id="process">
      <SectionHeading title="A clear process from idea to launch." />

      <div className="relative mt-16">
        <div className="absolute left-4 top-0 h-full w-px bg-border/50 md:left-0 md:right-0 md:top-8 md:mx-auto md:h-px md:w-full" />
        <div className="grid gap-8 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.title}
              className="relative pl-12 md:pl-0"
              delay={index * 0.08}
            >
              <div className="liquid-pill absolute left-0 top-1 grid h-9 w-9 place-items-center rounded-full border text-sm font-bold text-primary shadow-glow md:relative md:left-auto md:top-auto md:mx-auto">
                {index + 1}
              </div>
              <div className="liquid-glass rounded-3xl border p-5 md:mt-7">
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
