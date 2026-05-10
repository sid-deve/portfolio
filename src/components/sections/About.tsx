"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STATS = [
  { label: "Projects Completed", value: 48, suffix: "+" },
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Happy Clients", value: 32, suffix: "+" },
  { label: "Technologies Used", value: 18, suffix: "+" },
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
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="gradient-border">
              <GlassCard strong className="overflow-hidden rounded-[1.1rem] p-4">
                <div className="relative aspect-[5/6] overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                    alt="Developer collaborating with teammates"
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-900/40 via-transparent to-sky-500/25" />
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

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-6"
          >
            <GlassCard className="space-y-4 p-6 sm:p-8">
              <p className="text-lg leading-relaxed text-zinc-300">
                I&apos;m a full stack developer focused on crafting SaaS-grade experiences—pairing
                crisp interfaces with dependable infrastructure. My process blends systems thinking
                with iterative delivery so stakeholders stay aligned from prototype to scale.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Recent work spans AI-assisted workflows, commerce dashboards, and developer tooling.
                I specialize in Next.js ecosystems, Node services, and pragmatic ML integrations that
                ship safely behind evaluation gates.
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                Career goals center on long-term platform partnerships: mentoring engineers,
                codifying engineering standards, and helping teams compound velocity without sacrificing
                resilience.
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
