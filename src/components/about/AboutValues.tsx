import { FiCheck } from "react-icons/fi";

const values = [
  {
    title: "Kualitas Tanpa Kompromi",
    description:
      "Kami selalu menggunakan material terbaik dan proses produksi yang teliti untuk memastikan setiap produk tahan lama dan nyaman dipakai.",
  },
  {
    title: "Kreativitas & Inovasi",
    description:
      "Desain kami terus berkembang mengikuti tren terkini sambil tetap mempertahankan keunikan dan identitas brand yang kuat.",
  },
  {
    title: "Personalisasi Maksimal",
    description:
      "Setiap customer berhak punya aksesoris yang benar-benar mewakili diri mereka. Kami menyediakan opsi custom untuk bikin produkmu jadi one-of-a-kind.",
  },
  {
    title: "Layanan Ramah & Responsif",
    description:
      "Tim kami siap membantu kamu dari konsultasi desain hingga after-sales. Kepuasan customer adalah prioritas utama kami.",
  },
];

const AboutValues = () => {
  return (
    <section className="bg-gradient-to-b from-white to-rose-50">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-12">
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
            Nilai-Nilai Kami
          </h2>
          <p className="max-w-2xl text-lg text-slate-600">
            Prinsip yang menjadi fondasi setiap keputusan dan karya kami
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-2xl border border-rose-100 bg-white p-6 shadow-sm transition hover:-translate-y-1"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                <FiCheck className="text-xl" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-slate-900">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
