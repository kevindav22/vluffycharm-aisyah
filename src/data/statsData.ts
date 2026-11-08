import { charmCustom } from "./charmCustom";

export const storeStats = {
  rating: 5.0,
  reviewCount: 87,
  charmCount: charmCustom.length,
  charmCategories: new Set(charmCustom.map((charm) => charm.charmCategory)).size,
};
