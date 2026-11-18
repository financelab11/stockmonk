import type { StockStory } from "./types";

export const COHR: StockStory = {
  "ticker": "COHR",
  "kicker": "Photonics · Lasers and optical components",
  "title": "Coherent is spending more cash than it earns to supply the optical boom",
  "dek": "Operating income of $847.7M and free cash flow of negative $1.83B in the same year. The gap is capacity, and it decides whether the growth is worth having.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $7.9B trailing twelve months, +30.8% year over year.",
    "Profitability: 12.5% operating margin and 12.1% net margin.",
    "Cash: -$1.8B free cash flow, a -23.2% margin.",
    "Scorecard: 46/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/820318/000082031826000020/iivi-20260630.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000820318&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "COHERENT INC. generated $7.9B of revenue over the last twelve months, +30.8% versus the prior year. Growth is tied to AI data-center spending, and the key question is how much of that spending becomes durable recurring demand.",
      "The latest reported quarter was Q1 FY27, with $2.4B of revenue and an operating margin of 15.1%. The stock closed at $210.86 on 2026-11-17, giving a market capitalization of $41.5B.",
      "The shares sit 26% of the way up their 52-week range ($130.42 to $440.00). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "In a component shortage, the winning move is to add capacity before the orders arrive. That is also the move that turns a profitable year into a cash-consuming one."
  },
  "whatItDoes": {
    "paragraphs": [
      "The portfolio spans three broad areas with different cycles. Datacom and telecom photonics supplies the lasers and optical parts that transceiver makers assemble into the links between servers and between data centres. Industrial lasers sell into metal cutting, welding, marking and additive manufacturing, where demand follows industrial production and capital equipment cycles. The remaining businesses serve aerospace, defence, semiconductor equipment and scientific research, which are smaller and slower but carry long qualification cycles.",
      "The common thread is compound semiconductor manufacturing. Making a reliable laser requires growing crystal structures layer by layer, processing them in clean rooms and learning yields over years. That is why the industry has few credible suppliers and why capacity cannot be added quickly by a new entrant with capital.",
      "Coherent reports a single revenue line in the data, so the split between the AI-linked datacom business and the industrial businesses is not visible. That is a significant gap for a reader trying to judge how much of the 30.8% growth is cyclical recovery in industrial markets and how much is structural demand from data centres."
    ],
    "bullets": [
      {
        "title": "Datacom and telecom photonics",
        "detail": "Lasers and optical components for transceivers and network equipment. The AI-linked demand."
      },
      {
        "title": "Industrial lasers",
        "detail": "Cutting, welding, marking and additive manufacturing. Tied to factory investment, not to computing."
      },
      {
        "title": "Specialty and scientific",
        "detail": "Aerospace, defence, semiconductor equipment and research. Small, slow, and hard to displace once designed in."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Coherent sells components and subsystems by the unit. Prices decline as products mature, so revenue growth requires either more units or a move up the performance curve before the old part commoditises. Gross margin of 38.2% is lower than a fabless chip designer's because the company owns fabs, and it is higher than an assembler's because the process technology is difficult.",
      "The operating margin of 12.5% carries a large fixed cost base: fabrication, clean rooms, test and a long engineering cycle. That is why a 30.8% increase in revenue lifted the operating margin from a loss in FY2024 to double digits in FY2026. The incremental revenue carried far more margin than the average, which is the operating leverage mechanism at work.",
      "The capital intensity is the other half of the model. A laser fab is expensive, takes years to fill, and cannot be switched off cheaply in a downturn. The company therefore has to decide, years ahead of demand, how much capacity to build. When it guesses right, the margin expands and the revenue follows. When it guesses wrong, the depreciation arrives before the orders do."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 34.0% a year across the fiscal years in the dataset, and the latest quarter changed +49.9% year over year. Third-party estimates for the current fiscal year point to $11.2B of revenue and $10.41 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 12.5% and return on invested capital of 82.9% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 12.5%, the net margin is 12.1% and diluted EPS is $4.83. The latest quarter's operating margin was 15.1%.",
      "Return on equity is 102.3%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q1 FY27: revenue of $2.4B, an operating margin of 15.1% and a net margin of 16.2%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$1.8B, a -23.2% margin. Net debt is $9.1M.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was -$1.8B over the last twelve months and net debt was $9.1M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 43.4x trailing earnings and 33.1x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $371.92; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "25 analysts contribute to the third-party consensus. The mean target is $371.92, with a range of $228.00 to $524.96.",
      "Current-year estimates call for $11.2B of revenue and $10.41 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 25 analysts with a mean target of $371.92; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Coherent's risks are capacity timing, the opacity of its segment mix, and a set of reported figures that need reconstruction before they can be used.",
    "items": [
      {
        "title": "Capacity arriving into a pause",
        "severity": "High",
        "detail": "The company is spending heavily to add capacity. If demand pauses, the depreciation arrives without the revenue and the operating margin falls quickly.",
        "watch": "Capital expenditure, depreciation and the operating margin by quarter."
      },
      {
        "title": "Negative free cash flow",
        "severity": "High",
        "detail": "Negative $1.83B over the trailing period against positive operating income. The business is consuming cash while it grows.",
        "watch": "The gap between operating cash flow and capital expenditure, and whether it narrows as capacity completes."
      },
      {
        "title": "Industrial cyclicality",
        "severity": "Medium",
        "detail": "Industrial lasers and specialty markets follow factory investment, not data-centre spending. A manufacturing slowdown would offset datacom growth.",
        "watch": "The revenue split between datacom and industrial end markets."
      },
      {
        "title": "Reporting clarity",
        "severity": "Medium",
        "detail": "The published multiples do not reconcile with the reported EPS and market value. Until they do, valuation work rests on assumptions.",
        "watch": "Share count, market value and the reconciliation of the multiples in each filing."
      },
      {
        "title": "Optical component competition",
        "severity": "Medium",
        "detail": "Transceiver makers can qualify alternative laser suppliers, and vertical integration by the largest customers would remove a layer of demand.",
        "watch": "Design wins at transceiver makers and any in-house laser development by customers."
      }
    ],
    "watchlist": [
      {
        "title": "Capital expenditure",
        "detail": "The single line that separates a profitable growth year from a cash-consuming one."
      },
      {
        "title": "Operating margin",
        "detail": "The proof that higher revenue is carrying incremental margin rather than just filling a factory."
      },
      {
        "title": "Datacom share of revenue",
        "detail": "Without a segment split, the reader is guessing at how much of the growth is AI-related."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Coherent is a photonics manufacturer with $7.91B of trailing revenue growing 30.8%, an operating margin that has climbed to 15.1%, and no net debt. It is also consuming cash at a rate of 23.2% of revenue to build the capacity that the demand requires. Both facts are true and they describe the same strategy.",
      "The educational point is that operating profit and free cash flow answer different questions. Operating profit asks whether the product sells for more than it costs to make. Free cash flow asks whether the business can fund its own future. Coherent currently passes the first test and fails the second, which is normal for a manufacturer in the middle of an expansion and dangerous if the expansion is mistimed.",
      "What is not known is how much of the revenue comes from AI-linked datacom rather than industrial markets, when the capacity spending converts into cash, and why the published multiples disagree with the reported per-share figures. The AI build-out is a genuine source of demand for optical components; it does not tell a reader whether this particular capacity will earn its cost of capital."
    ],
    "questions": [
      "When does the capacity programme stop consuming cash, and at what margin does it break even?",
      "What share of revenue comes from datacom rather than industrial lasers?",
      "Why do the reported EPS and the published P/E point to different prices?",
      "If optical demand pauses for two quarters, how much of the new capacity sits idle?"
    ]
  }
};
