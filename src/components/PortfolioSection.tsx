import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { PROJECTS, Project } from '../data/studioData';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
  onOpenConsultation,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-[#F7F3ED]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#59624D]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#59624D] font-semibold">
                Selected Projects
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E211C] font-normal leading-tight">
              Spaces Made <span className="editorial-italic text-[#59624D]">to Be Lived In.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#292923]/70 mt-3 max-w-xl">
              A curated portfolio of private residences, boutique commercial studios, and coastal retreats shaped by architectural rigor.
            </p>
          </div>

          {/* Interactive Filter Tabs (Zero pill - clean segmented control) */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EFE9DF] border border-[#E5DED2] rounded-sm self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-[#1E211C] text-[#F7F3ED] shadow-xs'
                    : 'text-[#292923]/80 hover:text-[#1E211C] hover:bg-[#E5DED2]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            const isWide = index === 0 || index === 3;
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col focus:outline-none"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                aria-label={`View ${project.title} case study`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden rounded-md border border-[#E5DED2] bg-[#EFE9DF] shadow-xs ${
                  isWide ? 'h-[360px] sm:h-[440px]' : 'h-[320px] sm:h-[400px]'
                }`}>
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category} in ${project.location}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

                  {/* Corner Action Tag */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-sm bg-[#F7F3ED]/90 backdrop-blur-sm border border-[#E5DED2] flex items-center justify-center text-[#1E211C] transition-all duration-300 group-hover:bg-[#1E211C] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  {/* Clean unboxed inline overlay metadata */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                    <span className="font-serif italic text-sm">{project.area}</span>
                    <span className="text-[11px] tracking-wider uppercase font-medium">{project.year}</span>
                  </div>
                </div>

                {/* Information Row Below Image */}
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    {/* Zero-Pill unboxed clean text metadata */}
                    <div className="flex items-center gap-2 text-xs text-[#6C745E] mb-1 font-medium tracking-wide">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-[#1E211C] font-normal group-hover:text-[#59624D] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <span className="text-xs text-[#59624D] font-medium tracking-wide uppercase mt-1 shrink-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All & Inquire Banner */}
        <div className="mt-16 pt-10 border-t border-[#E5DED2] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-sm text-[#292923]/70 text-center sm:text-left">
            Have a custom architectural or interior project in mind?
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#1E211C] hover:bg-[#292923] text-[#F7F3ED] text-xs uppercase tracking-widest px-6 py-3 rounded-sm transition-colors font-medium"
            >
              <span>Discuss Your Space</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
