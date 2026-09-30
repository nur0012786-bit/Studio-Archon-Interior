import React, { useState } from 'react';
import { Mail, Quote, Sparkles, Award } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/studioData';

interface TeamSectionProps {
  onOpenConsultation?: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenConsultation }) => {
  const [selectedPhilosophy, setSelectedPhilosophy] = useState<string | null>(null);

  return (
    <section id="team" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E5DED2]/80 relative overflow-hidden">
      {/* Subtle Background Architectural Gridlines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E211C 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#2C3524]" />
              <span className="text-xs sm:text-[13px] uppercase tracking-[0.24em] text-[#2C3524] font-extrabold">
                Studio Archon · Studio Leadership
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#0A0D08] font-bold leading-[1.1] tracking-tight">
              The Minds Behind <br />
              <span className="editorial-italic text-[#2C3524] font-bold">the Architecture.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#1E211C]/80 leading-relaxed font-normal mb-4">
              A collaborative collective of licensed architects, interior directors, and master craftspeople united by a reverence for natural daylight, tactile materiality, and spatial stillness.
            </p>
            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#2C3524] hover:text-[#0A0D08] transition-colors border-b border-[#2C3524] pb-0.5 cursor-pointer"
              >
                <span>Inquire with our leadership team</span>
                <span>→</span>
              </button>
            )}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {TEAM_MEMBERS.map((member: TeamMember) => {
            const isPhilosophyActive = selectedPhilosophy === member.id;

            return (
              <div
                key={member.id}
                className="group flex flex-col justify-between bg-[#F7F3ED] rounded-lg border border-[#E5DED2] p-4 sm:p-5 transition-all duration-300 hover:border-[#2C3524]/60 hover:shadow-[0_12px_32px_-8px_rgba(30,33,28,0.08)]"
              >
                <div>
                  {/* Portrait Container */}
                  <div className="relative aspect-[3/4] w-full rounded-md overflow-hidden bg-[#EFE9DF] border border-[#E5DED2] mb-5 shadow-xs">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Floating Specialty Badge */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F7F3ED]/95 backdrop-blur-xs rounded-xs text-[10px] font-bold text-[#0A0D08] uppercase tracking-wider border border-[#E5DED2]/80 shadow-xs max-w-full truncate">
                        <Sparkles className="w-3 h-3 text-[#2C3524] shrink-0" />
                        <span className="truncate">{member.specialty}</span>
                      </div>
                    </div>
                  </div>

                  {/* Member Identity & Title */}
                  <div className="space-y-1 mb-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-serif text-2xl text-[#0A0D08] font-bold tracking-tight group-hover:text-[#2C3524] transition-colors">
                        {member.name}
                      </h3>
                      <span className="inline-flex items-center text-[10px] uppercase font-bold tracking-wider text-[#6C745E] bg-[#EFE9DF] px-2 py-0.5 rounded-xs shrink-0">
                        <Award className="w-3 h-3 mr-1 text-[#2C3524]" />
                        Bio
                      </span>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#2C3524] font-extrabold uppercase tracking-wide">
                      {member.role}
                    </p>

                    <p className="text-[11px] text-[#6C745E] font-medium tracking-tight">
                      {member.credentials}
                    </p>
                  </div>

                  {/* Bio Description */}
                  <p className="text-xs sm:text-sm text-[#292923]/80 leading-relaxed font-normal mb-5">
                    {member.bio}
                  </p>

                  {/* Expandable Philosophy Quote Box */}
                  {isPhilosophyActive && (
                    <div className="mb-5 p-3.5 bg-[#EFE9DF] border-l-2 border-[#2C3524] rounded-r-sm animate-in fade-in duration-200">
                      <Quote className="w-4 h-4 text-[#2C3524] mb-1.5 opacity-70" />
                      <p className="text-xs italic text-[#1E211C] leading-snug font-serif">
                        &ldquo;{member.quote}&rdquo;
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer Controls: Toggle Philosophy & Direct Email */}
                <div className="pt-4 border-t border-[#E5DED2] flex items-center justify-between gap-2 text-xs">
                  <button
                    onClick={() =>
                      setSelectedPhilosophy(isPhilosophyActive ? null : member.id)
                    }
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2C3524] hover:text-[#0A0D08] transition-colors focus:outline-none cursor-pointer"
                    aria-label={`Toggle philosophy for ${member.name}`}
                  >
                    <span>{isPhilosophyActive ? 'Hide Philosophy' : 'Studio Creed'}</span>
                    <span className="text-xs">{isPhilosophyActive ? '↑' : '↓'}</span>
                  </button>

                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 text-[11px] text-[#6C745E] hover:text-[#0A0D08] transition-colors font-medium p-1 rounded-sm focus:outline-none"
                    title={`Contact ${member.name}`}
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-3.5 h-3.5 text-[#2C3524]" />
                    <span className="hidden sm:inline">Direct</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Culture & Trust Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-lg bg-[#EFE9DF]/80 border border-[#E5DED2] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#2C3524] font-extrabold block mb-2">
              Bespoke Client Continuity
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#0A0D08] font-bold mb-3">
              Direct Principal Engagement on Every Commission
            </h3>
            <p className="text-xs sm:text-sm text-[#292923]/80 leading-relaxed font-normal">
              Unlike large commercial practices where commissions are delegated down to junior draughtsmen, Studio Archon operates with absolute senior partner immersion from initial architectural sketch through to on-site stone handover.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="text-center sm:text-right">
              <span className="block font-serif text-3xl font-bold text-[#0A0D08]">100%</span>
              <span className="text-[11px] uppercase tracking-wider text-[#6C745E] font-medium">Principal-Led</span>
            </div>
            <div className="h-10 w-[1px] bg-[#D5CCBD] hidden sm:block" />
            <div className="text-center sm:text-left">
              <span className="block font-serif text-3xl font-bold text-[#0A0D08]">16+ Yrs</span>
              <span className="text-[11px] uppercase tracking-wider text-[#6C745E] font-medium">Average Tenure</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
