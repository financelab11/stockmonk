import type { StockStory } from "./types";

export const SHW: StockStory = {
  ticker: "SHW",
  kicker: "Materials · Coatings and paint",
  title: "Sherwin-Williams sells paint; the store network is what you pay for",
  dek: "A 48.6% gross margin is the chemistry. A 14.0% operating margin is the cost of putting a store, a colour-matching machine and a sales representative within reach of a contractor who needs a gallon by Friday.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $24.9B, up 7.0%, with a 14.0% operating margin and 10.7% net margin.",
    "Revenue grew 11% in FY2022 while operating income fell 17%, the clearest illustration of the lag between raw material inflation and price increases.",
    "Free cash flow is $3.08B, a 12.4% margin, against $11.53B of net debt at 3.0x EBITDA.",
    "At $344.10 the shares trade at 31.1x earnings and 24.3x EV/EBITDA, a premium that assumes the repaint cycle and pricing power both hold.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/89800/000008980026000008/shw-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000089800&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Sherwin-Williams makes paint and coatings. The architectural side sells to homeowners, painters and property managers through company-operated stores; the consumer brands side sells through large retailers; and the performance coatings side sells industrial finishes directly to original-equipment manufacturers in North and South America, the Caribbean, Europe and Asia.",
      "The business that matters most is the store network. A contractor does not buy paint the way a homeowner does. The contractor needs the right product for the substrate, a colour matched on the spot, enough stock to finish the job today, and a credit account that works. A store that provides all of that becomes part of the contractor's working method, and switching means rebuilding a relationship and a colour library.",
      "The company is valued at $83.1B at $344.10 a share, with revenue of $24.9B, operating margin of 14.0% and return on invested capital of 17.8%. The shares have travelled between $289.86 and $377.77 over the past year and sit a little above the middle of that range.",
    ],
    quote:
      "Coatings is a manufacturing business wrapped in a distribution business. The plant makes the margin; the store decides whether the customer comes back.",
  },
  whatItDoes: {
    paragraphs: [
      "Architectural paint is the largest piece. It goes into new construction and into repainting, and the repaint side is the steadier of the two because paint fails on a schedule regardless of what the economy is doing. A homeowner repainting a living room and a property manager refreshing a hundred apartments are both buying on need rather than on confidence.",
      "Performance coatings sells to manufacturers who need a finish applied to a product at the factory: appliances, furniture, heavy equipment, packaging. These are specification-driven sales. Once a coating is approved for a production line, changing it requires requalification, which gives the supplier a durable position but also makes the relationship slow to win and slow to lose.",
      "Consumer brands are sold through third-party retailers, where the company competes on shelf space and brand recognition rather than on service. That is a lower-margin, higher-volume business and a useful counterweight to the store network during a construction slowdown.",
    ],
    bullets: [
      {
        title: "Architectural stores",
        detail:
          "Company-operated outlets serving contractors and homeowners. Service, stock and colour matching are the product.",
      },
      {
        title: "Performance coatings",
        detail:
          "Industrial finishes specified into manufacturing lines. Sticky once qualified, hard to win in the first place.",
      },
      {
        title: "Consumer brands",
        detail:
          "Paint sold through third-party retailers. Brand-led, shelf-space dependent and more price-competitive.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The gap between the 48.6% gross margin and the 14.0% operating margin is the story of the company. Formulating and manufacturing paint earns a healthy gross margin. Running several thousand stores, paying the staff, holding the inventory and sending sales representatives to job sites consumes most of it. Sherwin-Williams is therefore a distribution business with a chemical plant attached, not the other way round.",
      "The pricing mechanism is a lag. Raw materials such as titanium dioxide, resins and solvents move with energy and commodity markets. When they rise, the company can raise prices, but not immediately and not without resistance from customers who buy through contracts. For a period, revenue grows and margin falls. When the increases finally land, revenue grows and margin expands.",
      "The volume driver is the repaint cycle and the health of construction. New residential and commercial building generates the most profitable sales because the contractor buys the whole job at once. Remodelling and maintenance generate steadier but smaller tickets.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew at a 4.7% compound rate from $19.9B in FY2021 to $23.6B in FY2025, and the trailing $24.9B grew 7.0%. That is a mature growth rate, which is what a company with this much market share in a mature category should produce.",
      "The profit record is more interesting than the revenue record. Operating income was $3.08B in FY2021, fell to $2.57B in FY2022 on higher revenue, recovered to $3.11B in FY2023 and $3.45B in FY2024, then slipped to $3.34B in FY2025. Revenue went up every year. Earnings did not, because input costs and pricing do not move together.",
      "Third-party estimates point to $25.20B of revenue and $12.03 of EPS this fiscal year, then $26.25B and $13.21. The growth is expected to come from price and from volume recovery in new construction rather than from new markets.",
    ],
    bullets: [
      {
        title: "Repaint demand",
        detail:
          "Paint degrades on a schedule, so maintenance demand is less cyclical than new construction.",
      },
      {
        title: "Store productivity",
        detail:
          "Adding stores adds revenue, but the return depends on the sales per store, not on the number of doors.",
      },
      {
        title: "Price versus input cost",
        detail:
          "The margin in any year is decided by how quickly price catches up with raw materials.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly pattern is strongly seasonal, because painting happens outdoors. Operating margin was 15.6% in Q2 FY25 and 16.7% in Q3, then 11.4% in Q4 and 12.0% in Q1 FY26, before returning to 16.4% in Q2 FY26 and 15.5% in Q3. Revenue follows the same shape: $6.31B and $6.36B in the summer quarters, $5.60B and $5.67B in the winter ones.",
      "That seasonality matters for reading the numbers. A first-quarter margin compared with a third-quarter margin tells you nothing about the business; the comparison has to be year over year.",
      "The reported return on equity of 67.3% is flattered by a small equity base after years of buybacks and acquisitions, so return on invested capital of 17.8% is the more honest measure. A 17.8% return on capital is a good result for a coatings company and it is the number that should be compared with the cost of capital.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $3.08B, a 12.4% margin and about 3.7% of the market value. The annual record has been consistent: $1.87B, $1.28B, $2.63B, $2.08B and $2.65B. The weak year was FY2022, when raw material inflation tied up cash in inventory and receivables at the same time that margin was compressed.",
      "Net debt is $11.53B at 3.0x EBITDA. That is moderate leverage for a company with stable demand, and it is the residue of acquisitions funded with debt. The interest bill is affordable, but a refinancing at higher rates would take a visible bite out of earnings.",
      "The dividend yield is 0.9%, so most of the capital return comes from buybacks rather than income. For a mature compounder, that is a reasonable use of cash as long as the shares are not bought at a premium multiple.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $344.10 the shares trade at 31.1x trailing earnings, 24.3x EV/EBITDA, 3.8x sales and 27.0x free cash flow. That is a premium to Linde at 17.9x EBITDA and a very large premium to Freeport at 9.8x.",
      "The premium is the market's price for the store network and for the repaint cycle. Sherwin-Williams earns a return on capital that most chemical companies do not, and its revenue is less cyclical than a commodity producer's because people repaint their houses whether or not the economy is strong. The risk is that 24.3x EBITDA already capitalises a lot of that stability, leaving little margin for a construction slowdown.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is 24 analysts deep. The attributed mean target is $374.25, with a range of $329.00 to $420.00. The current price sits between the low end and the mean.",
      "Estimates call for $25.20B of revenue and $12.03 of EPS this fiscal year across 29 analysts, then $26.25B and $13.21 across 29. Next quarter is forecast at $5.90B and $2.34, a seasonal low, followed by $5.94B and $2.45.",
      "The broad coverage and the tight revenue range suggest the near-term numbers are not really in dispute. What the range of targets reflects is the multiple: a 28% spread between the low and high target on a company whose earnings are visible is a disagreement about what those earnings are worth.",
    ],
  },
  risks: {
    intro:
      "Sherwin-Williams is exposed to construction activity, raw material costs and the cost of running a large store estate. The brand is not at risk; the margin is.",
    items: [
      {
        title: "Raw material inflation",
        severity: "High",
        detail:
          "Titanium dioxide, resins and solvents move with energy and commodity markets. Price increases lag, so margin absorbs the first hit.",
        watch:
          "Gross margin by quarter, raw material cost commentary and the timing of price increases.",
      },
      {
        title: "Construction and remodelling demand",
        severity: "High",
        detail:
          "New residential and commercial building drives the highest-value sales. A housing slowdown reduces volume faster than maintenance demand can offset.",
        watch: "Same-store sales, new residential permits and contractor demand commentary.",
      },
      {
        title: "Store network cost",
        severity: "Medium",
        detail:
          "The estate is the moat and the cost base at the same time. Falling sales per store hit operating margin quickly.",
        watch: "Sales per store, store count and selling, general and administrative expense as a share of sales.",
      },
      {
        title: "Leverage",
        severity: "Medium",
        detail:
          "Net debt of $11.53B at 3.0x EBITDA is manageable, but refinancing at higher rates raises the interest bill.",
        watch: "Interest expense, maturity schedule and the pace of debt reduction.",
      },
      {
        title: "Competition from large retailers",
        severity: "Medium",
        detail:
          "Consumer brands compete for shelf space, and retailers have their own private-label paint at lower prices.",
        watch: "Consumer segment volume and any change in shelf-space arrangements.",
      },
    ],
    watchlist: [
      {
        title: "Price-cost spread",
        detail:
          "The gap between what the company charges and what the raw materials cost is the margin in a single number.",
      },
      {
        title: "Same-store sales",
        detail:
          "Separates real demand from the effect of opening new stores.",
      },
      {
        title: "Return on invested capital",
        detail:
          "The measure that justifies the multiple, and the one that buybacks can distort if read through return on equity.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Sherwin-Williams is a coatings manufacturer with a distribution network that gives it a durable position with professional customers. Revenue of $24.9B, a 14.0% operating margin and $3.08B of free cash flow describe a mature, profitable business with real pricing power.",
      "The most instructive year in the file is FY2022, when revenue rose 11% and operating income fell 17%. That is what pricing lag looks like. It is also the reason to read the gross margin and the raw material commentary together rather than looking at the revenue line alone.",
      "The valuation is the open question. At 24.3x EBITDA the market is paying for stability and for the repaint cycle, and both are real. Whether they are worth that multiple depends on how much construction weakness the store network can absorb before the operating margin falls.",
    ],
    questions: [
      "How much of revenue comes from repainting rather than new construction?",
      "What is the current gap between raw material inflation and realised price?",
      "How much operating leverage is there in the store network as volumes recover?",
      "Is 14.0% a normal operating margin, or is it the trough of a pricing cycle?",
    ],
  },
};
