import type { Metadata } from "next";
import StepSection from "@/components/landing/step/stepSection";
import Hero from "@/components/landing/hero/Hero";
import TestimonialSection from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/Cta";
import SizingLink from "@/components/ui/SizingLink";
import FastMenuSection from "@/components/landing/fastMenuSection";
import WhyChooseUsSection from "@/components/landing/Keunggulan";
import Bestsellers from "@/components/landing/Bestsellers";
import FAQSection from "@/components/landing/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="bg-white">
      <JsonLd data={faqSchema()} />
      <Hero />
      <WhyChooseUsSection />
      <FastMenuSection />
      <Bestsellers />
      <StepSection category="all" />
      <div className="mx-auto flex max-w-7xl justify-center px-5 pb-8 md:px-8 lg:px-12">
        <SizingLink label="Bingung menentukan panjang gelang? Lihat panduan ukuran" />
      </div>
      <CTASection />
      <FAQSection />
      <TestimonialSection />
    </main>
  );
}
