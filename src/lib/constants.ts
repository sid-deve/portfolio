import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Database,
  Globe,
  Layers,
  LayoutDashboard,
  MonitorSmartphone,
  Server,
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
    title: "Frontend Development",
    description:
      "High-performance interfaces with React and Next.js—motion-rich, accessible, and conversion-focused.",
    icon: MonitorSmartphone,
  },
  {
    title: "Backend Development",
    description:
      "Robust APIs, authentication, and data layers engineered for reliability at scale.",
    icon: Server,
  },
  {
    title: "WordPress Development",
    description:
      "Custom themes, headless setups, and optimized editorial workflows for growing teams.",
    icon: Globe,
  },
  {
    title: "REST API Development",
    description:
      "Clean contracts, versioning, and observability so integrations ship without surprises.",
    icon: Layers,
  },
  {
    title: "AI/ML Solutions",
    description:
      "Practical ML features—from classification to retrieval—embedded thoughtfully in products.",
    icon: Brain,
  },
  {
    title: "Full Stack Web Applications",
    description:
      "End-to-end builds from discovery to deployment with CI/CD and production-grade patterns.",
    icon: LayoutDashboard,
  },
];

export const TECH_STACK = [
  { name: "Next.js", slug: "nextjs" },
  { name: "React.js", slug: "react" },
  { name: "Tailwind CSS", slug: "tailwind" },
  { name: "Node.js", slug: "nodejs" },
  { name: "Express.js", slug: "express" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "MySQL", slug: "mysql" },
  { name: "Firebase", slug: "firebase" },
  { name: "WordPress", slug: "wordpress" },
  { name: "Python", slug: "python" },
] as const;

export const PROJECTS = [
  {
    title: "Student Help Desk",
    description:
      "Ticketing and knowledge base portal that reduced response times with smart routing and SLA dashboards.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
    tech: ["Next.js", "Node.js", "MongoDB"],
    github: "https://github.com",
    demo: "https://vercel.com",
  },
  {
    title: "Job Portal",
    description:
      "Role discovery platform with saved searches, employer analytics, and frictionless applications.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80",
    tech: ["React", "Express", "MySQL"],
    github: "https://github.com",
    demo: "https://vercel.com",
  },
  {
    title: "Food Wastage Management System",
    description:
      "Inventory intelligence connecting surplus supply with partners—tracking impact in real time.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80",
    tech: ["Next.js", "Firebase", "Tailwind"],
    github: "https://github.com",
    demo: "https://vercel.com",
  },
  {
    title: "Emotion Detection AI",
    description:
      "Multimodal inference pipeline with guardrails, evaluation dashboards, and human-in-the-loop review.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    tech: ["Python", "React", "REST APIs"],
    github: "https://github.com",
    demo: "https://vercel.com",
  },
  {
    title: "Portfolio Dashboard",
    description:
      "Unified analytics cockpit combining revenue, engagement, and infra signals with drill-down views.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    tech: ["Next.js", "Tailwind", "Charts"],
    github: "https://github.com",
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
    title: "SEO Friendly Development",
    description:
      "Structured metadata, performance budgets, and crawl-ready markup baked into every release.",
    icon: Globe,
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
    role: "Full Stack Developer",
    org: "NovaLabs",
    description:
      "Leading feature squads across Next.js apps, Node services, and ML-powered workflows.",
  },
  {
    date: "Summer 2023",
    role: "Software Engineering Intern",
    org: "Orbit AI",
    description:
      "Shipped internal tooling for model evaluation pipelines and customer-facing analytics.",
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
    org: "Flowstack Build Week",
    description:
      "Collaborative sprint delivering a zero-setup onboarding experience for SaaS teams.",
  },
  {
    date: "2021",
    role: "Open Source Contributor",
    org: "Community Projects",
    description:
      "Documentation improvements and accessibility fixes across popular React ecosystem libraries.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Amelia Chen",
    role: "Product Lead, MintPay",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    quote:
      "Shipping velocity doubled once we partnered—instrumentation, polish, and calm communication throughout.",
    rating: 5,
  },
  {
    name: "Marcus Reid",
    role: "Founder, Vertex Studio",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    quote:
      "The dashboard feels like a flagship SaaS product. Investors specifically called out the UX quality.",
    rating: 5,
  },
  {
    name: "Priya Desai",
    role: "CTO, CloudNest",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    quote:
      "API design was airtight—integrations that used to take weeks now ship in days.",
    rating: 5,
  },
] as const;

export const PRICING = [
  {
    name: "Basic Plan",
    price: "$899",
    description: "Perfect for MVPs and focused landing experiences.",
    features: [
      "Up to 5 responsive pages",
      "CMS-ready content blocks",
      "Performance & accessibility pass",
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
      "Auth + payments wiring guidance",
      "REST API + webhook hooks",
      "Framer Motion polish throughout",
    ],
    cta: "Choose Standard",
    highlighted: true,
  },
  {
    name: "Premium Plan",
    price: "Custom",
    description: "Dedicated partnership for teams scaling globally.",
    features: [
      "Embedded squad workflows",
      "CI/CD + infra recommendations",
      "AI feature prototyping",
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
      "Landing experiences typically ship in 2–4 weeks, while multi-surface products land between 6–10 weeks depending on integrations. You'll receive a milestone roadmap before kickoff.",
  },
  {
    question: "Do you provide revisions?",
    answer:
      "Yes—each engagement includes structured revision rounds tied to milestones so feedback stays organized and timelines stay predictable.",
  },
  {
    question: "Do you deploy websites?",
    answer:
      "Deployments to Vercel, Render, AWS, or Dockerized stacks are supported with environment parity checks and smoke testing.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Primarily Next.js, React, Tailwind CSS, Node.js, Express, MongoDB, MySQL, Firebase, WordPress, and Python—always aligned with your stack preferences.",
  },
] as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Fiverr", href: "https://fiverr.com" },
] as const;
