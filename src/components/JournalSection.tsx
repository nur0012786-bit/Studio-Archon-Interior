import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { JOURNAL_POSTS, JournalPost } from '../data/studioData';
import { calculateReadingTime } from '../utils/readingTime';

interface JournalSectionProps {
  onSelectArticle: (post: JournalPost) => void;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="journal" className="py-20 lg:py-32 bg-[#F7F3ED] border-b border-[#E5DED2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#59624D]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#59624D] font-semibold">
                From The Journal
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E211C] font-normal leading-tight">
              Ideas for <span className="editorial-italic text-[#59624D]">Better Spaces.</span>
            </h2>
          </div>
          <p className="text-sm text-[#292923]/70 max-w-sm">
            Perspectives on architectural materiality, calm spatial balance, and the enduring craft of living well.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNAL_POSTS.map((post) => {
            // Calculate reading time estimate based on word count / 200 WPM
            const readingTime = calculateReadingTime(post);

            return (
              <article
                key={post.id}
                onClick={() => onSelectArticle(post)}
                className="group cursor-pointer flex flex-col justify-between focus:outline-none"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectArticle(post);
                  }
                }}
                aria-label={`Read article: ${post.title} (${readingTime.label})`}
              >
                <div>
                  {/* Article Image Container */}
                  <div className="relative h-64 overflow-hidden rounded-md border border-[#E5DED2] bg-[#EFE9DF] mb-5">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                    {/* Floating Reading Time Estimate Badge */}
                    <div className="absolute top-3.5 right-3.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#F7F3ED]/95 backdrop-blur-xs text-[#1E211C] text-[11px] font-medium shadow-xs border border-[#E5DED2]/80">
                      <Clock className="w-3 h-3 text-[#59624D]" />
                      <span>{readingTime.label}</span>
                    </div>
                  </div>

                  {/* Metadata Row with Reading Time Estimate */}
                  <div className="flex items-center gap-2 text-xs text-[#6C745E] mb-2 font-medium">
                    <span>{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="inline-flex items-center gap-1 text-[#59624D]">
                      <Clock className="w-3 h-3" />
                      <span>{readingTime.label}</span>
                    </span>
                  </div>

                  {/* Article Title */}
                  <h3 className="font-serif text-2xl text-[#1E211C] font-normal mb-3 group-hover:text-[#59624D] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Short Excerpt */}
                  <p className="text-xs sm:text-sm text-[#292923]/70 leading-relaxed font-normal mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read Link with Word Count Context */}
                <div className="pt-3 border-t border-[#E5DED2]/60 flex items-center justify-between text-xs text-[#59624D] font-medium tracking-wide uppercase group-hover:text-[#1E211C] transition-colors">
                  <div className="flex items-center gap-1.5">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <span className="text-[10px] tracking-normal text-[#B7AE9E] font-normal lowercase">
                    {readingTime.wordCount} words
                  </span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
