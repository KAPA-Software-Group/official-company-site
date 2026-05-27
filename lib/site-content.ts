import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  Blocks,
  BrainCircuit,
  CalendarCheck,
  Gauge,
  IterationCcw,
  LayoutTemplate,
  Layers3,
  PanelsTopLeft,
  Workflow,
} from "lucide-react";

export type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type PageHeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type WorkProject = {
  title: string;
  type: string;
  description: string;
  tags: string[];
  bars: number[];
};

export type EngagementPlan = {
  planName: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  buttonVariant?: "primary" | "secondary";
};

export const pageHeroes = {
  services: {
    eyebrow: "Services",
    title: "Websites, apps, and systems built with modern execution.",
    subtitle:
      "Explore the core services Kapa Software uses to turn digital ideas into polished business tools.",
  },
  work: {
    eyebrow: "Work",
    title: "Project examples for websites, product pages, and tools.",
    subtitle:
      "See the kinds of digital products and operating systems Kapa Software can shape for growing businesses.",
  },
  process: {
    eyebrow: "Process",
    title: "A practical path from first idea to live product.",
    subtitle:
      "The process keeps scope clear, design focused, and development moving toward a launch-ready system.",
  },
  about: {
    eyebrow: "About",
    title: "Modern software thinking for business websites and tools.",
    subtitle:
      "Kapa Software focuses on clean design, scalable builds, and digital systems that support real operations.",
  },
} satisfies Record<string, PageHeroContent>;

export const capabilities = [
  "Websites",
  "Web Apps",
  "Landing Pages",
  "Automations",
  "Dashboards",
  "Client Portals",
  "SEO-Ready Builds",
  "Fast Deployment",
];

export const capabilityCarouselItems = [
  ...capabilities,
  ...capabilities,
  ...capabilities,
  ...capabilities,
];

export const services: IconCard[] = [
  {
    title: "Custom Websites",
    description:
      "High-performing marketing sites built with strong structure, clear messaging, and premium visual systems.",
    icon: PanelsTopLeft,
  },
  {
    title: "Web Applications",
    description:
      "Modern app interfaces, user flows, and product foundations for business-critical workflows.",
    icon: AppWindow,
  },
  {
    title: "Landing Pages",
    description:
      "Focused conversion pages for campaigns, launches, offers, and targeted service lines.",
    icon: LayoutTemplate,
  },
  {
    title: "Booking & Intake Systems",
    description:
      "Streamlined forms, booking flows, routing logic, and intake experiences that reduce manual work.",
    icon: CalendarCheck,
  },
  {
    title: "Business Automation",
    description:
      "Connected workflows that move data, trigger actions, and keep repetitive operations consistent.",
    icon: Workflow,
  },
  {
    title: "Dashboards & Client Portals",
    description:
      "Operational dashboards and secure client-facing systems for visibility, reporting, and service delivery.",
    icon: Gauge,
  },
];

export const projects: WorkProject[] = [
  {
    title: "Clinic Website Redesign",
    type: "Healthcare website",
    description:
      "A sharper service site structure with appointment-focused paths and trust-building content sections.",
    tags: ["Next.js", "SEO", "Booking"],
    bars: [38, 66, 52, 78],
  },
  {
    title: "SaaS Landing Page",
    type: "Product marketing",
    description:
      "A conversion-focused launch page with feature storytelling, pricing structure, and analytics setup.",
    tags: ["React", "Motion", "Analytics"],
    bars: [72, 42, 88, 62],
  },
  {
    title: "Operations Dashboard",
    type: "Internal software",
    description:
      "A clean operational command center for monitoring work, surfacing priorities, and reducing manual reporting.",
    tags: ["Dashboards", "API", "Automation"],
    bars: [48, 82, 58, 92],
  },
];

export const processSteps = [
  {
    title: "Discover",
    description:
      "We define goals, users, competitors, features, and the business outcome.",
  },
  {
    title: "Design",
    description:
      "We create the visual direction, page structure, and core user flows.",
  },
  {
    title: "Build",
    description:
      "We develop a fast, responsive, scalable product using a modern stack.",
  },
  {
    title: "Launch",
    description:
      "We test, deploy, connect analytics, and prepare the site for real users.",
  },
  {
    title: "Optimize",
    description:
      "We improve based on feedback, performance, and business needs.",
  },
];

export const kapaValues: IconCard[] = [
  {
    title: "Business-first thinking",
    description:
      "Every interface and feature is shaped around the outcome it needs to create.",
    icon: BrainCircuit,
  },
  {
    title: "Modern technical stack",
    description:
      "Fast, maintainable foundations built with tools that scale beyond launch.",
    icon: Blocks,
  },
  {
    title: "Clean design systems",
    description:
      "Reusable visual patterns that make the product feel sharp and consistent.",
    icon: Layers3,
  },
  {
    title: "Fast iteration",
    description:
      "Focused releases, practical feedback loops, and improvements that keep momentum.",
    icon: IterationCcw,
  },
];

export const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with growing service businesses, startups, local companies, and teams that need sharper websites or practical software systems.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "No. We build websites, web applications, dashboards, automations, portals, booking systems, and custom digital workflows.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We can improve structure, visuals, performance, messaging, conversion paths, and technical foundations.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. Support can include maintenance, new pages, performance improvements, analytics, automation updates, and product iteration.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Simple websites often take a few weeks. Larger websites, applications, and systems depend on scope, integrations, and content readiness.",
  },
];

export const engagementPlans: EngagementPlan[] = [
  {
    planName: "Starter",
    description: "Clean online presence for small businesses.",
    price: "Website",
    features: ["3-5 core pages", "Responsive design", "Basic SEO setup", "Contact form"],
    buttonText: "Start Starter",
    buttonVariant: "secondary",
  },
  {
    planName: "Growth",
    description: "Sharper positioning and conversion structure.",
    price: "Website",
    features: [
      "Custom design system",
      "Landing pages",
      "Analytics setup",
      "CMS/blog-ready structure",
      "Conversion-focused sections",
    ],
    buttonText: "Start Growth",
    isPopular: true,
    buttonVariant: "primary",
  },
  {
    planName: "Custom",
    description: "Internal tools and digital platforms.",
    price: "Software",
    features: ["Web apps", "Dashboards", "Client portals", "Automations", "Integrations"],
    buttonText: "Discuss Custom",
    buttonVariant: "primary",
  },
];

export const footerServiceLinks = [
  "Custom Websites",
  "Web Applications",
  "Landing Pages",
  "Automation Workflows",
  "Dashboards",
  "Client Portals",
];
