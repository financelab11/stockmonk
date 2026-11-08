import type { StockStory } from "@/content/stocks/types";

export const GMDCLTD: StockStory = {
  ticker: "GMDCLTD",
  kicker: "Metals & Commodities · Lignite mining and power",
  title: "GMDC sells lignite and power, and not all its profit is from mining",
  dek: "Gujarat Mineral Development Corporation mined ₹32B of revenue from lignite, bauxite and other minerals, at a 17.4% operating margin. Net margin was 20.6%, higher than operating margin, which means non-operating income is doing part of the work.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was ₹32B, 18.6% higher, and the operating margin was 17.4%.",
    "Net margin of 20.6% exceeds the operating margin, a sign of income outside the mining business.",
    "Free cash flow was negative ₹2.9B, though the balance sheet still holds ₹3.3B of net cash.",
    "At ₹473.50 the shares trade at 22.8 times earnings but 25.1 times EV/EBITDA.",
  ],
  filingUrl:
    "https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=GMDCLTD",
  irUrl: "https://www.gmdcltd.com",
  bigPicture: {
    paragraphs: [
      "Gujarat Mineral Development Corporation is a Gujarat state public-sector miner. Its main product is lignite, a low-grade coal used in boilers, brick kilns, textile processing, chemical plants and captive power. It also mines bauxite, fluorspar, manganese, silica sand, limestone, bentonite and ball clay, and it runs thermal, wind and solar power plants. The company is based in Ahmedabad and employed 679 people.",
      "The trailing twelve months produced ₹32B of revenue, 18.6% more. Q2 FY27 contributed ₹9.03B at a 21.0% operating margin. The ₹473.50 close gives a market value of ₹150.6B; the shares are 21% up from the low of a ₹394.55 to ₹771.90 range. The one-year return is minus 19.7%, while the five-year return is 645.7%.",
      "The analytical trap here is the net margin. At 20.6% it is higher than the 17.4% operating margin, which is unusual for a miner. In FY2026, net profit of ₹9.57B was more than twice operating profit of ₹4.43B. That gap cannot come from selling lignite; it comes from other income, and a reader needs to separate the two before judging the mining business.",
    ],
    quote:
      "A mining company with a large cash balance can report a net margin that has little to do with mining. Always check whether the profit came from the pit or from the treasury.",
  },
  whatItDoes: {
    paragraphs: [
      "The mining segment sells lignite and other minerals to industrial customers, mostly in Gujarat. Lignite is bulky and low in energy density, so it is expensive to transport relative to its value; most of it is sold to customers within trucking distance of the mine. That gives GMDC a regional moat but also limits how far it can grow without new deposits.",
      "The power segment runs thermal plants plus wind and solar capacity. Some power is sold to the grid and some supports the mining operations. Power is a regulated, capital-intensive business with a different return profile from mining: it earns a fixed return on assets rather than a commodity spread.",
      "The other minerals are smaller in revenue but diversify the resource base. Bauxite feeds aluminium and refractory users; fluorspar is used in chemicals and steel; silica sand goes to glass and foundries; bentonite and ball clay go to ceramics and drilling. The company has also announced a research collaboration on rare-earth supply chains, which is an early-stage option rather than a current revenue line.",
    ],
    bullets: [
      {
        title: "Lignite",
        detail:
          "Low-grade coal sold to industrial boilers, kilns and captive power in Gujarat.",
      },
      {
        title: "Other minerals",
        detail:
          "Bauxite, fluorspar, manganese, silica sand, limestone, bentonite and ball clay.",
      },
      {
        title: "Power",
        detail:
          "Thermal, wind and solar generation, partly captive and partly sold.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Lignite revenue is volume multiplied by the notified or auctioned price. The cost is overburden removal, excavation, transport, royalties and land-related payments. Gross margin is 89.6%, which looks extraordinary until you remember that mining accounts book a large part of the cost below the gross-profit line. Operating margin of 17.4% is the better measure of the spread.",
      "The power business changes the consolidated arithmetic. A thermal plant has high fixed costs and earns a regulated return; when it runs below expectations, it dilutes the mining margin. The wind and solar assets are smaller and lower-cost to run but still add capital employed.",
      "The net margin is higher than the operating margin because of non-operating income. In FY2026, operating profit was ₹4.43B and net profit was ₹9.57B. Even after accounting for tax, that gap implies a substantial contribution from interest on cash, other income or one-off items. Q2 FY26 is the clearest example: net profit of ₹4.66B on ₹5.28B of revenue, which is not a repeatable mining result.",
    ],
  },
  growth: {
    paragraphs: [
      "The revenue line went from ₹13.29B in FY2021 to a peak of ₹34.98B in FY2023, then fell to ₹24.63B in FY2024 and recovered to ₹25.23B in FY2026. The trailing figure of ₹32B includes a strong latest quarter. This is a price-and-volume cycle, not a steady compounder.",
      "The growth options are new mineral blocks, expansion of existing lignite mines and the power portfolio. The constraint is that lignite demand is tied to industries that are under pressure to decarbonise. In the near term, energy security keeps lignite relevant; in the long term, renewable power and grid electrification reduce the addressable market.",
      "The single analyst covering the stock expects ₹41.05B of revenue this fiscal year and ₹50.73B next year. That is a big step up from the ₹25.23B reported in FY2026 and should be treated with caution given the coverage is one estimate.",
    ],
    bullets: [
      {
        title: "Lignite volumes",
        detail:
          "Industrial demand in Gujarat and new mining blocks support tonnage.",
      },
      {
        title: "Power capacity",
        detail:
          "Additional wind and solar assets add regulated or contracted revenue.",
      },
      {
        title: "Other minerals",
        detail:
          "Bauxite and fluorspar give exposure beyond fuel markets.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating profit went from a small loss in FY2021 to ₹13.37B in FY2023, then fell to ₹6.09B in FY2024 and ₹4.43B in FY2026. The trailing operating margin is 17.4%. That is a wide swing for a mining company and reflects both lignite prices and the cost of overburden removal.",
      "Net profit told a different story: ₹12.04B in FY2023, ₹5.97B in FY2024, ₹6.80B in FY2025 and ₹9.57B in FY2026. The FY2026 increase came while operating profit fell, which is exactly the pattern to investigate. The equity return is 9.6% and the return on invested capital 11.0%, both low for a business with privileged access to a state resource.",
      "Trailing diluted EPS is ₹20.79, and the stock trades at 22.8 times that figure. A low-teens return on capital does not normally command a low-twenties earnings multiple unless the market expects a change in the earnings base.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative ₹2.9B, a minus 11.5% margin, after positive ₹4.30B in FY2025 and negative ₹3.66B in FY2024. Mining cash flow swings with overburden removal and with the timing of power project spending. A year of heavy stripping can consume cash even when the mine is profitable.",
      "The balance sheet carries ₹3.3B of net cash, equal to negative 0.6 times EBITDA, and interest cover is 29.3 times. That is comfortable, but the cash is not large relative to the market capitalisation or to the power segment's capital needs.",
      "The negative free cash flow alongside a positive net profit is a reminder that reported earnings and cash are not the same thing in mining. The FY2026 net profit was boosted by non-operating income, while the cash flow was negative because of capital spending.",
    ],
  },
  valuation: {
    paragraphs: [
      "The close of ₹473.50 puts the stock at 22.8 times trailing earnings, 25.1 times EV/EBITDA and 4.6 times sales. The EV/EBITDA multiple being higher than the P/E is unusual. It happens because EBITDA strips out the non-operating income that lifts net profit, so the denominator is small relative to enterprise value. In other words, the headline P/E looks cheaper than the operating business deserves.",
      "Within the peer table, 25.1 times EV/EBITDA is above HindCopper at 23.4 times, Gravita at 23.6 times and MOIL at 8.7 times, and below APL Apollo at 29.9 times. For a lignite miner with a 17.4% operating margin, that is a full multiple.",
    ],
  },
  analysts: {
    paragraphs: [
      "Only one analyst contributes to the third-party consensus. The target is ₹267.00, which is well below the current price of ₹473.50. That is not a signal to act on; it is a signal that coverage is thin and the estimate may be stale. A single number cannot be treated as a consensus.",
      "The same analyst expects ₹41.05B of revenue and ₹29.40 of EPS this fiscal year, then ₹50.73B and ₹34.10 next year. Those estimates imply a sharp recovery from the FY2026 revenue of ₹25.23B. Without a second contributor, there is no way to tell whether that is a considered forecast or an old model.",
    ],
  },
  risks: {
    intro:
      "GMDC's risks are resource depletion, the energy transition, power-segment capital and the quality of non-operating income. The last one is easy to miss because it flatters the headline profit.",
    items: [
      {
        title: "Lignite demand transition",
        severity: "High",
        detail:
          "Lignite is the highest-emission coal. Industrial customers face pressure to switch to gas, electricity or biomass, which shrinks the long-term market.",
        watch: "Lignite volumes and the customer mix in the mining segment.",
      },
      {
        title: "Earnings quality",
        severity: "High",
        detail:
          "Net profit has repeatedly exceeded operating profit because of non-operating income. That income may not recur.",
        watch: "Other income, one-off items and the gap between operating and net profit.",
      },
      {
        title: "Power segment",
        severity: "Medium",
        detail:
          "Thermal and renewable plants are capital-intensive and earn regulated returns. Poor availability or tariff disputes reduce the contribution.",
        watch: "Segment revenue and profit, plant load factor and tariff orders.",
      },
      {
        title: "Land and clearances",
        severity: "Medium",
        detail:
          "New mining blocks need land acquisition, environmental clearance and forest approval, all of which can take years.",
        watch: "Project milestones and capital work in progress.",
      },
      {
        title: "Single-state concentration",
        severity: "Medium",
        detail:
          "Most revenue comes from Gujarat, so state policy, royalty changes and local disruptions affect the whole company.",
        watch: "State royalty notifications and lease renewals.",
      },
    ],
    watchlist: [
      {
        title: "Operating profit",
        detail:
          "The cleanest measure of the mining business, before non-operating income.",
      },
      {
        title: "Lignite volume",
        detail:
          "Volume tells you whether customers are staying or switching away.",
      },
      {
        title: "Cash flow",
        detail:
          "Negative free cash flow with positive net profit needs an explanation in the annual report.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "GMDC is a Gujarat lignite miner with ₹32B of revenue, a 17.4% operating margin and ₹3.3B of net cash. It also owns power assets and a portfolio of smaller minerals. The five-year return of 645.7% reflects a re-rating from a very low base, not a sudden improvement in mining economics.",
      "The FY2026 accounts need care. Net profit of ₹9.57B against operating profit of ₹4.43B means the company earned more below the operating line than above it. Until the source of that income is identified, the 22.8 times P/E is not measuring the mining business.",
      "The long-term question is lignite. India still needs the fuel for industrial heat, but the direction of policy and customer investment is away from it. A miner with a depleting resource and a single-state customer base has to find new revenue before the old one shrinks.",
    ],
    questions: [
      "What generated the non-operating income in FY2026?",
      "How much of revenue comes from lignite versus power and other minerals?",
      "What is the remaining mineable reserve life of the main lignite blocks?",
      "How much capital will the power segment require over the next three years?",
    ],
  },
};
