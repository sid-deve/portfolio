import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
