import React from 'react';
import SectionHeader from './SectionHeader';
import { CONTACT_INFO } from '../constants';
import { useTheme } from '../context/ThemeContext';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll'; // Import the new hook

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const iconColorClass = theme === 'dark' ? 'text-teal-400' : 'text-indigo-600';
  const bgColorClass = theme === 'dark' ? 'bg-gray-700' : 'bg-indigo-50';
  const textColorClass = theme === 'dark' ? 'text-gray-50' : 'text-gray-800';
  const paragraphColorClass = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const ctaBgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50';
  const ctaShadowClass = theme === 'dark' ? 'shadow-xl' : 'shadow-md';

  // Refs and animations for contact info cards
  // Fix: Specify the correct HTML element type for each ref
  const { ref: phoneCardRef, hasAnimated: phoneCardAnimated, animationDelay: phoneCardDelay } = useAnimateOnScroll<HTMLDivElement>(0);
  const { ref: emailCardRef, hasAnimated: emailCardAnimated, animationDelay: emailCardDelay } = useAnimateOnScroll<HTMLDivElement>(100);
  const { ref: locationCardRef, hasAnimated: locationCardAnimated, animationDelay: locationCardDelay } = useAnimateOnScroll<HTMLDivElement>(200);

  // Ref and animation for CTA block
  // Fix: Specify the correct HTML element type for the ref
  const { ref: ctaRef, hasAnimated: ctaAnimated, animationDelay: ctaDelay } = useAnimateOnScroll<HTMLDivElement>(0);

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          title="Get in Touch"
          subtitle="Let's discuss how I can help with your data science initiatives"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            ref={phoneCardRef}
            className={`${bgColorClass} p-6 rounded-xl text-center shadow-sm dark:shadow-lg ${phoneCardAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: phoneCardDelay }}
          >
            <div className={`mb-3 mx-auto ${iconColorClass}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25V1.375a2.25 2.25 0 00-2.25-2.25h-2.25ZM20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0V2.25M3.75 6.375V2.25m10.125 3.375h-4.5c-.375 0-.75.375-.75.75v3.75c0 .375.375.75.75.75h4.5c.375 0 .75-.375.75-.75V7.125c0-.375-.375-.75-.75-.75Z" />
              </svg>
            </div>
            <h4 className={`text-xl font-semibold ${textColorClass} mb-2`}>Phone</h4>
            <p className={`${paragraphColorClass}`}>{CONTACT_INFO.phone}</p>
          </div>
          <div
            ref={emailCardRef}
            className={`${bgColorClass} p-6 rounded-xl text-center shadow-sm dark:shadow-lg ${emailCardAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: emailCardDelay }}
          >
            <div className={`mb-3 mx-auto ${iconColorClass}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <h4 className={`text-xl font-semibold ${textColorClass} mb-2`}>Email</h4>
            <p className={`${paragraphColorClass}`}>{CONTACT_INFO.email}</p>
          </div>
          <div
            ref={locationCardRef}
            className={`${bgColorClass} p-6 rounded-xl text-center shadow-sm dark:shadow-lg ${locationCardAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: locationCardDelay }}
          >
            <div className={`mb-3 mx-auto ${iconColorClass}`}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <h4 className={`text-xl font-semibold ${textColorClass} mb-2`}>Location</h4>
            <p className={`${paragraphColorClass}`}>{CONTACT_INFO.location}</p>
          </div>
        </div>

        <div
          ref={ctaRef}
          className={`text-center ${ctaBgColor} p-10 rounded-xl ${ctaShadowClass} transition-colors duration-300 ${ctaAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: ctaDelay }}
        >
          <h3 className={`text-3xl font-bold ${textColorClass} mb-4`}>Ready to work together?</h3>
          <p className={`text-lg ${paragraphColorClass} mb-8`}>
            I'm available for freelance projects in data science, analytics, and AI solutions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center justify-center px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-teal-700 transition duration-300 transform hover:scale-105"
              aria-label="Send an email to Rahul Dahiya"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Send an Email
            </a>
            <a
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-3 border-2 border-indigo-600 dark:border-teal-500 text-indigo-600 dark:text-teal-500 text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-teal-700 transition duration-300 transform hover:scale-105"
              aria-label="Connect with Rahul Dahiya on LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.380 1.11-2.5 2.48-2.5s2.48 1.120 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
              Connect on LinkedIn
            </a>
            {CONTACT_INFO.github && (
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-3 border-2 border-indigo-600 dark:border-teal-500 text-indigo-600 dark:text-teal-500 text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-teal-700 transition duration-300 transform hover:scale-105"
                aria-label="View Rahul Dahiya's GitHub profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.082-.742.083-.726.083-.726 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.381 1.235-3.221-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3.0.966-.262 1.98-.392 3-.398 1.02.006 2.035.136 3 .398 2.288-.322 3.295.0 3.295.0.645 1.653.24 2.873.105 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.564 22.179 24 17.607 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Profile
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;