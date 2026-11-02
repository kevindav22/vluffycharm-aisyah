import { profilData } from "@/data/statisData";

/** URL situs tanpa trailing slash. */
export const siteUrl = profilData.url.replace(/\/+$/, "");

/** Ubah path relatif jadi URL absolut. */
export const absoluteUrl = (path = "/") =>
  new URL(path, `${siteUrl}/`).toString();
