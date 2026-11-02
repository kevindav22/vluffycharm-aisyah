import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BundlingDetail from "@/components/bundling/BundlingDetail";
import StepSection from "@/components/landing/step/stepSection";
import CTASection from "@/components/landing/Cta";
import { JsonLd } from "@/components/seo/JsonLd";
import { bundlingPackages } from "@/data/bundlingData";
import { productData } from "@/data/productData";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import { slugify } from "@/lib/utils";
import type { Product } from "@/types/globalTypes";

type Params = { slug: string };

const findBundle = (slug: string) => {
  const pkg = bundlingPackages.find((p) => {
    const product = productData.find((pr) => pr.id === p.idProduct);
    return product ? slugify(product.name) === slug : false;
  });
  if (!pkg) return null;

  const product: Product | undefined = productData.find(
    (p) => p.id === pkg.idProduct,
  );
  if (!product) return null;

  return { pkg, product };
};

export async function generateStaticParams() {
  return bundlingPackages
    .map((pkg) => {
      const product = productData.find((p) => p.id === pkg.idProduct);
      if (!product) return null;
      return { slug: slugify(product.name) };
    })
    .filter((v): v is { slug: string } => v !== null);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const bundle = findBundle(slug);

  if (!bundle) {
    return { title: "Paket tidak ditemukan" };
  }

  const { pkg, product } = bundle;
  const title = product.name;
  const description = `${product.name} — ${pkg.description} Harga Rp${product.price.toLocaleString("id-ID")}. Custom pilihan charm, pesan via WhatsApp.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/bundling/${slug}`,
    },
    openGraph: {
      type: "website",
      url: `/bundling/${slug}`,
      title: `${title} | Vluffy`,
      description,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

const BundlingPage = async ({ params }: { params: Promise<Params> }) => {
  const { slug } = await params;
  const bundle = findBundle(slug);
  if (!bundle) notFound();

  const { pkg, product } = bundle;
  const path = `/bundling/${slug}`;

  return (
    <section className="bg-white pt-18">
      <JsonLd
        data={productSchema({
          name: product.name,
          description: pkg.description,
          image: product.image,
          price: product.price,
          url: path,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Koleksi", path: "/collections" },
          { name: product.name, path },
        ])}
      />
      <BundlingDetail pkg={pkg} product={product} />
      <StepSection category="bundling" />
      <CTASection />
    </section>
  );
};

export default BundlingPage;
