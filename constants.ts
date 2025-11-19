import React from 'react';
import { Skill, EducationEntry, Project, NavLink } from './types';

// Hero Section
export const NAME = "Rahul Dahiya";
export const TITLE = "Data Science Enthusiast";
export const SHORT_BIO =
  "Mathematics graduate passionate about turning data into meaningful business insights. Building expertise in Python, SQL, and AI to solve real-world problems.";
export const AVAILABLE_FOR_FREELANCE = true;

// About Me Section
export const ABOUT_ME_PARAGRAPH_1 =
  "I'm Rahul Dahiya, a Data Science enthusiast from Delhi with a B.Sc. in Mathematics (Honours). My background in maths taught me to analyze patterns and connect logic to real-world problems.";
export const ABOUT_ME_PARAGRAPH_2 =
  "I'm currently pursuing a Data Science course from Career 247, where I work on projects using Python, SQL, Excel, and Generative AI tools like ChatGPT and Gemini. With past experience as a Finance Manager, I bring strong analytical and communication skills and aim to build a career in data analytics or business intelligence, turning data into meaningful business insights.";

// Contact Information
export const CONTACT_INFO = {
  phone: "+91-80101-66244",
  email: "udahiya1234@gmail.com",
  location: "Mundka, New Delhi",
  linkedin: "https://www.linkedin.com/in/rahul-dahiya-ds-aspirant",
  github: "https://github.com/udahiya1234-hub", // Added GitHub profile link
};

