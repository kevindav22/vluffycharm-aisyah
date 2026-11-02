import type { Metadata, Viewport } from "next";
import { Barlow_Semi_Condensed, Teko } from "next/font/google";

import "./globals.css";

import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import { JsonLd } from "@/components/seo/JsonLd";
import { profilData } from "@/data/statisData";
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
    default: `${profilData.name} — ${profilData.tagline}`,
    template: `%s | ${profilData.shortName}`,
  },
  description: profilData.description,
  keywords: profilData.keywords,
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
    locale: profilData.locale,
    url: siteUrl,
    siteName: profilData.name,
    title: `${profilData.name} — ${profilData.tagline}`,
    description: profilData.description,
    images: [
      {
        url: profilData.ogImage,
        width: 1200,
        height: 630,
        alt: `${profilData.name} — ${profilData.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profilData.name} — ${profilData.tagline}`,
    description: profilData.description,
    images: [profilData.ogImage],
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
  // Ikon diambil dari file convention: src/app/icon.png & src/app/apple-icon.png
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "geo.region": profilData.country,
    "geo.placename": profilData.city,
  },
};

// Pengaturan khusus layar mobile agar interaksi tap responsif.
// Catatan: userScalable/maximumScale sengaja dibiarkan default agar
// pengguna tetap bisa zoom (WCAG 1.4.4).
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: profilData.themeColor,
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleTagManager />
    </html>
  );
};

export default RootLayout;
