import type { Metadata } from "next";
import CustomBuilder from "@/components/custom/CustomBuilder";
import CTASection from "@/components/landing/Cta";
import StepSection from "@/components/landing/step/stepSection";

export const metadata: Metadata = {
  title: "Custom Watch — Kustomisasi Jam Tangan Custom",
  description:
    "Kustomisasi jam tangan sesuai gayamu di Custom Watch Vluffy. Pilih tipe jam, padukan charm, lalu pesan langsung via WhatsApp.",
  alternates: {
    canonical: "/custom-watch",
  },
  openGraph: {
    url: "/custom-watch",
    title: "Custom Watch — Kustomisasi Jam Tangan Custom | Vluffy",
    description:
      "Kustomisasi jam tangan sesuai gayamu. Pilih tipe jam, padukan charm, lalu pesan via WhatsApp.",
  },
};

const CustomWatchPage = () => {
  return (
    <section className="bg-white">
      <CustomBuilder mode="watch" />
      <StepSection category="customWatch" />
      <CTASection />
    </section>
  );
};

export default CustomWatchPage;
