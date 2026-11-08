import type { MetadataRoute } from "next";
import { profilData } from "@/data/statisData";
import { seoData } from "@/data/seoData";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profilData.name,
    short_name: profilData.shortName,
    description: seoData.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: seoData.themeColor,
    lang: "id",
    categories: ["shopping"],
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
