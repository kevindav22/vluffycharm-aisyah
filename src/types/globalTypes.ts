// types for hero
export type TypesCaraousel = {
  img: string[];
};

// types for customize
export interface Charm {
  id: number;
  name: string;
  price: number;
  image: string;
  category:
    | "solid-color"
    | "lumi-pink"
    | "lumi-blue"
    | "lumi-red"
    | "lumi-calm"
    | "lumi-zodiac"
    | "lumi-3d"
    | "luxor-3d"
    | "luxor-hanging-3d"
    | "hero"
    | "harry-potter"
    | "otomotif"
    | "polka";
}

export type SelectedCharm = Charm & {
  instanceId: string;
  x: number;
  y: number;
  scale: number;
  rotate: number; // derajat, default 0
  zIndex: number;
};

//types profilData
export type TypesProfile = {
  name: string;
  tagline: string;
  phone: string;
  pesanUmum: string;
};
