import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { CONTACT_INFO } from '../constants';
import { useTheme } from '../context/ThemeContext';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const { ref: containerRef, hasAnimated: containerAnimated } = useAnimateOnScroll<HTMLDivElement>(0);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
  };

  const iconColorClass = theme === 'dark' ? 'text-emerald-400' : 'text-sky-600';

  return (
    <section id="contact" className="py-24 px-4 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          title="Get in Touch"
          subtitle="Interested in collaborating or have a question? I'd love to hear from you."
        />
        
        <div 
            ref={containerRef}
            className={`flex flex-col lg:flex-row gap-12 ${containerAnimated ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
            {/* Contact Info Side */}
            <div className="lg:w-1/3 space-y-6">
                 {/* Phone Card */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-6 hover:shadow-md transition-all duration-300">
                    <div className={`w-12 h-12 bg-sky-50 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 ${iconColorClass}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <div>
                         <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Phone</h4>
                         <p className="text-lg font-semibold text-gray-900 dark:text-white">{CONTACT_INFO.phone}</p>
                    </div>
                </div>

                {/* Email Card */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-6 hover:shadow-md transition-all duration-300">
                    <div className={`w-12 h-12 bg-sky-50 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 ${iconColorClass}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                     <div>
                         <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Email</h4>
                         <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-semibold text-gray-900 dark:text-white hover:text-sky-600 dark:hover:text-emerald-400 transition-colors">{CONTACT_INFO.email}</a>
                    </div>
                </div>

                {/* Location Card */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-6 hover:shadow-md transition-all duration-300">
                    <div className={`w-12 h-12 bg-sky-50 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 ${iconColorClass}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div>
                         <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Location</h4>
                         <p className="text-lg font-semibold text-gray-900 dark:text-white">{CONTACT_INFO.location}</p>
                    </div>
                </div>
                
                {/* LinkedIn Card */}
                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="block bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-6 hover:shadow-md hover:border-sky-200 dark:hover:border-emerald-500/30 transition-all duration-300 group">
                     <div className={`w-12 h-12 bg-sky-50 dark:bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 ${iconColorClass} group-hover:scale-110 transition-transform`}>
                         {/* LinkedIn Icon */}
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                             <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.22-.44-1.65-1.15-1.65-.8 0-1.4.62-1.4 1.7V19h-3v-9h3v1.22c.66-.88 1.6-1.52 2.8-1.52 2.2 0 3.15 1.6 3.15 3.9v5.4z"/>
                         </svg>
                    </div>
                    <div>
                         <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">LinkedIn</h4>
                         <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-emerald-400 transition-colors">Connect with me</p>
                    </div>
                </a>
            </div>

            {/* Contact Form Side */}
            <div className="lg:w-2/3 bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-100 dark:bg-emerald-900/20 rounded-full filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-sky-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-sky-200 dark:focus:ring-emerald-900/50 outline-none transition-all text-gray-900 dark:text-white"
                                placeholder="John Doe"
                            />
                        </div>
                         <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-sky-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-sky-200 dark:focus:ring-emerald-900/50 outline-none transition-all text-gray-900 dark:text-white"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea 
                            id="message" 
                            name="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-sky-500 dark:focus:border-emerald-500 focus:ring-2 focus:ring-sky-200 dark:focus:ring-emerald-900/50 outline-none transition-all text-gray-900 dark:text-white resize-none"
                            placeholder="How can I help you?"
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 dark:from-emerald-500 dark:to-teal-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <span>Send Message</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;