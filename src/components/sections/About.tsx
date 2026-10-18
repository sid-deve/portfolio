"use client";

import { motion } from "framer-motion";
import { Boxes, Globe, Server, Zap } from "lucide-react";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STATS = [
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "Years Experience", value: 2 },
  { label: "Technologies Used", value: 10, suffix: "+" },
];

const SKILLS = [
  { icon: Globe,  label: "Next.js & React", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
  { icon: Globe,  label: "WordPress",       color: "text-sky-400",    bg: "bg-sky-500/10 border-sky-500/20"      },
  { icon: Server, label: "Node.js & APIs",  color: "text-green-400",  bg: "bg-green-500/10 border-green-500/20"  },
  { icon: Server, label: "Laravel",         color: "text-rose-400",   bg: "bg-rose-500/10 border-rose-500/20"    },
  { icon: Boxes,  label: "SEO & Performance",color:"text-amber-400",  bg: "bg-amber-500/10 border-amber-500/20"  },
  { icon: Zap,    label: "Headless & CMS",  color: "text-lime-400",   bg: "bg-lime-500/10 border-lime-500/20"    },
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

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* ── Left: photo card ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="gradient-border">
              <GlassCard strong className="overflow-hidden rounded-[1.1rem] p-3">

                {/* Full photo */}
                <div className="relative w-full overflow-hidden rounded-[0.85rem]" style={{ aspectRatio: "3/4" }}>
                  <Image
                    src="/photo-about.jpeg"
                    alt="Siddhartha Kumar — Full Stack Developer"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Name overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="text-lg font-bold text-white drop-shadow-lg">Siddhartha Kumar</p>
                      <p className="text-sm text-zinc-300 drop-shadow">Full Stack Developer</p>
                    </div>
                    <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-black/60 px-3 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
                      Available
                    </span>
                  </div>
                </div>

                {/* Core expertise */}
                <div className="px-2 pt-5 pb-2">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white bg-white/10 border border-white/20 rounded-md px-3 py-1.5 inline-block shadow-sm">
                    Core Expertise
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {SKILLS.map(({ icon: Icon, label, color, bg }) => (
                      <span
                        key={label}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${bg}`}
                      >
                        <Icon className={`h-3.5 w-3.5 ${color}`} />
                        <span className="t-label">{label}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Ambient glow */}
            <motion.div
              aria-hidden
              className="absolute -bottom-8 -right-6 hidden h-40 w-40 rounded-full bg-fuchsia-500/25 blur-3xl lg:block"
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
              <p className="text-lg leading-relaxed t-body">
                I&apos;m a full stack developer focused on WordPress &amp; Next.js—building
                fast, headless sites, conversion-focused landing pages, and scalable REST APIs.
                My process blends clean architecture with iterative delivery so clients stay
                aligned from kickoff to launch.
              </p>
              <p className="text-sm leading-relaxed t-muted">
                Specialities include WordPress plugin implementation, Laravel backends, SEO
                optimisation, and automation workflows that cut manual toil and keep data in sync.
              </p>
              <p className="text-sm leading-relaxed t-muted">
                I partner with startups and agencies on long-term engagements—mentoring,
                codifying standards, and helping teams ship faster without sacrificing resilience.
              </p>
            </GlassCard>

            <div className="grid gap-4 sm:grid-cols-2">
              {STATS.map((stat) => (
                <GlassCard key={stat.label} className="p-5">
                  <p className="text-3xl font-semibold t-heading">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide t-subtle">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
