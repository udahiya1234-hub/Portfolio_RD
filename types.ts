import * as React from 'react';

export interface Skill {
  name: string;
  description: string;
  iconKey: string;
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
  image: string; // Added image property
}

export interface NavLink {
  id: string;
  label: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}