"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { PRICING } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Pricing() {
  return (
    <section aria-labelledby="pricing-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="pricing-heading"
          eyebrow="Engagements"
          title="Flexible pricing for every stage"
          subtitle="Transparent tiers designed like a SaaS roadmap—upgrade surfaces as your validation signals strengthen."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {PRICING.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className={plan.highlighted ? "lg:-translate-y-3" : ""}
            >
              <div className={plan.highlighted ? "gradient-border" : ""}>
                <GlassCard
                  strong={plan.highlighted}
                  className={`relative flex h-full flex-col rounded-[1.1rem] p-7 transition-transform duration-300 hover:scale-[1.02] ${
                    plan.highlighted
                      ? "shadow-[0_30px_120px_rgba(139,92,246,0.35)]"
                      : "hover:-translate-y-1 hover:shadow-[0_24px_90px_rgba(15,23,42,0.45)]"
                  }`}
                >
                  {plan.highlighted ? (
                    <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-violet-500 to-sky-400 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-lg">
                      Recommended
                    </span>
                  ) : null}

                  <div className="mb-6 space-y-2">
                    <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                    <p className="text-sm text-zinc-400">{plan.description}</p>
                    <p className="pt-3 text-4xl font-semibold text-white">{plan.price}</p>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3 text-sm text-zinc-300">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-sky-400 text-white shadow-lg shadow-violet-500/30"
                        : "border border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
