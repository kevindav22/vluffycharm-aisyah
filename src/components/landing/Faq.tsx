"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { faqData, type FaqItem } from "@/data/faqData";

type Props = {
  items?: FaqItem[];
  title?: string;
  limit?: number;
};

const FAQSection = ({
  items,
  title = "Pertanyaan Umum",
  limit = 3,
}: Props) => {
  const [expanded, setExpanded] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = items ?? faqData;
  const visibleFaqs = showAll ? faqs : faqs.slice(0, limit);

  return (
    <section className="bg-gradient-to-br from-rose-50 via-pink-100/80 to-[#edd5ec]/70">
      <div className="container mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12 lg:px-12">
        <div
          data-aos="fade-up"
          className="overflow-hidden rounded-xl bg-white/80 shadow-sm backdrop-blur"
        >
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors duration-300 hover:bg-white md:p-5"
          >
            <h2 className="text-xl font-bold leading-tight text-slate-900 md:text-2xl">
              {title}
            </h2>
            <FiChevronDown
              aria-hidden="true"
              className={`shrink-0 text-slate-500 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>

          {expanded && (
            <>
              <div className="border-t border-rose-100/80 bg-rose-50/50">
                {visibleFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;

                  return (
                    <div
                      key={index}
                      className="border-b border-rose-100/70 last:border-b-2"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors duration-300 md:px-5 md:py-5"
                      >
                        <span className="text-sm font-semibold text-slate-800 md:text-base">
                          {faq.question}
                        </span>
                        <FiChevronDown
                          aria-hidden="true"
                          className={`shrink-0 text-slate-500 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-0 md:px-5 md:pb-5">
                          <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {faqs.length > limit && (
                <div className="border-t border-rose-100/80 bg-rose-50/50 px-4 py-3 md:px-5">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    aria-expanded={showAll}
                    className="group inline-flex w-full items-center justify-center gap-2 text-sm font-semibold text-rose-900 transition-colors hover:text-rose-700 md:text-base"
                  >
                    <span>
                      {visibleFaqs.length === faqs.length
                        ? "Tampilkan Lebih Sedikit"
                        : "Lihat Selengkapnya"}
                    </span>
                    <FiChevronDown
                      aria-hidden="true"
                      className={`shrink-0 transition-transform duration-300 ${
                        visibleFaqs.length === faqs.length ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
