import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Add empty turbopack config to use Turbopack (Next.js 16 default)
  turbopack: {},
};

export default nextConfig;
