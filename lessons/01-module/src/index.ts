import { loadEnvironment, displayResult } from "./utils/helpers";

// Carrega as variáveis de ambiente
loadEnvironment();

// =====================================================
// CONFIGURAÇÃO DE EXECUÇÃO
// =====================================================
// Descomente a linha do exemplo que você quer executar:

async function main() {
  console.log("🚀 LangChain TypeScript Environment Ready!");
  console.log("=".repeat(50));

  // Exemplos disponíveis:
  console.log("📁 Exemplos disponíveis:");
  console.log(
    "1. Hello World: npx ts-node src/examples/1-fundamentos/1-hello_world.ts"
  );
  console.log("2. Adicione mais exemplos aqui...");

  console.log("\n🔧 Para executar:");
  console.log("- npm run dev (executa este arquivo)");
  console.log("- npm run watch (modo watch)");
  console.log("- npx ts-node <caminho-do-arquivo>");

  // Descomente para executar um exemplo específico:
  // await import("./examples/1-fundamentos/1-hello_world");

  console.log("=".repeat(50));
}

main().catch(console.error);
