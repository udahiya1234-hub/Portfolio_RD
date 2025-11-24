
import React from 'react';
import { Project } from '../types';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { ref, hasAnimated, animationDelay } = useAnimateOnScroll<HTMLDivElement>(index * 100);

  return (
    <div
      ref={ref}
      className={`bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 dark:border-slate-700 transition-all duration-300 flex flex-col h-full ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: animationDelay }}
    >
      {/* Image */}
      <div className="h-48 overflow-hidden bg-slate-200 dark:bg-slate-700 relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
      </div>

      <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            {project.title}
          </h3>
          
          <p className="text-slate-600 dark:text-slate-300 mb-6 flex-1 leading-relaxed text-sm">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 5).map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-md">
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
               <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-md">
                 +{project.technologies.length - 5}
               </span>
            )}
          </div>

          <div className="flex flex-wrap gap-3 mt-auto">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-sky-600 hover:bg-sky-700 text-white text-center py-2.5 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 text-sm"
              >
                Live Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            )}
            
            {project.presentationLink && (
               <a
                href={project.presentationLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-200 text-center py-2.5 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center"
              >
                Video
              </a>
            )}

            {project.dashboardLink && (
               <a
                href={project.dashboardLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-purple-100 hover:bg-purple-200 text-purple-900 border border-purple-200 text-center py-2.5 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center"
              >
                Dashboard
              </a>
            )}

            {project.notebookLink && (
               <a
                href={project.notebookLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200 text-center py-2.5 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center"
              >
                Notebook
              </a>
            )}
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
