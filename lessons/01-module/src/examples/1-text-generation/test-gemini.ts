import { GoogleGenAI } from "@google/genai";
import {
  loadEnvironment,
  getApiKey,
  displayResult,
} from "../../utils/helpers";

loadEnvironment();

async function main(): Promise<void> {
  try {
    // 1. Inicializa o cliente do Gemini com a API Key
    const ai = new GoogleGenAI({ apiKey: getApiKey("GEMINI_API_KEY") });

    // 2. Define o modelo (equivalente ao modelName do GitHub Models)
    const modelName = process.env.GEMINI_CHAT_MODEL || "gemini-2.0-flash";

    // 3. Combina as mensagens system e user em um único prompt
    const systemMessage = "You are a helpful assistant.";
    const userMessage = "What is the capital of France?";
    const combinedPrompt = `${systemMessage}\n\nUser: ${userMessage}`;

    // 4. Gera o conteúdo usando a nova API
    const response = await ai.models.generateContent({
      model: modelName,
      contents: combinedPrompt,
    });

    // 5. Exibe o resultado
    displayResult("Gemini API - Text Generation", response.text);
  } catch (error) {
    console.error("Erro:", error instanceof Error ? error.message : error);
  }
}

main();