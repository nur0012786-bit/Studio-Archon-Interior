import React from 'react';
import { Compass, Layers, LayoutGrid, Box, PenTool, Sparkles, ArrowRight } from 'lucide-react';
import { SERVICES, Service } from '../data/studioData';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const renderIcon = (name: string) => {
    const props = { className: "w-5 h-5 text-[#59624D] transition-transform duration-300 group-hover:scale-110" };
    switch (name) {
      case 'Compass':
        return <Compass {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'LayoutGrid':
        return <LayoutGrid {...props} />;
      case 'Box':
        return <Box {...props} />;
      case 'PenTool':
        return <PenTool {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      default:
        return <Compass {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-[#F7F3ED] border-b border-[#E5DED2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-[#59624D]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#59624D] font-semibold">
              Capabilities & Offerings
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E211C] font-normal leading-tight">
            From First Sketch <br />
            <span className="editorial-italic text-[#59624D]">to Final Detail.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#292923]/70 mt-4 leading-relaxed font-normal">
            Whether undertaking an extensive architectural gut renovation or bespoke turnkey interior styling, our multidisciplinary team coordinates every phase with rigorous care.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group cursor-pointer bg-[#EFE9DF]/60 hover:bg-[#EFE9DF] border border-[#E5DED2] hover:border-[#B7AE9E] p-8 rounded-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-10px_rgba(30,33,28,0.06)] flex flex-col justify-between"
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectService(service);
                }
              }}
              aria-label={`View details for ${service.title}`}
            >
              <div>
                {/* Header row with editorial number and icon */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5DED2]/80">
                  <span className="font-serif text-2xl text-[#6C745E] font-normal">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-sm bg-[#F7F3ED] border border-[#E5DED2] flex items-center justify-center">
                    {renderIcon(service.iconName)}
                  </div>
                </div>

                {/* Service title */}
                <h3 className="font-serif text-2xl text-[#1E211C] font-normal mb-3 group-hover:text-[#59624D] transition-colors">
                  {service.title}
                </h3>

                {/* Short description */}
                <p className="text-sm text-[#292923]/70 leading-relaxed font-normal mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action row */}
              <div className="pt-4 border-t border-[#E5DED2]/60 flex items-center justify-between text-xs text-[#59624D] font-medium tracking-wide uppercase">
                <span>View Scope & Deliverables</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
