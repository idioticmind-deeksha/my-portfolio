import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    unoptimized: true,
    domains: ["avatars.githubusercontent.com"],
  },
  output: 'export',
};

export default nextConfig;
