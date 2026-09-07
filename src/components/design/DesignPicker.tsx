"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";

import { formatRupiah } from "@/lib/utils";
import SafeImage from "@/components/ui/SafeImage";

type PickerItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props<T extends PickerItem> = {
  title: string;
  items: T[];
  categories: { value: string; label: string }[];
  getCategory: (item: T) => string;
  // mode custom (default)
  onSelect?: (item: T) => void;
  selectedId?: number;
  // mode bundling
  mode?: "bundling";
  selectedIds?: number[];
  onToggle?: (item: T) => void;
  quota?: number;
  selectedCount?: number;
};

function DesignPicker<T extends PickerItem>({
  title,
  items,
  categories,
  getCategory,
  onSelect,
  selectedId,
  mode,
  selectedIds,
  onToggle,
  quota,
  selectedCount,
}: Props<T>) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(categories[0]?.value ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

   const currentLabel =
     categories.find((c) => c.value === category)?.label || category;

   useEffect(() => {
     const handleClickOutside = (e: MouseEvent) => {
       if (
         dropdownRef.current &&
         !dropdownRef.current.contains(e.target as Node)
       ) {
         setIsOpen(false);
       }
     };
     document.addEventListener("mousedown", handleClickOutside);
     return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   // sol-basic item statis - muncul di awal setiap kategori
   const solBasicItem = {
     id: 0,
     name: "sol-basic",
     image: "/custom/charm/basic.webp",
     price: 5000,
   } as T;

   const filtered = useMemo(() => {
     const searchLower = search.toLowerCase();

     // Filter items berdasarkan kategori dan search
     const categoryItems = items.filter((item) => {
       const matchesCategory = getCategory(item) === category;
       const matchesSearch =
         item.name.toLowerCase().includes(searchLower) ||
         item.price.toString().includes(searchLower) ||
         formatRupiah(item.price).toLowerCase().includes(searchLower);

       return matchesCategory && matchesSearch;
     });

     // Check jika sol-basic match search
     const solBasicMatches =
       solBasicItem.name.toLowerCase().includes(searchLower) ||
       solBasicItem.price.toString().includes(searchLower) ||
       formatRupiah(solBasicItem.price).toLowerCase().includes(searchLower);

     // Inject sol-basic di awal jika match search atau tidak ada search
     if (!search || solBasicMatches) {
       return [solBasicItem, ...categoryItems];
     }

     return categoryItems;
   }, [items, category, search, getCategory]);

  return (
    <div className="rounded-2xl border border-rose-100 bg-white shadow-sm">
      <div className="rounded-t-2xl border-b border-rose-100 bg-slate-50/50 p-3 md:p-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="shrink-0 text-xs font-bold text-slate-900 md:text-sm">
            {title}
          </h2>

          <div className="flex min-w-0 max-w-xs items-center gap-1.5 md:max-w-md">
            <div ref={dropdownRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`flex w-28 items-center justify-between gap-1 border border-slate-300 bg-white py-1.5 pl-2.5 pr-1.5 text-xs font-medium text-slate-700 outline-none transition focus:border-rose-300 sm:w-32 ${
                  isOpen ? "rounded-t-xl border-b-transparent" : "rounded-xl"
                }`}
              >
                <span className="truncate">{currentLabel}</span>
                <FiChevronDown
                  className={`text-xs text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isOpen && (
                <div className="absolute left-0 z-30 mt-0 max-h-48 w-40 overflow-y-auto rounded-b-xl border border-t-0 border-slate-300 bg-white shadow-lg sm:w-48">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      type="button"
                      onClick={() => {
                        setCategory(cat.value);
                        setIsOpen(false);
                      }}
                      className={`block w-full px-3 py-2 text-left text-xs transition hover:bg-rose-50 ${
                        category === cat.value
                          ? "bg-rose-50/50 font-semibold text-rose-600"
                          : "text-slate-700"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative min-w-0 w-24 sm:w-36 md:w-48">
              <FiSearch className="pointer-events-none absolute inset-y-0 left-2 my-auto text-xs text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari..."
                className="w-full rounded-xl border border-slate-300 py-1.5 pl-7 pr-2 text-xs outline-none transition focus:border-rose-300 focus:ring-1 focus:ring-rose-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-h-[340px] overflow-y-auto rounded-b-2xl p-2 md:max-h-[380px]">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-6 gap-0.5 md:grid-cols-10 lg:grid-cols-12">
            {filtered.map((item) => {
              // Mode bundling: multi-select dengan quota
              const isBundling = mode === "bundling";
              const isSelected = isBundling
                ? selectedIds?.includes(item.id) ?? false
                : selectedId === item.id;
              const quotaMet = isBundling
                ? (selectedCount ?? 0) >= (quota ?? 0)
                : false;
              const isLocked = isBundling && quotaMet && !isSelected;

              return (
                <button
                  key={item.id}
                  disabled={isLocked}
                  onClick={() => {
                    if (isLocked) return;
                    if (isBundling && onToggle) {
                      onToggle(item);
                    } else if (onSelect) {
                      onSelect(item);
                    }
                  }}
                  className={`group flex flex-col items-center gap-0.5 rounded-lg border p-1.5 transition ${
                    isSelected
                      ? "border-rose-500 bg-rose-50/60 ring-1 ring-rose-300"
                      : isLocked
                        ? "cursor-not-allowed border-rose-50 bg-slate-50 opacity-40"
                        : "border-rose-50 bg-slate-50 hover:border-rose-300 hover:bg-rose-50/60"
                  }`}
                >
                <div className="relative aspect-square w-full">
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    fill
                    quality={60}
                    sizes="(max-width: 640px) 20vw, (max-width: 1024px) 15vw, 10vw"
                    className="object-contain p-1 transition-transform duration-300 group-hover:scale-102"
                  />
                </div>

                <div className="mt-1 w-full text-center">
                  <p className="line-clamp-1 text-[10px] leading-tight text-slate-800 sm:text-xs">
                    {item.name}
                  </p>
                  {mode !== "bundling" && (
                    <p className="mt-0.5 text-[10px] leading-none text-rose-500 sm:text-xs">
                      {formatRupiah(item.price)}
                    </p>
                  )}
                </div>
              </button>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center rounded-xl border border-dashed border-slate-200 py-10 text-xs text-slate-400">
            Tidak ada item yang ditemukan
          </div>
        )}
      </div>
    </div>
  );
}

export default DesignPicker;
