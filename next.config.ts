import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },

  allowedDevOrigins: ["192.168.8.244", "10.78.196.192"],

  reactCompiler: true,

  images: {
    formats: ["image/avif", "image/webp"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [50, 55, 60, 65, 70, 75],
    minimumCacheTTL: 2592000,
  },
};

export default nextConfig;
