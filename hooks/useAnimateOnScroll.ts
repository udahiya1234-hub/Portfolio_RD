import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to trigger an animation when an element scrolls into view.
 * @param delayMs The animation delay in milliseconds.
 * @param threshold The Intersection Observer threshold (0 to 1).
 * @returns An object containing a ref to attach to the element, a boolean indicating if it has animated, and the calculated animation delay style.
 */
const useAnimateOnScroll = <T extends HTMLElement>(delayMs: number = 0, threshold: number = 0.1) => {
  const ref = useRef<T>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [hasAnimated, threshold]);

  return { ref, hasAnimated, animationDelay: `${delayMs}ms` };
};

export default useAnimateOnScroll;