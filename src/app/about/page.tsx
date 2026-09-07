import AboutIntro from "@/components/about/AboutIntro";
import AboutFeatures from "@/components/about/AboutFeatures";
import AboutGallery from "@/components/about/AboutGallery";
import Testimonials from "@/components/landing/Testimonials";
import AboutValues from "@/components/about/AboutValues";

export default function AboutPage() {
  return (
    <>
      <AboutIntro />
      <AboutFeatures />
      <AboutGallery />
      <AboutValues/>
      <Testimonials />
    </>
  );
}
