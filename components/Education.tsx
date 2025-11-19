import React from 'react';
import SectionHeader from './SectionHeader';
import { EDUCATION } from '../constants';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader title="Education" subtitle="My academic journey" />
        
        <div className="relative border-l-4 border-sky-100 dark:border-gray-700 ml-3 md:ml-6 space-y-12">
          {EDUCATION.map((edu, index) => {
            const { ref, hasAnimated, animationDelay } = useAnimateOnScroll<HTMLDivElement>(index * 100);
            return (
              <div
                key={index}
                ref={ref}
                className={`relative pl-8 md:pl-12 ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: animationDelay }}
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[10px] top-2 h-6 w-6 rounded-full bg-white dark:bg-gray-900 border-4 border-sky-500 dark:border-emerald-500"></span>
                
                {/* Content Card */}
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                       <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                         {edu.degree}
                       </h3>
                       <p className="text-sky-600 dark:text-emerald-400 font-medium">{edu.field}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-3 py-1 bg-sky-100 dark:bg-gray-700 text-sky-700 dark:text-emerald-300 text-xs font-semibold rounded-full">
                        {edu.years}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-700 dark:text-gray-300 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                    </svg>
                    {edu.institution}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center">
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 mr-2">Grade:</span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{edu.grade}</span>
                  </div>
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