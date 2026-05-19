import Link from "next/link";

import { BrandLogo } from "@/components/layout/brand-logo";
import { footerServiceLinks } from "@/lib/site-content";
import { mailtoHref, siteConfig } from "@/lib/site-config";
import { navItems, routes } from "@/lib/routes";

export function Footer() {
  return (
    <footer className="border-t bg-surface/50 px-4 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
        <div>
          <Link href="/" className="flex items-center gap-3" aria-label="Kapa Software Group home">
            <BrandLogo />
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted">
            Modern websites, web applications, automations, and digital systems
            for growing businesses.
          </p>
          <a
            href={mailtoHref}
            className="mt-5 inline-block text-sm font-semibold text-primary hover:text-accent"
          >
            {siteConfig.email}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-bold text-foreground">Navigation</h2>
          <ul className="mt-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-foreground">Services</h2>
          <ul className="mt-4 space-y-3">
            {footerServiceLinks.map((link) => (
              <li key={link}>
                <Link href={routes.services} className="text-sm text-muted transition hover:text-primary">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Built for performance, clarity, and scale.</p>
      </div>
    </footer>
  );
}
