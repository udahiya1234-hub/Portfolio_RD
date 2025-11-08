import React, { useState } from 'react';
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
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id: string) => {
    onNavLinkClick(id);
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-lg dark:shadow-xl py-4 transition-colors duration-300 animate-fade-in-down">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-indigo-700 dark:text-teal-400" onClick={() => handleLinkClick('hero')}>
          {NAME.split(' ')[0]}
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`text-lg font-medium relative group hover:text-indigo-700 dark:hover:text-teal-400 transition duration-300 ${
                activeSection === link.id
                  ? 'text-indigo-700 dark:text-teal-400'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 dark:bg-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeSection === link.id ? 'scale-x-100' : ''}`}></span>
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-300 focus:outline-none" aria-expanded={isOpen}>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 bg-white dark:bg-gray-800 shadow-inner dark:shadow-md pb-2 transition-colors duration-300">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleLinkClick(link.id)}
              className={`block px-6 py-3 text-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300 ${
                activeSection === link.id ? 'text-indigo-700 dark:text-teal-400 bg-indigo-50 dark:bg-gray-700' : ''
              }`}
              aria-current={activeSection === link.id ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;