import React, { useState } from 'react';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const PowerBIProjects: React.FC = () => {
  const { ref: containerRef, hasAnimated, animationDelay } = useAnimateOnScroll<HTMLDivElement>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const imageUrl = "https://media.licdn.com/dms/image/v2/D5622AQFDIcQ_Jr4MKA/feedshare-shrink_2048_1536/B56Z2f0KoQKsAg-/0/1776502745903?e=1778716800&v=beta&t=1MQDgk9l02bmymNU28cHeqO4ELwMCzT6YutfmR6iaxM";

  return (
    <section id="powerbi" className="py-24 px-4 bg-gradient-to-tr from-yellow-50 via-white to-orange-50 dark:from-slate-950 dark:via-gray-900 dark:to-yellow-900/20 relative overflow-hidden transition-colors duration-500">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded-full text-sm font-bold tracking-wide mb-4 border border-yellow-200 dark:border-yellow-800/50 shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4 10h3v7H4zM10.5 4h3v13h-3zM17 13h3v4h-3z"/></svg>
            Data Visualization
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            First Power BI Project
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium">
            Interactive E-commerce Sales Dashboard
          </p>
        </div>

        <div 
          ref={containerRef}
          className={`bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700/50 overflow-hidden transition-all duration-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          style={{ transitionDelay: animationDelay }}
        >
          <div className="grid lg:grid-cols-2 lg:gap-0">
            {/* Left Content column */}
            <div className="p-8 md:p-12 order-2 lg:order-1 border-r border-slate-100 dark:border-slate-700/50">
              <p className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-8 leading-relaxed">
                🚀 <span className="font-semibold">Excited to share my first project</span> that helped me understand how to turn raw data into meaningful insights using Power BI!
              </p>

              <div className="space-y-8">
                {/* Analyze List */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-8 h-1 bg-yellow-400 rounded-full"></span>
                    What I Analyzed
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">📊 Sales performance</li>
                    <li className="flex items-center gap-2">👥 Customer behavior</li>
                    <li className="flex items-center gap-2">💳 Payment trends</li>
                    <li className="flex items-center gap-2">⭐ Customer satisfaction</li>
                  </ul>
                </div>

                {/* What I did List */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-8 h-1 bg-blue-400 rounded-full"></span>
                    Implementation Steps
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-medium list-none">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🔧</span> Data cleaning & transformation
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🔧</span> Data modeling (relationships between multiple tables)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🔧</span> Created DAX measures (Revenue, Orders, Ratings)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">🔧</span> Built interactive visuals with slicers for dynamic analysis
                    </li>
                  </ul>
                </div>

                {/* Key Insights List */}
                <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    💡 Key Insights
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0"></div>
                      Majority of orders are concentrated in specific regions.
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0"></div>
                      Revenue shows clear trends over time.
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0"></div>
                      Customer ratings are mostly positive (4–5⭐).
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 flex-shrink-0"></div>
                      Certain payment methods are more preferred.
                    </li>
                  </ul>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50">
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium italic">
                  📌 Open to feedback and suggestions! Let's connect on LinkedIn.
                </p>
              </div>
            </div>

            {/* Right Image column */}
            <div 
              className="order-1 lg:order-2 min-h-[300px] lg:h-auto bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-4 sm:p-8 relative group overflow-hidden cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
                <img 
                  src={imageUrl} 
                  alt="E-commerce Sales Dashboard in Power BI"
                  className="w-full h-auto max-h-[600px] object-contain transition-transform duration-700 group-hover:scale-[1.03] rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                />
                <div className="absolute inset-0 pointer-events-none group-hover:bg-slate-900/10 dark:group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Centered Zoom Hint Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <div className="bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-full text-white font-medium text-sm flex items-center gap-2 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                    Click to Expand
                  </div>
                </div>
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Zoom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
          {/* Topbar */}
          <div className="flex justify-between items-center p-4 text-white border-b border-slate-800 shrink-0 bg-slate-900/80 backdrop-blur-sm relative z-20 shadow-lg">
            <div className="font-bold px-2 text-slate-100 hidden sm:flex items-center gap-2">
               <svg className="w-4 h-4 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="M4 10h3v7H4zM10.5 4h3v13h-3zM17 13h3v4h-3z"/></svg>
               Power BI Analysis - Dashboard View
            </div>
            <div className="font-bold px-2 text-slate-100 sm:hidden">Dashboard</div>
            <div className="flex gap-2 sm:gap-3 items-center">
              <span className="text-xs text-slate-400 mr-2 hidden md:block">Click image to zoom</span>
              <button onClick={() => setZoomLevel(z => Math.max(1, z - 1))} disabled={zoomLevel <= 1} className="p-2 hover:bg-slate-800 disabled:opacity-30 rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"/></svg>
              </button>
              <span className="font-mono text-sm min-w-[45px] text-center bg-slate-800 py-1 px-2 rounded-md border border-slate-700">{Math.round(zoomLevel * 100)}%</span>
              <button onClick={() => setZoomLevel(z => Math.min(4, z + 1))} disabled={zoomLevel >= 4} className="p-2 hover:bg-slate-800 disabled:opacity-30 rounded-lg transition-colors cursor-pointer disabled:cursor-not-allowed">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
              </button>
              <div className="w-px h-6 bg-slate-700 mx-1"></div>
              <button onClick={() => { setIsModalOpen(false); setZoomLevel(1); }} className="p-2 bg-rose-500/10 hover:bg-rose-500 hover:text-white text-rose-400 rounded-lg transition-colors ml-1">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
          </div>
          
          {/* Image Panning Area */}
          <div 
            className="flex-1 overflow-auto w-full h-full p-2 sm:p-8 flex items-center justify-center relative cursor-zoom-out"
            onClick={() => { setIsModalOpen(false); setZoomLevel(1); }}
          >
            <div 
               className="relative transition-all duration-300 flex items-center justify-center"
               style={{
                  width: zoomLevel === 1 ? '100%' : `${zoomLevel * 100}vw`,
                  height: zoomLevel === 1 ? '100%' : `${zoomLevel * 100}vh`,
               }}
            >
              <img
                src={imageUrl}
                alt="Power BI Dashboard Zoomed"
                className="shadow-2xl rounded"
                style={{
                   width: '100%',
                   height: '100%',
                   objectFit: 'contain',
                   cursor: zoomLevel >= 4 ? 'zoom-out' : 'zoom-in',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomLevel(z => z >= 4 ? 1 : z + 1);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PowerBIProjects;
