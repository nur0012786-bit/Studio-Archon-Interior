import React, { useEffect } from 'react';
import { X, Calendar, Clock, Bookmark, AlignLeft } from 'lucide-react';
import { JournalPost } from '../data/studioData';
import { calculateReadingTime } from '../utils/readingTime';

interface ArticleModalProps {
  post: JournalPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  const readingEstimate = calculateReadingTime(post);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div
        className="relative bg-[#F7F3ED] border border-[#E5DED2] rounded-lg max-w-3xl w-full my-auto overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-[#1E211C]/80 hover:bg-[#1E211C] text-white flex items-center justify-center transition-colors focus:outline-none"
          aria-label="Close article view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Article Image Banner */}
        <div className="relative h-64 sm:h-80 w-full bg-[#1E211C]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E211C]/80 via-transparent to-transparent" />
        </div>

        {/* Content Container */}
        <div className="p-6 sm:p-10">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#6C745E] mb-4 pb-4 border-b border-[#E5DED2]">
            <span className="flex items-center gap-1 font-medium text-[#59624D]">
              <Bookmark className="w-3.5 h-3.5" />
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1 text-[#59624D] font-medium">
              <Clock className="w-3.5 h-3.5" />
              {readingEstimate.label}
            </span>
            <span className="flex items-center gap-1 text-[#B7AE9E]">
              <AlignLeft className="w-3.5 h-3.5" />
              {readingEstimate.wordCount} words
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1E211C] font-normal leading-tight mb-6">
            {post.title}
          </h2>

          {/* Lead Quote / Excerpt */}
          <div className="bg-[#EFE9DF] border-l-2 border-[#59624D] p-4 rounded-r-sm mb-8">
            <p className="font-serif italic text-base text-[#1E211C]">
              "{post.excerpt}"
            </p>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-[#292923]/80 leading-relaxed font-normal">
            {post.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Author Sign-off */}
          <div className="mt-10 pt-6 border-t border-[#E5DED2] flex items-center justify-between text-xs text-[#6C745E]">
            <span>Published by Atelier Forma Editorial Desk</span>
            <button
              onClick={onClose}
              className="text-[#1E211C] hover:text-[#59624D] font-medium uppercase tracking-wider transition-colors"
            >
              Back to Journal
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
