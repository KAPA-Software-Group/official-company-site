const navLinks = ["Home", "Services", "Work", "Process", "About", "Contact"];
const serviceLinks = [
  "Custom Websites",
  "Web Applications",
  "Landing Pages",
  "Automation Workflows",
  "Dashboards",
  "Client Portals",
];

export function Footer() {
  return (
    <footer className="border-t bg-surface/50 px-4 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
        <div>
          <a href="#" className="flex items-center gap-3" aria-label="Kapa Software Group home">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-primary text-sm font-black text-slate-950">
              K
            </span>
            <span className="text-base font-bold">Kapa Software Group</span>
          </a>
          <p className="mt-5 max-w-md text-sm leading-7 text-muted">
            Modern websites, web applications, automations, and digital systems
            for growing businesses.
          </p>
          <a
            href="mailto:hello@kapasoftwaregroup.com"
            className="mt-5 inline-block text-sm font-semibold text-primary hover:text-accent"
          >
            hello@kapasoftwaregroup.com
          </a>
        </div>

        <div>
          <h2 className="text-sm font-bold text-foreground">Navigation</h2>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={link === "Home" ? "#" : `#${link.toLowerCase()}`}
                  className="text-sm text-muted transition hover:text-primary"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-foreground">Services</h2>
          <ul className="mt-4 space-y-3">
            {serviceLinks.map((link) => (
              <li key={link}>
                <a href="#services" className="text-sm text-muted transition hover:text-primary">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Kapa Software Group. All rights reserved.</p>
        <p>Built for performance, clarity, and scale.</p>
      </div>
    </footer>
  );
}
