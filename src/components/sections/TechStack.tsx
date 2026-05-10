"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechLogo } from "@/components/ui/TechLogo";

export function TechStack() {
  return (
    <section aria-labelledby="tech-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="tech-heading"
          eyebrow="Stack"
          title="Technologies I ship with daily"
          subtitle="A pragmatic toolkit—chosen for ecosystem maturity, hiring accessibility, and long-term maintainability."
        />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
        >
          {TECH_STACK.map((tech) => (
            <motion.li
              key={tech.slug}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="gradient-border"
            >
              <div className="flex flex-col items-center gap-3 rounded-[1rem] bg-[rgb(var(--surface-elevated)/0.65)] p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(56,189,248,0.12)]">
                <TechLogo slug={tech.slug} name={tech.name} />
                <p className="text-sm font-semibold text-white">{tech.name}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
