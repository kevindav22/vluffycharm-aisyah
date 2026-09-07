import type { BundlingPackage } from "@/types/globalTypes";

export const bundlingPackages: BundlingPackage[] = [
  {
    id: 1,
    idProduct: 9, // -> Product "Bundling Lumi"
    description:
      "Paket hemat untuk pecinta Lumi Series! Pilih 3 charm dari kategori Lumi sesuai selera.",
    rules: [
      {
        label: "3 Charm Lumi",
        allowedCategories: [
          "lumi-pink",
          "lumi-blue",
          "lumi-red",
          "lumi-calm",
          "lumi-zodiac",
        ],
        quota: 3,
      },
    ],
  },
  {
    id: 2,
    idProduct: 10, // -> Product "Bundling 3D"
    description:
      "Koleksi 3D yang detail dan menarik! Pilih 2 charm 3D favoritmu.",
    rules: [
      {
        label: "2 Charm 3D",
        allowedCategories: ["lumi-3d", "luxor-3d", "luxor-hanging-3d"],
        quota: 2,
      },
    ],
  },
  {
    id: 3,
    idProduct: 8, // -> Product "Bundling Premium"
    description:
      "Paket paling lengkap dan premium! Kombinasikan 5 charm dari berbagai seri eksklusif.",
    rules: [
      {
        label: "3 Charm Lumi",
        allowedCategories: [
          "lumi-pink",
          "lumi-blue",
          "lumi-red",
          "lumi-calm",
          "lumi-zodiac",
        ],
        quota: 3,
      },
      {
        label: "2 Charm 3D",
        allowedCategories: ["lumi-3d", "luxor-3d", "luxor-hanging-3d"],
        quota: 2,
      },
    ],
  },
];
