import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-display text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-foreground sm:text-4xl lg:text-[3.1rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
