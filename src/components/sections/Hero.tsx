"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { SKIcon } from "@/components/ui/SKLogo";

const FLOATING_BADGES = [
  { label: "Next.js", icon: Sparkles },
  { label: "Node.js", icon: Boxes },
  { label: "AI APIs", icon: Workflow },
];

const CODE_LINES = [
  { indent: 0, tokens: [{ t: "keyword", v: "const" }, { t: "space", v: " " }, { t: "var", v: "launch" }, { t: "op", v: " = " }, { t: "fn", v: "async" }, { t: "op", v: " () => {" }] },
  { indent: 1, tokens: [{ t: "keyword", v: "const" }, { t: "space", v: " " }, { t: "var", v: "app" }, { t: "op", v: " = " }, { t: "keyword", v: "await" }, { t: "space", v: " " }, { t: "fn", v: "build" }, { t: "op", v: "({" }] },
  { indent: 2, tokens: [{ t: "prop", v: "stack" }, { t: "op", v: ": [" }, { t: "str", v: '"Next.js"' }, { t: "op", v: ", " }, { t: "str", v: '"Node"' }, { t: "op", v: ", " }, { t: "str", v: '"AI"' }, { t: "op", v: "]," }] },
  { indent: 2, tokens: [{ t: "prop", v: "quality" }, { t: "op", v: ": " }, { t: "str", v: '"flagship"' }, { t: "op", v: "," }] },
  { indent: 2, tokens: [{ t: "prop", v: "delivery" }, { t: "op", v: ": " }, { t: "str", v: '"on-time"' }, { t: "op", v: "," }] },
  { indent: 1, tokens: [{ t: "op", v: "});" }] },
  { indent: 1, tokens: [{ t: "keyword", v: "return" }, { t: "space", v: " " }, { t: "var", v: "app" }, { t: "op", v: ".deploy();" }] },
  { indent: 0, tokens: [{ t: "op", v: "};" }] },
];

const TOKEN_COLORS: Record<string, string> = {
  keyword: "text-violet-400",
  var: "text-sky-300",
  fn: "text-fuchsia-400",
  str: "text-emerald-400",
  prop: "text-amber-300",
  op: "text-zinc-400",
  space: "",
};

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

        {/* ── Right: code card ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="gradient-border">
            <GlassCard strong className="relative overflow-hidden rounded-[1.15rem] p-4 sm:p-6">
              {/* Terminal header */}
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <div className="ml-3 flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1">
                  <Terminal className="h-3 w-3 text-zinc-500" />
                  <span className="text-[11px] font-mono text-zinc-500">studio.ts</span>
                </div>
              </div>

              {/* Code block */}
              <div className="rounded-xl bg-black/40 p-5 font-mono text-xs leading-6 sm:text-sm">
                {CODE_LINES.map((line, li) => (
                  <div key={li} className="flex">
                    <span className="mr-4 w-4 select-none text-right text-[10px] text-zinc-700">
                      {li + 1}
                    </span>
                    <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                      {line.tokens.map((tok, ti) => (
                        <span key={ti} className={TOKEN_COLORS[tok.t] ?? ""}>
                          {tok.v}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
                {/* blinking cursor */}
                <div className="mt-1 flex">
                  <span className="mr-4 w-4 select-none text-right text-[10px] text-zinc-700">9</span>
                  <span className="inline-block h-4 w-2 animate-pulse rounded-sm bg-violet-400/80" />
                </div>
              </div>

              {/* Tech badges */}
              {FLOATING_BADGES.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: [0, -10, 0] }}
                  transition={{
                    opacity: { delay: 0.45 + index * 0.08, duration: 0.45 },
                    y: {
                      delay: 0.45 + index * 0.08,
                      duration: 5 + index * 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className={`absolute flex items-center gap-2 rounded-full border border-white/15 bg-black/50 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md ${
                    index === 0
                      ? "-top-3 left-6"
                      : index === 1
                        ? "-right-3 top-1/3"
                        : "-bottom-3 left-10"
                  }`}
                >
                  <badge.icon className="h-4 w-4 text-violet-300" aria-hidden />
                  {badge.label}
                </motion.div>
              ))}

              {/* Glow inside card */}
              <div className="pointer-events-none absolute inset-0 rounded-[1.15rem] bg-gradient-to-br from-violet-500/5 via-transparent to-sky-500/5" />
            </GlassCard>
          </div>

          {/* Avatar / identity pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 rounded-full border border-white/15 bg-[rgb(10,12,24)]/90 px-4 py-2 shadow-xl backdrop-blur-md whitespace-nowrap"
          >
            <SKIcon size={22} />
            <div className="text-left">
              <p className="text-xs font-semibold text-white">Kaushlendra Pal</p>
              <p className="text-[10px] text-zinc-500">WordPress &amp; Next.js Developer</p>
            </div>
          </motion.div>

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
