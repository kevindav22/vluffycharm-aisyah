import type { Metadata } from "next";
import PageShell from "@/components/ui/PageShell";
import SizingHowTo from "@/components/sizing/SizingHowTo";
import SizingTable from "@/components/sizing/SizingTable";
import FAQSection from "@/components/landing/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { sizingFaq } from "@/data/sizingFaq";
import { sizingPage } from "@/data/sizingData";

const path = `/${sizingPage.slug}`;

const crumbs = [
  { name: "Beranda", path: "/" },
  { name: "Panduan Ukuran", path },
];

export const metadata: Metadata = {
  title: sizingPage.title,
  description: sizingPage.description,
  alternates: { canonical: path },
  openGraph: {
    url: path,
    title: `${sizingPage.title} | Vluffy`,
    description: sizingPage.description,
    images: [
      {
        url: "/og-sizing.png",
        width: 1200,
        height: 630,
        alt: sizingPage.heading,
      },
    ],
  },
};

const SizingPage = () => (
  <>
    <JsonLd data={breadcrumbSchema(crumbs)} />
    <JsonLd data={faqSchema(sizingFaq)} />

    <PageShell crumbs={crumbs}>
      <h1 className="text-center text-2xl font-black text-slate-900 md:text-3xl lg:text-4xl">
        {sizingPage.heading}
      </h1>

      <div className="mt-12">
        <SizingHowTo />
      </div>

      <SizingTable />
    </PageShell>

    <FAQSection
      items={sizingFaq}
      title="Pertanyaan soal ukuran"
      limit={sizingFaq.length}
    />
  </>
);

export default SizingPage;
