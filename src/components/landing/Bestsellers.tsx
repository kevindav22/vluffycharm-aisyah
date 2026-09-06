import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { formatRupiah, slugify } from "@/lib/utils";
import { productData } from "@/data/productData";
import SafeImage from "@/components/ui/SafeImage";
import type { Product } from "@/types/globalTypes";

const categoryLabel: Record<Product["category"], string> = {
  charm: "Charm",
  watch: "Watch",
  bundling: "Bundling",
};

const resolveHref = (product: Product): string => {
  if (product.category === "bundling") {
    return `/bundling/${slugify(product.name)}`;
  }
  return "/collections";
};

const Bestsellers = () => {
  const products = productData.filter((p) => p.bestseller).slice(0, 6);

  if (products.length === 0) return null;

  return (
    <section className="bg-white ">
      <div className="container mx-auto max-w-7xl pt-2 px-5 md:px-8 lg:px-12">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-xl font-bold leading-tight text-slate-900 md:text-2xl">Best Seller</h2>
          <Link
            href="/collections"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-rose-500 transition hover:text-rose-600"
          >
            <span>Lihat Semua</span>
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={resolveHref(product)}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-rose-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-rose-200"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-rose-50">
                <SafeImage
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-rose-600 backdrop-blur">
                  {categoryLabel[product.category]}
                </span>
              </div>

              <div className="flex flex-col gap-1 p-4">
                <h3 className="text-sm font-bold text-slate-800 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm font-semibold text-rose-500">
                  {formatRupiah(product.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/collections"
            className="group inline-flex items-center gap-1.5 rounded-xl border border-rose-200 bg-white px-6 py-2.5 text-sm font-semibold text-rose-500 transition hover:border-rose-300 hover:bg-rose-50"
          >
            <span>Lihat Semua</span>
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
