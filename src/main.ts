import "https://deno.land/std@0.171.0/dotenv/load.ts";
import { OpenAIEmbeddings } from "npm:langchain/embeddings/openai";
import { processFiles } from "./csv/index.ts";
import { saveVectorsAndMetadata } from "./utils/saveVectorsAndMetadata.ts";

const OPENAI_API_KEY = Deno.env.get("OPENAI_API_KEY");

const embeddings = new OpenAIEmbeddings({
  openAIApiKey: OPENAI_API_KEY,
});

async function main() {
  const dirPath = "data";
  const { labelsArray, descriptionsArray } = await processFiles(dirPath);
  const vectors = await embeddings.embedDocuments(descriptionsArray);
  await saveVectorsAndMetadata(vectors, labelsArray);
}

main();
