import type { MetadataRoute } from "next";
import { bundlingPackages } from "@/data/bundlingData";
import { productData } from "@/data/productData";
import { absoluteUrl } from "@/lib/seo";
import { slugify } from "@/lib/utils";

const lastModified = new Date();

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: absoluteUrl("/"),
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: absoluteUrl("/collections"),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
    images: [
      absoluteUrl("/img/bracelet.webp"),
      absoluteUrl("/img/3dcharm.webp"),
      absoluteUrl("/img/watchandbracelet.webp"),
    ],
  },
  {
    url: absoluteUrl("/custom-charm"),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: absoluteUrl("/custom-watch"),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: absoluteUrl("/about"),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  },
];

// Slug bundling diturunkan dari productData, sama seperti generateStaticParams.
const bundlingRoutes: MetadataRoute.Sitemap = bundlingPackages
  .map((pkg) => {
    const product = productData.find((p) => p.id === pkg.idProduct);
    if (!product) return null;

    return {
      url: absoluteUrl(`/bundling/${slugify(product.name)}`),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
      images: [absoluteUrl(product.image)],
    };
  })
  .filter((v): v is NonNullable<typeof v> => v !== null);

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...bundlingRoutes];
}
