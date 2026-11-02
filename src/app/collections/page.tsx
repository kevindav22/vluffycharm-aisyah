import type { Metadata } from "next";
import CollectionSection from "@/components/collections/CollectionsSection";
import CustomCard from "@/components/collections/customCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { itemListSchema } from "@/lib/schema";
import { productData } from "@/data/productData";
import { slugify } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Koleksi Charm Bracelet & Bundling",
  description:
    "Jelajahi koleksi charm bracelet, paket bundling hemat, dan aksesoris handmade Vluffy Accessories. Charm siap pakai atau custom sesuai ceritamu.",
  alternates: {
    canonical: "/collections",
  },
  openGraph: {
    url: "/collections",
    title: "Koleksi Charm Bracelet & Bundling | Vluffy",
    description:
      "Jelajahi koleksi charm bracelet, paket bundling hemat, dan aksesoris handmade Vluffy Accessories.",
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
