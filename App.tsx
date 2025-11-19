import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NAV_LINKS } from './constants';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavLinkClick = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleScroll = useCallback(() => {
    let currentActiveSection = 'hero';
    for (const link of NAV_LINKS) {
      const section = document.getElementById(link.id);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Adding a small offset to ensure the section header is fully visible before activating
        const offset = window.innerHeight * 0.3; // 30% from top of viewport
        if (rect.top <= offset && rect.bottom >= offset) {
          currentActiveSection = link.id;
          break;
        }
      }
    }
    setActiveSection(currentActiveSection);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Call once on mount to set initial active section
    handleScroll(); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <Navbar activeSection={activeSection} onNavLinkClick={handleNavLinkClick} />
        <main className="flex-grow pt-[72px] md:pt-[80px] transition-colors duration-300">
          <Hero onContactClick={() => handleNavLinkClick('contact')} />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;