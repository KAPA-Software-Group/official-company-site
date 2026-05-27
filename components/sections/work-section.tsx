import type { ReactNode } from "react";

import { SectionShell } from "@/components/sections/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/visuals/reveal";
import { projects } from "@/lib/site-content";

function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border bg-background">
      <div className="flex items-center gap-3 border-b bg-card/65 px-3 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-border/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-border/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-border/25" />
        </span>
        <span className="rounded-md bg-surface px-3 py-1 text-[10px] text-muted">{url}</span>
      </div>
      {children}
    </div>
  );
}

function HealthcarePreview() {
  return (
    <BrowserFrame url="clinic.example/services">
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between border-b pb-4 text-[10px] text-muted">
          <span className="font-semibold tracking-[0.18em] text-foreground">CLINIC CARE</span>
          <span className="hidden gap-4 sm:flex">
            <span>Services</span>
            <span>Providers</span>
            <span>Patient resources</span>
          </span>
          <span className="rounded-full bg-primary px-3 py-1.5 text-background">Book visit</span>
        </div>
        <div className="grid gap-5 py-5 sm:grid-cols-[1.12fr_0.88fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary">Patient-first care</p>
            <p className="mt-2 max-w-[15rem] text-lg font-semibold leading-tight text-foreground sm:text-xl">
              Find the right service and request an appointment.
            </p>
            <div className="mt-4 flex gap-2">
              <span className="rounded-full bg-primary px-3 py-1.5 text-[10px] text-background">Request booking</span>
              <span className="rounded-full border px-3 py-1.5 text-[10px] text-muted">View services</span>
            </div>
          </div>
          <div className="grid gap-2">
            {["Primary care", "Physiotherapy", "Patient forms"].map((service) => (
              <div key={service} className="flex items-center justify-between rounded-lg border bg-card/55 px-3 py-2 text-[10px] text-foreground">
                <span>{service}</span>
                <span className="text-primary">View</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 border-t pt-4 text-center text-[10px] text-muted">
          <span>Provider profiles</span>
          <span>Insurance details</span>
          <span>Simple booking path</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

function SaasPreview() {
  return (
    <BrowserFrame url="product.example">
      <div className="p-4">
        <p className="text-[9px] uppercase tracking-[0.18em] text-primary">Launch page</p>
        <div className="mt-2 flex items-end justify-between gap-3">
          <p className="max-w-[11rem] text-sm font-semibold leading-tight text-foreground">
            Approvals without scattered follow-up.
          </p>
          <span className="rounded-full bg-primary px-2.5 py-1 text-[9px] text-background">Start trial</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["Requests", "Reviews", "Release"].map((feature) => (
            <div key={feature} className="rounded-md border bg-card/55 p-2">
              <div className="h-1.5 w-7 rounded-full bg-primary/35" />
              <p className="mt-2 text-[9px] text-muted">{feature}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-md border px-3 py-2 text-[9px] text-muted">
          <span className="text-primary">Plans</span>
          <span className="h-px flex-1 bg-border/10" />
          <span>Conversion tracking ready</span>
        </div>
      </div>
    </BrowserFrame>
  );
}

function OperationsPreview() {
  return (
    <BrowserFrame url="workspace.example/queue">
      <div className="grid grid-cols-[4.1rem_1fr] text-[9px]">
        <div className="border-r bg-card/45 p-3 text-muted">
          <p className="font-semibold text-foreground">Queue</p>
          <div className="mt-4 space-y-3">
            <p className="text-primary">Priorities</p>
            <p>Requests</p>
            <p>Reports</p>
          </div>
        </div>
        <div className="p-3">
          <div className="flex gap-2">
            {["Open", "In review", "Ready"].map((status) => (
              <span key={status} className="rounded-md border px-2 py-1 text-muted">{status}</span>
            ))}
          </div>
          <div className="mt-3 divide-y rounded-md border text-muted">
            {[
              ["Vendor review", "In review"],
              ["Client intake", "Ready"],
              ["Release checklist", "Open"],
            ].map(([task, status]) => (
              <div key={task} className="flex justify-between px-2 py-2">
                <span className="text-foreground">{task}</span>
                <span className="text-primary">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
      {tags.map((tag) => (
        <span key={tag} className="before:mr-2 before:text-primary before:content-['/']">
          {tag}
        </span>
      ))}
    </div>
  );
}

export function WorkSection() {
  const [featured, landingPage, dashboard] = projects;

  return (
    <SectionShell id="work" className="border-b bg-surface/[0.16]">
      <div className="grid gap-7 lg:grid-cols-[0.9fr_0.75fr] lg:items-end lg:justify-between">
        <SectionHeading
          align="left"
          eyebrow="Selected Work Formats"
          title="Digital products with clearer structure and stronger execution."
        />
        <p className="max-w-xl text-base leading-7 text-muted lg:justify-self-end">
          From public-facing websites to internal software, Kapa Software helps teams turn messy digital experiences into clean, usable systems.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[1.18fr_0.82fr]">
        <Reveal>
          <article className="editorial-surface min-w-0 overflow-hidden rounded-2xl p-4 sm:p-5">
            <HealthcarePreview />
            <div className="px-1 pb-2 pt-7 sm:px-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.23em] text-primary">{featured.category}</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-foreground">{featured.title}</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted">{featured.description}</p>
              <Tags tags={featured.tags} />
            </div>
          </article>
        </Reveal>

        <div className="grid gap-5">
          <Reveal delay={0.06}>
            <article className="editorial-surface min-w-0 overflow-hidden rounded-2xl p-4">
              <SaasPreview />
              <div className="px-1 pb-1 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">{landingPage.category}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-foreground">{landingPage.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{landingPage.description}</p>
                <Tags tags={landingPage.tags} />
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="editorial-surface min-w-0 overflow-hidden rounded-2xl p-4">
              <OperationsPreview />
              <div className="px-1 pb-1 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">{dashboard.category}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-foreground">{dashboard.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{dashboard.description}</p>
                <Tags tags={dashboard.tags} />
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
