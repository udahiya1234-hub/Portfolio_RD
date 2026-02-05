

import React, { useState, useEffect } from 'react';
import { SHORT_BIO, PROFILE_IMAGE, CONTACT_INFO, NAME } from '../constants';

interface HeroProps {
  onContactClick: () => void;
}

const TITLES = [
  "Data Science Enthusiast",
  "Python Developer",
  "Machine Learning Engineer",
  "Generative AI Developer"
];

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let ticker: ReturnType<typeof setTimeout>;
    const i = loopNum % TITLES.length;
    const fullText = TITLES[i];

    if (isDeleting) {
      ticker = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, 50);
    } else {
      ticker = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, 100);
    }

    if (!isDeleting && text === fullText) {
      clearTimeout(ticker);
      ticker = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      clearTimeout(ticker);
      setIsDeleting(false);
      setLoopNum(l => l + 1);
    }

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum]);

  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center pt-20 pb-20 overflow-hidden bg-white dark:bg-slate-900">
      
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-100/40 dark:bg-blue-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-purple-100/40 dark:bg-purple-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content - Left Side */}
          <div className="order-2 lg:order-1 flex flex-col items-start text-left">
            
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300 rounded-full shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              Open to New Opportunities
            </div>

            <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{NAME}</span>
            </h1>

            <div className="animate-fade-in-up delay-200 text-xl md:text-2xl text-slate-700 dark:text-slate-200 mb-8 font-medium h-8 flex items-center">
               I build <span className="ml-2 text-slate-900 dark:text-white font-bold border-b-4 border-blue-500/20 px-1">{text}</span><span className="animate-pulse text-blue-600">|</span>
            </div>

            <p className="animate-fade-in-up delay-300 text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed">
              {SHORT_BIO}
            </p>

            <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4">
              <button
                onClick={onContactClick}
                className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold shadow-xl shadow-slate-900/10 dark:shadow-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Let's Collaborate
              </button>
              <a
                href="#featured"
                className="px-8 py-4 bg-white dark:bg-slate-800/50 backdrop-blur-sm text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                View Capstone
              </a>
            </div>

            <div className="animate-fade-in-up delay-500 mt-12 flex items-center gap-6">
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="group">
                    <div className="p-2 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-slate-800 transition-colors">
                        <svg className="w-7 h-7 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </div>
                </a>
                <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="group">
                     <div className="p-2 rounded-lg group-hover:bg-slate-100 dark:group-hover:bg-slate-800 transition-colors">
                        <svg className="w-7 h-7 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    </div>
                </a>
            </div>
          </div>

          {/* Image Content - Right Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
             <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px]">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-indigo-500 dark:from-blue-600 dark:to-indigo-600 rounded-full blur-[60px] opacity-40 animate-pulse-slow"></div>
                
                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-[2.5rem] rotate-3 hover:rotate-0 transition-all duration-700 ease-out border-[6px] border-white dark:border-slate-800 shadow-2xl overflow-hidden z-10 bg-slate-100">
                   <img 
                      src={PROFILE_IMAGE} 
                      alt={NAME} 
                      className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700"
                   />
                </div>

                {/* Floating Badge 1 - Top Right */}
                <div className="absolute top-10 -right-4 md:-right-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 z-20 animate-float border border-slate-100 dark:border-slate-700">
                   <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-rose-100 dark:bg-rose-900/30 rounded-xl text-rose-600 dark:text-rose-400">
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                         </svg>
                      </div>
                      <div>
                         <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Focus</p>
                         <p className="text-base font-bold text-slate-900 dark:text-white">Innovation</p>
                      </div>
                   </div>
                </div>

                {/* Floating Badge 2 - Bottom Left */}
                <div className="absolute bottom-12 -left-4 md:-left-8 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 z-20 animate-float-delayed border border-slate-100 dark:border-slate-700">
                   <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                         </svg>
                      </div>
                      <div>
                         <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Expertise</p>
                         <p className="text-base font-bold text-slate-900 dark:text-white">Data Science</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
