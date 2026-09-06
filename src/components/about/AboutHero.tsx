import { FiHeart, FiStar, FiUsers } from "react-icons/fi";

const AboutHero = () => {
  return (
    <section className="bg-gradient-to-b from-white via-rose-50 to-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-black text-slate-900 md:text-5xl lg:text-6xl">
            Tentang{" "}
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              Vluffy
            </span>
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Kami hadir untuk menemani setiap momen spesialmu dengan aksesoris
            handmade yang dirancang penuh cinta. Setiap charm dan jam tangan
            custom kami bukan sekadar produk, tapi cerita yang kamu bawa.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
              <div className="flex size-14 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                <FiHeart className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Handmade dengan Cinta
              </h3>
              <p className="text-sm text-slate-600">
                Setiap produk dibuat dengan detail dan perhatian penuh
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
              <div className="flex size-14 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                <FiStar className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Kualitas Terjamin
              </h3>
              <p className="text-sm text-slate-600">
                Material pilihan dan quality control ketat
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
              <div className="flex size-14 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                <FiUsers className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Komunitas Hangat
              </h3>
              <p className="text-sm text-slate-600">
                Ribuan customer puas yang terus menemani perjalanan kami
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
