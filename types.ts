import * as React from 'react';

export interface Skill {
  name: string;
  description: string;
  icon: React.JSX.Element;
}

export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  years: string;
  grade: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  notebookLink?: string;
  presentationLink?: string;
}

export interface NavLink {
  id: string;
  label: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}