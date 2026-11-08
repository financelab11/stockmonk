import type { StockStory } from "./types";

export const MNDY: StockStory = {
  ticker: "MNDY",
  kicker: "Software & Cyber · Work management",
  title: "monday.com has $1.7B of cash and a per-seat model to defend",
  dek: "Revenue grew 26.7% to $1.23B and the operating line reached breakeven. The open question is whether a bill that scales with headcount survives a market where AI does more of the work.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was $1.23B, up 26.7%, with the growth rate lower every year since FY2021.",
    "Gross margin of 89.2% is the highest in the peer group, and the operating margin is -0.1%.",
    "Free cash flow was $313.3M at a 25.4% margin, against net cash of $1.67B and a $4.5B market capitalisation.",
    "The shares have fallen 51.4% over one year and sit 23% of the way up a 52-week range of $57.50 to $190.72.",
  ],
  filingUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001845338&type=10-K&dateb=&owner=include&count=40",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001845338&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "monday.com sells a workspace where a team builds the tool it needs: a board for a sales pipeline, a tracker for a hiring process, a schedule for a product launch. The building blocks are the same in every case — columns, automations, dashboards, integrations — and the customer assembles them without writing code. Over time the company has packaged those blocks into named products for work management, customer relationship management and software development.",
      "The commercial model is a subscription per user per month, sold in tiers and in monthly or annual terms. A small team can start on a cheap plan with a credit card and no sales contact, which is how the company reaches thousands of customers that no enterprise sales force could afford to call on.",
      "Trailing revenue is $1.23B, up 26.7%. The shares closed at $87.93 for a $4.5B market capitalisation. The quarterly table in the dataset is empty for this company — every quarter shows n/a — so the annual figures carry the whole analysis, and the most recent quarterly detail comes only from the consensus estimates.",
    ],
    quote:
      "Work management is bought by a team, renewed by a department and abandoned for a spreadsheet. The model turns on whether the first team expands or stalls.",
  },
  whatItDoes: {
    paragraphs: [
      "The customer base spans small businesses buying a handful of seats and enterprises deploying thousands. The low end is served by self-service: a free trial, a card payment, an onboarding template. The high end is served by a sales team that sells governance, security controls and the integration work needed to connect the workspace to a company's identity and data systems.",
      "That dual motion is the defining feature of the business. It gives monday.com a very large addressable market and a low cost of acquiring the smallest customers, while exposing it to the churn that comes with small customers. The company employs 1,549 people and is headquartered in Tel Aviv, reporting in dollars.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Each user on a paid plan generates a monthly subscription, and the tier determines the feature set and the price. Gross margin is 89.2%, the highest in the peer group, because the product is hosted software with no hardware, no implementation services of consequence and no data-processing cost that scales badly. Almost every dollar of revenue after hosting falls through to gross profit.",
      "The operating margin is -0.1%, so essentially all of that gross profit is spent on sales, marketing and engineering. That is a deliberate choice rather than a structural problem: the company has been buying growth with paid acquisition and a large sales team, and the 25.4% free-cash-flow margin shows the underlying business produces cash while doing it.",
      "The risk embedded in the model is the monthly plan. A customer on a monthly contract can leave in thirty days, and small teams do. Annual contracts and larger accounts are what convert a fast-growing revenue line into a durable one, which is why the mix between the two matters more here than the headline growth rate.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $308.1M in FY2021 to $519.0M, $729.7M, $972.0M and $1.23B in FY2025. The absolute additions kept rising while the percentage rate fell every year. That is the normal shape of a maturing subscription business, and it is also the point where the market stops paying for growth and starts asking about margin.",
      "Consensus estimates call for $369.2M next quarter and $385.7M the quarter after, $1.47B for this fiscal year and $1.69B next, with EPS of $5.50 and $6.70. Those are the only quarterly figures available for this company in the dataset.",
      "The growth levers are product breadth and geography. Selling a second product into an existing account is cheaper than finding a new one, and the CRM and development products exist to make that possible. International expansion works the same way: the product is already translated and hosted, so a new market costs marketing rather than engineering.",
    ],
  },
  performance: {
    paragraphs: [
      "The five-year operating path is -$126.1M, -$152.0M, -$38.6M, -$21.0M and -$1.7M. The improvement from FY2022 to FY2025 is the whole story of the company's maturity: revenue more than doubled while the operating loss shrank to almost nothing.",
      "Three profit measures say different things and should be read together rather than interchangeably.",
      "Net margin is 9.6% and diluted EPS is $2.24, both above what the operating result would suggest. The FY2025 net income of $118.7M against an operating loss of $1.7M means most of the profit came from below the operating line — interest earned on a large cash balance, most likely. Return on invested capital is 8.5%, which is a modest return on a business with an 89.2% gross margin and reflects how much cash sits idle on the balance sheet.",
    ],
    bullets: [
      {
        title: "Gross margin, 89.2%",
        detail:
          "What the product earns before the cost of selling it. Very few software companies reach this level.",
      },
      {
        title: "Operating margin, -0.1%",
        detail:
          "What is left after sales, marketing and engineering. Effectively breakeven, which is new for this company.",
      },
      {
        title: "Free-cash-flow margin, 25.4%",
        detail:
          "Cash collected in advance against costs recognised over time. The most flattering of the three, and the reason the company can fund growth from its own operations.",
      },
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow went from $4.8M in FY2021 to $11.1M, $207.5M, $297.9M and $313.3M. The jump in FY2023 came while the operating loss was still $38.6M, which is the clearest illustration of how annual prepayment can make a loss-making company cash-generative.",
      "Net cash is $1.67B against a market capitalisation of $4.5B. In plain terms, a large part of the equity value is the cash balance rather than the operating business, which changes what an investor is actually buying: a smaller, cash-generative software company plus a substantial pile of liquid assets.",
      "There is no debt to service and no capital expenditure of consequence. The cash has been accumulating faster than the company has found uses for it, which turns capital allocation into a first-order question rather than a detail.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $87.93 the shares trade at 37.9x trailing earnings, 235.0x EV/EBITDA, 2.3x EV/sales and 14.4x free cash flow, with a 7.0% free-cash-flow yield.",
      "Two of those multiples should be discarded immediately. A 235x EV/EBITDA figure is computed on an EBITDA number close to zero and is a rounding artefact, not a valuation. The 37.9x earnings multiple is inflated by the interest income in the net line. That leaves 2.3x sales and 14.4x free cash flow, and the second is the more informative because the cash flow is real and recurring.",
      "The sales multiple is the one that stands out. At 2.3x revenue, the price is low in absolute terms for a business growing at 26.7% and converting a quarter of sales into free cash flow. The discount is the market's judgement on durability: a smaller average customer, a monthly billing mix and a crowded category.",
      "Stockmonk does not set a target price; the consensus figure shown later is third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-four analysts contribute to the attributed consensus. The mean target is $108.76 with a range of $87.00 to $165.00. The low end is almost exactly the current price, and the high end is nearly double it, which is a wide distribution for a company with a five-year public record.",
      "Estimates are $369.2M of revenue and $1.37 of EPS next quarter, $1.47B and $5.50 for the fiscal year, then $1.69B and $6.70. The EPS figures are far above what a -0.1% operating margin would generate, so they are adjusted numbers that exclude stock compensation and treat interest income as part of the result.",
    ],
  },
  risks: {
    intro:
      "monday.com's risks are competitive and structural. It carries more cash than debt, has a high gross margin and no capital spending to speak of, so the threats are to pricing, retention and the unit being priced.",
    items: [
      {
        title: "Per-seat pricing and AI",
        severity: "High",
        detail:
          "If AI assistants handle coordination and status updates, the number of humans needing a seat can fall even as the work continues. A per-seat bill shrinks with the headcount it is attached to.",
        watch:
          "Revenue per paid seat, the mix of annual versus monthly plans, and the pricing of AI features.",
      },
      {
        title: "Bundled competition",
        severity: "High",
        detail:
          "Productivity suites and development platforms include basic project tracking at no extra cost. For a customer already paying for one of those suites, the case for a separate subscription has to be strong.",
        watch:
          "Win rates in accounts that already use a bundled alternative and average revenue per account.",
      },
      {
        title: "Small-customer churn",
        severity: "Medium",
        detail:
          "The self-service motion brings in many small accounts that can leave quickly. That is cheap to acquire and expensive to keep replacing.",
        watch:
          "Net dollar retention and the split between self-service and sales-assisted revenue.",
      },
      {
        title: "Multi-product execution",
        severity: "Medium",
        detail:
          "Growth depends on selling CRM and development products alongside the core workspace. A second product that fails to attach adds cost without adding revenue.",
        watch:
          "The share of customers using more than one product.",
      },
      {
        title: "Currency and geography",
        severity: "Low",
        detail:
          "The company reports in dollars, is headquartered in Israel and sells globally. Currency moves and regional conditions affect costs and demand unevenly.",
        watch:
          "The split of revenue by region and the effect of exchange rates on operating expenses.",
      },
    ],
    watchlist: [
      {
        title: "Net dollar retention",
        detail:
          "With a large self-service base, expansion inside accounts is what separates durable growth from a leaky funnel.",
      },
      {
        title: "Revenue per customer",
        detail:
          "The clearest early signal of whether AI features are raising the value of a seat or eroding the need for one.",
      },
      {
        title: "Cash balance",
        detail:
          "At $1.67B against a $4.5B market capitalisation, what the company does with the cash matters as much as what it sells.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "monday.com has grown from $308.1M to $1.23B in five years, reached operating breakeven, and done it while generating a quarter of revenue as free cash flow. Those are the marks of a business that has found product-market fit and is learning to be efficient.",
      "The complication is that the product is priced per person in a category that AI is actively reshaping, and that the customer base leans toward the smaller end where churn is highest. Neither problem is fatal; both cap how much the growth is worth.",
      "The reader should finish by separating the operating business from the balance sheet. A $4.5B market capitalisation with $1.67B of net cash is mostly a bet on the remaining operating value, and that value depends on retention.",
    ],
    questions: [
      "What share of revenue is annual rather than monthly?",
      "Is revenue per seat rising as AI features are added, or flat?",
      "How much of growth comes from customers using more than one product?",
      "What is the plan for $1.67B of net cash?",
    ],
  },
};
