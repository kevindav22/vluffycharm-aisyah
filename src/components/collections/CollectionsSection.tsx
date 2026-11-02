"use client";

import { useMemo, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import EmptyState from "@/components/ui/EmptyState";
import { productData } from "@/data/productData";
import type { ProductCategory } from "@/types/globalTypes";

type FilterKey = "all" | ProductCategory;

const emptyMessage: Record<ProductCategory, { title: string; text: string }> = {
  charm: {
    title: "Belum ada produk charm",
    text: "Koleksi charm siap pakai sedang disiapkan. Coba lagi nanti ya.",
  },
  watch: {
    title: "COMINGSOON",
    text: "Koleksi watch sedang kami siapkan. Silakan cek kembali dalam waktu dekat.",
  },
  bundling: {
    title: "Belum ada paket bundling",
    text: "Paket bundling sedang disiapkan. Coba lagi nanti ya.",
  },
};

const CollectionSection = () => {
  const [activeCategory, setActiveCategory] = useState<FilterKey>("all");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return productData
      .filter((p) => activeCategory === "all" || p.category === activeCategory)
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  }, [activeCategory, search]);

  // Kategori dipilih tapi datanya masih kosong -> tampilkan state khusus.
  const emptyCategory =
    activeCategory !== "all" && filteredProducts.length === 0
      ? activeCategory
      : null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 md:px-8 lg:px-12">
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

        <div className="flex justify-end">
          <input
            type="text"
            placeholder="Cari produk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-5 block w-full rounded-full border border-slate-200 px-4 py-2 text-sm outline-none focus:border-rose-300 md:max-w-xs"
          />
        </div>

        <div className="">
          {emptyCategory ? (
            <EmptyState title={emptyMessage[emptyCategory].title}>
              {emptyMessage[emptyCategory].text}
            </EmptyState>
          ) : (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {!emptyCategory && filteredProducts.length === 0 && (
            <EmptyState title="Produk tidak ditemukan">
              Coba kata kunci lain atau pilih kategori yang berbeda.
            </EmptyState>
          )}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
