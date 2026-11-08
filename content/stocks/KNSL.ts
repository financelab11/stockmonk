import type { StockStory } from "./types";

export const KNSL: StockStory = {
  ticker: "KNSL",
  kicker: "Specialty Financials · Insurance - Property & Casualty",
  title: "Kinsale's premium growth stalled while its earnings multiple stayed at 87.4x",
  dek: "The latest quarter shrank 8.6% and the third-party consensus expects flat revenue for two years. A 33.7% operating margin against a 5.1% net margin explains why the earnings multiple is not what it appears.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $1.95B, up 8.3%, but the latest quarter fell 8.6%.",
    "Operating margin is 33.7% while net margin is 5.1%, so the gap below the operating line is large.",
    "Free cash flow is $973.0M, a 49.8% margin, and the P/FCF multiple is 8.9x against a P/E of 87.4x.",
    "Consensus estimates $1.94B of revenue in both the current and next fiscal year, implying no growth.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1669162/000166916226000015/knsl-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001669162&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Kinsale Capital Group is an excess and surplus lines insurer. It writes property and casualty cover for risks that standard, admitted insurers will not take: unusual construction, hospitality, small commercial property, professional liability and other non-standard exposures. The company was founded in 2009, is based in Richmond, Virginia, and employs about 329 people.",
      "The excess and surplus market works differently from the admitted market. Non-admitted carriers are not bound to filed rates, so they can price a risk on its own merits rather than within a state-approved schedule. That pricing freedom is the foundation of the business: Kinsale can charge what a difficult risk is worth, which is why a small insurer can earn a 33.7% operating margin.",
      "The financial profile is now at an inflection. Revenue grew from $653.5M in FY2021 to $1.87B in FY2025, with operating income rising from $188.8M to $634.3M over the same period. But the latest quarter fell 8.6% year over year, and the consensus expects no revenue growth at all over the next two years. A growth story has become a cycle story.",
    ],
    quote:
      "An insurer earns two ways: underwriting profit when premium exceeds claims and expenses, and investment income on the float held between collecting premium and paying claims.",
  },
  whatItDoes: {
    paragraphs: [
      "The product is admitted and surplus lines property and casualty insurance for small and mid-sized commercial accounts, sold through wholesale brokers and managing general underwriters. Kinsale does not have a large field force; it relies on a technology platform and a handful of underwriting offices to process a high volume of small submissions.",
      "That distribution choice matters. Wholesale brokers specialise in placing hard risks, so they bring Kinsale submissions that other carriers have declined. The company's underwriters then price them individually. The volume of submissions is a function of how many risks the standard market is refusing, which is why the business accelerates when admitted carriers retrench.",
      "The expense ratio reflects the operating model: 329 employees producing $1.87B of premium means a great deal of automation and a small, specialised underwriting team. That is the structural reason Kinsale can earn an underwriting profit at prices where a larger, more bureaucratic carrier would not.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Premium is collected up front. Claims are paid later. The difference between the two is the float, and the insurer earns investment income on it while it waits. On top of that, if premium exceeds claims and expenses, the company records an underwriting profit. The two together are the pre-tax return, which is why insurers are described as combining an underwriting business and an investment business.",
      "The core measure is the combined ratio: losses plus expenses divided by premium. Below 100% is an underwriting profit, above 100% is a loss covered by investment income. Kinsale's operating margin of 33.7% is consistent with a business that has been running comfortably below 100%, though the consolidated figure also includes investment returns.",
      "Reinsurance is the lever that shapes the risk. An insurer cedes part of its premium to reinsurers in exchange for protection against large or catastrophic losses. Ceding reduces both the upside and the volatility. A company of this size cannot retain unlimited exposure on a single property, so the reinsurance programme is a material part of the economics even though it does not appear as a headline metric.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded quickly: $653.5M, $838.8M, $1.22B, $1.59B and $1.87B across five years, with operating income rising from $188.8M to $634.3M. That is a rare combination of growth and margin expansion, and it was driven by a hard excess and surplus market in which admitted carriers withdrew from whole categories and left the pricing to specialists.",
      "The last two data points point the other way. Trailing revenue growth is 8.3%, the latest quarter fell 8.6%, and the consensus expects $1.94B in both the current and the next fiscal year. Eleven and twelve analysts contribute to those annual figures, and they are not forecasting a recovery within the horizon.",
      "The drivers to watch are submission flow, the pace of rate increases on renewals, and retention. When the admitted market recovers its appetite, submissions fall and renewal pricing flattens. That is the mechanism that would turn a growing insurer into a flat one, and the estimates suggest it is already happening.",
    ],
    bullets: [
      {
        title: "Submission flow",
        detail:
          "The volume of declined risks reaching wholesale brokers. It rises when admitted carriers pull back.",
      },
      {
        title: "Renewal pricing",
        detail:
          "Rate achieved on business that renews. Flat or negative pricing erodes premium even with stable policy counts.",
      },
      {
        title: "Retention",
        detail:
          "The share of policies that renew. A soft market tempts brokers to shop accounts elsewhere.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The operating margin has been remarkably stable for a specialty insurer: 35.8%, 36.0% and 36.2% in the three quarters of FY2025, then 29.9%, 40.1% and 27.2% in the last three. The variation in FY2026 reflects claims experience more than any change in the business.",
      "The net line is where the distortion sits. Trailing net margin is 5.1% against an operating margin of 33.7%, and Q4 FY2025 recorded a net loss of $287.7M while the operating margin in that quarter was 36.2%. A loss of that size against a positive operating result means a charge arrived below the operating line, and it is the reason the earnings multiple is so far from the cash multiple.",
      "A reader should treat the operating margin and the combined ratio as the measure of underwriting performance, and treat the net margin as something that can be moved by reserve actions and one-off items. For an insurer, the reserve estimate is the largest single judgement in the accounts.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is $973.0M on a trailing basis, a 49.8% margin, and the annual series has been strongly positive throughout: $401.1M, $550.9M, $853.2M, $952.4M and $990.1M. Insurance cash flow is structurally favourable because premium arrives before claims are paid.",
      "That is not the same as profit. The float is invested and the investment income is real, but the cash-flow statement also reflects the growth of reserves and the timing of claim payments. A shrinking insurer can produce strong cash flow for a period simply by writing less new business while collecting on old policies.",
      "The dataset does not provide a net debt figure. Interest cover of 38.4x suggests debt service is comfortably covered by operating earnings, and the balance sheet is dominated by the investment portfolio that backs the reserves rather than by corporate borrowings.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $383.73 the equity is worth $8.64B. The P/E is 87.4x, EV/EBITDA 47.8x, EV/sales 4.4x and price-to-free-cash-flow 8.9x. A 87.4x earnings multiple next to an 8.9x cash flow multiple is not a contradiction; it is a statement that the earnings denominator is depressed relative to the cash the business generates.",
      "For an insurer, the right comparison is price to book value against return on equity, and the combined ratio against its own history. The P/E is a poor guide when a single quarter contains a charge that does not reflect underwriting. The free cash flow multiple is closer to the economic reality, though it too is affected by reserve timing.",
      "Against its peers, Ryan Specialty trades at 62.0x earnings and 22.9x EV/EBITDA, Palomar at 8.1x earnings and 50.2x EV/EBITDA, and Evercore at 13.9x and 9.3x. The dispersion is wide because these are different businesses wearing the same sector label: a broker, an insurer and an advisory firm.",
    ],
  },
  analysts: {
    paragraphs: [
      "Nine analysts contribute to the attributed third-party consensus, with a mean target of $349.00 and a range of $285.00 to $405.00. The mean sits below the $383.73 close, which is a factual point worth stating plainly rather than smoothing over.",
      "Current-year estimates are $1.94B of revenue and EPS of $22.05, with next year at $1.94B and $21.88. Eleven and twelve analysts contribute to those figures, more than the nine behind the target. Flat revenue and slightly lower EPS is a forecast of a plateau, not a decline.",
      "Those are third-party forecasts, not a Stockmonk view. What they imply is that the market is not expecting the excess and surplus cycle to turn back in the company's favour within the next two years.",
    ],
  },
  risks: {
    intro:
      "Kinsale's risks are underwriting risks. The company has been profitable because it prices difficult risks well; the question is whether that discipline survives a softer market.",
    items: [
      {
        title: "Reserve adequacy",
        severity: "High",
        detail:
          "Loss reserves are estimates of claims that have not yet been paid. If prior-year reserves prove short, the charge lands against current earnings, as the Q4 FY2025 net loss shows.",
        watch:
          "Prior-year reserve development and the ratio of reserves to earned premium.",
      },
      {
        title: "Catastrophe exposure",
        severity: "High",
        detail:
          "Property and casualty cover carries concentration risk. A single event can exceed a quarter's underwriting profit.",
        watch:
          "Probable maximum loss disclosure and the structure of the reinsurance programme.",
      },
      {
        title: "The excess and surplus cycle",
        severity: "High",
        detail:
          "Growth depends on admitted carriers refusing risks. When they return, submissions and pricing both fall, and the latest quarter already shows an 8.6% decline.",
        watch:
          "Submission flow, renewal rate change and retention.",
      },
      {
        title: "Reinsurance availability and cost",
        severity: "Medium",
        detail:
          "The company cedes a large share of its risk. A harder reinsurance market raises the cost of protecting the book.",
        watch:
          "Cession ratios and the price of reinsurance at renewal.",
      },
      {
        title: "Concentration in small commercial accounts",
        severity: "Medium",
        detail:
          "A book built on many small policies is diversified by count but exposed to a common factor: small-business conditions.",
        watch:
          "Premium by line and by state, and any shift in the average policy size.",
      },
      {
        title: "Valuation on depressed earnings",
        severity: "Medium",
        detail:
          "At 87.4x earnings, the multiple depends on the net line recovering. If the charge in Q4 FY2025 recurs, the multiple stays high.",
        watch:
          "The gap between operating income and net income each quarter.",
      },
    ],
    watchlist: [
      {
        title: "Renewal rate change",
        detail:
          "The single best measure of pricing power in a softening market.",
      },
      {
        title: "Prior-year reserve development",
        detail:
          "Favourable development flatters earnings; adverse development is the fastest way to lose a year.",
      },
      {
        title: "Submission flow",
        detail:
          "The leading indicator of premium growth, ahead of written premium by a quarter or more.",
      },
      {
        title: "Net margin against operating margin",
        detail:
          "The gap explains why the P/E and the cash flow multiple disagree.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Kinsale is an excess and surplus lines insurer with $1.95B of trailing revenue, a 33.7% operating margin, a 5.1% net margin and $973.0M of free cash flow. It grew revenue from $653.5M to $1.87B in five years by writing risks the admitted market would not price.",
      "The growth has stopped. The latest quarter fell 8.6% and the consensus expects flat revenue for two years, which is what the end of a hard insurance cycle looks like. The company is still highly profitable on an operating basis; the question is how much of that margin survives when pricing power fades.",
      "The multiple confusion is instructive rather than mysterious. An 87.4x P/E and an 8.9x P/FCF describe the same company at the same price, and the difference is a charge below the operating line. A reader who wants to value an insurer has to look through that.",
    ],
    questions: [
      "What was prior-year reserve development in the last four quarters?",
      "How much rate was achieved on renewals in the latest quarter?",
      "What caused the Q4 FY2025 net loss, and is it recurring?",
      "How much of the book is ceded to reinsurers, and at what cost?",
    ],
  },
};
