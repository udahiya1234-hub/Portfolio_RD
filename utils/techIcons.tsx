import React from 'react';

const iconClasses = "w-4 h-4 mr-1 inline-block align-middle"; // Smaller icons, align with text

const getTechIcon = (techName: string) => {
  const commonClasses = iconClasses; // Use commonClasses for all icons for consistency

  switch (techName.toLowerCase()) {
    case 'python':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={commonClasses}
        >
          <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437-.92 3.795-.92 1.358 0 2.648.347 3.795.92.35.175.716-.11.716-.48V8.583a.75.75 0 00-.308-.606C18.293 7.398 15.264 6 12 6s-6.293 1.398-7.902 2.077a.75.75 0 00-.308.606v1.979c0 .37.366.655.716.48zM12 15a.75.75 0 00-.75.75v3.626a.75.75 0 001.5 0V15.75A.75.75 0 0012 15z" clipRule="evenodd" />
        </svg>
      );
    case 'sql':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={commonClasses}
        >
          <path d="M6.41 18H3.59c-.49 0-.9-.33-.97-.81C2.52 16.58 2 15.35 2 12c0-3.35.52-4.58.62-5.19.07-.48.48-.81.97-.81h2.82c.49 0 .9.33.97.81.1.61.62 1.84.62 5.19 0 3.35-.52 4.58-.62 5.19-.07.48-.48.81-.97.81zM20.41 18h-2.82c-.49 0-.9-.33-.97-.81-.1-.61-.62-1.84-.62-5.19 0-3.35.52-4.58.62-5.19.07-.48.48-.81.97-.81h2.82c.49 0 .9.33.97.81.1.61.62 1.84.62 5.19 0 3.35-.52 4.58-.62 5.19-.07.48-.48.81-.97.81zM13 12c0-3.35-.52-4.58-.62-5.19-.07-.48-.48-.81-.97-.81h-2.82c-.49 0-.9.33-.97.81-.1.61-.62 1.84-.62 5.19 0 3.35.52 4.58.62 5.19.07.48.48.81.97.81h2.82c.49 0 .9-.33.97-.81.1-.61.62-1.84.62-5.19z" />
        </svg>
      );
    case 'generative ai':
    case 'google ai studio':
    case 'llm':
    case 'rag':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={commonClasses}
        >
          <path fillRule="evenodd" d="M11.484 2.17a.75.75 0 00-1.06 0L2.25 9.006 3.744 10.5l-.369.369a1.125 1.125 0 000 1.592l3.598 3.597a1.125 1.125 0 001.592 0L11.484 12l7.199 7.199a1.125 1.125 0 001.592 0l3.598-3.597a1.125 1.125 0 000-1.592l-.369-.369 1.494-1.494-7.199-7.199a.75.75 0 00-1.06 0L12 5.612 11.484 2.17zm.354 1.253l-6.52 6.52L12 17.525l6.52-6.52-6.52-6.52zM12 10.5a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm0 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm0 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75z" clipRule="evenodd" />
        </svg>
      );
    case 'data analysis':
    case 'data visualization':
    case 'dashboarding':
    case 'plotly':
    case 'pandas':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={commonClasses}>
          <path fillRule="evenodd" d="M2.25 13.5A.75.75 0 013 12.75h6.75a.75.75 0 01.75.75v6.75a.75.75 0 01-.75.75H3a.75.75 0 01-.75-.75v-6.75zM4.5 13.5V6a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75zm6-7.5a.75.75 0 00-.75.75v12a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V6.75a.75.75 0 00-.75-.75h-.75zm6-1.5a.75.75 0 00-.75.75V12a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75h-.75z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M19.388 2.656L16.5 5.545v-.016a.75.75 0 00-.518.232l-3.375 3.375a.75.75 0 001.06 1.06l2.85-2.849v.015h1.5l3.525-3.525a.75.75 0 000-1.06l-.75-.75a.75.75 0 00-1.06 0zM19.5 10.5a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0v-.75a.75.75 0 00-.75-.75zm0 3a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0v-.75a.75.75 0 00-.75-.75zm0 3a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0v-.75a.75.75 0 00-.75-.75z" clipRule="evenodd" />
        </svg>
      );
    case 'predictive modeling':
    case 'machine learning':
    case 'scikit-learn':
    case 'svm':
    case 'random forest':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={commonClasses}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S11.25 1.5 10.5 1.5 9 2.5 9 3.75zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S11.25 10.5 10.5 10.5 9.75 11.5 9.75 12zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S11.25 19.5 10.5 19.5 9.75 20.5 9.75 20.25zM15 3.75c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S17.25 1.5 16.5 1.5 15 2.5 15 3.75zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S17.25 10.5 16.5 10.5 15.75 11.5 15.75 12zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S17.25 19.5 16.5 19.5 15.75 20.5 15.75 20.25zM6 3.75c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S7.25 1.5 6.5 1.5 6 2.5 6 3.75zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S7.25 10.5 6.5 10.5 6 11.5 6 12zm.75 8.25c0 1.25.75 2.25 1.5 2.25s1.5-1 1.5-2.25S7.25 19.5 6.5 19.5 6 20.5 6 20.25z"/>
        </svg>
      );
    case 'nlp':
    case 'langchain':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={commonClasses}
        >
          <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.405-2.584 2.807-2.584h9.043c1.402 0 2.807 1.158 2.807 2.584v10.694c0 1.426-1.405 2.584-2.807 2.584H7.307c-1.402 0-2.807-1.158-2.807-2.584V5.653zM10.125 12h3.75a.75.75 0 000-1.5h-3.75a.75.75 0 000 1.5zM9 9.375a.75.75 0 00-.75.75v.75a.75.75 0 001.5 0V10.125a.75.75 0 00-.75-.75z" clipRule="evenodd" />
        </svg>
      );
    case 'streamlit':
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={commonClasses}>
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm-4.07 2.53a.75.75 0 010-1.06l1.591-1.591a.75.75 0 111.06 1.06l-1.59 1.591a.75.75 0 01-1.061 0zm16.14 0a.75.75 0 010-1.06l1.591-1.591a.75.75 0 111.06 1.06l-1.59 1.591a.75.75 0 01-1.06 0zM4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
            </svg>
        )
    default:
      return null;
  }
};

export default getTechIcon;