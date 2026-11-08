import type { StockStory } from "@/content/stocks/types";

export const HINDCOPPER: StockStory = {
  ticker: "HINDCOPPER",
  kicker: "Metals & Commodities · Copper mining",
  title: "Hindustan Copper is a copper price taker with a mine under it",
  dek: "Hindustan Copper mines and refines copper, so its profit is the gap between the metal price and the cost of pulling ore out of the ground. Revenue reached ₹34.97B at a 48.9% operating margin, but the shares trade at 36.8 times earnings.",
  readingMinutes: 9,
  takeaways: [
    "The trailing year's revenue was ₹34.97B, 67.1% higher, at a 48.9% operating margin.",
    "Free cash flow of ₹10.19B is 33.1% of revenue; net cash is ₹6.99B.",
    "The 91.1% gross margin is a mining accounting effect, not a software-like margin.",
    "At ₹431.95 the shares trade at 36.8 times earnings and 23.4 times EV/EBITDA.",
  ],
  filingUrl:
    "https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=HINDCOPPER",
  irUrl: "https://www.hindustancopper.com",
  bigPicture: {
    paragraphs: [
      "Hindustan Copper is India's listed pure-play copper miner. It extracts ore from underground and open-pit mines, concentrates it, and sells copper concentrate, cathodes, continuous-cast rods and by-products such as sulphuric acid and anode slimes. Its flagship asset is the Malanjkhand project in Madhya Pradesh. The company is based in Kolkata and employed 1,154 people.",
      "The trailing twelve months brought ₹34.97B of revenue, 67.1% more than a year earlier. Q1 FY27, the most recent quarter in the dataset, added ₹9.36B and a 54.3% operating margin. The market value is ₹417.7B at ₹431.95; the shares are 27% up from the low of a ₹308.50 to ₹760.05 range.",
      "The one question that matters for a miner is what happens to the copper price. Hindustan Copper cannot set the price; it sells at a market level and tries to produce at a lower cost. When copper rises, almost every extra rupee of revenue falls to operating profit. When it falls, the same mechanism works in reverse, and a mine that looked profitable can report losses.",
    ],
    quote:
      "A miner's income statement is a price signal with a cost base attached. Grade, depth and clearance approvals decide the cost; the London Metal Exchange decides the revenue.",
  },
  whatItDoes: {
    paragraphs: [
      "The business runs from ore to metal. Mining produces ore, beneficiation concentrates it, and smelting and refining turn concentrate into cathode. Some cathode is cast into rods for wire and cable makers; some concentrate is sold directly; by-products such as sulphuric acid and nickel cathode add revenue from the same ore body. A tolling arrangement converts cathode into wire for customers who want the finished form.",
      "The customer base is domestic copper consumers in construction, electrical equipment and wiring, plus export buyers. The company's 1,154 employees sit on top of a much larger contract workforce, which is typical of Indian mining: the permanent headcount understates the labour involved.",
      "The asset base is old and geologically constrained. Malanjkhand has been mined for decades, and the shift from open-pit to underground operations raises cost per tonne and requires sustained capital spending. That is why the production profile, not just the copper price, determines long-run profitability.",
    ],
    bullets: [
      {
        title: "Mining and concentration",
        detail:
          "Ore extraction and beneficiation into copper concentrate.",
      },
      {
        title: "Smelting and refining",
        detail:
          "Concentrate converted into cathode and continuous-cast rod.",
      },
      {
        title: "By-products",
        detail:
          "Sulphuric acid, anode slimes and nickel cathode from the same ore.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the volume of copper sold multiplied by the realised copper price, plus by-product credits. Cost is the volume of ore mined multiplied by the cost per tonne, which includes power, labour, consumables, contract mining, royalties and transport. The operating margin is the difference between those two numbers, and at 48.9% it is unusually wide because copper prices have been high relative to cash costs.",
      "The 91.1% gross margin needs explaining. In mining accounts, a large part of the cost of production is booked below the gross-profit line as operating expenses rather than as cost of materials. Gross margin therefore measures the gap between metal value and a narrow definition of direct material cost; it is not comparable to a manufacturer's gross margin. The 48.9% operating margin is the more honest measure of the spread.",
      "The company has ₹6.99B of net cash and interest cover of 293 times, so debt is not a factor at current prices. That is a cyclical luxury: the balance sheet is strong because the last two years have been good, not because mining is inherently a high-cash business.",
    ],
  },
  growth: {
    paragraphs: [
      "The five-year revenue record starts at ₹17.87B in FY2021 and ends at ₹30.78B in FY2026, but almost all of the increase arrived in the last year. FY2024 revenue was ₹17.17B, FY2025 was ₹20.71B and FY2026 was ₹30.78B. The FY2026 increase of 48.6% came mostly from higher copper realisations rather than from a sudden increase in tonnes.",
      "That distinction matters. A price-led increase can reverse; a volume-led increase cannot, because it reflects new capacity or higher grade. Hindustan Copper's expansion depends on deep underground mining, shaft sinking and statutory approvals, all of which take years. The consensus expects ₹48.91B of revenue this fiscal year and ₹57.19B next year, which implies the analysts expect both higher prices and some volume growth.",
      "The thing that would slow growth is not demand. India's power, construction and electric-vehicle buildout all need copper. The constraint is the company's ability to raise output from ageing mines without a proportional increase in cost.",
    ],
    bullets: [
      {
        title: "Copper price",
        detail:
          "Global prices set the revenue line; a strong price flatters every metric.",
      },
      {
        title: "Mine development",
        detail:
          "Underground expansion at Malanjkhand and other blocks adds tonnes at a higher cost per tonne.",
      },
      {
        title: "By-product credits",
        detail:
          "Acid, slimes and nickel reduce net cost and improve the spread.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating profit went from ₹4.11B in FY2021 to ₹14.63B in FY2026, and the operating margin expanded from 23.0% to 47.5%. The quarterly record shows the same cycle: operating margin was 29.3% in Q2 FY25, 36.5% in Q4 FY25, 41.1% in Q1 FY26 and 54.3% in both Q4 FY26 and Q1 FY27.",
      "Trailing diluted EPS is ₹11.75 against ₹9.50 for FY2026. Equity returns 27.5% and invested capital 42.0%, both excellent at the top of a commodity cycle. The caveat is that mining returns are measured against a historical cost base; a new mine built at today's capital costs would earn a lower return at the same copper price.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was ₹10.19B, a 33.1% margin, which is the strongest cash result in the peer group. But the annual record shows how cyclical mining cash flow can be: ₹4.65B in FY2021, ₹6.33B in FY2022, ₹3.29B in FY2023, negative ₹1.93B in FY2024, ₹1.32B in FY2025 and ₹10.19B in FY2026.",
      "The negative year is the instructive one. FY2024 operating profit was ₹5.47B, so the business was profitable; the cash went into capital expenditure on mine development. A miner can report accounting profit for years while spending more than it earns to keep the shafts open. That is why free cash flow, not earnings, is the right lens for capital intensity.",
      "Net cash of ₹6.99B is equal to negative 0.4 times EBITDA, so leverage is negligible today. The risk is that the next round of mine development is funded from cash and turns the number negative again.",
    ],
  },
  valuation: {
    paragraphs: [
      "The shares closed at ₹431.95, which is 36.8 times trailing earnings, 23.4 times EV/EBITDA and 11.7 times sales. That is expensive for a copper miner by global standards. Within the peer table, only APL Apollo at 29.9 times, GMDC at 25.1 times and Gravita at 23.6 times sit near it on EV/EBITDA, while MOIL, another mining PSU, trades at 8.7 times.",
      "The premium has a logic: Hindustan Copper is the only listed Indian pure-play copper miner, and copper is the metal most associated with electrification. Scarcity of listed exposure can support a multiple that the underlying commodity economics do not justify. A 36.8 times P/E on cyclical peak earnings is the number to be careful with; if copper falls, both E and the multiple can fall together.",
    ],
  },
  analysts: {
    paragraphs: [
      "Two analysts contribute to the third-party consensus. The mean target is ₹540.00, with a range of ₹365.00 to ₹715.00. That is a wide range for two estimates and reflects genuine uncertainty about copper prices as much as about the company. It is third-party work, not a Stockmonk view.",
      "Current-year estimates are ₹48.91B of revenue and ₹19.55 of EPS; next year's are ₹57.19B and ₹22.35. The next-quarter estimate is ₹11.45B of revenue with no EPS figure, which suggests the coverage is thin and partly mechanical. Thin coverage is common for public-sector miners and means the consensus should carry less weight than it would for a heavily covered large cap.",
    ],
  },
  risks: {
    intro:
      "Hindustan Copper's risks begin with the copper price and end with the physical difficulty of mining an old asset. Government ownership adds a layer of policy risk to both capital allocation and dividends.",
    items: [
      {
        title: "Copper price",
        severity: "High",
        detail:
          "Revenue and margin move with a global price the company cannot control. A fall in copper hits profit twice, through lower realisations and inventory write-downs.",
        watch: "Realised copper price, inventory valuation and the LME trend.",
      },
      {
        title: "Mining cost and grade",
        severity: "High",
        detail:
          "Deeper underground mining raises cost per tonne and lower grades mean more rock moved for each tonne of metal.",
        watch: "Ore grade, strip ratio and cost per tonne in the annual report.",
      },
      {
        title: "Clearance and project delays",
        severity: "High",
        detail:
          "Mine expansion needs environmental and forest approvals. A delay pushes out tonnes but not the capital already spent.",
        watch: "Project progress disclosures and capital work in progress.",
      },
      {
        title: "Government ownership",
        severity: "Medium",
        detail:
          "The Union Government is the promoter. Dividend policy, divestment and expansion decisions can reflect public-policy objectives as well as commercial ones.",
        watch: "Dividend announcements, capital expenditure plans and stake-sale news.",
      },
      {
        title: "Capital intensity",
        severity: "Medium",
        detail:
          "Mine development consumed cash in FY2024 even though the company was profitable. Future expansion can do the same.",
        watch: "Capital expenditure and free cash flow through the cycle.",
      },
    ],
    watchlist: [
      {
        title: "Realised price",
        detail:
          "The single largest variable in revenue and margin, and entirely outside management's control.",
      },
      {
        title: "Ore grade",
        detail:
          "Grade determines how much metal comes from each tonne mined and therefore the unit cost.",
      },
      {
        title: "Mine approvals",
        detail:
          "Expansion without clearances is capital spent without production.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Hindustan Copper is a cyclical miner with ₹34.97B of revenue, a 48.9% operating margin and ₹10.19B of free cash flow at current copper prices. It has ₹6.99B of net cash and a 42.0% return on invested capital. Those numbers are real, but they are also a snapshot of a strong commodity market.",
      "The valuation already reflects scarcity value: 36.8 times earnings and 23.4 times EV/EBITDA for a business whose revenue is set by a global price. The market is paying for copper exposure and for the possibility of volume growth, not for the current margin alone.",
      "What is not known is how much of the FY2026 revenue jump was price and how much was volume. The annual report's production and realisation disclosures would answer that, and the answer decides whether the earnings base is durable.",
    ],
    questions: [
      "How many tonnes of copper did the company actually sell in FY2026 versus FY2025?",
      "What is the cash cost per tonne, and how does it compare with the copper price?",
      "Which expansion projects have clearances, and which are still waiting?",
      "How much capital will the underground transition require over the next three years?",
    ],
  },
};
