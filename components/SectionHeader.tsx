import React from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll'; // Import the new hook

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  // Fix: Specify the correct HTML element type for each ref
  const { ref: titleRef, hasAnimated: titleAnimated, animationDelay: titleDelay } = useAnimateOnScroll<HTMLHeadingElement>(0);
  const { ref: subtitleRef, hasAnimated: subtitleAnimated, animationDelay: subtitleDelay } = useAnimateOnScroll<HTMLParagraphElement>(100);
  const { ref: lineRef, hasAnimated: lineAnimated, animationDelay: lineDelay } = useAnimateOnScroll<HTMLDivElement>(200);

  return (
    <div className="text-center mb-12">
      <h2
        ref={titleRef}
        className={`text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-50 mb-4 ${titleAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: titleDelay }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          ref={subtitleRef}
          className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${subtitleAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: subtitleDelay }}
        >
          {subtitle}
        </p>
      )}
      <div
        ref={lineRef}
        className={`w-24 h-1 bg-indigo-600 dark:bg-teal-500 mx-auto mt-6 rounded-full ${lineAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
        style={{ animationDelay: lineDelay }}
      ></div>
    </div>
  );
};

export default SectionHeader;