"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Unique gradient per project — no external images needed
const PROJECT_GRADIENTS = [
  "from-violet-900/80 via-fuchsia-900/60 to-sky-900/80",
  "from-sky-900/80 via-cyan-900/60 to-emerald-900/80",
  "from-emerald-900/80 via-teal-900/60 to-violet-900/80",
  "from-fuchsia-900/80 via-pink-900/60 to-orange-900/80",
  "from-amber-900/80 via-orange-900/60 to-rose-900/80",
];

const PROJECT_ICONS = ["🎓", "💼", "🍃", "🧠", "📊"];

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="projects-heading"
          eyebrow="Selected work"
          title="Featured projects"
          subtitle="Production-ready builds spanning portals, AI tooling, and analytics—a snapshot of recent engagements."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-border"
            >
              <GlassCard className="group overflow-hidden rounded-[1.1rem] p-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(139,92,246,0.22)]">
                {/* Gradient hero instead of image */}
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${PROJECT_GRADIENTS[index % PROJECT_GRADIENTS.length]}`}>
                  {/* Decorative grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />

                  {/* Glow orbs */}
                  <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
                  <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                      <span className="text-5xl" role="img" aria-label={project.title}>
                        {PROJECT_ICONS[index % PROJECT_ICONS.length]}
                      </span>
                      <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur">
                        {project.tech[0]}
                      </span>
                    </div>
                  </div>

                  {/* Bottom fade */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="space-y-4 p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 max-w-prose text-sm leading-relaxed text-zinc-400">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/25 hover:bg-white/10 sm:flex-none"
                    >
                      <Github className="h-4 w-4" aria-hidden />
                      GitHub
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-sky-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.02] sm:flex-none"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
