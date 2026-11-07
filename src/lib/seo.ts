import { seoData } from "@/data/seoData";

export const siteUrl = seoData.url.replace(/\/+$/, "");

export const absoluteUrl = (path = "/") =>
  new URL(path, `${siteUrl}/`).toString();
