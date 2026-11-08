'use client';

import CountUp from 'react-countup';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FiStar, FiExternalLink } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { testimonials } from '@/data/testimonialData';
import { profilData } from '@/data/statisData';

const stats = [
  { value: 5.0, decimals: 1, suffix: '', label: 'Rating Google' },
  { value: 87, suffix: '', label: 'Ulasan' },
  { value: 443, suffix: '', label: 'Charm' },
  { value: 14, suffix: '', label: 'Kategori Charm' },
];

const TestimonialSection = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3500, stopOnInteraction: false })],
  );

  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-12 lg:px-12">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-xl font-bold leading-tight text-slate-900 md:text-2xl">
            Ulasan Pengunjung Google
          </h2>
          <a
            href={profilData.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-rose-900 transition hover:text-rose-700"
          >
            Lihat semua di Google Maps
            <FiExternalLink />
          </a>
        </div>

        <div data-aos="fade-up" className="mt-6 overflow-hidden" ref={emblaRef}>
          <div className="-ml-6 flex">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <article className="flex h-full flex-col rounded-xl border border-rose-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-rose-200 hover:shadow-lg">
                  <div
                    className="mb-2 flex gap-1"
                    role="img"
                    aria-label="5 dari 5 bintang"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar
                        key={star}
                        className="size-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="mb-3 flex-1 leading-relaxed text-slate-600">
                    &quot;{item.review}&quot;
                  </p>
                  <div className="flex items-center gap-3 border-t border-rose-100 pt-4">
                    <FaUserCircle className="text-5xl text-rose-400" />
                    <div>
                      <h3 className="font-bold text-slate-900">{item.name}</h3>
                      <p className="text-sm text-slate-500">{item.date}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="mt-8 grid grid-cols-2 gap-4 rounded-xl border border-rose-100 bg-gradient-to-r from-rose-50 via-white to-fuchsia-50 p-6 md:grid-cols-4"
        >
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <div className="mb-1 text-2xl font-black text-rose-900 md:text-3xl">
                <CountUp
                  end={item.value}
                  duration={2.5}
                  decimals={item.decimals || 0}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {item.suffix}
              </div>
              <p className="text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
