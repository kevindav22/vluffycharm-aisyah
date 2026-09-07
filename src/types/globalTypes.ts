// types for hero
export type TypesCaraousel = {
  img: string[];
};

//types profilData
export type TypesProfile = {
  name: string;
  logo: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  pesanUmum: string;
  socialMedia: {
    instagram: string;
    tiktok: string;
    shopee: string;
  };
};

// types for design mode (ditentukan oleh URL, bukan button)
export type DesignMode = "charm" | "watch";

// types for charm custom
export type CharmCategory =
  | "solid-color"
  | "lumi-pink"
  | "lumi-blue"
  | "lumi-red"
  | "lumi-calm"
  | "lumi-zodiac"
  | "lumi-3d"
  | "luxor-3d"
  | "luxor-hanging-3d"
  | "kpop"
  | "hero"
  | "harry-potter"
  | "otomotif"
  | "polka";

export type CharmCustom = {
  id: number;
  name: string;
  price: number;
  image: string;
  charmCategory: CharmCategory;
};

// types for watch custom
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
  image: string;
  watchCategory: WatchCategory;
};

// types for selected charm on canvas
export type SelectedCharm = CharmCustom & {
  instanceId: string;
  x: number;
  y: number;
  scale: number;
  rotate: number;
  zIndex: number;
};

// types for step guide (cara kerja)
export type StepItem = {
  id: number;
  title: string;
  description: string;
};

export type StepCategoryGroup = {
  stepCategory: "customCharm" | "customWatch" | "bundling" | "productReady";
  step: StepItem[];
};


//=========================================
// PRODUCT COLLECTIONS (produk jadi)
//=========================================

// Kategori produk jadi yang dijual di collections.
export type ProductCategory = "charm" | "watch" | "bundling";

export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  category: ProductCategory;
  bestseller?: boolean;
};

// productData adalah array tunggal produk jadi (sumber kebenaran).
export type TypesProductData = Product[];

//=========================================
// BUNDLING PACKAGES (detail keperluan slug)
//=========================================

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
