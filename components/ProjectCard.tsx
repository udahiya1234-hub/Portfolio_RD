

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
      className={`group flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: animationDelay }}
    >
      {/* Image Container */}
      <div className="h-52 overflow-hidden bg-slate-100 dark:bg-slate-700 relative">
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10"></div>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
      </div>

      <div className="p-6 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
          </div>
          
          <p className="text-slate-600 dark:text-slate-300 mb-6 flex-1 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2.5 py-1 bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-md">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
               <span className="px-2.5 py-1 bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-600 text-slate-500 dark:text-slate-400 text-xs font-semibold rounded-md">
                 +{project.technologies.length - 4}
               </span>
            )}
          </div>

          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                <span>Live Demo</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            )}
            
            {project.dashboardLink && !project.liveLink && (
               <a
                href={project.dashboardLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-lg transition-colors"
              >
                Dashboard
              </a>
            )}

            {(project.notebookLink || project.presentationLink) && (
               <a
                href={project.notebookLink || project.presentationLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex justify-center items-center w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="View Code/Details"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </a>
            )}
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
