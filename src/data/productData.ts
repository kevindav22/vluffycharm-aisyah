import type { Product } from "@/types/globalTypes";

export const productData: Product[] = [
  //==================== CHARM ====================
  // `price` = harga diskon, `originalPrice` = harga awal (dicoret).
  {
    id: 1,
    name: "F1 Series",
    image: "/products/charm/f1.webp",
    price: 55000,
    originalPrice: 80000,
    category: "charm",
    bestseller: true,
  },
  {
    id: 2,
    name: "Spider Series",
    image: "/products/charm/spider.webp",
    price: 60000,
    originalPrice: 90000,
    category: "charm",
  },
  {
    id: 3,
    name: "Spider Couple",
    image: "/products/charm/spider-couple.webp",
    price: 70000,
    originalPrice: 120000,
    category: "charm",
    bestseller: true,
  },

  //==================== WATCH ====================
  // Belum ada stok/produk watch. Diisi nanti saat data real tersedia.
  // Selama kosong, kategori watch tampil sebagai "Coming Soon".

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

