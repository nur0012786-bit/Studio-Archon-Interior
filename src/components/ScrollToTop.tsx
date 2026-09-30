import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-30 w-11 h-11 rounded-sm bg-[#1E211C] hover:bg-[#292923] text-[#F7F3ED] border border-[#E5DED2]/30 flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95 focus:outline-none"
      aria-label="Scroll to top of page"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
