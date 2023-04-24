import { readCSVFile } from "./readCSVFile.ts";

/**
 * Asynchronously processes all CSV files in a directory and extracts the 'label' and 'description' columns.
 * Returns an object containing arrays of labels and descriptions from the last processed CSV file.
 *
 * @async
 * @function processFiles
 * @param {string} dirPath - The path of the directory containing the CSV files.
 * @returns {Promise<{labelsArray: string[], descriptionsArray: string[]}>} - An object containing arrays of labels and descriptions from the last processed CSV file.
 * @example
 * const { labelsArray, descriptionsArray } = await processFiles("path/to/directory");
 * console.log(labelsArray); // ['label1', 'label2', ...]
 * console.log(descriptionsArray); // ['description1', 'description2', ...]
 */
async function processFiles(
  dirPath: string,
): Promise<{ labelsArray: string[]; descriptionsArray: string[] }> {
  let labelsArray: string[] = [];
  let descriptionsArray: string[] = [];

  for await (const entry of Deno.readDir(dirPath)) {
    if (entry.isFile && entry.name.endsWith(".csv")) {
      const filePath = `${dirPath}/${entry.name}`;
      const { labels, descriptions } = await readCSVFile(filePath);
      labelsArray = labels;
      descriptionsArray = descriptions;
    }
  }

  return { labelsArray, descriptionsArray };
}

export { processFiles };
