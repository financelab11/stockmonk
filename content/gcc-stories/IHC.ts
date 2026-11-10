import type { StockStory } from "@/content/stocks/types";

export const internationalHolding: StockStory = {
  ticker: "IHC",
  kicker: "United Arab Emirates · Diversified holding",
  title: "International Holding Company: Abu Dhabi's listed conglomerate",
  dek:
    "IHC is one of the largest listed holding companies in the region, with a portfolio spanning real estate, healthcare, food, industrials and financial services. Revenue has compounded rapidly through acquisitions, but the holding-company discount and related-party complexity are central to the story.",
  readingMinutes: 9,
  takeaways: [
    "TTM revenue of AED 133.8bn and net income of AED 32.8bn, with an 11.9% return on equity.",
    "Revenue grew from AED 28.6bn in 2021 to AED 111.4bn in 2025, largely through acquisitions and portfolio expansion.",
    "The balance sheet is large — AED 275bn of equity — but returns are diluted by the holding structure and minority interests.",
    "At 21.3x earnings and 27.8x EV/EBITDA, the shares trade at a premium to the sum of the operating businesses.",
    "Consensus coverage is limited for a company of this size, reflecting the holding-company structure rather than the quality of the assets.",
  ],
  filingUrl: "https://stockanalysis.com/quote/adx/IHC/financials/",
  irUrl: "https://www.ihcuae.com",
  bigPicture: {
    paragraphs: [
      "International Holding Company is the listed vehicle through which Abu Dhabi's Royal Group holds a diversified portfolio of businesses. It owns or controls companies in real estate and construction, healthcare, food and agriculture, industrials, financial services and technology. The group has grown rapidly by acquiring stakes and rolling them into the listed entity.",
      "The equity is a conglomerate, not an operating company. Its value depends on the sum of its holdings, the quality of capital allocation and the discount the market applies to the structure. Revenue growth tells you the portfolio is expanding; it does not tell you whether shareholders are getting good value for the acquisitions.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "IHC's portfolio spans listed and unlisted businesses. Real estate and construction are significant, alongside healthcare, food, industrial services and financial investments. The group also holds stakes in other Abu Dhabi listed companies, including Alpha Dhabi, which creates a layered ownership structure.",
      "The operating companies are managed with varying degrees of autonomy. IHC sets strategy, allocates capital and provides access to financing, while the subsidiaries run their own businesses. That model can create value when the parent buys assets cheaply and improves them; it can also obscure performance.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the sum of the consolidated operating businesses, which is why it has grown so quickly through acquisitions. Profitability depends on the mix: real estate and construction are lower-margin, healthcare and consumer businesses are higher-margin, and investment income can swing the bottom line.",
      "The reported operating margin of 14.8% and net margin of 24.5% are not directly comparable across a conglomerate, because net income includes share of results from associates and investment gains. Investors should look at the underlying operating companies and the cash they generate, not just the consolidated headline.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from AED 28.6bn in 2021 to AED 111.4bn in 2025, and the trailing twelve months show AED 133.8bn, up 40.3%. That growth is mostly acquisition-led rather than organic, which means it is not a clean measure of the underlying businesses' performance.",
      "The next leg depends on integrating the portfolio, improving returns at the operating companies and making selective disposals. The group has signalled interest in AI, healthcare and food security, but the market will judge it on returns on invested capital rather than on the size of the portfolio.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income has been volatile: AED 7.3bn in 2021, AED 12.7bn in 2022, AED 27.5bn in 2023, AED 15.8bn in 2024 and AED 21.7bn in 2025. The 2023 spike reflected gains and consolidation effects; the lower 2024 figure shows how quickly the headline can change.",
      "Return on equity was 11.9% on a trailing basis, modest for a company trading at a premium to book. That gap — high multiple, moderate returns — is the central valuation question.",
    ],
  },
  cash: {
    paragraphs: [
      "The group carries AED 113.9bn of debt and AED 76.6bn of cash, with AED 275bn of equity. Free cash flow was only AED 1.4bn on a trailing basis, which is thin relative to the size of the balance sheet and the acquisition programme.",
      "The dividend is not a meaningful part of the story. IHC is a capital-allocation vehicle, and shareholders are relying on the value created by acquisitions and portfolio management rather than on cash distributions.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 320.20 the shares trade at 21.3x trailing earnings and 27.8x EV/EBITDA. Those multiples are high for a diversified holding company and imply that the market values the portfolio at a premium to its parts.",
      "Consensus coverage is sparse, and the holding-company structure makes a conventional target price less meaningful. The key valuation exercise is a sum-of-the-parts analysis of the listed stakes plus the operating businesses, adjusted for debt and the discount the market applies to the parent.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sell-side coverage is limited for a company of this size because the portfolio is complex and the disclosures are not always comparable to a single-sector peer. Investors rely more on the group's own reporting and on the valuations of its listed holdings.",
      "The main debate is capital allocation: whether the acquisitions have been made at returns above the cost of capital, and whether the parent's discount will narrow as the portfolio matures.",
    ],
    bullets: [
      { title: "Coverage", detail: "Thin sell-side coverage; the group's listed stakes provide the clearest valuation anchors." },
      { title: "Structure", detail: "Holding-company discount depends on governance and capital allocation." },
      { title: "Returns", detail: "ROE of 11.9% and ROIC of 5.0% on a trailing basis." },
    ],
  },
  risks: {
    intro:
      "The risks are structural: related-party complexity, capital allocation and valuation.",
    items: [
      {
        title: "Related-party and governance complexity",
        severity: "High",
        detail:
          "The group's ownership structure and related-party transactions make it harder to assess the true economics of each business.",
        watch: "Related-party disclosures, board independence, minority interests.",
      },
      {
        title: "Capital allocation",
        severity: "High",
        detail:
          "Acquisition-led growth only creates value if the returns exceed the cost of capital. The track record is short.",
        watch: "ROIC, acquisition multiples, disposals.",
      },
      {
        title: "Holding-company discount",
        severity: "Medium",
        detail:
          "Conglomerates often trade below the sum of their parts. The current premium makes that risk asymmetric.",
        watch: "Sum-of-the-parts, listed stake values.",
      },
      {
        title: "Portfolio concentration",
        severity: "Medium",
        detail:
          "Real estate and construction are cyclical, and a few large holdings dominate the value.",
        watch: "Sector mix, top holdings, Abu Dhabi property cycle.",
      },
    ],
    watchlist: [
      { title: "Portfolio returns", detail: "ROIC and cash generation at the operating companies." },
      { title: "Acquisitions and disposals", detail: "Prices paid and assets sold." },
      { title: "Related-party disclosures", detail: "Governance and minority protection." },
      { title: "Listed stakes", detail: "Value of Alpha Dhabi and other holdings." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "IHC is a large, acquisition-driven conglomerate with a portfolio of real Abu Dhabi businesses and a premium valuation. The quality of the individual assets is not in doubt; the question is whether the holding structure and the price paid for growth create value for shareholders.",
      "The shares are best approached as a sum-of-the-parts exercise rather than on the consolidated earnings multiple. Until returns on invested capital improve and the governance complexity is reduced, the premium is difficult to justify on fundamentals alone.",
    ],
    questions: [
      "What is the market value of the listed stakes versus the parent's market cap?",
      "What returns have the acquisitions earned on invested capital?",
      "How much of net income is recurring versus investment gains?",
      "Will the group simplify the structure or keep adding holdings?",
    ],
  },
};
