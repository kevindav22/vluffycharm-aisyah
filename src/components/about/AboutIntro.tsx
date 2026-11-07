import { Button } from "@/components/ui/Button";
import SafeImage from "@/components/ui/SafeImage";

const AboutIntro = () => {
  return (
    <section className="bg-white pb-12 pt-20 md:pb-16 md:pt-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div
            data-aos="fade-up"
            className="relative h-64 overflow-hidden rounded-3xl border border-rose-100 bg-rose-50 md:h-80 lg:h-96"
          >
            <SafeImage
              src="/img/bracelet.webp"
              alt="Vluffy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ aspectRatio: "4 / 3" }}
              className="object-cover"
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center gap-4 md:gap-6"
          >
            <h1 className="text-2xl font-black text-slate-900 md:text-3xl lg:text-4xl">
              Vluffy Accessories
            </h1>
            <div className="flex flex-col gap-3 text-sm text-slate-600 md:gap-4 md:text-base">
              <p className="leading-relaxed">
                Kami hadir untuk menemani setiap momen spesialmu dengan aksesoris
                handmade yang dirancang penuh cinta. Setiap charm dan jam tangan
                custom bukan sekadar produk, tapi cerita yang kamu bawa.
              </p>
              <p className="leading-relaxed">
                Dimulai dari workshop kecil di Yogyakarta, kami terus berinovasi
                menghadirkan koleksi charm bracelet dan custom watch yang tidak
                hanya cantik dipandang, tapi juga nyaman dipakai setiap hari.
              </p>
              <p className="leading-relaxed">
                Setiap produk dirancang untuk menemani ceritamu — dari momen
                sederhana hingga pencapaian besar. Hari ini, Vluffy telah
                dipercaya ribuan customer di seluruh Indonesia.
              </p>
            </div>
            <div className="mt-2">
              <Button variant="primary" href="/collections">
                Lihat Koleksi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
