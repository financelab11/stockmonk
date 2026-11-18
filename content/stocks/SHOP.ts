import type { StockStory } from "./types";

export const SHOP: StockStory = {
  "ticker": "SHOP",
  "kicker": "Commerce software · Merchant platform",
  "title": "Shopify charges merchants twice: once for the software, once for the payment",
  "dek": "Subscriptions grow with the number of merchants; payments, capital and shipping grow with the value of what those merchants sell. The second line is bigger and carries a lower margin.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $14.2B trailing twelve months, +32.5% year over year.",
    "Profitability: 14.6% operating margin and 15.0% net margin.",
    "Cash: $2.7B free cash flow, a 18.8% margin.",
    "Scorecard: 54/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1594805/000159480526000007/shop-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001594805&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "SHOPIFY INC. generated $14.2B of revenue over the last twelve months, +32.5% versus the prior year. The business depends on traffic, basket size and the cost of serving the next customer.",
      "The latest reported quarter was Q3 FY26, with $3.7B of revenue and an operating margin of 15.2%. The stock closed at $141.90 on 2026-11-17, giving a market capitalization of $182.6B.",
      "The shares sit 55% of the way up their 52-week range ($94.00 to $180.88). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Shopify's revenue is a percentage of what its merchants sell, so the company grows when its customers grow. That alignment is the strength of the model and the reason a consumer slowdown reaches the income statement quickly."
  },
  "whatItDoes": {
    "paragraphs": [
      "A merchant signs up, picks a plan and builds a storefront. The software handles the catalogue, checkout, taxes, discounts and order management. Once the store is live, the merchant can add payments, capital advances, shipping labels, fulfilment and advertising, each of which is priced per transaction or per month.",
      "The platform also connects to physical retail through point-of-sale hardware and to large marketplaces and social channels, so a merchant can sell in several places from one back office. That breadth is the moat: a merchant who runs the storefront, the payments and the inventory on one system faces real switching costs, even if each individual feature can be bought elsewhere.",
      "Larger brands sit on the same platform as one-person shops, which gives Shopify a range of customers that most software companies do not have. The description in the filing names Allbirds, Gymshark, PepsiCo and Staples among the businesses it serves, alongside the long tail of small merchants that makes up most of the count."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Subscription revenue is the software fee. It is recurring, priced by plan and by scale, and carries a high margin because the cost of serving one more merchant on the same infrastructure is small. It grows with the number of paying merchants, which in turn grows with new sign-ups minus churn.",
      "Merchant solutions revenue is the transactional line: payments, capital, shipping, fulfilment and advertising. Payments alone take a small percentage of every order processed, so this line grows with gross merchandise volume — the total value of what merchants sell. It is the larger line, and its gross margin is much lower because card networks and processors take their own cut before Shopify books the remainder.",
      "That mix explains the 47.5% gross margin. A pure software company would report 75% or more; Shopify reports less because a growing share of its revenue is payments, where part of the fee is simply passed through. The right way to read it is as a lower margin on a much larger revenue base, not as deteriorating economics. The 14.6% operating margin is what is left after the fixed cost of engineering, sales and support."
    ],
    "bullets": [
      {
        "title": "Subscriptions",
        "detail": "Plan fees for the storefront and tools. Recurring and high margin, but capped by the number of merchants."
      },
      {
        "title": "Payments",
        "detail": "A percentage of each order processed. Scales with merchandise volume, not merchant count, and carries processing costs."
      },
      {
        "title": "Capital and shipping",
        "detail": "Merchant cash advances, loans, labels and fulfilment. Useful products that deepen the relationship, and lines where credit losses can appear."
      }
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 39.4% a year across the fiscal years in the dataset, and the latest quarter changed +31.6% year over year. Third-party estimates for the current fiscal year point to $15.3B of revenue and $1.91 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 14.6% and return on invested capital of 20.4% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 14.6%, the net margin is 15.0% and diluted EPS is $1.64. The latest quarter's operating margin was 15.2%.",
      "Return on equity is 16.7%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $3.7B, an operating margin of 15.2% and a net margin of 12.3%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $2.7B, a 18.8% margin. The balance sheet carries $4.7B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $2.7B over the last twelve months and net debt was -$4.7B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 85.9x trailing earnings and 84.8x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $177.18; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "49 analysts contribute to the third-party consensus. The mean target is $177.18, with a range of $120.00 to $220.00.",
      "Current-year estimates call for $15.3B of revenue and $1.91 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 49 analysts with a mean target of $177.18; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Shopify's risks sit on both sides of the marketplace: the merchants it serves and the platforms it competes with. The balance sheet is strong, so the threats are to growth and to the multiple rather than to solvency.",
    "items": [
      {
        "title": "Merchant churn and small-business failure",
        "severity": "High",
        "detail": "Most merchants are small. A weak economy raises closures, which reduces subscription revenue and the volume that payments depend on.",
        "watch": "Merchant count, monthly recurring revenue and the net change in paying stores."
      },
      {
        "title": "Consumer spending on merchandise",
        "severity": "High",
        "detail": "Payments revenue is a percentage of what merchants sell. A slowdown in online retail reaches the income statement faster than it reaches a software company's.",
        "watch": "Gross merchandise volume growth and the take rate on payments."
      },
      {
        "title": "Payments margin pressure",
        "severity": "Medium",
        "detail": "Winning larger merchants often means negotiating lower processing fees. Revenue can grow while the gross margin falls.",
        "watch": "Merchant solutions gross margin and the mix of payments within revenue."
      },
      {
        "title": "Competition from larger platforms",
        "severity": "Medium",
        "detail": "Marketplaces and enterprise software vendors offer their own storefront and payment tools, often bundled with audience or infrastructure the merchant already pays for.",
        "watch": "Win rates with larger brands and the pace of enterprise product launches."
      },
      {
        "title": "Merchant credit exposure",
        "severity": "Medium",
        "detail": "Capital advances and loans put Shopify's cash at risk if merchants fail. Losses appear with a lag and rise in a downturn.",
        "watch": "Provision for credit losses and the size of the merchant lending book."
      }
    ],
    "watchlist": [
      {
        "title": "Gross merchandise volume",
        "detail": "The base that payments revenue is charged on. It leads reported revenue by roughly a quarter."
      },
      {
        "title": "Operating margin",
        "detail": "The test of whether growth is being bought. A margin that holds above 14% while revenue grows is the healthy combination."
      },
      {
        "title": "Free cash flow versus net income",
        "detail": "The gap is stock-based compensation. Track dilution alongside the cash figure."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Shopify is a commerce platform that has moved from losing money to earning it while still growing above 30%. Revenue of $14.2B, operating income of $1.47B and free cash flow of $2.66B are the evidence, and the balance sheet holds $4.73B of net cash.",
      "The educational point is the two-part revenue model. Subscriptions are software economics: recurring, high margin, limited by the number of merchants. Payments are volume economics: a small percentage of a very large number, with processing costs attached. Reading the gross margin without knowing the mix leads to the wrong conclusion about the business.",
      "The valuation is the unresolved part. At 13.4x sales, the shares already assume a long runway of growth. Whether that is reasonable depends on merchandise volume, merchant retention and the take rate — three things that a trailing income statement can only hint at."
    ],
    "questions": [
      "What share of revenue comes from payments rather than subscriptions?",
      "Is gross merchandise volume growing faster or slower than revenue?",
      "How much of the free-cash-flow margin depends on stock-based compensation add-backs?",
      "What would a 20% growth year do to a 13.4x sales multiple?"
    ]
  }
};
