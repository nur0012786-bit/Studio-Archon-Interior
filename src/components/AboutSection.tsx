import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { studioImages } from '../data/assets';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  const highlights = [
    'Personalized Design Direction',
    'Thoughtful Material Selection',
    'Functional Spatial Planning',
    'Detailed Project Coordination',
    'Refined Contemporary Aesthetics',
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-[#F7F3ED] border-b border-[#E5DED2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Tactile Materials & Studio Image */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden border border-[#E5DED2] shadow-[0_15px_40px_-15px_rgba(30,33,28,0.08)]">
              <img
                src={studioImages.about}
                alt="Studio Archon architectural workshop with material samples of travertine stone, white oak, and textile swatches"
                className="w-full h-[440px] sm:h-[540px] object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Subtle decorative detail tag */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#EFE9DF] border border-[#D5CCBD] p-4 rounded-sm shadow-sm max-w-xs">
              <div className="text-[10px] uppercase tracking-widest text-[#6C745E] font-medium mb-1">
                Material Authenticity
              </div>
              <p className="text-xs text-[#1E211C] italic font-serif">
                "Honest stone, unlacquered metals, and enduring joinery that grow richer with time."
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy & List */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#2C3524]" />
              <span className="text-xs uppercase tracking-[0.24em] text-[#2C3524] font-extrabold">
                About Studio Archon
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-[#1E211C] mb-6 font-normal">
              More Than Beautiful Spaces. <br />
              <span className="editorial-italic text-[#59624D]">Places With Purpose.</span>
            </h2>

            {/* Philosophy Paragraph */}
            <p className="text-base text-[#292923]/80 leading-relaxed mb-6 font-normal">
              We believe exceptional interiors begin with understanding how people actually live, work, gather, and rest. Every project balances architecture, materiality, functionality, and atmosphere to create spaces that feel natural, personal, and enduring.
            </p>

            <p className="text-sm text-[#292923]/70 leading-relaxed mb-8">
              Based in New York with projects spanning North America, our studio rejects transient trends in favor of tailored spatial compositions that celebrate light, texture, and everyday rituals.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 pt-4 border-t border-[#E5DED2]">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EFE9DF] border border-[#D5CCBD] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[#59624D]" />
                  </div>
                  <span className="text-xs sm:text-[13px] text-[#1E211C] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#1E211C] hover:text-[#59624D] transition-colors group"
              >
                <span>Discover Our Studio Philosophy</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
