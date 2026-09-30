import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Search } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Team', href: '#team' },
    { name: 'Process', href: '#process' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F7F3ED]/95 backdrop-blur-md py-4 border-b border-[#E5DED2]/80 shadow-[0_4px_20px_-4px_rgba(30,33,28,0.05)]'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3.5"
            aria-label="Studio Archon Home"
          >
            {/* Bold Architectural Mark with Crisp Contrast */}
            <div className="w-10 h-10 rounded-sm bg-[#11140E] border-2 border-[#11140E] flex items-center justify-center p-2 transition-all duration-300 group-hover:bg-[#2C3524] group-hover:border-[#2C3524] shadow-sm shrink-0">
              <div className="w-full h-full border-t-2 border-r-2 border-[#F7F3ED] rotate-45 transition-transform group-hover:rotate-90 duration-500" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-[26px] tracking-[0.05em] uppercase text-[#0A0D08] font-black leading-none group-hover:text-[#2C3524] transition-colors">
                Studio Archon
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.22em] text-[#2C3524] uppercase mt-1 font-bold">
                Architecture & Interiors
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide font-medium text-[#292923]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 transition-colors text-[#292923]/80 hover:text-[#1E211C] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#1E211C] after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Group: Search & Consultation CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              className="inline-flex items-center gap-2 px-3 py-2 text-[#292923]/80 hover:text-[#1E211C] hover:bg-[#EFE9DF]/60 rounded-sm border border-transparent hover:border-[#D5CCBD] transition-all text-xs tracking-wide focus:outline-none cursor-pointer"
              aria-label="Search studio projects, services, and journal (Press ⌘K or /)"
              title="Search (⌘K)"
            >
              <Search className="w-4 h-4 text-[#59624D]" />
              <span className="text-[13px] font-medium">Search</span>
              <kbd className="ml-1 px-1.5 py-0.5 text-[10px] font-mono text-[#6C745E] bg-[#EFE9DF] border border-[#D5CCBD] rounded-xs">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-[#1E211C] hover:bg-[#292923] text-[#F7F3ED] text-[13px] tracking-wider uppercase font-medium px-5 py-2.5 rounded-sm transition-all duration-300 hover:shadow-md group active:scale-[0.98] cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Actions: Search & Hamburger Button */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#1E211C] hover:text-[#59624D] transition-colors focus:outline-none cursor-pointer"
              aria-label="Search studio projects and journal"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1E211C] hover:text-[#59624D] transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#F7F3ED] pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-6">
            {/* Quick Search Button in Drawer */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center justify-between px-4 py-3 bg-[#EFE9DF]/80 border border-[#D5CCBD] rounded-sm text-sm text-[#292923] hover:border-[#59624D] transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-[#59624D]" />
                <span className="font-normal text-xs sm:text-sm">Search projects, services & journal...</span>
              </div>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-[#6C745E] bg-[#F7F3ED] border border-[#D5CCBD] rounded">
                ⌘K
              </kbd>
            </button>

            <div className="text-[11px] uppercase tracking-[0.25em] text-[#6C745E] font-medium border-b border-[#E5DED2] pb-3">
              Navigation
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif text-2xl text-[#1E211C] hover:text-[#59624D] transition-colors flex items-center justify-between py-1"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#B7AE9E]" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-[#E5DED2] space-y-4">
            <div className="text-xs text-[#6C745E]">
              Studio: New York & Worldwide Remote<br />
              hello@studioarchon.example · +1 (212) 555-0188
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#1E211C] text-[#F7F3ED] py-3.5 text-xs uppercase tracking-widest font-medium rounded-sm"
            >
              <span>Book a Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
