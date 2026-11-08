import type { StockStory } from "./types";

export const PG: StockStory = {
  ticker: "PG",
  kicker: "Consumer staples · Branded household and personal care",
  title: "Procter & Gamble sells the same products every month, and that is the point",
  dek: "Detergent, shampoo, razors and toothpaste are bought on habit rather than fashion. The business earns a 22.6% operating margin by charging a premium for brands and spending heavily to defend them.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $87.9B, up 3.5%, with a 49.8% gross margin and a 22.6% operating margin.",
    "Operating income fell from $20.45B in fiscal 2025 to $19.75B in fiscal 2026 even as revenue rose, so margin is the pressure point.",
    "Free cash flow of $15.34B is 17.4% of revenue, and interest is covered 90.1 times.",
    "At 16.6x EV/EBITDA the shares are cheaper than Colgate at 21.8x and Coca-Cola at 24.1x, despite a similar habit-driven customer base.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/80424/000008042426000103/pg-20260630.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000080424&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Procter & Gamble sells branded consumer goods that households replace constantly: laundry detergent, shampoo, razors, toothpaste, nappies, toilet paper and over-the-counter medicines. It employs 97,000 people and reaches customers through mass merchandisers, grocery stores, membership clubs, drug stores and department stores.",
      "The economics of a habit business are different from a fashion business. Demand is stable, the product is cheap relative to a household budget, and the purchase decision is made in seconds at the shelf. That gives the company pricing power, but only as long as the brand is worth more to the shopper than the retailer's own-label alternative sitting next to it.",
      "Trailing revenue is $87.9B, up 3.5%, with an 18.2% net margin. The shares closed at $165.40 for a market capitalisation of $383.4B, near the top of a 52-week range of $137.62 to $170.52, and the stock has returned 16.5% over the past year.",
    ],
    quote:
      "A staples company's growth is mostly price and mix. Volume is what it protects with advertising, and the advertising is what the 49.8% gross margin pays for.",
  },
  whatItDoes: {
    paragraphs: [
      "The portfolio is organised around daily routines rather than around retail categories. Fabric and home care covers laundry and cleaning. Beauty and grooming covers hair, skin, shaving and deodorant. Health care covers oral care, respiratory treatments and pain relief. Baby, feminine and family care covers nappies, wipes and paper products.",
      "Each category has the same structure: a few strong brands, a retailer shelf, and a competitor or a private label trying to take space. P&G's advantage is scale in manufacturing and advertising. A single detergent plant serves a region, and a single campaign covers many markets, so the cost per unit of reach is lower than a smaller brand can achieve.",
      "The company sells in many countries, with a meaningful share of revenue outside the United States. That geographic spread diversifies the demand cycle but adds currency translation and exposes results to local competitive conditions in each market.",
    ],
    bullets: [
      {
        title: "Fabric and home care",
        detail:
          "Laundry detergent and cleaning products. High household penetration and heavy price competition from private label.",
      },
      {
        title: "Beauty and grooming",
        detail:
          "Hair, skin, shaving and deodorant. Higher price points and more marketing intensity than household basics.",
      },
      {
        title: "Health and family care",
        detail:
          "Oral care, medicines, nappies and paper. Stable demand, with volume tied to births and household formation.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is units sold multiplied by price, adjusted for mix. A premium shampoo contributes more per unit than a value detergent, so shifting the mix toward higher-priced products raises revenue without selling more physical cases. Cost of goods takes raw materials, packaging, manufacturing and freight, leaving the 49.8% gross margin.",
      "The gap between the 49.8% gross margin and the 22.6% operating margin is the cost of being a branded business. Advertising, promotion, shelving fees, sales forces and research all sit in that gap. The company spends a large share of revenue persuading shoppers to pay a premium, and that spending is the moat: a new entrant has to match it before it can match the price.",
      "The mechanism cuts both ways. When input costs rise, P&G can raise prices because the brand supports it, but each increase widens the gap with private label and invites shoppers to try the cheaper option. When input costs fall, the company can choose between rebuilding margin and cutting prices to defend volume.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 3.5% a year from $80.19B in fiscal 2022 to $87.03B in fiscal 2026, and the trailing figure is $87.9B after 3.5% growth. The latest quarter grew 4.0%. This is a business that grows with population, inflation and premiumisation, not with new markets.",
      "The consensus expects $89.79B of revenue and $6.98 of EPS this fiscal year, then $92.60B and $7.40. That implies revenue a little above the current year's $89.79B and earnings a little above $6.98, a combination that requires a little margin expansion. Given that fiscal 2026 operating income fell, that is the assumption to test.",
      "The realistic drivers are price, mix and emerging-market penetration. The constraint is volume: in developed markets, household penetration is close to saturation, so growth has to come from convincing existing customers to trade up or from taking share. Both are expensive, and both show up in the advertising line before they show up in revenue.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a business holding its margin rather than expanding it. Operating income was $17.81B, $18.13B, $18.55B and $20.45B in the four years to fiscal 2025, then $19.75B in fiscal 2026. Revenue rose from $80.19B to $87.03B over the five years, so the last year is the odd one: more sales, less operating profit.",
      "The quarterly pattern explains where the pressure came from. Operating margin was 26.2% in Q1 FY26 and 24.2% in Q2, then 21.5% in Q3 and 18.6% in Q4. The first quarter of fiscal 2027 rebounded to 25.5% on $23.28B of revenue. A single weak quarter can be timing; two in a row during the spring suggests real cost pressure.",
      "Return on equity and return on invested capital are not available in this dataset, which limits the comparison with peers. What is available is the interest cover of 90.1 times, which says the company's debt is small relative to its operating profit and that interest is not shaping the results.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $15.34B over the trailing period, a 17.4% margin, and $15.15B in fiscal 2026. The five-year range is $13.57B to $16.52B, so cash generation is remarkably stable. That stability is the practical benefit of selling repeat-purchase products: inventory turns predictably and customers pay quickly.",
      "The company returns most of that cash to shareholders through dividends and buybacks. Because the dataset does not include net debt for this company, the balance sheet cannot be assessed directly here; the interest cover is the available proxy, and it points to modest leverage.",
      "Capital expenditure is directed at manufacturing capacity, cost-saving projects and new product launches. The spending is relatively small compared with the cash generated, which is why a staples company with slow growth can still return a large share of its earnings.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $165.40 the shares trade at 23.9x trailing earnings, 16.6x EV/EBITDA, 4.4x sales and 25.0x free cash flow, for a free-cash-flow yield of 4.0%. Those are ordinary multiples for a staples company, not a premium one.",
      "The peer set makes the relative position clear. Colgate trades at 37.4x earnings and 21.8x EBITDA with a 14.8% operating margin; Coca-Cola trades at 28.1x and 24.1x with a 30.0% margin; Philip Morris at 28.8x and 16.2x. P&G combines a higher margin than Colgate with a lower multiple, which is the kind of gap that appears when one company's recent growth has disappointed.",
      "The multiple therefore assumes that the fiscal 2026 margin dip was temporary. If operating margin returns to the fiscal 2025 level, earnings recover without any revenue growth. If it does not, a 23.9x earnings multiple on 3% growth is fully valued. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-three analysts contribute to the third-party consensus, with a mean target of $174.04 and a range of $151.00 to $190.00. The mean is modestly above the last close, a narrow gap for a large, well-covered staples company.",
      "Estimates call for $22.85B of revenue and $1.81 of EPS next quarter, then $21.75B and $1.63, with $89.79B and $6.98 for the fiscal year. The second quarter is seasonally smaller, which is why the revenue estimate falls sequentially.",
      "The following year's $92.60B and $7.40 assumes both revenue and earnings a little above the current year's forecast. That is a forecast of steady margin recovery, and it is the assumption a reader should check against the next two quarterly reports.",
    ],
  },
  risks: {
    intro:
      "P&G's risks are competitive and cost-driven. The customer base is stable and the balance sheet is not stretched, so the things that can change the story are private label, input costs and the price of defending a brand.",
    items: [
      {
        title: "Private-label competition",
        severity: "High",
        detail:
          "Retailers' own brands have improved and are priced well below national brands. Each price increase widens the gap and gives shoppers a reason to switch.",
        watch:
          "Volume growth versus price growth, and market share in the largest categories.",
      },
      {
        title: "Input and freight costs",
        severity: "High",
        detail:
          "Resins, pulp, chemicals and transport are significant costs. When they rise faster than prices, the gross margin falls before management can respond.",
        watch:
          "Gross margin and commentary on commodity cost headwinds.",
      },
      {
        title: "Advertising efficiency",
        severity: "Medium",
        detail:
          "The brand premium is supported by continuous spending. If the money buys less reach as media fragments, the cost of defending share rises.",
        watch:
          "Marketing spend as a share of revenue and volume trends behind it.",
      },
      {
        title: "Currency and international markets",
        severity: "Medium",
        detail:
          "A large share of revenue is earned outside the United States. A stronger dollar reduces reported revenue and earnings without any change in the underlying business.",
        watch:
          "Organic growth versus reported growth and the currency impact disclosed each quarter.",
      },
      {
        title: "Retailer concentration",
        severity: "Medium",
        detail:
          "A few large retailers control most of the shelf space. They can demand better terms, promote private label and delist slow-moving items.",
        watch:
          "Changes in retailer mix and any shift in promotional spending.",
      },
    ],
    watchlist: [
      {
        title: "Volume",
        detail:
          "Price-led growth is only healthy while volume holds. Falling volume with rising revenue means the brand is losing customers.",
      },
      {
        title: "Gross margin",
        detail:
          "The first place input costs appear. A falling gross margin usually precedes a falling operating margin by a quarter.",
      },
      {
        title: "Operating margin recovery",
        detail:
          "Fiscal 2026 broke a four-year trend. Whether margin returns to the fiscal 2025 level is the central question in the valuation.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Procter & Gamble is a portfolio of habit-driven brands with a 49.8% gross margin, a 22.6% operating margin and $15.34B of free cash flow. It grows slowly, returns most of its cash and does not depend on borrowing.",
      "The educational point is what the gap between gross and operating margin buys. More than half of the gross profit is consumed by the operating costs that sit below it - advertising, promotion, selling and administration - and that spending is what keeps shoppers paying a premium. It is a real cost and a real asset at the same time.",
      "The unresolved question is margin. Revenue grew 3.5% in fiscal 2026 while operating income fell, and the shares at 16.6x EBITDA assume that reverses. A reader should watch volume and gross margin together before concluding that it will.",
    ],
    questions: [
      "Is volume growing or is all of the revenue growth price?",
      "How much of the fiscal 2026 margin decline was commodities and how much was marketing?",
      "What is the price gap to private label in the largest categories?",
      "Does the 16.6x EBITDA multiple already assume a full margin recovery?",
    ],
  },
};
