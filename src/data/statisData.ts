import { TypesCaraousel, TypesProfile } from "@/types/globalTypes";

export const carouselImg: TypesCaraousel = {
  img: [
    "/img/bracelet.webp",
    "/img/3dcharm.webp",
    "/img/couplebracelet2.webp",
    "/img/watchandbracelet.webp",
  ],
};

// Single source of truth: brand, kontak, dan metadata SEO.
// Ubah di sini saja, seluruh halaman (header, footer, metadata, sitemap,
// robots, JSON-LD) ikut menyesuaikan.
export const profilData: TypesProfile = {
  name: "Vluffy Accessories",
  shortName: "Vluffy",
  logo: "/logo/logovluffy.webp",
  tagline: "Handmade Accessories",
  description:
    "Vluffy Accessories membuat charm bracelet dan jam tangan custom handmade di Solo. Rangkai charm sesuai ceritamu, dari koleksi siap pakai hingga desain sendiri.",
  // Domain produksi. Bisa dioverride lewat NEXT_PUBLIC_SITE_URL tanpa ubah kode.
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vluffy.my.id",
  ogImage: "/og-image.png",
  locale: "id_ID",
  themeColor: "#fda4af",
  keywords: [
    "charm bracelet",
    "gelang charm",
    "charm custom",
    "gelang custom",
    "jam tangan custom",
    "custom watch",
    "aksesoris handmade",
    "charm bracelet solo",
    "vluffy",
    "vluffy accessories",
  ],
  phone: "6285786518023",
  email: "vluffyje@gmail.com",
  address: "Solo, Jawa Tengah, Indonesia",
  city: "Solo",
  region: "Jawa Tengah",
  country: "ID",
  priceRange: "Rp55.000 - Rp250.000",
  pesanUmum:
    "Halo kak, saya ingin bertanya tanya terkait pembelian produk apakah bisa?, saya sangat tertarik dengan produk yang dimiliki Vluffy Accessories",
  socialMedia: {
    instagram: "https://instagram.com/vluffy",
    tiktok: "https://tiktok.com/@vluffy",
    shopee: "https://shopee.co.id/vluffy",
  },
};
