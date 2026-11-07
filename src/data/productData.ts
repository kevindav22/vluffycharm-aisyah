import type { Product } from "@/types/globalTypes";

export const productData: Product[] = [
  {
    id: 1,
    name: "F1 Series",
    image: "/products/bracelet/f1.webp",
    price: 55000,
    originalPrice: 80000,
    category: "bracelet",
    bestseller: true,
    description:
      "Bracelet charm F1 Series adalah gelang charm siap pakai dengan rangkaian charm bernuansa balap dan otomotif. Cocok untuk kamu yang ingin gelang charm dengan karakter kuat tanpa harus merangkai sendiri. Bahan stainless anti karat, aman untuk kulit sensitif, dan bisa dipakai harian.",
    keywords: [
      "bracelet f1 series",
      "gelang charm otomotif",
      "gelang charm siap pakai",
      "charm bracelet f1",
    ],
  },
  {
    id: 2,
    name: "Spider Series",
    image: "/products/bracelet/spider.webp",
    price: 60000,
    originalPrice: 90000,
    category: "bracelet",
    bestseller: true,
    description:
      "Bracelet Spider Series menghadirkan gelang charm dengan aksen jaring laba-laba dan detail metalik. Dirangkai manual satu per satu, cocok untuk gaya kasual maupun streetwear. Base stainless anti karat dengan finishing mengkilap.",
    keywords: [
      "bracelet spider series",
      "gelang charm spider",
      "gelang charm kasual",
      "charm bracelet streetwear",
    ],
  },
  {
    id: 3,
    name: "Spider Couple",
    image: "/products/bracelet/spider-couple.webp",
    price: 60000,
    originalPrice: 120000,
    category: "bracelet",
    bestseller: true,
    description:
      "Spider Couple adalah paket gelang couple dengan desain senada untuk dua orang. Cocok sebagai kado ulang tahun, anniversary, atau hadiah pasangan. Ukuran gelang bisa disesuaikan saat konfirmasi pesanan via WhatsApp.",
    keywords: [
      "gelang couple",
      "gelang couple spider",
      "gelang couple custom",
      "kado gelang couple",
      "bracelet couple",
    ],
  },

  {
    id: 8,
    name: "Italian Bundling 1",
    image: "/products/bundling/italian1.webp",
    price: 55000,
    originalPrice: 70000,
    category: "bundling",
    bestseller: true,
    description:
      "Paket Italian Bundling 1 berisi gelang charm italian dengan 15 base polos plus bonus 3 charm Lumi pilihanmu dari semua seri Lumi. Paket hemat untuk kamu yang ingin gelang charm lengkap sekaligus bisa memilih charm bonus sendiri.",
    keywords: [
      "italian charm bracelet",
      "gelang italian charm",
      "paket charm bracelet",
      "bundling charm hemat",
    ],
  },
  {
    id: 9,
    name: "Italian Bundling 2",
    image: "/products/bundling/italian2.webp",
    price: 68000,
    originalPrice: 90000,
    category: "bundling",
    description:
      "Italian Bundling 2 memberikan kombinasi base gelang italian lebih banyak dengan bonus charm Lumi pilihan. Harga paket lebih hemat dibanding membeli base dan charm terpisah.",
    keywords: [
      "italian charm bracelet",
      "gelang italian charm",
      "bundling charm",
      "paket gelang charm",
    ],
  },
  {
    id: 10,
    name: "Italian Bundling 3",
    image: "/products/bundling/italian3.webp",
    price: 80000,
    originalPrice: 110000,
    category: "bundling",
    bestseller: true,
    description:
      "Italian Bundling 3 adalah paket gelang charm paling lengkap: base italian lebih banyak dengan kuota charm bonus lebih besar. Pilihan tepat kalau kamu ingin merangkai gelang charm penuh tanpa menghabiskan banyak budget.",
    keywords: [
      "italian charm bracelet",
      "gelang italian charm lengkap",
      "paket charm bracelet murah",
      "bundling charm",
    ],
  },
  {
    id: 11,
    name: "Italian Bundling 4",
    image: "/products/bundling/italian4.webp",
    price: 60000,
    originalPrice: 75000,
    category: "bundling",
    description:
      "Italian Bundling 4 menawarkan paket gelang charm italian dengan komposisi base dan charm bonus yang seimbang. Cocok untuk hadiah atau koleksi pribadi.",
    keywords: [
      "italian charm bracelet",
      "gelang italian charm",
      "bundling charm",
      "hadiah gelang charm",
    ],
  },
  {
    id: 12,
    name: "Italian Bundling 5",
    image: "/products/bundling/italian5.webp",
    price: 73000,
    originalPrice: 95000,
    category: "bundling",
    description:
      "Italian Bundling 5 menyediakan base gelang italian dan charm bonus pilihan dengan harga paket hemat. Semua charm bonus bisa kamu pilih sendiri dari seri Lumi.",
    keywords: [
      "italian charm bracelet",
      "gelang italian charm",
      "bundling charm hemat",
      "paket gelang charm",
    ],
  },
];

export const categoryFallback: Record<
  Product["category"],
  { description: string; keywords: string[] }
> = {
  bracelet: {
    description:
      "Bracelet charm siap pakai dari Vluffy Accessories. Dirangkai manual dengan bahan stainless anti karat, aman untuk kulit sensitif, dan bisa dipakai harian.",
    keywords: ["gelang charm", "charm bracelet", "bracelet siap pakai"],
  },
  "watch-ready": {
    description:
      "Jam tangan custom watch ready dari Vluffy Accessories. Kombinasi jam dan charm yang sudah dirangkai, siap dipakai tanpa perlu kustomisasi.",
    keywords: ["jam tangan custom", "watch ready", "jam tangan charm"],
  },
  bundling: {
    description:
      "Paket bundling charm bracelet Vluffy Accessories. Base gelang dan charm bonus dipilih sendiri sesuai aturan tiap paket, harga lebih hemat.",
    keywords: ["bundling charm", "paket gelang charm", "italian charm bracelet"],
  },
};
