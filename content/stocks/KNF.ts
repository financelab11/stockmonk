import type { StockStory } from "./types";

export const KNF: StockStory = {
  ticker: "KNF",
  kicker: "Industrials & Cyclicals · Aggregates and building materials",
  title: "Knife River owns the quarries, which is the only part of roadbuilding that is hard to copy",
  dek: "Crushed stone, asphalt and ready-mix concrete across six US regions. The trailing P/E of 1.3x is an accounting illusion, free cash flow is negative, and the real question is what the aggregate reserves are worth.",
  readingMinutes: 11,
  takeaways: [
    "Revenue reached $3.38B, up 10.9%, at an 8.1% operating margin.",
    "The 71.3% net margin and 1.3x P/E come from a large non-operating gain, not from operations.",
    "Free cash flow was negative $9.5M as capital spending and working capital absorbed earnings.",
    "Net debt of $1.38B is 2.8x EBITDA and EV/EBITDA of 9.3x is the multiple that matters.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1955520/000195552026000003/knf-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001955520&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Knife River mines and sells crushed stone, sand and gravel, turns some of it into asphalt and ready-mix concrete, and runs construction crews that pave roads and build sites. It reports six regional segments: Pacific, Northwest, Mountain, North Central, South and Energy Services. The company dates to 1917 and is based in Bismarck, North Dakota.",
      "The strategic asset is the reserve. A quarry is difficult to permit, unpopular with neighbours and expensive to open, and hauling aggregate more than a short distance destroys the economics because the product is heavy and cheap per ton. A company with a permitted pit near a growing city has a local advantage that no competitor can quickly replicate.",
      "The reported numbers need care. Revenue was $3.38B, up 10.9%, with an 8.1% operating margin. But net margin was 71.3% and the trailing P/E is 1.3x, which is only possible because net income includes a very large non-operating gain. Free cash flow was negative $9.5M. The operating business and the accounting result are telling different stories.",
    ],
    quote:
      "Aggregates are a permitted monopoly in miniature. The reserve is the asset, the haul distance is the moat, and the price of stone is set locally.",
  },
  whatItDoes: {
    paragraphs: [
      "The product ladder runs from raw aggregate to finished pavement. Aggregate is mined and sold by the ton to contractors, ready-mix plants and asphalt plants. Asphalt is produced in hot-mix plants and laid by paving crews. Ready-mix concrete is batched and delivered. Contracting services tie the whole chain together on highways, airports and site-development projects.",
      "The customer base is mostly public infrastructure, with private commercial and residential work filling the gaps. Energy Services serves oil and gas activity, which is a different cycle from roadbuilding and a reminder that the six segments are not all exposed to the same demand.",
      "Vertical integration matters here for the same reason it does in paving: the company captures the margin on the material as well as the margin on the construction. It also means a decline in public lettings hits both the material volume and the contracting revenue at once, which is why the cycle can bite hard.",
    ],
    bullets: [
      {
        title: "Aggregates",
        detail:
          "Crushed stone, sand and gravel from owned reserves. The highest-margin product and the reason the franchise has value.",
      },
      {
        title: "Asphalt and ready-mix",
        detail:
          "Processed materials sold to contractors and used in the company's own paving work.",
      },
      {
        title: "Contracting and Energy Services",
        detail:
          "Heavy-civil construction, paving and site work, plus services to oil and gas customers in the northern states.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The company earns a margin on every ton of stone it moves and a construction margin on every contract it performs. Gross margin was 17.5%, which is normal for a materials-and-contracting mix: aggregates carry high margins, but contracting revenue is low-margin pass-through work that dilutes the blended figure.",
      "Operating margin was 8.1%, and the gap between gross and operating margin is corporate overhead, selling costs and depreciation on the pits, plants and fleet. The capital intensity is the key difference from a pure service business: quarries and plants are expensive, and they must be maintained whether or not they run at full capacity.",
      "Pricing is the lever that matters most. Aggregate prices tend to rise faster than costs because the product is local and the alternative is a longer haul. When the company can raise prices, the margin expands; when public budgets are tight and competitors bid aggressively, it gives some back.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 9.0% a year from $2.23B in FY2021 to $3.15B in FY2025, then reached $3.38B on a trailing basis. Growth came from price, volume and acquisitions of local aggregate businesses. The latest quarter grew 6.0% year over year, a slower rate than the trailing figure.",
      "The quarterly pattern is dominated by the construction season. Q1 FY26 revenue was $410.1M with an operating margin of -21.0%, because winter in the northern states shuts down paving and the fixed costs remain. Q3 FY26 produced $1.28B of revenue at a 16.8% margin. The company earns most of its annual profit in two quarters.",
      "Third-party estimates call for $3.41B of revenue and $2.16 of EPS this fiscal year, then $3.53B and $3.24. Coverage is thin: one analyst for the current year and three for the next. The estimates are a reference point rather than a reliable consensus.",
    ],
    bullets: [
      {
        title: "Aggregate price",
        detail:
          "The most reliable growth lever. Local scarcity lets prices rise faster than inflation over time.",
      },
      {
        title: "Public infrastructure spending",
        detail:
          "Highway, airport and bridge budgets determine how much stone and paving work is let each year.",
      },
      {
        title: "Acquisitions",
        detail:
          "Buying local quarries and paving companies adds reserves and market density. Also adds debt.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a business with a stable operating margin and a volatile bottom line. Operating income was $191.1M in FY2021, $194.3M in FY2022, $296.4M in FY2023, $316.2M in FY2024 and $285.9M in FY2025. Revenue rose from $2.23B to $3.15B over the same period, so the FY2025 margin slipped even as the top line grew.",
      "The quarterly margins swing violently because of seasonality: 10.6% in Q2 FY25, 17.9% in Q3 FY25, 8.6% in Q4 FY25, -21.0% in Q1 FY26, 8.6% in Q2 FY26 and 16.8% in Q3 FY26. A single quarter tells you almost nothing about the business. The annual figure is the only sensible unit of analysis.",
      "Net income needs a warning. The reported net margin of 71.3% and the 1.3x P/E come from a gain large enough to dwarf operating profit, most likely a one-off item such as a sale or a tax benefit. Return on equity of 138.1% is the same artefact: the numerator is inflated, not the business. Return on invested capital of 6.9% is the honest measure.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $9.5M, a -0.3% margin, and FY2025 alone consumed $69.6M. The annual path went from $7.0M in FY2021 and $29.3M in FY2022 to $211.4M in FY2023, $149.9M in FY2024 and then negative. The swing reflects capital spending on quarries and equipment plus the working capital needed to carry inventory through the season.",
      "Net debt was $1.38B, or 2.8x EBITDA. That is a meaningful load for a seasonal business with an 8.1% operating margin. Interest costs are a fixed claim that arrives in every quarter, including the winter quarter when operating margin is negative.",
      "The cash-flow pattern is typical of an aggregate producer that is investing. A quarry opened today produces for decades, so capital spending is an investment in future volume rather than a maintenance cost. The question is whether the new capacity earns a return above the cost of capital, and the 6.9% ROIC suggests it has not yet.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $56.40 the trailing P/E is 1.3x, which is not a valuation at all; it is the residue of a one-off gain in net income. The usable multiples are 9.3x EV/EBITDA and 1.4x sales. Price to free cash flow is not available because free cash flow is negative.",
      "The peer table puts AAON at 17.0x EV/EBITDA, ROAD at 12.9x and MLI at 10.1x, with Knife River at 9.3x. The discount is consistent with a lower operating margin and higher leverage. For a business with 2.8x net debt and a 6.9% return on capital, a discount to the group is reasonable.",
      "The valuation is really a call on aggregate reserves and public construction budgets. If the reserves are long-lived and prices keep rising, 9.3x EBITDA is inexpensive. If the cycle turns and the leverage bites, it is not. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed third-party consensus includes 10 analysts with a mean target of $69.80 and a range of $54.00 to $89.00. The low end of the range is below the current share price, which is unusual and reflects genuine disagreement about the cycle.",
      "Estimates call for $3.41B of revenue and $2.16 of EPS this fiscal year, then $3.53B and $3.24. The next quarter is covered by a single analyst, and the following quarter by two, so the quarterly numbers are not a consensus in any meaningful sense.",
      "The fiscal-year estimate of $2.16 compares with trailing diluted EPS of $2.36, which itself is distorted by the one-off gain. The reader should treat the EPS figures as accounting outputs rather than as a clean measure of earning power. These are third-party views, not a Stockmonk rating.",
    ],
  },
  risks: {
    intro:
      "Knife River's risks are the physical facts of the business: weather, public budgets, aggregate permitting and a leveraged balance sheet. The accounting noise around net income makes those risks harder to see, not easier.",
    items: [
      {
        title: "Seasonality and weather",
        severity: "High",
        detail:
          "A northern winter shuts construction. Q1 FY26 had a -21.0% operating margin, and a wet spring can push work into the next quarter.",
        watch: "Quarterly revenue and margin against the same quarter a year earlier.",
      },
      {
        title: "Public construction budgets",
        severity: "High",
        detail:
          "Highway and infrastructure spending funds a large share of demand. A budget shortfall would hit volume and price at the same time.",
        watch: "State and federal letting schedules and backlog.",
      },
      {
        title: "Leverage",
        severity: "High",
        detail:
          "Net debt of $1.38B is 2.8x EBITDA. In a seasonal business, a weak summer would leave the ratio stretched.",
        watch: "Net debt to EBITDA and interest cover.",
      },
      {
        title: "Permitting and reserves",
        severity: "Medium",
        detail:
          "New quarries are hard to permit. A reserve that cannot be expanded limits growth in a market, and community opposition can delay a project for years.",
        watch: "Reserve life by market and permit approvals.",
      },
      {
        title: "Accounting quality",
        severity: "Medium",
        detail:
          "The 71.3% net margin and 1.3x P/E show how far reported earnings can diverge from operating reality. A reader who anchors on the P/E would misjudge the business entirely.",
        watch: "Operating income, EV/EBITDA and cash flow rather than net income.",
      },
    ],
    watchlist: [
      {
        title: "Aggregate pricing",
        detail:
          "Price per ton is the cleanest measure of whether the local franchise is strengthening.",
      },
      {
        title: "Free cash flow",
        detail:
          "Negative today. A return to positive would show the capital programme is paying off.",
      },
      {
        title: "Leverage",
        detail:
          "At 2.8x EBITDA, the balance sheet limits how much the company can buy or build.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Knife River owns a set of local aggregate franchises that are genuinely hard to replicate. Permitted reserves near growing markets, combined with asphalt and paving capacity, give it a cost advantage that shows up in a 17.5% gross margin and a mid-single-digit return on capital.",
      "The financial picture is less comfortable. Operating income fell in FY2025, free cash flow turned negative, and net debt is 2.8x EBITDA. The headline 1.3x P/E is an artefact of a one-off gain and should be ignored completely.",
      "What the reserves are worth, how much of the capital spending is growth versus maintenance, and whether aggregate prices can keep rising faster than costs: those decide the next few years. At 9.3x EBITDA the shares are not expensive, but the leverage and the seasonality mean the margin for error is thin.",
    ],
    questions: [
      "What was the one-off gain that produced the 71.3% net margin?",
      "How many years of permitted reserves does the company control in its key markets?",
      "Is the recent capital spending growth capex or maintenance?",
      "Can aggregate price increases outrun cost inflation through the next cycle?",
    ],
  },
};
