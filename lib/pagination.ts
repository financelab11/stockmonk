/**
 * Page numbers to render in a compact pagination control.
 * Always keeps the first and last page, plus a window around the current one,
 * inserting "gap" markers where pages are skipped.
 */
export function paginationWindow(
  current: number,
  total: number,
  span = 1,
): Array<number | "gap"> {
  if (total <= 0) return [];
  const safeCurrent = Math.min(Math.max(1, current), total);
  const pages = new Set<number>([1, total]);
  for (let page = safeCurrent - span; page <= safeCurrent + span; page += 1) {
    if (page >= 1 && page <= total) pages.add(page);
  }

  const ordered = [...pages].sort((a, b) => a - b);
  const output: Array<number | "gap"> = [];
  let previous = 0;
  for (const page of ordered) {
    if (previous && page - previous > 1) output.push("gap");
    output.push(page);
    previous = page;
  }
  return output;
}
