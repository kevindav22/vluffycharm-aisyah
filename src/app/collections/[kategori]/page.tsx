import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryShell from "@/components/collections/CategoryShell";
import CategoryGrid from "@/components/collections/CategoryGrid";
import CategoryIntro from "@/components/collections/CategoryIntro";
import CustomCard from "@/components/collections/customCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { productData } from "@/data/productData";
import {
  categoryInfo,
  categorySlugs,
  isProductCategory,
} from "@/data/categoryData";
import { slugify } from "@/lib/utils";

type Params = { kategori: string };

const categoryOgImage: Record<string, string> = {
  bracelet: "/og-collections.png",
  "watch-ready": "/og-watch.png",
  bundling: "/og-bundling.png",
};

export function generateStaticParams() {
  return categorySlugs.map((kategori) => ({ kategori }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { kategori } = await params;
  if (!isProductCategory(kategori)) return { title: "Kategori tidak ditemukan" };

  const info = categoryInfo[kategori];
  const path = `/collections/${kategori}`;

  return {
    title: info.title,
    description: info.description,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: `${info.title} | Vluffy`,
      description: info.description,
      images: [
        {
          url: categoryOgImage[kategori],
          width: 1200,
          height: 630,
          alt: info.heading,
        },
      ],
    },
  };
}

const CategoryPage = async ({ params }: { params: Promise<Params> }) => {
  const { kategori } = await params;
  if (!isProductCategory(kategori)) notFound();

  const info = categoryInfo[kategori];
  const products = productData.filter((p) => p.category === kategori);
  const path = `/collections/${kategori}`;

  const crumbs = [
    { name: "Beranda", path: "/" },
    { name: "Koleksi", path: "/collections" },
    { name: info.label, path },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      {products.length > 0 && (
        <JsonLd
          data={itemListSchema({
            name: info.heading,
            items: products.map((product) => ({
              name: product.name,
              path:
                product.category === "bundling"
                  ? `/bundling/${slugify(product.name)}`
                  : `/produk/${slugify(product.name)}`,
              image: product.image,
            })),
          })}
        />
      )}

      <CategoryShell
        crumbs={crumbs}
        heading={info.heading}
        description={info.description}
      >
        <CategoryGrid info={info} products={products} />
        <CategoryIntro info={info} />
      </CategoryShell>

      <CustomCard />
    </>
  );
};

export default CategoryPage;
