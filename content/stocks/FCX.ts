import type { StockStory } from "./types";

export const FCX: StockStory = {
  ticker: "FCX",
  kicker: "Materials · Copper and gold mining",
  title: "Freeport is a copper price with a mine attached",
  dek: "The company cannot set the price of copper, and it cannot stop the ore grade from falling. What it can control is how many tonnes it moves, what it pays for diesel and how much gold comes out of the same rock.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $25.9B, up just 0.2%, with a 28.2% operating margin and 15.9% net margin.",
    "Operating income fell from $8.37B in FY2021 to $6.52B in FY2025 on higher revenue, so unit costs rose faster than the copper price.",
    "Free cash flow is $1.72B, a 6.7% margin, and the price-to-free-cash-flow ratio of 49.6x reflects how much capital the mines consume.",
    "At $59.42 the shares trade at 20.7x earnings and 9.8x EV/EBITDA, with $6.02B of net debt at 0.6x EBITDA.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/831259/000083125926000012/fcx-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000831259&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Freeport-McMoRan is a copper miner. Its assets include the Grasberg complex in Indonesia, one of the largest copper and gold deposits in the world, and significant operations in the Americas. It also produces molybdenum, and the gold that comes out of Grasberg alongside the copper is not a side business; it is a credit that lowers the effective cost of the copper.",
      "Copper is unusual among industrial metals because demand is tied to electrification, construction and power networks, and supply is genuinely hard to add. A new mine takes years to permit and longer to build, and the ore grade at existing mines declines over time. Those two facts support the long-run price and explain why miners keep investing through cycles.",
      "The company is valued at $85.3B at $59.42 a share, with revenue of $25.9B, operating margin of 28.2% and return on invested capital of 14.6%. The shares have ranged from $38.54 to $80.24 over the past year and sit roughly mid-way through it, which is a fair reflection of a commodity producer in the middle of its own cycle.",
    ],
    quote:
      "A mine is a fixed asset attached to a depleting ore body. The cost per pound rises as the grade falls, and no management team can change the geology.",
  },
  whatItDoes: {
    paragraphs: [
      "The Indonesian operation is an underground mine that produces copper concentrate with a high gold content. The gold is sold separately and the revenue is credited against the cost of producing copper, which is why Grasberg's copper can be among the cheapest in the world to produce even when the mining itself is difficult.",
      "The Americas operations are largely open-pit mines in the United States, Peru and Chile. Open-pit mining is a materials-handling business: rock is blasted, loaded, hauled and processed, and the cost is dominated by diesel, electricity, tyres, reagents and labour. As the grade falls, more rock has to be moved to produce the same tonne of metal, so the cost per pound rises even if nothing else changes.",
      "The customer is a smelter or a trader. Copper concentrate is sold under contracts that specify treatment and refining charges, which are deductions from the metal price for the cost of converting concentrate into refined copper. When concentrate is scarce, those charges fall and the miner keeps more; when smelters have spare capacity, the charges rise.",
    ],
    bullets: [
      {
        title: "Copper",
        detail:
          "The core product. Revenue is the metal price minus treatment and refining charges, times the volume sold.",
      },
      {
        title: "Gold by-product",
        detail:
          "Produced alongside copper at Grasberg. Gold credits reduce the net cost of the copper.",
      },
      {
        title: "Molybdenum",
        detail:
          "A smaller by-product used in steel alloys. Adds a credit but does not change the economics of the mine.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The unit of profit is the margin per pound of copper: the realised metal price minus the cash cost of producing it, minus depreciation of the mine and the processing plant. Cash cost is the number management talks about most, because it determines how much of the copper price survives as cash flow.",
      "By-product credits are the mechanism that makes some mines look better than others. At Grasberg, the gold revenue is subtracted from the cost of producing copper, so the reported copper cost can be negative in a strong gold year. That is not accounting trickery; it is a genuine economic offset, but it means the copper cost is only meaningful alongside the gold price.",
      "The capital intensity is the part most readers underestimate. An open-pit mine requires continuous stripping to expose new ore, and that stripping is capitalised or expensed depending on the stage of the pit. An underground mine requires years of development before the first tonne comes out. Free cash flow is therefore thin relative to operating income in every year, and a mine can be profitable on the income statement while consuming cash.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew at a 9.8% compound rate from $22.4B in FY2021 to $25.2B in FY2025, but the trailing figure grew only 0.2%. The company is not growing volumes quickly; it is selling a similar quantity of metal at a price that moves.",
      "Operating income tells the more important story. It fell from $8.37B in FY2021 to $7.04B, $6.22B, $6.86B and $6.52B, while revenue rose. Costs per pound went up over those years, through a combination of grade decline, inflation in diesel and labour, and the mix of ore mined in each period.",
      "Third-party estimates point to $30.0B of revenue and $3.10 of EPS this fiscal year, then $36.5B and $4.25. A 21% increase in revenue and a 37% increase in EPS next year is a forecast about the copper price and about cost control, and it is the assumption the current multiple is built on.",
    ],
    bullets: [
      {
        title: "Copper price",
        detail:
          "The dominant variable. A miner can control cost per pound but not the price it receives.",
      },
      {
        title: "Ore grade",
        detail:
          "Falling grades raise the amount of rock moved per pound of metal, which raises unit cost over time.",
      },
      {
        title: "By-product credits",
        detail:
          "Gold and molybdenum revenue reduces the net cost of copper, so their prices matter as much as copper's.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly record shows how much a copper miner's margin can move on price. Operating margin was 32.3% in Q2 FY25, 28.9% in Q3, then 15.4% in Q4 on revenue of $5.27B, before recovering to 34.2% in Q1 FY26 and settling at 29.0% and 31.7% in the next two quarters.",
      "Net income followed the same path, from $772M in Q2 FY25 to $565M in Q4 and $1.39B in Q1 FY26. Return on equity is 12.2% and return on invested capital is 14.6%, which for a miner with $6.02B of net debt is a respectable but not exceptional result. The return is roughly in line with the cost of capital for a large diversified miner, which is the honest way to describe it.",
      "The comparison across five years is the one that matters. Operating income down 22% while revenue rose 12% is a cost story, and it is the reason the shares trade at 9.8x EBITDA rather than at a growth multiple.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $1.72B, a 6.7% margin, and the shares trade at 49.6x that figure for a 2.0% yield. The annual record is thin and uneven: $5.60B in FY2021, $1.67B in FY2022, $455M in FY2023, $2.35B in FY2024 and $1.12B in FY2025.",
      "That is the signature of a capital-intensive industry in an investment phase. The mines generate operating cash, but a large share of it goes back into stripping, underground development and sustaining capital. The gap between a 28.2% operating margin and a 6.7% free-cash-flow margin is the cost of keeping the assets producing.",
      "Net debt of $6.02B at 0.6x EBITDA is low for a miner and gives the company room to keep investing through a price trough. That is a genuine advantage: the worst time to stop investing in a mine is when the price is low, because the ore body does not wait.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $59.42 the shares trade at 20.7x trailing earnings, 9.8x EV/EBITDA, 3.5x sales and 49.6x free cash flow. Against Linde at 17.9x and Sherwin-Williams at 24.3x, the EBITDA multiple looks cheap; against the economics of a copper miner, it is roughly normal.",
      "Miners trade on EV/EBITDA rather than earnings because depreciation is large and uneven, and they trade at a discount to industrial companies because the price of the product is set by a market they cannot influence. A 9.8x multiple on a year when copper was reasonably strong is not obviously cheap. The consensus next-year EPS of $4.25 against $3.10 this year is doing a lot of the work.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-two analysts publish on the stock, with an attributed mean target of $78.09 and a range of $33.00 to $90.00. A range that wide, from below the current price to well above it, is a disagreement about the copper price more than about the company.",
      "Estimates call for $30.0B of revenue and $3.10 of EPS this fiscal year across 14 analysts, then $36.5B and $4.25 across 16. Next quarter is forecast at $8.98B and $1.06, well above the $7.42B just reported.",
      "The coverage count is thinner than for the industrial companies in this coverage universe, which is normal for a miner. Fewer analysts means the average is more sensitive to one model changing its copper assumption.",
    ],
  },
  risks: {
    intro:
      "Freeport's risks are geological, political and financial. The copper price is the biggest single variable, but the ones that can permanently impair value are underground.",
    items: [
      {
        title: "Copper price",
        severity: "High",
        detail:
          "Revenue and margin are both a function of the metal price. A 15% fall in copper removes a large share of operating income.",
        watch: "Realised copper price, the LME benchmark and the company's own price sensitivity disclosure.",
      },
      {
        title: "Ore grade and cost per pound",
        severity: "High",
        detail:
          "Grades decline as a mine ages, so more rock has to be moved for the same metal. That raises unit cost permanently unless offset.",
        watch: "Ore grade mined, tonnes moved and unit cash cost per pound by operation.",
      },
      {
        title: "Operating jurisdiction",
        severity: "High",
        detail:
          "A large share of production sits in Indonesia, where the government controls permits, export rules and fiscal terms.",
        watch: "Mining licences, export approvals and any change to the royalty or tax regime.",
      },
      {
        title: "Capital intensity",
        severity: "Medium",
        detail:
          "Sustaining capital consumes most of operating cash. A project overrun or a delayed development reduces free cash flow for years.",
        watch: "Capital expenditure against budget, stripping costs and development milestones.",
      },
      {
        title: "Input costs",
        severity: "Medium",
        detail:
          "Diesel, electricity, tyres and labour are a large part of the cost base and they do not fall as fast as the copper price.",
        watch: "Unit cost guidance and the split between mining, processing and administration costs.",
      },
    ],
    watchlist: [
      {
        title: "Net cost per pound",
        detail:
          "After by-product credits, this is the number that determines how much of the copper price the company keeps.",
      },
      {
        title: "Treatment and refining charges",
        detail:
          "The smelter's fee is a direct deduction from revenue and moves with concentrate availability.",
      },
      {
        title: "Free cash flow after sustaining capital",
        detail:
          "The measure that shows whether the mine is generating cash or just consuming it.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Freeport is a large copper producer with a world-class ore body in Indonesia and a portfolio of open-pit mines in the Americas. Revenue of $25.9B, a 28.2% operating margin and a 14.6% return on invested capital describe a solid but not exceptional miner.",
      "The five-year record is the caution. Revenue rose 12% and operating income fell 22%, because the cost of producing a pound went up faster than the price of the metal. That is what grade decline and input inflation do to a mature mine, and it is the reason a copper miner is not a simple proxy for the copper price.",
      "The valuation assumes the consensus is right about next year: revenue up 21%, EPS up 37%. If copper delivers that, the current multiple is reasonable. If it does not, the 49.6x free-cash-flow ratio is a reminder of how much capital the business consumes before it pays out anything.",
    ],
    questions: [
      "What is the net cash cost per pound after gold and molybdenum credits?",
      "How much of the production base is in jurisdictions where the government can change the terms?",
      "How much capital is committed to stripping and development over the next three years?",
      "What copper price does the current share price imply?",
    ],
  },
};
