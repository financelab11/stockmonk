import type { StockStory } from "./types";

export const GTLB: StockStory = {
  "ticker": "GTLB",
  "kicker": "Software & Cyber · Software development lifecycle",
  "title": "GitLab sells seats to developers, and developers are the part AI is changing",
  "dek": "Revenue grew 23.0% to $1.06B and free cash flow reached 20.3% of sales. The seat-based model is efficient until the number of seats stops growing.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $1.1B trailing twelve months, +23.0% year over year.",
    "Profitability: -8.5% operating margin and -5.1% net margin.",
    "Cash: $213.7M free cash flow, a 20.3% margin.",
    "Scorecard: 60/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001653482&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "GitLab Inc. generated $1.1B of revenue over the last twelve months, +23.0% versus the prior year. The model depends on net revenue retention, sales efficiency and the cost of acquiring the next customer.",
      "The latest reported quarter was Q2 FY27, with $286.3M of revenue and an operating margin of -19.9%. The stock closed at $44.58 on 2026-11-17, giving a market capitalization of $7.4B.",
      "The shares sit 66% of the way up their 52-week range ($18.73 to $58.01). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "GitLab charges per person who ships code. The cheaper it becomes to ship code without a person, the more the pricing model has to bend."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product is sold in tiers. A free version seeds the funnel and is genuinely usable, which is how the company reaches small teams without a sales call. Premium adds the collaboration and management controls that a growing engineering organisation needs. Ultimate adds security, compliance and portfolio features that large regulated buyers require.",
      "Customers range from two-person startups on the free tier to banks and public agencies running thousands of projects. Revenue is concentrated in larger accounts, because a per-seat product only becomes material when there are many seats. The company employs 2,170 people and reports a single revenue line with no segment or geography split in the dataset."
    ],
    "bullets": [
      {
        "title": "Free tier",
        "detail": "The distribution engine. It costs almost nothing to serve and produces the pipeline that sales later converts."
      },
      {
        "title": "Paid tiers",
        "detail": "Seat-based subscriptions where the upgrade from Premium to Ultimate is the main expansion lever inside an existing account."
      },
      {
        "title": "Hosting choice",
        "detail": "Self-managed installations for customers who cannot use a public cloud, and a hosted service for those who can. Self-managed carries lower delivery cost and slower feature delivery."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is a subscription per user per month, billed annually, with the tier determining the price. Gross margin is 85.8% because the software does the work and hosting is a small part of the cost base. Very few businesses convert revenue into gross profit this efficiently.",
      "The operating loss therefore comes entirely from what sits above gross profit: engineering to keep pace across an enormous feature surface, and a sales organisation that has to teach large buyers why one platform beats five tools. Both are largely fixed in the short term, which is why revenue growth is the variable that decides whether the model works.",
      "The seat model has a specific virtue and a specific weakness. The virtue is predictability: a customer's bill moves with headcount, which is slow and visible. The weakness is that the bill is tied to a number the customer actively tries to reduce when budgets tighten — and that AI tooling now targets directly."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 50.8% a year across the fiscal years in the dataset, and the latest quarter changed +21.3% year over year. Third-party estimates for the current fiscal year point to $1.1B of revenue and $0.87 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of -8.5% and return on invested capital of -5.2% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is -8.5%, the net margin is -5.1% and diluted EPS is -$0.32. The latest quarter's operating margin was -19.9%.",
      "Return on equity is -5.5%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY27: revenue of $286.3M, an operating margin of -19.9% and a net margin of -12.9%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $213.7M, a 20.3% margin. The balance sheet carries $1.3B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $213.7M over the last twelve months and net debt was -$1.3B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $56.29; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "24 analysts contribute to the third-party consensus. The mean target is $56.29, with a range of $45.00 to $70.00.",
      "Current-year estimates call for $1.1B of revenue and $0.87 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 24 analysts with a mean target of $56.29; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "GitLab's risks are competitive and structural. The balance sheet is strong and gross margin is high, so the threats are to pricing and to the unit being priced.",
    "items": [
      {
        "title": "Seat-based pricing and AI",
        "severity": "High",
        "detail": "If AI assistants reduce the number of developers needed for a given amount of output, a per-seat bill shrinks with headcount. The company needs AI features to raise price per seat faster than seats decline.",
        "watch": "Revenue per paid seat and the attach rate of AI add-ons."
      },
      {
        "title": "Bundling by larger platforms",
        "severity": "High",
        "detail": "Source control and CI are increasingly included in broader development platforms and cloud agreements. For a customer already inside one, the marginal cost of the bundled option is close to zero.",
        "watch": "Win rates in large accounts and discounting on renewals."
      },
      {
        "title": "Growth deceleration",
        "severity": "High",
        "detail": "The compound rate fell from 50.8% to 21.3% in the latest quarter. Further decay would change the valuation arithmetic quickly.",
        "watch": "Quarterly revenue growth and the free-to-paid conversion rate."
      },
      {
        "title": "Tier mix",
        "severity": "Medium",
        "detail": "Expansion depends on moving customers from Premium to Ultimate. If buyers stay on the cheaper tier, seat growth alone will not carry the revenue plan.",
        "watch": "The proportion of paid seats on the highest tier."
      },
      {
        "title": "One-off cost events",
        "severity": "Medium",
        "detail": "The swing from -6.0% to -19.9% operating margin in a single quarter shows how much a charge can distort a period.",
        "watch": "Operating margin excluding one-off items, and the cash-flow statement for confirmation."
      }
    ],
    "watchlist": [
      {
        "title": "Revenue per seat",
        "detail": "The single number that captures both the pricing power and the AI question."
      },
      {
        "title": "Operating margin excluding charges",
        "detail": "The underlying trend has been improvement; the reported quarters have been noisy."
      },
      {
        "title": "Free-cash-flow margin",
        "detail": "At 20.3% it already supports the valuation; the question is whether it holds through a weaker billing quarter."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "GitLab is a high-gross-margin subscription business with a large free funnel, a real enterprise customer base and enough cash to fund its own transition. It is also a per-seat business in a market where the number of seats is the variable under attack.",
      "The educational point is that revenue models carry embedded assumptions. A seat model assumes people; a consumption model assumes usage; a term licence assumes renewal. AI changes the first assumption most directly, which is why the product roadmap matters more here than the cost-cutting story.",
      "A reader should finish by asking whether consolidation into one platform is still the winning argument when the tools being consolidated are themselves being rebuilt around AI."
    ],
    "questions": [
      "How much revenue comes from seat growth versus tier upgrades?",
      "What share of customers pay for AI features today, and at what price?",
      "Does the free tier still convert at the same rate as it did two years ago?",
      "How much of the quarterly margin swing was a one-off charge?"
    ]
  }
};
