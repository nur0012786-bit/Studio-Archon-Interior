import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/studioData';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F7F3ED] border-b border-[#E5DED2]/60">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-3 justify-center">
            <span className="w-6 h-[1px] bg-[#59624D]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#59624D] font-semibold">
              Client Guidance
            </span>
            <span className="w-6 h-[1px] bg-[#59624D]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E211C] font-normal">
            Frequently Asked <span className="editorial-italic text-[#59624D]">Questions.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#E5DED2] border-t border-b border-[#E5DED2]">
          {FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div key={index} className="py-5">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group py-1"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#1E211C] font-normal group-hover:text-[#59624D] transition-colors pr-6">
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#EFE9DF] border border-[#D5CCBD] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#59624D] text-white border-[#59624D]' : 'text-[#1E211C]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3 text-sm text-[#292923]/80 leading-relaxed font-normal pr-12 animate-in fade-in slide-in-from-top-1 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
