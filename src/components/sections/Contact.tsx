"use client";

import { motion } from "framer-motion";
import { Briefcase, Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Fiverr: Briefcase,
} as const;

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sent");
    window.setTimeout(() => setStatus("idle"), 3200);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="pb-24 pt-10 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Let’s architect your next release"
          subtitle="Tell me about your roadmap, constraints, and ambition—I respond within one business day with next steps."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-8"
          >
            <GlassCard className="space-y-6 p-8">
              <div>
                <h3 className="text-xl font-semibold text-white">Direct channels</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Prefer async? Email works beautifully—include links, briefs, or Looms for context.
                </p>
              </div>
              <Link
                href="mailto:hello@yourdomain.com"
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-colors hover:border-white/20 hover:bg-white/10"
              >
                <Mail className="h-5 w-5 text-sky-300" aria-hidden />
                hello@yourdomain.com
              </Link>
              <div className="flex flex-wrap gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = iconMap[social.label as keyof typeof iconMap] ?? Send;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-200 transition-colors hover:border-violet-400/40 hover:text-white"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                      {social.label}
                    </Link>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <GlassCard strong className="p-8">
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-200">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-violet-400/0 transition focus:border-violet-400/60 focus:ring-4 focus:ring-violet-500/15"
                    placeholder="Jordan Lee"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-200">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-violet-400/0 transition focus:border-violet-400/60 focus:ring-4 focus:ring-violet-500/15"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none ring-violet-400/0 transition focus:border-violet-400/60 focus:ring-4 focus:ring-violet-500/15"
                    placeholder="Share goals, timelines, and links..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.01]"
                >
                  Send message
                  <Send className="h-4 w-4" aria-hidden />
                </button>
                {status === "sent" ? (
                  <p className="text-center text-sm text-emerald-400" role="status">
                    Thanks—your note is on its way. I’ll reply shortly.
                  </p>
                ) : null}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
