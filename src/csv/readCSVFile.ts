/**
 * Asynchronously reads a CSV file and extracts the 'label' and 'description' columns.
 * Logs the extracted data and returns an object containing arrays of labels and descriptions.
 * Throws an error if the lengths of the labels and descriptions arrays are different.
 *
 * @async
 * @function readCSVFile
 * @param {string} filePath - The path of the CSV file to read.
 * @returns {Promise<{labels: string[], descriptions: string[]}>} - An object containing arrays of labels and descriptions.
 * @throws {Error} - If the lengths of the labels and descriptions arrays are different.
 * @example
 * const { labels, descriptions } = await readCSVFile("example.csv");
 * console.log(labels); // ['label1', 'label2', ...]
 * console.log(descriptions); // ['description1', 'description2', ...]
 */
async function readCSVFile(
  filePath: string,
): Promise<{ labels: string[]; descriptions: string[] }> {
  // Load CSV files
  const data = await Deno.readTextFile(filePath);

  // Convert to an array by splitting the text into lines
  const lines = data.trim().split("\n");
  const rows = lines.map((line) => line.split(","));

  // Get the column indexes for 'label' and 'description'
  const header = rows[0].map((col) => col.trim());
  const labelIndex = header.findIndex((col) => col.toLowerCase() === "label");
  const descriptionIndex = header.findIndex(
    (col) => col.toLowerCase() === "description",
  );

  // Store the values for 'label' and 'description' in separate arrays
  const labels = rows.slice(1).map((row) => row[labelIndex]);
  const descriptions = rows.slice(1).map((row) => row[descriptionIndex]);

  console.log(`Labels (${filePath}):`, labels);
  console.log(`Descriptions (${filePath}):`, descriptions);

  if (labels.length !== descriptions.length) {
    throw new Error("Labels and descriptions arrays have different lengths.");
  }

  return { labels, descriptions };
}

export { readCSVFile };
