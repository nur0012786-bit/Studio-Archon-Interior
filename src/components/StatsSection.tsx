import React from 'react';
import { STUDIO_METRICS } from '../data/studioData';
import { Award, Compass, Eye, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const StatsSection: React.FC = () => {
  const getIcon = (idx: number) => {
    const props = { className: "w-5 h-5 text-[#A58B65]" };
    switch (idx) {
      case 0:
        return <Award {...props} />;
      case 1:
        return <Compass {...props} />;
      case 2:
        return <Sparkles {...props} />;
      case 3:
        return <Eye {...props} />;
      default:
        return <Award {...props} />;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-[#1E211C] text-[#F7F3ED]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {STUDIO_METRICS.map((item, idx) => (
            <ScrollReveal
              key={idx}
              delay={idx * 100}
              distance={20}
              duration={800}
              className={`flex flex-col ${idx !== 0 ? 'sm:pl-8 lg:pl-10' : ''} pt-6 sm:pt-0`}
            >
              <div className="mb-4">
                {getIcon(idx)}
              </div>
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F7F3ED] font-light mb-2">
                {item.metric}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-[#D5CCBD] font-medium mb-1">
                {item.label}
              </div>
              <div className="text-[11px] text-[#B7AE9E]/70 font-light">
                {item.detail}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-[11px] text-[#B7AE9E]/60 tracking-wider uppercase font-light">
          Atelier Forma Studio Portfolio & Design Benchmarks
        </div>
      </div>
    </section>
  );
};
