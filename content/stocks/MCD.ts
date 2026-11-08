import type { StockStory } from "./types";

export const MCD: StockStory = {
  ticker: "MCD",
  kicker: "Restaurants · Franchised quick service",
  title: "McDonald's collects rent and royalties from restaurants it does not run",
  dek: "Franchising turns other people's sales into a 46.9% operating margin. Revenue of $27.8B is a slice of what customers spend, which is why the sales multiple looks so high.",
  readingMinutes: 9,
  takeaways: [
    "Revenue $27.8B, up 5.8%, from royalties, rent and company-operated restaurants.",
    "Operating margin 46.9%; the reported gross margin of -2.6% is a classification artifact.",
    "Free cash flow $7.5B, 27.0% of revenue, against $38.6B of net debt.",
    "At 17.3x EV/EBITDA and 8.4x sales, the multiple prices a royalty stream rather than a restaurant chain.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/63908/000006390826000035/mcd-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000063908&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "More than 30,000 restaurants carry the McDonald's name, and most of them are run by someone else. The company's revenue is not the burger money. It is rent on the property, a royalty on each franchisee's sales, and the sales of the minority of restaurants the company operates itself. That distinction explains almost every number in the file.",
      "Trailing revenue was $27.78B, up 5.8%, and the September quarter produced $7.16B at a 50.2% operating margin with $3.51 of diluted EPS. The shares closed at $276.52, inside a 52-week range of $229.20 to $341.75, for a market capitalisation of $195.2B.",
      "Whether systemwide sales can grow faster than menu prices, and whether franchisees can absorb the reinvestment the brand requires, is what the next few years will settle. The price is unusual: 8.4x sales and 17.3x EV/EBITDA look expensive until you remember that only a fraction of customer spending is booked as revenue.",
    ],
    quote:
      "A franchisor earns a percentage of someone else's revenue and bears little of the cost. That is how a burger chain supports a software margin.",
  },
  whatItDoes: {
    paragraphs: [
      "The menu is standardised where it matters and localised where it sells: breakfast, coffee, burgers, chicken and a value menu, with regional items added by market. Restaurants are a mix of franchised, company-operated and, in some markets, licensed formats such as those in airports and food courts. Drive-through and digital ordering now sit alongside the counter.",
      "The franchisee is the company's customer. It pays rent, a royalty and often a marketing contribution, and in return gets the brand, the operating system and the supply chain. The company employs 200,000 people, but most restaurant staff work for franchisees, which is why the headcount and the revenue per employee both look odd for a business of this size.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "There are three revenue lines. Rent is charged to franchisees for property the company owns or leases and subleases. Royalties are a percentage of franchisee sales. Company-operated restaurant sales are the food revenue the company books directly. Rent and royalties carry very high margins; company sales carry low ones.",
      "That mix produces the 46.9% operating margin. The reported gross margin of -2.6% is not a sign of trouble: food, paper and advertising contributions are recorded in cost of sales while the offsetting franchise revenue sits in revenue, so the ratio is an accounting artifact rather than an economic one. For a franchisor, the operating margin and cash conversion are the measures that carry information.",
      "Capital intensity is real but contained. The company owns a substantial property portfolio, so it spends on maintenance and remodels, but the marginal cost of adding a restaurant is borne mostly by the franchisee. Growth in systemwide sales therefore reaches the company's cash flow with very little incremental capital.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $23.22B in FY2021 to $26.89B in FY2025, and the latest quarter grew 1.1%. That is a business growing through price and unit expansion rather than through traffic, which is the pattern for a mature restaurant brand.",
      "The attributed consensus expects $27.87B this fiscal year and $28.23B next, with EPS of $12.94 and $13.70. Revenue growth of about 4% then 1% paired with much faster earnings growth implies margin expansion and a smaller share count.",
      "The drivers are unit growth in international markets, digital ordering and delivery, loyalty and price. The constraint is the franchisee: a royalty is only worth collecting if the operator earns a decent return, and heavy reinvestment demands can stall new openings.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin was 44.6% in FY2021, 40.4% in FY2022, 45.7% in FY2023, 45.2% in FY2024 and 46.1% in FY2025, reaching 46.9% on a trailing basis and 50.2% in the latest quarter. Operating income rose from $10.36B to $12.39B on 16% more revenue, so the margin gain came from both sales and cost control.",
      "The net line is distorted. The December 2025 quarter carries a net loss far larger than any operating result in the table, which drags the trailing net margin to -39.2%, and the equity base is small enough that return on equity is quoted at 3,172.9%. Neither figure describes the restaurant business.",
      "Diluted EPS was $12.64 on a trailing basis and return on invested capital is 26.9%. Those two are the usable profitability measures, alongside the operating margin.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $7.10B in FY2021, $5.49B in FY2022, $7.25B in FY2023, $6.67B in FY2024 and $7.19B in FY2025, or $7.49B trailing at a 27.0% margin. Cash generation is remarkably stable for a consumer business, which is what a royalty stream should look like.",
      "Net debt is $38.63B, or 2.9x EBITDA. Interest is a fixed claim, and the company has historically funded buybacks with debt, which is why the equity is small and the return on equity is extreme. That structure works while cash flow is stable and becomes uncomfortable if it is not.",
      "At 26.1x free cash flow and a 3.8% free-cash-flow yield, the shares are valued like a long-dated bond with a growth kicker. The sensitivity to interest rates follows from that, not from the burgers.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $276.52 the shares trade at 8.4x sales, 17.3x EV/EBITDA and 26.1x free cash flow. The trailing P/E is not shown because the trailing earnings figure is distorted by the fourth-quarter loss, which is a good reminder that a missing multiple can be as informative as a present one.",
      "The peer table frames the premium. Home Depot trades at 16.1x EV/EBITDA, Lowe's at 12.9x, TJX at 15.6x, Booking at 10.6x and Amazon at 15.6x. McDonald's is at the top of the group, and the franchise margin is the reason.",
      "Within the covered universe the shares rank in the 56th percentile for cheapness on EV/EBITDA, close to the middle. The report stops at the multiple rather than at a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-nine analysts contribute to the attributed consensus, with a mean target of $299.52 and a range of $230.00 to $390.00. The low end is below the current price, which is unusual in a group where targets tend to cluster above the market.",
      "Estimates call for $7.08B of revenue next quarter and $27.87B for the current fiscal year, with EPS of $12.94. The following year is put at $28.23B and $13.70. The revenue path is barely above inflation, so the earnings path depends on margin and buybacks.",
      "For a franchisor, the estimate to test is systemwide sales growth rather than company revenue. A royalty is a percentage of a number that appears nowhere on the income statement.",
    ],
  },
  risks: {
    intro:
      "McDonald's risks run through the franchisee, because the company's revenue is a share of the operator's sales. A healthy franchisee is the asset; a squeezed one is the liability.",
    items: [
      {
        title: "Franchisee economics",
        severity: "High",
        detail:
          "Royalties and rent are fixed claims on restaurant sales. If operator margins thin, new openings slow and remodels are deferred.",
        watch:
          "Franchisee cash flow, closures and the pace of remodels.",
      },
      {
        title: "Traffic and value perception",
        severity: "High",
        detail:
          "Price increases lift revenue per visit but can deter the value customer, and lost traffic is difficult to win back.",
        watch:
          "Comparable sales and guest counts.",
      },
      {
        title: "Food and labour costs",
        severity: "Medium",
        detail:
          "Beef, chicken and wages are the operator's largest costs. A cost increase that cannot be passed on lands on the franchisee first.",
        watch:
          "Commodity cost commentary and franchisee margin.",
      },
      {
        title: "International and currency",
        severity: "Medium",
        detail:
          "A large share of restaurants sit outside the United States, so local demand and exchange rates move the consolidated result.",
        watch:
          "International sales growth and the currency effect on revenue.",
      },
      {
        title: "Leverage and rates",
        severity: "Medium",
        detail:
          "$38.6B of net debt at 2.9x EBITDA makes the equity a leveraged claim on a stable cash flow, sensitive to refinancing costs.",
        watch:
          "Net debt to EBITDA and interest expense.",
      },
    ],
    watchlist: [
      {
        title: "Systemwide sales",
        detail:
          "The base on which royalties are earned, and the number the income statement hides.",
      },
      {
        title: "Franchisee margins",
        detail:
          "The health of the operator decides whether the unit count can grow.",
      },
      {
        title: "Free cash flow",
        detail:
          "It funds the dividend and the buyback, and it is far steadier than reported earnings.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "McDonald's is a franchised restaurant system with $27.8B of revenue, a 46.9% operating margin and $7.5B of free cash flow. It earns a 26.9% return on invested capital and carries $38.6B of net debt.",
      "The reported net margin and return on equity are artifacts of a single quarter and a small equity base. The operating margin, the royalty stream and the cash conversion are what the business actually produces.",
      "The open question is traffic. Revenue growth of 5.8% has come largely from price, and a franchisor can only raise prices as long as its operators remain competitive on value.",
    ],
    questions: [
      "How much of sales growth came from price rather than more visits?",
      "What does a franchisee earn per restaurant after rent, royalties and labour?",
      "Is the unit count growing, and in which markets?",
      "How much of free cash flow goes to interest versus buybacks?",
    ],
  },
};
