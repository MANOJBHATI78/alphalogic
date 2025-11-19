import { GoogleGenAI } from "@google/genai";

// Helper to safely get API key
const getApiKey = (): string | undefined => {
  return process.env.API_KEY;
};

export const getAiSeoAdvice = async (query: string): Promise<string> => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    return "I'm currently disconnected from my brain (API Key missing). Please check back later!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-2.5-flash for speed
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a senior SEO and Web Development consultant for Alphalogic, a premium digital agency in Surat. 
      The user is asking: "${query}". 
      Provide a short, punchy, and professional answer (max 3 sentences). 
      Focus on value. Tone: Helpful, Expert, Human.`,
    });

    return response.text || "I couldn't generate a response at this moment. Please contact our team directly!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble thinking right now. Please try again or contact our human experts.";
  }
};