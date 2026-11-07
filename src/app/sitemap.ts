import type { MetadataRoute } from "next";
import { statSync } from "node:fs";
import { join } from "node:path";
import { bundlingPackages } from "@/data/bundlingData";
import { productData } from "@/data/productData";
import { categorySlugs } from "@/data/categoryData";
import { absoluteUrl } from "@/lib/seo";
import { slugify } from "@/lib/utils";

const srcDir = join(process.cwd(), "src");

const mtimeOf = (path: string): Date => {
  try {
    return statSync(join(srcDir, path)).mtime;
  } catch {
    return new Date();
  }
};

const newest = (...dates: Date[]): Date =>
  dates.reduce((latest, d) => (d > latest ? d : latest));

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: absoluteUrl("/"),
    lastModified: mtimeOf("app/page.tsx"),
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: absoluteUrl("/panduan-ukuran"),
    lastModified: newest(
      mtimeOf("app/panduan-ukuran/page.tsx"),
      mtimeOf("data/sizingData.ts"),
      mtimeOf("data/sizingFaq.ts"),
    ),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [absoluteUrl("/img/sizing.webp")],
  },
  {
    url: absoluteUrl("/collections"),
    lastModified: mtimeOf("app/collections/page.tsx"),
    changeFrequency: "weekly",
    priority: 0.9,
    images: [
      absoluteUrl("/img/bracelet.webp"),
      absoluteUrl("/img/3dcharm.webp"),
      absoluteUrl("/img/watchandbracelet.webp"),
    ],
  },
  {
    url: absoluteUrl("/charm-jogja"),
    lastModified: newest(
      mtimeOf("app/charm-jogja/page.tsx"),
      mtimeOf("data/localData.ts"),
    ),
    changeFrequency: "monthly",
    priority: 0.8,
    images: [absoluteUrl("/img/bracelet.webp")],
  },
  {
    url: absoluteUrl("/custom-charm"),
    lastModified: mtimeOf("app/custom-charm/page.tsx"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: absoluteUrl("/custom-watch"),
    lastModified: mtimeOf("app/custom-watch/page.tsx"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: absoluteUrl("/about"),
    lastModified: mtimeOf("app/about/page.tsx"),
    changeFrequency: "monthly",
    priority: 0.6,
  },
];

const categoryRoutes: MetadataRoute.Sitemap = categorySlugs.map((slug) => {
  const images = productData
    .filter((p) => p.category === slug)
    .map((p) => absoluteUrl(p.image));

  return {
    url: absoluteUrl(`/collections/${slug}`),
    lastModified: newest(
      mtimeOf("app/collections/[kategori]/page.tsx"),
      mtimeOf(`data/categoryData.ts`),
    ),
    changeFrequency: "weekly" as const,
    priority: 0.85,
    ...(images.length ? { images } : {}),
  };
});

const productRoutes: MetadataRoute.Sitemap = productData
  .filter((product) => product.category !== "bundling")
  .map((product) => ({
    url: absoluteUrl(`/produk/${slugify(product.name)}`),
    lastModified: newest(
      mtimeOf("app/produk/[slug]/page.tsx"),
      mtimeOf("data/productData.ts"),
    ),
    changeFrequency: "weekly" as const,
    priority: 0.75,
    images: [absoluteUrl(product.image)],
  }));

const bundlingRoutes: MetadataRoute.Sitemap = bundlingPackages
  .map((pkg) => {
    const product = productData.find((p) => p.id === pkg.idProduct);
    if (!product) return null;

    return {
      url: absoluteUrl(`/bundling/${slugify(product.name)}`),
      lastModified: newest(
        mtimeOf("app/bundling/[slug]/page.tsx"),
        mtimeOf("data/bundlingData.ts"),
      ),
      changeFrequency: "weekly" as const,
      priority: 0.7,
      images: [absoluteUrl(product.image)],
    };
  })
  .filter((v): v is NonNullable<typeof v> => v !== null);

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...categoryRoutes, ...productRoutes, ...bundlingRoutes];
}
