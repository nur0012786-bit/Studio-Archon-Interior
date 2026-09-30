import React from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { studioImages } from '../data/assets';

interface ConsultationCTAProps {
  onOpenConsultation: () => void;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 lg:py-32 bg-[#EFE9DF]/60 border-b border-[#E5DED2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-[#F7F3ED] border border-[#E5DED2] rounded-lg overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-6 h-[1px] bg-[#59624D]" />
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#59624D] font-semibold">
                    New Project Inquiries
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E211C] font-normal leading-[1.14] mb-6">
                  Let's Create a Space <br />
                  <span className="editorial-italic text-[#59624D]">That Feels Like Yours.</span>
                </h2>

                <p className="text-base text-[#292923]/80 leading-relaxed max-w-lg mb-8 font-normal">
                  Tell us about your project, your architectural priorities, and the kind of environment you wish to cultivate. We welcome inquiries for comprehensive renovations, new builds, and boutique commercial ventures.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-xs text-[#292923]/80">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-[#59624D]" />
                    <span>Complimentary 30-min discovery session</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#A58B65]" />
                    <span>Tailored scope, timeline & fee proposal</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-3 bg-[#1E211C] hover:bg-[#292923] text-[#F7F3ED] text-xs uppercase tracking-widest px-8 py-4 rounded-sm transition-all duration-300 font-medium group active:scale-[0.98] shadow-sm hover:shadow-md"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Architectural Image */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src={studioImages.consultation}
                alt="Atelier Forma private client consultation lounge with custom joinery and curated ceramics"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
