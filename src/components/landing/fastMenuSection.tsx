import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const fastMenuItems = [
  {
    title: "Custom Charm",
    description: "Kreasikan idemu dengan berbagai pilihan charm menarik",
    href: "/custom-charm",
    actionText: "Mulai Desain",
  },
  {
    title: "Custom Watch",
    description: "Kustomisasi jam tangan versi terbaikmu",
    href: "/custom-watch",
    actionText: "Mulai Desain",
  },
  {
    title: "Bundling Set",
    description: "Dapatkan paket lebih hemat, kualitas lebih mantap",
    href: "/collections",
    actionText: "Lihat Paket",
  },
];

const FastMenuSection = () => {
  return (
    <section className="bg-gradient-to-b from-white via-rose-50/40 to-white px-5 py-8 md:px-8 md:py-14 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {fastMenuItems.map(({ title, description, href, actionText }, index) => (
            <Link
              key={href}
              href={href}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-rose-100 bg-white p-5 shadow-[0_1px_2px_rgba(190,24,93,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-rose-200 hover:shadow-[0_20px_45px_-28px_rgba(190,24,93,0.45)] md:p-7"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-gradient-to-br from-rose-100 to-pink-50 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0"
              />

              <span className="relative text-[11px] font-black tracking-[0.25em] text-rose-300 transition-colors duration-500 group-hover:text-rose-700">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="relative mt-3 text-lg font-bold leading-snug text-slate-900 md:text-xl">
                {title}
              </h3>

              <p className="relative mt-2 flex-1 text-xs leading-relaxed text-slate-500 md:text-sm">
                {description}
              </p>

              <span className="relative mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-rose-900 md:text-sm">
                <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-rose-300">
                  {actionText}
                </span>
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FastMenuSection;
