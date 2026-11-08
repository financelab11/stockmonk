import type { StockStory } from "./types";

export const WMT: StockStory = {
  ticker: "WMT",
  kicker: "Retail · Mass merchandise and grocery",
  title: "Walmart's revenue barely moves, but its profit has doubled",
  dek: "A 4.4% operating margin on $728B of sales leaves little room for error. The interesting fact is that operating income grew far faster than revenue for three years, and the multiple now assumes that continues.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $728.5B, up 6.1%, with a 4.4% operating margin and 3.1% net margin.",
    "Operating income rose from $20.43B in fiscal 2023 to $29.82B in fiscal 2026 while revenue grew 16.6%.",
    "Net income more than doubled over the same three years, from $11.29B to $22.27B.",
    "Free cash flow was only 1.9% of revenue, and net debt of $60.9B is 1.8x EBITDA with interest covered 47.2 times.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/104169/000010416926000055/wmt-20260131.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000104169&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Walmart runs three businesses: Walmart U.S., Walmart International and Sam's Club. The first is the largest, a network of supercentres and smaller stores selling groceries, general merchandise and health products. The second operates retail formats outside the United States. The third is a membership warehouse chain that competes directly with Costco.",
      "Groceries are the anchor. They bring customers in every week, and the rest of the store sells to that traffic. That is why the gross margin is 24.5% — low for a general retailer, because food carries thin margins — and why the operating margin of 4.4% depends on volume, cost control and the mix of everything sold alongside the food.",
      "Trailing revenue is $728.5B and the market capitalisation is $998.9B at a share price of $125.52, about 73% of the way up a 52-week range of $98.88 to $135.16. At 44.9x trailing earnings and 31.1x EV/EBITDA, the shares are priced well above a typical retailer.",
    ],
    quote:
      "The revenue line grows with inflation and store count. The profit line grows with what customers buy besides groceries, which is why the mix shift matters more than the top line here.",
  },
  whatItDoes: {
    paragraphs: [
      "A Walmart store is a distribution point as much as a shop. Trucks arrive on a schedule set by the company's own logistics network, goods move from backroom to shelf within a day, and unsold food is marked down before it spoils. That machine is the competitive advantage: it lets the company sell at prices smaller competitors cannot match and still earn a profit.",
      "Customers are broadly the whole consumer market, with a heavy weighting toward households managing a budget. In a strong economy they trade up; in a weak one they trade down into Walmart, which makes the business defensive but also means the mix of what they buy shifts with the cycle.",
      "The company has been building businesses that sit on top of the stores: advertising, a marketplace for third-party sellers, membership, and fulfilment for online orders. These earn higher margins than merchandise and use assets the stores already have, which is the mechanism behind the profit growth described below.",
    ],
    bullets: [
      {
        title: "Walmart U.S.",
        detail:
          "The largest segment. Stores, groceries, general merchandise and the growing online and marketplace business.",
      },
      {
        title: "Walmart International",
        detail:
          "Retail operations outside the United States, with results translated from local currencies.",
      },
      {
        title: "Sam's Club",
        detail:
          "Membership warehouses. A different model from the core stores, with fee revenue and bulk merchandise.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the total of everything sold through stores and online. Cost of sales takes the wholesale price of the goods, freight and shrinkage. What remains is the 24.5% gross margin, and out of that come store wages, rent, utilities, advertising and corporate costs, leaving 4.4% at the operating line.",
      "The operating leverage comes from spreading fixed costs over more sales per store and from selling more services per customer. A store's rent, management and systems cost roughly the same whether it is busy or quiet. Advertising revenue from suppliers and marketplace commissions, meanwhile, arrive with very little incremental cost. Both effects raise profit faster than revenue.",
      "The constraint is wages. Walmart is one of the largest private employers in the United States, so a change in the hourly wage rate moves the cost base across thousands of stores at once. Automation of checkout and inventory tasks offsets some of that, but it also requires capital spending that has to earn a return.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 5.2% a year from $567.76B in fiscal 2022 to $706.41B in fiscal 2026, and the trailing figure is $728.5B after 6.1% growth. The latest quarter grew 5.9%. For a business of this size, that is a healthy rate and it is close to nominal GDP growth plus share gains.",
      "The profit record is the more interesting one. Operating income fell from $25.94B in fiscal 2022 to $20.43B in fiscal 2023, then rose to $27.01B, $29.35B and $29.82B. Net income went from $11.29B to $22.27B over the same three years. Fiscal 2023 was a trough, so part of the improvement is recovery; the rest is a mix shift toward higher-margin services and better cost control.",
      "The consensus expects $752.86B of revenue and $2.89 of EPS this fiscal year, then $785.57B and $3.23. That implies revenue a little above the current year's $752.86B and earnings a little above $2.89. The gap between the two is the whole thesis: profit growth has to outpace sales growth for another year.",
    ],
  },
  performance: {
    paragraphs: [
      "Quarterly operating margins sit in a narrow band: 4.4% in Q1 FY26, 4.1% in Q2, 3.8% in Q3, 4.6% in Q4, then 4.3% in Q1 FY27 and 5.0% in Q2 FY27. The last figure is the highest in the record and came on $186.10B of revenue, which is a meaningful combination: more sales and a better margin at the same time.",
      "Because the margin is so thin, small changes matter. A 0.5 percentage point improvement on $700B of revenue is several billion dollars of operating income. That is why the market pays attention to mix and to cost per transaction rather than to revenue growth alone.",
      "Return on equity is 22.0% and return on invested capital is 15.8%. Both are solid for a retailer and both depend on inventory turns. The company carries a large amount of stock — food, general merchandise and e-commerce inventory — so a slowdown that leaves goods on the shelf ties up cash and eventually shows up as markdowns.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $13.51B over the trailing period, a 1.9% margin, and $14.92B in fiscal 2026. The low percentage is normal for a retailer with this revenue base; the dollar figure is what funds dividends, buybacks and store investment. The 0.8% dividend yield is small, which leaves room for both.",
      "Net debt of $60.94B is 1.8x EBITDA, and interest is covered 47.2 times. That combination is comfortable: the debt is large in absolute terms but small relative to the cash the business generates, and the interest bill is not a constraint on investment.",
      "Capital spending goes into remodels, automation, supply chain and the e-commerce network. All of it is intended to raise sales per square foot or lower cost per order. The risk is that the spending is spread across thousands of locations, so a poor return in one year is hard to see until it accumulates.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $125.52 the shares trade at 44.9x trailing earnings, 31.1x EV/EBITDA, 1.5x sales and 73.9x free cash flow. For a company growing revenue at 6%, a 44.9x earnings multiple is a statement about the quality and durability of the profit mix, not about the top line.",
      "Costco trades at 49.6x earnings and 30.7x EBITDA, so Walmart is priced almost identically to a membership retailer with a structurally higher return on capital. Procter & Gamble, with a 22.6% operating margin, trades at 16.6x EBITDA. Walmart at 31.1x is being valued as a business that has found a higher-margin layer on top of its stores.",
      "The multiple assumes the mix shift continues and that margins keep improving. If operating margin stalls near 4.4%, earnings growth converges on revenue growth and the premium becomes hard to justify. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Forty analysts contribute to the third-party consensus, with a mean target of $127.47 and a range of $81.00 to $155.00. The mean is barely above the last close, which is consistent with a stock that has already re-rated.",
      "Estimates call for $187.19B of revenue and $0.64 of EPS next quarter, then $200.31B and $0.79, with $752.86B and $2.89 for the fiscal year. The step up in the fourth quarter is seasonal, driven by the holiday period.",
      "The following year's $785.57B and $3.23 assumes revenue and earnings both a little above the current year's forecast. If the analysts are right, the earnings multiple falls over time without the share price moving. If they are wrong about the margin, the multiple has further to fall.",
    ],
  },
  risks: {
    intro:
      "Walmart's risks are cost and mix rather than demand. The stores are ubiquitous and the balance sheet is sound; the questions are whether wages and tariffs can be absorbed and whether the higher-margin businesses are large enough to keep lifting profit.",
    items: [
      {
        title: "Wage and benefit costs",
        severity: "High",
        detail:
          "Labour is the largest controllable cost after the goods themselves. A rise in hourly pay across the store base compresses the margin faster than price increases can offset.",
        watch:
          "Operating margin per quarter and management commentary on wage investment.",
      },
      {
        title: "Tariffs and import costs",
        severity: "High",
        detail:
          "General merchandise is heavily sourced from abroad. Duties raise landed cost, and a low-price retailer has limited room to pass them through.",
        watch:
          "Gross margin, sourcing mix and any change in price gaps versus competitors.",
      },
      {
        title: "Mix shift toward low-margin categories",
        severity: "Medium",
        detail:
          "When customers trade down, they buy more food and less general merchandise. That supports revenue and hurts margin at the same time.",
        watch:
          "The split between grocery and general merchandise sales.",
      },
      {
        title: "E-commerce investment",
        severity: "Medium",
        detail:
          "Fulfilling online orders from stores is expensive. The capital and labour spent on it have to be recovered through volume or fees.",
        watch:
          "E-commerce growth, fulfilment cost per order and marketplace revenue.",
      },
      {
        title: "International currency and regulation",
        severity: "Low",
        detail:
          "Results outside the United States are translated into dollars, so currency moves affect reported revenue without changing the underlying business.",
        watch:
          "Constant-currency growth versus reported growth.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The 4.4% figure is the whole story. A sustained move above 5% would validate the mix shift.",
      },
      {
        title: "Grocery versus general merchandise",
        detail:
          "The mix tells you whether customers are trading down and what that does to margin.",
      },
      {
        title: "Free cash flow",
        detail:
          "At a 1.9% margin, small changes in inventory or capital spending move the cash figure a long way.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Walmart is the largest retailer in this coverage group and one of the most efficient. Trailing revenue of $728.5B produced $13.51B of free cash flow and a 4.4% operating margin, and net income has more than doubled since fiscal 2023.",
      "The educational point is that scale retail is a fixed-cost business. Once the stores, trucks and systems exist, extra sales drop through to profit at a much higher rate than the headline margin suggests. The profit growth of the last three years is what that looks like when it works.",
      "The open question is valuation. At 44.9x earnings, the shares already price several more years of margin expansion. A reader should ask how much of the recent improvement was recovery from a weak fiscal 2023 and how much is a permanent change in the mix.",
    ],
    questions: [
      "How much of the operating income recovery since fiscal 2023 came from cost cuts rather than mix?",
      "What share of profit now comes from advertising, marketplace and membership rather than merchandise?",
      "Is traffic growing, or is the average basket doing the work?",
      "What would 4% revenue growth and a flat margin imply for the multiple?",
    ],
  },
};
