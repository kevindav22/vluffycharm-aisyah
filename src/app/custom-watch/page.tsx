import type { Metadata } from "next";
import CustomBuilder from "@/components/custom/CustomBuilder";
import CustomShell from "@/components/custom/CustomShell";
import CTASection from "@/components/landing/Cta";
import StepSection from "@/components/landing/step/stepSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

const crumbs = [
  { name: "Beranda", path: "/" },
  { name: "Jam Tangan Custom", path: "/custom-watch" },
];

export const metadata: Metadata = {
  title: "Jam Tangan Custom — Padukan Charm Favoritmu",
  description:
    "Kustomisasi jam tangan custom sesuai gayamu di Vluffy. Pilih tipe jam, padukan charm, atur posisi, lalu pesan langsung via WhatsApp.",
  alternates: {
    canonical: "/custom-watch",
  },
  openGraph: {
    type: "website",
    url: "/custom-watch",
    title: "Jam Tangan Custom — Padukan Charm Favoritmu | Vluffy",
    description:
      "Kustomisasi jam tangan sesuai gayamu. Pilih tipe jam, padukan charm, lalu pesan via WhatsApp.",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Jam tangan custom Vluffy Store" },
    ],
  },
};

const CustomWatchPage = () => (
  <>
    <JsonLd data={breadcrumbSchema(crumbs)} />
    <CustomShell crumbs={crumbs} heading="Buat Jam Tangan Custom dengan Charm Pilihanmu">
      <CustomBuilder mode="watch" />
    </CustomShell>
    <StepSection category="customWatch" />
    <CTASection />
  </>
);

export default CustomWatchPage;
