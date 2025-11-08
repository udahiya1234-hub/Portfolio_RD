import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface ChatButtonProps {
  isChatOpen: boolean;
  toggleChat: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ isChatOpen, toggleChat }) => {
  const { theme } = useTheme();

  const buttonClass = `
    fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center
    shadow-lg z-50 text-white text-xs font-semibold text-center leading-none p-1.5
    bg-indigo-600 hover:bg-indigo-700
    dark:bg-teal-500 dark:hover:bg-teal-600
    transition-all duration-300 transform
    focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-teal-700
  `;

  return (
    <button
      className={buttonClass}
      onClick={toggleChat}
      aria-label="Toggle AI Assistant Chat"
    >
      AI<br/>Assistant
    </button>
  );
};

export default ChatButton;