
import { Skill, EducationEntry, Project, NavLink } from './types';

// Hero Section
export const NAME = "Rahul Dahiya";
export const TITLE = "Data Science Enthusiast";
export const SHORT_BIO =
  "Mathematics graduate passionate about turning data into meaningful business insights. Building expertise in Python, SQL, and AI to solve real-world problems.";
export const AVAILABLE_FOR_FREELANCE = true;

// Images
export const PROFILE_IMAGE = "https://i.ibb.co/XfMkh7hq/profile.png"; 
export const ABOUT_IMAGE = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200";

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
  linkedin: "https://www.linkedin.com/in/rahul-dahiya", // Update this with your actual LinkedIn ID
  github: "https://github.com/rahuldahiya", // Update this with your actual GitHub ID
};

// Navigation Links
export const NAV_LINKS: NavLink[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

// Skills
export const SKILLS: Skill[] = [
  {
    name: "Python & Data Science",
    description: "Proficient in Python for data manipulation using Pandas, NumPy, and visualization with Matplotlib/Seaborn.",
    iconKey: "python",
  },
  {
    name: "Generative AI & LLMs",
    description: "Experience building RAG systems and leveraging Gemini/OpenAI APIs for intelligent applications.",
    iconKey: "ai",
  },
  {
    name: "SQL & Databases",
    description: "Strong command of SQL for data extraction, complex queries, and database management.",
    iconKey: "database",
  },
  {
    name: "Machine Learning",
    description: "Understanding of predictive modeling, regression, classification, and clustering algorithms.",
    iconKey: "ml",
  },
  {
    name: "Data Visualization",
    description: "Creating impactful dashboards and stories using Power BI, Tableau, and Matplotlib.",
    iconKey: "visualization",
  },
];

// Education
export const EDUCATION: EducationEntry[] = [
  {
    degree: "Data Science Course",
    field: "Data Analytics & AI",
    institution: "Career 247",
    years: "2023 - Present",
    grade: "Ongoing",
  },
  {
    degree: "B.Sc. Mathematics (Honours)",
    field: "Mathematics & Statistics",
    institution: "Delhi University",
    years: "2016 - 2019",
    grade: "First Division",
  },
];

// Projects
export const PROJECTS: Project[] = [
  {
    title: "RAG AI Chatbot",
    description: "A cutting-edge Retrieval-Augmented Generation (RAG) chatbot capable of answering queries from custom knowledge bases. Deployed on Streamlit for real-time, context-aware interaction.",
    technologies: ["Generative AI", "LangChain", "Python", "Streamlit", "Vector DB"],
    liveLink: "https://ragproject-rahul.streamlit.app/",
    presentationLink: "https://rag-presentation-dashboard.vercel.app/",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000", 
  },
  {
    title: "Spam vs Non-Spam Classifier",
    description: "An NLP-powered machine learning system that accurately filters and classifies messages as spam or legitimate. Features an interactive web dashboard to test custom text inputs.",
    technologies: ["Machine Learning", "NLP", "Python", "Scikit-learn", "Web App"],
    liveLink: "https://project-spamvsnonspam.vercel.app/",
    notebookLink: "https://colab.research.google.com/drive/1F-5_WI3Kg-Q6_Niun-3JBPEVHMomS67a?usp=sharing",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000", 
  },
  {
    title: "Pharmacy Sales Analysis",
    description: "Comprehensive data analysis project forecasting pharmacy sales trends. Visualizes medicine demand, seasonality, and inventory turnover to optimize stock levels and business operations.",
    technologies: ["Data Analysis", "Python", "Pandas", "Forecasting", "Dashboarding"],
    liveLink: "https://sales-forecasting-lac.vercel.app",
    notebookLink: "https://colab.research.google.com/drive/1iBlRoOwkuvO9gzAMWc7OFz4ZBPfetovF?usp=sharing",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Movie Review Sentiment Analysis",
    description: "A sentiment analysis engine that processes movie reviews to determine audience reactions. It classifies feedback as positive or negative, providing visual insights into audience sentiment.",
    technologies: ["NLP", "Python", "Deep Learning", "Data Visualization"],
    liveLink: "https://movie-review-classification.vercel.app/",
    notebookLink: "https://colab.research.google.com/drive/1HInNf4iNANjuSs6K2-Y-khlqlrL8JSN3?usp=sharing",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1000",
  },
];
