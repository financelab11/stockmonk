import type { StockStory } from "./types";

export const ELF: StockStory = {
  ticker: "ELF",
  kicker: "Consumer & Brands · Mass-market cosmetics",
  title: "e.l.f. Beauty keeps 74 cents of gross profit per sales dollar and spends most of it on reach",
  dek: "A value-priced cosmetics house with outsourced manufacturing, four brands and a 303-person headcount. The gap between a 74.4% gross margin and an 8.9% operating margin is the whole story.",
  readingMinutes: 10,
  takeaways: [
    "Revenue reached $1.94B, up 39.9%, at a 74.4% gross margin.",
    "Operating margin is 8.9% because marketing, retail programmes and acquired-brand costs absorb most of the gross profit.",
    "Free cash flow was $275.7M, well above net income, so the business converts profit into cash.",
    "Net debt of $562.0M is 2.1x EBITDA, a manageable but real constraint after years of brand acquisitions.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1600033/000160003326000020/elf-20260331.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001600033&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "e.l.f. Beauty sells colour cosmetics and skin care under four names: e.l.f. Cosmetics, e.l.f. Skin, Well People and Keys Soulcare. The core proposition is prestige-looking makeup at drugstore prices, sold through large retailers and, increasingly, directly to shoppers online. The company owns the brand and the formulation, but not the factories.",
      "Revenue reached $1.94B over the trailing twelve months, up 39.9%. Gross margin was 74.4%, which is a software-like number for a physical product. Operating margin, however, was 8.9%. Most of the gross profit goes back out as marketing, retail promotional support, distribution and the costs of running a multi-brand portfolio.",
      "The stock closed at $116.14, near the top of its 52-week range of $48.82 to $123.13, after a 51.7% one-year gain and a 275.1% five-year gain. At 79.3x trailing earnings and 3.8x sales, the price assumes the growth and the margin recovery both continue.",
    ],
    quote:
      "The interesting question for a cosmetics company is not whether the brand is hot this quarter. It is whether the shelf space and the customer relationship survive the next trend cycle.",
  },
  whatItDoes: {
    paragraphs: [
      "The portfolio is tiered by price and positioning. e.l.f. Cosmetics is the volume engine: inexpensive, trend-led makeup sold in mass retail. e.l.f. Skin extends the same value idea into skincare. Well People and Keys Soulcare sit at higher price points and target different customers, which gives the company more than one way to reach a shopper.",
      "Distribution is the real asset. The products sit in national retailers, where shelf space is scarce and fought over, and in international markets mostly through distributors. Direct-to-consumer e-commerce is a smaller channel but gives the company first-party data and the ability to test products before a retail launch.",
      "Manufacturing is outsourced, and the company employed 303 people at the last count. That is a very small headcount for $1.94B of revenue and explains the gross margin: the company pays a contract manufacturer for goods and keeps the brand, formulation and marketing margin. It also means the balance sheet carries inventory rather than factories.",
    ],
    bullets: [
      {
        title: "e.l.f. Cosmetics",
        detail:
          "The volume brand. Low price points, fast trend cycles and heavy presence in mass retail.",
      },
      {
        title: "e.l.f. Skin",
        detail:
          "Skincare positioned at a similar value price. Higher repeat purchase than colour cosmetics.",
      },
      {
        title: "Well People and Keys Soulcare",
        detail:
          "Premium-positioned brands that broaden the portfolio and reach different customers.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The company buys finished goods from contract manufacturers and sells them to retailers at a wholesale price. Gross margin was 74.4%, so the cost of the product itself is a small fraction of the shelf price. The money is made in the brand, not in the chemistry.",
      "That gross profit then funds a heavy operating structure. Marketing is the largest discretionary line, because cosmetics is a fashion business and needs constant newness. Retail customers also require promotional allowances, co-op advertising and slotting support. Add distribution, warehousing and the corporate team, and the 74.4% gross margin becomes an 8.9% operating margin.",
      "International sales run mainly through distributors, which carry lower gross margin than direct retail but require almost no local infrastructure. That mix is a useful lever: shifting toward distributors can grow revenue quickly while diluting margin, and shifting toward direct retail does the opposite.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 34.0% a year from $392.2M in FY2022 to $1.64B in FY2026. That is exceptional for a category that grows roughly with population and price. Share gains came from taking shelf space from legacy mass brands and from expanding into skincare and international markets.",
      "The latest quarter, Q2 FY27, produced $520.8M of revenue, up 51.4% year over year. Growth at that rate is usually a mix of distribution gains, new products and acquisitions rather than pure same-store demand. The brief does not separate the pieces, so the reader should not assume the whole 51.4% is organic.",
      "Third-party estimates call for $2.03B of revenue and $3.89 of EPS this fiscal year, then $2.19B and $4.05 next year. That implies a sharp deceleration from the recent pace. The forecast is consistent with a company digesting acquisitions and annualising a large distribution gain.",
    ],
    bullets: [
      {
        title: "Shelf-space gains",
        detail:
          "Winning more space and more retailer doors is the strongest growth driver in mass cosmetics.",
      },
      {
        title: "Category expansion",
        detail:
          "Moving from colour cosmetics into skincare raises the average basket and the repeat rate.",
      },
      {
        title: "International",
        detail:
          "Distributor-led expansion adds revenue with little fixed cost, though at a lower margin.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a business that scaled quickly and then hit a cost wall. Operating income rose from $29.8M in FY2022 to $149.7M in FY2024 and $158.0M in FY2025, then fell to $73.6M in FY2026 even as revenue grew from $1.31B to $1.64B. Something in the operating expense line grew faster than sales.",
      "The quarters make the pattern visible. Q1 FY26 earned a 13.8% operating margin, Q2 FY26 only 2.2%, Q3 FY26 13.8%, then Q4 FY26 turned negative at -11.2% with a $49.4M net loss. Q1 FY27 recovered to 21.4% and Q2 FY27 came in at 10.1%. Wide swings like that point to charges, acquisition accounting and marketing timing rather than a steady deterioration.",
      "Return on equity was 7.1% and return on invested capital 7.6%. Those are low for a company with a 74.4% gross margin, and the explanation is the purchase price paid for acquired brands sitting on the balance sheet. Goodwill and intangibles raise invested capital without adding to operating profit.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $275.7M, a 14.2% margin, and $190.1M in FY2026 alone against net income of $26.3M. The gap is the clearest sign that the FY2026 profit decline was driven by non-cash charges. A business with a 74.4% gross margin and modest capital needs should convert most of its operating profit into cash, and this one does.",
      "Net debt was $562.0M, or 2.1x EBITDA. That is not alarming, but it is the residue of buying brands rather than building them. Interest costs and debt covenants become relevant if operating margin stays in the single digits.",
      "Inventory is the working-capital line to watch. A cosmetics company with fast trend cycles holds stock ahead of retail resets; if a product misses, the inventory is written down. The FY2026 charge suggests that risk is real, not theoretical.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $116.14 the shares trade at 79.3x trailing earnings, 27.5x EV/EBITDA, 3.8x sales and 24.9x free cash flow, with a 4.0% free-cash-flow yield. The earnings multiple looks extreme, but it is being applied to a depressed profit base. The cash-flow multiple is the fairer comparison at 24.9x.",
      "The peer set includes CAVA at 47.1x EV/EBITDA and DUOL at 31.6x, so e.l.f. is not an outlier on that measure. What distinguishes it is the combination of a high gross margin and a low operating margin, which leaves room for margin recovery if marketing spend normalises.",
      "The valuation therefore hinges on two variables: whether revenue keeps compounding in the high teens or better, and whether operating margin returns to the low-to-mid teens. A 3.8x sales multiple is defensible if both happen and hard to defend if only one does. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed third-party consensus includes 16 analysts with a mean target of $123.75 and a tight range of $103.00 to $140.00. A narrow range around a share price of $116.14 suggests the analysts broadly agree on the near-term numbers and differ mainly on how much margin recovery to credit.",
      "Estimates call for $2.03B of revenue and $3.89 of EPS this fiscal year, then $2.19B and $4.05. Revenue growth of about 8% next year with EPS growth of about 4% is a much more conservative picture than the 39.9% trailing growth rate.",
      "For the next quarter the consensus is $548.2M of revenue and $0.77 of EPS, then $482.2M and $0.16 in the following quarter. The sequential drop in the second estimate reflects the seasonal pattern of the fiscal year, not an expected collapse. These are third-party views, not a Stockmonk rating.",
    ],
  },
  risks: {
    intro:
      "e.l.f. is a brand business with a thin operating margin and a leveraged balance sheet. The risks are concentrated in marketing efficiency, retail concentration and the cost of staying relevant in a fashion-driven category.",
    items: [
      {
        title: "Marketing efficiency",
        severity: "High",
        detail:
          "The company spends most of its gross profit on reach. If a campaign fails or a retailer demands more promotional support, the operating margin disappears quickly.",
        watch: "Operating expense as a share of revenue and the operating margin trend.",
      },
      {
        title: "Trend and product risk",
        severity: "High",
        detail:
          "Cosmetics is fashion. A shade range or formula that misses the trend leaves inventory to be marked down, and the FY2026 charge shows the cost of that.",
        watch: "Inventory levels, write-downs and new-product sell-through.",
      },
      {
        title: "Retail concentration",
        severity: "Medium",
        detail:
          "A small number of large retailers control most shelf space. Losing a reset or a promotional slot would be felt immediately.",
        watch: "Disclosed customer concentration and shelf-space wins or losses.",
      },
      {
        title: "Acquisition integration",
        severity: "Medium",
        detail:
          "Buying brands adds revenue and goodwill. If the acquired brands struggle, the write-down hits earnings and the return on capital stays depressed.",
        watch: "Goodwill and intangible balances and segment-level profitability.",
      },
      {
        title: "Balance-sheet leverage",
        severity: "Medium",
        detail:
          "Net debt of $562.0M is 2.1x EBITDA. A margin downturn would make that ratio climb at the same time as cash flow falls.",
        watch: "Net debt to EBITDA and interest cover.",
      },
    ],
    watchlist: [
      {
        title: "Gross-to-operating margin gap",
        detail:
          "The single best measure of whether brand spend is buying durable growth or just revenue.",
      },
      {
        title: "Free cash flow",
        detail:
          "Cash conversion has been strong and is the best evidence that the earnings volatility is accounting-driven.",
      },
      {
        title: "Shelf space",
        detail:
          "Distribution gains and losses in mass retail are the leading indicator for revenue.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "e.l.f. has built a genuinely large cosmetics brand on a value proposition, with $1.94B of revenue, a 74.4% gross margin and strong cash conversion. The company is asset-light, employs few people and has demonstrated it can take share from larger rivals.",
      "The weak spot is operating discipline at scale. A 74.4% gross margin that turns into an 8.9% operating margin means the company is renting its growth through marketing and retail support. FY2026 showed what happens when those costs arrive faster than the revenue: operating income fell even as sales rose.",
      "Whether the margin compression was a one-off set of charges or a permanent cost of doing business at this size is the first question. The second is whether 51.4% quarterly growth is repeatable without more spending. Together they determine whether 79.3x earnings is a temporary optical issue or a genuine premium.",
    ],
    questions: [
      "How much of the recent growth came from acquisitions versus existing brands?",
      "What caused the FY2026 operating margin decline, and does it recur?",
      "Can operating margin return to the low-to-mid teens at this revenue scale?",
      "How concentrated is the retail customer base?",
    ],
  },
};
