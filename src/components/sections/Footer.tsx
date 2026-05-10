"use client";

import { ArrowUp, Download } from "lucide-react";
import Link from "next/link";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-black/30 pb-10 pt-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="space-y-4">
          <Link href="#home" className="flex items-center gap-2 text-lg font-semibold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-sky-400 text-sm font-bold">
              FS
            </span>
            Studio.dev
          </Link>
          <p className="max-w-sm text-sm text-zinc-400">
            Premium full stack engineering for teams that want SaaS polish without enterprise drag.
          </p>
          <div className="flex flex-wrap gap-3">
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
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
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

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-8 text-center text-xs text-zinc-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Studio.dev. All rights reserved.
      </div>
    </footer>
  );
}
