import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/ui/PageShell";
import ProductDetail from "@/components/products/ProductDetail";
import ProductRelated from "@/components/products/ProductRelated";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { productData, categoryFallback } from "@/data/productData";
import { categoryInfo } from "@/data/categoryData";
import { formatRupiah, slugify } from "@/lib/utils";
import type { Product } from "@/types/globalTypes";

type Params = { slug: string };

const indexableProducts = productData.filter((p) => p.category !== "bundling");

const findProduct = (slug: string): Product | undefined =>
  indexableProducts.find((p) => slugify(p.name) === slug);

export function generateStaticParams() {
  return indexableProducts.map((p) => ({ slug: slugify(p.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return { title: "Produk tidak ditemukan" };

  const description =
    product.description ?? categoryFallback[product.category].description;
  const path = `/produk/${slug}`;

  return {
    title: `${product.name} ${formatRupiah(product.price)}`,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: `${product.name} | Vluffy`,
      description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${product.name} Vluffy Store`,
        },
      ],
    },
  };
}

const ProductPage = async ({ params }: { params: Promise<Params> }) => {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();

  const path = `/produk/${slug}`;
  const info = categoryInfo[product.category];
  const description =
    product.description ?? categoryFallback[product.category].description;

  const crumbs = [
    { name: "Beranda", path: "/" },
    { name: "Koleksi", path: "/collections" },
    { name: info.label, path: `/collections/${product.category}` },
    { name: product.name, path },
  ];

  const related = indexableProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <JsonLd
        data={productSchema({
          name: product.name,
          description,
          image: product.image,
          price: product.price,
          url: path,
        })}
      />
      <JsonLd data={breadcrumbSchema(crumbs)} />

      <PageShell crumbs={crumbs}>
        <ProductDetail product={product} info={info} description={description} />
        <ProductRelated label={info.label} products={related} />
      </PageShell>
    </>
  );
};

export default ProductPage;
