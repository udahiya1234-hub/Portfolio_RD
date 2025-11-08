import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { GEMINI_SYSTEM_INSTRUCTION } from '../constants';
import { ChatHistoryEntry } from '../types';

/**
 * Generates a streaming chat response from the Gemini model.
 * @param userMessage The latest message from the user.
 * @param chatHistory The accumulated chat history in Gemini's format.
 * @returns An async iterable of GenerateContentResponse chunks.
 */
export async function generateChatResponse(
  userMessage: string,
  chatHistory: ChatHistoryEntry[]
): Promise<AsyncIterable<GenerateContentResponse>> {
  // CRITICAL: Create a new GoogleGenAI instance right before making an API call
  // to ensure it always uses the most up-to-date API key from the dialog.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Use the system instruction defined in constants.ts
  const config = {
    systemInstruction: GEMINI_SYSTEM_INSTRUCTION,
  };

  const response = await ai.models.generateContentStream({
    model: 'gemini-2.5-flash',
    contents: [...chatHistory, { role: 'user', parts: [{ text: userMessage }] }],
    config: config,
  });

  return response;
}