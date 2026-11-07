export type TypesCaraousel = {
  img: string[];
};

export type TypesProfile = {
  name: string;
  shortName: string;
  logo: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  mapsUrl: string;
  pesanUmum: string;
  socialMedia: {
    instagram: string;
    tiktok: string;
    shopee: string;
  };
};

export type TypesSeo = {
  url: string;
  ogImage: string;
  locale: string;
  themeColor: string;
  keywords: string[];
  title: string;
  description: string;
  priceRange: string;
  sameAs: string[];
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  regionCode: string;
  geo: { lat: number; lng: number };
  hasMap: string;
  openingHours: {
    days: string[];
    opens: string;
    closes: string;
  };
};

export type CustomMode = "charm" | "watch";

export type CharmCategory =
  | "solid-color"
  | "lumi-pink"
  | "lumi-blue"
  | "lumi-red"
  | "lumi-calm"
  | "lumi-zodiac"
  | "lumi-3d"
  | "luxor-3d"
  | "luxor-hanging"
  | "lumi-kpop"
  | "lumi-hero"
  | "lumi-harry-potter"
  | "lumi-otomotif"
  | "lumi-polka";

export type CharmCustom = {
  id: number;
  name: string;
  price: number;

  originalPrice?: number | null;
  image: string;
  charmCategory: CharmCategory;
};

export type WatchCategory =
  | "type1a"
  | "type1b"
  | "premium"
  | "limited"
  | "classic"
  | "sport";

export type WatchCustom = {
  id: number;
  name: string;
  price: number;

  originalPrice?: number | null;
  image: string;
  watchCategory: WatchCategory;
};

export type SelectedCharm = CharmCustom & {
  instanceId: string;
  x: number;
  y: number;
  scale: number;
  rotate: number;
  zIndex: number;
};

export type StepItem = {
  id: number;
  title: string;
  description: string;
};

export type StepCategoryGroup = {
  stepCategory: "customCharm" | "customWatch" | "bundling" | "productReady";
  step: StepItem[];
};

export type ProductCategory = "bracelet" | "watch-ready" | "bundling";

export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;

  originalPrice?: number | null;
  category: ProductCategory;
  bestseller?: boolean;

  description?: string;

  keywords?: string[];
};

export type TypesProductData = Product[];

export type BundlingRule = {
  label: string;
  allowedCategories: CharmCategory[];
  quota: number;
};

export type BundlingPackage = {
  id: number;
  idProduct: number;
  description: string;
  rules: BundlingRule[];
};
