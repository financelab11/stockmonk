import type { StockStory } from "@/content/stocks/types";

export const borouge: StockStory = {
  ticker: "BOROUGE",
  kicker: "United Arab Emirates · Petrochemicals",
  title: "Borouge: a polyolefin producer paying a 7% yield through the cycle",
  dek:
    "Borouge makes polyethylene and polypropylene from Abu Dhabi feedstock and sells them into Asia, the Middle East and Europe. Earnings are cyclical and have softened, but a 7.1% dividend yield and 24% return on equity keep the shares interesting.",
  readingMinutes: 8,
  takeaways: [
    "TTM revenue of $5.7bn and net income of $0.78bn, with a 21.5% operating margin and 24.4% return on equity.",
    "Revenue fell from $6.22bn in 2021 to $5.85bn in 2025 as polymer prices normalised from the post-pandemic peak.",
    "The company is a joint venture between ADNOC and Borealis, with a global sales network and a large export footprint.",
    "At AED 2.27 the shares trade at 23.7x trailing earnings and 13.5x EV/EBITDA, with a 7.1% dividend yield.",
    "Consensus has a mean target of AED 2.77 from 13 analysts, split between six strong buys and seven holds.",
  ],
  filingUrl: "https://stockanalysis.com/quote/adx/BOROUGE/financials/",
  irUrl: "https://www.borouge.com",
  bigPicture: {
    paragraphs: [
      "Borouge is a petrochemicals company that converts ethane and other feedstock from Abu Dhabi's gas fields into polyethylene and polypropylene, the plastics used in packaging, pipes, automotive parts and consumer goods. It sells into more than 50 countries, with Asia the largest market, and it operates one of the largest integrated polyolefin complexes in the world.",
      "The equity is a cyclical materials business with a strong cost position and a high dividend payout. The feedstock advantage — cheap ethane from ADNOC — gives Borouge lower production costs than naphtha-based producers in Europe and Asia. The trade-off is commodity price exposure and a concentrated ownership structure.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The company operates crackers and polymerisation plants in Ruwais, Abu Dhabi, producing ethylene, polyethylene and polypropylene. It also has a compounding business that turns basic polymers into specialised compounds for automotive, wire and cable, and healthcare applications, and a marketing joint venture with Borealis that sells the output globally.",
      "Borouge's products are sold under the Borouge and Borealis brands, with a focus on higher-value grades rather than commodity volume. That strategy is intended to reduce the volatility of earnings and to capture a premium over standard polymer prices, though the business remains exposed to the global supply cycle.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the volume of polymer sold multiplied by the prevailing price. The spread between polymer prices and feedstock costs is the key profit driver, and it moves with oil, gas and naphtha prices as well as with global capacity additions. Operating margin was 21.5% on a trailing basis, down from the 2021 peak.",
      "The cost base is dominated by feedstock, energy and logistics. Because the feedstock is supplied under long-term agreements with ADNOC, Borouge has a structural cost advantage over naphtha-based competitors. The company also benefits from scale, integrated logistics and a global marketing network that reaches customers directly.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue was $6.22bn in 2021, $6.00bn in 2022, $5.79bn in 2023, $6.03bn in 2024 and $5.85bn in 2025. The pattern tracks polymer prices rather than volumes, which have grown modestly. Net income fell from $1.52bn in 2021 to $1.09bn in 2025 as spreads compressed.",
      "The trailing twelve months show revenue of $5.70bn, down 1.6%, and consensus expects $5.7bn in 2026, down 3%, as new global capacity keeps polymer prices under pressure. The growth story is not volume-led in the near term; it depends on the cycle turning and on the company's ability to shift its mix toward higher-value grades.",
    ],
  },
  performance: {
    paragraphs: [
      "Net income was $1.52bn in 2021, $1.09bn in 2022, $0.99bn in 2023, $1.23bn in 2024 and $1.09bn in 2025. The 2021 peak reflected exceptional polymer prices; since then, earnings have settled at a lower level as supply increased and demand normalised.",
      "Return on equity was 24.4% on a trailing basis, still high because the equity base is relatively small compared with the asset base. The company carries $3.65bn of debt and $0.31bn of cash, so leverage is meaningful and the dividend is funded partly from cash flow and partly from the balance sheet.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $1.19bn on a trailing basis, which covers the dividend and maintenance capital spending. The company has been investing in the Borouge 4 expansion, a large cracker and polymer complex that will add capacity and should lower unit costs when it starts up.",
      "The dividend yield is 7.1%, high for a cyclical materials company, and the payout is a central part of the investment case. The risk is that a prolonged downturn in polymer prices forces a cut. The Borouge 4 project is the main call on cash and the main source of future volume growth.",
    ],
  },
  valuation: {
    paragraphs: [
      "At AED 2.27 the shares trade at 23.7x trailing earnings and 13.5x EV/EBITDA, a premium to global petrochemical producers. The multiple reflects the low earnings base at the bottom of the cycle, the 7.1% dividend yield and the feedstock advantage rather than a strong near-term growth outlook.",
      "Third-party consensus, attributed and dated November 2026, has a mean target of AED 2.77 and a range of AED 2.40–3.15 from 13 analysts. Six carry a strong buy and seven a hold, with no sells. The revenue estimate is about $5.7bn for 2026, down 3%. The EPS estimate in the feed is distorted at this precision, so revenue and the dividend are the more reliable anchors. These are third-party estimates, not Stockmonk forecasts.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is moderate, with 13 analysts and a split between bulls attracted by the dividend and the feedstock advantage, and holds who see limited near-term upside while polymer prices remain weak.",
      "The key debate is the timing of the petrochemical cycle and the contribution from Borouge 4. A recovery in Chinese demand or a reduction in new global capacity would improve spreads; further capacity additions would keep prices and earnings under pressure.",
    ],
    bullets: [
      { title: "Consensus mean target", detail: "AED 2.77 (range AED 2.40–3.15), 13 analysts, November 2026." },
      { title: "FY2026 estimates", detail: "Revenue about $5.7bn, -3%; EPS estimate distorted at this precision." },
      { title: "Ratings mix", detail: "6 strong buy, 0 buy, 7 hold, 0 sell." },
    ],
  },
  risks: {
    intro:
      "The risks are polymer prices, new global capacity and the leverage that supports the dividend.",
    items: [
      {
        title: "Petrochemical cycle",
        severity: "High",
        detail:
          "Polymer prices and spreads are the main driver of earnings. A prolonged downturn would pressure profit and the dividend.",
        watch: "Polyethylene and polypropylene prices, naphtha spreads.",
      },
      {
        title: "New capacity",
        severity: "High",
        detail:
          "Large additions in Asia and the Middle East can oversupply the market and compress prices for several years.",
        watch: "Global capacity announcements, Chinese demand.",
      },
      {
        title: "Dividend coverage",
        severity: "Medium",
        detail:
          "The 7.1% yield is attractive but partly funded from a leveraged balance sheet. A deep downturn could force a cut.",
        watch: "Free cash flow, payout ratio, net debt.",
      },
      {
        title: "Project execution",
        severity: "Medium",
        detail:
          "Borouge 4 is a large, complex project. Delays or cost overruns would affect returns and cash flow.",
        watch: "Capex, start-up timeline, utilisation.",
      },
    ],
    watchlist: [
      { title: "Polymer spreads", detail: "The key profit driver." },
      { title: "Borouge 4", detail: "Start-up and cost." },
      { title: "Dividend", detail: "Coverage and payout policy." },
      { title: "Asian demand", detail: "The largest end market." },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Borouge is a low-cost polyolefin producer with a feedstock advantage, a global sales network and a 7.1% dividend yield. The shares are priced for a cyclical trough, which is either an opportunity or a warning depending on the direction of polymer prices.",
      "The investment case is a yield play on a cyclical materials business. Investors should focus on the spread, the Borouge 4 start-up and the dividend cover rather than on the headline earnings multiple, which is distorted by the bottom-of-cycle profit.",
    ],
    questions: [
      "Where are polyethylene spreads versus the mid-cycle average?",
      "How much capacity will Borouge 4 add and at what cost?",
      "Is the dividend covered by free cash flow at current prices?",
      "What would a Chinese demand recovery do to earnings?",
    ],
  },
};
