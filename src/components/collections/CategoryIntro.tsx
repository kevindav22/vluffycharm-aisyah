import Link from "next/link";
import SizingLink from "@/components/ui/SizingLink";
import { categoryInfo, categorySlugs } from "@/data/categoryData";
import type { CategoryInfo } from "@/data/categoryData";

type Props = {
  info: CategoryInfo;
};

const CategoryIntro = ({ info }: Props) => (
  <div className="mx-auto mt-12 max-w-3xl border-t border-rose-100 pt-10">
    <h2 className="mb-4 text-lg font-bold text-slate-900 md:text-xl">
      Tentang {info.heading}
    </h2>

    <div className="flex flex-col gap-3 text-sm leading-relaxed text-slate-600 md:text-base">
      {info.intro.map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}
    </div>

    <SizingLink label="Panduan ukuran gelang charm" className="mt-8" />

    <nav aria-label="Kategori lain" className="mt-8 flex flex-wrap gap-2">
      {categorySlugs
        .filter((slug) => slug !== info.slug)
        .map((slug) => (
          <Link
            key={slug}
            href={`/collections/${slug}`}
            className="rounded-full border border-rose-200 px-4 py-1.5 text-sm text-slate-700 transition hover:border-rose-300 hover:text-rose-700"
          >
            Lihat {categoryInfo[slug].label}
          </Link>
        ))}
      <Link
        href="/collections"
        className="rounded-full bg-rose-900 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-rose-700"
      >
        Semua koleksi
      </Link>
    </nav>
  </div>
);

export default CategoryIntro;
