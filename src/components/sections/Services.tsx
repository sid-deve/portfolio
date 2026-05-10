"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          eyebrow="Capabilities"
          title="Services engineered for momentum"
          subtitle="From discovery workshops to launch-day observability, every engagement is structured like a product team—not a ticket queue."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <motion.div key={service.title} variants={item}>
              <div className="gradient-border h-full">
                <GlassCard className="group relative h-full overflow-hidden rounded-[1.05rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/35 hover:shadow-[0_24px_80px_rgba(139,92,246,0.18)]">
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-violet-500/25 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-sky-400/15 blur-3xl" />
                  </div>
                  <div className="relative flex flex-col gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/35 to-sky-400/25 text-violet-100 ring-1 ring-white/15">
                      <service.icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{service.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
