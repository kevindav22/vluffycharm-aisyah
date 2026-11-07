export type SizingRow = {
  inch: string;
  cmMin: number;
  cmMax: number;
  links: number;
};

export const sizingRows: SizingRow[] = [
  { inch: '6" – 6.38"', cmMin: 15.2, cmMax: 16.2, links: 18 },
  { inch: '6.38" – 6.73"', cmMin: 16.2, cmMax: 17.1, links: 19 },
  { inch: '6.73" – 7.12"', cmMin: 17.1, cmMax: 18.1, links: 20 },
  { inch: '7.12" – 7.55"', cmMin: 18.1, cmMax: 19.2, links: 21 },
  { inch: '7.55" – 7.87"', cmMin: 19.2, cmMax: 20.0, links: 22 },
  { inch: '7.87" – 8.26"', cmMin: 20.0, cmMax: 21.0, links: 23 },
  { inch: '8.26" – 8.66"', cmMin: 21.0, cmMax: 22.0, links: 24 },
];

export const linkSize = {
  height: 0.9,
  width: 1.0,
};

export const sizingPage = {
  slug: "panduan-ukuran",
  title: "Panduan Ukuran Gelang Charm — Tabel Lingkar & Jumlah Mata",
  description:
    "Tabel ukuran gelang charm Vluffy Store: lingkar pergelangan dalam cm dan inci, saran jumlah mata, plus cara mengukur pergelangan tangan yang benar.",
  heading: "Panduan Ukuran Gelang Charm",
};
