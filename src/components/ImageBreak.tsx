import React from 'react';
import { studioImages } from '../data/assets';

export const ImageBreak: React.FC = () => {
  return (
    <section className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] overflow-hidden my-8 sm:my-16">
      {/* Background Image */}
      <img
        src={studioImages.panoramic}
        alt="Cinematic architectural minimalist sanctuary hallway with sculptural vault"
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {/* Dark Subtle Overlay */}
      <div className="absolute inset-0 bg-[#1E211C]/55 backdrop-blur-[1px]" />

      {/* Editorial Statement Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-12 text-center">
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D5CCBD] font-medium block mb-4">
            Studio Ethos
          </span>
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-[#F7F3ED] font-normal leading-relaxed">
            “The spaces around us shape how we experience everyday life.”
          </blockquote>
          <div className="w-12 h-[1px] bg-[#A58B65] mx-auto mt-6" />
        </div>
      </div>
    </section>
  );
};
