import { capabilityCarouselItems } from "@/lib/site-content";

export function CapabilityStrip() {
  return (
    <section className="border-y bg-surface/45 py-4 sm:py-5" aria-label="Capabilities">
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-16 lg:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-16 lg:w-24" />
        <div className="flex w-max min-w-full animate-marquee gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8">
          {capabilityCarouselItems.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="whitespace-nowrap rounded-full border bg-card/70 px-3 py-2 text-xs font-semibold text-muted sm:px-5 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
