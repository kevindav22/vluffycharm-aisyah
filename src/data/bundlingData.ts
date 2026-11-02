import type { BundlingPackage, CharmCategory } from "@/types/globalTypes";

// Semua seri Lumi yang bisa dipilih sebagai bonus.
const lumiCategories: CharmCategory[] = [
  "lumi-pink",
  "lumi-blue",
  "lumi-red",
  "lumi-calm",
  "lumi-zodiac",
  "lumi-kpop",
  "lumi-hero",
  "lumi-harry-potter",
  "lumi-otomotif",
  "lumi-polka",
];

const luxorCategories: CharmCategory[] = ["luxor-3d"];

const hangingCategories: CharmCategory[] = ["luxor-hanging"];

// Base polos (charm solid-color) TIDAK dipilih di picker — jumlahnya sudah
// termasuk di paket (lihat `description`). Picker hanya untuk charm bonus.
export const bundlingPackages: BundlingPackage[] = [
  {
    id: 1,
    idProduct: 8, // -> Product "Italian Bundling 1"
    description:
      "Maksimal 15 base polos + bonus 3 charm Lumi pilihanmu dari semua seri Lumi.",
    rules: [
      {
        label: "3 Charm Lumi",
        allowedCategories: lumiCategories,
        quota: 3,
      },
    ],
  },
  {
    id: 2,
    idProduct: 9, // -> Product "Italian Bundling 2"
    description:
      "Maksimal 15 base polos + bonus 2 charm Lumi dan 1 set charm hanging 3D.",
    rules: [
      {
        label: "2 Charm Lumi",
        allowedCategories: lumiCategories,
        quota: 2,
      },
      {
        label: "1 Set Hanging 3D",
        allowedCategories: hangingCategories,
        quota: 1,
      },
    ],
  },
  {
    id: 3,
    idProduct: 10, // -> Product "Italian Bundling 3"
    description:
      "Maksimal 13 base polos + bonus 4 charm Lumi dan 1 charm Luxor 3D.",
    rules: [
      {
        label: "4 Charm Lumi",
        allowedCategories: lumiCategories,
        quota: 4,
      },
      {
        label: "1 Charm Luxor 3D",
        allowedCategories: luxorCategories,
        quota: 1,
      },
    ],
  },
  {
    id: 4,
    idProduct: 11, // -> Product "Italian Bundling 4"
    description:
      "Maksimal 15 base polos + bonus 2 charm Lumi dan 1 charm Luxor 3D.",
    rules: [
      {
        label: "2 Charm Lumi",
        allowedCategories: lumiCategories,
        quota: 2,
      },
      {
        label: "1 Charm Luxor 3D",
        allowedCategories: luxorCategories,
        quota: 1,
      },
    ],
  },
  {
    id: 5,
    idProduct: 12, // -> Product "Italian Bundling 5"
    description:
      "Maksimal 15 base polos + bonus 1 charm Lumi, 1 charm Luxor 3D, dan 1 set charm hanging 3D.",
    rules: [
      {
        label: "1 Charm Lumi",
        allowedCategories: lumiCategories,
        quota: 1,
      },
      {
        label: "1 Charm Luxor 3D",
        allowedCategories: luxorCategories,
        quota: 1,
      },
      {
        label: "1 Set Hanging 3D",
        allowedCategories: hangingCategories,
        quota: 1,
      },
    ],
  },
];
