const capabilities = [
  "Websites",
  "Web Apps",
  "Landing Pages",
  "Automations",
  "Dashboards",
  "Client Portals",
  "SEO-Ready Builds",
  "Fast Deployment",
];

export function CapabilityStrip() {
  return (
    <section className="border-y bg-surface/45 py-5" aria-label="Capabilities">
      <div className="relative mx-auto max-w-7xl overflow-hidden px-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max animate-marquee gap-3">
          {[...capabilities, ...capabilities].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="rounded-full border bg-card/70 px-5 py-2 text-sm font-semibold text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
