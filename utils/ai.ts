import { GoogleGenAI, Chat } from "@google/genai";
import { GEMINI_SYSTEM_INSTRUCTION } from '../constants';

/**
 * Initializes a new Gemini chat session.
 * @returns A promise that resolves to a Chat instance.
 */
export async function initializeGeminiChat(): Promise<Chat> {
  // CRITICAL: Create a new GoogleGenAI instance right before making an API call
  // to ensure it always uses the most up-to-date API key from the dialog.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Use the system instruction defined in constants.ts
  const chat: Chat = ai.chats.create({
    model: 'gemini-2.5-flash', // Use the recommended model for chat
    config: {
      systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
    },
  });

  return chat;
}

// The 'generateChatResponse' function has been removed as ChatWidget will now
// interact directly with the 'Chat' instance using sendMessageStream.
