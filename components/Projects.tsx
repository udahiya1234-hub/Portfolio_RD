import React, { useState, useMemo } from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Extract all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    PROJECTS.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return ['All', ...Array.from(techs).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return PROJECTS;
    }
    return PROJECTS.filter(project => 
      project.technologies.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 px-4 bg-rose-50 dark:bg-red-950 transition-colors duration-300">
      <div className="container mx-auto">
        <SectionHeader
          title="Data Science Projects"
          subtitle="Explore my hands-on data science projects showcasing Python, machine learning, and analytical capabilities"
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          {allTechnologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${activeFilter === tech
                  ? 'bg-sky-600 text-white border-sky-600 shadow-md transform scale-105 dark:bg-emerald-600 dark:border-emerald-600'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-zinc-300 border-gray-200 dark:border-gray-700 hover:bg-sky-50 dark:hover:bg-gray-700 hover:border-sky-200 dark:hover:border-emerald-700'
                }
              `}
              aria-pressed={activeFilter === tech}
              aria-label={`Filter projects by ${tech}`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[200px]">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
             <div className="text-center py-10 text-lg text-gray-500 dark:text-gray-400 animate-fade-in">
                No projects found matching this filter.
             </div>
        )}
      </div>
    </section>
  );
};

export default Projects;