import type { Metadata } from "next";
import DesignBuilder from "@/components/design/DesignBuilder";
import CTASection from "@/components/landing/Cta";
import StepSection from "@/components/landing/step/stepSection";

export const metadata: Metadata = {
  title: "Charm Builder — Buat Gelang Charm Custom",
  description:
    "Rangkai gelang charm custom sendiri dengan Charm Builder Vluffy. Pilih base, susun charm, atur posisi, lalu pesan langsung via WhatsApp.",
  alternates: {
    canonical: "/custom-charm",
  },
  openGraph: {
    url: "/custom-charm",
    title: "Charm Builder — Buat Gelang Charm Custom | Vluffy",
    description:
      "Rangkai gelang charm custom sendiri. Pilih base, susun charm, atur posisi, lalu pesan via WhatsApp.",
  },
};

const CustomCharmPage = () => {
  return (
    <section className="bg-white">
      <DesignBuilder mode="charm" />
      <StepSection category="customCharm" />
      <CTASection />
    </section>
  );
};

export default CustomCharmPage;
