import { GoogleGenAI } from "@google/genai";

const apiKey = "AIzaSyCPFzCSOJW1qATuATHLlypAW5GhAj-2I-s";
const ai = new GoogleGenAI({ apiKey: apiKey });

export async function translate(contents) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: contents,
  });
  return response.text;
}
