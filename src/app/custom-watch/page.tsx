import type { Metadata } from "next";
import DesignBuilder from "@/components/design/DesignBuilder";
import CTASection from "@/components/landing/Cta";
import StepSection from "@/components/landing/step/stepSection";

export const metadata: Metadata = {
  title: "Watch Studio — Kustomisasi Jam Tangan Custom",
  description:
    "Kustomisasi jam tangan sesuai gayamu di Watch Studio Vluffy. Pilih tipe jam, padukan charm, lalu pesan langsung via WhatsApp.",
  alternates: {
    canonical: "/custom-watch",
  },
  openGraph: {
    url: "/custom-watch",
    title: "Watch Studio — Kustomisasi Jam Tangan Custom | Vluffy",
    description:
      "Kustomisasi jam tangan sesuai gayamu. Pilih tipe jam, padukan charm, lalu pesan via WhatsApp.",
  },
};

const CustomWatchPage = () => {
  return (
    <section className="bg-white">
      <DesignBuilder mode="watch" />
      <StepSection category="customWatch" />
      <CTASection />
    </section>
  );
};

export default CustomWatchPage;
