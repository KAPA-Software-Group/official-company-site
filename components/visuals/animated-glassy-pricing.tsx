"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import type { EngagementPlan } from "@/lib/site-content";
import { routes } from "@/lib/routes";

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const PricingCard = ({
  planName,
  description,
  price,
  features,
  buttonText,
  isPopular = false,
  buttonVariant = "primary",
}: EngagementPlan) => {
  const cardClasses = `
    liquid-glass backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex-1 w-full max-w-xs px-7 py-8 flex flex-col transition-all duration-300
    from-black/5 to-black/0 border border-black/10
    dark:from-white/10 dark:to-white/5 dark:border-white/10 dark:backdrop-brightness-[0.91]
    ${isPopular ? "scale-[1.02] relative ring-2 ring-cyan-400/20 dark:from-white/20 dark:to-white/10 dark:border-cyan-400/30 shadow-2xl" : ""}
  `;
  const buttonClasses = `
    mt-auto w-full py-2.5 rounded-xl font-semibold text-[14px] transition font-sans
    ${
      buttonVariant === "primary"
        ? "bg-cyan-400 hover:bg-cyan-300 text-slate-950"
        : "bg-black/10 hover:bg-black/20 text-foreground border border-black/20 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/20"
    }
  `;

  return (
    <div className={cardClasses.trim()}>
      {isPopular ? (
        <div className="absolute -top-4 right-4 rounded-full bg-cyan-400 px-3 py-1 text-[12px] font-semibold text-black">
          Most Popular
        </div>
      ) : null}
      <div className="mb-3">
        <h3 className="text-[36px] font-extralight tracking-[-0.03em] text-foreground sm:text-[42px]">
          {planName}
        </h3>
        <p className="mt-1 text-[15px] text-foreground/70">{description}</p>
      </div>
      <div className="my-6 flex items-baseline gap-2">
        <span className="text-[42px] font-extralight text-foreground">{price}</span>
        <span className="text-[14px] text-foreground/70">starting point</span>
      </div>
      <div className="mb-5 h-px w-full bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.1)_50%,transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.09)_20%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.09)_80%,transparent)]" />
      <ul className="mb-6 flex flex-col gap-2 text-[14px] text-foreground/90">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <CheckIcon className="h-4 w-4 text-cyan-400" />
            {feature}
          </li>
        ))}
      </ul>
      <Link href={routes.contact} className={buttonClasses.trim()}>
        {buttonText}
      </Link>
    </div>
  );
};

interface ModernPricingPageProps {
  title: ReactNode;
  subtitle: ReactNode;
  plans: EngagementPlan[];
}

export const ModernPricingPage = ({
  title,
  subtitle,
  plans,
}: ModernPricingPageProps) => {
  return (
    <div className="liquid-glass-strong relative w-full overflow-hidden rounded-[2rem] border text-foreground">
      <main className="relative z-10 flex min-h-[760px] w-full flex-col items-center justify-center px-4 py-16">
        <div className="mx-auto mb-14 w-full max-w-5xl text-center">
          <h2 className="bg-gradient-to-r from-slate-900 via-cyan-500 to-blue-600 bg-clip-text text-[42px] font-extralight leading-tight tracking-[-0.03em] text-transparent dark:from-white dark:via-cyan-300 dark:to-blue-400 md:text-[56px]">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[16px] text-foreground/80 md:text-[20px]">
            {subtitle}
          </p>
        </div>
        <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-8 md:flex-row md:gap-6">
          {plans.map((plan) => (
            <PricingCard key={plan.planName} {...plan} />
          ))}
        </div>
      </main>
    </div>
  );
};
