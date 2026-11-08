import type { StockStory } from "./types";

export const KO: StockStory = {
  ticker: "KO",
  kicker: "Beverages · Concentrate and brand licensing",
  title: "Coca-Cola sells syrup, not bottles, and that changes everything",
  dek: "The company makes concentrate and owns the brands; independent bottlers put the drink in a can and drive it to a shop. That is why the gross margin is 62.3% and the return on capital is 52.8%.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $51.1B, up 7.1%, with a 62.3% gross margin and a 30.0% operating margin.",
    "Return on invested capital of 52.8% reflects a model where bottlers, not the company, own the plants and trucks.",
    "Free cash flow of $14.28B is 28.0% of revenue, but the five-year cash series is uneven and worth checking against the filing.",
    "The consensus expects revenue to fall to $48.89B next fiscal year while EPS rises, which is a forecast about mix rather than volume.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/21344/000162828026010047/ko-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000021344&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Coca-Cola owns a portfolio of non-alcoholic beverage brands — Coca-Cola, Diet Coke, Fanta, Sprite, Minute Maid, Powerade and Dasani among them. It sells the concentrate and the brand rights, and independent bottling partners manufacture, package and distribute the finished drinks in most of the world.",
      "That division of labour is the heart of the business. The company keeps the recipe, the marketing and the customer relationship; the bottler keeps the factories, the trucks and the capital spending. The result is a revenue line of $51.1B with a 62.3% gross margin and an operating margin of 30.0%, numbers a company that owned its bottling plants could not produce.",
      "The shares closed at $95.67, for a market capitalisation of $411.6B, 94% of the way up a 52-week range of $67.27 to $97.39. The stock has returned 42.2% over the past year, and at 28.1x earnings and 24.1x EV/EBITDA it is priced as a premium staples business.",
    ],
    quote:
      "The concentrate price is the lever. A bottler can absorb a small increase in the cost of syrup, and the company can raise it without building a single plant.",
  },
  whatItDoes: {
    paragraphs: [
      "The product is a drink, but the unit of sale is a concentrate or a finished beverage depending on the market. In franchised territories the company sells concentrate to the bottler, which adds water, carbonation and packaging and sells the case to retailers. In some markets the company still owns the bottling operation, so the revenue line includes the finished goods.",
      "The customer is the bottler and, through it, the retailer. Marketing is aimed at the person who picks the can off the shelf, because that demand is what makes the bottler willing to buy concentrate and what gives the retailer a reason to stock the brand.",
      "The portfolio spans sparkling soft drinks, water, sports drinks, juice, dairy and plant-based drinks, and tea and coffee. Sparkling drinks are the largest and the most profitable; the others broaden the occasion and reduce reliance on a single category. The company employs 80,300 people.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue per case is set by the concentrate price and the mix of brands and packages sold. Costs are mostly the ingredients in the concentrate and the marketing that supports the brand, which is why the gross margin is 62.3%. Operating costs — advertising, selling, administration and research — take the margin down to 30.0%.",
      "Volume matters because the concentrate price is charged per case. A market that sells more cases generates more revenue at almost the same manufacturing cost, so incremental volume is very profitable. Price matters because a small increase per case flows almost entirely to operating profit, which is why the company has been able to grow revenue faster than volume for years.",
      "The bottling relationship is the constraint. A bottler earns a thin margin on a heavy, low-value product, so it needs volume and efficient routes to make money. If concentrate prices rise faster than retail prices, the bottler absorbs the squeeze, and eventually that shows up in investment, service or willingness to take on new brands.",
    ],
    bullets: [
      {
        title: "Concentrate sales",
        detail:
          "The core revenue line in franchised markets. High margin, low capital intensity and priced per case.",
      },
      {
        title: "Finished goods",
        detail:
          "Revenue from markets where the company still bottles. Larger revenue, lower margin, more capital employed.",
      },
      {
        title: "Price and mix",
        detail:
          "Package size, channel and brand mix move revenue per case independently of how many cases are sold.",
      },
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 4.3% a year from $38.66B in fiscal 2021 to $47.94B in fiscal 2025, and the trailing figure is $51.1B after 7.1% growth. The latest quarter grew 7.4%, so the recent rate is above the five-year average, and price is doing most of the work.",
      "The consensus expects $50.45B of revenue and $3.34 of EPS this fiscal year, then $48.89B and $3.53. That is unusual: revenue is forecast to decline next year while earnings rise. The implication is that the analysts expect the company to shed lower-margin revenue — perhaps finished goods or a market where bottling is being refranchised — while improving the mix and the margin.",
      "The structural drivers are population growth, per-capita consumption in developing markets and premiumisation into smaller cans and higher-priced formats. The constraint is that sugary drinks face taxes, labelling rules and changing consumer habits in many developed markets, which is why the portfolio has been widened into water, sports drinks, coffee and tea.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating income was $10.31B, $10.91B and $11.31B in the first three years of the record, then $9.99B in fiscal 2024 and $13.76B in fiscal 2025. The dip and the rebound are larger than the underlying business would produce, which points to items outside ordinary operations in those two years rather than a sudden change in the drinks market.",
      "Quarterly margins show a strong core with a weak fourth quarter. Operating margin was 34.1% in Q2 FY25, 32.0% in Q3 FY25 and 15.6% in Q4 FY25, then 35.0%, 34.9% and 33.4% in the next three quarters. The fourth quarter is seasonally smaller and carries year-end charges, so it should not be read as a deterioration.",
      "Return on equity is 37.0% and return on invested capital is 52.8%. The second figure is the important one: it says the company earns far more on the capital it employs than the capital costs, which is the direct result of leaving the plants with the bottlers.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $14.28B over the trailing period, a 28.0% margin. The annual series is less smooth: $11.26B in fiscal 2021, $12.27B in fiscal 2022, $9.75B in fiscal 2023, $4.74B in fiscal 2024 and $5.30B in fiscal 2025. Operating income did not fall by a similar amount, so the gap in those years came from items below the operating line or from working capital, and the cash-flow statement is where to find out which.",
      "The balance sheet holds $16.59B of net cash. That is a comfortable position for a company with this much brand value and this little capital spending. It also gives management room to keep raising the dividend and buying back stock even in a year when cash flow is temporarily depressed.",
      "Capital expenditure is modest because the heavy assets sit with the bottlers. The main uses of cash are therefore the dividend, buybacks and acquisitions of brands or bottlers. When the company buys a bottler, revenue rises and the margin falls — a trade that is about control rather than about profitability.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $95.67 the shares trade at 28.1x trailing earnings, 24.1x EV/EBITDA, 7.7x sales and 28.8x free cash flow, with a 3.5% free-cash-flow yield. The sales multiple is the striking one: 7.7x revenue for a beverage company is a software-like rating, and it is only possible because the revenue is so profitable.",
      "The peer comparison shows the premium clearly. Procter & Gamble trades at 16.6x EBITDA with a 22.6% operating margin, Colgate at 21.8x, Philip Morris at 16.2x. Coca-Cola at 24.1x sits above all of them except the warehouse retailers, and it earns a higher return on capital than any of them.",
      "The multiple assumes the concentrate model keeps pricing and that volume does not decline. If the consensus is right and revenue falls next year while earnings rise, the multiple can hold. If revenue falls because volume is falling, the same multiple would be difficult to defend. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-four analysts contribute to the third-party consensus, with a mean target of $97.75 and a range of $80.00 to $106.00. The mean is barely above the last close, which is a narrow gap for a stock that has already had a strong year.",
      "Estimates call for $11.30B of revenue and $0.60 of EPS next quarter, then $11.80B and $0.89, with $50.45B and $3.34 for the fiscal year. The low figure in the near quarter reflects seasonality, not a forecast of weakness.",
      "The next fiscal year's $48.89B of revenue and $3.53 of EPS is the most informative line in the consensus. It says the analysts expect less revenue and more profit, which is only consistent with a mix shift toward higher-margin concentrate sales.",
    ],
  },
  risks: {
    intro:
      "Coca-Cola's risks are about regulation and about the bottling system rather than about its own balance sheet. The company is highly profitable and lightly capitalised; the vulnerabilities sit in the category and in the partners who make and move the product.",
    items: [
      {
        title: "Sugar taxes and labelling rules",
        severity: "High",
        detail:
          "Taxes on sugary drinks raise the retail price and reduce volume in the markets that adopt them. Rules spread from city to country, so a single precedent can matter.",
        watch:
          "Volume trends in markets with new taxes and the share of revenue from sparkling drinks.",
      },
      {
        title: "Changes in consumer preference",
        severity: "High",
        detail:
          "Developed-market consumers are drinking less sugar. The portfolio has been widened, but sparkling drinks still carry the profit, so a permanent shift would be costly.",
        watch:
          "Sparkling volume versus still beverages, and the growth of the non-carbonated portfolio.",
      },
      {
        title: "Bottler economics",
        severity: "Medium",
        detail:
          "Bottlers earn thin margins. If concentrate pricing outruns retail pricing, the partner absorbs the difference and the system becomes less willing to invest.",
        watch:
          "Bottler profitability, refranchising activity and concentrate price increases.",
      },
      {
        title: "Currency",
        severity: "Medium",
        detail:
          "Revenue is earned in many currencies and reported in dollars. A stronger dollar reduces reported revenue and earnings without changing the business.",
        watch:
          "Organic revenue growth versus reported growth and the currency impact disclosed each quarter.",
      },
      {
        title: "Competition from private label and new categories",
        severity: "Medium",
        detail:
          "Retailers' own brands and fast-growing energy and functional drinks take shelf space and occasions from established carbonated brands.",
        watch:
          "Market share in sparkling drinks and the performance of newly acquired brands.",
      },
    ],
    watchlist: [
      {
        title: "Concentrate volume",
        detail:
          "The clearest read on whether bottlers are still ordering more syrup. Price can carry revenue for a while, but not forever.",
      },
      {
        title: "Operating margin",
        detail:
          "The gap between 62.3% gross and 30.0% operating margin is marketing. A widening gap means the brand is getting more expensive to defend.",
      },
      {
        title: "Free cash flow versus operating income",
        detail:
          "The two diverged sharply in fiscal 2024 and fiscal 2025. The cash-flow statement explains why, and whether it repeats.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Coca-Cola is a brand and concentrate business with a bottling system attached. Trailing revenue of $51.1B, a 30.0% operating margin, a 52.8% return on invested capital and $16.59B of net cash describe a company that earns high returns on very little capital.",
      "The educational point is that capital intensity is a choice written into the business model. By leaving the plants and trucks with bottlers, the company gives up some revenue and keeps a much larger share of what it does earn. The 7.7x sales multiple is the market's way of recognising that difference.",
      "The open questions are whether volume can hold as sugar taxes spread, whether the bottlers can keep absorbing concentrate price increases, and whether a year of falling revenue with rising earnings is really a mix shift or the start of something slower.",
    ],
    questions: [
      "How much of revenue growth came from concentrate price rather than case volume?",
      "What share of the portfolio is still bottled by the company itself?",
      "Why did free cash flow fall to $4.74B in fiscal 2024 while operating income held?",
      "Can the bottlers keep absorbing price increases without cutting investment?",
    ],
  },
};
