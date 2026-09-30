import React, { useState, useEffect } from 'react';
import { Heart, MessageSquare, MapPin, X, ArrowUpRight, ExternalLink } from 'lucide-react';
import { INSTAGRAM_POSTS, InstagramPost } from '../data/studioData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const InstagramFeed: React.FC = () => {
  const [activePost, setActivePost] = useState<InstagramPost | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActivePost(null);
    };
    if (activePost) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePost]);

  const toggleLike = (e: React.MouseEvent, postId: string) => {
    e.stopPropagation();
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  const getAspectClass = (aspect: InstagramPost['aspectRatio']) => {
    switch (aspect) {
      case 'vertical':
        return 'aspect-[3/4]';
      case 'horizontal':
        return 'aspect-[4/3]';
      case 'square':
      default:
        return 'aspect-square';
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#EFE9DF]/30 border-b border-[#E5DED2]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#59624D]" />
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#59624D] font-semibold">
                Visual Diary & Field Notes
              </span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E211C] font-normal leading-tight">
              On the Feed: <span className="editorial-italic text-[#59624D]">@atelierforma</span>
            </h2>
            
            <p className="text-xs sm:text-sm text-[#292923]/70 mt-2 font-normal">
              In-progress spatial walkthroughs, raw quarry material sourcing, and quiet architectural moments.
            </p>
          </div>

          {/* Social Follow Link */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#F7F3ED] hover:bg-[#1E211C] text-[#1E211C] hover:text-[#F7F3ED] border border-[#D5CCBD] hover:border-[#1E211C] text-xs uppercase tracking-widest px-5 py-3 rounded-sm transition-all duration-300 font-medium group shrink-0"
          >
            <InstagramIcon className="w-4 h-4 text-[#59624D] group-hover:text-[#F7F3ED] transition-colors" />
            <span>Follow Atelier Forma</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Masonry Layout Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {INSTAGRAM_POSTS.map((post) => {
            const isLiked = likedPosts[post.id];
            const currentLikes = isLiked ? post.likes + 1 : post.likes;

            return (
              <div
                key={post.id}
                onClick={() => setActivePost(post)}
                className="break-inside-avoid relative group rounded-md overflow-hidden bg-[#EFE9DF] border border-[#E5DED2] cursor-pointer shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#B7AE9E]"
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActivePost(post);
                  }
                }}
                aria-label={`View Instagram post from ${post.location}`}
              >
                {/* Photo with dynamic aspect ratio */}
                <div className={`relative w-full ${getAspectClass(post.aspectRatio)} overflow-hidden`}>
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white pointer-events-none">
                    
                    {/* Top row: Instagram glyph & location */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[11px] text-white/90 font-medium">
                        <MapPin className="w-3 h-3 text-[#A58B65]" />
                        <span>{post.location}</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <InstagramIcon className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>

                    {/* Bottom row: Caption snippet & social metrics */}
                    <div>
                      <p className="text-xs text-white/90 line-clamp-2 mb-3 font-normal leading-snug">
                        {post.caption}
                      </p>

                      <div className="flex items-center justify-between pt-2 border-t border-white/20 text-xs text-white/90">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={(e) => toggleLike(e, post.id)}
                            className="pointer-events-auto flex items-center gap-1 hover:text-red-400 transition-colors"
                            aria-label="Like post"
                          >
                            <Heart className={`w-3.5 h-3.5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                            <span>{currentLikes}</span>
                          </button>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="w-3.5 h-3.5 text-white" />
                            <span>{post.comments}</span>
                          </div>
                        </div>

                        <span className="text-[10px] text-white/70 uppercase tracking-wider font-light">
                          {post.date}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Dispatch Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#6C745E] tracking-wide">
            Tagged in <span className="font-serif italic text-sm text-[#1E211C]">#AtelierFormaInteriors</span> · Curated by our NYC Architecture Atelier
          </p>
        </div>

      </div>

      {/* Interactive Lightbox Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex justify-center items-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div
            className="relative bg-[#F7F3ED] border border-[#E5DED2] rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 grid grid-cols-1 md:grid-cols-12"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#1E211C]/80 hover:bg-[#1E211C] text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close Instagram preview"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left: Big Photo */}
            <div className="md:col-span-7 bg-[#1E211C] flex items-center justify-center max-h-[520px]">
              <img
                src={activePost.image}
                alt={activePost.caption}
                className="w-full h-full object-cover max-h-[520px]"
              />
            </div>

            {/* Right: Instagram Post Details */}
            <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Account Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-[#E5DED2]">
                  <div className="w-9 h-9 rounded-full bg-[#59624D] text-white flex items-center justify-center font-serif text-xs font-medium">
                    AF
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-[#1E211C]">
                        atelierforma.interiors
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#59624D]" />
                    </div>
                    <span className="text-[11px] text-[#6C745E] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#A58B65]" />
                      {activePost.location}
                    </span>
                  </div>
                </div>

                {/* Caption Narrative */}
                <div className="py-5 space-y-4">
                  <p className="text-sm text-[#292923]/90 leading-relaxed font-normal">
                    {activePost.caption}
                  </p>

                  {/* Hash Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {activePost.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs text-[#59624D] hover:underline cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-[11px] text-[#B7AE9E] uppercase tracking-wider pt-2">
                    {activePost.date} · Curated Archival Shot
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-[#E5DED2] space-y-4">
                <div className="flex items-center justify-between text-xs text-[#1E211C]">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={(e) => toggleLike(e, activePost.id)}
                      className="flex items-center gap-1.5 font-medium hover:text-red-600 transition-colors"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          likedPosts[activePost.id] ? 'fill-red-500 text-red-500' : 'text-[#1E211C]'
                        }`}
                      />
                      <span>
                        {likedPosts[activePost.id] ? activePost.likes + 1 : activePost.likes} likes
                      </span>
                    </button>
                    <div className="flex items-center gap-1.5 text-[#6C745E]">
                      <MessageSquare className="w-4 h-4" />
                      <span>{activePost.comments}</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1E211C] hover:bg-[#292923] text-white text-xs uppercase tracking-widest py-3 rounded-sm font-medium transition-colors"
                >
                  <span>Open in Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
