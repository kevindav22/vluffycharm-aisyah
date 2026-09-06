"use client";

import { useMemo, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./ProductCard";
import { productData } from "@/data/productData";
import type { ProductCategory } from "@/types/globalTypes";

type FilterKey = "all" | ProductCategory;

const CollectionSection = () => {
  const [activeCategory, setActiveCategory] = useState<FilterKey>("all");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return productData
      .filter((p) => activeCategory === "all" || p.category === activeCategory)
      .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  }, [activeCategory, search]);

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
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="py-10 text-center text-sm text-white/80">
              Produk tidak ditemukan.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
