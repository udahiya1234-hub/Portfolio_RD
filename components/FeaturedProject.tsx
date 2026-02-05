

import React from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { 
  FEATURED_PROJECT_TITLE, 
  FEATURED_PROJECT_DESC,
  FEATURED_PROJECT_SUBTITLE,
  FEATURED_PROJECT_IMAGE,
  FEATURED_PROJECT_DASHBOARD_LINK,
  FEATURED_PROJECT_NOTEBOOK_LINK,
  FEATURED_PROJECT_STATS,
  FEATURED_PROJECT_GOALS,
  FEATURED_PROJECT_TECH_STACK
} from '../constants';

const FeaturedProject: React.FC = () => {
  const { ref: containerRef, hasAnimated, animationDelay } = useAnimateOnScroll<HTMLDivElement>(0);

  // Safety check to ensure content is available before rendering
  if (!FEATURED_PROJECT_STATS || !FEATURED_PROJECT_GOALS) {
    return null; 
  }

  return (
    <section id="featured" className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Decorative Gradient Background (CSS Only, no external image) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-blue-200 dark:border-blue-800">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Project Dashboard / 2026
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">{FEATURED_PROJECT_TITLE}</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">{FEATURED_PROJECT_SUBTITLE}</p>
        </div>

        <div 
          ref={containerRef}
          className={`space-y-12 transition-all duration-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: animationDelay }}
        >
            {/* Top Section: Dashboard + Metrics */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
                
                {/* Dashboard Image - Spans 7 cols */}
                <div className="lg:col-span-7 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative h-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col">
                        <div className="absolute top-4 left-4 z-10 bg-black/70 backdrop-blur-md text-white text-[10px] px-3 py-1.5 rounded-md font-mono border border-white/10 uppercase tracking-wider">
                            &gt; parsing_resumes.py --status=active
                        </div>
                        <img 
                            src={FEATURED_PROJECT_IMAGE}
                            alt="Project Dashboard" 
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-700 hover:scale-[1.02]"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent pointer-events-none"></div>
                        
                        {/* Bottom Stats Overlay on Image */}
                         <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
                             <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-lg text-white">
                                <p className="text-[10px] font-semibold uppercase tracking-wider text-blue-200">Current Status</p>
                                <p className="font-bold text-sm">Processing Complete</p>
                             </div>
                         </div>
                    </div>
                </div>

                {/* Metrics Grid - Spans 5 cols */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4 h-full content-start">
                    {FEATURED_PROJECT_STATS.map((stat, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-md border border-slate-100 dark:border-slate-700 flex flex-col justify-center hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all group hover:-translate-y-1">
                            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{stat.label}</p>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">{stat.value}</h3>
                            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/50 inline-block px-2 py-1 rounded w-fit">{stat.sub}</p>
                        </div>
                    ))}
                    
                    {/* Executive Summary Card */}
                    <div className="col-span-2 bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-xl text-white shadow-xl flex flex-col justify-center relative overflow-hidden mt-2">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
                        </div>
                        <h4 className="font-bold text-lg mb-2 relative z-10 flex items-center">
                            Executive Summary
                            <svg className="w-4 h-4 ml-2 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </h4>
                        <p className="text-sm text-blue-50 leading-relaxed relative z-10 opacity-90">
                            {FEATURED_PROJECT_DESC}
                        </p>
                    </div>
                </div>
            </div>

            {/* Middle Section: Goals (Problem/Solution/Outcome) */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-rose-100 dark:border-rose-900/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-rose-50 dark:bg-rose-900/20 rounded-bl-full -mr-8 -mt-8"></div>
                    <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/50 rounded-lg flex items-center justify-center text-rose-600 dark:text-rose-400 mb-4 relative z-10">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">The Problem</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{FEATURED_PROJECT_GOALS.problem}</p>
                </div>
                
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-amber-100 dark:border-amber-900/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-amber-50 dark:bg-amber-900/20 rounded-bl-full -mr-8 -mt-8"></div>
                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/50 rounded-lg flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4 relative z-10">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">The Solution</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{FEATURED_PROJECT_GOALS.solution}</p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-emerald-100 dark:border-emerald-900/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-50 dark:bg-emerald-900/20 rounded-bl-full -mr-8 -mt-8"></div>
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/50 rounded-lg flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 relative z-10">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2 text-lg">The Outcome</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{FEATURED_PROJECT_GOALS.outcome}</p>
                </div>
            </div>

            {/* Bottom Section: Tech & Actions */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 mr-2 self-center uppercase tracking-wide text-xs">Tech Stack:</span>
                    {FEATURED_PROJECT_TECH_STACK.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-300 hover:border-blue-300 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 w-full md:w-auto">
                     <a 
                        href={FEATURED_PROJECT_DASHBOARD_LINK} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 md:flex-none px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-1 text-sm flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        View Dashboard
                      </a>
                      
                      <a 
                        href={FEATURED_PROJECT_NOTEBOOK_LINK} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 md:flex-none px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg font-bold transition-all hover:-translate-y-1 text-sm flex items-center justify-center"
                      >
                         <svg className="w-4 h-4 mr-2 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16.893 2.5L21.36 9.203L16.893 15.906H7.106L2.639 9.203L7.106 2.5H16.893ZM15.893 14.406L19.36 9.203L15.893 4H8.106L4.639 9.203L8.106 14.406H15.893Z" />
                        </svg>
                        Google Colab
                      </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
