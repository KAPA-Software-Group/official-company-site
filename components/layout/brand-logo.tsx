import Image from "next/image";

import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  showText?: boolean;
};

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
  showText = true,
}: BrandLogoProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
        <Image
          src="/brand/kapa-mark.png"
          alt=""
          width={587}
          height={698}
          priority={priority}
          loading={priority ? "eager" : undefined}
          className={cn("h-full w-full object-contain", imageClassName)}
        />
      </span>
      {showText ? (
        <span className="font-display text-sm font-semibold tracking-[-0.02em] sm:text-base">
          Kapa Software
        </span>
      ) : null}
    </span>
  );
}
