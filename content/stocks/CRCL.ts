import type { StockStory } from "./types";

export const CRCL: StockStory = {
  "ticker": "CRCL",
  "kicker": "Fintech & Crypto · Financial Services",
  "title": "Circle earns the interest on the cash behind its stablecoin",
  "dek": "Reserve income rises with coins in circulation and with short-term rates, and a large share of it is paid to distribution partners. That is why a 26.6% gross margin sits under a $17.4B market value.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue of $319.3M is up 323.6%, but the quarterly series jumps from $33.6M to $207.3M in one period, so the growth rate is not comparable across quarters.",
    "A 26.6% gross margin means about three-quarters of reserve income leaves as distribution cost, and that share decides profit more than circulation does.",
    "Free cash flow of $740.7M exceeds net income, and $1.7B of net cash gives the balance sheet room that the income statement does not.",
    "Twenty-four analysts average $102 against a $53 price with a $34 to $243 range, and EPS estimates are up 19.0% in the past month."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1876042/000187604226000062/crcl-20251231.htm",
  "irUrl": "https://www.circle.com",
  "bigPicture": {
    "paragraphs": [
      "A jump from $33.6M of revenue in the June quarter to $207.3M in September is larger than any plausible change in stablecoin circulation in three months, so the series is measuring something different from what it measured a year ago. What the September quarter does show is a 100.5% operating margin and $0.84 of EPS, both of which imply income and costs outside a simple reserve-income model. Until the presentation is stable, the trailing figures of $319.3M of revenue and $740.7M of free cash flow are the safer anchor.",
      "The underlying economics are a float and a spread. Circle earns the yield on cash and short-term government securities backing its tokens, then pays a share to the exchanges, fintechs and payment providers that distribute them. A 26.6% gross margin says the retained share is about a quarter of reserve income. That is why revenue can grow quickly while profit grows slowly: every token issued through a partner carries a revenue share, and the partner knows the float is the product.",
      "The market value is $13.5B, which is 36.9x trailing sales, the single most important number here. On earnings the multiple is 29.1x and on free cash flow 18.2x, because reserve income converts to cash. The sales multiple only makes sense if the revenue base is about to become several times larger, which the 2026 estimate of $3.0B assumes; the reported quarterly series does not yet support that extrapolation. On the 2026 revenue estimate the multiple falls to about 4x, which is ordinary for a payments network; on the reported base it is extreme."
    ],
    "quote": "Circle earns the interest on the dollars behind its tokens and hands most of it to the partners who put those tokens in front of customers."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core product is the token: a digital dollar that can be transferred globally in minutes and used inside crypto markets without converting back to a bank deposit. Issuance and redemption are the plumbing — a customer mints tokens by sending dollars and redeems them by sending tokens back.",
      "Around the token sits a developer platform. Businesses use it to embed dollar accounts, cross-border payouts and settlement into their own products without building the compliance and custody themselves. That is the part of the business that looks like software: recurring fees, integration work, and a customer relationship that is not purely a function of interest rates.",
      "The customers are exchanges, fintech companies, payment providers, developers and, increasingly, enterprises that want to move money across borders. The token's usefulness grows with the number of places that accept it, which is why distribution partnerships matter so much — and why they can charge for access."
    ],
    "bullets": [
      {
        "title": "Reserve income",
        "detail": "Interest earned on the cash and short-term government securities backing the tokens. The largest revenue line."
      },
      {
        "title": "Distribution costs",
        "detail": "The share of reserve income paid to partners that hold and distribute the token. The reason gross margin is 26.6%."
      },
      {
        "title": "Platform and services",
        "detail": "APIs, integration and settlement products sold to businesses. Smaller, but less rate-sensitive."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The arithmetic is simple even if the accounting is not. Take the number of tokens in circulation, multiply by the yield earned on the reserves, and that is gross reserve income. Subtract the share paid to distribution partners, and what remains is the company's gross profit. A 26.6% gross margin says that roughly three-quarters of revenue leaves as distribution cost.",
      "That margin structure is the single most important fact about the business. It means revenue can grow quickly while profit grows slowly, because every new token issued through a partner carries a revenue share. Growth through the company's own channels would be more profitable but slower to acquire.",
      "The cost base below gross profit is people, compliance and technology. Those costs are largely fixed, so once gross profit covers them the operating margin expands quickly. The trailing operating margin of 24.1% and the quarterly swings between deeply negative and strongly positive show both the operating leverage and the instability of a business whose revenue moves with rates and circulation."
    ]
  },
  "growth": {
    "paragraphs": [
      "Distribution, not adoption, is the growth constraint. A token is useful where it is accepted, and the exchanges and fintechs that hold it charge for that reach. The 26.6% gross margin is the price of the relationship. Growth through partners is fast and expensive; growth through Circle's own channels is slower and more profitable. The reported numbers do not split the two, so a reader cannot tell whether the revenue increase came with a better or worse retained share.",
      "The estimate set is difficult to reconcile with the reported history: fiscal 2026 revenue of $3.0B against $319.3M trailing, then $3.7B in 2027 with EPS flat at $1.29 in both years. Flat EPS on 24.1% revenue growth is an explicit assumption that the incremental revenue carries little or no margin, which is consistent with partner-led distribution. The 19.0% upward revision to EPS over thirty days says the analysts are still recalibrating to the new revenue presentation.",
      "The variable that would change the case is the reserve yield. Revenue is the float multiplied by the yield, so a sustained fall in short-term rates reduces revenue on the same circulation with no cost offset. Interest cover of 1,075x and net cash of $1.7B mean solvency is not the issue. The issue is that the profit pool shrinks mechanically when rates fall, and the platform fees that do not depend on the float are still too small to be visible in the reported line."
    ],
    "bullets": [
      {
        "title": "Retained share",
        "detail": "Gross margin of 26.6% is the portion of reserve income kept; a single partner renegotiation moves it more than a year of circulation growth."
      },
      {
        "title": "Float",
        "detail": "Revenue rises with tokens in circulation, which depends on the network of exchanges and payment providers that accept them."
      },
      {
        "title": "Rate level",
        "detail": "Reserve income is a yield on cash and short-dated government securities, so the revenue base changes when short-term rates change, without any change in adoption."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Two margins explain the result, and neither behaves like a normal operating margin. Gross margin is 26.6%, and the quarterly operating margins through fiscal 2026 are 108.1%, 102.3% and 100.5%, levels that operating income cannot reach on a conventional cost structure. The June quarter's 143.6% net margin makes the same point. These are not margins a reader can compare with a payments processor; they are the arithmetic of a business that reports reserve income and interest income on different bases.",
      "Return on invested capital of 8.6% and return on equity of 12.0% are modest for a 29.1x earnings multiple, and they are the ratios that matter because the balance sheet is where the float sits. EPS of $0.84 in September against $0.18 in June shows how much of the quarterly result comes from items other than the reserve spread. The annual figures are the reliable series; the quarterly margins are presentation artefacts until the company reports a stable base.",
      "The comparison with Robinhood is useful because both earn a spread on customer assets. Robinhood converts that spread into a 47.3% operating margin and a 39.0% net margin; Circle converts it into a 26.6% gross margin after paying distribution partners. The difference is bargaining power: a broker owns the customer relationship, while an issuer shares the economics with the platforms that distribute the token."
    ]
  },
  "cash": {
    "paragraphs": [
      "Twelve-month cash generation of $740.7M exceeds net income, which is the opposite of the usual growth-company pattern. Some of that is timing, with the June quarter alone producing $516.4M and September giving back $35.6M, but the direction is consistent with a business whose revenue is interest on securities rather than a receivable. Capex is trivial at $12.4M in FY2025, so the cash conversion is structural rather than a working-capital artefact.",
      "Net cash of $1.7B and interest cover of 1,075x describe a balance sheet with no conventional leverage problem. The caveat is that the reserve assets themselves are not corporate cash: they back tokens redeemable at par, and a run on the token would consume them. The relevant capital measure is the composition and custody of the reserves, not the net debt line, and the reported figures do not disclose the composition.",
      "No dividend is paid. The cash build is the buffer against redemption risk and the funding for platform expansion, which explains how a company growing revenue at triple-digit rates can also report a 5.5% free cash flow yield. Whether that cash belongs to shareholders or to token holders is the question the statements leave open, and it is the reason the equity multiple and the float are difficult to analyse together."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Thirty-seven times sales requires a specific explanation, and the only one available is that the revenue base is about to be redefined. On trailing figures the enterprise value is roughly $11.8B against $319.3M of revenue; the fiscal 2026 estimate of $3.0B would bring that to about 4x. Between those two numbers sits a presentation change, not a business change, and the market is valuing the second while reporting the first.",
      "The peer group offers no clean comparable. Robinhood at 11.4x sales and 30.7x earnings is a retail broker; PayPal at 1.5x sales and 9.7x earnings is a mature network; Circle at 29.1x earnings sits between them on profit but far above both on sales. The earnings multiple is the more useful anchor, because reserve income is in substance net interest income, and a bank-like business earning 8.6% on capital does not usually command 29x.",
      "What would justify the multiple is a platform business large enough to make reserve income a minority of revenue, which would give earnings a growth profile rather than a rate sensitivity. What would break it is a 100 basis point fall in short-term rates, which reduces revenue on the same float and leaves distribution costs unchanged. The $34 low target and the $243 high target bracket exactly that disagreement."
    ]
  },
  "analysts": {
    "paragraphs": [
      "A $34 to $243 range around a $102 mean is not a distribution of views about a stable business; it is two valuation frameworks. According to Yahoo Finance on 18 November 2026, twenty-four analysts cover the shares. The mean is nearly double the $53 price, which says the positive case is built on the platform and the cautious case on the rate-sensitive reserve spread.",
      "EPS estimates have been raised 19.0% in thirty days and 21.6% in ninety, the largest upward revision in the payment group, while the 2027 estimate is unchanged at $1.29 from 2026. That flat two-year profile is the consensus saying the earnings base is being rebased rather than compounded. The December quarter estimate of $729.0M of revenue against a $207.3M September is the number to reconcile before treating any target as comparable."
    ]
  },
  "risks": {
    "intro": "Circle's risks are structural rather than operational. The business depends on a float it does not control, a spread set by short-term rates, and partners who take most of the gross profit.",
    "items": [
      {
        "title": "Short-term interest rates",
        "severity": "High",
        "detail": "Reserve income is the revenue model. A sustained fall in rates reduces revenue on the same float, and there is no cost offset.",
        "watch": "Reserve yield, the average float and the sensitivity disclosed for a rate change."
      },
      {
        "title": "Distribution partner economics",
        "severity": "High",
        "detail": "A 26.6% gross margin means most reserve income goes to partners. One renegotiation changes the profit materially.",
        "watch": "Distribution costs as a share of reserve income."
      },
      {
        "title": "Regulation of stablecoin issuance",
        "severity": "High",
        "detail": "Reserve composition, redemption rights and custody rules are all subject to change, and Circle's model depends on the current framework.",
        "watch": "Any change to permitted reserve assets or to the treatment of token holders in insolvency."
      },
      {
        "title": "Competition from other issuers",
        "severity": "Medium",
        "detail": "Bank-issued tokens and rival stablecoins compete for the same float. Distribution is the battlefield, and partners know it.",
        "watch": "Circulation growth against the growth of the overall stablecoin market."
      },
      {
        "title": "Redemption and reserve risk",
        "severity": "Medium",
        "detail": "The tokens are redeemable at par. Confidence in the reserve is the product, and a loss of confidence is not recoverable with marketing.",
        "watch": "Reserve composition, custody arrangements and attestation frequency."
      },
      {
        "title": "Revenue concentration",
        "severity": "Medium",
        "detail": "A small number of distribution partners can account for a large share of circulation and of the revenue share paid out.",
        "watch": "Partner concentration disclosure and the trend in gross margin."
      }
    ],
    "watchlist": [
      {
        "title": "Float growth",
        "detail": "Tokens in circulation are the base on which reserve income is earned."
      },
      {
        "title": "Reserve yield",
        "detail": "The rate earned on reserves, which moves with short-term interest rates rather than with company performance."
      },
      {
        "title": "Gross margin",
        "detail": "At 26.6% it captures the balance of power between Circle and its distribution partners."
      },
      {
        "title": "Platform revenue",
        "detail": "The fee-based line that does not depend on rates or float, and the best evidence of a durable business."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Circle is a stablecoin issuer with $319.3M of trailing revenue, a 26.6% gross margin, a 24.1% operating margin and $740.7M of free cash flow. The revenue is interest on the reserves behind its tokens, less the share paid to the partners that distribute them.",
      "That makes the business a float and a spread. Both are outside management's control in the short run: the float depends on adoption and the spread depends on short-term rates. What management controls is the share of reserve income retained and the growth of fee-based platform revenue.",
      "The valuation of $17.41B against a revenue base of this size assumes that both the float and the retained share hold. A reader should focus on the two variables that would break that assumption rather than on the quarterly revenue growth rate."
    ],
    "questions": [
      "How much of reserve income is retained after distribution costs, and is that share rising or falling?",
      "What happens to revenue if short-term rates fall by a percentage point?",
      "How concentrated is circulation among the largest distribution partners?",
      "How large is the fee-based platform revenue that does not depend on the float?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
