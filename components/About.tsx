import React from 'react';
import SectionHeader from './SectionHeader';
import { ABOUT_ME_PARAGRAPH_1, ABOUT_ME_PARAGRAPH_2 } from '../constants';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll'; // Import the new hook

const About: React.FC = () => {
  // Fix: Specify the correct HTML element type for the ref
  const { ref, hasAnimated, animationDelay } = useAnimateOnScroll<HTMLDivElement>(0); // Animation for the whole text block

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="About Me" subtitle="Get to know me better" />
        <div
          ref={ref}
          className={`text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: animationDelay }}
        >
          <p>{ABOUT_ME_PARAGRAPH_1}</p>
          <p>{ABOUT_ME_PARAGRAPH_2}</p>
        </div>
      </div>
    </section>
  );
};

export default About;