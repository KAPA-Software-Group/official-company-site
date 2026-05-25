type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-radial-blue px-4 pb-16 pt-36 sm:pt-40 lg:pb-20 lg:pt-44">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
