import type { Product } from "@/types/globalTypes";

export const productData: Product[] = [
  //==================== CHARM ====================
  {
    id: 1,
    name: "Bracelet1",
    image: "/products/charm/bracelet1.webp",
    price: 85000,
    category: "charm",
    bestseller: true,
  },
  {
    id: 2,
    name: "Bracelet2",
    image: "/products/charm/bracelet2.webp",
    price: 95000,
    category: "charm",
  },
  {
    id: 3,
    name: "Bracelet3",
    image: "/products/charm/bracelet3.webp",
    price: 110000,
    category: "charm",
    bestseller: true,
  },
  {
    id: 4,
    name: "Bracelet4",
    image: "/products/charm/bracelet4.webp",
    price: 110000,
    category: "charm",
  },
  {
    id: 5,
    name: "Bracelet5",
    image: "/products/charm/bracelet5.webp",
    price: 110000,
    category: "charm",
  },

  //==================== WATCH ====================
  {
    id: 6,
    name: "Watch1",
    image: "/products/watch/watch1.webp",
    price: 250000,
    category: "watch",
    bestseller: true,
  },
  {
    id: 7,
    name: "Watch2",
    image: "/products/watch/watch2.webp",
    price: 220000,
    category: "watch",
  },

  //==================== BUNDLING ====================
  // idProduct ada di BundlingPackage (src/data/bundlingData.ts).
  // Harga & nama paket di sini; detail rules di BundlingPackage.
  {
    id: 8,
    name: "Italian1",
    image: "/products/bundling/italian1.webp",
    price: 70000,
    category: "bundling",
    bestseller: true,
  },
  {
    id: 9,
    name: "Italian2",
    image: "/products/bundling/italian2.webp",
    price: 90000,
    category: "bundling",
  },
  {
    id: 10,
    name: "Italian3",
    image: "/products/bundling/italian3.webp",
    price: 150000,
    category: "bundling",
  },
];

