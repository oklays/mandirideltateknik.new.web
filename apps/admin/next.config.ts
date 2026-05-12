import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  transpilePackages: ["@mdt/lib", "@mdt/ui"]
};

export default nextConfig;
