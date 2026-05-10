"use client";

import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  strong?: boolean;
};

export function GlassCard({
  className,
  strong,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        strong ? "glass-strong" : "glass",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
