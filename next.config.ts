import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  // Paksa root ke folder project ini.
  // Tanpa ini Next naik ke ~ dan menemukan /home/kevind/pnpm-lock.yaml.
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },

  // Tambahkan IP lokal untuk akses mobile
  allowedDevOrigins: ["192.168.8.244"],

  // Kembalikan reactCompiler ke root
  reactCompiler: true,

  images: {
    formats: ["image/avif", "image/webp"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [50, 55, 60, 65, 70, 75],
  },
};

export default nextConfig;
