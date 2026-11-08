import type { StockStory } from "./types";

export const PEP: StockStory = {
  ticker: "PEP",
  kicker: "Consumer staples · Snacks and beverages",
  title: "PepsiCo sells two businesses at once, and they earn very different margins",
  dek: "Snacks are a branded food business with pricing power. Beverages are a manufacturing and distribution business with heavy assets. The combined 16.7% operating margin hides that split.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $93.1B, down 2.5%, with a 54.5% gross margin and a 16.7% operating margin.",
    "Fiscal 2025 operating income fell to $11.50B from $12.89B while revenue rose, so the margin compressed.",
    "At 9.6x EV/EBITDA the shares are the cheapest in this staples group, below Coca-Cola at 24.1x and Procter & Gamble at 16.6x.",
    "Free cash flow of $11.52B is 12.4% of revenue, far above any of the five annual figures, which needs explaining.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/77476/000007747626000007/pep-20251227.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000077476&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "PepsiCo makes and sells snacks and beverages. The snack business — crisps, tortilla chips, crackers and dips — sits mainly in the food aisles; the beverage business covers carbonated soft drinks, water, sports drinks, juice and tea. The company sells in more than 200 countries and territories.",
      "That combination is unusual among staples companies because the two halves have different economics. A bag of crisps is a branded food product with a short ingredient list, high gross margin and strong pricing power. A bottle of soft drink is heavier, more expensive to ship, and in many markets is produced and distributed through company-owned bottling operations that carry real assets.",
      "Trailing revenue is $93.1B but it is 2.5% below a year earlier, and the shares closed at $141.34 for a market capitalisation of $192.6B, only 37% of the way up a 52-week range of $123.47 to $171.48. The stock has returned 3.9% over the past year and 2.3% over five — a long stretch of going nowhere.",
    ],
    quote:
      "A snack travels better than a drink. That single physical fact is why the food half of PepsiCo earns more per dollar of sales than the beverage half, and why the mix between them matters.",
  },
  whatItDoes: {
    paragraphs: [
      "The snack portfolio is the profit engine. It includes global chip and cracker brands and a large set of local ones, because taste is local even when the brand is global. The customer buys on impulse, the pack is light, and the shelf life is long enough to allow efficient distribution.",
      "The beverage portfolio is broader but thinner in margin. Carbonated soft drinks are the volume base, with water, sports drinks and juice adding occasions. In many markets the company owns or controls the bottling and distribution, which gives it control over the route to market and adds factories, trucks and coolers to the balance sheet.",
      "Both halves sell through the same retail customers — grocery, convenience, wholesale and food service — which is the practical reason the two sit together. One delivery can carry both, and one sales team can negotiate both. The company employs a large workforce across manufacturing, selling and distribution.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is cases sold multiplied by price per case. For snacks, the case is light and the price is high relative to the cost of potatoes, oil, seasoning and packaging. For beverages, the case is heavy, the packaging is a larger share of cost, and the distribution cost per case is higher. That is why the combined gross margin of 54.5% sits below a pure food company and above a pure bottler.",
      "The operating margin of 16.7% is what remains after advertising, selling and the cost of running the distribution network. In snacks, most of the cost is variable and the brand does the selling. In beverages, a large part of the cost is fixed: plants, trucks, coolers placed in shops, and the people who drive and stock them. Fixed costs mean beverages have high incremental margins once volumes rise, and poor margins when volumes fall.",
      "The two halves therefore respond differently to a slowdown. Snacks can protect profit with price and mix. Beverages need volume to cover the route, so a decline in cases hurts disproportionately. That asymmetry is why the mix between food and drink matters more than the consolidated revenue number.",
    ],
    bullets: [
      {
        title: "Snacks",
        detail:
          "Branded food with light packaging, long shelf life and strong pricing power. The higher-margin half.",
      },
      {
        title: "Beverages",
        detail:
          "Heavier product, more packaging cost and more distribution assets. Volume-sensitive because so much of the cost is fixed.",
      },
      {
        title: "Distribution",
        detail:
          "Shared routes and shared retail relationships. The advantage of holding both businesses, and the reason the cost base is large.",
      },
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 5.7% a year from $79.47B in fiscal 2021 to $93.92B in fiscal 2025, but the trailing figure of $93.1B is 2.5% lower than a year earlier. That is a genuine change of direction: the five-year record is growth, and the last twelve months are not.",
      "The consensus expects $99.22B of revenue and $8.42 of EPS this fiscal year, then $101.77B and $8.64. Against a trailing $93.1B, that first figure assumes a sharp reversal from the recent decline. Either volumes recover, or price and mix have to do more work than they have been doing.",
      "The structural drivers are population, per-capita consumption in developing markets and premiumisation into smaller packs and higher-priced formats. The constraint is that in developed markets, both snacks and soft drinks face pressure from private label, from health regulation and from changing habits. The company's answer has been to widen the portfolio and to lean on price, which works until the customer decides the gap is too wide.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating income was $11.16B, $11.36B, $11.99B and $12.89B in the four years to fiscal 2024, then $11.50B in fiscal 2025. Revenue rose in every one of those years. The last year is therefore a margin story: more sales, less operating profit, which points to costs rising faster than price.",
      "The quarterly record shows the fourth quarter as the weak point. Operating margin was 12.1% in Q4 FY25, then 16.5%, 16.6% and 16.9% in the three quarters of fiscal 2026. The fourth quarter carries year-end charges and the weakest seasonal volume, so the trailing margin of 16.7% is a blend of a strong nine months and one difficult quarter.",
      "Return on equity is 50.4% and return on invested capital is 108.3%. Both are extremely high, and both are measured against a small capital base rather than a large one. They should be read as a sign that the recorded assets are modest relative to profit, not as proof of superior economics.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $11.52B over the trailing period, a 12.4% margin. The five annual figures are $6.99B, $9.69B, $7.92B, $7.19B and $7.67B, so the trailing number is well above any recent year. A gap that large usually comes from working capital or from the timing of capital expenditure, and the cash-flow statement is where to check it.",
      "Net cash is $11.16B, which means the company holds more cash than debt. For a business with a large bottling footprint, that is a strong position: the capital spending is heavy but the balance sheet is not relying on borrowed money to fund it.",
      "The cash supports the dividend, buybacks and continued investment in manufacturing and distribution. The main call on cash is the beverage network: trucks, coolers, plants and the technology that schedules them. That spending is necessary to defend the route to market, and it is the reason the beverage half earns less on capital than the snack half.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $141.34 the shares trade at 17.0x trailing earnings, 9.6x EV/EBITDA, 1.9x sales and 16.7x free cash flow, for a 6.0% free-cash-flow yield. Those are value multiples in a sector that mostly trades at growth multiples.",
      "The comparison is stark. Coca-Cola trades at 24.1x EBITDA on a 30.0% operating margin; Procter & Gamble at 16.6x on 22.6%; Colgate at 21.8x on 14.8%. PepsiCo at 9.6x has a lower margin than all of them and a larger, more capital-intensive revenue base. The discount is not a mispricing to be arbitraged; it is the market's judgement about growth and about the beverage business.",
      "The question is whether the discount is too wide. A 6.0% free-cash-flow yield on a business with this brand portfolio is unusual. It implies that the market expects little growth and doubts the durability of the margin. If either assumption improves, the multiple has room to recover. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-two analysts contribute to the third-party consensus, with a mean target of $141.59 and a range of $106.00 to $169.00. The mean is essentially identical to the last close, which is the clearest statement in this report that the sell side sees the shares as fairly valued.",
      "Estimates call for $30.43B of revenue and $2.24 of EPS next quarter, then $19.89B and $1.60, with $99.22B and $8.42 for the fiscal year. The drop between the two quarters is seasonality: the fourth quarter is the largest of the year.",
      "The following year's $101.77B of revenue and $8.64 of EPS assumes only a small increase on the current year's $99.22B and $8.42. That is a modest forecast, and it is consistent with a mature staples business rather than with the recovery implied for the current year.",
    ],
  },
  risks: {
    intro:
      "PepsiCo's risks are volume and cost. The brands are strong and the balance sheet holds net cash, so the concerns are whether customers keep buying at the current price and whether the beverage network can be run profitably as volumes shift.",
    items: [
      {
        title: "Volume decline in beverages",
        severity: "High",
        detail:
          "The beverage business carries fixed plant and route costs. Falling cases reduce revenue and leave the cost base behind, which compresses the margin faster than the revenue line suggests.",
        watch:
          "Beverage case volume and the mix between concentrate and company-bottled markets.",
      },
      {
        title: "Input costs",
        severity: "High",
        detail:
          "Potatoes, cooking oil, aluminium, resin and corn sweeteners all feed into the gross margin. Hedging delays the effect but does not remove it.",
        watch:
          "Gross margin and commodity cost commentary each quarter.",
      },
      {
        title: "Private label and price gaps",
        severity: "Medium",
        detail:
          "Years of price increases have widened the gap to retailers' own brands. In a squeeze, shoppers can trade down without leaving the category.",
        watch:
          "Volume versus price contribution and market share in snacks.",
      },
      {
        title: "Health regulation and taxes",
        severity: "Medium",
        detail:
          "Sugar taxes, labelling rules and restrictions on marketing to children raise costs and reduce demand in the markets that adopt them.",
        watch:
          "New taxes in large markets and the share of revenue from affected categories.",
      },
      {
        title: "Currency and international instability",
        severity: "Medium",
        detail:
          "A large share of revenue is earned outside the United States. Currency moves and local inflation change reported results without changing the underlying business.",
        watch:
          "Organic growth versus reported growth and the currency impact disclosed.",
      },
    ],
    watchlist: [
      {
        title: "Organic volume",
        detail:
          "Price can carry revenue for a while. Volume is what tells you whether customers are still buying the product.",
      },
      {
        title: "Operating margin",
        detail:
          "The 16.7% figure is the average of a strong snacks business and a weaker beverage one. Watch the direction, not the level.",
      },
      {
        title: "Free cash flow quality",
        detail:
          "The trailing figure is far above the annual record. Check the cash-flow statement before treating it as the new run rate.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "PepsiCo is two businesses in one: a high-margin snack portfolio and a capital-intensive beverage network, sold through the same retail relationships. Trailing revenue is $93.1B, operating margin is 16.7%, free cash flow is $11.52B and the balance sheet holds $11.16B of net cash.",
      "The educational point is that a consolidated margin can hide a lot. The 16.7% operating margin is not a single number describing one business; it is the weighted result of a food business with pricing power and a drinks business with factories and trucks. Reading the segments separately explains why the multiple is lower than Coca-Cola's.",
      "The valuation is the open question. At 9.6x EBITDA and a 6.0% free-cash-flow yield, the market is pricing slow growth and a permanent margin discount. If volumes stabilise and the beverage network holds, that is a conservative price. If the decline continues, it is not.",
    ],
    questions: [
      "How much of the revenue decline is volume rather than currency or divestitures?",
      "What margin does the snack business earn compared with beverages?",
      "How much capital is tied up in the company-owned bottling network?",
      "Is the $11.52B free cash flow repeatable, or did working capital flatter it?",
    ],
  },
};
