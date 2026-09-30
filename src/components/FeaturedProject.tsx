import React from 'react';
import { ArrowRight } from 'lucide-react';
import { studioImages } from '../data/assets';
import { PROJECTS, Project } from '../data/studioData';

interface FeaturedProjectProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ onSelectProject }) => {
  const featured = PROJECTS[0]; // West Village Residence

  return (
    <section className="py-16 lg:py-24 bg-[#EFE9DF]/50 border-y border-[#E5DED2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative rounded-lg overflow-hidden border border-[#E5DED2] bg-[#1E211C]">
          
          {/* Main Full-Height Background Image */}
          <div className="relative h-[520px] sm:h-[620px] lg:h-[680px] w-full">
            <img
              src={studioImages.featured}
              alt="West Village Residence interior architecture featuring stone fireplace and custom dining joinery"
              className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105"
              loading="lazy"
            />
            {/* Subtle Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E211C]/90 via-[#1E211C]/40 to-transparent" />
          </div>

          {/* Overlapping Editorial Olive/Charcoal Panel */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-auto sm:max-w-lg lg:max-w-xl bg-[#292923]/95 backdrop-blur-md border border-white/10 p-6 sm:p-10 rounded-md text-white shadow-2xl">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-5 h-[1px] bg-[#A58B65]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A58B65] font-semibold">
                Featured Residence · New York
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] mb-4 text-[#F7F3ED]">
              Quiet Luxury, <br />
              <span className="editorial-italic font-normal text-[#E5DED2]">Thoughtfully Composed.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#D5CCBD] leading-relaxed mb-6 font-light">
              A contemporary townhouse residence shaped around natural daylight, tactile masonry, and a calmer rhythm of everyday living. Every piece of joinery was crafted in our dedicated workshop.
            </p>

            {/* Architectural details unboxed inline text */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#B7AE9E] mb-8 pb-6 border-b border-white/10">
              <span>Honed Travertine</span>
              <span aria-hidden="true">·</span>
              <span>Fumed White Oak</span>
              <span aria-hidden="true">·</span>
              <span>2,800 sq ft</span>
              <span aria-hidden="true">·</span>
              <span>Completed 2025</span>
            </div>

            {/* CTA */}
            <div>
              <button
                onClick={() => onSelectProject(featured)}
                className="inline-flex items-center gap-3 bg-[#59624D] hover:bg-[#6C745E] text-[#F7F3ED] text-xs uppercase tracking-widest px-6 py-3.5 rounded-sm transition-all duration-300 font-medium group active:scale-[0.98]"
              >
                <span>Explore Project Case Study</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
