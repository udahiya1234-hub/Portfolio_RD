import React from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <SectionHeader
          title="Data Science Projects"
          subtitle="Explore my hands-on data science projects showcasing Python, machine learning, and analytical capabilities"
        />
        {/* Removed animate-fade-in-up from this div as the animation is now handled by individual ProjectCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;