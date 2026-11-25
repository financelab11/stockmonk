/**
 * Explicit, reviewed gaps in an upstream dataset.
 *
 * A source gap is not treated as fresh. It is surfaced in the freshness
 * manifest and the health endpoint, and excluded from the strict daily gate
 * only until `reviewBy`. When the date passes, the audit fails again.
 */
export const SOURCE_GAPS: Record<
  string,
  { reason: string; since: string; reviewBy: string }
> = {
  // All previously tracked gaps are resolved: CRNX and ACLX are archived
  // acquisitions, and PSTG now maps to its live Everpure symbol.
};

export function isAcceptedSourceGap(
  ticker: string,
  today = new Date(),
): boolean {
  const gap = SOURCE_GAPS[ticker];
  if (!gap) return false;
  return today.toISOString().slice(0, 10) <= gap.reviewBy;
}
