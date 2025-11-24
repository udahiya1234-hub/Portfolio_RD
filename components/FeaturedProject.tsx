
import React from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import { 
  FEATURED_VIDEO_ID,
  FEATURED_PROJECT_TITLE, 
  FEATURED_PROJECT_DESC,
  FEATURED_PROJECT_SUBTITLE,
  FEATURED_PROJECT_FEATURES
} from '../constants';

const FeaturedProject: React.FC = () => {
  const { ref: containerRef, hasAnimated, animationDelay } = useAnimateOnScroll<HTMLDivElement>(0);

  return (
    <section id="featured" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto max-w-7xl">
        <div 
          ref={containerRef}
          className={`grid lg:grid-cols-2 gap-12 items-center ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: animationDelay }}
        >
            {/* Video Side */}
            <div className="relative order-2 lg:order-1">
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 bg-black">
                   <div className="relative w-full pb-[56.25%]">
                      <iframe 
                        src={`https://www.veed.io/embed/${FEATURED_VIDEO_ID}`}
                        className="absolute top-0 left-0 w-full h-full"
                        title="Featured Project Video"
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                   </div>
                </div>
            </div>

            {/* Text Side */}
            <div className="order-1 lg:order-2 space-y-6">
               <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{FEATURED_PROJECT_TITLE}</h2>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">{FEATURED_PROJECT_SUBTITLE}</p>
               </div>

               <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  {FEATURED_PROJECT_DESC}
               </p>

               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {FEATURED_PROJECT_FEATURES.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                       <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                       </svg>
                       <span>{feature}</span>
                    </li>
                  ))}
               </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
