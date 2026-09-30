import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/studioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#F7F3ED] border-b border-[#E5DED2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#59624D]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#59624D] font-semibold">
              Client Experiences
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E211C] font-normal leading-tight">
            Designed Around <br />
            <span className="editorial-italic text-[#59624D]">Real Life.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#292923]/70 mt-4 leading-relaxed font-normal">
            Reflections from residential and commercial clients who entrusted our studio with their most intimate environments.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#EFE9DF]/50 border border-[#E5DED2] p-8 rounded-md flex flex-col justify-between transition-all duration-300 hover:bg-[#EFE9DF] hover:border-[#D5CCBD]"
            >
              <div>
                <Quote className="w-6 h-6 text-[#A58B65]/70 mb-6" />
                <p className="text-sm sm:text-[15px] text-[#1E211C] leading-relaxed font-normal mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#E5DED2]/80">
                <div className="font-serif text-lg text-[#1E211C] font-medium">
                  {t.author}
                </div>
                <div className="text-xs text-[#6C745E] mt-0.5">
                  {t.role} · {t.location}
                </div>
                <div className="text-[11px] text-[#A58B65] mt-1 font-light italic">
                  {t.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
