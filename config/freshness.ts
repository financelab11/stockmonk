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
  ACLX: {
    reason:
      "No current Yahoo quote; last available close is 2026-04-28. Verify the listing and corporate-action history.",
    since: "2026-04-28",
    reviewBy: "2026-12-31",
  },
  CRNX: {
    reason:
      "Yahoo price history stops at 2026-09-01. Verify whether the listing changed or the ticker mapping is stale.",
    since: "2026-09-01",
    reviewBy: "2026-12-31",
  },
  PSTG: {
    reason:
      "Company now reports as Everpure; Yahoo history under PSTG stops at 2026-04-16. Verify the ticker mapping.",
    since: "2026-04-16",
    reviewBy: "2026-12-31",
  },
};

export function isAcceptedSourceGap(
  ticker: string,
  today = new Date(),
): boolean {
  const gap = SOURCE_GAPS[ticker];
  if (!gap) return false;
  return today.toISOString().slice(0, 10) <= gap.reviewBy;
}
