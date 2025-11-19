import React from 'react';
import SectionHeader from './SectionHeader';
import { ABOUT_ME_PARAGRAPH_1, ABOUT_ME_PARAGRAPH_2, ABOUT_IMAGE } from '../constants';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const About: React.FC = () => {
  const { ref, hasAnimated, animationDelay } = useAnimateOnScroll<HTMLDivElement>(0);

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader title="About Me" subtitle="Get to know me better" />
        
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: animationDelay }}
        >
           {/* Image Side */}
           <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video md:aspect-square lg:aspect-video">
                 <img 
                    src={ABOUT_IMAGE} 
                    alt="Workspace" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                 <div className="absolute bottom-6 left-6 text-white">
                    <p className="font-bold text-xl">Data Driven</p>
                    <p className="text-sm opacity-80">Analyzing patterns everyday</p>
                 </div>
              </div>
           </div>

           {/* Text Side */}
           <div className="text-lg text-gray-700 dark:text-zinc-300 leading-relaxed space-y-6">
              <p>{ABOUT_ME_PARAGRAPH_1}</p>
              <p>{ABOUT_ME_PARAGRAPH_2}</p>
              
              <div className="pt-4">
                 <a href="#contact" className="inline-flex items-center text-sky-600 dark:text-emerald-400 font-semibold hover:underline">
                    Let's work together
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                 </a>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;