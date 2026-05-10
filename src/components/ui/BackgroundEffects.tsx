"use client";

import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden noise-overlay"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[length:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <motion.div
        className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-violet-600/25 blur-[120px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-120px] top-1/3 h-[420px] w-[420px] rounded-full bg-sky-500/20 blur-[130px]"
        animate={{ y: [0, 40, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-160px] left-1/3 h-[460px] w-[460px] rounded-full bg-fuchsia-500/15 blur-[140px]"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 6, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
