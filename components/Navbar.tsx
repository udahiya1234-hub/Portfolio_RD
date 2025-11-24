import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { NavLink } from '../types';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
  onNavLinkClick: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavLinkClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavLinkClick(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
          Rahul<span className="text-blue-600">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-600 dark:text-slate-300 focus:outline-none"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {mobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 absolute w-full left-0 shadow-lg">
              <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                  {NAV_LINKS.map((link: NavLink) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => handleLinkClick(e, link.id)}
                      className={`text-base font-medium ${
                        activeSection === link.id
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
              </div>
          </div>
      )}
    </nav>
  );
};

export default Navbar;