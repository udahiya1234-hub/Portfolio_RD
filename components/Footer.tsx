import React from 'react';
import { NAME } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white dark:text-gray-200 py-8 text-center px-4 transition-colors duration-300">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {currentYear} {NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;