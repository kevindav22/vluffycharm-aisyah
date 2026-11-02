import { faqData } from "@/data/faqData";
import { profilData } from "@/data/statisData";
import { absoluteUrl, siteUrl } from "@/lib/seo";

const socialLinks = [
  profilData.socialMedia.instagram,
  profilData.socialMedia.tiktok,
  profilData.socialMedia.shopee,
];

/** Organization + LocalBusiness — kunci local SEO (Solo). */
export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${siteUrl}/#organization`,
  name: profilData.name,
  alternateName: profilData.shortName,
  url: siteUrl,
  logo: absoluteUrl(profilData.logo),
  image: absoluteUrl(profilData.ogImage),
  description: profilData.description,
  telephone: `+${profilData.phone}`,
  email: profilData.email,
  priceRange: profilData.priceRange,
  address: {
    "@type": "PostalAddress",
    addressLocality: profilData.city,
    addressRegion: profilData.region,
    addressCountry: profilData.country,
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  sameAs: socialLinks,
});

/** WebSite — mendefinisikan nama situs untuk Google. */
export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: profilData.name,
  description: profilData.description,
  inLanguage: "id-ID",
  publisher: { "@id": `${siteUrl}/#organization` },
});

/** FAQPage — memunculkan accordion FAQ di hasil pencarian. */
export const faqSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

type ProductSchemaInput = {
  name: string;
  description: string;
  image: string;
  price: number;
  url: string;
};

/** Product — syarat rich result produk (harga, stok, merek). */
export const productSchema = ({
  name,
  description,
  image,
  price,
  url,
}: ProductSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  description,
  image: [absoluteUrl(image)],
  url: absoluteUrl(url),
  brand: {
    "@type": "Brand",
    name: profilData.name,
  },
  offers: {
    "@type": "Offer",
    url: absoluteUrl(url),
    priceCurrency: "IDR",
    price,
    availability: "https://schema.org/InStock",
    seller: { "@id": `${siteUrl}/#organization` },
  },
});

/** ItemList — mendaftarkan produk di halaman koleksi agar terbaca Google. */
export const itemListSchema = ({
  name,
  items,
}: {
  name: string;
  items: { name: string; path: string; image?: string }[];
}) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  numberOfItems: items.length,
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    url: absoluteUrl(item.path),
    ...(item.image ? { image: absoluteUrl(item.image) } : {}),
  })),
});

/** BreadcrumbList — menampilkan hierarki URL di SERP. */export const breadcrumbSchema = (
  items: { name: string; path: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});
