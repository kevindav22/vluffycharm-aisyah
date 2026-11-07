import type { ProductCategory } from "@/types/globalTypes";

export type CategoryInfo = {
  slug: ProductCategory;
  label: string;

  heading: string;
  title: string;
  description: string;

  intro: string[];
  keywords: string[];
};

export const categoryInfo: Record<ProductCategory, CategoryInfo> = {
  bracelet: {
    slug: "bracelet",
    label: "Bracelet",
    heading: "Gelang Charm Siap Pakai",
    title: "Gelang Charm Siap Pakai — Bracelet Series",
    description:
      "Koleksi gelang charm siap pakai Vluffy Accessories: series F1, Spider, dan Spider Couple. Stainless anti karat, cocok dipakai harian atau untuk kado pasangan.",
    intro: [
      "Semua bracelet di halaman ini sudah dirangkai manual oleh kami, jadi bisa langsung kamu pakai begitu sampai. Base-nya stainless steel anti karat dengan finishing mengkilap, aman untuk kulit sensitif dan tidak mudah luntur meski dipakai harian.",
      "Kalau kamu mencari gelang charm untuk pasangan, Spider Couple tersedia dalam satu paket berisi dua gelang dengan desain senada. Ukuran gelang bisa disesuaikan saat konfirmasi pesanan lewat WhatsApp, jadi tidak perlu khawatir soal lingkar pergelangan.",
      "Untuk yang lebih suka merangkai sendiri, semua bracelet di sini juga bisa dijadikan referensi. Buka Custom Charm untuk memilih base dan menyusun charm sesuai ceritamu.",
    ],
    keywords: [
      "gelang charm",
      "charm bracelet",
      "gelang charm siap pakai",
      "bracelet couple",
      "gelang charm murah",
    ],
  },
  "watch-ready": {
    slug: "watch-ready",
    label: "Watch Ready",
    heading: "Jam Tangan Custom Siap Pakai",
    title: "Jam Tangan Custom Watch Ready — Siap Pakai",
    description:
      "Jam tangan custom watch ready dari Vluffy Accessories. Kombinasi jam dan charm yang sudah dirangkai, siap dipakai tanpa perlu kustomisasi.",
    intro: [
      "Watch Ready adalah jam tangan yang sudah dipadukan dengan charm oleh kami, jadi bisa langsung dipakai tanpa proses kustomisasi. Cocok kalau kamu ingin tampilan jam yang lebih personal tapi tidak punya waktu untuk merangkai sendiri.",
      "Semua jam di kategori ini memakai mesin yang sudah kami uji sebelum dikirim. Charm ditempel permanen sehingga tidak mudah lepas saat dipakai beraktivitas.",
    ],
    keywords: [
      "jam tangan custom",
      "watch ready",
      "jam tangan charm",
      "jam tangan couple",
      "jam tangan unik",
    ],
  },
  bundling: {
    slug: "bundling",
    label: "Bundling",
    heading: "Paket Bundling Charm Bracelet",
    title: "Paket Bundling Gelang Charm — Lebih Hemat",
    description:
      "Paket bundling charm bracelet Vluffy Accessories. Base gelang italian dan charm bonus dipilih sendiri sesuai aturan tiap paket, harga lebih hemat dari beli terpisah.",
    intro: [
      "Paket bundling menggabungkan base gelang italian dengan kuota charm bonus yang bisa kamu pilih sendiri. Karena dibeli dalam satu paket, harganya lebih murah dibanding membeli base dan charm secara terpisah.",
      "Setiap paket punya aturan berbeda soal jumlah base dan kategori charm bonus yang boleh dipilih. Setelah memilih paket, kamu akan diarahkan ke halaman pemilihan charm bonus sebelum konfirmasi lewat WhatsApp.",
    ],
    keywords: [
      "italian charm bracelet",
      "gelang italian charm",
      "paket charm bracelet",
      "bundling charm hemat",
      "charm bracelet murah",
    ],
  },
};

export const categorySlugs = Object.keys(categoryInfo) as ProductCategory[];

export const isProductCategory = (value: string): value is ProductCategory =>
  value in categoryInfo;
