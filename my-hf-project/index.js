const { HfInference } = require("@huggingface/inference");

const inference = new HfInference("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");

(async () => {
  for await (const chunk of inference.chatCompletionStream({
    model: "meta-llama/Meta-Llama-3-8B-Instruct",
    messages: [{ role: "user", content: "List down chatgpt alternative free model with api" }],
    max_tokens: 100,
  })) {
    process.stdout.write(chunk.choices[0]?.delta?.content || "");
  }
})();