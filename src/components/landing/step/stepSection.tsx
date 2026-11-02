"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import { FiChevronDown, FiChevronUp, FiShoppingBag } from "react-icons/fi";
import { BsStars, BsWatch } from "react-icons/bs";
import { HiOutlineGift } from "react-icons/hi2";
import { Button } from "@/components/ui/Button";
import { stepsByCategory } from "@/data/stepData";
import type { StepCategoryGroup, StepItem } from "@/types/globalTypes";

type StepCategory = StepCategoryGroup["stepCategory"];
type Icon = ComponentType<{ className?: string }>;

const categoryMeta: Record<StepCategory, { label: string; icon: Icon }> = {
  customCharm: { label: "Custom Charm", icon: BsStars },
  customWatch: { label: "Custom Watch", icon: BsWatch },
  bundling: { label: "Bundling", icon: HiOutlineGift },
  productReady: { label: "Produk Jadi", icon: FiShoppingBag },
};

const categoryOrder: StepCategory[] = [
  "customCharm",
  "customWatch",
  "bundling",
  "productReady",
];

type Props = {
  category?: "all" | StepCategory;
};

const StepSection = ({ category = "all" }: Props) => {
  const [activeCategory, setActiveCategory] = useState<StepCategory>(
    category === "all" ? categoryOrder[0] : category,
  );
  const [showAll, setShowAll] = useState(false);

  const visibleCategories = category === "all" ? categoryOrder : [category];

  const activeSteps =
    stepsByCategory.find((g) => g.stepCategory === activeCategory)?.step ?? [];

  const ActiveIcon = categoryMeta[activeCategory].icon;

  /**
   * Mobile: maksimal 4 kartu dulu, sisanya muncul lewat tombol.
   * Desktop: semua kartu.
   * Satu set kartu yang sama dipakai di dua wadah — bedanya hanya CSS.
   */
  const mobileSteps = showAll ? activeSteps : activeSteps.slice(0, 4);

  return (
    <section className="flex flex-col overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6 md:px-8 md:py-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 text-center">
          <h2 className="text-xl font-bold leading-tight text-slate-900 md:text-2xl">
            Bingung Langkahnya gimana?
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-5">
          {visibleCategories.map((key) => {
            const TabIcon = categoryMeta[key].icon;
            return (
              <Button
                key={key}
                onClick={() => setActiveCategory(key)}
                variant={activeCategory === key ? "primary" : "secondary"}
                className="!px-3 !py-1.5 text-xs md:text-sm"
              >
                <TabIcon className="shrink-0" />
                {categoryMeta[key].label}
              </Button>
            );
          })}
        </div>

        {/* MOBILE — maksimal 4 kartu, sisanya lewat tombol */}
        <div className="grid grid-cols-2 gap-2 py-6 md:hidden">
          {mobileSteps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              icon={ActiveIcon}
            />
          ))}

          {activeSteps.length > 4 && (
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="secondary"
              className="col-span-2 mt-2 w-full !py-2 justify-center text-sm"
            >
              {showAll ? (
                <>
                  Tampilkan Lebih Sedikit
                  <FiChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Lihat Semua Langkah
                  <FiChevronDown className="h-4 w-4" />
                </>
              )}
            </Button>
          )}
        </div>

        {/* DESKTOP & TABLET — semua langkah tampil, tidak ada tombol */}
        <div className="hidden grid-cols-2 gap-3 py-4 md:grid lg:grid-cols-4 lg:gap-4">
          {activeSteps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              icon={ActiveIcon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function StepCard({
  step,
  index,
  icon: Icon,
}: {
  step: StepItem;
  index: number;
  icon: Icon;
}) {
  return (
    <div className="flex h-full flex-col gap-1.5 rounded-xl border border-rose-200 bg-white/80 p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-200">
      <div className="flex items-start justify-between gap-2">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rose-200 via-pink-200 to-[#edd5ec] text-sm shadow-sm shadow-rose-200/50">
          <Icon />
        </div>
        <span className="text-3xl font-black leading-none text-rose-400">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-md font-bold text-slate-900">{step.title}</h3>
        <p className="text-xs leading-relaxed text-slate-600">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default StepSection;
