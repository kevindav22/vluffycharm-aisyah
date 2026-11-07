import Link from "next/link";
import SafeImage from "@/components/ui/SafeImage";
import ProductPrice from "@/components/ui/ProductPrice";
import TrackedWaLink from "@/components/ui/TrackedWaLink";
import SizingLink from "@/components/ui/SizingLink";
import { formatRupiah, formatWhatsAppLink } from "@/lib/utils";
import { profilData } from "@/data/statisData";
import type { CategoryInfo } from "@/data/categoryData";
import type { Product } from "@/types/globalTypes";

type Props = {
  product: Product;
  info: CategoryInfo;
  description: string;
};

const ProductDetail = ({ product, info, description }: Props) => {
  const waMessage = `Halo, saya mau pesan produk berikut:

Nama Produk: ${product.name}
Kategori: ${info.label}
Harga: ${formatRupiah(product.price)}

Mohon info selanjutnya untuk proses pemesanan. Terima kasih.`;

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
      <div
        data-aos="fade-up"
        className="relative aspect-square w-full overflow-hidden rounded-2xl border border-rose-100 bg-rose-50"
      >
        <SafeImage
          src={product.image}
          alt={`${product.name} ${info.heading} Vluffy Accessories`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          style={{ aspectRatio: "1 / 1" }}
          className="object-cover"
        />
      </div>

      <div data-aos="fade-up" className="flex min-w-0 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Link
            href={`/collections/${product.category}`}
            className="w-fit rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-900 transition hover:bg-rose-100"
          >
            {info.label}
          </Link>
          <h1 className="text-2xl font-black text-slate-900 md:text-3xl lg:text-4xl">
            {product.name}
          </h1>
          <ProductPrice
            price={product.price}
            originalPrice={product.originalPrice}
            priceClassName="text-2xl md:text-3xl"
          />
        </div>

        <p className="text-sm leading-relaxed text-slate-600 md:text-base">
          {description}
        </p>

        <ul className="flex flex-col gap-2 text-sm text-slate-600">
          <li>Base stainless anti karat, aman untuk kulit sensitif.</li>
          <li>Dirangkai manual oleh Vluffy Accessories.</li>
          <li>Ukuran bisa disesuaikan saat konfirmasi via WhatsApp.</li>
        </ul>

        <SizingLink label="Lihat tabel ukuran gelang charm" />

        <div className="flex flex-col gap-2 pt-2 sm:flex-row">
          <TrackedWaLink
            href={formatWhatsAppLink(profilData.phone, waMessage)}
            placement="product_detail"
            className="inline-flex items-center justify-center rounded-full bg-rose-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700"
          >
            Pesan via WhatsApp
          </TrackedWaLink>
          <Link
            href="/custom-charm"
            className="inline-flex items-center justify-center rounded-full border border-rose-200 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-rose-300 hover:text-rose-700"
          >
            Rangkai versi custom
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
