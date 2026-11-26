/**
 * On-disk evidence filename. `CON` is a valid US ticker but a reserved Windows
 * device name, so the public ticker stays `CON` and only the file name changes.
 */
export function scoreEvidenceFileName(ticker: string): string {
  const normalized = ticker.toUpperCase();
  return normalized === "CON" ? "CON_" : normalized;
}
