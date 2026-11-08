import type { StockStory } from "./types";

export const WELL: StockStory = {
  ticker: "WELL",
  kicker: "Real estate · Healthcare and seniors housing",
  title: "Welltower's revenue is resident fees, not rent",
  dek: "The company owns the buildings, but in much of its portfolio it also shares in the operating business inside them. That is why revenue grew 49% and the operating margin is under 1%, and why neither number means what it would for a landlord.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $11.4B, up 49.4%, while the operating margin is 0.9% and the net margin is 15.3%.",
    "Net income exceeds operating income, which happens when gains on property sales and joint-venture income sit below the operating line.",
    "Free cash flow is $9.59B, an 83.8% margin, because depreciation on buildings is large and non-cash.",
    "At $245.01 the shares trade at 102.8x earnings and 64.3x EV/EBITDA, multiples that reflect a consolidated operating business rather than a pure rent roll.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/766704/000076670426000010/well-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000766704&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Welltower invests in healthcare infrastructure: seniors housing, post-acute care and health system properties. It owns the real estate and works with operators who run the buildings and look after the residents. The company itself employs a few hundred people, because the care is delivered by the operators rather than by the landlord.",
      "The important structural fact is that Welltower's exposure is not uniform across the portfolio. Some properties are leased on a triple-net basis, where the tenant pays rent and covers the operating costs, and the REIT's revenue is simply the rent. Others sit in a structure where the REIT owns the property and shares in the operating results of the business inside it, which means the resident fees and the operating costs of running the facility both appear on Welltower's income statement.",
      "That second structure explains the shape of the numbers. Revenue is $11.4B, operating margin is 0.9% and net margin is 15.3%. A landlord with a 0.9% operating margin would be in trouble. A company that consolidates the revenue and the payroll of a care business, and earns its return on the property underneath, is not.",
    ],
    quote:
      "When a REIT consolidates an operating business, revenue becomes resident fees and the margin becomes a labour cost. The property economics are still there, but they are buried.",
  },
  whatItDoes: {
    paragraphs: [
      "Seniors housing is the largest part of the story. These are buildings that provide independent living, assisted living and memory care, where residents pay a monthly fee that covers accommodation, meals, services and care. The operator runs the facility; Welltower owns the real estate and, in the shared-risk structure, participates in the cash flow the operator generates.",
      "The rest of the portfolio includes post-acute and long-term care facilities, outpatient medical buildings and health system properties. These are closer to traditional healthcare real estate: leased to operators or health systems on long leases with rent escalators.",
      "The demand driver is demographic. The number of people over eighty is growing, and the supply of new seniors housing has been constrained by construction costs and financing. That combination of rising demand and limited new supply is the core of the investment case.",
    ],
    bullets: [
      {
        title: "Seniors housing",
        detail:
          "Independent living, assisted living and memory care. Revenue is resident fees, and the REIT shares in the operating result.",
      },
      {
        title: "Post-acute care",
        detail:
          "Skilled nursing and rehabilitation facilities, usually leased to operators on long-term agreements.",
      },
      {
        title: "Outpatient medical",
        detail:
          "Medical office buildings leased to health systems and physician groups. The most bond-like part of the portfolio.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "In the leased part of the portfolio, the model is simple: rent per square foot, escalating annually, with the tenant responsible for property costs. The REIT's margin is high and the revenue is predictable. That is the model most people have in mind when they think about healthcare REITs.",
      "In the shared-risk part, the model is different. The property is owned by the REIT, but the revenue is the resident fee and the costs include nursing staff, food, utilities and administration. The operating margin on that revenue is thin because labour is expensive and occupancy determines how much of the fixed cost is covered. The REIT's return comes from the property yield plus its share of the operating profit, which rises quickly when occupancy improves because the cost base is largely fixed.",
      "That operating leverage is the reason the shared-risk model is attractive in a recovering occupancy market and dangerous in a declining one. A building at 80% occupancy and a building at 95% occupancy have similar costs and very different profits.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew at an 8.7% compound rate over five years, but the annual figures show something more dramatic: $3.20B in FY2021, $4.17B, $4.75B, $6.03B and $8.45B in FY2025. The trailing figure of $11.4B is 49.4% higher again, and the latest quarter grew 51.4%.",
      "Not all of that is rent growth. A shift toward consolidating operating businesses raises reported revenue without changing the underlying property count, because the resident fees now appear on the income statement instead of just the rent. Operating income rose from $171M to $517M over the same period, a much smaller increase than revenue, which is consistent with the mix shift.",
      "Third-party estimates point to $14.50B of revenue and $2.74 of EPS this fiscal year, then $16.95B and $3.14. Those numbers deserve a caveat: the estimate base is one analyst for the current year and two for the next, so it is closer to a single model than to a consensus.",
    ],
    bullets: [
      {
        title: "Occupancy recovery",
        detail:
          "Filling existing buildings raises revenue and drops most of the incremental cash to the operating line.",
      },
      {
        title: "Demand growth",
        detail:
          "An ageing population increases the number of people who need seniors housing, independent of the economic cycle.",
      },
      {
        title: "Portfolio mix",
        detail:
          "Moving assets into the shared-risk structure raises reported revenue and changes how the economics are presented.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly record shows a business in transition. Revenue rose from $1.97B in Q2 FY25 to $3.12B in Q3 FY26, while the operating margin fell from 15.1% to 10.8%. Q4 FY25 reported a negative 35.4% operating margin, which means a charge large enough to wipe out the quarter's operating income, most likely an impairment on properties.",
      "Net income has been volatile in a way that operating income has not: $304.6M, $282.2M, $117.8M, $752.3M, $463.0M and $414.8M across the last six quarters. Gains on property sales and equity-method income from joint ventures sit in that line, and they move independently of the rent roll.",
      "Return on equity is 3.5% and return on invested capital is 0.2%. Those numbers look terrible and they are not a measure of the business. A REIT holds buildings at depreciated cost, and its net income is reduced by depreciation that does not reflect the market value of the assets. For a company that has been growing its asset base quickly through acquisitions, the return on the book capital will lag the return on the underlying properties for years.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $9.59B, an 83.8% margin, and the shares trade at 18.7x that figure for a 5.3% yield. The annual record is $2.59B, $1.74B, $2.02B, $2.37B and $6.92B.",
      "A free-cash-flow margin above 80% is not a sign of extraordinary profitability. It is what happens when a company owns long-lived buildings, depreciates them heavily on the income statement and does not spend equivalent cash on maintenance in the same period. The depreciation is real over decades, but it is not a cash cost each year.",
      "The balance sheet carries $2.27B of net cash, which is unusual for a healthcare REIT and reflects the capital raised to fund acquisitions. As with any leveraged property business, the weighted average cost of debt and the maturity schedule matter more than the absolute debt figure.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $245.01 the shares trade at 102.8x trailing earnings, 64.3x EV/EBITDA, 15.5x sales and 18.7x free cash flow. The gap between those multiples is the whole point. An 18.7x cash-flow multiple looks reasonable; a 64.3x EBITDA multiple looks absurd; a 102.8x earnings multiple looks worse still.",
      "The explanation is that EBITDA is calculated after the labour and operating costs of the consolidated seniors housing business, which are real cash costs but belong to the operator's side of the economics rather than to the property. A net-lease REIT with the same buildings would report far less revenue and a far higher EBITDA margin. Comparing the two on EV/EBITDA is comparing different business models.",
      "The sector's standard measure is funds from operations, which adds back depreciation and removes gains on sales, and its adjusted variant, which also deducts recurring capital spending. Neither is in this dataset, which is a real limitation. Any conclusion drawn from the earnings or EBITDA multiples alone should be held lightly.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-two analysts publish price targets. The attributed mean is $261.64, inside a range of $230.00 to $292.00. The range is narrow and entirely above the current price.",
      "The estimate coverage is much thinner than the price coverage. Current-year revenue of $14.50B and EPS of $2.74 come from one analyst; next year's $16.95B and $3.14 come from two. Next quarter has one analyst at $3.93B and $0.67.",
      "This is a case where the target consensus and the earnings consensus describe different levels of confidence. Twenty-two people have a view on the price, and one has published a revenue model. The reader should treat the forward estimates as an illustration rather than as a forecast.",
    ],
  },
  risks: {
    intro:
      "Welltower's risks are operational, demographic and financial. The buildings are long-lived; the businesses inside them depend on occupancy, labour and the operators who run them.",
    items: [
      {
        title: "Operator and tenant credit",
        severity: "High",
        detail:
          "The REIT's cash flow depends on the operators who run the buildings. An operator in financial difficulty can miss rent or hand back the property.",
        watch: "Operator concentration, rent coverage ratios and any restructured leases.",
      },
      {
        title: "Labour cost and staffing",
        severity: "High",
        detail:
          "In the shared-risk portfolio, wages are the largest cost. Wage inflation that cannot be passed through in resident fees compresses the operating margin.",
        watch: "Operating expense per occupied unit and the growth in resident fees against wage costs.",
      },
      {
        title: "Occupancy",
        severity: "High",
        detail:
          "A building with high fixed costs and falling occupancy loses margin quickly, and the shared-risk structure passes that loss to the REIT.",
        watch: "Same-store occupancy and move-in versus move-out trends.",
      },
      {
        title: "Interest rates and refinancing",
        severity: "Medium",
        detail:
          "Property businesses fund themselves with debt. Higher rates raise the cost of refinancing and lower the value at which assets trade.",
        watch: "The cost of new mortgage debt, upcoming maturities and the interest coverage ratio.",
      },
      {
        title: "Reporting complexity",
        severity: "Medium",
        detail:
          "Consolidated operating revenue makes the standard multiples misleading, and a reader using EV/EBITDA or P/E without adjustment will misjudge the company.",
        watch: "Funds from operations, same-store net operating income and the leased versus shared-risk mix.",
      },
    ],
    watchlist: [
      {
        title: "Same-store occupancy",
        detail:
          "The operating leverage in seniors housing means occupancy is the single largest driver of margin.",
      },
      {
        title: "Operator coverage",
        detail:
          "The rent and income the REIT receives has to be covered by the cash the operator generates.",
      },
      {
        title: "Capital recycling",
        detail:
          "Sales and acquisitions change both the revenue base and the reported margin, so the mix has to be tracked alongside the totals.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Welltower owns healthcare and seniors housing real estate and increasingly participates in the operating businesses inside those buildings. Revenue of $11.4B and $9.59B of free cash flow describe a large, cash-generative asset base.",
      "The reported margins are the wrong starting point. A 0.9% operating margin and a 102.8x earnings multiple are what a consolidated operating business looks like when it sits inside a REIT structure; they are not evidence of a weak property portfolio. The 83.8% free-cash-flow margin is the other side of the same accounting coin.",
      "What a reader should take away is that the structure of the lease determines the shape of the financial statements. A triple-net landlord and a shared-risk operator can own identical buildings and report completely different numbers. Comparing them requires adjusting for that before drawing any conclusion.",
    ],
    questions: [
      "What share of the portfolio is triple-net versus shared-risk?",
      "What is same-store occupancy, and how fast are resident fees rising against wage costs?",
      "What is funds from operations per share, and how does the price compare with it?",
      "How much of the growth came from acquisitions rather than from the existing buildings?",
    ],
  },
};
