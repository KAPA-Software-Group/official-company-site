import type * as React from "react";

import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border bg-card/80 shadow-[0_24px_70px_rgb(2_6_23/0.08)] transition-colors dark:shadow-[0_24px_70px_rgb(0_0_0/0.24)]",
        className,
      )}
      {...props}
    />
  );
}
