import type { StockStory } from "./types";

export const BLK: StockStory = {
  ticker: "BLK",
  kicker: "Asset management · Funds, ETFs and investment technology",
  title: "BlackRock earns a fee on assets it does not own",
  dek: "The revenue line is a percentage of other people's savings, so market levels and fund flows matter more than factory output. Scale, product breadth and the Aladdin platform explain why a 30% operating margin is possible in a fee-compressed industry.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $28.5B, up 24.7%, but part of that growth came from acquisitions rather than organic flows.",
    "Operating margin is 32.5% and net margin is 24.6%, healthy for an industry under constant fee pressure.",
    "Free cash flow is $4.8B, a 16.8% margin, and the balance sheet carries $371M of net cash.",
    "At $1,178.87 the shares trade at 24.9x trailing earnings and 23.7x EV/EBITDA.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/2012383/000119312526071966/blk-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002012383&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "BlackRock is the world's largest asset manager. It runs index funds, exchange-traded funds, active strategies, money-market funds and alternative investments for institutions and individuals, and it sells the technology that many other managers use to run their own portfolios. The company does not take deposits or make loans; it charges a fee on the assets it manages.",
      "Trailing revenue of $28.5B is 24.7% higher than a year earlier. Some of that is organic growth from flows and markets, and some is the consolidation of acquired businesses, which makes the headline rate a blend rather than a clean same-store number. Operating margin is 32.5% and net margin is 24.6%, both respectable in an industry where passive products keep pushing fees down.",
      "At $1,178.87 the equity is worth $174.6B, or 24.9x trailing earnings. The shares sit 81% of the way up a 52-week range of $917.39 to $1,242.12. A five-year holder has made 37.9%, well below the payment networks over the same period, because asset management is a scale business with a lower ceiling on margins.",
    ],
    quote:
      "An asset manager's revenue is a fee rate multiplied by assets. The fee rate tends to fall; the assets have to grow faster just to stand still.",
  },
  whatItDoes: {
    paragraphs: [
      "The product range spans the risk spectrum. Index and ETF products track benchmarks at a low fee and compete on cost, liquidity and breadth. Active strategies try to beat a benchmark and charge more. Alternatives and private markets charge the most but are less liquid and harder to scale. Money-market funds sit at the short end and earn a fee on cash balances.",
      "The client base is institutional — pensions, insurers, sovereign funds, endowments — plus financial advisers and individual investors. Distribution runs through direct relationships, consultant gatekeepers and platforms. The iShares brand is the consumer-facing part; the institutional relationships are the larger asset pool but the quieter story.",
      "Aladdin, the technology platform, is a separate business inside the asset manager. It provides portfolio management, risk analytics and trading tools to other institutions, including competitors. That is a high-margin, recurring revenue stream that does not depend on BlackRock's own fund flows, and it deepens the relationship with clients who might otherwise use a rival manager.",
    ],
    bullets: [
      {
        title: "Index and ETFs",
        detail:
          "Low-fee, high-volume products that compete on scale, liquidity and product breadth.",
      },
      {
        title: "Active and alternatives",
        detail:
          "Higher-fee strategies where performance and access justify the price.",
      },
      {
        title: "Aladdin and technology",
        detail:
          "Portfolio and risk software sold to institutions. Recurring revenue with software margins.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Base management fees are a percentage of average assets under management. The rate depends on the product: an index ETF might charge a few basis points, an active equity fund tens of basis points, and an alternative strategy more. Performance fees are earned when a fund beats a hurdle. Technology and distribution fees are separate contractual streams.",
      "The cost structure is people, technology and distribution. Portfolio managers, researchers, salespeople and engineers are the product; the platform and data are the factory. Because the marginal cost of managing an additional dollar is low, operating leverage is strong when assets grow — but fee compression works in the opposite direction, and the mix shift toward passive products lowers the average fee rate over time.",
      "The competitive position is scale plus breadth. Scale lowers the unit cost of technology, compliance and distribution; breadth lets the sales force offer a client a complete portfolio rather than a single fund.",
      "The weak point is that scale does not protect a high fee rate. If a competitor offers the same exposure for less, the money can move, especially in indexed products.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $19.37B in FY2021 to $24.22B in FY2025, with a dip to $17.87B in FY2022 when markets fell. The trailing $28.54B extends the recovery and includes acquired revenue. This is a business whose top line moves with two variables: market levels, which change the asset base without any selling, and net flows, which reflect whether clients are adding or withdrawing money.",
      "Consensus estimates call for $29.51B of revenue and $57.85 of EPS this fiscal year, then $32.79B and $64.82 next year. The revenue path is uneven between the two years, which probably reflects the timing of acquisitions and market assumptions rather than a sudden change in the underlying business.",
      "The durable drivers are global savings growth, the shift from active to index, and the demand for private markets and technology. The brakes are a bear market, fee compression, client outflows from active strategies and regulatory limits on the fees large managers can charge. Asset management is a cyclical business wearing a subscription-business costume.",
    ],
    bullets: [
      {
        title: "Market levels",
        detail:
          "A rising market lifts the asset base and fee revenue without any new client money.",
      },
      {
        title: "Net flows",
        detail:
          "Organic growth depends on winning mandates and keeping existing clients invested.",
      },
      {
        title: "Mix and acquisitions",
        detail:
          "Alternatives and technology add fee rate and diversification; deals add scale but also integration risk.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 32.5%, net margin is 24.6% and diluted EPS is $43.92. Return on equity is 16.6% and return on invested capital is 17.5%. Those returns are solid but not exceptional, because asset management carries goodwill from acquisitions and because the fee rate is under constant pressure.",
      "The annual record shows the cyclicality: revenue of $19.37B, $17.87B, $17.86B, $20.41B and $24.22B across the five years shown, with operating income falling from $7.45B in FY2021 to $6.28B in FY2023 before recovering to $7.04B in FY2025. FY2025 operating income was lower than FY2021's on much higher revenue, a sign that the mix and cost base have shifted.",
      "Quarterly margins have been volatile: 31.9%, 30.0%, 23.7%, 42.0%, 34.7% and 30.0% over the last six quarters. The Q1 FY26 margin of 42.0% and the Q4 FY25 margin of 23.7% are not a trend; they reflect performance fees, seasonal costs and acquisition effects. A reader should average across four quarters rather than react to one.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $4.78B on $28.54B of revenue, a 16.8% margin. That is lower than the net margin because asset managers invest in seed capital, technology and acquisitions, and because compensation can be paid partly in stock. The five-year record shows free cash flow ranging from $3.55B to $10.15B, a wider range than the revenue line.",
      "The balance sheet carries $371M of net cash, which is negligible relative to a $174.6B market capitalization. That means enterprise value is almost the same as equity value, so EV/EBITDA and P/E tell a similar story. It also means the company has limited balance-sheet capacity for a large acquisition without issuing debt or stock.",
      "Capital return is a mix of dividends and buybacks. The dividend yield is modest, and repurchases are the larger lever. Because the business generates cash without heavy capital expenditure, the main constraint on buybacks is the price of the shares and the cash needed for acquisitions and seed investments.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $1,178.87, BlackRock trades at 24.9x trailing earnings, 23.7x EV/EBITDA, 6.1x sales and 36.5x free cash flow. The peer table puts Visa at 37.1x earnings and Mastercard at 33.5x, while the banks trade between 10.6x and 13.9x. BlackRock sits between the asset-light networks and the balance-sheet banks, which fits a fee business with cyclical asset levels.",
      "The useful comparison is price to assets under management or price to fee revenue, but neither is in this dataset. On P/E alone, 24.9x is a premium to the market and requires either continued asset growth or margin expansion. The risk is that a market decline compresses both the asset base and the multiple at the same time.",
      "Stockmonk does not publish a target price. The third-party mean in the next section is context, and the 1,250-to-1,531 range is wide enough to show that analysts disagree about flows and fees as well as about markets.",
    ],
  },
  analysts: {
    paragraphs: [
      "Seventeen analysts contribute to the attributed consensus, with a mean target of $1,361.06 and a range of $1,250.00 to $1,531.00. Even the low end is above the latest close, which is a strong signal of sentiment but not a forecast.",
      "Estimates call for $29.51B of revenue and $57.85 of EPS this fiscal year, then $32.79B and $64.82 next year. The EPS estimate rises faster than revenue, which assumes margin expansion and buybacks.",
      "These are third-party forecasts and can change. A mean target is not a Stockmonk rating, and for an asset manager the estimate dispersion often reflects different assumptions about market returns rather than about the company's competitive position.",
    ],
  },
  risks: {
    intro:
      "BlackRock's risks are market-driven and competitive. The balance sheet is conservatively positioned, so the main threat is a lower asset base and a lower fee rate at the same time.",
    items: [
      {
        title: "Market decline",
        severity: "High",
        detail:
          "Revenue is charged on assets. A 20% market fall reduces the fee base immediately, even if clients stay invested.",
        watch:
          "Assets under management, average fee rate and the split between market movement and net flows.",
      },
      {
        title: "Fee compression and passive mix",
        severity: "High",
        detail:
          "Investors keep moving from active to index products, which charge less. The average fee rate can fall even when assets grow.",
        watch: "Fee rate by product and the mix of active versus index assets.",
      },
      {
        title: "Client flows and mandate losses",
        severity: "Medium",
        detail:
          "Institutional clients can move large mandates quickly. Losing a single big account can offset a quarter of retail inflows.",
        watch:
          "Net inflows by client type and the concentration of large mandates.",
      },
      {
        title: "Acquisition integration",
        severity: "Medium",
        detail:
          "Growth by acquisition adds goodwill, integration costs and culture risk. A poor deal can dilute returns for years.",
        watch: "Goodwill, acquisition spending and segment margin trends.",
      },
      {
        title: "Regulation and political scrutiny",
        severity: "Medium",
        detail:
          "Large asset managers face scrutiny over stewardship, index concentration and the fees charged to retirement savers.",
        watch:
          "Regulatory consultations and any change to fee or disclosure rules.",
      },
    ],
    watchlist: [
      {
        title: "Net flows",
        detail:
          "Organic growth is the clearest evidence that the franchise is winning mandates.",
      },
      {
        title: "Average fee rate",
        detail:
          "The price side of the revenue equation, and the part most exposed to competition.",
      },
      {
        title: "Aladdin revenue",
        detail:
          "The technology stream that is least dependent on market levels.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "BlackRock is a scale asset manager with a technology business attached. The 32.5% operating margin and 16.6% return on equity are good for the industry, but they are not in the same league as a payments network because the fee rate is under constant pressure.",
      "The teaching point is that asset management revenue is a rate times a base. A rising market can hide weak flows, and a falling market can make strong flows look bad. Free cash flow is a better measure than earnings alone here, but it too is cyclical.",
      "The open questions are how much of the recent growth is organic, how fast the fee rate is falling, and whether alternatives and technology can offset the migration to cheap index products.",
    ],
    questions: [
      "How much of the revenue growth came from net flows versus markets and acquisitions?",
      "What is the average fee rate, and how fast is it declining?",
      "How concentrated is the client base among large institutional mandates?",
      "Can Aladdin and private markets grow fast enough to offset passive fee pressure?",
    ],
  },
};
