import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Code2,
  Database,
  Facebook,
  Github,
  Globe,
  Instagram,
  Layers,
  LayoutDashboard,
  Linkedin,
  MonitorSmartphone,
  Package,
  Search,
  Server,
  Settings,
  Youtube,
  Zap,
} from "lucide-react";
import { XLogo } from "@/components/ui/BrandIcons";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export type ServiceItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Next.js & React Development",
    description:
      "High-performance interfaces built with Next.js App Router and React—motion-rich, accessible, and conversion-focused.",
    icon: MonitorSmartphone,
  },
  {
    title: "WordPress Development",
    description:
      "Custom themes, plugin implementation, headless WordPress setups, and optimised editorial workflows for growing teams.",
    icon: Globe,
  },
  {
    title: "Landing Page Design",
    description:
      "Pixel-perfect, fast-loading landing pages engineered to convert—built with Next.js or WordPress.",
    icon: LayoutDashboard,
  },
  {
    title: "REST API & Laravel",
    description:
      "Clean REST API contracts, Laravel backends, versioning, and observability so integrations ship without surprises.",
    icon: Layers,
  },
  {
    title: "SEO Optimisation",
    description:
      "Structured metadata, Core Web Vitals, schema markup, and crawl-ready architecture baked into every release.",
    icon: Search,
  },
  {
    title: "Headless Websites",
    description:
      "Decouple your CMS from your front end—headless WordPress or custom APIs powering blazing-fast Next.js frontends.",
    icon: Server,
  },
  {
    title: "Plugin Implementation",
    description:
      "Custom WordPress plugin development and third-party plugin integration—extending functionality without breaking stability.",
    icon: Package,
  },
  {
    title: "Automation & Workflows",
    description:
      "Webhook pipelines, cron jobs, and no-code/low-code automation that cut manual toil and keep data in sync.",
    icon: Settings,
  },
  {
    title: "Full Stack Web Applications",
    description:
      "End-to-end builds from discovery to deployment with CI/CD, secure APIs, and production-grade patterns.",
    icon: Code2,
  },
];

// ── Tech stack (Python removed; new skills added) ──────────────────────────
export const TECH_STACK = [
  { name: "Next.js",        slug: "nextjs"      },
  { name: "React.js",       slug: "react"       },
  { name: "WordPress",      slug: "wordpress"   },
  { name: "Laravel",        slug: "laravel"     },
  { name: "Tailwind CSS",   slug: "tailwind"    },
  { name: "Node.js",        slug: "nodejs"      },
  { name: "REST APIs",      slug: "restapi"     },
  { name: "SEO",            slug: "seo"         },
  { name: "Headless CMS",   slug: "headless"    },
  { name: "Automation",     slug: "automation"  },
  { name: "MySQL",          slug: "mysql"       },
  { name: "MongoDB",        slug: "mongodb"     },
] as const;

export const PROJECTS = [
  {
    title: "Student Help Desk",
    description:
      "Ticketing and knowledge base portal that reduced response times with smart routing and SLA dashboards.",
    image: "",
    tech: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com/Kaushlendra-pal",
    demo: "https://vercel.com",
  },
  {
    title: "Job Portal",
    description:
      "Role discovery platform with saved searches, employer analytics, and frictionless applications.",
    image: "",
    tech: ["React", "Laravel", "MySQL"],
    github: "https://github.com/Kaushlendra-pal",
    demo: "https://vercel.com",
  },
  {
    title: "Food Wastage Management System",
    description:
      "Inventory intelligence connecting surplus supply with partners—tracking impact in real time.",
    image: "",
    tech: ["Next.js", "REST API", "Tailwind"],
    github: "https://github.com/Kaushlendra-pal",
    demo: "https://vercel.com",
  },
  {
    title: "Headless WordPress Site",
    description:
      "Decoupled CMS architecture with WordPress as the backend and Next.js powering a blazing-fast front end.",
    image: "",
    tech: ["WordPress", "Next.js", "REST APIs"],
    github: "https://github.com/Kaushlendra-pal",
    demo: "https://vercel.com",
  },
  {
    title: "Portfolio Dashboard",
    description:
      "Unified analytics cockpit combining contact submissions, user tracking, and admin management.",
    image: "",
    tech: ["Next.js", "Tailwind", "Laravel"],
    github: "https://github.com/Kaushlendra-pal",
    demo: "https://vercel.com",
  },
] as const;

