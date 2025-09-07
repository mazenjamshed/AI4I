
import { GoogleGenAI, Type } from "@google/genai";
import type { NewsItem } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const fetchIrishTechNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a summary of 3 recent and exciting developments in the modern Irish tech scene. For each development, provide a catchy title, a one-paragraph summary, and a relevant sector (e.g., FinTech, MedTech, GreenTech).",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: "A catchy headline for the news item.",
              },
              summary: {
                type: Type.STRING,
                description: "A one-paragraph summary of the development.",
              },
              sector: {
                type: Type.STRING,
                description: "The primary tech sector this news relates to (e.g., FinTech).",
              },
            },
            required: ["title", "summary", "sector"],
          },
        },
      },
    });
    
    const jsonText = response.text.trim();
    const data = JSON.parse(jsonText);
    return data as NewsItem[];
  } catch (error) {
    console.error("Error fetching tech news from Gemini API:", error);
    throw new Error("Failed to fetch Irish tech news. Please check your API key and network connection.");
  }
};
