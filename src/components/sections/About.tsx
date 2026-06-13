"use client";

import { motion } from "framer-motion";
import { Globe, Layout, Package, Search, Server, Settings, Zap } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKLogo } from "@/components/ui/SKLogo";

const STATS = [
  { label: "Projects Completed", value: 48, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Happy Clients", value: 32, suffix: "+" },
  { label: "Technologies Used", value: 18, suffix: "+" },
];

const SKILLS = [
  { icon: Globe,   label: "Next.js & React",      color: "text-violet-400",  bg: "bg-violet-500/10 border-violet-500/20"  },
  { icon: Globe,   label: "WordPress",             color: "text-sky-400",     bg: "bg-sky-500/10 border-sky-500/20"        },
  { icon: Layout,  label: "Landing Pages",         color: "text-fuchsia-400", bg: "bg-fuchsia-500/10 border-fuchsia-500/20"},
  { icon: Package, label: "Plugin Implementation", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20"},
  { icon: Search,  label: "SEO Optimisation",      color: "text-amber-400",   bg: "bg-amber-500/10 border-amber-500/20"    },
  { icon: Server,  label: "REST APIs & Laravel",   color: "text-rose-400",    bg: "bg-rose-500/10 border-rose-500/20"      },
  { icon: Settings,label: "Automation",            color: "text-cyan-400",    bg: "bg-cyan-500/10 border-cyan-500/20"      },
  { icon: Zap,     label: "Headless Websites",     color: "text-lime-400",    bg: "bg-lime-500/10 border-lime-500/20"      },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="about-heading"
          eyebrow="About"
          title="Built for founders who expect flagship quality"
          subtitle="I partner with startups and product teams to translate ambiguity into systems—balancing velocity, maintainability, and measurable outcomes."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* ── Left: visual identity card ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="gradient-border">
              <GlassCard strong className="overflow-hidden rounded-[1.1rem] p-6 sm:p-8">
                {/* Logo + name */}
                <div className="flex items-center gap-5 mb-8">
                  <div className="relative shrink-0">
                    <div className="rounded-2xl border border-sky-500/20 bg-black/60 px-3 py-2 shadow-xl shadow-sky-500/10">
                      <SKLogo size="md" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[rgb(10,12,24)] bg-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping absolute" />
                    </span>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white">Kaushlendra Pal</p>
                    <p className="text-sm text-zinc-400">WordPress &amp; Next.js Developer</p>
                    <p className="mt-1 text-xs text-emerald-400 font-medium">● Available now</p>
                  </div>
                </div>

                {/* Skill chips */}
                <div className="mb-8">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Core expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.map(({ icon: Icon, label, color, bg }) => (
                      <span
                        key={label}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${bg}`}
                      >
                        <Icon className={`h-3.5 w-3.5 ${color}`} />
                        <span className="text-zinc-200">{label}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact quick-links */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-3">Contact</p>
                  <a
                    href="mailto:yadavsid50k@gmail.com"
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-200 transition-colors hover:border-violet-400/30 hover:bg-white/10"
                  >
                    <span className="text-violet-400">✉</span> yadavsid50k@gmail.com
                  </a>
                  <a
                    href="tel:+918808841721"
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-zinc-200 transition-colors hover:border-sky-400/30 hover:bg-white/10"
                  >
                    <span className="text-sky-400">📞</span> +91 88088 41721
                  </a>
                </div>
              </GlassCard>
            </div>

            <motion.div
              aria-hidden
              className="absolute -bottom-8 -right-6 hidden h-32 w-32 rounded-full bg-fuchsia-500/25 blur-3xl lg:block"
              animate={{ opacity: [0.35, 0.6, 0.35] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </motion.div>

          {/* ── Right: text + stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <GlassCard className="space-y-4 p-6 sm:p-8">
              <p className="text-lg leading-relaxed text-zinc-300">
                I&apos;m a full stack developer focused on WordPress &amp; Next.js—building
                fast, headless sites, conversion-focused landing pages, and scalable REST APIs.
                My process blends clean architecture with iterative delivery so clients stay
                aligned from kickoff to launch.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Specialities include WordPress plugin implementation, Laravel backends, SEO
                optimisation, and automation workflows that cut manual toil and keep data in sync.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                I partner with startups and agencies on long-term engagements—mentoring,
                codifying standards, and helping teams ship faster without sacrificing resilience.
              </p>
            </GlassCard>

            <div className="grid gap-4 sm:grid-cols-2">
              {STATS.map((stat) => (
                <GlassCard key={stat.label} className="p-5">
                  <p className="text-3xl font-semibold text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-zinc-500">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
