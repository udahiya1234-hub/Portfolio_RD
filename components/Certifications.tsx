
import React from 'react';
import SectionHeader from './SectionHeader';
import { CERTIFICATIONS } from '../constants';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="pb-20 pt-8 px-4 relative transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        {/* Subtle separator */}
        <div className="w-full h-px bg-slate-200 dark:bg-slate-800 mb-12"></div>

        <SectionHeader
          title="Additional Certifications"
          subtitle="Other professional milestones and badges"
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
      className={`relative w-full max-w-3xl bg-white dark:bg-slate-800 rounded-lg p-1 shadow-md hover:shadow-xl transition-all duration-300 cursor-default group overflow-hidden ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: animationDelay }}
    >
      {/* Gold Border Effect Outer */}
      <div className="absolute inset-0 rounded-lg border border-slate-200 dark:border-slate-700 pointer-events-none z-20 group-hover:border-amber-300 dark:group-hover:border-amber-700/50 transition-colors"></div>
      
      {/* SHIMMER EFFECT LAYER */}
      <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-lg">
        <div className="animate-shimmer absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/5 transform -skew-x-12 -translate-x-full"></div>
      </div>

      {/* Inner Certificate Content */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-lg flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
        
        {/* Certificate Image/Preview Section */}
        <div className="relative z-10 flex-shrink-0">
            <div className="w-28 h-20 md:w-40 md:h-28 bg-slate-50 dark:bg-slate-900 rounded-lg shadow-inner flex items-center justify-center p-1 border border-slate-100 dark:border-slate-700 overflow-hidden">
                <img 
                    src={cert.image} 
                    alt={cert.issuer} 
                    className="w-full h-full object-cover rounded opacity-90 group-hover:opacity-100 transition-opacity"
                />
            </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cert.title}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-300 font-medium mb-1">
                {cert.issuer}
            </p>
            
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
                Issued: {cert.date}
            </p>

            {/* Skills Tags */}
            {cert.skills && (
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                    {cert.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded border border-slate-200 dark:border-slate-600">
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
                className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
                View Credential
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
