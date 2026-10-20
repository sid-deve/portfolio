import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)",  color: "#0a0c18" },
    { media: "(prefers-color-scheme: light)", color: "#f3f4fa" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://siddharthakumar.dev"),
  title: {
    default: "Siddhartha Kumar — Full Stack Developer",
    template: "%s | Siddhartha Kumar",
  },
  description:
    "Siddhartha Kumar is a Full Stack Developer at Jamtech Technologies, Lucknow — specialising in Next.js, WordPress, React, Node.js, Laravel, and SEO-optimised web platforms. Available for freelance projects.",
  keywords: [
    "Siddhartha Kumar",
    "Full Stack Developer",
    "Software Engineer Lucknow",
    "Next.js Developer India",
    "WordPress Developer",
    "React Developer",
    "Node.js Developer",
    "Laravel Developer",
    "Jamtech Technologies",
    "Freelance Web Developer India",
    "Headless WordPress",
    "SEO Expert",
    "Portfolio",
    "AI Automation",
  ],
  authors: [{ name: "Siddhartha Kumar", url: "https://siddharthakumar.dev" }],
  creator: "Siddhartha Kumar",
  publisher: "Siddhartha Kumar",
  category: "Technology",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Siddhartha Kumar — Full Stack Developer",
    description:
      "Full Stack Developer at Jamtech Technologies, Lucknow. Building fast, scalable web apps with Next.js, WordPress, Laravel & Node.js.",
    type: "website",
    locale: "en_IN",
    url: "https://siddharthakumar.dev",
    siteName: "Siddhartha Kumar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Siddhartha Kumar — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhartha Kumar — Full Stack Developer",
    description:
      "Full Stack Developer at Jamtech Technologies, Lucknow — Next.js, WordPress, Laravel & Node.js.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://siddharthakumar.dev",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://siddharthakumar.dev/#person",
        name: "Siddhartha Kumar",
        url: "https://siddharthakumar.dev",
        email: "yadavsid50k@gmail.com",
        jobTitle: "Software Engineer",
        worksFor: {
          "@type": "Organization",
          name: "Jamtech Technologies Pvt. Ltd",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lucknow",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
        },
        knowsAbout: [
          "Next.js", "React", "WordPress", "Laravel",
          "Node.js", "REST APIs", "SEO", "Tailwind CSS",
          "MySQL", "MongoDB",
        ],
        sameAs: [
          "https://linkedin.com/in/kaushlendra-pal-42a400251",
          "https://github.com/sid-deve",
          "https://instagram.com",
          "https://facebook.com",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://siddharthakumar.dev/#website",
        url: "https://siddharthakumar.dev",
        name: "Siddhartha Kumar — Full Stack Developer",
        description:
          "Portfolio of Siddhartha Kumar, Full Stack Developer at Jamtech Technologies, Lucknow.",
        author: { "@id": "https://siddharthakumar.dev/#person" },
        inLanguage: "en-IN",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://siddharthakumar.dev/#profilepage",
        url: "https://siddharthakumar.dev",
        name: "Siddhartha Kumar — Full Stack Developer Portfolio",
        about: { "@id": "https://siddharthakumar.dev/#person" },
        mainEntity: { "@id": "https://siddharthakumar.dev/#person" },
      },
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://siddharthakumar.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>
          <a
            href="#home"
            className="pointer-events-none fixed left-4 top-0 z-[100] -translate-y-24 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900 opacity-0 shadow-lg transition-all focus:pointer-events-auto focus:translate-y-4 focus:opacity-100"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
