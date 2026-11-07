import type { Metadata } from "next";
import AboutIntro from "@/components/about/AboutIntro";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutGallery from "@/components/about/AboutGallery";
import Testimonials from "@/components/landing/Testimonials";
import AboutValues from "@/components/about/AboutValues";
import SizingLink from "@/components/ui/SizingLink";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Vluffy Accessories adalah workshop aksesoris handmade di Yogyakarta yang membuat charm bracelet dan jam tangan custom sejak dari workshop kecil.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    url: "/about",
    title: "Tentang Vluffy Accessories",
    description:
      "Workshop aksesoris handmade di Yogyakarta. Setiap charm dan jam tangan custom adalah cerita yang kamu bawa.",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Vluffy Accessories Yogyakarta" },
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
      <div className="mx-auto flex max-w-7xl justify-center px-5 pb-12 md:px-8 lg:px-12">
        <SizingLink label="Lihat panduan ukuran gelang charm" />
      </div>
      <Testimonials />
    </>
  );
}
