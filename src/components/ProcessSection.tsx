import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { PROCESS_STEPS } from '../data/studioData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-20 lg:py-32 bg-[#EFE9DF]/40 border-b border-[#E5DED2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#59624D]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#59624D] font-semibold">
              Structured Methodology
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E211C] font-normal leading-tight">
            A Clear Process <br />
            <span className="editorial-italic text-[#59624D]">From Idea to Reality.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#292923]/70 mt-4 leading-relaxed font-normal">
            Great interiors are achieved through an orderly, communicative timeline. We remove uncertainty at every milestone with clear architectural deliverables.
          </p>
        </div>

        {/* Timeline Desktop Grid / Mobile Stack */}
        <div className="relative">
          {/* Horizontal Connecting Line on desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-[1px] bg-[#D5CCBD] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((item, index) => {
              const isSelected = activeStep === index;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer transition-all duration-300 p-6 rounded-md bg-[#F7F3ED] border ${
                    isSelected
                      ? 'border-[#59624D] shadow-[0_10px_25px_-5px_rgba(89,98,77,0.12)] -translate-y-1'
                      : 'border-[#E5DED2] hover:border-[#B7AE9E]'
                  }`}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveStep(index);
                    }
                  }}
                  aria-label={`Step ${item.step}: ${item.title}`}
                >
                  {/* Step Number Circle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-serif text-lg font-medium transition-colors ${
                      isSelected
                        ? 'bg-[#59624D] text-[#F7F3ED]'
                        : 'bg-[#EFE9DF] text-[#1E211C] border border-[#D5CCBD]'
                    }`}>
                      {item.step}
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-[#6C745E] font-medium tracking-wide">
                      <Clock className="w-3 h-3 text-[#A58B65]" />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#1E211C] font-normal mb-1">
                    {item.title}
                  </h3>
                  
                  <div className="text-[11px] uppercase tracking-wider text-[#6C745E] font-semibold mb-3">
                    {item.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-[#292923]/70 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
