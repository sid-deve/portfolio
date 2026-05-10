"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Sparkles,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";

const FLOATING_BADGES = [
  { label: "Next.js", icon: Sparkles },
  { label: "Node.js", icon: Boxes },
  { label: "AI APIs", icon: Workflow },
];

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-14"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.35),transparent_55%),radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16 lg:px-8">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-zinc-300 shadow-inner shadow-white/5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Available for premium engagements
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Full stack products with{" "}
            <span className="gradient-text">startup-grade polish.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-pretty text-lg text-zinc-400 sm:text-xl"
          >
            I architect and ship resilient web platforms—pairing expressive interfaces
            with dependable APIs, observability, and thoughtful AI integrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-sky-400 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-500/25 transition-transform hover:scale-[1.02]"
            >
              Hire Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-zinc-100 backdrop-blur transition-colors hover:border-white/25 hover:bg-white/10"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {[
              { label: "Projects Completed", value: "48+" },
              { label: "Technologies", value: "18+" },
              { label: "Years Experience", value: "5+" },
            ].map((stat) => (
              <GlassCard
                key={stat.label}
                className="px-4 py-4 text-left hover:border-violet-400/30 hover:shadow-violet-500/15"
              >
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-wide text-zinc-500">{stat.label}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="gradient-border">
            <GlassCard strong className="relative overflow-hidden rounded-[1.15rem] p-4 sm:p-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
                <Image
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=80"
                  alt="Portrait of the developer in a professional workspace"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />

              {FLOATING_BADGES.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{
                    opacity: 1,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: { delay: 0.45 + index * 0.08, duration: 0.45 },
                    y: {
                      delay: 0.45 + index * 0.08,
                      duration: 5 + index * 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`absolute flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md ${
                    index === 0
                      ? "left-4 top-8"
                      : index === 1
                        ? "bottom-16 right-4"
                        : "bottom-8 left-6"
                  }`}
                >
                  <badge.icon className="h-4 w-4 text-violet-300" aria-hidden />
                  {badge.label}
                </motion.div>
              ))}
            </GlassCard>
          </div>

          <motion.div
            aria-hidden
            className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-violet-500/35 blur-3xl"
            animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            aria-hidden
            className="absolute -right-12 bottom-4 h-44 w-44 rounded-full bg-sky-400/25 blur-3xl"
            animate={{ opacity: [0.25, 0.45, 0.25], y: [0, 18, 0] }}
            transition={{ duration: 11, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}
