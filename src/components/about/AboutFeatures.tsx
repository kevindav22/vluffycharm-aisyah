import { FiHeart, FiStar, FiAward, FiTruck } from "react-icons/fi";

const features = [
  {
    icon: FiHeart,
    title: "Handmade dengan Cinta",
    description: "Setiap produk dibuat dengan detail dan perhatian penuh",
  },
  {
    icon: FiStar,
    title: "Kualitas Premium",
    description: "Material pilihan dan quality control ketat di setiap proses",
  },
  {
    icon: FiAward,
    title: "Design Eksklusif",
    description: "Koleksi unik yang terus berkembang mengikuti tren terkini",
  },
  {
    icon: FiTruck,
    title: "Pengiriman Aman",
    description: "Packing rapi dan pengiriman cepat ke seluruh Indonesia",
  },
];

const AboutFeatures = () => {
  return (
    <section className="bg-gradient-to-b from-white to-rose-50">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex flex-col items-center gap-3 rounded-2xl border border-rose-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-rose-100 text-rose-900">
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="font-bold text-slate-900">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
