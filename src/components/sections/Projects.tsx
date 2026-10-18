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

        <div className="grid gap-5 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-border"
            >
              <GlassCard className="group overflow-hidden rounded-[1.1rem] p-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(139,92,246,0.18)]">
                {/* Gradient hero */}
                <div className={`relative aspect-[16/7] overflow-hidden bg-gradient-to-br ${PROJECT_GRADIENTS[index % PROJECT_GRADIENTS.length]}`}>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
                  <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
                  <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-white/5 blur-3xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-4xl" role="img" aria-label={project.title}>
                        {PROJECT_ICONS[index % PROJECT_ICONS.length]}
                      </span>
                      <span className="rounded-full border border-white/20 bg-black/30 px-2.5 py-0.5 text-xs font-semibold text-white/70 backdrop-blur">
                        {project.tech[0]}
                      </span>
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="space-y-3 p-4 sm:p-5">
                  <div>
                    <h3 className="text-base font-semibold t-heading">{project.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed t-muted">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border b-subtle bg-card px-2.5 py-0.5 text-xs font-medium t-label"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border b-default bg-card px-3 py-1.5 text-xs font-semibold t-heading transition-colors hover:bg-white/10 sm:flex-none"
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden />
                      GitHub
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-violet-600 to-sky-400 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-violet-500/20 transition-transform hover:scale-[1.02] sm:flex-none"
                    >
                      Live Demo
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
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
