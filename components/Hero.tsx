
import React, { useState, useEffect } from 'react';
import { NAME, SHORT_BIO, AVAILABLE_FOR_FREELANCE, CONTACT_INFO, PROFILE_IMAGE } from '../constants';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onContactClick: () => void;
}

const TITLES = [
  "Data Science Enthusiast",
  "Python Developer",
  "Machine Learning Engineer",
  "AI Solution Builder"
];

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const { theme } = useTheme();
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [imgError, setImgError] = useState(false);

  // Typing Effect Logic
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % TITLES.length;
    let fullText = TITLES[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Pause at end of word
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150); // Reset speed for new word
    } else {
         if(!isDeleting) setDelta(100 + Math.random() * 50);
    }
  };

  // Fallback avatar if image fails to load
  const profileSrc = imgError 
    ? `https://ui-avatars.com/api/?name=${encodeURIComponent(NAME)}&background=0284c7&color=fff&size=256&bold=true`
    : PROFILE_IMAGE;

  return (
    <section id="hero" className="relative flex items-center min-h-screen overflow-hidden pt-20 md:pt-0">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="blob bg-sky-300/30 dark:bg-sky-900/20 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 blur-3xl animate-float"></div>
        <div className="blob bg-purple-300/30 dark:bg-purple-900/20 w-80 h-80 rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left Column: Text */}
          <div className="flex-1 text-center md:text-left">
            
             {/* Availability Badge */}
            {AVAILABLE_FOR_FREELANCE && (
              <div className="animate-fade-in-down mb-6 flex justify-center md:justify-start">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-white/50 dark:bg-white/5 backdrop-blur-sm text-sky-700 border border-sky-200 dark:text-emerald-300 dark:border-emerald-800/50 shadow-sm">
                  <span className="flex w-2 h-2 bg-sky-500 dark:bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                  Available for Freelance Work
                </span>
              </div>
            )}

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
              <span className="block text-gray-900 dark:text-white mb-2">Hello, I'm</span>
              <span className="text-gradient block mt-2">{NAME}</span>
            </h1>

             <div className="h-8 mb-6 animate-fade-in-up delay-200 flex items-center justify-center md:justify-start">
                <span className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
                    I am a <span className="text-sky-600 dark:text-emerald-400 font-bold">{text}</span>
                    <span className="border-r-2 border-gray-400 dark:border-gray-500 ml-1 animate-pulse"></span>
                </span>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed animate-fade-in-up delay-300 max-w-2xl mx-auto md:mx-0">
              {SHORT_BIO}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400 justify-center md:justify-start">
              <button
                onClick={onContactClick}
                className="px-8 py-4 bg-sky-600 hover:bg-sky-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white text-lg font-semibold rounded-full shadow-lg shadow-sky-500/30 dark:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                Let's Talk
              </button>
              <a
                href="#projects"
                className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-sky-300 dark:hover:border-emerald-500 text-lg font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                View Work
              </a>
            </div>

             <div className="flex gap-6 mt-10 animate-fade-in-up delay-500 justify-center md:justify-start">
               <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-sky-600 dark:hover:text-emerald-400 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
               </a>
               <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-sky-600 dark:hover:text-emerald-400 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
               </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 relative flex justify-center animate-scale-in delay-200">
             <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Decorative circles */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-200 dark:border-gray-700 animate-spin-slow" style={{ animationDuration: '15s' }}></div>
                <div className="absolute inset-4 rounded-full border border-gray-200 dark:border-gray-800"></div>
                
                {/* Image Container */}
                <div className="absolute inset-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800">
                   <img 
                     src={profileSrc} 
                     alt={NAME}
                     onError={() => setImgError(true)}
                     className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                   />
                </div>

                {/* Floating Badges */}
                <div className="absolute top-10 -right-4 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                    <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute bottom-10 -left-4 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                    <span className="text-2xl">📊</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
