import { FiShield, FiTruck, FiHeadphones } from "react-icons/fi";
import { MdWorkspacePremium } from "react-icons/md";

const features = [
  {
    icon: MdWorkspacePremium,
    title: "Premium",
    description: "Kualitas terbaik & eksklusif",
  },
  {
    icon: FiShield,
    title: "Terpercaya",
    description: "Material aman kulit sensitif",
  },
  {
    icon: FiTruck,
    title: "FastOrder",
    description: "Pesanan diproses cepat",
  },
  {
    icon: FiHeadphones,
    title: "FastRespon",
    description: "Siap bantu kapan saja",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="relative z-30 mx-auto -mt-16 max-w-7xl px-4 md:-mt-12 px-5 md:px-8 lg:px-12">
      {/* Heading tersembunyi: menjaga urutan h1 -> h2 -> h3 untuk screen reader. */}
      <h2 className="sr-only">Keunggulan Vluffy Accessories</h2>
      <div className="rounded-xl bg-white p-4 shadow-md md:rounded-2xl md:p-7">
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-4 md:gap-0 md:divide-x md:divide-rose-900">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-center gap-2.5 px-2 text-left md:justify-center md:gap-3 md:px-4"
              >
                <Icon className="text-2xl text-rose-900/80 mix-blend-multiply shrink-0 md:text-3xl lg:text-4xl" />

                <div className="flex flex-col justify-center">
                  <h3 className="text-xs font-semibold leading-snug text-slate-800 sm:text-sm md:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] font-normal leading-tight text-slate-500 sm:text-xs">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
