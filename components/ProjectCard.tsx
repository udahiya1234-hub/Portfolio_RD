
import React, { useRef, useState } from 'react';
import { Project } from '../types';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { ref: animRef, hasAnimated, animationDelay } = useAnimateOnScroll<HTMLDivElement>(index * 100);
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const imageSrc = imgError 
    ? "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" // Fallback tech image
    : project.image;

  return (
    <div
      ref={animRef}
      className={`
        relative h-full ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}
      `}
      style={{ animationDelay: animationDelay }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl 
          border border-gray-200 dark:border-gray-700 overflow-hidden
          transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-emerald-900/10
          isolate"
      >
        {/* Spotlight Effect */}
        <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
             style={{
               background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(14, 165, 233, 0.15), transparent 40%)`
             }}
        ></div>
        
        {/* Dark Mode Glow */}
         <div className="pointer-events-none absolute -inset-px opacity-0 dark:group-hover:opacity-100 transition-opacity duration-300 z-10"
             style={{
               background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(52, 211, 153, 0.1), transparent 40%)`
             }}
        ></div>

        {/* Image Section */}
        <div className="relative h-52 w-full overflow-hidden z-0">
           <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
           <img 
             src={imageSrc} 
             alt={project.title}
             onError={() => setImgError(true)}
             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
             loading="lazy"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
        </div>

        <div className="p-6 flex flex-col flex-grow z-20">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed flex-grow line-clamp-4">
            {project.description.replace(/\s+/g, ' ').trim()}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-slate-100 dark:bg-gray-700/50 text-slate-600 dark:text-gray-300 rounded text-[10px] font-bold uppercase tracking-wider border border-slate-200 dark:border-gray-600"
              >
                {tech}
              </span>
            ))}
             {project.technologies.length > 4 && (
               <span className="px-2 py-1 text-[10px] text-gray-400 self-center">+{project.technologies.length - 4}</span>
             )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-sky-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-sky-700 hover:shadow-lg transition-all duration-200 flex-1 group/btn"
              >
                Live Demo
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}
            {project.notebookLink && (
              <a
                href={project.notebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 flex-1"
              >
                Notebook
              </a>
            )}
            {project.presentationLink && (
               <a
                href={project.presentationLink}
                target="_blank"
                rel="noopener noreferrer"
                 className="flex items-center justify-center px-4 py-2 bg-amber-100 text-amber-800 border border-amber-200 text-sm font-medium rounded-lg hover:bg-amber-200 transition-all duration-200 flex-1"
              >
                Slides
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
