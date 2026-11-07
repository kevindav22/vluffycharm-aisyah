import Link from "next/link";
import { Button } from "@/components/ui/Button";
import SafeImage from "@/components/ui/SafeImage";
import ProductPrice from "@/components/ui/ProductPrice";
import TrackedProductLink from "@/components/ui/TrackedProductLink";
import { slugify } from "@/lib/utils";
import type { Product } from "@/types/globalTypes";

const categoryLabel: Record<Product["category"], string> = {
  bracelet: "Bracelet",
  "watch-ready": "Watch Ready",
  bundling: "Bundling",
};

type Props = {
  product: Product;
  aosDelay?: number;
};

const ProductCard = ({ product, aosDelay = 0 }: Props) => {
  const isBundling = product.category === "bundling";
  const bundlingSlug = isBundling ? slugify(product.name) : undefined;
  const bundlingHref = bundlingSlug ? `/bundling/${bundlingSlug}` : undefined;

  const productHref = isBundling ? bundlingHref : `/produk/${slugify(product.name)}`;

  return (
    <div
      id={`produk-${slugify(product.name)}`}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="flex scroll-mt-24 flex-col overflow-hidden rounded-xl border border-rose-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="relative aspect-square w-full bg-rose-50">
        <SafeImage
          src={product.image}
          alt={`${product.name} ${categoryLabel[product.category]} Vluffy Store`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          style={{ aspectRatio: "1 / 1" }}
          className="object-cover"
        />
        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-rose-900 shadow-sm">
          {categoryLabel[product.category]}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <h3 className="line-clamp-2 text-sm font-bold text-slate-900">
          <Link
            href={productHref || "#"}
            className="transition hover:text-rose-900"
          >
            {product.name}
          </Link>
        </h3>
        <ProductPrice
          price={product.price}
          originalPrice={product.originalPrice}
        />

        <div className="mt-auto flex flex-col gap-1.5 pt-1">
          <TrackedProductLink
            href={productHref || "#"}
            productName={product.name}
            value={product.price}
            className="w-full"
          >
            <Button
              variant="primary"
              className="w-full justify-center !py-2 text-sm"
            >
              Lihat Detail
            </Button>
          </TrackedProductLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
