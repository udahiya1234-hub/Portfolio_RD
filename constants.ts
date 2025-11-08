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
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-8 h-8 text-indigo-600 dark:text-teal-400",
      },
      React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M17.25 6.75L21 12m0 0l-3.75 5.25M21 12H3"
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
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-8 h-8 text-indigo-600 dark:text-teal-400",
      },
      React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0V2.25M3.75 6.375V2.25m10.125 3.375h-4.5c-.375 0-.75.375-.75.75v3.75c0 .375.375.75.75.75h4.5c.375 0 .75-.375.75-.75V7.125c0-.375-.375-.75-.75-.75Z"
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
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-8 h-8 text-indigo-600 dark:text-teal-400",
      },
      React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M9.813 15.904L9.75 9.75m0 0l-3.249 3.249a1.5 1.5 0 01-2.071 0m2.071 0l-3.248 3.249A1.5 1.5 0 005.25 21H13.5V6.75m6 0h1.5m-1.5 0s-2.25-.75-3.75-.75A3.375 3.375 0 0018 3.375c-1.5 0-3 .627-3.75 1.758m-13.5 3.372a1.5 1.5 0 00-.042 2.15l.53 1.05C.894 13.195 1 14.32 1 15.5c0 1.42.32 2.764.922 3.972m.963-3.972a.75.75 0 00.034-1.06l-.53-.53V7.5c0-.622.09-.95.234-1.257m5.545 4.038l-4.721 4.721M21.75 12a1.5 1.5 0 010 3.75m-1.5-3.75h-4.875c-.621 0-1.125.504-1.125 1.125v.75c0 .621.504 1.125 1.125 1.125h4.875m-4.875-1.5h.008v.008h-.008v-.008Zm0 1.5h.008v.008h-.008v-.008Z"
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
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-8 h-8 text-indigo-600 dark:text-teal-400",
      },
      React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 19.128a9.38 9.38 0 002.63-2.63M13 2.25l-3 1.5M10 2.25l-3 1.5M3 12h18M3 12l2.25 3M3 12l2.25-3m18 0l-2.25 3m2.25-3l-2.25-3m-15.75 9l4.725-2.736M4.5 12a7.5 7.5 0 0115 0m-4.725 3l-4.725 2.736M11.25 12h.008v.008h-.008V12zm-.375 0a.375.375 0 11-.75 0 .375 0 01.75 0z"
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
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: "w-8 h-8 text-indigo-600 dark:text-teal-400",
      },
      React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m10.5 21 5.25-11.25L21 21m-9-6h5.25"
      }),
      React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7.5 7.5l-1.5 5.25m-.75 3.75H2.25m10.5-11.25L21 21m-9-6h5.25"
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
    title: "Pharmacy Sales Forecasting Dashboard & Analysis",
    description:
      "Developed an interactive dashboard for pharmaceutical sales forecasting, utilizing advanced data analysis, predictive modeling, and data visualization. This project involved in-depth analysis of sales data using Python, Pandas, and Plotly, followed by the creation of a Streamlit dashboard to visualize future sales trends, identify key patterns, and support data-driven decision-making for inventory and marketing strategies.",
    technologies: [
      "Python",
      "Data Analysis",
      "Predictive Modeling",
      "Dashboarding",
      "Streamlit",
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
    description:
      "Built and analyzed multiple machine learning models for spam detection using Python and scikit-learn. Implemented SVM, Random Forest, Gradient Boosting, and other algorithms, achieving 98.2% accuracy with the Initial SVM model. Created an interactive dashboard to visualize model performance metrics and comparisons.",
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
    description:
      "Built an interactive AI dashboard to analyze and visualize movie review sentiments in real-time. Implements machine learning models with Google AI Studio to classify reviews as positive or negative, demonstrating end-to-end NLP pipeline and data visualization skills.",
    technologies: [
      "Python",
      "NLP",
      "Google AI Studio",
      "Machine Learning",
      "Streamlit",
    ],
    liveLink: "https://movie-review-classification.vercel.app/", // Added live link here
    notebookLink: "https://colab.research.google.com/drive/1HInNf4iNANjuSs6K2-Y-khlqlrL8JSN3?usp=sharing",
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


export const GEMINI_SYSTEM_INSTRUCTION = `You are a helpful AI assistant representing Rahul Dahiya, a Data Science Enthusiast.
Your goal is to answer questions about Rahul Dahiya's professional profile, skills, education, and projects.
Be concise, informative, and always refer to the provided information. If a question goes beyond the scope of Rahul's professional profile, politely decline to answer.

Here is the information about Rahul Dahiya:

Name: ${NAME}
Title: ${TITLE}
Short Bio: ${SHORT_BIO}

About Me:
${ABOUT_ME_PARAGRAPH_1}
${ABOUT_ME_PARAGRAPH_2}

Skills:
${SKILLS.map(s => `- ${s.name}: ${s.description}`).join('\n')}

Education:
${EDUCATION.map(e => `- ${e.degree} in ${e.field} from ${e.institution} (${e.years}, Grade: ${e.grade})`).join('\n')}

Projects:
${PROJECTS.map(p => `
- Title: ${p.title}
  Description: ${p.description}
  Technologies: ${p.technologies.join(', ')}
  ${p.liveLink && p.liveLink !== '#' ? `Live Link: ${p.liveLink}` : ''}
  ${p.notebookLink && p.notebookLink !== '#' ? `Notebook Link: ${p.notebookLink}` : ''}
`).join('\n')}

Contact Information:
Phone: ${CONTACT_INFO.phone}
Email: ${CONTACT_INFO.email}
Location: ${CONTACT_INFO.location}
LinkedIn: ${CONTACT_INFO.linkedin}
GitHub: ${CONTACT_INFO.github}

When asked about specific projects, provide a brief summary of the project, the technologies used, and mention if there are live or notebook links available (without actually providing the placeholder links).
If asked for contact information, provide the email, LinkedIn link, and GitHub link.`;