import StepSection from "@/components/landing/step/stepSection";
import Hero from "@/components/landing/hero/Hero";
import TestimonialSection from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/Cta";
import FastMenuSection from "@/components/landing/fastMenuSection";
import WhyChooseUsSection from "@/components/landing/Keunggulan";
import Bestsellers from "@/components/landing/Bestsellers";
import FAQSection from "@/components/landing/Faq";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <WhyChooseUsSection />
      <FastMenuSection />
      <Bestsellers />
      <StepSection category="all" />
      <CTASection />
      <FAQSection />
      <TestimonialSection />
    </main>
  );
}
