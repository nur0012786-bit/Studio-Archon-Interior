import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { studioImages } from '../data/assets';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onExploreWork: () => void;
  onBookConsultation: () => void;
  onViewFeatured: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onBookConsultation,
  onViewFeatured,
}) => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <ScrollReveal
            as="div"
            className="lg:col-span-6 flex flex-col justify-center"
            distance={20}
            duration={850}
            delay={50}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#2C3524]" />
              <span className="text-xs sm:text-[13px] uppercase tracking-[0.24em] text-[#2C3524] font-extrabold">
                Studio Archon · Architecture & Bespoke Interiors
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[76px] leading-[1.05] text-[#0A0D08] tracking-tight mb-6 font-bold">
              Spaces Designed <br className="hidden sm:inline" />
              <span className="editorial-italic font-bold text-[#2C3524]">for the Way</span> <br className="hidden sm:inline" />
              You Live.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#161A12] leading-relaxed max-w-xl mb-10 font-normal">
              Thoughtful interiors shaped around your lifestyle, architecture, and everyday rituals. We craft enduring environments where comfort meets quiet architectural precision.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 bg-[#1E211C] hover:bg-[#292923] text-[#F7F3ED] text-[13px] tracking-wider uppercase font-medium px-7 py-4 rounded-sm transition-all duration-300 shadow-sm hover:shadow-md group active:scale-[0.98]"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#EFE9DF]/80 text-[#1E211C] border border-[#292923]/30 hover:border-[#1E211C] text-[13px] tracking-wider uppercase font-medium px-6 py-4 rounded-sm transition-all duration-300"
              >
                <span>Book a Consultation</span>
              </button>
            </div>

            {/* Subtle Trust Indicator */}
            <div className="pt-8 border-t border-[#E5DED2] flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-[#F7F3ED] bg-[#D5CCBD] flex items-center justify-center text-[10px] font-serif text-[#1E211C]">
                  AF
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#F7F3ED] bg-[#59624D] text-white flex items-center justify-center text-[10px] font-serif">
                  NY
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-[#F7F3ED] bg-[#A58B65] text-white flex items-center justify-center text-[10px] font-serif">
                  25
                </div>
              </div>
              <div className="text-xs text-[#292923]/80 leading-tight">
                <span className="font-medium text-[#1E211C] block">Designing thoughtful spaces for modern living</span>
                <span className="text-[#6C745E] text-[11px]">Bespoke residential & boutique commercial interiors</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Large Interior Photography with Floating Feature Card */}
          <ScrollReveal
            as="div"
            className="lg:col-span-6 relative"
            distance={24}
            duration={950}
            delay={160}
          >
            <div className="relative rounded-lg overflow-hidden shadow-[0_20px_50px_-15px_rgba(30,33,28,0.12)] border border-[#E5DED2]">
              <img
                src={studioImages.hero}
                alt="Contemporary luxury living room designed by Atelier Forma featuring curved cream sofa and travertine table"
                className="w-full h-[460px] sm:h-[580px] object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Overlapping Card */}
            <div className="sm:absolute sm:-bottom-8 sm:-left-8 mt-4 sm:mt-0 bg-[#F7F3ED]/95 backdrop-blur-md border border-[#E5DED2] p-5 sm:p-6 rounded-md shadow-[0_15px_35px_-5px_rgba(30,33,28,0.1)] max-w-xs transition-transform duration-300 hover:-translate-y-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#6C745E] font-semibold block mb-1">
                Featured Residence
              </span>
              <h3 className="font-serif text-lg text-[#1E211C] font-medium mb-2 leading-tight">
                West Village Residence
              </h3>
              <button
                onClick={onViewFeatured}
                className="inline-flex items-center gap-1.5 text-xs text-[#59624D] hover:text-[#1E211C] font-medium transition-colors group"
              >
                <span>View Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
