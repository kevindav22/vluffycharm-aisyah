import Link from "next/link";
import { Button } from "@/components/ui/Button";
import SafeImage from "@/components/ui/SafeImage";
import ProductPrice from "@/components/ui/ProductPrice";
import { formatWhatsAppLink, formatRupiah, slugify } from "@/lib/utils";
import { track } from "@/lib/analytics";
import { profilData } from "@/data/statisData";
import type { Product } from "@/types/globalTypes";

const categoryLabel: Record<Product["category"], string> = {
  charm: "Charm",
  watch: "Watch",
  bundling: "Bundling",
};

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  // Bundling: tombol "Pesan Sekarang" -> ke halaman slug
  // (user memilih charm per rule dulu, baru WA). Bukan langsung WA.
  // Slug di-derive dari slugify(product.name).
  const isBundling = product.category === "bundling";
  const bundlingSlug = isBundling ? slugify(product.name) : undefined;
  const bundlingHref = bundlingSlug ? `/bundling/${bundlingSlug}` : undefined;

  // Produk jadi (charm/watch): tombol "Pesan Sekarang" -> langsung WA.
  const waMessage = `Halo, saya mau pesan produk berikut:

Nama Produk: ${product.name}
Kategori: ${categoryLabel[product.category]}
Harga: ${formatRupiah(product.price)}

Mohon info selanjutnya untuk proses pemesanan. Terima kasih.`;
  const waLink = formatWhatsAppLink(profilData.phone, waMessage);

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-rose-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5">
      <div className="relative aspect-square w-full bg-rose-50">
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover"
        />
        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-rose-500 shadow-sm">
          {categoryLabel[product.category]}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <h3 className="line-clamp-2 text-sm font-bold text-slate-900">
          {product.name}
        </h3>
        <ProductPrice
          price={product.price}
          originalPrice={product.originalPrice}
        />

        <div className="mt-auto flex flex-col gap-1.5 pt-1">
          {isBundling && bundlingHref ? (
            <Link href={bundlingHref}>
              <Button
                variant="primary"
                className="w-full justify-center !py-2 text-sm"
              >
                Pesan Sekarang
              </Button>
            </Link>
          ) : (
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track({
                  event: "wa_click",
                  placement: "product_card",
                  product_name: product.name,
                  value: product.price,
                })
              }
            >
              <Button
                variant="primary"
                className="w-full justify-center !py-2 text-sm"
              >
                Pesan Sekarang
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
