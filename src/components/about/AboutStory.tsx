import SafeImage from "@/components/ui/SafeImage";

const AboutStory = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">
              Cerita Kami Dimulai dari{" "}
              <span className="text-rose-500">Passion</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Vluffy lahir dari kecintaan kami terhadap seni kerajinan tangan
              dan keinginan untuk membuat setiap orang bisa mengekspresikan
              kepribadian mereka lewat aksesoris yang unik dan bermakna.
            </p>
            <p className="leading-relaxed text-slate-600">
              Dimulai dari workshop kecil di Solo, kami terus berinovasi
              menghadirkan koleksi charm bracelet dan custom watch yang tidak
              hanya cantik dipandang, tapi juga nyaman dipakai setiap hari.
              Setiap produk dirancang untuk menemani ceritamu — dari momen
              sederhana hingga pencapaian besar.
            </p>
            <p className="leading-relaxed text-slate-600">
              Hari ini, Vluffy telah dipercaya ribuan customer di seluruh
              Indonesia. Kami bangga bisa menjadi bagian dari perjalanan hidup
              mereka, satu charm dalam satu waktu.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-rose-100 bg-rose-50 lg:aspect-[4/5]">
            <SafeImage
              src="/images/charm1.webp"
              alt="Vluffy Story"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
