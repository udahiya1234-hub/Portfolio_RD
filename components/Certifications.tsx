
import React from 'react';
import SectionHeader from './SectionHeader';
import { CERTIFICATIONS } from '../constants';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader
          title="Certifications"
          subtitle="Continuous learning and professional development"
        />

        <div className="flex justify-center">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
      {/* Inline styles for the custom shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-12deg); }
          100% { transform: translateX(150%) skewX(-12deg); }
        }
        .group:hover .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

const CertificationCard: React.FC<{ cert: typeof CERTIFICATIONS[0], index: number }> = ({ cert, index }) => {
  const { ref, hasAnimated, animationDelay } = useAnimateOnScroll<HTMLDivElement>(index * 100);

  return (
    <div
      ref={ref}
      className={`relative w-full max-w-3xl bg-white dark:bg-slate-800 rounded-lg p-1 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-default group overflow-hidden ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: animationDelay }}
    >
      {/* Gold Border Effect Outer */}
      <div className="absolute inset-0 rounded-lg border-2 border-amber-200/50 dark:border-amber-700/50 pointer-events-none z-20"></div>
      
      {/* SHIMMER EFFECT LAYER */}
      <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-lg">
        {/* Changed from white/40 to amber-400/30 for light mode contrast */}
        <div className="animate-shimmer absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent dark:via-white/10 transform -skew-x-12 -translate-x-full"></div>
      </div>

      {/* Inner Certificate Content */}
      <div className="bg-white dark:bg-slate-800 border-4 border-double border-amber-100 dark:border-amber-900/30 p-8 md:p-10 rounded-lg flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        
        {/* Background Watermark Decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 dark:bg-amber-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-500 group-hover:scale-110"></div>
        
        {/* Certificate Image/Preview Section */}
        <div className="relative z-10 flex-shrink-0">
            <div className="w-28 h-20 md:w-48 md:h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-1 border border-slate-100 overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                <img 
                    src={cert.image} 
                    alt={cert.issuer} 
                    className="w-full h-full object-cover"
                />
            </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left relative z-10">
            <div className="inline-block px-3 py-1 mb-3 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-widest rounded-full border border-amber-100 dark:border-amber-800">
                Certificate of Completion
            </div>
            
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-2">
                {cert.title}
            </h3>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-1">
                Issued by <span className="text-slate-900 dark:text-white font-semibold">{cert.issuer}</span>
            </p>
            
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
                Issued: {cert.date}
            </p>

            {/* Skills Tags */}
            {cert.skills && (
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                    {cert.skills.map((skill, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-600">
                            {skill}
                        </span>
                    ))}
                </div>
            )}

            {/* Action Button */}
            <a 
                href={cert.link}
                target="_blank"
                rel="noreferrer" 
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors group/link"
            >
                View Credential
                <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
