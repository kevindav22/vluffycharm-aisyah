import Link from "next/link";
import ProductCard from "@/components/collections/ProductCard";
import { productData } from "@/data/productData";

const LocalProducts = () => {
  const bestsellers = productData.filter((p) => p.bestseller).slice(0, 4);
  if (bestsellers.length === 0) return null;

  return (
    <div className=" py-12">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-lg font-bold text-slate-900 md:text-xl">
          Charm bracelet yang paling sering dicari
        </h2>
        <Link
          href="/collections/bracelet"
          className="text-sm font-semibold text-rose-900 transition hover:text-rose-700"
        >
          Lihat semua bracelet
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {bestsellers.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            aosDelay={(index % 4) * 80}
          />
        ))}
      </div>
    </div>
  );
};

export default LocalProducts;
