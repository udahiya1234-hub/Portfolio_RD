import React from 'react';
import { Project } from '../types';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll'; // Import the new hook

interface ProjectCardProps {
  project: Project;
  index: number; // Add index prop for staggered animation
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Fix: Specify the correct HTML element type for the ref
  const { ref, hasAnimated, animationDelay } = useAnimateOnScroll<HTMLDivElement>(index * 100);

  return (
    <div
      ref={ref}
      className={`
        bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-lg border border-gray-100 dark:border-gray-700
        hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300 flex flex-col h-full
        ${hasAnimated ? 'animate-fade-in-up' : 'opacity-0'}
      `}
      // Apply animationDelay directly via style prop for staggering
      style={{ animationDelay: animationDelay }}
      role="article"
      aria-labelledby={`project-title-${project.title.replace(/\s/g, '-')}`}
    >
      <div className="p-8 flex flex-col flex-grow">
        <h3 id={`project-title-${project.title.replace(/\s/g, '-')}`} className="text-2xl font-bold text-gray-800 dark:text-gray-50 mb-3">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-5 flex-grow leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6" aria-label="Technologies used">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-indigo-100 dark:bg-gray-700 text-indigo-700 dark:text-teal-400 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
          {project.liveLink && project.liveLink !== '#' && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-2 bg-indigo-600 text-white font-medium rounded-full shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-teal-700 transition duration-300 flex-grow"
              aria-label={`View live demo of ${project.title}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
              View Live
            </a>
          )}
          {project.notebookLink && project.notebookLink !== '#' && (
            <a
              href={project.notebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 transition duration-300 flex-grow"
              aria-label={`View notebook for ${project.title}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375H12.75m11.25-.75l-4.72-4.72a.75.75 0 00-1.06 0L3 17.25m8.621-3.621l4.721-4.721m0 0A3.375 3.375 0 0014.25 9.75h-1.875a3.375 3.375 0 00-3.375 3.375v1.875M19.5 14.25l-2.75-2.75"
                />
              </svg>
              View Notebook
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;