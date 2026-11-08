import type { StockStory } from "./types";

export const WING: StockStory = {
  ticker: "WING",
  kicker: "Consumer & Brands · Franchised restaurants",
  title: "Wingstop collects royalties on other people's restaurants",
  dek: "Most of the 1,500-plus locations are franchised, so revenue is a percentage of system sales rather than the full ticket. That explains a 27.7% operating margin, a 47.9% return on capital and a leveraged balance sheet.",
  readingMinutes: 10,
  takeaways: [
    "Revenue reached $730.1M, up 6.9%, with a 27.7% operating margin.",
    "The franchise model converts system sales into high-margin royalty revenue without owning most restaurants.",
    "Net debt of $1.11B is 4.8x EBITDA, and shareholders' equity is negative after years of buybacks.",
    "The shares are down 32.7% in a year and trade at 7.6x sales despite single-digit revenue growth.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1636222/000163622226000008/wing-20251227.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001636222&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Wingstop sells chicken wings, boneless wings and tenders, cooked to order and tossed in one of eleven sauces, with seasoned fries and house-made dips on the side. The restaurants are small, the menu is short and the kitchen is built for takeout and delivery as much as dine-in. That format travels well, which is why the chain has passed 1,500 locations worldwide from a start in Dallas in 1994.",
      "The important structural fact is that Wingstop owns very few of those restaurants. Most are franchised, so the company's revenue is a royalty on what franchisees sell, plus advertising fund contributions and franchise fees. That is why a business with $730.1M of revenue earns a 27.7% operating margin and a 47.9% return on invested capital.",
      "The strain is visible in the growth rate. Revenue rose 6.9% over the trailing year and 5.3% in the latest quarter, well below the 23.2% compound rate of the past few years. The shares have fallen 32.7% over one year and sit at $163.28 against a 52-week range of $95.82 to $302.80.",
    ],
    quote:
      "A franchisor is a royalty stream with a restaurant attached. The questions are how fast the system grows and how much of each franchisee's sales the company gets to keep.",
  },
  whatItDoes: {
    paragraphs: [
      "A Wingstop franchisee pays to open a restaurant, buys equipment and food, hires staff and keeps the profit from the till. The company collects a royalty on sales, a contribution to the national advertising fund and an initial franchise fee. The franchisee carries the real estate, labour and food costs; the company carries the brand, the supply chain and the standards.",
      "That split is the source of the margin. The company's revenue is not the restaurant's $1.5M of annual sales; it is the royalty slice of it. Costs are corporate staff, marketing, supply-chain support and the small number of company-operated restaurants. Roughly 529 people run the whole system.",
      "The menu is deliberately narrow: wings, tenders, fries, dips and drinks. A short menu means faster training, simpler inventory and fewer kitchen errors, which is exactly what a franchisor needs to replicate a store hundreds of times. Digital ordering supports the takeout-heavy mix and gives the company data on what customers order.",
    ],
    bullets: [
      {
        title: "Royalties",
        detail:
          "A percentage of franchisee sales, collected monthly. The core revenue line and the reason margins are high.",
      },
      {
        title: "Advertising fund",
        detail:
          "Franchisees contribute to a national marketing pool. The money is spent on the brand rather than kept as profit.",
      },
      {
        title: "Company restaurants",
        detail:
          "A small number of company-operated locations. They generate full restaurant revenue and full restaurant costs.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Royalty revenue scales with system-wide sales, not with the number of restaurants alone. A new unit adds a royalty stream from the day it opens, and an existing unit adds more when its same-store sales rise. That is why the company reports system sales alongside its own revenue: the first is the base, the second is the slice.",
      "The cost structure is mostly fixed. Corporate staff, marketing and support functions do not grow one-for-one with restaurants, so each new unit adds revenue at a very high incremental margin. Operating margin has stayed in a band between 25.9% and 29.4% over the last six quarters, which is remarkably stable for a restaurant business.",
      "Gross margin of 40.1% looks low for a franchisor, and the explanation is that the consolidated figure includes company-operated restaurants and the advertising fund, both of which carry costs close to their revenue. The royalty line on its own is far more profitable than the blended number suggests.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 23.2% a year from $282.5M in FY2021 to $696.9M in FY2025. That growth came from new restaurants and from same-store sales at existing ones. The two are correlated: a brand that is gaining popularity opens units faster because franchisees want to build them.",
      "The recent trend has slowed sharply. Quarterly revenue went from $174.3M in Q2 FY25 to $185.1M in Q3 FY26, up 5.3%. That is a mature-chain growth rate, not a 23% compounder. The deceleration is the single most important fact in the file because the valuation still reflects the faster era.",
      "Third-party estimates call for $746.7M of revenue and $4.15 of EPS this fiscal year, then $857.3M and $5.03 next year. The current-year figure is only slightly above the trailing revenue, which implies the analysts expect growth to stay slow for the rest of this year before re-accelerating next year.",
    ],
    bullets: [
      {
        title: "Unit openings",
        detail:
          "New franchised restaurants add royalty revenue with almost no company capital. The main growth engine.",
      },
      {
        title: "Same-store sales",
        detail:
          "Higher sales at existing restaurants lift the royalty base without a new build.",
      },
      {
        title: "International",
        detail:
          "Markets outside the United States add units and brand awareness, though at a smaller royalty base per store in the early years.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a steady climb. Operating income rose from $73.8M in FY2021 to $91.9M, $112.6M, $165.6M and $179.3M in FY2025. Revenue grew 2.5x over that stretch while operating income grew 2.4x, so the margin held rather than expanded. Franchisors do not get much operating leverage once the support infrastructure is built.",
      "Net income of $174.3M in FY2025 exceeded operating income of $179.3M only slightly, which is normal. Return on invested capital of 47.9% is excellent. Return on equity of -15.1% is negative because the company has bought back so much stock that shareholders' equity is negative, which makes ROE meaningless as a measure of profitability.",
      "The quarterly margins have been stable at 25.9% to 29.4%. That stability is a feature of the franchise model: the company does not absorb food-cost inflation or wage pressure directly. It does, however, feel it indirectly if franchisees raise prices and customers respond by buying less.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $116.6M, a 16.0% margin, and the annual path rose from $20.9M in FY2021 to $105.6M in FY2025. The gap between net income and free cash flow is modest because the business needs little capital; the main uses of cash are dividends and buybacks rather than new restaurants.",
      "Net debt was $1.11B, or 4.8x EBITDA, and the company pays a dividend with a 0.8% yield. That leverage is high for a franchisor, but it is a deliberate capital-structure choice rather than a sign of distress. The debt has been used to fund repurchases, which is why equity is negative and why interest costs matter.",
      "The risk is that the royalty stream is stable but not immune to a consumer downturn. A 4.8x leverage ratio on a business with single-digit revenue growth leaves less room for error than the margin line suggests.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $163.28 the shares trade at 37.7x trailing earnings, 23.8x EV/EBITDA, 7.6x sales and 37.9x free cash flow, with a 2.6% free-cash-flow yield. Those multiples are high for a company growing revenue 6.9%, and they are the reason the stock has fallen 32.7% over the past year.",
      "The 7.6x sales multiple is the highest in the peer set by a wide margin, but the comparison is misleading. Wingstop's revenue is a royalty slice, not the full restaurant ticket, so a sales multiple on franchisor revenue is not comparable with a sales multiple on a company-operated chain. EV/EBITDA and price to free cash flow are the fairer measures.",
      "At 23.8x EV/EBITDA, the shares are priced for a return to faster unit growth. If openings and same-store sales stay in the mid-single digits, the multiple has room to compress further. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed third-party consensus includes 26 analysts with a mean target of $185.50 and a range of $120.00 to $265.00. The mean is about 14% above the share price, a modest gap after a 32.7% decline.",
      "Estimates call for $746.7M of revenue and $4.15 of EPS this fiscal year, then $857.3M and $5.03. That implies about 15% revenue growth next year, a re-acceleration from the 5.3% latest quarter. The forecast is the key assumption in the file.",
      "For the next quarter the consensus is $192.0M of revenue and $0.70 of EPS, then $209.6M and $1.22. The low near-term EPS estimate reflects the seasonal cost pattern rather than a expected profit collapse. These are third-party views, not a Stockmonk rating.",
    ],
  },
  risks: {
    intro:
      "Wingstop's margins are protected by the franchise structure, but its growth and its balance sheet are not. The risks are a slower opening pipeline, a consumer that trades down, and leverage that limits flexibility.",
    items: [
      {
        title: "Unit growth slowdown",
        severity: "High",
        detail:
          "Royalty revenue depends on new restaurants and higher same-store sales. Revenue growth of 6.9% suggests both are running below the historical pace.",
        watch: "Net unit openings and same-store sales at existing restaurants.",
      },
      {
        title: "Franchisee economics",
        severity: "High",
        detail:
          "If franchisees earn thin returns, they stop opening restaurants and may close marginal ones. The company's revenue depends on their profitability, not its own.",
        watch: "Franchisee unit volumes, closures and disclosed franchisee profitability.",
      },
      {
        title: "Leverage",
        severity: "Medium",
        detail:
          "Net debt of $1.11B is 4.8x EBITDA. A revenue decline would push that ratio higher and limit buybacks or dividends.",
        watch: "Net debt to EBITDA and interest cover.",
      },
      {
        title: "Chicken costs and pricing",
        severity: "Medium",
        detail:
          "Wings are the core input and their price is volatile. Franchisees absorb the cost, but sustained increases eventually reach the customer.",
        watch: "Wing prices and menu price increases.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "At 37.7x earnings and 7.6x sales, a mid-single-digit grower carries a growth multiple. The 32.7% one-year decline shows how quickly that can unwind.",
        watch: "Forward growth estimates against the EV/EBITDA multiple.",
      },
    ],
    watchlist: [
      {
        title: "System sales",
        detail:
          "The royalty base. It matters more than the company's own revenue line for judging brand health.",
      },
      {
        title: "Net unit growth",
        detail:
          "The clearest measure of whether franchisees still want to build restaurants.",
      },
      {
        title: "Leverage",
        detail:
          "A 4.8x ratio on a slowing business is the constraint on capital returns.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Wingstop is a high-return franchisor with a simple menu, a loyal customer base and a model that turns system sales into royalty income. A 27.7% operating margin and a 47.9% return on invested capital are the proof that the structure works.",
      "The problem is that the growth has slowed to mid-single digits while the valuation still assumes a return to the mid-teens. The shares have fallen 32.7% over a year, but at 37.7x earnings they are not obviously cheap.",
      "Track system sales rather than company revenue, franchisee profitability rather than company margin, and the 4.8x leverage ratio. Those three numbers describe the business better than the consolidated income statement.",
    ],
    questions: [
      "What is the split between new unit openings and same-store sales in the 6.9% growth?",
      "How profitable is a typical franchisee, and is that changing?",
      "Can the company de-lever if revenue growth stays in the mid-single digits?",
      "Why is the sales multiple so much higher than peers, and is that comparison meaningful?",
    ],
  },
};
