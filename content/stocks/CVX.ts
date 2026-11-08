import type { StockStory } from "./types";

export const CVX: StockStory = {
  ticker: "CVX",
  kicker: "Energy · Integrated oil and gas",
  title: "Chevron's earnings move with crack spreads, not only crude",
  dek: "A two-million-barrel-a-day refining system sits behind the upstream business. That is why Chevron's operating margin can double in two quarters while its oil fields produce roughly the same volumes.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $225.8B, up 20.8%, and the latest quarter grew 35.4%.",
    "Operating margin went from 8.3% in Q1 FY26 to 20.9% in Q3 FY26, a swing far larger than any plausible change in production.",
    "Free cash flow is $34.1B, a 15.1% margin, on a balance sheet with $12.8B of net cash.",
    "At $212.61 the shares trade at 15.4x earnings and 6.4x EV/EBITDA, and the free-cash-flow yield is 8.2%.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/93410/000009341026000078/cvx-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000093410&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Chevron explores for and produces oil and gas, and it also owns a refining system with roughly two million barrels a day of capacity spread across the United States, South Africa and Asia. That capacity is the part most readers skip, and it is the part that explains the shape of the last four quarters.",
      "An integrated company is two bets in one wrapper. Upstream earns more when crude is expensive. Refining earns more when the gap between crude and refined product widens, which can happen for reasons that have nothing to do with the crude price: a plant outage, a shipping disruption, a cold winter. When the two align, earnings jump. When they diverge, one leg cushions the other.",
      "The company has a market value of $417.9B at $212.61 a share, The shares have ranged between $146.49 and $236.48 over the past year and sit in the upper quarter of that band. Trailing revenue is $225.8B, operating margin 17.2%, return on equity 13.6% and return on invested capital 16.5%.",
    ],
    quote:
      "The upstream business sets the scale. The refinery sets the volatility. Confusing the two is the most common mistake made about an integrated oil company.",
  },
  whatItDoes: {
    paragraphs: [
      "Upstream is conventional and unconventional exploration and production, selling crude oil and natural gas into benchmark-linked markets. The company also holds interests in liquefied natural gas projects, where gas is cooled, shipped and sold under long-term contracts that look more like infrastructure than like a commodity trade.",
      "Downstream runs the refineries and the marketing network that puts fuel into vehicles and aircraft. A refinery is a set of processing units that each add value to a barrel: distillation splits it, cracking breaks heavy molecules, reforming raises octane, hydrotreating removes sulphur. The output mix decides the revenue, and the configuration of those units decides how much of the crude can be converted into high-value product rather than low-value heavy fuel.",
      "The two halves trade with each other constantly. When crude is cheap relative to product, the refinery makes money. When crude is expensive relative to product, the refinery runs at a loss and upstream carries the group.",
    ],
    bullets: [
      {
        title: "Upstream",
        detail:
          "Crude and gas production sold at benchmark-linked prices. Earnings depend on realised price minus lifting cost, royalties and depreciation.",
      },
      {
        title: "Refining",
        detail:
          "About two million barrels a day of capacity. Earnings depend on the crack spread, utilisation and the cost of running the plant.",
      },
      {
        title: "Marketing and chemicals",
        detail:
          "Fuel sold through branded retail and lubricants, plus petrochemical products. Smaller, steadier margins than either of the two main legs.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is enormous relative to profit because crude is bought and resold. That is why the gross margin of 43.9% and the operating margin of 17.2% look so far apart: the gross line still contains a good deal of the raw material cost, and the items below it include the depreciation of very expensive plants.",
      "The unit economics differ by segment. Upstream earns a margin per barrel that is thin in percentage terms but large in dollars because the volumes are vast. Refining earns a margin per barrel of throughput, and because a refinery's costs are mostly fixed once it is running, the incremental barrel is highly profitable at high utilisation and loss-making at low utilisation. That is the operating leverage mechanism: utilisation is the switch, and the crack spread is the dial.",
    ],
  },
  growth: {
    paragraphs: [
      "The five-year compound revenue growth rate is 4.7%, from $155.6B in FY2021 to $184.4B in FY2025, with a spike to $235.7B in FY2022. Trailing revenue of $225.8B is far above the FY2025 figure, and the latest quarter was up 35.4%, so the current run-rate is materially higher than the annual history implies.",
      "The quarterly path shows why. Revenue was $44.4B in Q2 FY25, $48.2B, $45.8B and $47.6B over the next three quarters, then jumped to $67.2B in Q2 FY26 and $65.2B in Q3 FY26. Operating margin went from 8.3% in Q1 FY26 to 24.8% in Q2 and 20.9% in Q3. A 41% increase in revenue alongside a tripling of the margin is a price and spread event, not a drilling result.",
    ],
    bullets: [
      {
        title: "Realised prices",
        detail:
          "The gap between the benchmark and what Chevron actually receives carries quality, location and contract effects.",
      },
      {
        title: "Refinery utilisation",
        detail:
          "Turnarounds take units offline on a planned schedule. Timing shifts revenue between quarters without changing the year.",
      },
      {
        title: "Cost per barrel",
        detail:
          "In a flat price environment, the only durable source of earnings growth is a lower unit cost.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual table is a study in margin compression. Operating income fell from $49.7B in FY2022 to $29.6B, $27.5B and then $19.7B in FY2025, while revenue fell much less. The company kept producing and kept refining, but the spread it earned on each unit shrank for three consecutive years.",
      "Free cash flow told a different story over the same period: $37.6B in FY2022, then $19.8B, $15.0B and $16.6B. Cash generation bottomed before earnings did, because capital spending and working capital reversed. That divergence between earnings and cash is worth internalising: in a commodity business, the cash-flow trough often arrives earlier than the earnings trough, and the recovery does too.",
      "Trailing diluted EPS is $13.64 against a $212.61 share price. The most recent quarter delivered $5.06 of EPS on its own, which shows how quickly the run-rate has changed relative to the trailing average.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow of $34.1B represents 15.1% of revenue, the highest cash margin among the integrated majors in the peer table. On a market value of $417.9B that is an 8.2% free-cash-flow yield, and the shares trade at 12.3x free cash flow.",
      "The balance sheet carries $12.8B of net cash, or net debt of negative 0.2x EBITDA. For a company in a capital-hungry industry, that is unusual and it changes the risk profile: a downturn becomes a question of lower distributions rather than of refinancing. It also means the dividend and the buyback are being funded from operations rather than from the debt market.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $212.61 the shares trade at 15.4x trailing earnings and 6.4x EV/EBITDA, against 1.8x sales. Compared with ExxonMobil at 7.0x and ConocoPhillips at 5.1x, Chevron sits in the middle of the integrated range, which is roughly where a company with this mix of upstream and refining should sit.",
      "The more interesting comparison is against its own history. A 6.4x EV/EBITDA multiple on a year when refining margins recovered is not the same as 6.4x on a mid-cycle year. If refining margins normalise, the EBITDA denominator falls and the multiple rises without the share price moving at all.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed third-party consensus has 24 analysts, a mean target of $243.46 and a range of $202.00 to $272.00. The current price is inside that range rather than below it.",
      "Estimates call for $248.6B of revenue and $18.41 of EPS this fiscal year, then $237.0B and $16.48 next year. That is a forecast of falling revenue and falling earnings, which is what a normalising spread looks like in a model. The next quarter is forecast at $65.2B and $5.69, broadly in line with the most recent quarter's revenue.",
      "The spread between the high and low target is about 35%, which for a company this large is mostly a disagreement about the price of crude and the refining margin rather than about the quality of the assets.",
    ],
  },
  risks: {
    intro:
      "Chevron's main vulnerabilities are the two spreads it earns, the cost of its projects and the political risk that comes with producing in jurisdictions it does not control.",
    items: [
      {
        title: "Refining margin normalisation",
        severity: "High",
        detail:
          "The last two quarters earned margins far above the four before them. Crack spreads are the most cyclical variable in the business and the least controllable.",
        watch:
          "Utilisation rates, turnaround timing and the regional product crack disclosed each quarter.",
      },
      {
        title: "Crude price",
        severity: "High",
        detail:
          "Upstream earnings fall roughly in line with the price. Hedging is limited at this scale, so the exposure is direct.",
        watch: "Realised crude and gas prices against benchmark, and the production mix between oil and gas.",
      },
      {
        title: "Project execution",
        severity: "Medium",
        detail:
          "Large developments take years and are approved against a price assumption. Cost overruns and delays are the normal failure mode.",
        watch:
          "Capitalised interest, project milestones and the disclosed capital budget versus actual spend.",
      },
      {
        title: "Host-government and tax risk",
        severity: "Medium",
        detail:
          "A significant share of production sits outside the United States, where fiscal terms can be renegotiated.",
        watch: "Production-sharing terms, royalties and any change in export rules.",
      },
      {
        title: "Energy transition",
        severity: "Medium",
        detail:
          "Long-lived assets need a long demand runway. A faster shift away from liquid fuels shortens the period over which new projects earn back their cost.",
        watch:
          "The split between sustaining and growth capital, and the returns assumed on long-dated projects.",
      },
    ],
    watchlist: [
      {
        title: "Crack spread",
        detail:
          "The refining margin per barrel is the fastest-moving input to earnings and the hardest to forecast.",
      },
      {
        title: "Operating cash flow",
        detail:
          "Cash covers the dividend with room to spare today. That coverage, not the earnings line, is the thing to monitor.",
      },
      {
        title: "Capital spending",
        detail:
          "A rising capital budget in a falling price environment is the classic warning sign for an integrated major.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Chevron is a large, conservatively financed integrated oil company with an unusual combination of scale in both upstream and refining. Revenue of $225.8B, a 17.2% operating margin and $34.1B of free cash flow describe a business that is generating more cash than it needs at current prices.",
      "The open question is how much of the recent improvement is structural. The margin tripled between Q1 and Q2 FY26, which is too fast to be explained by anything other than prices and spreads. Those revert.",
      "The lesson in this report is about segment mix. Two companies with identical revenue can have very different earnings volatility depending on how much refining they own, because the crack spread and the crude price do not move together.",
    ],
    questions: [
      "How much of the last two quarters' earnings came from the crack spread rather than from the oil price?",
      "What crack spread is embedded in the current-year EPS estimate?",
      "Does the 8.2% free-cash-flow yield reflect a sustainable margin or a good year?",
      "How much of the capital budget is committed to projects approved at higher prices?",
    ],
  },
};
