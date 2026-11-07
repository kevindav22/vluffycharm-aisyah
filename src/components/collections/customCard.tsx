import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import SafeImage from "@/components/ui/SafeImage";

const cards = [
  {
    title: "Custom Charm",
    description: "Rancang bracelet charm sesuai ceritamu sendiri.",
    image: "/img/bracelet.webp",
    href: "/custom-charm",
  },
  {
    title: "Custom Watch",
    description: "Desain jam tangan dengan kombinasi charm favoritmu.",
    image: "/img/watchandbracelet.webp",
    href: "/custom-watch",
  },
];

const CustomCard = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <Link
              key={card.href}
              href={card.href}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative flex min-h-64 flex-col justify-end overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0">
                <SafeImage
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ aspectRatio: "16 / 9" }}
                  className="object-cover transition-transform"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              <div className="relative flex items-end justify-between gap-3 p-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {card.title}
                  </h3>
                  <p className="max-w-xs text-sm text-white/85">
                    {card.description}
                  </p>
                </div>

                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/90 text-rose-900 transition group-hover:bg-rose-900 group-hover:text-white">
                  <FiArrowRight className="text-lg transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomCard;
