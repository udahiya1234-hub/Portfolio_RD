import React from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  const { ref: titleRef, hasAnimated: titleAnimated, animationDelay: titleDelay } = useAnimateOnScroll<HTMLHeadingElement>(0);
  const { ref: subtitleRef, hasAnimated: subtitleAnimated, animationDelay: subtitleDelay } = useAnimateOnScroll<HTMLParagraphElement>(100);
  const { ref: lineRef, hasAnimated: lineAnimated, animationDelay: lineDelay } = useAnimateOnScroll<HTMLDivElement>(200);

  return (
    <div className="text-center mb-16">
      <h2
        ref={titleRef}
        className={`text-3xl md:text-4xl font-bold mb-4 inline-block text-gray-900 dark:text-white ${titleAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: titleDelay }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          ref={subtitleRef}
          className={`text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-2 ${subtitleAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: subtitleDelay }}
        >
          {subtitle}
        </p>
      )}
      <div
        ref={lineRef}
        className={`w-20 h-1.5 bg-gradient-to-r from-sky-500 to-blue-600 dark:from-emerald-400 dark:to-cyan-500 mx-auto mt-6 rounded-full ${lineAnimated ? 'animate-scale-in' : 'opacity-0'}`}
        style={{ animationDelay: lineDelay }}
      ></div>
    </div>
  );
};

export default SectionHeader;