import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname, "../"),
  // Ensure Node.js built-ins used in db.ts are never bundled into
  // client or Edge chunks — they are server-only.
  serverExternalPackages: ["bcryptjs"],

  images: {
    // Unsplash is no longer used; keep the pattern for testimonial avatars
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
