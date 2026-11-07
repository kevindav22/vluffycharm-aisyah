import { TypesSeo } from "@/types/globalTypes";

export const seoData: TypesSeo = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.vluffycharm.my.id",
  ogImage: "/og-image.png",
  locale: "id_ID",
  themeColor: "#fda4af",
  title: "Charm Bracelet Custom Handmade — Vluffy Store",
  description:
    "Vluffy Store menjual charm bracelet dan jam tangan custom handmade di Sleman, Yogyakarta. Pilih koleksi siap pakai atau rangkai gelang charm sendiri.",
  keywords: [
    "charm bracelet",
    "gelang charm",
    "charm bracelet custom",
    "gelang charm custom",
    "jam tangan custom",
    "charm bracelet jogja",
    "vluffy",
  ],
  priceRange: "Rp55.000 - Rp250.000",
  sameAs: [
    "https://www.instagram.com/vluffy.craft",
    "https://www.tiktok.com/@vluffy.craft",
    "https://id.shp.ee/6kE8XNqw",
  ],
  address: {
    streetAddress: "Jl. Nusa Indah No.58, Ngringin, Condongcatur, Kec. Depok",
    addressLocality: "Sleman",
    addressRegion: "Daerah Istimewa Yogyakarta",
    postalCode: "55283",
    addressCountry: "ID",
  },

  regionCode: "ID-YO",

  geo: { lat: -7.7561768, lng: 110.409622 },
  hasMap: "https://www.google.com/maps/place/Vluffy+Store/@-7.7561768,110.409622,17z/data=!4m6!3m5!1s0x2e7a599d042723f5:0xb50947a1dbb808bd!8m2!3d-7.7561768!4d110.409622!16s%2Fg%2F11zz4sgqrc",
  openingHours: {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "13:00",
    closes: "21:00",
  },
};
