import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
  narrow?: boolean;
};

export function SectionShell({
  children,
  id,
  className,
  containerClassName,
  narrow = false,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28", className)}>
      <div className={cn("mx-auto", narrow ? "max-w-4xl" : "max-w-7xl", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
