import OpenAI from "openai";
import {
  loadEnvironment,
  getApiKey,
  getEndpoint,
  displayResult,
} from "../../utils/helpers";

loadEnvironment();

async function main(): Promise<void> {
  try {
    const token = getApiKey("GITHUB_MODELS_TOKEN");
    const endpoint = getEndpoint("GITHUB_MODELS_ENDPOINT");
    const modelName = process.env.GITHUB_MODELS_NAME || "";

    const client = new OpenAI({ baseURL: endpoint, apiKey: token });

    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "What is the capital of France?" }
      ],
      temperature: 1.0,
      top_p: 1.0,
      max_tokens: 1000,
      model: modelName
    });

    displayResult("GitHub Models - OpenAI Client", response.choices[0].message.content);
  } catch (error) {
    console.error("Erro:", error instanceof Error ? error.message : error);
  }
}

main();