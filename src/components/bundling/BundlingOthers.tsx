import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";
import ProductPrice from "@/components/ui/ProductPrice";
import { formatRupiah, slugify } from "@/lib/utils";
import type { Product } from "@/types/globalTypes";

type Props = {
  products: Product[];
};

const BundlingOthers = ({ products }: Props) => {
  if (products.length === 0) return null;

  return (
    <div data-aos="fade-up" className="border-t border-rose-100 pt-8">
      <h2 className="mb-4 text-lg font-bold text-slate-900 md:text-xl">
        Paket bundling charm bracelet lainnya
      </h2>

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((item) => (
          <li key={item.id}>
            <Link
              href={`/bundling/${slugify(item.name)}`}
              className="flex items-center gap-3 rounded-xl border border-rose-100 p-3 transition hover:border-rose-200 hover:shadow-sm"
            >
              <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-rose-50">
                <SafeImage
                  src={item.image}
                  alt={`${item.name} paket bundling charm bracelet Vluffy Accessories`}
                  fill
                  sizes="64px"
                  style={{ aspectRatio: "1 / 1" }}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-slate-900">
                  {item.name}
                </span>
                <span className="text-sm text-rose-900">
                  {formatRupiah(item.price)}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BundlingOthers;
