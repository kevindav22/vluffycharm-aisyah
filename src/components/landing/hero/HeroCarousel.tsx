"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import SafeImage from "@/components/ui/SafeImage";
import { profilData } from "@/data/statisData";
import { TypesCaraousel } from "@/types/globalTypes";

const HeroCarousel = ({ images }: { images: TypesCaraousel["img"] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-full w-full">
      <div className="h-full w-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((src, index) => (
            <div key={index} className="relative h-full w-full flex-none">
              <SafeImage
                src={src}
                fill
                // Hanya slide pertama yang perlu diprioritaskan (LCP).
                // Sisanya lazy; slide non-aktif tidak menahan render awal.
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                quality={index === 0 ? 75 : 60}
                sizes="100vw"
                alt={`Koleksi ${profilData.name} - tampilan ${index + 1}`}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-black/60" />
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-between items-center py-8 md:py-12 px-6 text-center">
        <div className="h-14" />
        <h1 className="max-w-2xl text-2xl font-semibold text-white drop-shadow-md sm:text-4xl md:text-5xl">
          Create Something That Tells Your Story
        </h1>

        <div className="pointer-events-auto z-10 flex items-center gap-1 pb-12 md:pb-4">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Tampilkan slide ${index + 1}`}
              aria-current={selectedIndex === index ? "true" : undefined}
              onClick={() => scrollTo(index)}
              className="group flex size-6 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {/* Ukuran dot tetap; hanya transform/opacity yang dianimasikan agar composited. */}
              <span
                className={`block h-1.5 rounded-full bg-white transition-[transform,opacity] duration-300 ${
                  selectedIndex === index
                    ? "w-6 opacity-100"
                    : "w-1.5 opacity-50 group-hover:opacity-80"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
