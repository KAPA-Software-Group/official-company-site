type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="page-wash border-b px-5 pb-14 pt-32 sm:px-6 sm:pb-20 sm:pt-40 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[1fr_20rem] lg:items-end lg:gap-16">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-primary">{eyebrow}</p>
          <h1 className="mt-6 max-w-5xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-[4.5rem]">
            {title}
          </h1>
        </div>
        <p className="border-l border-primary/45 pl-5 text-base leading-7 text-muted">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
