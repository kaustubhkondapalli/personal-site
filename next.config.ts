import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this folder. Without it, Turbopack walks up
  // and finds a stray lockfile in the home directory.
  turbopack: { root: __dirname },
};

export default nextConfig;
