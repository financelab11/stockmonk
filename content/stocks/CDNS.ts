import type { StockStory } from "./types";

export const CDNS: StockStory = {
  ticker: "CDNS",
  kicker: "Technology · Electronic design automation",
  title: "Cadence rents out the software that chip designers cannot switch off",
  dek: "A 49.4% gross margin is low for a software company, and that is the first clue about what Cadence actually sells.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $6.13B on a trailing basis, up 17.6%, and the latest quarter grew 22.0%.",
    "Gross margin is 49.4% and operating margin is 28.9%; the mix includes hardware and services alongside software.",
    "Free cash flow was $1.76B, a 28.8% margin, above reported net income.",
    "At 63.6x trailing earnings and 41.2x EBITDA, the multiple rests on renewal pricing rather than new customers.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/813672/000081367226000016/cdns-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000813672&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Cadence sells the software that engineers use to design chips. A modern processor contains billions of transistors, and no team can lay them out by hand. The tools handle logic design, placement, timing analysis, verification and the physical checks that decide whether a design can be manufactured.",
      "Two facts frame the valuation: 17.6% growth to $6.13B of trailing revenue, and a 28.9% operating margin sitting on a 49.4% gross margin. The latest quarter, Q3 FY2026, delivered $1.63B at a 26.2% operating margin. The gap between those two margin numbers is the story of what Cadence sells alongside its software.",
      "A $319.92 share price gives $87.78B of market value, inside a 52-week range of $262.75 to $416.69. Trailing P/E is 63.6x and EV/EBITDA is 41.2x. The shares are roughly flat over the past year, which for a company growing revenue 17.6% is its own comment on the starting multiple.",
    ],
    quote:
      "The moat is not the license fee. It is the years of validation work a customer would have to repeat to use a different tool.",
  },
  whatItDoes: {
    paragraphs: [
      "The portfolio spans digital design, analog and mixed-signal design, verification, and the emulation and prototyping hardware that lets a team test a chip before it exists in silicon. Around those sit design IP blocks that customers license rather than build, and a services organization that helps with implementation.",
      "Customers are semiconductor companies and, increasingly, systems companies that design their own chips for cars, networking equipment or data centers. That second group matters because it expands the market beyond the traditional chip industry, and because those customers are less experienced and more dependent on the vendor's support.",
      "The hardware is why gross margin is 49.4% rather than 80%. Emulation systems are physical machines with real manufacturing cost, and services are people-intensive. The software licenses inside the same contract carry much higher margins, but they are reported together.",
    ],
    bullets: [
      {
        title: "Design software",
        detail:
          "Tools for logic design, placement, routing, timing and analog work. Licensed on multi-year terms and renewed annually.",
      },
      {
        title: "Verification and emulation",
        detail:
          "Simulation software plus physical emulation systems. The hardware part dilutes the gross margin.",
      },
      {
        title: "Design IP and services",
        detail:
          "Reusable blocks and implementation help. Grows with the number of chip design starts.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is mostly subscription and time-based license, recognized over the contract term. A customer does not buy a tool once; it renews access every year, and the renewal usually includes more capacity as designs grow. That is why revenue is unusually predictable for a company exposed to semiconductor cycles.",
      "The cost structure explains the margins. Gross margin of 49.4% covers the hardware, the support organization and the third-party technology that goes into the products. Operating margin of 28.9% is struck after research and development, which is the largest single expense and the reason the company can charge what it does.",
      "Pricing power comes from switching cost rather than from scarcity. A design team's flow is a chain of scripts, libraries and validated steps built around one vendor's tools. Changing the vendor means re-validating the flow, retraining the team and risking a tape-out. Customers pay for continuity, and the annual increase is usually easier to accept than the alternative.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $4.09B in FY2023 to $4.64B in FY2024 and $5.30B in FY2025, an increase of roughly 30% over two years. The trailing figure of $6.13B is up 17.6%, and quarterly revenue has risen from $1.28B to $1.63B across the last six quarters.",
      "Third-party estimates call for $6.41B this fiscal year and $7.33B next. That is a continuation of the recent rate rather than an acceleration, which is what a subscription business with high renewal rates looks like when the customer base is stable.",
      "The drivers are chip design starts, the growing number of systems companies designing custom silicon, and the complexity of each design. The brake is customer research budgets: when a semiconductor company cuts spending, tool renewals are among the last things cut, but new seats and new hardware are among the first.",
    ],
  },
  performance: {
    paragraphs: [
      "Annual operating margin has hovered around 28% to 31% for three years. The quarterly record is more uneven: 19.0%, 31.8%, 32.2%, 29.3%, 28.4% and 26.2%. The low quarter and the drift in the last two suggest that the hardware and services mix moves the margin more than the software does.",
      "Trailing net margin is 22.5%, return on equity is 20.1% and return on invested capital is 17.4%. Those are good returns for a company that has been buying businesses, and they are a reminder that the balance sheet carries only $1.18B of net debt, or 0.5x EBITDA.",
      "Diluted EPS was $5.03 on a trailing basis. For a company with a 63.6x multiple, the per-share line is less important than the renewal rate and the pricing increase, neither of which appears directly in the income statement.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $1.76B, a 28.8% margin. In FY2025 free cash flow of $1.59B exceeded net income of $1.11B, which is typical of a subscription business: cash is collected ahead of the revenue it represents, and non-cash charges reduce reported profit without consuming cash.",
      "Net debt is $1.18B and net debt to EBITDA is 0.5x. That is a comfortable position for a company that has made acquisitions, and it leaves room to keep doing so without stretching the balance sheet.",
      "The cash flow supports continued research spending and bolt-on acquisitions. It does not support a large dividend, and the company does not pay one: the capital is reinvested in the product line, which is the only way to defend a license price.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $319.92, Cadence trades at 63.6x trailing earnings, 41.2x EV/EBITDA, 14.5x sales and 49.8x free cash flow, for a 2.0% free-cash-flow yield. Against Synopsys, the closest comparable in this batch, it is the more expensive business on both EBITDA and free cash flow.",
      "A 14.5x sales multiple for a company with a 49.4% gross margin is a large premium to most enterprise software. It is justified only if the renewal base keeps growing at a high single-digit rate or better and the pricing increase continues to exceed inflation.",
      "The valuation therefore rests on a small number of variables that the income statement does not show: renewal rates, price increases at renewal, and the share of revenue from hardware. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-four analysts, a mean target of $411.76 and a range of $300.00 to $470.00. Four sit in the strongest positive bucket, 18 are positive and two neutral.",
      "Their revenue numbers are $1.72B next quarter, $6.41B this fiscal year and $7.33B next. The per-share estimates over the same periods are $2.23, $4.85 and $9.85, and the last of those is close to double the current-year figure on 14% revenue growth. That gap is large enough to check against the basis used in the filing before relying on it.",
      "The revenue estimates are the cleaner signal. They describe a business growing in the mid-teens, which is consistent with the trailing rate and with a subscription model that renews most of its base each year.",
    ],
  },
  risks: {
    intro:
      "Cadence's risks are about its customers' budgets and about the durability of a license model that depends on switching costs.",
    items: [
      {
        title: "Customer research budgets",
        severity: "High",
        detail:
          "Semiconductor design spending is cyclical. Renewals hold up better than new seats, but a prolonged downturn shrinks both.",
        watch:
          "Revenue growth in the hardware and IP lines, which are more discretionary than software renewals.",
      },
      {
        title: "Hardware mix",
        severity: "Medium",
        detail:
          "Emulation systems carry real manufacturing cost. A richer hardware mix lowers gross margin even when revenue grows.",
        watch:
          "Gross margin alongside revenue, quarter by quarter.",
      },
      {
        title: "Competition",
        severity: "Medium",
        detail:
          "One large competitor sells an overlapping toolchain, and the largest customers have the resources to build internal flows for some steps.",
        watch:
          "Win rates at new design starts and pricing at renewal.",
      },
      {
        title: "Export controls",
        severity: "Medium",
        detail:
          "Restrictions on selling design tools into certain markets can remove revenue from customers who design advanced chips.",
        watch:
          "License changes and the geographic revenue split.",
      },
      {
        title: "Acquisition integration",
        severity: "Low",
        detail:
          "Growth has included acquired products, which bring integration cost and the risk of distracting the core roadmap.",
        watch:
          "Operating margin and the pace of new product releases.",
      },
    ],
    watchlist: [
      {
        title: "Renewal and pricing",
        detail:
          "The variables that justify a 14.5x sales multiple. They show up in revenue per customer, not in the headline growth rate.",
      },
      {
        title: "Gross margin",
        detail:
          "A falling gross margin with rising revenue points to a heavier hardware mix or price pressure on software.",
      },
      {
        title: "Operating margin",
        detail:
          "It has drifted from 32.2% to 26.2% across recent quarters. Watch whether that is mix or spending.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Cadence is one half of a duopoly in chip design software, with a 49.4% gross margin, a 28.9% operating margin and $1.76B of free cash flow. Revenue of $6.13B is up 17.6% and the latest quarter grew 22.0%.",
      "The business is more predictable than its end market because licenses renew. That predictability is exactly what a 63.6x earnings multiple is paying for. Whether the price is reasonable depends on renewal rates and pricing, which the reported statements do not disclose directly.",
      "The educational point is that a low gross margin for a software company is not automatically a weakness. It tells you the company sells more than software, and the operating margin tells you whether the mix is being managed well.",
    ],
    questions: [
      "What share of revenue comes from hardware and services rather than software licenses?",
      "How much of the annual revenue increase comes from price rather than new seats?",
      "Does the gross margin hold if hardware grows faster than software?",
      "Is the out-year EPS estimate of $9.85 comparable with the reported figure?",
    ],
  },
};
