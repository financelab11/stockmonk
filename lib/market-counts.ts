import "server-only";

import { getGccUniverse } from "./gcc-data";
import { getIndiaUniverse } from "./india-data";
import { getUniverse } from "./data";

/** Company counts for the market switcher; each getter is cached. */
export function getMarketCounts(): { US: number; IN: number; GCC: number } {
  return {
    US: getUniverse().length,
    IN: getIndiaUniverse().length,
    GCC: getGccUniverse().length,
  };
}
