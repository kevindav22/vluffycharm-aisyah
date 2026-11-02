import type { Metadata } from "next";
import CollectionSection from "@/components/collections/CollectionsSection";
import CustomCard from "@/components/collections/customCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { itemListSchema } from "@/lib/schema";
import { productData } from "@/data/productData";
import { slugify } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Koleksi Bracelet & Watch Ready Siap Pakai",
  description:
    "Jelajahi koleksi bracelet siap pakai, jam tangan watch ready, dan paket bundling hemat dari Vluffy Accessories. Produk jadi tanpa perlu merangkai, atau custom sesuai ceritamu.",
  alternates: {
    canonical: "/collections",
  },
  openGraph: {
    url: "/collections",
    title: "Koleksi Bracelet & Watch Ready | Vluffy",
    description:
      "Jelajahi koleksi bracelet siap pakai, jam tangan watch ready, dan paket bundling hemat Vluffy Accessories.",
    images: [{ url: "/img/bracelet.webp", alt: "Koleksi Vluffy Accessories" }],
  },
};

export default function CollectionPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema({
          name: "Koleksi Vluffy Accessories",
          items: productData.map((product) => ({
            name: product.name,
            path:
              product.category === "bundling"
                ? `/bundling/${slugify(product.name)}`
                : "/collections",
            image: product.image,
          })),
        })}
      />
      <CollectionSection />
      <CustomCard />
    </>
  );
}
