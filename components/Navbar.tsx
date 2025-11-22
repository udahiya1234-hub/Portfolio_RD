
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, NAME } from '../constants';
import { NavLink } from '../types';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
  onNavLinkClick: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Detect scroll for styling changes and progress bar
  useEffect(() => {
    const handleScroll = () => {
      // Navbar background
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Progress Bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavLinkClick(id);
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm border-b border-gray-200/50 dark:border-gray-800/50 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          className="text-2xl font-extrabold tracking-tight group flex items-center gap-1"
          onClick={(e) => handleLinkClick(e, 'hero')}
        >
          <span className="text-gray-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-emerald-400 transition-colors">
            {NAME.split(' ')[0]}
          </span>
          <span className="w-2 h-2 rounded-full bg-sky-600 dark:bg-emerald-400 group-hover:animate-pulse"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`text-sm font-semibold transition-all duration-300 relative px-1 py-1 ${
                  activeSection === link.id
                    ? 'text-sky-600 dark:text-emerald-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-sky-600 dark:bg-emerald-400 transform origin-left transition-transform duration-300 ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            ))}
          </div>
          <div className="pl-6 border-l border-gray-200 dark:border-gray-700">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 dark:text-gray-200 focus:outline-none p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 dark:from-emerald-400 dark:via-teal-500 dark:to-cyan-500 transition-all duration-100 ease-out z-50" style={{ width: `${scrollProgress}%` }}></div>

      {/* Mobile Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-xl transition-all duration-300 origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col p-4 space-y-1">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`block px-5 py-3 text-base font-medium rounded-xl transition-all ${
                activeSection === link.id 
                  ? 'bg-sky-50 dark:bg-gray-800 text-sky-600 dark:text-emerald-400 translate-x-2' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:translate-x-1'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;