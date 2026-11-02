import type { Product } from "@/types/globalTypes";

export const productData: Product[] = [
  //==================== BRACELET (siap pakai) ====================
  // `price` = harga diskon, `originalPrice` = harga awal (dicoret).
  {
    id: 1,
    name: "F1 Series",
    image: "/products/bracelet/f1.webp",
    price: 55000,
    originalPrice: 80000,
    category: "bracelet",
    bestseller: true,
  },
  {
    id: 2,
    name: "Spider Series",
    image: "/products/bracelet/spider.webp",
    price: 60000,
    originalPrice: 90000,
    category: "bracelet",
  },
  {
    id: 3,
    name: "Spider Couple",
    image: "/products/bracelet/spider-couple.webp",
    price: 60000,
    originalPrice: 120000,
    category: "bracelet",
    bestseller: true,
  },

  //==================== WATCH READY (siap pakai) ====================
  // DUMMY: 3 data contoh. Ganti dengan produk real saat stok tersedia.
  // Foto dummy di-copy dari bundling (file terpisah) — ganti dengan foto asli.
  /*
  {
    id: 4,
    name: "Watch Ready Series 1",
    image: "/products/watch-ready/watch-ready-1.webp",
    price: 55000,
    originalPrice: 80000,
    category: "watch-ready",
  },
  {
    id: 5,
    name: "Watch Ready Series 2",
    image: "/products/watch-ready/watch-ready-2.webp",
    price: 55000,
    originalPrice: 80000,
    category: "watch-ready",
  },
  {
    id: 6,
    name: "Watch Ready Series 3",
    image: "/products/watch-ready/watch-ready-3.webp",
    price: 55000,
    originalPrice: 80000,
    category: "watch-ready",
    bestseller: true,
  },
  */
  

  //==================== BUNDLING ====================
  // idProduct ada di BundlingPackage (src/data/bundlingData.ts).
  // Harga & nama paket di sini; detail rules di BundlingPackage.
  // `price` = harga diskon (ditampilkan besar).
  // `originalPrice` = harga awal (dicoret). Kosongkan jika tanpa diskon.
  {
    id: 8,
    name: "Italian Bundling 1",
    image: "/products/bundling/italian1.webp",
    price: 55000,
    originalPrice: 70000,
    category: "bundling",
    bestseller: true,
  },
  {
    id: 9,
    name: "Italian Bundling 2",
    image: "/products/bundling/italian2.webp",
    price: 68000,
    originalPrice: 90000,
    category: "bundling",
  },
  {
    id: 10,
    name: "Italian Bundling 3",
    image: "/products/bundling/italian3.webp",
    price: 80000,
    originalPrice: 110000,
    category: "bundling",
    bestseller: true,
  },
  {
    id: 11,
    name: "Italian Bundling 4",
    image: "/products/bundling/italian4.webp",
    price: 60000,
    originalPrice: 75000,
    category: "bundling",
  },
  {
    id: 12,
    name: "Italian Bundling 5",
    image: "/products/bundling/italian5.webp",
    price: 73000,
    originalPrice: 95000,
    category: "bundling",
  },
];

