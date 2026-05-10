import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a0c18",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),
  title: {
    default: "Studio.dev — Full Stack Developer Portfolio",
    template: "%s — Studio.dev",
  },
  description:
    "Premium full stack developer specializing in Next.js, React, Node.js, and AI-ready web platforms. SaaS-grade UX, secure APIs, and rapid delivery.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Portfolio",
    "SaaS",
    "Startup",
  ],
  openGraph: {
    title: "Studio.dev — Full Stack Developer Portfolio",
    description:
      "Dark-mode startup portfolio showcasing services, projects, pricing, and contact.",
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Studio.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio.dev — Full Stack Developer Portfolio",
    description:
      "Premium startup-style portfolio for a full stack engineer shipping resilient web products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a
          href="#home"
          className="pointer-events-none fixed left-4 top-0 z-[100] -translate-y-24 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900 opacity-0 shadow-lg transition-all focus:pointer-events-auto focus:translate-y-4 focus:opacity-100"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
