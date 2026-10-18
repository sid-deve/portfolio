"use client";

import { ArrowUp, Download, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { SKLogo } from "@/components/ui/SKLogo";

export function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t b-subtle bg-[rgb(var(--surface-elevated)/0.6)] pb-10 pt-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        {/* ── Brand + contact ── */}
        <div className="space-y-5">
          <Link href="#home" className="inline-block" aria-label="SK Dev — Home">
            <SKLogo size="md" showTagline />
          </Link>
          <p className="max-w-xs text-sm t-muted leading-relaxed">
            Full stack developer crafting high-converting websites &amp; SaaS-grade web apps with Next.js, React, WordPress &amp; Node.js—fast delivery, agency polish, no enterprise overhead.
          </p>

          {/* Contact details */}
          <div className="space-y-2.5">
            <a
              href="mailto:yadavsid50k@gmail.com"
              className="flex items-center gap-2.5 text-sm t-muted transition-colors hover:t-heading"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border b-subtle bg-card">
                <Mail className="h-3.5 w-3.5 text-violet-400" />
              </span>
              yadavsid50k@gmail.com
            </a>
            <a
              href="tel:+918808841721"
              className="flex items-center gap-2.5 text-sm t-muted transition-colors hover:t-heading"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border b-subtle bg-card">
                <Phone className="h-3.5 w-3.5 text-sky-400" />
              </span>
              +91 88088 41721
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border b-default bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wide t-heading transition-colors hover:bg-white/10"
              prefetch={false}
            >
              <Download className="h-4 w-4" aria-hidden />
              Resume
            </Link>
            <button
              type="button"
              onClick={scrollTop}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-sky-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-violet-500/25"
            >
              Back to top
              <ArrowUp className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>

        {/* ── Nav columns ── */}
        <nav aria-label="Footer" className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] t-subtle">
              Navigate
            </p>
            <ul className="space-y-2 t-body">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:t-heading">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] t-subtle">
              Social
            </p>
            <ul className="space-y-2 t-body">
              {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:t-heading"
                    >
                      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] t-subtle">
              Colophon
            </p>
            <p className="text-xs leading-relaxed t-subtle">
              Built on the same modern stack I use for client work—Next.js App Router, React, Tailwind CSS, Framer Motion & SEO-ready performance.
            </p>
          </div>
        </nav>
      </div>
    </footer>
  );
}
