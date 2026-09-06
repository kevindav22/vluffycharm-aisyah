import { FiArrowRight, FiPenTool, FiShoppingBag } from "react-icons/fi";
import { BsStars, BsWatch } from "react-icons/bs";
import { Button } from "@/components/ui/Button";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-b from-[#edd5ec]/70 via-pink-100/80 to-rose-50">
      <div className="container mx-auto max-w-7xl py-6 md:py-12 px-5 md:px-8 lg:px-12">
        <div className="flex flex-col items-center gap-5 rounded-xl bg-white/80 p-8 text-center shadow-sm backdrop-blur md:p-10">
          <h2 className="text-xl font-bold leading-tight text-slate-900 md:text-2xl">
            Temukan Pilihanmu atau Buat Desain Sendiri
          </h2>
          <p className="max-w-xl text-sm text-slate-600 md:text-base">
            Koleksi siap pakai atau kustomisasi charm bracelet yang benar-benar personal untuk momen spesialmu.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href="/collections" variant="primary" className="group w-full sm:w-auto">
              <FiShoppingBag />
              <span>Our Collections</span>
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>

            <Button href="/custom-charm" variant="secondary" className="w-full sm:w-auto">
              <BsStars />
              <span>Desain Charm</span>
            </Button>
            <Button href="/custom-watch" variant="secondary" className="w-full sm:w-auto">
              <BsWatch />
              <span>Desain Watch</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
