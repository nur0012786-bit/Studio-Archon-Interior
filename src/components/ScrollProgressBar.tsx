import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
        setScrollProgress(progress);
        setIsVisible(scrollY > 10);
      } else {
        setScrollProgress(0);
        setIsVisible(false);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial calculation
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Subtle track background */}
      <div className="w-full h-[2.5px] bg-[#1E211C]/5">
        {/* Dynamic active progress indicator */}
        <div
          className="h-full bg-gradient-to-r from-[#A58B65] via-[#6C745E] to-[#59624D] shadow-[0_0_8px_rgba(89,98,77,0.3)] will-change-transform"
          style={{
            transform: `scaleX(${scrollProgress / 100})`,
            transformOrigin: 'left center',
            transition: 'transform 60ms linear',
          }}
        />
      </div>
    </div>
  );
};

export default ScrollProgressBar;
