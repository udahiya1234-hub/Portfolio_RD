import React from 'react';
import SectionHeader from './SectionHeader';
import SkillCard from './SkillCard';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-fuchsia-50 dark:bg-purple-950 transition-colors duration-300">
      <div className="container mx-auto">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="A summary of my technical and soft skills"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} /> // Pass index for staggered animation
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;