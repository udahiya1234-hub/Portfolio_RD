import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { ChatMessage } from '../types';
import { useTheme } from '../context/ThemeContext';
import { initializeGeminiChat } from '../utils/ai'; // Import the new initializer
import { v4 as uuidv4 } from 'uuid';
import { Chat } from '@google/genai'; // Import Chat type

interface ChatWidgetProps {
  isChatOpen: boolean;
  onClose: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ isChatOpen, onClose }) => {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const geminiChatRef = useRef<Chat | null>(null); // To store the Gemini Chat instance

  // Effect for initial chat setup and cleanup
  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates on unmounted component

    const setupChat = async () => {
      if (!isMounted) return; // Don't proceed if component unmounted

      setIsLoading(true);
      try {
        const chatInstance = await initializeGeminiChat();
        if (isMounted) {
          geminiChatRef.current = chatInstance;
          // Only set initial message if no messages exist (first time opening a new session)
          if (messages.length === 0) {
            setMessages([
              {
                id: uuidv4(),
                role: 'model',
                content: "Hi there! I'm Rahul's AI assistant. How can I help you learn more about him?",
              },
            ]);
          }
        }
      } catch (error) {
        console.error('Error initializing Gemini Chat:', error);
        if (isMounted) {
          let errorMessage = 'Oops! Failed to start the AI assistant. This might be due to network issues or an unconfigured API key.';
          if (error instanceof Error) {
            if (error.message.includes('API Key is not configured')) {
              errorMessage = 'Oops! The Gemini API key is missing or not configured correctly in your deployment environment. Please ensure process.env.API_KEY is set.';
            } else if (error.message.includes("Requested entity was not found.")) {
              errorMessage += " Your API key might be invalid or expired. Please check your API key.";
            }
          }
          setMessages([
            {
              id: uuidv4(),
              role: 'model',
              content: errorMessage,
            },
          ]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (isChatOpen && !geminiChatRef.current) {
      // Only initialize if chat is open AND no chat instance exists yet
      setupChat();
    }

    // Cleanup function for when the widget closes or component unmounts
    return () => {
      isMounted = false; // Set flag to false on unmount/cleanup
      // For Chat objects, there is no explicit .close() method.
      // Simply nullify the reference to allow garbage collection.
      
      // Reset all chat-related state when the widget is closed (or unmounted)
      if (!isChatOpen) {
        geminiChatRef.current = null;
        setMessages([]);
        setInput('');
        setIsLoading(false);
      }
    };
  }, [isChatOpen]); // Dependency on isChatOpen only. messages.length removed.

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const currentInput = input.trim();
    if (currentInput === '' || isLoading || !geminiChatRef.current) return;

    const userMessage: ChatMessage = { id: uuidv4(), role: 'user', content: currentInput };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const modelTypingMessageId = uuidv4();
    setMessages((prev) => [
      ...prev,
      { id: modelTypingMessageId, role: 'model', content: '', isTyping: true },
    ]);

    try {
      let fullResponseContent = '';
      const stream = await geminiChatRef.current.sendMessageStream({ message: userMessage.content });

      for await (const chunk of stream) {
        fullResponseContent += chunk.text;
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === modelTypingMessageId
              ? { ...msg, content: fullResponseContent, isTyping: true }
              : msg
          )
        );
      }

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === modelTypingMessageId
            ? { ...msg, content: fullResponseContent, isTyping: false }
            : msg
        )
      );
    } catch (error) {
      console.error('Error generating AI response:', error);
      let errorMessage = 'Oops! Something went wrong. Please try again.';
      // Check for specific API key error and prompt user to re-select
      if (error instanceof Error && error.message.includes("Requested entity was not found.")) {
          errorMessage += " Your API key might be invalid or expired. Please select your API key again.";
          // Reset the chat session on API key error to force re-initialization
          // For Chat, simply nullifying the ref will cause it to re-initialize on next open
          geminiChatRef.current = null;
          // Note: window.aistudio.openSelectKey() is not directly implemented here as it's an external prompt
          // and might require more complex state management with user interaction feedback.
          // For this exercise, informing the user and resetting the session is sufficient.
      }

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === modelTypingMessageId
            ? { ...msg, content: errorMessage, isTyping: false }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isChatOpen) return null;

  return (
    <div
      className={`fixed bottom-24 right-6 w-11/12 md:w-96 h-[70vh] max-h-[600px] z-[100]
                  bg-white dark:bg-gray-800 rounded-xl shadow-xl dark:shadow-2xl
                  flex flex-col border border-neutral-200 dark:border-gray-700
                  transition-all duration-300 ease-in-out transform scale-100 opacity-100`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-widget-title"
    >
      <div
        className="flex justify-between items-center py-3 px-4 rounded-t-xl
                   bg-sky-600 dark:bg-emerald-600 text-white"
      >
        <h3 id="chat-widget-title" className="text-xl font-bold">
          Chat with Rahul's AI
        </h3>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-sky-700 dark:hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-sky-300 dark:focus:ring-emerald-300 transition-colors duration-200"
          aria-label="Close chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 p-5 overflow-y-auto space-y-4 dark:text-zinc-200 custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] px-4 py-2.5 shadow-sm relative
              ${
                msg.role === 'user'
                  ? 'bg-sky-600 text-white dark:bg-emerald-700 dark:text-neutral-100 rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-md'
                  : 'bg-neutral-200 text-gray-900 dark:bg-gray-700 dark:text-neutral-100 rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-md'
              }`}
            >
              {msg.isTyping ? (
                <div className="flex items-end space-x-1.5 min-h-[1.5rem]">
                  <span>{msg.content}</span>
                  <span className="dot-pulse">
                    <span className="dot-pulse-dot"></span>
                    <span className="dot-pulse-dot"></span>
                    <span className="dot-pulse-dot"></span>
                  </span>
                </div>
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t border-neutral-200 dark:border-gray-700 flex bg-white dark:bg-gray-800 rounded-b-xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={isLoading ? 'Thinking...' : 'Ask me about Rahul...'}
          className="flex-1 p-3 rounded-l-xl border border-neutral-300 dark:border-gray-600
                     bg-neutral-50 dark:bg-gray-700 text-gray-900 dark:text-neutral-100
                     focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-emerald-400
                     placeholder-gray-400 dark:placeholder-zinc-400"
          disabled={isLoading}
          aria-label="Chat input"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-r-xl bg-sky-600 hover:bg-sky-700 text-white
                     dark:bg-emerald-500 dark:hover:bg-emerald-600
                     focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-emerald-400
                     disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          disabled={isLoading || input.trim() === ''}
          aria-label="Send message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatWidget;