import { HfInference } from "@huggingface/inference";

const inference = new HfInference("hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");

for await (const chunk of inference.chatCompletionStream({
	model: "meta-llama/Meta-Llama-3-8B-Instruct",
	messages: [{ role: "user", content: "What is the capital of France?" }],
	max_tokens: 500,
})) {
	process.stdout.write(chunk.choices[0]?.delta?.content || "");
}
