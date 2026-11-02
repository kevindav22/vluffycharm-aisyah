import { formatRupiah, cn } from "@/lib/utils";

type Props = {
  price: number;
  originalPrice?: number | null;
  className?: string;
  priceClassName?: string;
};

// Harga jual (diskon). Jika originalPrice diisi, harga awal tampil dicoret di atasnya.
const ProductPrice = ({ price, originalPrice, className, priceClassName }: Props) => {
  const hasDiscount =
    typeof originalPrice === "number" && originalPrice > price;

  return (
    <div className={cn("flex flex-col", className)}>
      {hasDiscount && (
        <span className="text-xs font-medium text-slate-400 line-through">
          {formatRupiah(originalPrice!)}
        </span>
      )}
      <span
        className={cn("text-base font-extrabold text-rose-900", priceClassName)}
      >
        {formatRupiah(price)}
      </span>
    </div>
  );
};

export default ProductPrice;
