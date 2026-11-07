import type { Metadata, Viewport } from "next";
import { Barlow_Semi_Condensed, Teko } from "next/font/google";

import "aos/dist/aos.css";

import "./globals.css";

import AosProvider from "@/components/ui/AosProvider";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import { JsonLd } from "@/components/seo/JsonLd";
import { profilData } from "@/data/statisData";
import { seoData } from "@/data/seoData";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { siteUrl } from "@/lib/seo";

const body = Barlow_Semi_Condensed({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const heading = Teko({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoData.title,
    template: `%s | ${profilData.shortName}`,
  },
  description: seoData.description,
  applicationName: profilData.name,
  authors: [{ name: profilData.name, url: siteUrl }],
  creator: profilData.name,
  publisher: profilData.name,
  category: "shopping",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: seoData.locale,
    url: siteUrl,
    siteName: profilData.name,
    title: seoData.title,
    description: seoData.description,
    images: [
      {
        url: seoData.ogImage,
        width: 1200,
        height: 630,
        alt: seoData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoData.title,
    description: seoData.description,
    images: [seoData.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "geo.region": seoData.regionCode,
    "geo.placename": `${seoData.address.addressLocality}, ${seoData.address.addressRegion}`,
    "geo.position": `${seoData.geo.lat};${seoData.geo.lng}`,
    ICBM: `${seoData.geo.lat}, ${seoData.geo.lng}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: seoData.themeColor,
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="id"
      data-scroll-behavior="smooth"
      className={`${body.variable} ${heading.variable}`}
    >
      <body className="antialiased touch-manipulation">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <GoogleTagManager />
        <AosProvider />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
