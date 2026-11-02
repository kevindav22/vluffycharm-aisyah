"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { faqData } from "@/data/faqData";

const FAQSection = () => {
  const [expanded, setExpanded] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = faqData;
  const visibleFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section className="bg-gradient-to-br from-rose-50 via-pink-100/80 to-[#edd5ec]/70 ">
      <div className="container mx-auto max-w-7xl py-6 md:py-12 px-5 md:px-8 lg:px-12">
        <div className="overflow-hidden rounded-xl bg-white/80 shadow-sm backdrop-blur">
          <div className="flex w-full items-center justify-between gap-4 p-4 text-left transition-colors duration-300 hover:bg-white md:p-5">
            <h2 className="text-xl font-bold leading-tight text-slate-900 md:text-2xl">
              Pertanyaan Umum
            </h2>
          </div>

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
                        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors duration-300 md:px-5 md:py-5"
                      >
                        <span className="text-sm font-semibold text-slate-800 md:text-base">
                          {faq.question}
                        </span>
                        <FiChevronDown
                          className={`shrink-0 text-slate-400 transition-transform duration-300 ${
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

              <div className="border-t border-rose-100/80 bg-rose-50/50 px-4 py-3 md:px-5">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="group inline-flex w-full items-center justify-center gap-2 text-sm font-semibold text-rose-600 transition-colors hover:text-rose-700 md:text-base"
                >
                  <span>
                    {visibleFaqs.length === faqs.length
                      ? "Tampilkan Lebih Sedikit"
                      : "Lihat Selengkapnya"}
                  </span>
                  <FiChevronDown
                    className={`shrink-0 transition-transform duration-300 ${
                      visibleFaqs.length === faqs.length ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
