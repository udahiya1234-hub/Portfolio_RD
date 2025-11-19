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
  const { theme } = useTheme();

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
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-800/50 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          className="text-2xl font-bold tracking-tight group"
          onClick={(e) => handleLinkClick(e, 'hero')}
        >
          <span className="text-gray-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-emerald-400 transition-colors">
            {NAME.split(' ')[0]}
          </span>
          <span className="text-sky-600 dark:text-emerald-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 relative group ${
                activeSection === link.id
                  ? 'text-sky-600 dark:text-emerald-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-emerald-300'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full ${activeSection === link.id ? 'w-full' : ''}`}></span>
            </a>
          ))}
          <div className="pl-4 border-l border-gray-300 dark:border-gray-700">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button 
            onClick={toggleMenu} 
            className="text-gray-700 dark:text-gray-200 focus:outline-none p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" 
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
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-sky-500 to-blue-600 dark:from-emerald-400 dark:to-cyan-500 transition-all duration-100 ease-out" style={{ width: `${scrollProgress}%` }}></div>

      {/* Mobile Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300 origin-top ${
          isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                activeSection === link.id 
                  ? 'bg-sky-50 dark:bg-gray-800 text-sky-600 dark:text-emerald-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
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