// Skills & Expertise
export const SKILLS: Skill[] = [
  {
    name: "Python",
    description: "Data analysis & automation",
    icon: React.createElement(
      'svg',
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-8 h-8 text-sky-600 dark:text-emerald-400",
      },
      React.createElement('path', {
        fillRule: "evenodd",
        d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437-.92 3.795-.92 1.358 0 2.648.347 3.795.92.35.175.716-.11.716-.48V8.583a.75.75 0 00-.308-.606C18.293 7.398 15.264 6 12 6s-6.293 1.398-7.902 2.077a.75.75 0 00-.308.606v1.979c0 .37.366.655.716.48zM12 15a.75.75 0 00-.75.75v3.626a.75.75 0 001.5 0V15.75A.75.75 0 0012 15z",
        clipRule: "evenodd"
      })
    ),
  },
  {
    name: "SQL",
    description: "Database management & queries",
    icon: React.createElement(
      'svg',
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-8 h-8 text-sky-600 dark:text-emerald-400",
      },
      React.createElement('path', {
        d: "M6.41 18H3.59c-.49 0-.9-.33-.97-.81C2.52 16.58 2 15.35 2 12c0-3.35.52-4.58.62-5.19.07-.48.48-.81.97-.81h2.82c.49 0 .9.33.97.81.1.61.62 1.84.62 5.19 0 3.35-.52 4.58-.62 5.19-.07.48-.48.81-.97.81zM20.41 18h-2.82c-.49 0-.9-.33-.97-.81-.1-.61-.62-1.84-.62-5.19 0-3.35.52-4.58.62-5.19.07-.48.48-.81.97-.81h2.82c.49 0 .9.33.97.81.1.61.62 1.84.62 5.19 0 3.35-.52 4.58-.62 5.19-.07.48-.48.81-.97.81zM13 12c0-3.35-.52-4.58-.62-5.19-.07-.48-.48-.81-.97-.81h-2.82c-.49 0-.9.33-.97.81-.1.61-.62 1.84-.62 5.19 0 3.35.52 4.58.62 5.19.07.48.48.81.97.81h2.82c.49 0 .9-.33.97-.81.1-.61.62-1.84.62-5.19z"
      })
    ),
  },
  {
    name: "Generative AI",
    description: "AI-powered solutions (ChatGPT, Gemini)",
    icon: React.createElement(
      'svg',
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-8 h-8 text-sky-600 dark:text-emerald-400",
      },
      React.createElement('path', {
        fillRule: "evenodd",
        d: "M11.484 2.17a.75.75 0 00-1.06 0L2.25 9.006 3.744 10.5l-.369.369a1.125 1.125 0 000 1.592l3.598 3.597a1.125 1.125 0 001.592 0L11.484 12l7.199 7.199a1.125 1.125 0 001.592 0l3.598-3.597a1.125 1.125 0 000-1.592l-.369-.369 1.494-1.494-7.199-7.199a.75.75 0 00-1.06 0L12 5.612 11.484 2.17zm.354 1.253l-6.52 6.52L12 17.525l6.52-6.52-6.52-6.52zM12 10.5a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm0 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm0 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75z",
        clipRule: "evenodd"
      })
    ),
  },
  {
    name: "Machine Learning",
    description: "Building predictive models & algorithms",
    icon: React.createElement(
      'svg',
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-8 h-8 text-sky-600 dark:text-emerald-400",
      },
      React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9 3.75c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S11.25 1.5 10.5 1.5 9 2.5 9 3.75zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S11.25 10.5 10.5 10.5 9.75 11.5 9.75 12zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S11.25 19.5 10.5 19.5 9.75 20.5 9.75 20.25zM15 3.75c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S17.25 1.5 16.5 1.5 15 2.5 15 3.75zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S17.25 10.5 16.5 10.5 15.75 11.5 15.75 12zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S17.25 19.5 16.5 19.5 15.75 20.5 15.75 20.25zM6 3.75c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S7.25 1.5 6.5 1.5 6 2.5 6 3.75zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S7.25 10.5 6.5 10.5 6 11.5 6 12zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S7.25 19.5 6.5 19.5 6 20.5 6 20.25z"
      })
    ),
  },
  {
    name: "Deep Learning",
    description: "Neural networks & advanced AI architectures",
    icon: React.createElement(
      'svg',
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-8 h-8 text-sky-600 dark:text-emerald-400",
      },
      React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9 3.75c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S11.25 1.5 10.5 1.5 9 2.5 9 3.75zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S11.25 10.5 10.5 10.5 9.75 11.5 9.75 12zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S11.25 19.5 10.5 19.5 9.75 20.5 9.75 20.25zM15 3.75c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S17.25 1.5 16.5 1.5 15 2.5 15 3.75zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S17.25 10.5 16.5 10.5 15.75 11.5 15.75 12zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S17.25 19.5 16.5 19.5 15.75 20.5 15.75 20.25zM6 3.75c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S7.25 1.5 6.5 1.5 6 2.5 6 3.75zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S7.25 10.5 6.5 10.5 6 11.5 6 12zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S7.25 19.5 6.5 19.5 6 20.5 6 20.25z"
      })
    ),
  },
  {
    name: "NLP",
    description: "Processing & understanding human language",
    icon: React.createElement(
      'svg',
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-8 h-8 text-sky-600 dark:text-emerald-400",
      },
      React.createElement('path', {
        fillRule: "evenodd",
        d: "M4.5 5.653c0-1.426 1.405-2.584 2.807-2.584h9.043c1.402 0 2.807 1.158 2.807 2.584v10.694c0 1.426-1.405 2.584-2.807 2.584H7.307c-1.402 0-2.807-1.158-2.807-2.584V5.653zM10.125 12h3.75a.75.75 0 000-1.5h-3.75a.75.75 0 000 1.5zM9 9.375a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0V10.125a.75.75 0 00-.75-.75z",
        clipRule: "evenodd"
      })
    ),
  },
  {
    name: "Customer Handling",
    description: "Client relationship management",
    icon: React.createElement(
      'svg',
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-8 h-8 text-sky-600 dark:text-emerald-400",
      },
      React.createElement('path', {
        fillRule: "evenodd",
        d: "M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.697 4.698a1.125 1.125 0 01-1.59 1.591l-4.696-4.697A8.25 8.25 0 012.25 10.5z",
        clipRule: "evenodd"
      })
    ),
  },
  {
    name: "Languages",
    description: "English, Hindi",
    icon: React.createElement(
      'svg',
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-8 h-8 text-sky-600 dark:text-emerald-400",
      },
      React.createElement('path', {
        fillRule: "evenodd",
        d: "M12 2.25c-5.405 0-9.75 4.345-9.75 9.75s4.345 9.75 9.75 9.75 9.75-4.345 9.75-9.75S17.405 2.25 12 2.25zm-2.625 6.75a.75.75 0 100 1.5h1.75v1.75a.75.75 0 101.5 0v-1.75H14.625a.75.75 0 100-1.5h-1.75V7.125a.75.75 0 10-1.5 0v1.75H9.375z",
        clipRule: "evenodd"
      })
    ),
  },
];

