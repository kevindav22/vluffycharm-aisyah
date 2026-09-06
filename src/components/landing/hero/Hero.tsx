import { carouselImg } from "@/data/statisData";
import HeroCarousel from "./HeroCarousel";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="relative h-[38vh] w-full overflow-hidden md:h-[50vh]">
        <HeroCarousel images={carouselImg.img} />
      </div>
    </section>
  );
};

export default HeroSection;
