import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Database,
  Globe,
  Layers,
  LayoutDashboard,
  MonitorSmartphone,
  Package,
  Search,
  Server,
  Settings,
  Zap,
} from "lucide-react";

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export const BRANDS = [
  "NovaLabs",
  "Orbit AI",
  "Flowstack",
  "PixelForge",
  "CloudNest",
  "DataPulse",
  "MintPay",
  "Vertex",
];

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
    date: "2024 — Present",
    role: "WordPress & Next.js Developer",
    org: "Freelance",
    description:
      "Building headless WordPress, Next.js landing pages, REST APIs, and plugin implementations for clients worldwide.",
  },
  {
    date: "Summer 2023",
    role: "Software Engineering Intern",
    org: "Tech Startup",
    description:
      "Shipped internal tooling and customer-facing analytics dashboards using React and Laravel.",
  },
  {
    date: "2023",
    role: "AWS Cloud Practitioner",
    org: "Amazon Web Services",
    description:
      "Certification covering cloud fundamentals, billing, security, and core AWS services.",
  },
  {
    date: "2022",
    role: "Hackathon Winner — Best UX",
    org: "Build Week",
    description:
      "Collaborative sprint delivering a zero-setup onboarding experience for SaaS teams.",
  },
  {
    date: "2021",
    role: "Open Source Contributor",
    org: "Community Projects",
    description:
      "Documentation improvements and accessibility fixes across popular React and WordPress ecosystem libraries.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Amelia Chen",
    role: "Product Lead, MintPay",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    quote:
      "Shipping velocity doubled once we partnered—instrumentation, polish, and calm communication throughout.",
    rating: 5,
  },
  {
    name: "Marcus Reid",
    role: "Founder, Vertex Studio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    quote:
      "The dashboard feels like a flagship SaaS product. Investors specifically called out the UX quality.",
    rating: 5,
  },
  {
    name: "Priya Desai",
    role: "CTO, CloudNest",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    quote:
      "API design was airtight—integrations that used to take weeks now ship in days.",
    rating: 5,
  },
] as const;

export const PRICING = [
  {
    name: "Basic Plan",
    price: "$899",
    description: "Perfect for landing pages and focused web experiences.",
    features: [
      "Up to 5 responsive pages",
      "WordPress or Next.js",
      "On-page SEO optimisation",
      "14-day delivery window",
    ],
    cta: "Start Basic",
    highlighted: false,
  },
  {
    name: "Standard Plan",
    price: "$2,400",
    description: "Full product surfaces with integrations and analytics.",
    features: [
      "Up to 12 screens / flows",
      "Headless WordPress + Next.js",
      "REST API or Laravel backend",
      "Plugin implementation included",
    ],
    cta: "Choose Standard",
    highlighted: true,
  },
  {
    name: "Premium Plan",
    price: "Custom",
    description: "Dedicated partnership for teams scaling globally.",
    features: [
      "Full automation workflows",
      "CI/CD + infra recommendations",
      "Advanced SEO & Core Web Vitals",
      "Priority communication channel",
    ],
    cta: "Book Strategy Call",
    highlighted: false,
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
] as const;

export const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://github.com/Kaushlendra-pal" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kaushlendra-pal-42a400251" },
  { label: "Fiverr",   href: "https://fiverr.com" },
] as const;
