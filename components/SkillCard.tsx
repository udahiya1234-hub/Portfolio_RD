import React, { useRef } from 'react';
import { Skill } from '../types';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const getSkillIcon = (iconKey: string) => {
  switch (iconKey) {
    case 'python':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      );
    case 'ai':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm1-13h-2v4H7v2h4v4h2v-4h4v-2h-4Z" />
        </svg>
      );
    case 'database':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.34 6 2s-2.13 2-6 2-6-1.34-6-2 2.13-2 6-2zm0 14c-3.87 0-6-1.34-6-2v-2c0 .66 2.13 2 6 2s6-1.34 6-2v2c0 .66-2.13 2-6 2zm0-5c-3.87 0-6-1.34-6-2v-2c0 .66 2.13 2 6 2s6-1.34 6-2v2c0 .66-2.13 2-6 2z" />
        </svg>
      );
    case 'ml':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
           <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
        </svg>
      );
    case 'visualization':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
           <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
        </svg>
      );
    default:
      return null;
  }
};

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const { ref: animRef, hasAnimated, animationDelay } = useAnimateOnScroll<HTMLDivElement>(index * 50);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={animRef}
      className={`${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: animationDelay }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={`
          group relative bg-white dark:bg-gray-800 p-6 rounded-2xl 
          border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl dark:hover:shadow-emerald-900/10
          transition-all duration-300 hover:-translate-y-1
          flex flex-col items-center text-center h-full overflow-hidden
        `}
        role="listitem"
      >
        {/* Spotlight Effect */}
        <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
             style={{
               background: `radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(14, 165, 233, 0.15), transparent 40%)`
             }}
        ></div>
         <div className="pointer-events-none absolute -inset-px opacity-0 dark:group-hover:opacity-100 transition-opacity duration-300 z-0"
             style={{
               background: `radial-gradient(400px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(52, 211, 153, 0.1), transparent 40%)`
             }}
        ></div>


        <div className="relative z-10 mb-4 p-4 bg-sky-50 dark:bg-gray-700 rounded-full text-sky-600 dark:text-emerald-400 group-hover:bg-white dark:group-hover:bg-gray-600 transition-colors duration-300 shadow-inner">
          {getSkillIcon(skill.iconKey)}
        </div>
        <h3 className="relative z-10 text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-sky-600 dark:group-hover:text-emerald-400 transition-colors">
          {skill.name}
        </h3>
        <p className="relative z-10 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {skill.description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;