import type { Metadata } from "next";
import CollectionSection from "@/components/collections/CollectionsSection";
import CustomCard from "@/components/collections/customCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { productData } from "@/data/productData";
import { slugify } from "@/lib/utils";

const crumbs = [
  { name: "Beranda", path: "/" },
  { name: "Koleksi", path: "/collections" },
];

export const metadata: Metadata = {
  title: "Koleksi Charm Bracelet & Jam Tangan Custom",
  description:
    "Pilih charm bracelet siap pakai, jam tangan custom watch ready, dan paket bundling hemat dari Vluffy Accessories. Atau rangkai gelang charm sendiri sesuai ceritamu.",
  alternates: {
    canonical: "/collections",
  },
  openGraph: {
    url: "/collections",
    title: "Koleksi Charm Bracelet & Jam Tangan Custom | Vluffy",
    description:
      "Koleksi bracelet siap pakai, jam tangan custom watch ready, dan paket bundling hemat Vluffy Accessories.",
    images: [
      { url: "/img/bracelet.webp", alt: "Koleksi charm bracelet Vluffy Accessories" },
    ],
  },
};

export default function CollectionPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={itemListSchema({
          name: "Koleksi Vluffy Accessories",
          items: productData.map((product) => ({
            name: product.name,
            path:
              product.category === "bundling"
                ? `/bundling/${slugify(product.name)}`
                : `/produk/${slugify(product.name)}`,
            image: product.image,
          })),
        })}
      />
      <CollectionSection crumbs={crumbs} />
      <CustomCard />
    </>
  );
}
