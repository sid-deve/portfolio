"use client";

import { motion } from "framer-motion";
import { WHY_FEATURES } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChoose() {
  return (
    <section aria-labelledby="why-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="why-heading"
          eyebrow="Why work together"
          title="Principles that compound delivery confidence"
          subtitle="Every engagement ships with engineering hygiene baked in—so your roadmap stays predictable as complexity grows."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.45 }}
            >
              <div className="gradient-border h-full">
                <GlassCard className="group h-full rounded-[1.05rem] p-6 transition-all duration-300 hover:border-sky-400/35 hover:shadow-[0_22px_70px_rgba(56,189,248,0.16)]">
                  <div className="flex flex-col gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/25 to-violet-500/35 text-sky-100 ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-[1.06]">
                      <feature.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{feature.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
