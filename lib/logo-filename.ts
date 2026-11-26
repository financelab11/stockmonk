/** Windows reserves CON and CON.* as device names. */
export function logoFileName(ticker: string): string {
  const normalized = ticker.toUpperCase();
  return normalized === "CON" ? "CON_" : normalized;
}
