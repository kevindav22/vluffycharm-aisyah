import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/Button";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-b from-[#edd5ec]/70 via-pink-100/80 to-rose-50">
      <div className="container mx-auto max-w-7xl py-6 md:py-12 px-5 md:px-8 lg:px-12">
        <div
          data-aos="zoom-in"
          className="flex flex-col items-center gap-5 rounded-xl bg-white/80 p-8 text-center shadow-sm backdrop-blur md:p-10"
        >
          <h2 className="text-xl font-bold leading-tight text-slate-900 md:text-2xl">
            Temukan Pilihanmu atau Buat Desain Sendiri
          </h2>
          <p className="max-w-xl text-sm text-slate-600 md:text-base">
            Koleksi siap pakai atau kustomisasi charm bracelet yang benar-benar personal untuk momen spesialmu.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="/custom-charm" variant="secondary" className="w-full sm:w-auto">
              <span>Desain Charm</span>
            </Button>
            <Button href="/custom-watch" variant="secondary" className="w-full sm:w-auto">
              <span>Desain Watch</span>
            </Button>
             <Button href="/collections" variant="primary" className="group w-full sm:w-auto">
              <span>Our Collections</span>
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
