"use client";

import { useState } from "react";
import SafeImage from "@/components/ui/SafeImage";

// Placeholder gallery images - nanti kamu ganti dengan foto tenant asli
const galleryImages = [
  { id: 1, src: "/images/charm1.webp", alt: "Gallery 1", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/images/charm2.webp", alt: "Gallery 2", span: "" },
  { id: 3, src: "/images/charm3.webp", alt: "Gallery 3", span: "md:row-span-2" },
  { id: 4, src: "/images/charm4.jpg", alt: "Gallery 4", span: "" },
  { id: 5, src: "/images/charm5.jpg", alt: "Gallery 5", span: "md:col-span-2" },
  { id: 6, src: "/images/1.png", alt: "Gallery 6", span: "" },
  { id: 7, src: "/images/charm1.webp", alt: "Gallery 7", span: "" },
  { id: 8, src: "/images/charm2.webp", alt: "Gallery 8", span: "md:col-span-2" },
];

const AboutGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:px-12">
        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.src)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-rose-100 bg-rose-50 transition hover:-translate-y-1 hover:shadow-xl ${image.span}`}
            >
              <SafeImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Lightbox modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <div className="relative max-h-[90vh] max-w-5xl">
              <SafeImage
                src={selectedImage}
                alt="Gallery preview"
                width={1200}
                height={800}
                className="h-auto max-h-[90vh] w-auto rounded-2xl object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -right-4 -top-4 flex size-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition hover:bg-rose-50"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutGallery;
