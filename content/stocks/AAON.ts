import type { StockStory } from "./types";

export const AAON: StockStory = {
  ticker: "AAON",
  kicker: "Industrials & Cyclicals · Commercial HVAC equipment",
  title: "AAON is growing revenue fast and earning less on it",
  dek: "Custom rooftop units, chillers and air handling equipment for commercial buildings. Revenue rose 53.5% while operating income fell from $227.5M to $146.2M, and free cash flow turned negative. That gap is the report.",
  readingMinutes: 11,
  takeaways: [
    "Trailing revenue is $1.93B, up 53.5%, with the latest quarter more than doubling.",
    "Operating income fell from $227.5M in FY2023 to $146.2M in FY2025 on higher revenue.",
    "Free cash flow was negative $43.4M as capital spending and working capital absorbed the profit.",
    "Net debt of $405.8M is 1.4x EBITDA, so the balance sheet can carry the current build-out.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/824142/000082414226000005/aaon-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000824142&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "AAON builds the heavy boxes on top of commercial buildings that heat, cool and ventilate the air inside. The product range covers standard and custom rooftop units, chillers, air handling units, energy recovery units and geothermal heat pumps. Customers are contractors, engineers and building owners who need equipment specified for a particular building, not a consumer appliance off a shelf.",
      "The company is in the middle of an expansion. Revenue rose from $534.5M in FY2021 to $1.44B in FY2025 and reached $1.93B on a trailing basis, up 53.5%. The latest quarter alone grew 101.2% to $627.0M. Growth that fast in engineered equipment usually involves new capacity, a large order backlog or an acquisition, and the brief does not separate the three.",
      "Profit has not kept pace. Operating income fell from $227.5M in FY2023 to $209.1M in FY2024 and $146.2M in FY2025, even as revenue climbed. Free cash flow was negative $43.4M. The shares have fallen 42.6% over one year and sit at $57.19, just above the 52-week low of $53.12 and far below the high of $150.46.",
    ],
    quote:
      "For an equipment maker, revenue is the easy number to grow. The hard part is earning the same margin on a bigger volume while building the plants to serve it.",
  },
  whatItDoes: {
    paragraphs: [
      "AAON sells through three reported lines: Units, Parts and Other. Units is the main business, covering the selling price of rooftop equipment, chillers and air handlers plus freight. Parts covers replacement coils and components sold to contractors maintaining existing equipment. Other holds costs that are not allocated to the two selling segments.",
      "The demand drivers are commercial construction, replacement of ageing equipment, energy-efficiency rules and, increasingly, the cooling needs of data centres and industrial facilities. A custom unit is specified by an engineer for a specific building, which makes the sale technical and the relationship sticky. A standard unit is more of a commodity and competes on price and lead time.",
      "The company is based in Tulsa and employed 2,268 people at the last count. Manufacturing is capital-intensive: plants, coil lines, testing labs and inventory. That is why capital spending and working capital matter as much as the income statement for this business.",
    ],
    bullets: [
      {
        title: "Custom and semi-custom units",
        detail:
          "Engineered rooftop equipment for specific buildings. Higher price, longer lead time and more technical selling.",
      },
      {
        title: "Standard units",
        detail:
          "Catalogue equipment for routine replacement and light commercial work. More price competition.",
      },
      {
        title: "Parts and coils",
        detail:
          "Aftermarket components. Smaller revenue, but recurring and less cyclical than new equipment.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "AAON earns a manufacturing margin: it buys steel, copper, aluminium, compressors and electronics, converts them into a finished unit and sells it at a price that covers material, labour, factory overhead and freight. Gross margin was 25.6% on a trailing basis. That is thin enough that a swing in steel or copper prices can move profit materially if the company cannot pass it through.",
      "The operating leverage works in both directions. A factory has fixed costs in supervision, rent and equipment depreciation, so higher volume spreads those costs and lifts margin. But when a company is adding capacity, the new plant runs below utilisation for a period, and the start-up costs land before the revenue. That is the most likely explanation for the margin decline alongside revenue growth.",
      "Pricing is the other lever. Custom equipment is quoted project by project, so the company can reprice new orders when costs rise. The lag between quoting and shipping means a sudden input-cost spike hits margins on work already booked. That price-cost spread is the number to watch in any industrial like this.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 20.6% a year from $534.5M in FY2021 to $1.44B in FY2025, and then accelerated. The quarterly sequence shows the step-change: $322.1M in Q1 FY25, $311.6M in Q2 FY25, $384.2M in Q3 FY25, $424.2M in Q4 FY25, $496.9M in Q1 FY26 and $627.0M in Q2 FY26.",
      "A doubling in quarterly revenue within a year is not normal organic growth for a company that sells engineered equipment. It points to either a very large order cycle, new capacity coming online, an acquisition or some combination. The brief does not break it out, so the reader should treat the growth rate as a blend rather than assume it is all same-business demand.",
      "Third-party estimates call for $2.31B of revenue and $2.38 of EPS this fiscal year, then $2.74B and $3.57 next year. That implies about 19% revenue growth next year and much faster EPS growth, which requires the margin to recover. Only four analysts contribute to the target average, so the estimates are thin.",
    ],
    bullets: [
      {
        title: "Data-centre and industrial cooling",
        detail:
          "Large facilities need purpose-built air handling and cooling. A source of demand that did not exist at this scale a decade ago.",
      },
      {
        title: "Replacement cycle",
        detail:
          "Existing rooftop units wear out and must be replaced, which gives the business a base load through the construction cycle.",
      },
      {
        title: "Capacity additions",
        detail:
          "New plants raise the revenue ceiling but depress margin until they are full.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows the shape of the problem. Revenue rose from $534.5M in FY2021 to $888.8M, $1.17B, $1.20B and $1.44B in the following years. Operating income rose from $69.3M to $126.8M and $227.5M, then fell to $209.1M and $146.2M. The peak profit year was FY2023, two years before the peak revenue year.",
      "The quarterly margins confirm that the compression is recent and persistent. Q1 FY25 was 10.9%, Q2 FY25 7.6%, Q3 FY25 11.3%, Q4 FY25 10.4%, Q1 FY26 11.5% and Q2 FY26 11.0%. The business is earning a low-teens operating margin on much higher revenue than it did at the 2023 peak.",
      "Return on equity was 17.8% and return on invested capital 13.0%. Those are respectable but not high for a company that trades at 29.3x earnings. The gap between the two reflects the debt taken on during the expansion. Net margin was 8.2%, so most of the operating profit survives to the bottom line.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $43.4M, a -2.2% margin, and the FCF yield is -0.9%. The annual history shows the strain: $5.8M of free cash flow in FY2021 and $7.3M in FY2022, with no reliable figures for the later years. A capital-intensive manufacturer adding capacity and carrying more inventory will consume cash even while reporting profit.",
      "Net debt was $405.8M, or 1.4x EBITDA. That is a manageable ratio, but it is new for a company that historically ran with little debt. The interest cost is small relative to operating income, so the balance sheet is not the immediate constraint.",
      "The cash question is whether the capital spending is building capacity that will earn a return or simply keeping up with a temporary surge. If the new plants fill up, depreciation will be absorbed and free cash flow should recover. If demand fades first, the company will be left with fixed costs and a leveraged balance sheet.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $57.19 the shares trade at 29.3x trailing earnings, 17.0x EV/EBITDA and 2.6x sales. The earnings multiple is being applied to a depressed profit base, which makes it look higher than the cash-based multiple. EV/EBITDA of 17.0x is the fairer comparison for a capital-intensive manufacturer.",
      "The peer table puts MLI at 10.1x EV/EBITDA, ROAD at 12.9x and WTS at 17.1x. AAON sits at the top of that range despite a lower operating margin and negative free cash flow. The market is paying for growth and for the data-centre cooling exposure rather than for current profitability.",
      "The valuation implies a margin recovery. If operating income returns toward the FY2023 level on a much larger revenue base, the shares are reasonably priced. If the current margin is the new normal, 17.0x EBITDA is full. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed third-party consensus includes four analysts with a mean target of $128.50 and a range of $110.00 to $154.00. A mean more than double the share price is extraordinary and should be read as a signal about how far expectations have fallen, not as a forecast.",
      "Estimates call for $2.31B of revenue and $2.38 of EPS this fiscal year, then $2.74B and $3.57. The EPS growth implied is about 50%, which cannot come from revenue alone; it requires the operating margin to recover meaningfully. That is the central assumption in the sell-side model.",
      "For the next quarter the consensus is $602.2M of revenue and $0.58 of EPS, then $583.7M and $0.63. The sequential revenue decline suggests the analysts expect the current order surge to cool. These are third-party views, not a Stockmonk rating.",
    ],
  },
  risks: {
    intro:
      "AAON is a cyclical manufacturer in the middle of a capacity expansion. The risks are the ones that always matter for that combination: orders, price-cost spread, project execution and the balance sheet that funds it all.",
    items: [
      {
        title: "Order cycle reversal",
        severity: "High",
        detail:
          "Revenue more than doubled in a year. If the orders behind that surge are pulled forward, the factories will run below capacity and margins will fall further.",
        watch: "Backlog, order intake and book-to-bill.",
      },
      {
        title: "Price-cost spread",
        severity: "High",
        detail:
          "Steel, copper and components are quoted into fixed-price projects. A cost spike between quote and shipment lands directly on margin.",
        watch: "Gross margin and the timing of price increases.",
      },
      {
        title: "Capacity execution",
        severity: "Medium",
        detail:
          "New plants take time to ramp. Start-up costs, hiring and training depress margin before the volume arrives.",
        watch: "Segment operating margin and capital spending.",
      },
      {
        title: "Leverage",
        severity: "Medium",
        detail:
          "Net debt of $405.8M is 1.4x EBITDA. That is manageable now, but it reduces flexibility if the cycle turns while the capital programme is unfinished.",
        watch: "Net debt to EBITDA and interest cover.",
      },
      {
        title: "Valuation on peak or trough earnings",
        severity: "Medium",
        detail:
          "At 29.3x earnings, the multiple is high on current profit and lower on mid-cycle profit. The market is assuming a recovery that has not appeared yet.",
        watch: "Forward EPS estimates against the operating margin trend.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The clearest measure of whether growth is profitable or just bigger.",
      },
      {
        title: "Free cash flow",
        detail:
          "Negative today. A return to positive would show the capital programme is maturing.",
      },
      {
        title: "Backlog",
        detail:
          "The leading indicator for a manufacturer that sells long-lead engineered equipment.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "AAON has a real business: custom HVAC equipment specified into commercial buildings, a replacement cycle that provides a base load, and growing demand for data-centre and industrial cooling. Revenue has nearly quadrupled since FY2021.",
      "The concern is that profit has gone the other way. Operating income fell from $227.5M to $146.2M between FY2023 and FY2025, free cash flow is negative, and the company now carries $405.8M of net debt. Growth is being bought with capital and margin.",
      "The open questions are how much of the revenue surge is organic, when the new capacity reaches normal utilisation, and what operating margin the business can hold at $2.3B of revenue. The answers decide whether the current multiple is a discount or a premium.",
    ],
    questions: [
      "How much of the 101.2% quarterly growth came from acquisitions?",
      "When do the new plants reach normal utilisation, and what margin do they earn?",
      "What is the mid-cycle operating margin at $2B of revenue?",
      "Can free cash flow turn positive while the capital programme continues?",
    ],
  },
};
