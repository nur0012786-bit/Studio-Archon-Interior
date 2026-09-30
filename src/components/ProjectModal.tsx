import React, { useEffect } from 'react';
import { X, ArrowRight, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { Project } from '../data/studioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div
        className="relative bg-[#F7F3ED] border border-[#E5DED2] rounded-lg max-w-4xl w-full my-auto overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#1E211C]/80 hover:bg-[#1E211C] text-white flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close project view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-[320px] sm:h-[420px] w-full bg-[#1E211C]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E211C]/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D5CCBD] mb-2 font-medium">
              <span>{project.category}</span>
              <span aria-hidden="true">·</span>
              <span>{project.location}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-10 space-y-10">
          
          {/* Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#E5DED2] text-xs">
            <div>
              <span className="text-[#6C745E] block uppercase tracking-wider mb-1">Location</span>
              <span className="font-medium text-[#1E211C] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#59624D]" />
                {project.location}
              </span>
            </div>
            <div>
              <span className="text-[#6C745E] block uppercase tracking-wider mb-1">Year Completed</span>
              <span className="font-medium text-[#1E211C] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#59624D]" />
                {project.year}
              </span>
            </div>
            <div>
              <span className="text-[#6C745E] block uppercase tracking-wider mb-1">Area / Scope</span>
              <span className="font-medium text-[#1E211C] flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5 text-[#59624D]" />
                {project.area}
              </span>
            </div>
            <div>
              <span className="text-[#6C745E] block uppercase tracking-wider mb-1">Typology</span>
              <span className="font-medium text-[#1E211C]">
                {project.category} Architecture
              </span>
            </div>
          </div>

          {/* Project Summary */}
          <div>
            <h3 className="font-serif text-xl text-[#1E211C] mb-3">Project Narrative</h3>
            <p className="text-base text-[#292923]/80 leading-relaxed font-normal">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Approach */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-[#EFE9DF]/50 p-6 rounded-md border border-[#E5DED2]">
              <h4 className="text-xs uppercase tracking-widest text-[#59624D] font-semibold mb-2">
                The Design Challenge
              </h4>
              <p className="text-sm text-[#292923]/80 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-[#EFE9DF]/50 p-6 rounded-md border border-[#E5DED2]">
              <h4 className="text-xs uppercase tracking-widest text-[#59624D] font-semibold mb-2">
                The Architectural Approach
              </h4>
              <p className="text-sm text-[#292923]/80 leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Materials Palette & Scope */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#1E211C] font-semibold mb-3">
                Materiality & Tactile Palette
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((mat, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#EFE9DF] text-[#1E211C] border border-[#D5CCBD] px-3 py-1.5 rounded-sm"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#1E211C] font-semibold mb-3">
                Scope of Work
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-[#292923]/80">
                {project.scope.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#59624D]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery Previews */}
          {project.gallery && project.gallery.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#1E211C] font-semibold mb-4">
                Selected Spatial Vignettes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.gallery.map((img, idx) => (
                  <div key={idx} className="h-44 rounded-md overflow-hidden border border-[#E5DED2]">
                    <img
                      src={img}
                      alt={`${project.title} detail view ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Action */}
          <div className="pt-6 border-t border-[#E5DED2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#6C745E]">
              Interested in shaping a space with this visual language?
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-xs text-[#1E211C] hover:bg-[#EFE9DF] rounded-sm transition-colors uppercase tracking-wider"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="inline-flex items-center gap-2 bg-[#1E211C] hover:bg-[#292923] text-white text-xs uppercase tracking-widest px-6 py-2.5 rounded-sm transition-colors"
              >
                <span>Inquire About This Style</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
