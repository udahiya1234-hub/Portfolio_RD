import React from 'react';
import { NAME, TITLE, SHORT_BIO, AVAILABLE_FOR_FREELANCE, CONTACT_INFO } from '../constants';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const { theme } = useTheme(); // Use the theme context

  // Dynamic icon colors based on theme
  const iconColorClass = theme === 'dark' ? 'text-teal-400' : 'text-indigo-600';

  return (
    <section id="hero" className="relative flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 py-20 px-4 transition-colors duration-300">
      <div className="max-w-4xl text-center z-10">
        {AVAILABLE_FOR_FREELANCE && (
          <span className="inline-flex items-center rounded-full bg-indigo-100 dark:bg-gray-700 px-4 py-1 text-sm font-medium text-indigo-700 dark:text-teal-400 ring-1 ring-inset ring-indigo-700/10 dark:ring-teal-400 mb-6 animate-fade-in-down">
            Available for Freelance Work
          </span>
        )}
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight mb-4 animate-fade-in-up">
          {NAME}
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-indigo-700 dark:text-teal-400 mb-8 animate-fade-in-up delay-200">
          {TITLE}
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-400">
          {SHORT_BIO}
        </p>
        <button
          onClick={onContactClick}
          className="px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-teal-700 transition duration-300 transform hover:scale-105 animate-fade-in-up delay-600"
          aria-label="Get in touch"
        >
          Get in Touch
        </button>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-12 text-gray-600 dark:text-gray-400 animate-fade-in-up delay-800">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-5 h-5 ${iconColorClass}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25V1.375a2.25 2.25 0 00-2.25-2.25h-2.25ZM20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0V2.25M3.75 6.375V2.25m10.125 3.375h-4.5c-.375 0-.75.375-.75.75v3.75c0 .375.375.75.75.75h4.5c.375 0 .75-.375.75-.75V7.125c0-.375-.375-.75-.75-.75Z"
              />
            </svg>
            <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-indigo-700 dark:hover:text-teal-400 transition-colors duration-200">{CONTACT_INFO.phone}</a>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-5 h-5 ${iconColorClass}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-indigo-700 dark:hover:text-teal-400 transition-colors duration-200">{CONTACT_INFO.email}</a>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-5 h-5 ${iconColorClass}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span className="cursor-default">{CONTACT_INFO.location}</span>
          </div>
          {CONTACT_INFO.github && (
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-5 h-5 ${iconColorClass}`}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.082-.742.083-.726.083-.726 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.381 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3.0.966-.262 1.98-.392 3-.398 1.02.006 2.035.136 3 .398 2.288-.322 3.295.0 3.295.0.645 1.653.24 2.873.105 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.564 22.179 24 17.607 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-700 dark:hover:text-teal-400 transition-colors duration-200">GitHub</a>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-indigo-600 dark:text-teal-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;