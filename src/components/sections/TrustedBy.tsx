"use client";

import { motion } from "framer-motion";
import { BRANDS } from "@/lib/constants";

export function TrustedBy() {
  const loopBrands = [...BRANDS, ...BRANDS];

  return (
    <section
      aria-labelledby="trusted-heading"
      className="border-y border-white/5 bg-white/[0.02] py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <p id="trusted-heading" className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
            Trusted by teams shipping bold ideas
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[rgb(var(--surface))] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[rgb(var(--surface))] to-transparent" />

          <div
            className="flex w-max gap-16 pr-16 animate-marquee"
            aria-label="Client and partner logos"
          >
            {loopBrands.map((brand, index) => (
              <span
                key={`${brand}-${index}`}
                className="flex items-center text-lg font-semibold tracking-tight text-zinc-500 grayscale transition-all duration-300 hover:grayscale-0 hover:text-white"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
