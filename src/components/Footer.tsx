import React, { useState } from 'react';
import { ArrowUpRight, Check, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setNewsletterSubmitted(true);
      setNewsletterEmail('');
    }
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      const navHeight = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-[#1E211C] text-[#F7F3ED] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Grid: Brand Statement & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand & Newsletter Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Brand Logo */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-9 h-9 rounded-sm bg-white/10 border-2 border-white/50 flex items-center justify-center p-1.5 shadow-sm">
                  <div className="w-full h-full border-t-2 border-r-2 border-white rotate-45" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-2xl tracking-[0.05em] uppercase text-white font-black">
                    Studio Archon
                  </span>
                  <span className="text-[10px] tracking-[0.2em] text-[#D5CCBD] uppercase font-bold mt-0.5">
                    Architecture & Interiors
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#D5CCBD] leading-relaxed max-w-sm mb-8 font-light">
                Thoughtful interiors shaped by architecture, material, and everyday life. Crafting residential and commercial sanctuaries.
              </p>
            </div>

            {/* Editorial Newsletter Subscribe */}
            <div className="pt-4 border-t border-white/10 max-w-sm">
              <span className="text-xs uppercase tracking-wider text-[#B7AE9E] font-medium block mb-2">
                The Archon Dispatch
              </span>
              <p className="text-xs text-[#B7AE9E]/70 mb-3 font-light">
                Quarterly architectural essays, material studies, and studio previews.
              </p>
              {newsletterSubmitted ? (
                <div className="flex items-center gap-2 text-xs text-[#A58B65] bg-white/5 p-2.5 rounded-sm">
                  <Check className="w-4 h-4 text-[#A58B65]" />
                  <span>Thank you. You are subscribed to our dispatch.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletter} className="flex items-center">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-white/5 border border-white/20 text-xs text-white placeholder-white/40 px-3.5 py-2.5 rounded-l-sm focus:outline-none focus:border-[#A58B65] w-full"
                  />
                  <button
                    type="submit"
                    className="bg-[#59624D] hover:bg-[#6C745E] text-white px-4 py-2.5 rounded-r-sm text-xs font-medium uppercase tracking-wider transition-colors shrink-0"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Links Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Studio */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#D5CCBD] font-semibold mb-4">
                Studio
              </h4>
              <ul className="space-y-3 text-sm text-[#B7AE9E]/80 font-light">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => handleSmoothScroll(e, '#about')}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#philosophy"
                    onClick={(e) => handleSmoothScroll(e, '#philosophy')}
                    className="hover:text-white transition-colors"
                  >
                    Philosophy
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    onClick={(e) => handleSmoothScroll(e, '#process')}
                    className="hover:text-white transition-colors"
                  >
                    Methodology
                  </a>
                </li>
                <li>
                  <a
                    href="#journal"
                    onClick={(e) => handleSmoothScroll(e, '#journal')}
                    className="hover:text-white transition-colors"
                  >
                    Journal
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#D5CCBD] font-semibold mb-4">
                Disciplines
              </h4>
              <ul className="space-y-3 text-sm text-[#B7AE9E]/80 font-light">
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="hover:text-white transition-colors"
                  >
                    Residential Design
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="hover:text-white transition-colors"
                  >
                    Commercial Spaces
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="hover:text-white transition-colors"
                  >
                    Space Planning
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="hover:text-white transition-colors"
                  >
                    3D Visualization
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    onClick={(e) => handleSmoothScroll(e, '#services')}
                    className="hover:text-white transition-colors"
                  >
                    Turnkey Interiors
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact & Consultations */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#D5CCBD] font-semibold mb-4">
                Inquiries
              </h4>
              <ul className="space-y-3 text-sm text-[#B7AE9E]/80 font-light">
                <li>
                  <button
                    onClick={onOpenConsultation}
                    className="hover:text-white transition-colors text-left inline-flex items-center gap-1 text-[#A58B65]"
                  >
                    <span>Book Consultation</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, '#contact')}
                    className="hover:text-white transition-colors"
                  >
                    Project Inquiry
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, '#contact')}
                    className="hover:text-white transition-colors"
                  >
                    Studio Locations
                  </a>
                </li>
                <li className="pt-2 text-xs text-[#B7AE9E]/60">
                  New York, NY<br />
                  Worldwide Remote
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#B7AE9E]/60 gap-4 font-light">
          <div>
            © {new Date().getFullYear()} Studio Archon · Architecture & Bespoke Interiors. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="text-white/20">|</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A58B65] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A58B65] transition-colors"
            >
              Pinterest
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A58B65] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
