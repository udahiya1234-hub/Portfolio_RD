import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-rose-50 dark:bg-red-950 transition-colors duration-300">
      <div className="container mx-auto">
        <SectionHeader
          title="Data Science Projects"
          subtitle="Explore my hands-on data science projects showcasing Python, machine learning, and analytical capabilities"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[200px]">
          {PROJECTS.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;