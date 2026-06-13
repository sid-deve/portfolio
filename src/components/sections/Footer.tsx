"use client";

import { ArrowUp, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { SKLogo } from "@/components/ui/SKLogo";

export function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-black/30 pb-10 pt-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        {/* ── Brand + contact ── */}
        <div className="space-y-5">
          <Link href="#home" className="inline-block" aria-label="SK Dev — Home">
            <SKLogo size="md" showTagline />
          </Link>
          <p className="max-w-xs text-sm text-zinc-400 leading-relaxed">
            Premium full stack engineering for teams that want SaaS polish without enterprise drag.
          </p>

          {/* Contact details */}
          <div className="space-y-2.5">
            <a
              href="mailto:yadavsid50k@gmail.com"
              className="flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Mail className="h-3.5 w-3.5 text-violet-400" />
              </span>
              yadavsid50k@gmail.com
            </a>
            <a
              href="tel:+918808841721"
              className="flex items-center gap-2.5 text-sm text-zinc-400 transition-colors hover:text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <Phone className="h-3.5 w-3.5 text-sky-400" />
              </span>
              +91 88088 41721
            </a>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:border-white/25 hover:bg-white/10"
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Navigate
            </p>
            <ul className="space-y-2 text-zinc-300">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Social
            </p>
            <ul className="space-y-2 text-zinc-300">
              {SOCIAL_LINKS.map((link) => {
                const Icon =
                  link.label === "GitHub" ? Github :
                  link.label === "LinkedIn" ? Linkedin :
                  null;
                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition-colors hover:text-white"
                    >
                      {Icon && <Icon className="h-3.5 w-3.5 shrink-0" />}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Colophon
            </p>
            <p className="text-xs leading-relaxed text-zinc-500">
              Crafted with Next.js App Router, Tailwind CSS, Framer Motion, and Lucide icons.
            </p>
          </div>
        </nav>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Kaushlendra Pal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <Mail className="h-3 w-3" />
            <a href="mailto:yadavsid50k@gmail.com" className="hover:text-zinc-300 transition-colors">
              yadavsid50k@gmail.com
            </a>
            <span className="mx-2 text-zinc-700">·</span>
            <Phone className="h-3 w-3" />
            <a href="tel:+918808841721" className="hover:text-zinc-300 transition-colors">
              +91 88088 41721
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
