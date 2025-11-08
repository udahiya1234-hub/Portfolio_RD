import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { ChatMessage, ChatHistoryEntry } from '../types';
import { useTheme } from '../context/ThemeContext';
import { generateChatResponse } from '../utils/ai';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs for messages

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
  const chatHistoryRef = useRef<ChatHistoryEntry[]>([]); // To maintain Gemini's chat history format

  useEffect(() => {
    if (isChatOpen && messages.length === 0) {
      setMessages([
        {
          id: uuidv4(),
          role: 'model',
          content: "Hi there! I'm Rahul's AI assistant. How can I help you learn more about him?",
        },
      ]);
    }
  }, [isChatOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() === '' || isLoading) return;

    const userMessage: ChatMessage = { id: uuidv4(), role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    chatHistoryRef.current.push({ role: 'user', parts: [{ text: input.trim() }] });
    setInput('');
    setIsLoading(true);

    const modelTypingMessageId = uuidv4();
    // Start with empty content and then update it in the stream
    setMessages((prev) => [
      ...prev,
      { id: modelTypingMessageId, role: 'model', content: '', isTyping: true },
    ]);

    try {
      let fullResponseContent = '';
      const stream = await generateChatResponse(userMessage.content, chatHistoryRef.current);

      for await (const chunk of stream) {
        fullResponseContent += chunk.text;
        // Update the content of the typing message with incoming chunks
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === modelTypingMessageId
              ? { ...msg, content: fullResponseContent, isTyping: true } // Keep isTyping true while streaming
              : msg
          )
        );
      }

      // After stream is complete, set isTyping to false
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === modelTypingMessageId
            ? { ...msg, content: fullResponseContent, isTyping: false }
            : msg
        )
      );

      chatHistoryRef.current.push({ role: 'model', parts: [{ text: fullResponseContent }] });
    } catch (error) {
      console.error('Error generating AI response:', error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === modelTypingMessageId
            ? {
                ...msg,
                content:
                  'Oops! Something went wrong. Please try again or refresh the page.',
                isTyping: false,
              }
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