// Education
export const EDUCATION: EducationEntry[] = [
  {
    degree: "Bachelor of Science",
    field: "Mathematics Honours",
    institution: "University of Delhi",
    years: "2014 - 2017",
    grade: "82.15%",
  },
];

// Projects
export const PROJECTS: Project[] = [
  {
    title: "RAG Chatbot & Analytics Dashboard",
    description: `
      Developed a sophisticated RAG (Retrieval-Augmented Generation) chatbot system capable of answering queries from custom knowledge bases.
      - Features a comprehensive dashboard presentation that documents the entire development journey, architectural decisions, and performance analysis.
      - Implemented using modern LLM frameworks to ensure accurate and context-aware responses.
    `,
    technologies: [
      "Python",
      "Streamlit",
      "RAG",
      "LangChain",
      "LLM",
      "Generative AI",
    ],
    liveLink: "https://ragproject-rahul.streamlit.app/",
    presentationLink: "https://rag-presentation.vercel.app/",
  },
  {
    title: "Pharmacy Sales Forecasting Dashboard & Analysis",
    description: `
      Developed an interactive dashboard for pharmaceutical sales forecasting.
      - Utilized Python, Pandas, and Plotly for in-depth data analysis and predictive modeling.
      - Visualized sales trends to support data-driven decision-making for inventory and marketing strategies.
    `,
    technologies: [
      "Python",
      "Data Analysis",
      "Predictive Modeling",
      "Dashboarding",
      "Google AI Studio",
      "Pandas",
      "Plotly",
      "Data Visualization",
    ],
    liveLink: "https://sales-forecasting-lac.vercel.app/",
    notebookLink: "https://colab.research.google.com/drive/1iBlRoOwkuvO9gzAMWc7OFf4ZBPfetovF?usp=sharing",
  },
  {
    title: "Spam Detection Model Analysis",
    description: `
      Built and analyzed multiple machine learning models for spam detection.
      - Implemented SVM, Random Forest, and Gradient Boosting algorithms using Python and scikit-learn.
      - Achieved 98.2% accuracy with the initial SVM model.
      - Developed an interactive dashboard to visualize model performance metrics and comparisons.
    `,
    technologies: [
      "Python",
      "Machine Learning",
      "scikit-learn",
      "SVM",
      "Random Forest",
      "NLP",
    ],
    liveLink: "https://project-spamvsnonspam.vercel.app/",
    notebookLink: "https://colab.research.google.com/drive/1F-5_WI3Kg-Q6_Niun-3JBPEVHMomS67a?usp=sharing",
  },
  {
    title: "Sentiment Analysis of Movie Reviews",
    description: `
      Developed an interactive AI dashboard to analyze and visualize movie review sentiments in real-time.
      - Utilized machine learning models with Google AI Studio to classify reviews as positive or negative.
      - Demonstrated end-to-end NLP pipeline and data visualization skills.
    `,
    technologies: [
      "Python",
      "NLP",
      "Google AI Studio",
      "Machine Learning",
    ],
    liveLink: "https://movie-review-classification.vercel.app/", // Added live link here
    notebookLink: "https://colab.research.google.com/drive/1HInNf4iNANjuSs6K2-Y-khlqlqL8JSN3?usp=sharing",
  },
];

export const NAV_LINKS: NavLink[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];