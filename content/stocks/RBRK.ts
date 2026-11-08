import type { StockStory } from "./types";

export const RBRK: StockStory = {
  ticker: "RBRK",
  kicker: "Software & Cyber · Data security and cyber resilience",
  title: "Rubrik turned data backup into a security product, and the cash arrived first",
  dek: "Revenue is growing 42.4% while the GAAP loss narrows. The open question is whether a subscription that includes the hardware it runs on can earn software margins at scale.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $1.54B, up 42.4%, the fastest growth among its closest listed peers.",
    "The operating margin is -16.8% while the free-cash-flow margin is 19.7%, a gap that shapes how the company should be valued.",
    "The FY2025 operating loss of $1.13B was an outlier; FY2026 narrowed it to $345.4M.",
    "Trailing earnings multiples are unavailable, so the valuation rests on forward revenue and cash generation.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1943896/000194389626000013/rbrk-20260131.htm",
  irUrl: "https://www.rubrik.com",
  bigPicture: {
    paragraphs: [
      "Rubrik sells data protection as a security control. The platform takes copies of data across on-premises systems, cloud infrastructure and software-as-a-service applications, stores them in a form that cannot be altered, and watches for signs that an attacker is deleting or encrypting production data. Recovery is the product; backup is only the mechanism.",
      "That framing matters commercially. Backup used to sit in the IT operations budget, renewed quietly and priced by the terabyte. Ransomware moved the same capability into the security budget, where the buyer is more senior, the purchase is more urgent and the price is less anchored to storage costs.",
      "Trailing revenue is $1.54B, up 42.4%. The latest quarter produced $427.3M at a -16.8% operating margin. The shares closed at $105.75 for a $21.8B market capitalisation, 65% of the way up a 52-week range of $42.25 to $139.92.",
    ],
    quote:
      "The product is only tested on the worst day of a customer's year. That makes proof of recovery, not storage cost, the thing being bought.",
  },
  whatItDoes: {
    paragraphs: [
      "The core subscription covers data protection, threat detection on the copied data, and orchestration of the recovery itself. Around it sit modules for cloud posture, data classification, and the monitoring of sensitive data wherever it lives. Each module is designed to attach to an account that already trusts the recovery layer, which is how revenue per customer rises without a new buying cycle.",
      "Customers are large enterprises and public-sector organisations with substantial data estates and a regulatory reason to prove they can recover. The company employs 3,797 people and reports a single revenue line, so the mix between subscription, appliance and support is not disclosed in the dataset. Neither is the geography split.",
    ],
    bullets: [
      {
        title: "Protect",
        detail:
          "Immutable copies of workloads, databases, cloud accounts and SaaS data, with the copy store isolated from production credentials.",
      },
      {
        title: "Detect",
        detail:
          "Anomaly detection on the backup data itself, which is useful precisely because an attacker may already be inside production.",
      },
      {
        title: "Recover",
        detail:
          "Orchestrated restoration at scale, including to a clean environment, which is the capability customers actually pay to test.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The subscription is term-based, usually multi-year, and priced on the amount of data protected and the modules in use. Gross margin is 80.2%, which is healthy but below what a pure software licence would earn, because delivering the service involves running and shipping infrastructure as well as code. A subscription that bundles software with the hardware it runs on carries a cost of goods that a hosted-only product does not.",
      "The operating loss of 16.8% comes from sales and marketing rather than delivery. Rubrik sells to large organisations through a mix of direct account teams and channel partners, and enterprise data-security deals are slow, technical and proof-heavy. The company is paying for distribution ahead of the recurring revenue that distribution will eventually produce.",
      "That is also why the cash flow looks so different from the income statement: multi-year contracts are often billed annually in advance, so cash arrives before revenue is recognised, and a portion of compensation is paid in stock. Both effects flatter free cash flow relative to operating income, and both are normal at this stage.",
    ],
  },
  growth: {
    paragraphs: [
      "The annual path is uneven. Revenue was $599.8M in FY2023 and $627.9M in FY2024 — barely any growth — before jumping to $886.5M and then $1.32B. A flat year followed by acceleration usually marks a change in how revenue is recognised or how the product is sold, not a sudden change in demand. Whatever the cause, the base is now growing faster than it did two years ago.",
      "Consensus estimates call for $430.2M next quarter and $446.2M the quarter after, then $1.69B for this fiscal year and $2.05B next. Adjusted EPS is expected to be $0.50 and $0.77.",
      "The demand drivers are structural: more data living in more places, regulators requiring demonstrable recovery, and insurers asking the same question after every incident. The constraint is the sales cycle and the cost of proving the product before a contract is signed.",
    ],
  },
  performance: {
    paragraphs: [
      "Quarterly operating margins have improved from -33.4% and -30.5% a year ago to -21.6%, -21.8%, -13.6% and -16.8%. The direction is right and the pace is credible, but the most recent quarter stepped back, which is worth watching rather than explaining away.",
      "The FY2025 figure of a $1.13B operating loss on $886.5M of revenue is not an operating run-rate. A loss larger than revenue points to a charge that belongs to a single event, and the following year's $345.4M loss on $1.32B confirms that the underlying business never ran at that level.",
      "Net margin is -16.5% and diluted EPS is -$1.27 on a trailing basis. Return on equity and return on invested capital are not available in the dataset, which limits the usual cross-checks against the cost of capital.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow went from -$5.7M in FY2023 to -$16.9M, then $31.3M and $253.3M. Trailing free cash flow is $303.9M, a 19.7% margin. The swing is large enough that it deserves a second look rather than a celebration: it reflects billing terms and working capital as much as it reflects profit.",
      "Net debt is not disclosed in the dataset. What can be said is that the cash flow now more than covers the operating loss, which removes any near-term need to raise money. The question shifts from survival to whether the cash conversion persists once growth slows and the benefit of upfront billing stops expanding.",
    ],
  },
  valuation: {
    paragraphs: [
      "There is no trailing price-to-earnings or EV/EBITDA multiple, because the company does not produce positive GAAP earnings. Without a sales multiple in the dataset, the valuation has to be reasoned about rather than quoted: the market is paying for a subscription stream that is growing at 42.4% and converting about a fifth of revenue into free cash flow.",
      "The peer table offers one useful contrast. Rubrik grows at 42.4%, nearly double GitLab at 23.0% and more than four times Tenable at 9.5%, while carrying a wider operating loss than either. That combination — fastest growth, widest loss — is the profile that gets valued on forward revenue, and it is also the profile that de-rates hardest if growth slips.",
      "Stockmonk does not publish a target price. The consensus mean in the next section is third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-eight analysts contribute to the attributed consensus. The mean target is $122.46 and the range is $110.00 to $155.00, a notably tight spread for a company this young.",
      "Consensus EPS of $0.08 next quarter is the number to notice. It implies the company is expected to hover at breakeven on an adjusted basis, which is consistent with a business spending heavily on sales while its gross profit grows. Estimates for this fiscal year are $1.69B of revenue and $0.50 of EPS, rising to $2.05B and $0.77 next year.",
    ],
  },
  risks: {
    intro:
      "Rubrik's risks sit at the intersection of competition, delivery cost and the credibility of its cash conversion. The income statement is still the problem, and it is competition plus cost of goods that will decide whether it stops being one.",
    items: [
      {
        title: "Platform bundling",
        severity: "High",
        detail:
          "Cloud providers and large infrastructure vendors sell native backup and snapshot tooling as part of a broader agreement. For a customer already committed to that platform, the incremental cost of using it is close to zero.",
        watch:
          "Win rates in accounts that are heavy users of a single cloud platform, and average selling price at renewal.",
      },
      {
        title: "Durability of the growth rate",
        severity: "High",
        detail:
          "Growth accelerated from a flat year to 42.4%. Re-acceleration is harder to sustain than steady compounding, and the comparison base gets tougher each quarter.",
        watch:
          "Quarterly revenue growth and the split between new customers and expansion.",
      },
      {
        title: "Gross margin and delivery cost",
        severity: "Medium",
        detail:
          "A subscription that includes infrastructure carries a cost of goods that grows with the customer's data. Scale does not automatically improve this the way it does for a pure licence.",
        watch:
          "Gross margin by quarter and any shift toward cloud-hosted delivery.",
      },
      {
        title: "Cash conversion quality",
        severity: "Medium",
        detail:
          "Free cash flow of 19.7% of revenue against a 16.8% operating loss depends on billing terms and stock compensation. If billings slow, the cash advantage narrows quickly.",
        watch:
          "Deferred revenue growth and stock-based compensation as a share of revenue.",
      },
      {
        title: "Large-deal concentration",
        severity: "Medium",
        detail:
          "Enterprise data-security purchases are lumpy. A handful of large contracts can decide a quarter, in either direction.",
        watch:
          "The number of large deals per quarter and the spread of revenue across the customer base.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin trend",
        detail:
          "The path from -33.4% to -13.6% and back to -16.8% needs to resume its direction for the growth story to hold together.",
      },
      {
        title: "Free cash flow versus operating loss",
        detail:
          "The 19.7% cash margin is the company's strongest argument; a narrowing gap would weaken it.",
      },
      {
        title: "Gross margin",
        detail:
          "Eighty percent is the floor to defend. Below that, the hardware inside the subscription starts to look like a structural drag.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Rubrik has found a way to sell an old category — backup — as a new one — cyber resilience — and has priced it accordingly. Revenue growth and cash generation both support the story. The GAAP loss is the part that has not yet been resolved.",
      "The instructive feature of this company is the distance between its three profit measures. Gross margin says the product is worth 80 cents on the dollar. Operating margin says the company spends more than that to sell it. Free cash flow says the cash arrives early. All three are true at once.",
      "The reader should leave asking whether the growth is being bought with sales spending that will eventually fall, or maintained with spending that has to stay.",
    ],
    questions: [
      "How much of the 42.4% growth comes from expansion inside existing accounts?",
      "What share of the subscription is infrastructure rather than software, and how does that cap gross margin?",
      "Is the 19.7% free-cash-flow margin a permanent feature of multi-year billing or a timing effect?",
      "How quickly does the operating loss close if growth slows to 25%?",
    ],
  },
};
