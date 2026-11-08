import type { StockStory } from "./types";

export const AFRM: StockStory = {
  ticker: "AFRM",
  kicker: "Fintech & Crypto · Brokers, Exchanges & Other",
  title: "Affirm takes a merchant fee, then decides whether to keep the loan",
  dek: "Operating income went from -$1.20B in FY2023 to +$417.0M in FY2026 as funding costs settled and the loan book scaled. The P/E of 9.5x is not what it appears, because most of the net income arrived in a single quarter.",
  readingMinutes: 9,
  takeaways: [
    "Revenue rose from $559.2M in FY2022 to $1.44B in FY2026 while operating income swung from -$866.0M to +$417.0M.",
    "Free cash flow is $817.0M on a trailing basis, a 53.9% margin, because sold loans convert to cash.",
    "Net income of $2.35B in FY2026 far exceeds operating income; the difference sits below the operating line.",
    "The 9.5x P/E rests on a one-off quarter. Price-to-free-cash-flow of 28.3x is the more stable anchor.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1820953/000162828026059279/afrm-20260630.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001820953&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Affirm provides point-of-sale lending. A shopper at a merchant's checkout chooses to split a purchase into instalments, and Affirm pays the merchant upfront, less a discount fee. The consumer may pay nothing extra on a promotional plan, or may pay interest on a longer one. The economics therefore come from two places: the fee the merchant gives up to close the sale, and the interest and fees the borrower pays.",
      "The company went through the arithmetic of a rate shock after it came to market. Revenue grew from $559.2M in FY2022 to $1.44B in FY2026, but operating income was -$866.0M, -$1.20B, -$615.8M, -$87.3M and then +$417.0M across those five years. The loss was never a demand problem; it was the cost of funding loans at the wrong price.",
      "Affirm employs 916 people and carries a market value of $23.09B. The shares are at $68.11, inside a 52-week range of $42.09 to $90.44, and have returned 3.3% over one year against -58.3% over five. That combination describes a company that has stabilised but has not yet been re-rated as a compounder.",
    ],
    quote:
      "A buy-now-pay-later lender is a funding business wearing a checkout button. The credit decision and the cost of capital decide the profit, not the interface.",
  },
  whatItDoes: {
    paragraphs: [
      "The core product is an instalment plan embedded in a merchant's checkout, online and in stores. Affirm also offers a consumer app where borrowers can find merchants and manage plans, a debit card, and longer-term interest-bearing loans. The merchant side is the distribution engine: each integration puts Affirm in front of that merchant's customers at the moment of purchase.",
      "Merchants accept a lower ticket price in exchange for higher conversion and larger baskets. That is the value proposition, and it is why the merchant discount fee exists at all. The fee is the price of a sale that might otherwise not happen, which also means Affirm's revenue is sensitive to retail volumes and to the mix of merchants on the platform.",
      "The consumers are a mix of prime and near-prime borrowers. Promotional plans with no interest are cheap for the borrower and expensive for the merchant; interest-bearing plans shift the cost to the consumer and carry the credit risk. The blend between those two determines both revenue and loss rates.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Three revenue streams feed the business: merchant discount fees at the point of sale, interest and fees from consumers on longer plans, and servicing income on loans owned by others. The merchant fee is charged as a percentage of the transaction and is recognised when the sale happens. Interest income accrues over the life of the loan.",
      "The cost side is dominated by funding. Affirm raises money through warehouse facilities, forward-flow arrangements that commit buyers to purchase loans, and securitisation. Each channel has a different cost and a different amount of capital tied up. When funding spreads widened, the company was originating loans at a loss; as spreads normalised, the same origination volume became profitable. That is the mechanism behind the swing from a $1.20B operating loss to a $417.0M operating profit.",
      "The second decision is whether to hold or sell. Selling a loan converts it to cash and removes the credit risk, at the cost of giving up the interest spread. Holding keeps the spread and takes the risk. That choice, more than the checkout interface, determines how capital-intensive the business is in any given year.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew 26.1% on a trailing basis and 22.8% in the latest quarter, on top of a five-year run from $559.2M to $1.44B. The operating result got worse before it got better: a $866.0M loss in FY2022 became a $1.20B loss in FY2023, then narrowed to $615.8M, $87.3M and finally a $417.0M profit in FY2026. The trailing operating margin is 35.6%. Revenue growth with margin expansion is the combination that produces a re-rating.",
      "The drivers are merchant count, average order value, the share of transactions that carry interest, and the cost of funding. Each one moves independently. A year of strong volume at skinny merchant fees can grow revenue while flattening profit; a year of stable volume with cheaper funding can grow profit without much revenue.",
      "What would slow it: a consumer spending downturn that reduces checkout volume, a widening of funding spreads that makes new originations unprofitable, or a rise in credit losses on the interest-bearing book. All three hit at once in the period that produced the FY2023 loss.",
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly operating margins show how quickly the model repairs itself. From 18.9% in Q4 FY2025 the margin moved to 19.9%, 29.3%, 26.4%, 38.0% and 47.5% in Q1 FY2027. Revenue in the latest quarter was $393.4M with net income of $164.2M and EPS of $0.47.",
      "The annual net income figures need more care than the operating ones. FY2026 net income was $2.35B against operating income of $417.0M, and the Q4 FY2026 quarter alone produced $2.03B of net income and EPS of $4.63. A single quarter producing several times the annual operating profit means something outside the operating business landed in the accounts. The trailing net margin of 160.2% is the signature of that item.",
      "So the right reading is: operating margin is improving and is now genuinely positive at 35.6%; net income and EPS are unreliable for the trailing period. Judging the company on a P/E built from those earnings would mislead in both directions.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is $817.0M on a trailing basis, a 53.9% margin, and the annual series turned positive in FY2024 at $290.8M before reaching $601.7M and then $992.6M. This is the opposite of the usual growth-company pattern, and the reason is straightforward: when a loan is sold, the cash comes in immediately while the revenue is recognised over time.",
      "The balance sheet shows $3.01B of net cash and a net-debt-to-EBITDA ratio of -3.5x, meaning cash exceeds debt. That gives the company room to fund originations without constantly returning to the market, which is a meaningful advantage over a lender that depends on a single warehouse line.",
      "The caveat is that cash flow here reflects a choice about how much of the book to sell. A year in which Affirm retains more loans would produce weaker free cash flow and more interest income later. Neither outcome is inherently better; they are different amounts of risk taken for the same origination volume.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $68.11 the equity is worth $23.09B. The reported P/E is 9.5x, which looks cheap until you note that the earnings denominator includes a $2.03B quarter. Price-to-free-cash-flow of 28.3x and EV/sales of 13.2x are the more defensible anchors, and both describe a company priced for continued growth rather than for its trailing profit.",
      "The peer set is instructive because the models differ. SoFi trades at 28.4x earnings on a bank balance sheet, Upstart at 19.4x EV/EBITDA on a marketplace model, Toast at 36.6x earnings on restaurant software, and Shift4 at 25.9x earnings on payment processing. Affirm's 23.2x EV/EBITDA sits in the middle of that group.",
      "The multiple question for Affirm is whether the current operating margin of 35.6% is a plateau or a step. A lender that keeps 35% of revenue as operating profit after funding and credit costs is doing well; one that sustains it while growing 20% is doing very well. The price already assumes something close to the second case.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-four analysts contribute to the attributed third-party consensus, with a mean target of $97.05 and a range of $66.00 to $115.00. That is unusually broad coverage for a company of this size, and the range is wide enough to contain genuinely different views about credit and funding.",
      "Current-year estimates call for $5.59B of revenue and EPS of $3.85, rising to $6.92B and $5.02 next year. Only seven and six analysts contribute to those annual figures, so the annual numbers are thinner than the analyst count implies, while the quarterly estimates carry five each.",
      "Those are third-party forecasts, not a Stockmonk view. The EPS path from $3.85 to $5.02 implies profit growth well ahead of revenue growth, which requires further margin expansion rather than volume alone.",
    ],
  },
  risks: {
    intro:
      "Affirm's risks all trace back to the same three variables: the cost of funding, the credit quality of the borrower, and the willingness of merchants to keep paying for conversion.",
    items: [
      {
        title: "Funding costs",
        severity: "High",
        detail:
          "The company does not take deposits. It funds loans through warehouse lines, forward-flow buyers and securitisation, all of which reprice with credit markets.",
        watch:
          "Funding spreads, the mix of committed versus uncommitted facilities, and the share of originations sold.",
      },
      {
        title: "Credit losses",
        severity: "High",
        detail:
          "Interest-bearing plans put consumer credit risk on the balance sheet. Loss rates rise faster than revenue in a weakening labour market.",
        watch:
          "Provision expense, delinquencies and net charge-offs as a share of the loan book.",
      },
      {
        title: "Merchant concentration and fee pressure",
        severity: "Medium",
        detail:
          "A large share of volume can come from a small number of retail partners, and those partners negotiate hard on the discount fee.",
        watch:
          "Merchant concentration disclosure and the trend in revenue as a percentage of volume.",
      },
      {
        title: "Consumer spending cycle",
        severity: "Medium",
        detail:
          "Revenue is tied to checkout volume in discretionary retail categories, which fall early in a downturn.",
        watch:
          "Volume growth against the growth in active merchants, which separates share gains from market growth.",
      },
      {
        title: "Accounting noise in earnings",
        severity: "Medium",
        detail:
          "FY2026 net income was several times operating income because of an item below the operating line. Valuations built on that figure are unreliable.",
        watch:
          "The reconciliation between operating income and net income in each quarterly filing.",
      },
      {
        title: "Regulatory treatment of instalment lending",
        severity: "Low",
        detail:
          "Consumer credit rules and disclosure requirements can change the economics of promotional plans.",
        watch:
          "Any change to how deferred interest and late fees must be disclosed or priced.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The 35.6% trailing figure is the proof that the model works; watch whether it holds through a funding cycle.",
      },
      {
        title: "Funding mix",
        detail:
          "How much of the book is sold versus held determines both cash flow and credit exposure.",
      },
      {
        title: "Credit losses",
        detail:
          "The interest-bearing book is where a consumer downturn would appear first.",
      },
      {
        title: "Revenue per unit of volume",
        detail:
          "The merchant discount fee is the core take rate; a declining trend means merchants are winning the negotiation.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Affirm is a point-of-sale lender with $1.52B of trailing revenue, a 35.6% operating margin and $817.0M of free cash flow. It moved from a $1.20B operating loss in FY2023 to a $417.0M operating profit in FY2026, and the repair came from funding costs and scale rather than from a new product.",
      "The reported P/E of 9.5x should be set aside. It divides the price by earnings that include a single $2.03B quarter. On free cash flow the multiple is 28.3x, which is a growth multiple, and the case for paying it rests on the operating margin holding at current levels while revenue compounds in the twenties.",
      "The thing to understand about this business is that the balance sheet is the product. Every decision about holding or selling a loan trades cash today for interest later, and the company's results will look different depending on which way it leans in any given year.",
    ],
    questions: [
      "What share of originations is sold rather than held, and how has that changed?",
      "What funding cost is assumed in the current operating margin?",
      "How much of revenue comes from the largest merchant partners?",
      "What drove the $2.03B of net income in Q4 FY2026, and will it recur?",
    ],
  },
};
