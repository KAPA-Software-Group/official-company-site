import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  Compass,
  Gauge,
  LayoutTemplate,
  PanelsTopLeft,
  PenTool,
  Wrench,
  Workflow,
} from "lucide-react";

export type StudioValue = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ServiceItem = {
  title: string;
  description: string;
  output: string;
  icon: LucideIcon;
};

export type PageHeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export type WorkProject = {
  title: string;
  category: string;
  description: string;
  tags: string[];
};

export type EngagementPlan = {
  planName: string;
  description: string;
  suitedFor: string;
  features: string[];
  buttonText: string;
};

export const pageHeroes = {
  services: {
    eyebrow: "Capabilities",
    title: "Digital work tied to a concrete business need.",
    subtitle:
      "Websites, product pages, internal tools, and workflow improvements designed and built with clear scope.",
  },
  work: {
    eyebrow: "Work",
    title: "Interface formats built around real use.",
    subtitle:
      "A focused look at websites and software interfaces designed to make customer and team journeys clearer.",
  },
  process: {
    eyebrow: "Process",
    title: "Clear decisions before polished delivery.",
    subtitle:
      "A compact working process that defines the problem, establishes direction, builds carefully, and supports the release.",
  },
  about: {
    eyebrow: "Studio",
    title: "Software and design work with practical standards.",
    subtitle:
      "Kapa Software builds considered digital products for teams that value clarity, maintainability, and a credible customer experience.",
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

export const services: ServiceItem[] = [
  {
    title: "Websites",
    description:
      "Clear, credible company websites built around services, proof, and an easy route to inquiry.",
    output: "Architecture, interface design, responsive build",
    icon: PanelsTopLeft,
  },
  {
    title: "Product Pages",
    description:
      "Focused pages that explain an offer, support a launch, and give prospective users a useful next step.",
    output: "Messaging structure, landing pages, analytics setup",
    icon: LayoutTemplate,
  },
  {
    title: "Internal Tools",
    description:
      "Interfaces for teams who need visibility into work, clients, requests, or operational status.",
    output: "Dashboards, portals, workflow interfaces",
    icon: AppWindow,
  },
  {
    title: "Automation & Improvement",
    description:
      "Practical improvements that remove repetitive handoffs and strengthen an existing digital product.",
    output: "Integrations, performance, product iteration",
    icon: Workflow,
  },
];

export const projects: WorkProject[] = [
  {
    title: "Healthcare Website Redesign",
    category: "Public-facing website",
    description:
      "A cleaner site structure for a clinic with clearer service pages, stronger trust signals, and a smoother booking path.",
    tags: ["Website Design", "UX", "Booking Flow"],
  },
  {
    title: "SaaS Landing Page",
    category: "Product launch",
    description:
      "A launch-ready product page built to explain the offer, validate demand, and convert early users.",
    tags: ["Landing Page", "Copy", "Analytics"],
  },
  {
    title: "Operations Dashboard",
    category: "Internal software",
    description:
      "An internal tool interface for surfacing priorities, tracking work, and reducing manual reporting.",
    tags: ["Dashboard", "Workflow", "Automation"],
  },
];

export const processSteps = [
  {
    title: "Frame",
    description:
      "Define the audience, the operating problem, and the outcome the product needs to support.",
  },
  {
    title: "Structure",
    description:
      "Set the information hierarchy, user paths, and visual direction before implementation.",
  },
  {
    title: "Build",
    description:
      "Develop responsive interfaces and integrations with maintainable, production-ready code.",
  },
  {
    title: "Release",
    description:
      "Test key paths, prepare deployment, and connect measurement where it serves the project.",
  },
  {
    title: "Refine",
    description:
      "Improve pages and workflows as real use reveals better priorities.",
  },
];

export const kapaValues: StudioValue[] = [
  {
    title: "Useful strategy",
    description:
      "Recommendations are grounded in the decision a visitor or staff member needs to make.",
    icon: Compass,
  },
  {
    title: "Considered design",
    description:
      "Layouts, language, and interactions establish trust without visual noise.",
    icon: PenTool,
  },
  {
    title: "Durable builds",
    description:
      "Technical foundations stay readable, responsive, and straightforward to extend.",
    icon: Wrench,
  },
  {
    title: "Measured improvement",
    description:
      "Post-launch changes follow actual needs rather than unnecessary features.",
    icon: Gauge,
  },
];

export const faqs = [
  {
    question: "What kinds of teams does Kapa Software work with?",
    answer:
      "Service businesses, product teams, and operations-led companies that need a stronger website or a focused software tool.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. A redesign can cover information structure, interface design, messaging, performance, and the path to inquiry or booking.",
  },
  {
    question: "Do projects include internal software?",
    answer:
      "Yes. Dashboards, client portals, workflow interfaces, and automations are appropriate when a team has a defined operational need.",
  },
  {
    question: "Is ongoing support available?",
    answer:
      "Yes. Support may include maintenance, new pages, performance work, analytics review, and product iteration.",
  },
  {
    question: "How is a project scoped?",
    answer:
      "Scope follows the pages, flows, integrations, content readiness, and release requirements involved. Initial discussions establish the right starting point.",
  },
];

export const engagementPlans: EngagementPlan[] = [
  {
    planName: "Company Website",
    description: "A clear public presence for a service or specialist business.",
    suitedFor: "Positioning, trust, inquiries",
    features: ["Page structure and messaging", "Custom responsive interface", "Contact or booking path"],
    buttonText: "Discuss a website",
  },
  {
    planName: "Product Launch",
    description: "A focused presentation for a new offer or software product.",
    suitedFor: "Explanation, validation, conversion",
    features: ["Landing page system", "Calls to action and forms", "Analytics-ready delivery"],
    buttonText: "Discuss a launch",
  },
  {
    planName: "Operational Tool",
    description: "A purpose-built interface for a repeated internal process.",
    suitedFor: "Visibility, workflow, automation",
    features: ["Workflow definition", "Dashboard or portal UI", "Integration planning"],
    buttonText: "Discuss a tool",
  },
];

export const footerServiceLinks = [
  "Websites",
  "Product Pages",
  "Internal Tools",
  "Workflow Automation",
];
