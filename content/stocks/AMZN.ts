import type { StockStory } from "./types";

export const AMZN: StockStory = {
  ticker: "AMZN",
  kicker: "Retail · Cloud infrastructure",
  title: "Amazon's retail scale funds a cloud and advertising profit pool",
  dek: "The headline is a low-margin retailer. The economics are a high-margin cloud and advertising business attached to the largest online store in the West.",
  readingMinutes: 12,
  takeaways: [
    "Revenue reached $797.5B on a trailing basis, up 15.4% year over year.",
    "North America is 59.5% of revenue; AWS is 18.0% but contributes a disproportionate share of profit.",
    "Operating margin is 13.1%, up from 2.4% in 2022.",
    "Free cash flow is negative on a trailing basis because AI capex is heavy.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm",
  irUrl: "https://ir.aboutamazon.com/",
  earningsReleaseUrl:
    "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000038/amzn-20260930xex991.htm",
  bigPicture: {
    paragraphs: [
      "Amazon is three businesses in one: a massive online and physical retailer, a cloud infrastructure provider and an advertising network. The retail operation generates the revenue and the customer relationships; AWS and advertising generate most of the profit.",
      "Trailing revenue reached $797.5B, up 15.4%. Operating margin has expanded from 2.4% in 2022 to 13.1%, a remarkable turnaround driven by cost discipline, advertising and AWS. The market has rewarded that margin story even as free cash flow turned negative.",
      "At $259.30, Amazon trades at 20.8x trailing earnings and 15.6x EV/EBITDA. Those multiples are moderate for a company with this growth profile, but the earnings base is still small relative to revenue, so small margin changes move the multiple a lot.",
    ],
    quote:
      "Amazon's valuation is a bet on the profit mix, not the revenue line. The retail business is the moat; AWS and advertising are the economics.",
  },
  whatItDoes: {
    paragraphs: [
      "The company reports three segments: North America, International and AWS. North America includes online stores, physical stores, advertising and Prime subscriptions. International is the same model outside North America. AWS sells compute, storage, databases and AI services.",
      "The segment split understates the profit concentration. North America is 59.5% of revenue, International 22.6% and AWS 18.0%, but AWS carries a much higher operating margin and advertising is embedded inside the retail segments.",
      "Amazon's logistics network is a strategic asset. It has moved from relying on third-party carriers to delivering a large share of its own packages, which improves speed and control but adds fixed cost.",
    ],
    bullets: [
      {
        title: "North America",
        detail:
          "59.5% of revenue. Online and physical retail, Prime, advertising and the logistics network.",
      },
      {
        title: "International",
        detail:
          "22.6% of revenue. A long-duration growth market with mixed profitability.",
      },
      {
        title: "AWS",
        detail:
          "18.0% of revenue. Cloud infrastructure and AI services, and the main profit engine.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Retail earns a thin margin on the products it sells and a much better margin on advertising and Prime subscriptions. AWS earns a software-like margin on infrastructure usage. The consolidated margin is therefore a function of mix: every point of AWS or advertising growth lifts profitability.",
      "The United States is 68.3% of revenue, non-US 15.0%, Germany 6.4% and the United Kingdom 6.0%. The geographic mix is more US-centric than Alphabet's or Apple's, which reduces currency risk but concentrates regulatory and consumer exposure.",
      "Advertising is the hidden profit pool. It is recorded inside the retail segments and grows with traffic and Prime engagement, but it does not require the same capital as fulfillment.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew from $280.5B in 2019 to $716.9B in 2025, a 16.9% compound annual growth rate. The latest quarter, Q3 2026, grew 12.1% to $201.9B, a slower rate than the AI-infrastructure names but on a much larger base.",
      "The attributed consensus expects $829.0B of revenue this fiscal year, up 15.6%, and $959.6B next year, up 15.8%. EPS is expected to be $12.80 this year and $10.67 next year; the decline reflects normalisation of one-time items and investment.",
      "The growth drivers are AWS AI workloads, advertising, Prime engagement and international retail. The risk is that AWS growth decelerates while capex remains elevated, which would compress free cash flow further.",
    ],
    bullets: [
      {
        title: "AWS AI workloads",
        detail:
          "Enterprise AI training and inference are incremental cloud demand, but AWS faces intense competition from Azure and Google Cloud.",
      },
      {
        title: "Advertising",
        detail:
          "Sponsored products and streaming ads monetise existing traffic at high incremental margins.",
      },
      {
        title: "Prime and logistics",
        detail:
          "Faster delivery and subscription bundles increase purchase frequency and retention.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin is 13.1%, net margin 16.9% and return on invested capital 12.3%. The net margin is higher than the operating margin because of non-operating gains; operating margin is the cleaner measure of the business.",
      "The margin trajectory is the story: 5.2% in 2019, 2.4% in 2022, 10.8% in 2024 and 13.1% on a trailing basis. Cost discipline in fulfillment and the mix shift toward AWS and advertising explain most of the improvement.",
      "Diluted EPS was $7.17 in 2025. The consensus expects $12.80 this year and $10.67 next year. The volatility in EPS is partly due to investment gains and losses, so operating income is the better anchor.",
    ],
  },
  cash: {
    paragraphs: [
      "Amazon generated negative free cash flow of $46.9B on a trailing basis, a -5.9% margin. Capital expenditure is enormous because the company is building AI data centers and fulfillment capacity at the same time.",
      "The balance sheet carries $58.9B of net debt. That is manageable against EBITDA, but it is a different profile from Microsoft or Alphabet, which hold net cash.",
      "The cash-flow statement is the key risk monitor. Amazon has historically invested through low-FCF periods and then reaped the benefits, but the AI capex cycle is larger and more competitive than previous waves.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $259.30, Amazon trades at 20.8x trailing earnings and 15.6x EV/EBITDA. The earnings multiple is moderate, but the free-cash-flow multiple is negative, so investors are effectively valuing the business on EBITDA and future cash flow.",
      "The market is pricing a continued mix shift toward AWS and advertising. If that happens, the earnings base grows into the multiple. If AWS growth slows while capex stays high, the valuation looks less comfortable.",
      "Stockmonk does not publish a target price. The attributed consensus mean is shown in the next section as third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus includes 59 analysts with a mean target of $326.99. The recommendation mix is strongly positive. Estimates call for $829.0B of revenue this fiscal year and EPS of $12.80.",
      "The following year's EPS estimate of $10.67 is lower, which reflects the difficulty of forecasting a business with large investment gains and losses. Revenue estimates are the more stable signal.",
      "A high mean target is not a Stockmonk rating. It is a snapshot of sell-side expectations for the same AWS and retail margin debate.",
    ],
  },
  risks: {
    intro:
      "Amazon's risks are capital intensity, competition and margin mix. The retail business is durable; the question is how much profit it converts.",
    items: [
      {
        title: "Negative free cash flow",
        severity: "High",
        detail:
          "Capex is running ahead of operating cash flow. A prolonged investment cycle without matching revenue growth would pressure the valuation.",
        watch:
          "Capital expenditure guidance and the gap between operating cash flow and capex.",
      },
      {
        title: "AWS competition",
        severity: "High",
        detail:
          "Microsoft and Google are aggressive in AI cloud. AWS's growth premium and pricing power are not guaranteed.",
        watch:
          "AWS growth relative to Azure and Google Cloud, and segment operating margin.",
      },
      {
        title: "Retail margin pressure",
        severity: "Medium",
        detail:
          "Fulfillment, labor and delivery costs can absorb the benefits of advertising growth.",
        watch:
          "North America operating margin and cost per package.",
      },
      {
        title: "Regulation",
        severity: "Medium",
        detail:
          "Antitrust and labor rules could affect marketplace practices, Prime bundling and logistics.",
        watch:
          "US and EU antitrust proceedings and labor classification rules.",
      },
      {
        title: "Consumer cyclicality",
        severity: "Low",
        detail:
          "Retail revenue is exposed to consumer spending, though Prime and essentials provide some stability.",
        watch:
          "Consumer confidence and discretionary category growth.",
      },
    ],
    watchlist: [
      {
        title: "AWS growth",
        detail:
          "The main profit engine and the cleanest read on AI cloud demand.",
      },
      {
        title: "Capex versus operating cash flow",
        detail:
          "The crossover point determines when free cash flow recovers.",
      },
      {
        title: "Advertising revenue",
        detail:
          "High-margin revenue that improves the consolidated mix without heavy capital.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Amazon is a scaled retailer with two high-margin engines attached. The operating margin turnaround since 2022 is real, and the balance sheet can support the investment cycle.",
      "The educational point is that revenue growth and profit growth are not the same thing. Amazon's revenue is enormous, but the valuation depends on the mix shift toward AWS and advertising and on the capex cycle eventually normalising.",
      "The key questions are how fast AWS grows, how much capex the AI build requires, and whether retail margins can keep expanding.",
    ],
    questions: [
      "What share of operating income comes from AWS?",
      "When does capex peak as a share of revenue?",
      "How much advertising revenue is embedded in the retail segments?",
      "What happens to the valuation if AWS growth falls to 15%?",
    ],
  },
};
