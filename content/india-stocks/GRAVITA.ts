import type { StockStory } from "@/content/stocks/types";

export const GRAVITA: StockStory = {
  ticker: "GRAVITA",
  kicker: "Metals & Commodities · Lead and metal recycling",
  title: "Gravita recycles lead, and growth keeps eating the cash",
  dek: "Gravita buys battery scrap, smelts it and sells lead at the market price. Revenue is ₹50.9B on a 9.7% operating margin. Free cash flow was negative ₹46 crore because scrap inventory and receivables absorbed the profit.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was ₹50.9B on a trailing basis, up 23.9%, with a 9.7% operating margin.",
    "Free cash flow was negative ₹46 crore, or minus 1.1% of revenue.",
    "Net debt is ₹2.9B, equal to 0.6 times EBITDA.",
    "At ₹1,505.80 the shares trade at 27.6 times earnings and 23.6 times EV/EBITDA.",
  ],
  filingUrl:
    "https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=GRAVITA",
  irUrl: "https://www.gravitaindia.com",
  bigPicture: {
    paragraphs: [
      "Gravita India is a recycler. It collects lead-acid battery scrap and other lead-bearing waste, smelts it in its own plants, and sells secondary lead, lead alloys, lead oxides and lead sheets to battery makers, cable manufacturers and chemical companies. It also recycles aluminium scrap into alloys, plastic scrap into granules, and copper into alloys and strips, and it builds turnkey recycling plants for other companies.",
      "The trailing year's revenue was ₹50.9B, 23.9% higher. In Q2 FY27 the company booked ₹14.27B at a 9.4% operating margin. The ₹1,505.80 close gives a market value of ₹109.7B, with the shares 37% up from the low of a ₹1,266.90 to ₹1,913.60 range.",
      "The common mistake with a recycler is to read revenue as a metal-price bet. It is partly that, but the core profit is a conversion spread: the difference between what Gravita pays for scrap and what it receives for refined metal, minus the cost of smelting. Lead prices matter because they change inventory values, not because they change the spread one-for-one.",
    ],
    quote:
      "Recycling earns a manufacturing margin on a commodity price. The plant, the furnace and the collection network are the assets; the metal is just the unit being processed.",
  },
  whatItDoes: {
    paragraphs: [
      "The lead business is the largest piece. Gravita sources scrap from battery dealers, dismantlers and industrial generators, then processes it into refined lead and lead alloys. Battery manufacturers are both suppliers of scrap and customers for the recycled metal, which creates a closed loop: a battery sold into the market comes back years later as feedstock.",
      "The other verticals use the same playbook on different materials. Aluminium scrap becomes alloy ingots for die-casters. Plastic scrap becomes granules for moulders. Copper scrap becomes alloys and strips. The turnkey division sells the know-how: it designs and commissions recycling plants for clients, then earns consultancy and compliance fees, including work tied to extended producer responsibility obligations.",
      "The company employed about 3,500 people and is based in Jaipur, with operations in India and overseas. The overseas plants matter because they secure scrap and serve customers in markets where collection infrastructure is thinner.",
    ],
    bullets: [
      {
        title: "Lead processing",
        detail:
          "Battery scrap and lead waste smelted into refined lead, alloys and oxides.",
      },
      {
        title: "Aluminium, plastic and copper",
        detail:
          "Scrap converted into alloy ingots, granules and copper strips.",
      },
      {
        title: "Turnkey and compliance",
        detail:
          "Plant design, commissioning and extended-producer-responsibility services.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The revenue model is buy-process-sell. Gravita pays for scrap, spends on energy, labour, consumables and furnace maintenance, and sells refined metal at a price linked to the London Metal Exchange or the domestic market. Gross margin is 18.6%, which is the spread after the cost of scrap. Operating margin is 9.7%, so roughly half the gross profit goes to plant overheads, logistics, sales and administration.",
      "The margin per tonne is small in absolute terms, so volume and plant utilisation decide profitability. A furnace running at full capacity spreads its fixed cost over more tonnes; a furnace waiting for scrap does not. That is why the company keeps adding capacity and why revenue growth is central to the story.",
      "Lead price movements cut both ways. If lead rises between buying scrap and selling metal, inventory gains flatter the margin. If it falls, the same inventory produces losses. The 9.7% operating margin is therefore a blend of conversion spread and inventory timing, and a reader should not assume it is stable from quarter to quarter.",
    ],
  },
  growth: {
    paragraphs: [
      "The top line climbed from ₹14.10B in FY2021 to ₹42.65B in FY2026, and the trailing twelve months are ₹50.9B. Growth has been driven by capacity additions, higher realisations and the acquisition of scrap collection reach. The latest quarter grew 37.7% year on year.",
      "The structural driver is regulation. India's battery waste rules make producers responsible for collecting and recycling what they sell, which pushes scrap into the formal sector and creates demand for compliant recyclers. That is a tailwind for Gravita because informal smelters cannot issue the certificates that producers need. The same rules raise the compliance burden on Gravita's own plants.",
      "The consensus expects ₹61.98B of revenue this fiscal year and ₹83.17B next year. Those are aggressive numbers: the next-year figure implies growth of about a third on top of a year that is already growing fast. The analysts are effectively assuming new capacity ramps on schedule and scrap availability keeps pace.",
    ],
    bullets: [
      {
        title: "Capacity additions",
        detail:
          "New recycling lines increase tonnes processed and spread fixed costs.",
      },
      {
        title: "Formalisation of scrap",
        detail:
          "Extended producer responsibility rules push collection toward compliant recyclers.",
      },
      {
        title: "New materials",
        detail:
          "Aluminium, plastic, copper and lithium battery recycling widen the addressable waste stream.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating profit climbed from ₹1.21B in FY2021 to ₹4.39B in FY2026. The operating margin moved from 8.6% to 10.3% over that period, but the quarterly path is uneven: 8.1% in Q3 FY25, 11.8% in Q3 FY26 and 7.5% in Q1 FY27. Those swings are consistent with inventory timing and with the ramp of new plants.",
      "Trailing diluted EPS is ₹53.91 against ₹51.32 for FY2026. The equity return is 16.2%, almost identical to the 16.0% return on invested capital. For a business that has grown revenue threefold in five years, a mid-teens return is respectable but not high; recycling is capital-intensive, and each new plant adds to the invested capital base before it adds to profit.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative ₹46 crore over the trailing period, a minus 1.1% margin. That is not a one-off. Free cash flow was negative ₹61 crore in FY2022, positive ₹93 crore in FY2023, negative ₹56 crore in FY2024, positive ₹1.75B in FY2025 and negative ₹46 crore in FY2026.",
      "The pattern is the signature of a business that funds growth through working capital. Scrap must be bought and held before it is processed; finished lead sits in inventory until it is sold; customers pay on credit. When revenue grows quickly, inventory and receivables grow with it, and the cash goes out before it comes back. FY2025 was the exception because collections caught up.",
      "Net debt is ₹2.9B, equal to 0.6 times EBITDA, and interest cover is 13.3 times. That is manageable, but it means the company does not have the balance-sheet cushion of the net-cash businesses in this peer group. If growth slows, the working capital should release and free cash flow should turn positive; if growth accelerates, the reverse happens.",
    ],
  },
  valuation: {
    paragraphs: [
      "At the ₹1,505.80 close the market is paying 27.6 times trailing earnings and 23.6 times EV/EBITDA, or 2.2 times sales. Within the peer table, that is a premium to Lloyds at 13.8 times EV/EBITDA and MOIL at 8.7 times, and close to GMDC at 25.1 times.",
      "A 23.6 times EV/EBITDA multiple on a 9.7% operating margin recycler is demanding. It implies the market expects capacity additions to lift earnings substantially, or that the recycling business deserves a higher multiple because of its regulatory tailwind. The absence of a meaningful free-cash-flow yield, shown as minus 0.4%, is the counterweight: investors are paying for growth that has not yet converted into cash.",
    ],
  },
  analysts: {
    paragraphs: [
      "Ten analysts cover the company, unusually broad for a mid-cap recycler. Their average target is ₹1,919.70, with a range of ₹1,530.00 to ₹2,332.00. The figure is third-party work, not a Stockmonk judgment.",
      "For this fiscal year the estimates are ₹61.98B of revenue and ₹59.43 of EPS; next year they rise to ₹83.17B and ₹74.14. The revenue step-up is much larger than the EPS step-up, which implies the analysts expect margin to stay around current levels rather than expand. Next-quarter revenue estimates of ₹16.52B and ₹18.04B point to continued sequential growth.",
    ],
  },
  risks: {
    intro:
      "Gravita's risks are scrap availability, lead price timing, environmental compliance and the cash cost of growth. The last one is the most immediate because free cash flow is already negative.",
    items: [
      {
        title: "Scrap availability and competition",
        severity: "High",
        detail:
          "Recyclers compete for the same battery scrap. If collection costs rise or informal operators outbid Gravita, the conversion spread narrows.",
        watch: "Scrap cost per tonne and plant utilisation.",
      },
      {
        title: "Lead price",
        severity: "High",
        detail:
          "Falling lead prices create inventory losses and can compress reported margin even when the conversion spread is unchanged.",
        watch: "Inventory days, realised lead price and gross margin.",
      },
      {
        title: "Environmental compliance",
        severity: "Medium",
        detail:
          "Smelting is regulated for emissions and waste handling. A plant shutdown or remediation order removes capacity.",
        watch: "Consent renewals, pollution-board notices and remediation provisions.",
      },
      {
        title: "Working capital",
        severity: "High",
        detail:
          "Growth absorbs cash. Four of the last six years had negative free cash flow, and net debt is ₹2.9B.",
        watch: "Inventory and receivable days, and the gap between profit and operating cash flow.",
      },
      {
        title: "Overseas operations",
        severity: "Medium",
        detail:
          "Plants outside India add currency, logistics and political risk that are harder for a domestic investor to monitor.",
        watch: "Country-wise revenue and any impairments in overseas subsidiaries.",
      },
    ],
    watchlist: [
      {
        title: "Conversion spread",
        detail:
          "The difference between scrap cost and metal realisations is the true operating metric.",
      },
      {
        title: "Free cash flow",
        detail:
          "Until growth is funded internally, the company depends on lenders or equity to expand.",
      },
      {
        title: "Capacity utilisation",
        detail:
          "New plants need feedstock; idle capacity is a fixed cost without revenue.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Gravita is a scrap recycler with ₹50.9B of revenue, a 9.7% operating margin and a 16.2% return on equity. It has grown revenue threefold in five years by adding capacity and moving into new materials, and it holds a regulatory tailwind from formalised battery recycling.",
      "The weak spot is cash. Negative free cash flow of ₹46 crore and net debt of ₹2.9B show that growth is being funded partly by working capital. That is normal for a expanding manufacturer, but it means the company is more dependent on lenders than the net-cash miners in the same peer group.",
      "The valuation at 23.6 times EV/EBITDA already assumes the expansion works. If capacity ramps and scrap is available, earnings can grow into the multiple. If either slips, the stock has little cash-flow support underneath it.",
    ],
    questions: [
      "How much of the margin comes from conversion spread versus inventory gains?",
      "What is the utilisation rate across the recycling plants?",
      "When does free cash flow turn positive on a sustained basis?",
      "How much of scrap supply is secured through long-term collection arrangements?",
    ],
  },
};
