import React, { useEffect } from 'react';
import { X, ArrowRight, Check, Clock } from 'lucide-react';
import { Service } from '../data/studioData';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-[#F7F3ED] border border-[#E5DED2] rounded-lg max-w-2xl w-full p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#EFE9DF] text-[#1E211C] transition-colors focus:outline-none"
          aria-label="Close service view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-serif text-xl text-[#59624D] font-normal">
              {service.number}
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#6C745E] font-medium">
              Studio Discipline
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E211C] font-normal">
            {service.title}
          </h2>
        </div>

        {/* Timeline Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EFE9DF] border border-[#D5CCBD] rounded-sm text-xs text-[#1E211C] mb-6">
          <Clock className="w-3.5 h-3.5 text-[#59624D]" />
          <span>Typical Engagement: {service.timeline}</span>
        </div>

        {/* Narrative Description */}
        <p className="text-base text-[#292923]/80 leading-relaxed mb-8 font-normal">
          {service.fullDesc}
        </p>

        {/* Key Deliverables */}
        <div className="mb-8">
          <h4 className="text-xs uppercase tracking-widest text-[#1E211C] font-semibold mb-4">
            Included Deliverables & Documentation
          </h4>
          <div className="space-y-3">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#EFE9DF]/50 p-3 rounded-sm border border-[#E5DED2]">
                <div className="w-5 h-5 rounded-full bg-[#59624D] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-sm text-[#1E211C] font-normal">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-6 border-t border-[#E5DED2] flex items-center justify-end gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs text-[#1E211C] hover:bg-[#EFE9DF] rounded-sm uppercase tracking-wider transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onInquire(service.title);
            }}
            className="inline-flex items-center gap-2 bg-[#1E211C] hover:bg-[#292923] text-white text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-colors font-medium"
          >
            <span>Inquire for {service.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
