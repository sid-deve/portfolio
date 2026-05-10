"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  const testimonial = TESTIMONIALS[active];

  return (
    <section aria-labelledby="testimonials-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="testimonials-heading"
          eyebrow="Social proof"
          title="Teams trust the craft"
          subtitle="Feedback from leaders who needed velocity without sacrificing the premium feel of their brand."
        />

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard strong className="relative overflow-hidden p-8 sm:p-10">
                <Quote
                  className="absolute right-8 top-8 h-14 w-14 text-violet-500/25"
                  aria-hidden
                />
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2 ring-white/15">
                    <Image
                      src={testimonial.image}
                      alt={`Portrait of ${testimonial.name}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <div>
                        <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-zinc-400">{testimonial.role}</p>
                      </div>
                      <div className="flex items-center gap-1 text-amber-300" aria-label={`${testimonial.rating} out of 5 stars`}>
                        {Array.from({ length: testimonial.rating }).map((_, index) => (
                          <Star key={index} className="h-4 w-4 fill-current" aria-hidden />
                        ))}
                      </div>
                    </div>
                    <p className="text-pretty text-base leading-relaxed text-zinc-300">
                      “{testimonial.quote}”
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === active ? "w-8 bg-gradient-to-r from-violet-400 to-sky-400" : "w-2.5 bg-white/20"
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
