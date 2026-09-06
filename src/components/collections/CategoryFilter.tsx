import { FiGrid } from "react-icons/fi";
import { BsStars, BsWatch } from "react-icons/bs";
import { HiOutlineGift } from "react-icons/hi2";
import type { ProductCategory } from "@/types/globalTypes";
import { cn } from "@/lib/utils";

type FilterKey = "all" | ProductCategory;

const filters: { key: FilterKey; label: string; icon: typeof FiGrid }[] = [
  { key: "all", label: "Semua", icon: FiGrid },
  { key: "charm", label: "Charm", icon: BsStars },
  { key: "watch", label: "Watch", icon: BsWatch },
  { key: "bundling", label: "Bundling", icon: HiOutlineGift },
];

type Props = {
  active: FilterKey;
  onChange: (key: FilterKey) => void;
};

const CategoryFilter = ({ active, onChange }: Props) => {
  return (
    <div className="flex items-center justify-center gap-4 py-6 md:gap-6">
      {filters.map((cat) => {
        const isActive = active === cat.key;
        return (
          <button
            key={cat.key}
            onClick={() => onChange(cat.key)}
            className="flex flex-col items-center gap-1.5"
          >
            <span
              className={cn(
                "flex size-14 items-center justify-center rounded-full border-2 text-xl transition-all md:size-16",
                isActive
                  ? "border-rose-400 bg-rose-100 text-rose-500"
                  : "border-slate-200 bg-white text-slate-400 hover:border-rose-200",
              )}
            >
              <cat.icon />
            </span>
            <span
              className={cn(
                "text-xs font-medium",
                isActive ? "text-rose-500" : "text-slate-500",
              )}
            >
              {cat.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
