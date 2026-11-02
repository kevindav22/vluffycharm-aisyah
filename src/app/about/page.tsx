import type { Metadata } from "next";
import AboutIntro from "@/components/about/AboutIntro";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutGallery from "@/components/about/AboutGallery";
import Testimonials from "@/components/landing/Testimonials";
import AboutValues from "@/components/about/AboutValues";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Vluffy Accessories adalah workshop aksesoris handmade di Solo yang membuat charm bracelet dan jam tangan custom sejak dari workshop kecil.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    title: "Tentang Vluffy Accessories",
    description:
      "Workshop aksesoris handmade di Solo. Setiap charm dan jam tangan custom adalah cerita yang kamu bawa.",
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
