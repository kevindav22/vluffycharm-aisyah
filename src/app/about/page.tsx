import type { Metadata } from "next";
import AboutIntro from "@/components/about/AboutIntro";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutGallery from "@/components/about/AboutGallery";
import Testimonials from "@/components/landing/Testimonials";
import AboutValues from "@/components/about/AboutValues";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Vluffy Store adalah workshop aksesoris handmade di Yogyakarta yang membuat charm bracelet dan jam tangan custom sejak dari workshop kecil.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    url: "/about",
    title: "Tentang Vluffy Store",
    description:
      "Workshop aksesoris handmade di Yogyakarta. Setiap charm dan jam tangan custom adalah cerita yang kamu bawa.",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Vluffy Store Yogyakarta" },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <AboutFeatures />
      <AboutGallery />
      <AboutValues />
      <Testimonials />
    </>
  );
}
