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
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % TITLES.length;
      const fullText = TITLES[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        // Pause at the end of the word
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        // Move to next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    // Logic to handle the pause state correctly without overlapping timers
    // If we are in the "pause" state (text matches fullText and not deleting), 
    // the timeout in the logic above handles the trigger. 
    // Otherwise, we set the typing speed.
    let timer: ReturnType<typeof setTimeout>;
    
    if (!isDeleting && text === TITLES[loopNum % TITLES.length]) {
       // We are waiting at the end of the word, handled by the logic above mostly, 
       // but strictly we need the effect to wait.
       // To keep it simple and robust:
    } else {
       timer = setTimeout(handleTyping, typingSpeed);
    }
    
    // This implementation has a slight flaw with the pause. Let's use a more robust single-effect approach.
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]); // Dependencies trigger re-run

  // Refined Effect
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
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content - Left Side */}
          <div className="order-2 lg:order-1 flex flex-col items-start text-left">
            
            <div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Available for Projects
            </div>

            <h1 className="animate-fade-in-up delay-100 text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              Hi, I'm <br />
              <span className="text-blue-600 dark:text-blue-500">{NAME}</span>
            </h1>

            <div className="animate-fade-in-up delay-200 text-xl md:text-2xl text-slate-700 dark:text-slate-200 mb-6 font-medium h-8 flex items-center">
               I build <span className="ml-2 text-slate-900 dark:text-white font-bold border-b-2 border-blue-500/30">{text}</span><span className="animate-pulse text-blue-600">|</span>
            </div>

            <p className="animate-fade-in-up delay-300 text-lg text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed">
              {SHORT_BIO}
            </p>

            <div className="animate-fade-in-up delay-400 flex flex-wrap gap-4">
              <button
                onClick={onContactClick}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1"
              >
                Let's Collaborate
              </button>
              <a
                href="#projects"
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Work
              </a>
            </div>

            <div className="animate-fade-in-up delay-500 mt-12 flex items-center gap-6">
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                </a>
            </div>
          </div>

          {/* Image Content - Right Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
             <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-2xl transform scale-110"></div>
                
                {/* Main Image */}
                <div className="relative w-full h-full rounded-full border-8 border-white/50 dark:border-slate-800/50 shadow-2xl overflow-hidden z-10">
                   <img 
                      src={PROFILE_IMAGE} 
                      alt={NAME} 
                      className="w-full h-full object-cover"
                   />
                </div>

                {/* Floating Badge 1 - Top Right */}
                <div className="absolute top-8 -right-4 md:right-0 bg-white dark:bg-slate-800 p-3 md:p-4 rounded-2xl shadow-xl z-20 animate-float">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg text-rose-600 dark:text-rose-400">
                         <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                         </svg>
                      </div>
                      <div>
                         <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Focus</p>
                         <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white">Innovation</p>
                      </div>
                   </div>
                </div>

                {/* Floating Badge 2 - Bottom Left */}
                <div className="absolute bottom-10 -left-4 md:left-0 bg-white dark:bg-slate-800 p-3 md:p-4 rounded-2xl shadow-xl z-20 animate-float-delayed">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                         <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                         </svg>
                      </div>
                      <div>
                         <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Skill</p>
                         <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white">Data Science</p>
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