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
        {/* ── Left: copy ── */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border b-subtle bg-card px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] t-body shadow-inner shadow-white/5"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Available for premium engagements
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-4xl font-semibold tracking-tight t-heading sm:text-5xl lg:text-6xl"
          >
            Full stack products with{" "}
            <span className="gradient-text">startup-grade polish.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-pretty text-lg t-muted sm:text-xl"
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
              className="inline-flex items-center gap-2 rounded-full border b-default bg-card px-7 py-3 text-sm font-semibold t-heading backdrop-blur transition-colors hover:bg-white/10"
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
              { label: "Projects Completed", value: "5+" },
              { label: "Technologies", value: "10+" },
              { label: "Years Experience", value: "1.5+" },
            ].map((stat) => (
              <GlassCard
                key={stat.label}
                className="px-4 py-4 text-left hover:border-violet-400/30 hover:shadow-violet-500/15"
              >
                <p className="text-2xl font-semibold t-heading">{stat.value}</p>
                <p className="text-xs uppercase tracking-wide t-subtle">{stat.label}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>

        {/* ── Right: professional photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Ambient glows */}
          <motion.div
            aria-hidden
            className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-violet-500/30 blur-3xl"
            animate={{ opacity: [0.3, 0.55, 0.3], scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div
            aria-hidden
            className="absolute -right-8 bottom-8 h-48 w-48 rounded-full bg-sky-400/20 blur-3xl"
            animate={{ opacity: [0.2, 0.4, 0.2], y: [0, 16, 0] }}
            transition={{ duration: 11, repeat: Infinity }}
          />

          {/* Photo card */}
          <div className="gradient-border relative">
            <GlassCard strong className="relative overflow-hidden rounded-[1.4rem] p-2">
              <div className="relative h-[420px] w-[300px] sm:h-[480px] sm:w-[340px] overflow-hidden rounded-[1.1rem]">
                <Image
                  src="/photo-hero.jpeg"
                  alt="Siddhartha Kumar — Full Stack Developer"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 300px, 340px"
                />
                {/* Subtle bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Name tag overlay at bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-xl border border-white/15 bg-black/50 px-4 py-3 backdrop-blur-md">
                    <p className="text-sm font-semibold text-white">Siddhartha Kumar</p>
                    <p className="text-xs text-zinc-400">Full Stack Developer</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Floating tech badges */}
          {FLOATING_BADGES.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: 0.5 + index * 0.1, duration: 0.45 },
                y: {
                  delay: 0.5 + index * 0.1,
                  duration: 5 + index * 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className={`absolute flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md ${
                index === 0
                  ? "-top-3 left-4"
                  : index === 1
                    ? "-right-4 top-1/3"
                    : "-bottom-3 left-8"
              }`}
            >
              <badge.icon className="h-4 w-4 text-violet-300" aria-hidden />
              {badge.label}
            </motion.div>
          ))}

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute -right-3 bottom-20 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/70 px-3 py-2 text-xs font-semibold text-emerald-400 shadow-lg backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            Available now
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
