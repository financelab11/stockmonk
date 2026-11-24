export type StoryBlock = {
  paragraphs: string[];
  bullets?: Array<{ title: string; detail: string }>;
  quote?: string;
};

export type RiskItem = {
  title: string;
  severity: "High" | "Medium" | "Low";
  detail: string;
  watch: string;
};

export type StockStory = {
  ticker: string;
  kicker: string;
  title: string;
  dek: string;
  readingMinutes: number;
  takeaways: string[];
  filingUrl: string;
  irUrl: string;
  earningsReleaseUrl?: string;
  /** How the narrative was produced and when it was last written by hand. */
  narrativeSource?: "handwritten" | "curated" | "generated";
  narrativeUpdatedAt?: string;
  bigPicture: StoryBlock;
  whatItDoes: StoryBlock;
  howItMakesMoney: StoryBlock;
  growth: StoryBlock;
  performance: StoryBlock;
  cash: StoryBlock;
  valuation: StoryBlock;
  analysts: StoryBlock;
  risks: {
    intro: string;
    items: RiskItem[];
    watchlist: Array<{ title: string; detail: string }>;
  };
  bottomLine: {
    paragraphs: string[];
    questions: string[];
  };
};
