import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { BsStars, BsWatch } from "react-icons/bs";
import { HiOutlineGift } from "react-icons/hi2";

const fastMenuItems = [
  {
    title: "Charm Builder",
    description: "Kreasikan idemu dengan berbagai pilihan charm menarik",
    href: "/custom-charm",
    icon: BsStars,
    actionText: "Mulai Desain",
  },
  {
    title: "Watch Studio",
    description: "Kustomisasi jam tangan versi terbaikmu",
    href: "/custom-watch",
    icon: BsWatch,
    actionText: "Kustomisasi",
  },
  {
    title: "Bundling Set",
    description: "Dapatkan paket lebih hemat kualitas lebih mantap",
    href: "/collections",
    icon: HiOutlineGift,
    actionText: "Lihat Paket",
  },
];

const FastMenuSection = () => {
  return (
    <section className="bg-white py-6 md:py-12 px-5 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4">
          {fastMenuItems.map(
            ({ title, description, href, icon: Icon, actionText }, index) => {
              const isLastOddItem =
                index === fastMenuItems.length - 1 &&
                fastMenuItems.length % 2 !== 0;

              return (
                <Link
                  key={href}
                  href={href}
                  className={`group relative flex h-full flex-col items-center justify-between overflow-hidden rounded-xl bg-gradient-to-br from-rose-50 via-pink-100/80 to-[#edd5ec]/70 p-3 text-center shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:border-rose-200 md:p-6 ${
                    isLastOddItem
                      ? "col-span-2 w-full max-w-[calc(50%-0.5rem)] justify-self-center md:col-span-1 md:max-w-none"
                      : "w-full"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative mb-3 flex items-center justify-center">
                      <div className="absolute size-12 rounded-full bg-white/40 blur-md transition-transform duration-500 group-hover:scale-125" />
                      <Icon className="relative text-3xl text-rose-900/80 mix-blend-multiply transition-transform duration-500 group-hover:scale-110 md:text-4xl" />
                    </div>

                    <h3 className="text-base font-bold text-slate-800 md:text-lg">
                      {title}
                    </h3>
                  </div>

                  <div className="my-2 flex flex-1 items-center justify-center">
                    <p className="text-xs text-slate-600/90 md:text-sm">
                      {description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-center gap-1.5 pt-2 text-xs font-bold text-rose-900 md:text-sm">
                    <span>{actionText}</span>
                    <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

export default FastMenuSection;
