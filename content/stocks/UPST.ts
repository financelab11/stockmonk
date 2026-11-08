import type { StockStory } from "./types";

export const UPST: StockStory = {
  ticker: "UPST",
  kicker: "Fintech & Crypto · Credit Services",
  title: "Upstart's marketplace only works while its bank partners keep buying loans",
  dek: "Revenue fell from $848.6M in FY2021 to $513.6M in FY2023 when funding dried up, then recovered to $1.34B. A 4.6% operating margin shows how little cushion the model carries when the buyers of loans step back.",
  readingMinutes: 9,
  takeaways: [
    "Revenue halved between FY2021 and FY2023, and operating income went from +$140.9M to -$256.5M.",
    "The recovery is real but thin: trailing revenue is $1.34B on a 4.6% operating margin.",
    "Free cash flow is -$187.0M, and the FY2022 figure of -$666.7M shows what happens when loans stay on the balance sheet.",
    "EV/sales of 1.3x is the market pricing a marketplace model it does not fully trust.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1647639/000164763926000027/upst-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001647639&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Upstart is a lending marketplace built on a credit model. A borrower applies, the model scores the application using variables beyond a traditional credit score, and the resulting loan is offered to a network of bank and credit-union partners that fund it. Upstart earns fees for originating and servicing the loan; it does not need to hold the loan to earn most of its revenue.",
      "That design is the whole thesis. If it works, Upstart is an asset-light intermediary that gets paid per loan and hands the funding and the credit risk to institutions with deposits. If it does not, Upstart becomes a lender by default, holding loans it cannot sell — which is exactly what happened in FY2022.",
      "The company employs 554 people and is valued at $2.17B at $21.89 a share, near the bottom of a 52-week range of $20.59 to $52.10. The five-year return is -93.5%, a number that records the distance between the 2021 expectation and the current reality.",
    ],
    quote:
      "A marketplace is only as strong as its capital partners. When they stop buying, the platform either shrinks or becomes a balance-sheet lender.",
  },
  whatItDoes: {
    paragraphs: [
      "The product set covers personal loans, automotive refinancing and home equity lines, plus a small business offering. Each is the same underlying machinery applied to a different asset: a borrower, a risk model, a loan, and an institutional buyer.",
      "The bank partners are the customers that matter, not the borrowers. A partner needs loans that perform, documentation that satisfies its regulator, and a process that fits its own underwriting. Upstart's job is to deliver applications that the partner would not have approved on its own criteria but that perform well — that is the value the model has to prove.",
      "There is one reported revenue line, so the statements do not split referral fees from servicing fees from interest income on loans held. The mix matters: fee income is capital-light and repeatable, while interest income means the company is carrying the loan and the risk.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "When a loan is funded, Upstart is paid a fee based on its size. It also earns ongoing servicing fees for collecting payments and managing the relationship, and it earns interest on any loans it holds on its own balance sheet. The first two are the marketplace economics; the third is lending economics and belongs in a different risk bucket.",
      "The cost base is engineering, credit analytics and the compliance apparatus needed to sell loans to regulated institutions. Those costs are largely fixed, which means each additional dollar of loan volume carries a high incremental margin. That is why the operating margin can swing from 1.8% in a weak quarter to 9.7% in a strong one without a change in strategy.",
      "The funding side is what makes the model fragile. Upstart raises money through warehouse facilities and forward-flow agreements, and it has used convertible debt. If the cost of that money rises above what a partner will pay for a loan, the transaction does not happen — no fee, no revenue, and the fixed cost base keeps running.",
    ],
  },
  growth: {
    paragraphs: [
      "The cycle is the story. Revenue was $848.6M in FY2021 with $140.9M of operating income. Then rates rose, funding closed, and revenue fell to $842.4M and $513.6M while operating income went to -$113.9M and -$256.5M. From there it recovered to $636.5M and $1.04B, with operating income of -$172.9M and then +$42.6M.",
      "Trailing revenue growth is 38.6% and the latest quarter grew 33.7%. The third-party estimates project $1.36B this fiscal year and $1.75B next, with EPS of $1.97 rising to $3.00. Only five analysts contribute to those annual numbers, which makes them a thin consensus.",
      "The drivers are partner count, loan volume per partner, and the spread between what a partner pays for a loan and what it costs Upstart to originate and fund it. The thing that would slow growth is a repeat of FY2022: a funding market that reprices faster than the company can reprice its loans.",
    ],
    bullets: [
      {
        title: "Partner network",
        detail:
          "Each bank or credit union that joins adds funding capacity. Concentration in a few partners is the structural weakness.",
      },
      {
        title: "Model performance",
        detail:
          "If the loans perform better than the partner's own models would have predicted, the partner buys more. If not, it stops.",
      },
      {
        title: "Product expansion",
        detail:
          "Auto refinance and home equity broaden the addressable volume beyond personal loans but need the same partner appetite.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly operating margins trace the recovery: 1.8%, 8.5%, 6.4%, -2.4%, 4.0% and 9.7%. Revenue in the latest quarter was $370.5M with net income of $36.6M and EPS of $0.33. A 9.7% operating margin on $370.5M is a real profit, but it is the kind of margin that disappears in one bad quarter.",
      "The returns are contradictory and worth understanding. Return on invested capital is 11.5% while return on equity is -54.0%. The difference comes from how the business is financed: debt and warehouse facilities sit ahead of a relatively small equity base, so a modest operating return produces a large swing on equity. That is leverage working in both directions.",
      "The FY2021 comparison is the useful benchmark. That year the company earned $135.4M of net income on $848.6M of revenue in a benign funding market. Nothing about the current cost base suggests the model cannot return to that, but the current 4.6% operating margin shows how far it has to travel.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is -$187.0M on a trailing basis, a -14.0% margin. The annual record is more revealing: +$159.9M in FY2021, then -$666.7M in FY2022, -$113.2M, +$185.5M and -$148.1M. The FY2022 figure, against a net loss of only $108.7M, is the pattern of a marketplace that had to hold loans when its funding partners stepped back.",
      "That is the key cash insight for this business. Free cash flow is not a stable function of revenue; it depends on whether loans are moving off the balance sheet or piling onto it. A quarter of strong sales to partners produces cash; a quarter where the company retains loans consumes it.",
      "The balance sheet holds $461.5M of net cash, and the net-debt-to-EBITDA figure of -5.3x confirms that cash exceeds debt. That is enough to absorb a normal cycle, but not enough to fund a large loan book if the funding market closes for an extended period.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $21.89 the equity is valued at $2.17B. There is no meaningful P/E. EV/EBITDA is 19.4x and EV/sales is 1.3x. A 1.3x sales multiple on a business growing 38.6% is unusually low, and the reason is that the market has seen this model lose money before. The multiple is a discount for cyclicality, not an oversight.",
      "The peer comparison makes the point. Affirm trades at 13.2x sales, Toast at 2.6x, Shift4 at 0.4x and PayPal at 1.5x. Affirm's multiple reflects its own funding model and margin structure; Shift4's reflects a large, low-margin processing revenue base. Upstart at 1.3x is being valued closer to a payments processor than to a lending platform.",
      "The valuation question is what a normalised margin looks like. At a 4.6% operating margin the business is barely profitable. At the mid-teens it would be worth considerably more on the same revenue. The price implies the market is not yet convinced the higher margin is reachable.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sixteen analysts contribute to the attributed third-party consensus, with a mean target of $31.19 and a range of $18.00 to $46.00. The low end of the range sits below the current price, which tells you that not everyone expects the recovery to continue.",
      "Current-year estimates are $1.36B of revenue and EPS of $1.97, rising to $1.75B and $3.00 next year. Only five analysts contribute to each annual figure, and three to each quarterly figure. A consensus that thin should be treated as a set of individual opinions rather than a market view.",
      "The implied path is revenue growth of roughly 30% with EPS growth faster than that, which requires operating leverage on the fixed cost base. That is a plausible outcome in a stable funding market and an implausible one if spreads widen.",
    ],
  },
  risks: {
    intro:
      "The risks here are concentrated in the funding relationship. Upstart does not need borrowers to like it; it needs institutions to keep buying the loans its model produces.",
    items: [
      {
        title: "Funding partner concentration",
        severity: "High",
        detail:
          "A marketplace depends on a small number of institutions. One partner pausing purchases can remove a large share of volume quickly.",
        watch:
          "Partner count, concentration disclosure, and any committed forward-flow arrangements.",
      },
      {
        title: "Credit model performance",
        severity: "High",
        detail:
          "The entire value proposition is that the model selects borrowers better than a traditional score. If vintages produce worse losses than predicted, partners reprice or withdraw.",
        watch:
          "Cumulative loss curves by vintage, especially for loans originated in the last two years.",
      },
      {
        title: "Interest rate sensitivity",
        severity: "High",
        detail:
          "The FY2022 experience showed how fast a rate move can make originations uneconomic.",
        watch:
          "The spread between origination cost and what partners pay, and the level of warehouse funding costs.",
      },
      {
        title: "Balance sheet creep",
        severity: "Medium",
        detail:
          "When loans cannot be sold they are held, which converts a fee business into a lending business and consumes cash.",
        watch:
          "Loans held for sale and loans held for investment as a share of total assets.",
      },
      {
        title: "Regulatory scrutiny of model-based underwriting",
        severity: "Medium",
        detail:
          "Lending models used to price credit must satisfy fair-lending and explainability expectations at partner institutions.",
        watch:
          "Any disclosure about model validation requirements or changes to partner underwriting standards.",
      },
      {
        title: "Thin margins",
        severity: "Medium",
        detail:
          "A 4.6% operating margin leaves almost no room for a rise in funding costs or a decline in loan volume.",
        watch:
          "Operating margin each quarter against the revenue growth rate.",
      },
    ],
    watchlist: [
      {
        title: "Loans held on balance sheet",
        detail:
          "The clearest early warning that the marketplace is not clearing.",
      },
      {
        title: "Operating margin",
        detail:
          "It swings from negative to high single digits on small revenue changes; the trend matters more than any quarter.",
      },
      {
        title: "Partner purchases",
        detail:
          "Volume sold to institutions, not applications received, is the real demand signal.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Upstart is an AI-driven lending marketplace with $1.34B of trailing revenue, a 4.6% operating margin and -$187.0M of free cash flow. It has recovered from the FY2023 trough, when revenue fell to $513.6M and the operating loss reached $256.5M, but the recovery has not yet produced a comfortable margin.",
      "The business model is genuinely capital-light when it works and genuinely capital-hungry when it does not. That binary quality is why the shares trade at 1.3x sales after a 38.6% growth year, and why the five-year return is -93.5%.",
      "The thing to watch is not the loan application volume but the flow of loans to partners. Everything else — margin, cash flow, the size of the balance sheet — follows from whether those partners keep buying.",
    ],
    questions: [
      "How concentrated is loan purchase volume among the largest funding partners?",
      "How are the loans originated in the last two years performing against the model's predictions?",
      "What share of revenue comes from fees versus interest on loans held?",
      "What funding spread does the current 4.6% operating margin assume?",
    ],
  },
};
