import { HeroSplineScene } from "@/components/visuals/hero-spline-scene";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  showVisual?: boolean;
};

export function PageHero({ eyebrow, title, subtitle, showVisual = false }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-radial-blue px-4 pb-16 pt-36 sm:pt-40 lg:pb-20 lg:pt-44">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div className={showVisual ? undefined : "lg:col-span-2"}>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-8 text-muted">{subtitle}</p>
        </div>
        {showVisual ? <HeroSplineScene /> : null}
      </div>
    </section>
  );
}
