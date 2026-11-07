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
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
