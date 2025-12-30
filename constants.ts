

import { Skill, EducationEntry, Project, NavLink, Certification } from './types';

// Hero Section
export const NAME = "Rahul Dahiya";
export const TITLE = "Data Science Enthusiast";
export const SHORT_BIO =
  "Mathematics graduate passionate about turning data into meaningful business insights. Building expertise in Python, SQL, and AI to solve real-world problems.";
export const AVAILABLE_FOR_FREELANCE = true;

// About Section
export const ABOUT_ME_PARAGRAPH_1 = "I am a driven Mathematics graduate who found a passion in the world of Data Science. My academic background has equipped me with strong analytical skills and a logical approach to problem-solving, which I now apply to extracting insights from complex datasets.";
export const ABOUT_ME_PARAGRAPH_2 = "Currently, I am expanding my expertise in Python, Machine Learning, and Generative AI. I love building practical applications, from predictive models to intelligent chatbots, and I am eager to contribute to impactful data-driven projects.";

// Images
export const PROFILE_IMAGE = "https://i.ibb.co/XfMkh7hq/profile.png"; 
export const ABOUT_IMAGE = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200";

// Featured Project Section (RAG Chatbot)
export const FEATURED_VIDEO_ID = "0f653162-e4a6-46d3-be1f-fb8b81095404"; 
export const FEATURED_PROJECT_LINK = "https://www.veed.io/view/0f653162-e4a6-46d3-be1f-fb8b81095404";
export const FEATURED_PROJECT_TITLE = "RAG AI Chatbot";
export const FEATURED_PROJECT_SUBTITLE = "Retrieval-Augmented Generation System";
export const FEATURED_PROJECT_DESC = "A state-of-the-art AI chatbot that bridges the gap between generic LLMs and custom data. By utilizing Retrieval-Augmented Generation (RAG), this system fetches precise information from a dedicated knowledge base to provide accurate, context-aware answers in real-time.";
export const FEATURED_PROJECT_FEATURES = [
  "Context-Aware Responses using LangChain",
  "Vector Database Integration",
  "Interactive Streamlit Interface",
  "Real-time Document Processing"
];

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
  { id: 'certifications', label: 'Certifications' },
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
    years: "2025 - Present",
    grade: "Ongoing",
  },
  {
    degree: "B.Sc. Mathematics (Honours)",
    field: "Mathematics & Statistics",
    institution: "Delhi University",
    years: "2014 - 2017",
    grade: "First Division",
  },
];

// Certifications
export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Skills Centers: Computer Foundations – Part 1",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
    link: "https://i.ibb.co/tMNz3LNH/Screenshot-2025-12-07-135719.png",
    image: "https://i.ibb.co/tMNz3LNH/Screenshot-2025-12-07-135719.png", 
    skills: ["Computer Hardware", "Networking Basics", "IT Fundamentals"]
  }
];

// Projects
export const PROJECTS: Project[] = [
  {
    title: "SHL Assessment Engine",
    description: "An intelligent recommendation system designed to match candidates with the most suitable SHL assessments based on job roles and skill requirements. Streamlines the talent acquisition process with data-driven insights.",
    technologies: ["Recommendation System", "Machine Learning", "Web App", "Analytics"],
    dashboardLink: "https://shl-assessment-recommendation-engin-eta.vercel.app/",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "RAG AI Chatbot",
    description: "A cutting-edge Retrieval-Augmented Generation (RAG) chatbot capable of answering queries from custom knowledge bases. Deployed on Streamlit for real-time, context-aware interaction.",
    technologies: ["Generative AI", "LangChain", "Python", "Streamlit", "Vector DB"],
    liveLink: "https://ragproject-rahul.streamlit.app/",
    presentationLink: "https://www.linkedin.com/posts/rahul-dahiya-ds-aspirant_ai-rag-generativeai-activity-7398357712406892544-gp_V?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUyNGoBnMVu2bz4CTHxXZ0BNnm5cAwdZok",
    dashboardLink: "https://rag-presentation-dashboard.vercel.app/",
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
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1000",
  },
];
