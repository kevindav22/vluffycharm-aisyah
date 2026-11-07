import type { Metadata } from "next";
import PageShell from "@/components/ui/PageShell";
import LocalHero from "@/components/local/LocalHero";
import SizingLink from "@/components/ui/SizingLink";
import LocalHighlights from "@/components/local/LocalHighlights";
import LocalProducts from "@/components/local/LocalProducts";
import FAQSection from "@/components/landing/Faq";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { localPage, localFaq } from "@/data/localData";

const path = `/${localPage.slug}`;

const crumbs = [
  { name: "Beranda", path: "/" },
  { name: "Charm Bracelet Jogja", path },
];

export const metadata: Metadata = {
  title: localPage.title,
  description: localPage.description,
  alternates: { canonical: path },
  openGraph: {
    url: path,
    title: `${localPage.title} | Vluffy`,
    description: localPage.description,
    images: [
      { url: "/img/bracelet.webp", alt: "Charm bracelet Vluffy Store" },
    ],
  },
};

const LocalPage = () => (
  <>
    <JsonLd data={breadcrumbSchema(crumbs)} />

    <PageShell crumbs={crumbs}>
      <LocalHero />
      <SizingLink label="Panduan ukuran gelang charm" className="mt-10" />
      <LocalHighlights />
      <LocalProducts />
    </PageShell>

    <FAQSection
      items={localFaq}
      title="Pertanyaan seputar lokasi & pesanan"
      limit={localFaq.length}
    />
  </>
);

export default LocalPage;
