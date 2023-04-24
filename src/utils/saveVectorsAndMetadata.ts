/**
 * Asynchronously saves vectors and metadata (labels) to tsv files in a 'dist' directory.
 * Creates the 'dist' directory if it doesn't exist.
 *
 * @async
 * @function saveVectorsAndMetadata
 * @param {number[][]} vectors - An array of arrays representing the vectors to be saved.
 * @param {string[]} labelsArray - An array of labels (metadata) corresponding to the vectors.
 * @example
 * const vectors = [
 *   [0.1, 0.2, 0.3],
 *   [0.4, 0.5, 0.6],
 *   // ...
 * ];
 * const labelsArray = ['label1', 'label2', ...];
 * await saveVectorsAndMetadata(vectors, labelsArray);
 * // Saves the data to 'dist/vectors.tsv' and 'dist/metadata.tsv'
 */
async function saveVectorsAndMetadata(
  vectors: number[][],
  labelsArray: string[]
) {
  const vectorList = vectors.map((vector) => vector.join("\t")).join("\n");
  const metadataList = labelsArray.join("\n");

  await Deno.mkdir("dist", { recursive: true });

  await Deno.writeTextFile("dist/vectors.tsv", vectorList);
  await Deno.writeTextFile("dist/metadata.tsv", metadataList);
}

export { saveVectorsAndMetadata };
