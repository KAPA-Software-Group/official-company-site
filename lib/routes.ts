export const routes = {
  home: "/",
  services: "/services",
  work: "/work",
  process: "/process",
  about: "/about",
  contact: "/contact",
} as const;

export type RouteHref = (typeof routes)[keyof typeof routes];

export type NavItem = {
  label: string;
  href: RouteHref;
};

export const navItems: NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "Services", href: routes.services },
  { label: "Work", href: routes.work },
  { label: "Process", href: routes.process },
  { label: "About", href: routes.about },
  { label: "Contact", href: routes.contact },
];
