import React from 'react';
import { PHILOSOPHY_PRINCIPLES } from '../data/studioData';
import { ScrollReveal } from './ScrollReveal';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 lg:py-32 bg-[#F7F3ED] border-b border-[#E5DED2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Eyebrow & Main Statement */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#59624D]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#59624D] font-semibold">
              Our Core Principles
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E211C] font-normal leading-[1.12]">
            Good design should <br />
            <span className="editorial-italic text-[#59624D]">feel effortless.</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#292923]/70 mt-6 leading-relaxed font-light">
            Behind every serene room lies rigorous mathematical proportion, subtle acoustic damping, and an obsessive appreciation for authentic natural materials.
          </p>
        </div>

        {/* 3 Principles Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pt-8 border-t border-[#E5DED2]">
          {PHILOSOPHY_PRINCIPLES.map((principle, index) => (
            <ScrollReveal
              key={principle.number}
              delay={index * 120}
              distance={20}
              duration={850}
              className="flex flex-col"
            >
              <span className="font-serif text-3xl sm:text-4xl text-[#B7AE9E] mb-6 font-light">
                {principle.number}
              </span>
              
              <h3 className="font-serif text-2xl text-[#1E211C] font-normal mb-3">
                {principle.title}
              </h3>
              
              <p className="text-sm text-[#292923]/70 leading-relaxed font-normal">
                {principle.description}
              </p>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

