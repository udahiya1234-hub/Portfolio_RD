import React from 'react';
import SectionHeader from './SectionHeader';
import { EDUCATION } from '../constants';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll'; // Import the new hook

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="Education" subtitle="My academic background" />
        <div className="space-y-8">
          {EDUCATION.map((edu, index) => {
            // Fix: Specify the correct HTML element type for the ref
            const { ref, hasAnimated, animationDelay } = useAnimateOnScroll<HTMLDivElement>(index * 100); // Staggered delay
            return (
              <div
                key={index}
                ref={ref}
                className={`
                  bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md dark:shadow-lg border border-gray-100 dark:border-gray-600
                  hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300
                  ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}
                `}
                style={{ animationDelay: animationDelay }}
                role="article" // Semantic role for each education entry
                aria-label={`${edu.degree} from ${edu.institution}`}
              >
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-2">
                  {edu.degree}
                </h3>
                <p className="text-indigo-600 dark:text-teal-400 text-lg mb-1">{edu.field}</p>
                <p className="text-gray-700 dark:text-gray-300 text-md mb-3">{edu.institution}</p>
                <div className="flex justify-between items-center text-gray-600 dark:text-gray-400 text-sm">
                  <span>{edu.years}</span>
                  <span className="font-medium text-indigo-700 dark:text-teal-300">{edu.grade}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;