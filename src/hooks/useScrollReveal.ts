import { useEffect, useRef, useState } from 'react';

export interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.08, rootMargin = '0px 0px -40px 0px', once = true } = options;
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsRevealed(true);
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const currentElem = ref.current;
    if (!currentElem) return;

    const rect = currentElem.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
      setIsRevealed(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(([entry], obs) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
        if (once) {
          obs.unobserve(entry.target);
        }
      } else if (!once) {
        setIsRevealed(false);
      }
    }, {
      threshold,
      rootMargin,
    });

    observer.observe(currentElem);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return { ref, isRevealed };
}
