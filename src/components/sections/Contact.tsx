"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = {
      name:    (form.elements.namedItem("name")    as HTMLInputElement).value,
      email:   (form.elements.namedItem("email")   as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        // Reset back to idle after 6 seconds so visitor can submit again
        window.setTimeout(() => setStatus("idle"), 6000);
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg((json as { error?: string }).error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error — please check your connection and try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="pb-24 pt-10 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Let's architect your next release"
          subtitle="Tell me about your roadmap, constraints, and ambition—I respond within one business day with next steps."
        />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-start">
          {/* ── Left: Direct channels ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="space-y-8"
          >
            <GlassCard className="space-y-6 p-8">
              <div>
                <h3 className="text-xl font-semibold t-heading">Direct channels</h3>
                <p className="mt-2 text-sm t-muted">
                  Prefer async? Email is the fastest way to get a quote—send your brief, goals, or a
                  quick Loom and I&apos;ll reply within one business day with clear next steps.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-col items-center gap-2.5 rounded-2xl border b-subtle bg-card px-3 py-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400/40 hover:shadow-lg"
                    >
                      <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ${social.color}`}>
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="text-xs font-semibold t-label">{social.label}</span>
                    </Link>
                  );
                })}
              </div>
            </GlassCard>
          </motion.div>

          {/* ── Right: Contact form ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <GlassCard strong className="p-8">
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium t-body">
                    Name <span className="text-red-400" aria-hidden>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    maxLength={100}
                    className="w-full rounded-xl border b-subtle bg-input px-4 py-3 text-sm t-heading outline-none ring-violet-400/0 transition focus:border-violet-400/60 focus:ring-4 focus:ring-violet-500/15"
                    placeholder="Jordan Lee"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium t-body">
                    Email <span className="text-red-400" aria-hidden>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    maxLength={254}
                    className="w-full rounded-xl border b-subtle bg-input px-4 py-3 text-sm t-heading outline-none ring-violet-400/0 transition focus:border-violet-400/60 focus:ring-4 focus:ring-violet-500/15"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Subject (optional) */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium t-body">
                    Subject <span className="text-xs t-subtle">(optional)</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    maxLength={150}
                    className="w-full rounded-xl border b-subtle bg-input px-4 py-3 text-sm t-heading outline-none ring-violet-400/0 transition focus:border-violet-400/60 focus:ring-4 focus:ring-violet-500/15"
                    placeholder="Project enquiry, collaboration…"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium t-body">
                    Message <span className="text-red-400" aria-hidden>*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={5000}
                    className="w-full resize-none rounded-xl border b-subtle bg-input px-4 py-3 text-sm t-heading outline-none ring-violet-400/0 transition focus:border-violet-400/60 focus:ring-4 focus:ring-violet-500/15"
                    placeholder="Share goals, timelines, and links..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-sky-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending"
                    ? "Sending…"
                    : status === "sent"
                      ? "Message sent ✓"
                      : "Send message"}
                  {status !== "sent" && <Send className="h-4 w-4" aria-hidden />}
                </button>

                {/* Success */}
                {status === "sent" && (
                  <p
                    className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-center text-sm text-emerald-400"
                    role="status"
                  >
                    ✓ Your message is saved — I&apos;ll reply within one business day.
                  </p>
                )}

                {/* Error */}
                {status === "error" && (
                  <p
                    className="flex items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-center text-sm text-red-400"
                    role="alert"
                  >
                    {errorMsg}
                  </p>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
