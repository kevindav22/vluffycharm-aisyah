import type { Metadata } from "next";
import CustomBuilder from "@/components/custom/CustomBuilder";
import CustomShell from "@/components/custom/CustomShell";
import CTASection from "@/components/landing/Cta";
import StepSection from "@/components/landing/step/stepSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Beranda", path: "/" },
  { name: "Gelang Charm Custom", path: "/custom-charm" },
];

export const metadata: Metadata = {
  title: "Gelang Charm Custom — Rangkai Sendiri",
  description:
    "Buat gelang charm custom sendiri dengan Custom Charm Vluffy. Pilih base gelang, susun charm sesuai ceritamu, atur posisi, lalu pesan langsung via WhatsApp.",
  alternates: {
    canonical: "/custom-charm",
  },
  openGraph: {
    url: "/custom-charm",
    title: "Gelang Charm Custom — Rangkai Sendiri | Vluffy",
    description:
      "Rangkai gelang charm custom sendiri. Pilih base, susun charm, atur posisi, lalu pesan via WhatsApp.",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Gelang charm custom Vluffy Store" },
    ],
  },
};

const CustomCharmPage = () => (
  <>
    <JsonLd data={breadcrumbSchema(crumbs)} />
    <CustomShell crumbs={crumbs} heading="Buat Gelang Charm Custom Sesuai Ceritamu">
      <CustomBuilder mode="charm" />
    </CustomShell>
    <StepSection category="customCharm" />
    <CTASection />
  </>
);

export default CustomCharmPage;
