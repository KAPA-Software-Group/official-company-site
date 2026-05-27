import Link from "next/link";

import { BrandLogo } from "@/components/layout/brand-logo";
import { footerServiceLinks } from "@/lib/site-content";
import { mailtoHref, siteConfig } from "@/lib/site-config";
import { navItems, routes } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="border-t px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.35fr_0.65fr_0.8fr]">
        <div>
          <Link href="/" aria-label="Kapa Software home">
            <BrandLogo />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
            Custom websites and software interfaces designed for clear communication and practical use.
          </p>
          <a href={mailtoHref} className="mt-6 inline-block text-sm font-medium text-foreground transition hover:text-primary">
            {siteConfig.email}
          </a>
        </div>

        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">Navigate</h2>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted transition hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">Capabilities</h2>
          <ul className="mt-5 space-y-3">
            {footerServiceLinks.map((link) => (
              <li key={link}>
                <Link href={routes.services} className="text-sm text-muted transition hover:text-foreground">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t pt-6 text-xs text-muted sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Web design and custom software studio.</p>
      </div>
    </footer>
  );
}
