"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Timeline() {
  return (
    <section aria-labelledby="timeline-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="timeline-heading"
          eyebrow="Journey"
          title="Experience & milestones"
          subtitle="A curated timeline—roles, internships, certifications, and standout moments from the field."
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-violet-500/60 via-sky-400/40 to-fuchsia-500/40 sm:left-6"
          />

          <ul className="space-y-10">
            {TIMELINE.map((entry, index) => (
              <motion.li
                key={`${entry.role}-${entry.date}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="relative pl-14 sm:pl-16"
              >
                <span className="absolute left-[10px] top-6 flex h-5 w-5 items-center justify-center rounded-full border border-violet-400/60 bg-[rgb(var(--surface))] shadow-[0_0_24px_rgba(167,139,250,0.55)] sm:left-[18px]">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-violet-400 to-sky-300" />
                </span>
                <GlassCard className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300/90">
                    {entry.date}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{entry.role}</h3>
                  <p className="text-sm font-medium text-zinc-400">{entry.org}</p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{entry.description}</p>
                </GlassCard>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
