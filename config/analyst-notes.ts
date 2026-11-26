/**
 * Company-specific analyst notes for names where the original angle did not
 * include a moat, risk and catalyst. These are merged over COMPANY_ANGLES at
 * generation time so every section can lean on a specific judgement rather
 * than a shared sector template.
 */
export type AnalystNote = {
  moat: string;
  risk: string;
  catalyst: string;
};

import { ANALYST_NOTES_1 } from "./analyst-notes-1";
import { ANALYST_NOTES_2 } from "./analyst-notes-2";
import { ANALYST_NOTES_3 } from "./analyst-notes-3";
import { ANALYST_NOTES_5 } from "./analyst-notes-5";
import { ANALYST_NOTES_6 } from "./analyst-notes-6";
import { ANALYST_NOTES_7 } from "./analyst-notes-7";
import { ANALYST_NOTES_8 } from "./analyst-notes-8";
import { ANALYST_NOTES_9 } from "./analyst-notes-9";

export const ANALYST_NOTES: Record<string, AnalystNote> = {
  ...ANALYST_NOTES_1,
  ...ANALYST_NOTES_2,
  ...ANALYST_NOTES_3,
  ...ANALYST_NOTES_5,
  ...ANALYST_NOTES_6,
  ...ANALYST_NOTES_7,
  ...ANALYST_NOTES_8,
  ...ANALYST_NOTES_9,
};
