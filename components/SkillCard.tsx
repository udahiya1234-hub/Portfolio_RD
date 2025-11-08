import React from 'react';
import { Skill } from '../types';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll'; // Import the new hook

interface SkillCardProps {
  skill: Skill;
  index: number; // Added for staggered animation
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  // Fix: Specify the correct HTML element type for the ref
  const { ref, hasAnimated, animationDelay } = useAnimateOnScroll<HTMLDivElement>(index * 100); // Staggered delay

  return (
    <div
      ref={ref}
      className={`
        bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl
        transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center
        border border-neutral-100 dark:border-gray-800 focus-within:ring-4 focus-within:ring-sky-300 dark:focus-within:ring-emerald-700
        ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}
      `}
      style={{ animationDelay: animationDelay }}
      tabIndex={0} // Make div focusable for keyboard navigation
      role="listitem" // Semantic role
      aria-label={`${skill.name} skill`}
    >
      <div className="mb-4 text-sky-600 dark:text-emerald-400 group-hover:text-sky-700 dark:group-hover:text-emerald-300 transition-colors duration-300">
        {skill.icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-100 mb-2">{skill.name}</h3>
      <p className="text-gray-600 dark:text-zinc-300">{skill.description}</p>
    </div>
  );
};

export default SkillCard;