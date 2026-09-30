import React from 'react';
import { Home, Building2, LayoutGrid, Box, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICE_STRIP } from '../data/studioData';

interface ServiceStripProps {
  onSelectServiceCategory: (id: string) => void;
}

export const ServiceStrip: React.FC<ServiceStripProps> = ({ onSelectServiceCategory }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'residential-design':
        return <Home className="w-5 h-5 text-[#59624D]" />;
      case 'commercial-design':
        return <Building2 className="w-5 h-5 text-[#59624D]" />;
      case 'space-planning':
        return <LayoutGrid className="w-5 h-5 text-[#59624D]" />;
      case '3d-visualization':
        return <Box className="w-5 h-5 text-[#59624D]" />;
      case 'turnkey-interiors':
        return <Sparkles className="w-5 h-5 text-[#59624D]" />;
      default:
        return <Home className="w-5 h-5 text-[#59624D]" />;
    }
  };

  return (
    <section className="relative z-10 -mt-4 mb-16 lg:mb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-[#EFE9DF]/80 border border-[#E5DED2] rounded-md p-2 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#E5DED2]">
            {SERVICE_STRIP.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelectServiceCategory(item.id)}
                className="group p-5 sm:p-6 text-left transition-all duration-300 hover:bg-[#F7F3ED] rounded-sm flex flex-col justify-between focus:outline-none focus:ring-1 focus:ring-[#59624D]"
              >
                <div>
                  <div className="w-9 h-9 rounded-sm bg-[#E5DED2]/60 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#E5DED2]">
                    {getIcon(item.id)}
                  </div>
                  <h4 className="font-serif text-base font-medium text-[#1E211C] mb-1.5 group-hover:text-[#59624D] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#292923]/70 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-2 flex items-center gap-1.5 text-[11px] text-[#6C745E] font-medium tracking-wide uppercase group-hover:text-[#1E211C] transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
