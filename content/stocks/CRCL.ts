import type { StockStory } from "./types";

export const CRCL: StockStory = {
  ticker: "CRCL",
  kicker: "Fintech & Crypto · Financial Services",
  title: "Circle earns the interest on the cash behind its stablecoin",
  dek: "Reserve income rises with coins in circulation and with short-term rates, and a large share of it is paid to distribution partners. That is why a 26.6% gross margin sits under a $17.4B market value.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $319.3M on a trailing basis, up 323.6%, with the latest quarter up 626.8%.",
    "The revenue model is interest on stablecoin reserves, so it is sensitive to short-term rates.",
    "Gross margin of 26.6% reflects the share of reserve income paid to distribution partners.",
    "Free cash flow of $740.7M exceeds revenue, a feature of how reserve income converts to cash.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000062/crcl-20251231.htm",
  irUrl: "https://www.circle.com",
  bigPicture: {
    paragraphs: [
      "Circle Internet Group issues a dollar-denominated stablecoin and runs the infrastructure around it. A customer sends dollars to Circle, receives a digital token that is redeemable one-for-one, and uses that token to move value, settle trades or hold a dollar balance outside the banking system. The dollars behind the tokens sit in reserves.",
      "That structure produces an unusual income statement. Circle does not charge much for the token itself. It earns interest on the reserves, and it pays a share of that interest to the exchanges, custodians and platforms that distribute the token to end users. Revenue is reserve income plus fees; the largest cost is the distribution share.",
      "The company is based in New York, employs about 1,100 people and carries a market value of $17.41B at $67.88 a share, inside a 52-week range of $49.90 to $140.00. The shares have returned -32.1% over one year. The financials are those of a young public company: large revenue growth, volatile quarterly margins, and a business whose size depends on how many tokens are in circulation.",
    ],
    quote:
      "A stablecoin issuer is a float business. The token is the liability, the reserve is the asset, and the spread between them is the revenue.",
  },
  whatItDoes: {
    paragraphs: [
      "The core product is the token: a digital dollar that can be transferred globally in minutes and used inside crypto markets without converting back to a bank deposit. Issuance and redemption are the plumbing — a customer mints tokens by sending dollars and redeems them by sending tokens back.",
      "Around the token sits a developer platform. Businesses use it to embed dollar accounts, cross-border payouts and settlement into their own products without building the compliance and custody themselves. That is the part of the business that looks like software: recurring fees, integration work, and a customer relationship that is not purely a function of interest rates.",
      "The customers are exchanges, fintech companies, payment providers, developers and, increasingly, enterprises that want to move money across borders. The token's usefulness grows with the number of places that accept it, which is why distribution partnerships matter so much — and why they can charge for access.",
    ],
    bullets: [
      {
        title: "Reserve income",
        detail:
          "Interest earned on the cash and short-term government securities backing the tokens. The largest revenue line.",
      },
      {
        title: "Distribution costs",
        detail:
          "The share of reserve income paid to partners that hold and distribute the token. The reason gross margin is 26.6%.",
      },
      {
        title: "Platform and services",
        detail:
          "APIs, integration and settlement products sold to businesses. Smaller, but less rate-sensitive.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The arithmetic is simple even if the accounting is not. Take the number of tokens in circulation, multiply by the yield earned on the reserves, and that is gross reserve income. Subtract the share paid to distribution partners, and what remains is the company's gross profit. A 26.6% gross margin says that roughly three-quarters of revenue leaves as distribution cost.",
      "That margin structure is the single most important fact about the business. It means revenue can grow quickly while profit grows slowly, because every new token issued through a partner carries a revenue share. Growth through the company's own channels would be more profitable but slower to acquire.",
      "The cost base below gross profit is people, compliance and technology. Those costs are largely fixed, so once gross profit covers them the operating margin expands quickly. The trailing operating margin of 24.1% and the quarterly swings between deeply negative and strongly positive show both the operating leverage and the instability of a business whose revenue moves with rates and circulation.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $19.9M in FY2023 to $15.2M in FY2024 and then $109.8M in FY2025, with trailing revenue at $319.3M and the latest quarter up 626.8%. Those are not comparable periods in any normal sense; the business changed scale, and the quarterly figures moved from $23.8M to $207.3M over six quarters.",
      "The two variables that drive growth are tokens in circulation and short-term interest rates. The first depends on adoption: more exchanges listing the token, more businesses using it for settlement, more users holding dollars in it. The second is outside the company's control entirely, and it cuts both ways — higher rates increase reserve income on the same float, lower rates reduce it.",
      "What would slow growth is therefore straightforward. A sustained fall in short-term rates reduces revenue per token with no offset in cost. Slower adoption reduces the float. A large partner renegotiating its revenue share reduces the margin on existing circulation. None of those requires the product to fail.",
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly record is dominated by a few large swings. The operating margin was -1367.8% in Q2 FY2025, then 284.1%, 149.8%, 108.1%, 102.3% and 100.5%. Net income moved from -$482.1M to +$214.4M and back through a range of smaller figures. For FY2025 as a whole the operating loss was $96.4M and the net loss $69.5M, while free cash flow was +$529.7M.",
      "A year with an operating loss and strongly positive free cash flow is unusual, and it is explained by the reserve mechanics. Interest earned on reserves arrives as cash, while some of the associated costs are non-cash or timing-related. The cash-flow statement and the income statement are measuring different things.",
      "Return on equity is 13.4%. That is a reasonable number for a financial business, and it is the most useful profitability measure here because the balance sheet is central to the model rather than incidental to it.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is $740.7M on a trailing basis, a 232.0% margin, and the annual series runs $138.9M, $326.4M and $529.7M. Cash generation is not the constraint on this business. The constraint is the size of the float and the share of reserve income retained.",
      "That cash flow should not be read as free profit. Reserve income is earned on customer-backed balances, and the tokens are redeemable. A run on the token would require the reserves to be liquidated, and the cash position is partly a function of how the reserve portfolio is managed rather than of earnings power.",
      "The dataset does not provide a net debt figure, and for this business that is a meaningful omission rather than a neutral one. The reserve assets and the token liabilities are the core of the balance sheet, and a reader cannot assess the business without understanding them.",
    ],
  },
  valuation: {
    paragraphs: [
      "No P/E, EV/EBITDA or EV/sales figure is available in the dataset, and the dividend yield is 0.0%. That leaves the market value of $17.41B as the only anchor, against trailing revenue of $319.3M. A revenue multiple on a business with a 26.6% gross margin and rate-dependent revenue is a weak tool; the number to reason about is the float and the share of reserve income retained.",
      "The peer set is not a clean comparison. SoFi, Affirm, Upstart, Toast and Shift4 are lenders, processors and software companies; none of them earns revenue from holding reserves against a token. The closest analogue in economic terms is a payments network with a float, which is why the multiple debate tends to compare Circle with exchanges and custodians rather than with the other names in this group.",
      "What the valuation has to assume is a durable float and a durable spread. If either shrinks, the revenue base shrinks with it, and a business valued at $17.41B on $319.3M of trailing revenue has little room for that.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-four analysts contribute to the attributed third-party consensus, with a mean target of $105.43 and a range of $34.00 to $243.00. The range spans seven times from bottom to top, which is the widest dispersion in this batch and a clear signal that the analysts are not working from the same model.",
      "Current-year estimates are $3.00B of revenue and EPS of $1.24, with next year at $3.78B and $1.34. Eighteen and twenty-two analysts contribute to those figures. The estimate scale is well above the trailing revenue line reported in this dataset, so the two should be treated as separate measures rather than combined into a growth rate.",
      "Those are third-party forecasts, not a Stockmonk view. The wide target range and the gap between the estimate base and the reported base both argue for reading the consensus as a set of scenarios rather than a single expectation.",
    ],
  },
  risks: {
    intro:
      "Circle's risks are structural rather than operational. The business depends on a float it does not control, a spread set by short-term rates, and partners who take most of the gross profit.",
    items: [
      {
        title: "Short-term interest rates",
        severity: "High",
        detail:
          "Reserve income is the revenue model. A sustained fall in rates reduces revenue on the same float, and there is no cost offset.",
        watch:
          "Reserve yield, the average float and the sensitivity disclosed for a rate change.",
      },
      {
        title: "Distribution partner economics",
        severity: "High",
        detail:
          "A 26.6% gross margin means most reserve income goes to partners. One renegotiation changes the profit materially.",
        watch:
          "Distribution costs as a share of reserve income.",
      },
      {
        title: "Regulation of stablecoin issuance",
        severity: "High",
        detail:
          "Reserve composition, redemption rights and custody rules are all subject to change, and Circle's model depends on the current framework.",
        watch:
          "Any change to permitted reserve assets or to the treatment of token holders in insolvency.",
      },
      {
        title: "Competition from other issuers",
        severity: "Medium",
        detail:
          "Bank-issued tokens and rival stablecoins compete for the same float. Distribution is the battlefield, and partners know it.",
        watch:
          "Circulation growth against the growth of the overall stablecoin market.",
      },
      {
        title: "Redemption and reserve risk",
        severity: "Medium",
        detail:
          "The tokens are redeemable at par. Confidence in the reserve is the product, and a loss of confidence is not recoverable with marketing.",
        watch:
          "Reserve composition, custody arrangements and attestation frequency.",
      },
      {
        title: "Revenue concentration",
        severity: "Medium",
        detail:
          "A small number of distribution partners can account for a large share of circulation and of the revenue share paid out.",
        watch:
          "Partner concentration disclosure and the trend in gross margin.",
      },
    ],
    watchlist: [
      {
        title: "Float growth",
        detail:
          "Tokens in circulation are the base on which reserve income is earned.",
      },
      {
        title: "Reserve yield",
        detail:
          "The rate earned on reserves, which moves with short-term interest rates rather than with company performance.",
      },
      {
        title: "Gross margin",
        detail:
          "At 26.6% it captures the balance of power between Circle and its distribution partners.",
      },
      {
        title: "Platform revenue",
        detail:
          "The fee-based line that does not depend on rates or float, and the best evidence of a durable business.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Circle is a stablecoin issuer with $319.3M of trailing revenue, a 26.6% gross margin, a 24.1% operating margin and $740.7M of free cash flow. The revenue is interest on the reserves behind its tokens, less the share paid to the partners that distribute them.",
      "That makes the business a float and a spread. Both are outside management's control in the short run: the float depends on adoption and the spread depends on short-term rates. What management controls is the share of reserve income retained and the growth of fee-based platform revenue.",
      "The valuation of $17.41B against a revenue base of this size assumes that both the float and the retained share hold. A reader should focus on the two variables that would break that assumption rather than on the quarterly revenue growth rate.",
    ],
    questions: [
      "How much of reserve income is retained after distribution costs, and is that share rising or falling?",
      "What happens to revenue if short-term rates fall by a percentage point?",
      "How concentrated is circulation among the largest distribution partners?",
      "How large is the fee-based platform revenue that does not depend on the float?",
    ],
  },
};