export type WhyFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const WHY_FEATURES: WhyFeature[] = [
  {
    title: "Clean Code",
    description:
      "Readable patterns, linted commits, and documentation that helps teams scale confidently.",
    icon: Code2,
  },
  {
    title: "Fast Delivery",
    description:
      "Structured milestones and weekly demos so stakeholders see momentum early and often.",
    icon: Zap,
  },
  {
    title: "SEO-First Development",
    description:
      "Structured metadata, Core Web Vitals, schema markup, and crawl-ready markup baked into every release.",
    icon: Search,
  },
  {
    title: "Fully Responsive Design",
    description:
      "Layouts tuned for thumb zones, large displays, and everything between—with motion kept purposeful.",
    icon: MonitorSmartphone,
  },
  {
    title: "Secure APIs",
    description:
      "Auth hardening, rate limiting, and payload validation aligned with OWASP best practices.",
    icon: Server,
  },
  {
    title: "Scalable Architecture",
    description:
      "Modular services and caching strategies that grow with traffic instead of fighting it.",
    icon: Database,
  },
];

export const TIMELINE = [
  {
    date: "2024 - 2025",
    role: "Independent Full Stack Partner",
    org: "Freelance · Remote",
    description:
      "Helping founders and growing brands ship production websites and web apps—Next.js, WordPress, Laravel, and Node.js—with clear milestones, fast iteration, and launch-ready polish.",
  },
  {
    date: "2025 - 2026",
    role: "Conversion Landing Pages",
    org: "Startups & service businesses",
    description:
      "Designed and built high-speed landing pages that turn traffic into booked calls—tight copy hierarchy, mobile-first layouts, SEO metadata, and analytics wired from day one.",
  },
  {
    date: "2026 — Present",
    role: "Headless WordPress Builds",
    org: "Content-led brands",
    description:
      "Decoupled WordPress as a CMS from Next.js front ends so editors keep an easy workflow while customers get flagship speed, Core Web Vitals, and modern UI.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How long does a project take?",
    answer:
      "Landing pages typically ship in 1–2 weeks, WordPress sites in 2–4 weeks, and full-stack apps in 6–10 weeks depending on integrations. You'll receive a milestone roadmap before kickoff.",
  },
  {
    question: "Do you provide revisions?",
    answer:
      "Yes—each engagement includes structured revision rounds tied to milestones so feedback stays organised and timelines stay predictable.",
  },
  {
    question: "Do you build headless WordPress sites?",
    answer:
      "Absolutely. I decouple WordPress as a headless CMS and pair it with a Next.js frontend for maximum performance, SEO scores, and developer experience.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Primarily Next.js, React, WordPress, Laravel, Tailwind CSS, Node.js, REST APIs, MySQL, and MongoDB—always aligned with your stack preferences.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Projects typically range from $150–$200 for focused landing pages and scale with scope, integrations, and backend complexity. You get a fixed, transparent quote upfront—no hourly surprises—so you can budget with confidence before we kick off.",
  },
  {
    question: "Why hire you instead of an agency?",
    answer:
      "You work directly with me—no account managers, no hand-offs. That means faster decisions, senior-level code on every line, and SaaS-grade polish at a fraction of agency overhead, backed by clear milestones and honest communication.",
  },
  {
    question: "Will my site be fast, SEO-ready, and mobile-friendly?",
    answer:
      "Always. Every build ships with Core Web Vitals in mind—clean semantic markup, optimised images, responsive layouts, and on-page SEO so your site ranks well and converts visitors into clients from day one.",
  },
] as const;

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon | typeof XLogo;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub",    href: "https://github.com/Kaushlendra-pal", icon: Github },
  { label: "LinkedIn",  href: "https://linkedin.com/in/kaushlendra-pal-42a400251", icon: Linkedin },
  { label: "Fiverr",    href: "https://fiverr.com", icon: Briefcase },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "Facebook",  href: "https://facebook.com", icon: Facebook },
  { label: "X",         href: "https://x.com", icon: XLogo },
  { label: "YouTube",   href: "https://www.youtube.com/@animation_world6389", icon: Youtube },
];
