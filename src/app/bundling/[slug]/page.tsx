import { notFound } from "next/navigation";
import BundlingDetail from "@/components/bundling/BundlingDetail";
import StepSection from "@/components/landing/step/stepSection";
import CTASection from "@/components/landing/Cta";
import { bundlingPackages } from "@/data/bundlingData";
import { productData } from "@/data/productData";
import { slugify } from "@/lib/utils";
import type { Product } from "@/types/globalTypes";

type Params = { slug: string };

export async function generateStaticParams() {
  return bundlingPackages
    .map((pkg) => {
      const product = productData.find((p) => p.id === pkg.idProduct);
      if (!product) return null;
      return { slug: slugify(product.name) };
    })
    .filter((v): v is { slug: string } => v !== null);
}

const BundlingPage = async ({
  params,
}: {
  params: Promise<Params>;
}) => {
  const { slug } = await params;

  const pkg = bundlingPackages.find((p) => {
    const product = productData.find((pr) => pr.id === p.idProduct);
    return product ? slugify(product.name) === slug : false;
  });
  if (!pkg) notFound();

  const product: Product | undefined = productData.find(
    (p) => p.id === pkg.idProduct,
  );
  if (!product) notFound();

  return (
    <section className="bg-white pt-18">
      <BundlingDetail pkg={pkg} product={product} />
      <StepSection category="bundling" />
      <CTASection />
    </section>
  );
};

export default BundlingPage;
