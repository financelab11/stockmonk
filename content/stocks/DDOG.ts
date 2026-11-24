import type { StockStory } from "./types";

export const DDOG: StockStory = {
  "ticker": "DDOG",
  "kicker": "Software · Observability platforms",
  "title": "Datadog charges by usage, which is both the model and the risk",
  "dek": "A 79.6% gross margin and a 2.3% operating margin do not usually appear in the same company. The 28.7% free-cash-flow margin is what fills the gap, and it depends on customers consuming more every year.",
  "readingMinutes": 9,
  "takeaways": [
    "Trailing revenue of $4.3B grew 33.2%, and the September quarter lifted the operating margin to 6.2% from 0.5% in the prior three months.",
    "Free cash flow of $1.2B is a 28.7% margin, matching the 28.8% peer median, while the operating margin is only 2.3%.",
    "The $61.2B market value equals 13.1x sales and 341x EBITDA, while return on invested capital is 1.9% against a 22.6% peer median.",
    "Consensus expects $5.5B of fiscal 2027 revenue and $3.18 of EPS; the 30-day estimate revision is 8.3%."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1561550/000162828026008819/ddog-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001561550&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Third-quarter fiscal 2026 revenue of $1.2B was up from $885.7M a year earlier. Operating margin was 6.2%, the strongest in the recent record, and net income was 9.9% of revenue, or $0.32 per diluted share. Free cash flow was $279.1M. The result matters because it shows Datadog's consumption model producing operating leverage at scale, not merely gross profit; the 6.2% margin compares with 0.5% in the June quarter and 1.0% in the December 2025 quarter.",
      "The model explains both the margin and its fragility. Customers buy hosts, log volume, custom metrics and additional products, so revenue rises when their workloads grow and falls when they tune usage. Gross margin of 79.6% reflects cloud infrastructure bought on the customer's behalf. Sales and development spending has been heavy enough to hold the trailing operating margin at 2.3% even as revenue passed $4.3B, and the September quarter suggests that spending is beginning to scale against a larger base.",
      "Datadog's $61.2B market value is 13.1x trailing sales and 49.9x free cash flow. The peer median operating margin is 28.9% and the median return on invested capital 22.6%, against 2.3% and 1.9% here, so the multiple is a claim on future margin rather than a description of the present one. A 2.0% free-cash-flow yield leaves little room for a growth disappointment; the debate is whether the third-quarter margin is the start of a trend or a quarter of restrained hiring."
    ],
    "quote": "Usage pricing turns a customer's cloud bill into Datadog's revenue, and a cost-cutting cycle into its fastest-growing risk."
  },
  "whatItDoes": {
    "paragraphs": [
      "The platform has grown by adding products next to each other. Infrastructure monitoring was the original product. Application performance monitoring came next, then log management, then security, then digital experience monitoring for browsers and mobile apps. A customer can buy one product and add others without changing vendors, which is the basis of the expansion model.",
      "Customers range from small engineering teams to large enterprises with thousands of services. The land-and-expand motion starts with a single team and a single product, then spreads as other teams see the dashboards. That is why the company tracks the number of customers using multiple products, and why the average revenue per customer rises over time.",
      "Datadog employed 2,185 people. That is a small headcount for $4.28B of revenue, and it is possible because the product is software and the infrastructure is rented. Research and development and sales are the two large cost lines; the cost of running the platform is the third and it scales with usage."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is metered. A customer's bill is a function of hosts, log volume, custom metrics and the number of products in use. Gross margin is 79.6%, which means the cloud infrastructure and support costs consume about a fifth of revenue. That is lower than a traditional software company's gross margin because Datadog pays cloud providers for storage and compute on the customer's behalf.",
      "The operating margin of 2.3% is the interesting number. Sales and marketing is expensive because the company is still adding customers and products, and research and development is heavy because the product surface keeps widening. The business is choosing growth over near-term profit, and the choice shows up as a thin operating margin.",
      "Free cash flow of $1.23B, a 28.7% margin, is much higher than operating income. A gap that wide usually comes from share-based compensation, which is added back in the cash-flow statement, and from customers paying in advance. Both are real, and both mean the cash figure overstates the profit available to a shareholder who does not want dilution."
    ]
  },
  "growth": {
    "paragraphs": [
      "The revenue base grew from $603.5M in fiscal 2020 to $3.4B in fiscal 2025, a compound rate near 41%, and trailing revenue is $4.3B. The sequential path through fiscal 2026 has been $953.2M, $1.0B, $1.1B and $1.2B, so the dollar increment is still rising even as the percentage growth rate settles into the low thirties. Consensus for fiscal 2027 is $5.5B, which implies 22.3% growth, a further step down that the company has not yet had to deliver.",
      "The installed base does most of the work. A customer that starts with infrastructure monitoring can add application performance, logs, security and digital experience without a new vendor review, and the bill rises with each product and each workload. That is why revenue per customer matters more than logo count. The counterweight is optimisation: an engineering team under budget pressure can cut log volumes or sample traces, which lowers revenue without any contract ending.",
      "Third-party estimates assume the mix keeps moving toward more products per customer and that optimisation remains a headwind rather than a reversal. The fiscal 2026 revenue estimate of $4.5B is 32.0% growth, and the fiscal 2027 estimate of $5.5B is 22.3%; both are above the 21.8% peer median. A 33% trailing growth rate at 13.1x sales is not obviously expensive, but it leaves the multiple exposed to any quarter where net new consumption misses."
    ],
    "bullets": [
      {
        "title": "Consumption, not seats",
        "detail": "Revenue moves with hosts, logs and metrics rather than user counts. That gives Datadog a share of customer growth but no contractual floor."
      },
      {
        "title": "Product attach",
        "detail": "Five product lines sell into the same account. The expansion motion is the cheapest growth available, and it is also the first thing a customer pauses."
      },
      {
        "title": "Margin inflection",
        "detail": "The September quarter's 6.2% operating margin is the evidence the bulls need. A return to 0.5% would make the 341x EBITDA multiple indefensible."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The gross margin has stayed between 79.3% and 80.8% for five fiscal years, so almost all of the profit movement comes below it. Operating margin went from -1.3% in fiscal 2025 to 2.3% trailing, and the September quarter reached 6.2%; net margin followed from 3.1% to 6.1%. The improvement is operating leverage, not pricing: revenue grew 33.2% while sales and development spending grew more slowly.",
      "The returns are still low. Return on invested capital is 1.9% and return on equity 5.6%; the peer median return on capital is 22.6%, and the operating margin gap is 2.3% against 28.9%. Those figures are depressed by $5.2B of net cash sitting in the capital base as well as by the thin profit. On a cash basis the business looks different: free cash flow is 28.7% of revenue, almost exactly the 28.8% peer median, which is why the equity story rests on cash conversion rather than accounting profit."
    ]
  },
  "cash": {
    "paragraphs": [
      "Trailing cash generation was $1.2B, a 28.7% margin; in fiscal 2025, reported operating cash flow was $1.1B and capital spending $49.6M. The asset-light model means capex is not the constraint; the gap between operating income and cash flow is. Share-based compensation and customer prepayments both flatter the cash figure, and the $5.2B net cash balance is the accumulated result.",
      "Working capital is a feature of the model rather than a seasonal swing. Customers pay in advance and draw down consumption, so cash can arrive before revenue is recognised. The September quarter generated $279.1M of free cash flow, down from $306.0M in June and $318.2M in December 2025, even as revenue rose. That divergence is worth watching: it can signal slower collections or a shift in billing timing.",
      "There is no dividend and no debt, so capital allocation is internal: hiring, product development and the cloud infrastructure that supports customer workloads. Interest cover of 16.9x is irrelevant with net cash. The useful test is whether free cash flow per share keeps rising after dilution; the cash margin is healthy, but the share count is the variable that decides how much of it reaches an owner."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Datadog's $61.2B market value is 13.1x trailing sales, 49.9x free cash flow and a 2.0% free-cash-flow yield. Trailing earnings of 233.5x and EBITDA of 341.2x are almost meaningless as comparators because the profit base is so thin; the sales and cash-flow multiples are the ones that describe the price. The peer medians of 31.0x earnings and 24.8x EBITDA are not the right yardstick for a company investing through the income statement.",
      "Forward numbers change the picture. Fiscal 2026 EPS of $2.74 puts the shares at about 62x, and fiscal 2027 EPS of $3.18 at about 53x. The distance between 233.5x trailing and 62x forward is the adjustment between GAAP profit and the estimate, much of which is share-based compensation. An investor who treats the forward multiple as cheap is accepting that compensation as a non-cost.",
      "The peer comparison explains the premium and the risk. Datadog grows faster than the 21.8% median but earns a 2.3% operating margin against 28.9%, and its 1.9% return on invested capital against 22.6% is the widest gap in the group. A 13.1x sales multiple can be justified if growth holds near 30% and margins march toward the high teens; it is harder to defend at the 22.3% consensus growth rate with a 6% margin. The next two quarters decide which path the multiple is pricing."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Yahoo Finance's 18 November 2026 survey, covers 48 analysts with a mean target of $270 and a range of $171 to $330. The distribution is heavily weighted toward the positive end, with a small neutral bloc and a single analyst at the cautious extreme. The mean is 60% above the $169 share price, but the low end sits barely above it, so the average conceals a real split about how long 30% growth can last.",
      "Estimates call for $4.5B of revenue and $2.74 of EPS this fiscal year, then $5.5B and $3.18 next year. The 30-day EPS revision is 8.3% and the 90-day is 8.4%, so analysts have been raising numbers into the September print. The implicit assumption is that the 6.2% operating margin continues to expand while revenue growth slows only gradually; a return to heavy hiring would challenge both legs."
    ]
  },
  "risks": {
    "intro": "Datadog's risks are about consumption and competition. The balance sheet is strong and the cash flow is real; the uncertainty is whether customers keep expanding usage at the current rate.",
    "items": [
      {
        "title": "Usage optimisation",
        "severity": "High",
        "detail": "Customers can cut their bill by sending less data. A cost-conscious engineering budget reduces revenue without losing the customer.",
        "watch": "Revenue growth against customer count, and commentary on optimisation."
      },
      {
        "title": "Competition from platform vendors",
        "severity": "High",
        "detail": "Cloud providers and large software vendors bundle monitoring into existing agreements, which pressures pricing and land opportunities.",
        "watch": "Win rates and the growth rate of new logos."
      },
      {
        "title": "Multiple compression",
        "severity": "High",
        "detail": "At 14.1x sales, a growth slowdown of a few points can halve the multiple without any change in the business.",
        "watch": "The forward sales multiple against the growth rate."
      },
      {
        "title": "Thin operating margin",
        "severity": "Medium",
        "detail": "A 2.3% operating margin leaves little room for a rise in cloud costs or sales spending before the company reports an operating loss.",
        "watch": "Operating margin and the cost of revenue."
      },
      {
        "title": "Share-based compensation",
        "severity": "Medium",
        "detail": "Free cash flow adds back share-based pay. If dilution runs ahead of revenue, per-share value grows more slowly than the business.",
        "watch": "Diluted share count and the stock-compensation line."
      }
    ],
    "watchlist": [
      {
        "title": "Net revenue retention",
        "detail": "The single best measure of whether existing customers are consuming more."
      },
      {
        "title": "Operating margin",
        "detail": "6.2% in the latest quarter is the first sign of leverage. It needs to keep rising."
      },
      {
        "title": "Free cash flow versus operating income",
        "detail": "A wide gap means add-backs are doing the work. Track the size of it."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Datadog is a fast-growing software company with a genuine product advantage and a pricing model that grows with its customers. The 79.6% gross margin shows the product economics; the 2.3% operating margin shows how much it is spending to grow.",
      "The valuation is the issue. At 14.1x sales and 52.7x free cash flow, the market has already assumed several more years of rapid growth. That is not unreasonable given the record, but it leaves little margin for a slowdown.",
      "The reader should decide whether the cash flow or the earnings is the better measure of the business. If the gap is mostly compensation, the true cost is dilution. If it is mostly deferred revenue, the cash is real but the timing is flattered."
    ],
    "questions": [
      "How much of revenue growth comes from existing customers versus new ones?",
      "What happens to revenue if customers cut log volumes by a fifth?",
      "How large is share-based compensation relative to revenue?",
      "What growth rate justifies 14.1x sales?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
