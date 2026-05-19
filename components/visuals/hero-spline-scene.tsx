"use client";

import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/visuals/spline-scene";
import { Spotlight } from "@/components/visuals/spotlight";

export function HeroSplineScene() {
  return (
    <div className="relative" aria-label="Interactive 3D service robot scene">
      <div
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <Card className="relative h-[360px] overflow-hidden border-primary/15 bg-black/[0.96] text-slate-50 shadow-[0_30px_110px_rgb(2_6_23/0.34)] sm:h-[420px] lg:h-[480px]">
        <div className="relative h-full overflow-hidden">
          <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#67E8F9" />

          <div className="relative h-full overflow-visible">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="h-full w-full origin-center scale-[0.68] sm:scale-[0.72] md:scale-[0.76]"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
