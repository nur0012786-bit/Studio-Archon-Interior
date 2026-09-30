import React, { useEffect, useRef, useState } from 'react';

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds
  duration?: number; // Duration in milliseconds
  distance?: number; // Pixels to slide up (e.g. 24)
  direction?: 'up' | 'none';
  threshold?: number;
  rootMargin?: string;
  as?: React.ElementType;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 950,
  distance = 28,
  direction = 'up',
  threshold = 0.08,
  rootMargin = '0px 0px -40px 0px',
  as: Component = 'div',
  once = true,
  style,
  ...restProps
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // If running in SSR or browser doesn't support IntersectionObserver, reveal immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const currentElem = elementRef.current;
    if (!currentElem) return;

    // Check if element is already inside or above the viewport on mount
    const rect = currentElem.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      setIsRevealed(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            if (once) {
              obs.unobserve(entry.target);
            }
          } else if (!once) {
            setIsRevealed(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElem);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  // Compute inline styles for buttery-smooth editorial easing
  const getTransform = () => {
    if (direction === 'none') return 'none';
    return isRevealed ? 'translate3d(0, 0, 0)' : `translate3d(0, ${distance}px, 0)`;
  };

  const animationStyles: React.CSSProperties = {
    opacity: isRevealed ? 1 : 0,
    transform: getTransform(),
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: isRevealed ? 'auto' : 'opacity, transform',
    ...style,
  };

  return (
    <Component
      ref={elementRef}
      style={animationStyles}
      className={`motion-reduce:!opacity-100 motion-reduce:!transform-none motion-reduce:!transition-none ${className}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
