
import React, { useState } from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { FEATURED_CERT } from '../constants';
import SectionHeader from './SectionHeader';

const FeaturedCertification: React.FC = () => {
  const { ref, hasAnimated, animationDelay } = useAnimateOnScroll<HTMLDivElement>(0);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="credential" className="py-20 px-4 relative overflow-hidden">
       {/* Section Header for the entire Certificates area */}
       <div className="container mx-auto max-w-6xl mb-10">
          <SectionHeader title="Professional Certifications" subtitle="Validated expertise and achievements" />
       </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Premium Card Container - Always Dark/Gold Theme for Impact */}
        <div 
            ref={ref}
            className={`relative bg-[#0B1120] rounded-[2rem] shadow-2xl overflow-hidden border border-slate-700/50 flex flex-col lg:flex-row ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: animationDelay }}
        >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            {/* Visual Side (Left) - The Showcase */}
            <div className="lg:w-1/2 relative min-h-[350px] lg:min-h-full flex items-center justify-center p-8 lg:p-12 z-10">
                
                {/* Spotlight/Glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 opacity-50"></div>
                <div className="absolute w-64 h-64 bg-amber-400/20 blur-[80px] rounded-full animate-pulse-slow"></div>

                {/* The Certificate Frame */}
                <div className="relative w-full max-w-md transform transition-all duration-500 hover:scale-[1.02] hover:rotate-1 group perspective-1000">
                    
                    {/* Gold Border Glow */}
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 rounded-xl opacity-70 blur-sm group-hover:opacity-100 transition duration-500"></div>
                    
                    {/* Image Container */}
                    <div className="relative rounded-xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-700">
                         {!imageError ? (
                           <img 
                              src={FEATURED_CERT.image} 
                              alt="Certificate Preview" 
                              className="w-full h-auto object-cover block"
                              onError={() => setImageError(true)}
                           />
                         ) : (
                           <div className="aspect-[4/3] flex flex-col items-center justify-center bg-slate-800 text-slate-400">
                              <svg className="w-12 h-12 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="text-xs">Image unavailable</span>
                           </div>
                         )}
                         
                         {/* Glossy Overlay */}
                         <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    </div>

                    {/* Official Seal Badge */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 flex items-center justify-center">
                        <div className="absolute inset-0 bg-amber-500 rounded-full blur-md opacity-50 animate-pulse"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-b from-amber-300 to-amber-600 rounded-full shadow-lg border-2 border-white/20 flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                            <div className="text-center">
                                <span className="block text-[8px] font-bold text-amber-900 uppercase tracking-widest mb-[1px]">Verified</span>
                                <svg className="w-8 h-8 mx-auto text-amber-900" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Side (Right) */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-10 border-t lg:border-t-0 lg:border-l border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
                 
                 <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        Highest Achievement
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight tracking-tight">
                        {FEATURED_CERT.title}
                    </h2>
                    
                    <p className="text-xl text-blue-400 font-medium">
                        Issued by {FEATURED_CERT.issuer}
                    </p>
                 </div>
                 
                 <p className="text-slate-300 leading-relaxed mb-8 text-lg font-light border-l-2 border-slate-700 pl-4">
                    {FEATURED_CERT.description}
                 </p>

                 <div className="mb-10">
                    <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Core Competencies</p>
                    <div className="flex flex-wrap gap-2">
                        {FEATURED_CERT.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1.5 bg-slate-800 text-slate-200 text-sm font-medium rounded-lg border border-slate-700 shadow-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                 </div>

                 <div className="flex flex-col sm:flex-row gap-4">
                     <a 
                        href={FEATURED_CERT.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex justify-center items-center px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold rounded-xl shadow-lg shadow-amber-900/20 transition-all hover:-translate-y-1 hover:shadow-amber-500/30"
                     >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Verify Credential
                     </a>
                     <div className="inline-flex items-center justify-center px-6 py-3.5 text-slate-400 text-sm font-mono bg-slate-800 rounded-xl border border-slate-700">
                         ID: <span className="text-slate-200 ml-2 select-all">{FEATURED_CERT.credentialId}</span>
                     </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCertification;
