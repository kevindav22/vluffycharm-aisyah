import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tambahkan IP lokal untuk akses mobile
  allowedDevOrigins: ["10.194.229.192:3000", "10.194.229.192", "192.168.8.220"],

  // Kembalikan reactCompiler ke root
  reactCompiler: true,

  images: {
    formats: ["image/avif", "image/webp"],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [50, 55, 60, 65, 70, 75],
  },
};

export default nextConfig;
