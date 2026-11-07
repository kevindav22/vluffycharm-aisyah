"use client";

import { useMemo, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import EmptyState from "@/components/ui/EmptyState";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { productData } from "@/data/productData";
import type { ProductCategory } from "@/types/globalTypes";

type FilterKey = "all" | ProductCategory;

const emptyMessage: Record<ProductCategory, { title: string; text: string }> = {
  bracelet: {
    title: "Belum ada produk bracelet",
    text: "Koleksi bracelet siap pakai sedang disiapkan. Coba lagi nanti ya.",
  },
  "watch-ready": {
    title: "Belum ada produk watch ready",
    text: "Koleksi jam tangan siap pakai sedang kami siapkan. Silakan cek kembali dalam waktu dekat.",
  },
  bundling: {
    title: "Belum ada paket bundling",
    text: "Paket bundling sedang disiapkan. Coba lagi nanti ya.",
  },
};

const CollectionSection = ({ crumbs }: { crumbs: { name: string; path: string }[] }) => {
  const [activeCategory, setActiveCategory] = useState<FilterKey>("all");
  const [search, setSearch] = useState("");
  const filteredProducts = useMemo(() => {
    return productData
      .filter((p) => activeCategory === "all" || p.category === activeCategory)
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  }, [activeCategory, search]);

  const emptyCategory =
    activeCategory !== "all" && filteredProducts.length === 0
      ? activeCategory
      : null;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-20 md:px-8 md:pb-16 md:pt-24 lg:px-12">
        <div className="mb-3">
          <Breadcrumb items={crumbs} />
        </div>
        <h1 className="text-center text-2xl font-black text-slate-900 md:text-3xl lg:text-4xl">
          Koleksi Bracelet Charm &amp; Watch Ready
        </h1>

        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

        <div className="flex justify-end">
          <input
            id="cari-produk"
            name="cari-produk"
            type="search"
            autoComplete="off"
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
