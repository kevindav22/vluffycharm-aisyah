import { faqData, type FaqItem } from "@/data/faqData";
import { profilData } from "@/data/statisData";
import { seoData } from "@/data/seoData";
import { storeStats } from "@/data/statsData";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "Store"],
  "@id": `${siteUrl}/#organization`,
  name: profilData.name,
  alternateName: profilData.alternateName,
  url: siteUrl,
  logo: absoluteUrl(profilData.logo),
  image: absoluteUrl(seoData.ogImage),
  description: seoData.description,
  telephone: `+${profilData.phone}`,
  email: profilData.email,
  priceRange: seoData.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: seoData.address.streetAddress,
    addressLocality: seoData.address.addressLocality,
    addressRegion: seoData.address.addressRegion,
    postalCode: seoData.address.postalCode,
    addressCountry: seoData.address.addressCountry,
  },
  hasMap: seoData.hasMap,
  geo: {
    "@type": "GeoCoordinates",
    latitude: seoData.geo.lat,
    longitude: seoData.geo.lng,
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: seoData.openingHours.days,
    opens: seoData.openingHours.opens,
    closes: seoData.openingHours.closes,
  },
  sameAs: seoData.sameAs,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: storeStats.rating,
    reviewCount: storeStats.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: profilData.name,
  description: seoData.description,
  inLanguage: "id-ID",
  publisher: { "@id": `${siteUrl}/#organization` },
});

export const faqSchema = (items: FaqItem[] = faqData) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
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

    price: String(price),
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
    seller: { "@id": `${siteUrl}/#organization` },

    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "ID",
      },
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency: "IDR",
      },
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "ID",
      returnPolicyCategory:
        "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 3,
    },
  },
});

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

export const breadcrumbSchema = (
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
