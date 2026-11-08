import type { StockStory } from "./types";

export const DE: StockStory = {
  ticker: "DE",
  kicker: "Industrials · Agricultural machinery",
  title: "Deere's multiple is doing the heavy lifting while volumes fall",
  dek: "Revenue peaked at $61.25B in FY2023 and the consensus expects $41.12B this year. At 37.2x earnings, the price is not being paid for the machinery cycle.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $47.98B, up 8.0% against a weak base, with the latest quarter at $12.61B and a 14.9% operating margin.",
    "Revenue fell from $61.25B in FY2023 to $45.68B in FY2025, and the consensus expects $41.12B this fiscal year.",
    "Free cash flow was $6.02B, a 12.5% margin, and exceeded net income in the down year as inventory came down.",
    "At $671.65 the shares trade at 37.2x earnings and 26.7x EV/EBITDA, a premium to Caterpillar on both measures.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/315189/000110465925122321/de-20251102x10k.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000315189&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Deere builds the machines that plant, spray, harvest and haul. Its largest business is agricultural equipment: tractors, combines, planters and sprayers sold through independent dealers, with precision-agriculture hardware and software built into the cab and the implement. Construction, turf and forestry equipment use the same dealer and engineering base. A captive finance arm lends to dealers for inventory and to farmers for purchases. Trailing revenue is $47.98B from 74,412 employees.",
      "The question that matters is where the farm equipment cycle bottoms. Deere's revenue is tied to farm income, which is tied to crop prices and yields, which the company does not control. When farm income falls, farmers defer replacing a combine that costs as much as a house, and the deferral shows up as lower production and a swelling dealer inventory two quarters later. The stock is not priced as though that cycle is still running, which is the tension in the report.",
      "The shares closed at $671.65, for a market capitalisation of $181.09B and a position 81% of the way up a 52-week range of $455.90 to $721.22. The one-year return is 42.9% and the five-year return is 98.7%. The price is 37.2x trailing earnings, 26.7x EV/EBITDA, 4.9x sales and 30.1x free cash flow, with a 3.3% free-cash-flow yield and a 1.0% dividend yield.",
    ],
    quote:
      "A combine is replaced every five to ten years, and the decision is made in the winter when the farmer knows the harvest and the crop price. Deere's revenue is a lagging report on that decision.",
  },
  whatItDoes: {
    paragraphs: [
      "The agricultural business is organised by horsepower and by crop. Large tractors and combines are the high-value end, sold to commercial farms that measure the purchase against acres, fuel and labour saved. Planters and sprayers are precision tools where the value comes from placing seed and chemical accurately, and where the electronics and software matter as much as the steel. Small tractors and utility equipment serve hobby farms and homeowners and behave more like consumer durables.",
      "Precision agriculture is the strategic layer. Guidance, telematics, variable-rate application and machine automation let a farmer cover more acres with fewer passes and less input. The hardware is fitted at the factory and the software is licensed or bundled with the machine, which creates a revenue stream that continues after the sale and a reason for the next purchase to be the same brand. It also raises the cost of switching, because the data and the prescriptions live in Deere's system.",
      "The dealer network is the distribution and the moat. Dealers are independent businesses that stock machines, carry parts and send technicians to the field. A farmer choosing a brand is also choosing the distance to the nearest parts counter during harvest, when a day of downtime is a day of lost crop. That is why market share in agricultural equipment moves slowly and why competitors find it hard to buy their way in with price alone.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "New equipment is sold at a negotiated price, usually with a trade-in, and the margin depends on production volume spread across a fixed factory and engineering base. When volumes are high, the factory absorbs overhead and the incremental machine carries a good margin. When volumes fall, the same overhead is spread over fewer units, which is why operating income fell from $13.02B in FY2023 to $6.26B in FY2025 on a revenue decline that was smaller in percentage terms.",
      "Parts and service are the counter-cyclical layer. The installed fleet keeps working through a downturn, and every machine needs filters, belts, hydraulics and repairs. Parts carry a higher margin than whole goods and are sold through the same dealer network, so a down year in equipment is partly offset by a steady year in aftermarket. Precision-ag subscriptions add a smaller but growing recurring line on top.",
      "The captive finance arm is a third profit pool and a source of confusion. It borrows in the debt markets and lends to dealers and farmers, earning a spread. That is why consolidated net debt is $53.56B, or 6.1x EBITDA: a large part of that debt funds the finance book rather than the factories. It also means interest rates affect the group twice, once through the cost of funding the book and once through the monthly payment a farmer faces on a new machine.",
    ],
  },
  growth: {
    paragraphs: [
      "The annual record is a full cycle in five lines. Revenue went from $44.02B in FY2021 to $52.58B, $61.25B, $51.72B and $45.68B, and the trailing figure is $47.98B. Operating income peaked at $13.02B in FY2023 and fell to $6.26B in FY2025. The trailing growth rate of 8.0% is measured against the trough of that decline, which is why it looks better than the annual trend.",
      "The third-party consensus expects $41.12B of revenue and $18.11 of EPS this fiscal year, then $44.69B and $22.89 next year. For the coming quarter it looks for $10.35B and $4.06, then $8.57B and $3.25. That is a forecast for the cycle to bottom this year and recover next year, and the second year's EPS estimate is well above the trailing $18.00.",
      "The believable drivers are the age of the fleet, the adoption of precision agriculture, and the pricing power that comes from a dealer network farmers trust. The fleet aged during the years when production was constrained, which supports replacement demand once farm income stabilises. What would slow it down is a second year of weak crop prices, a fall in used-equipment values that makes trade-ins uneconomic, or a tariff that raises the cost of steel and components faster than prices can rise.",
    ],
    bullets: [
      {
        title: "Replacement demand",
        detail:
          "The installed fleet ages regardless of the cycle. Deferred purchases accumulate and eventually have to be made.",
      },
      {
        title: "Precision agriculture",
        detail:
          "Software, guidance and automation raise revenue per machine and add a recurring stream after the sale.",
      },
      {
        title: "Pricing and mix",
        detail:
          "A richer mix of large, high-spec machines lifts revenue per unit even when unit volumes are flat.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly table shows both the cycle and the season. Revenue ran $9.61B in Q1 FY26, $13.37B in Q2 and $12.61B in Q3, with operating margins of 8.7%, 17.2% and 14.9%. The first fiscal quarter ends in January, when North American field work is minimal, so it is always the weakest. The second and third quarters carry the planting season and are the ones that decide the year.",
      "The trailing operating margin is 13.4%, net margin is 10.2% and diluted EPS is $18.00. Return on equity is 17.4%, which looks respectable until you compare it with the 6.2% return on invested capital. The gap is the finance book: equity is small relative to the loans and leases on the balance sheet, and the return on those assets is a lending spread rather than an industrial return. Neither ratio describes the machinery business on its own.",
      "The annual margin history is the important trend. Operating income of $8.01B in FY2021 became $13.02B in FY2023 and then $6.26B in FY2025, while revenue moved by less. That is operating leverage in both directions, and it is why the current 13.4% trailing margin is a long way below the peak. A recovery in volume would lift it quickly; a further decline would depress it just as quickly.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $6.02B over the trailing period, a 12.5% margin, and it has been more stable than earnings: $6.88B, $3.56B, $7.09B, $7.59B and $6.10B across the five fiscal years. In FY2025, free cash flow of $6.10B exceeded net income of $5.03B. That is what happens when a manufacturer sells down inventory in a downturn: the working capital that was tied up in machines is released as cash.",
      "The cash flow is also what services the debt. Net debt of $53.56B is 6.1x EBITDA, a ratio that would be alarming for a pure industrial and is manageable for a group that includes a lending book. The distinction matters when rates move: the finance arm's borrowing cost resets faster than the yield on its loan portfolio, so a rise in short rates compresses the spread before it shows up in the industrial margin.",
      "What the cash flow supports is the dividend, buybacks and continued investment in precision agriculture. The 1.0% dividend yield and the 3.3% free-cash-flow yield leave room for all three, but not much room for a large acquisition or a year in which inventory rises instead of falling. The quality of the next upturn will be visible first in working capital, not in earnings.",
    ],
    bullets: [
      {
        title: "Equipment cash cycle",
        detail:
          "Dealers buy ahead of the season and pay terms. Inventory and receivables swing by billions between the first and second quarters.",
      },
      {
        title: "Finance book",
        detail:
          "Loans and leases are funded with debt. The spread between funding cost and customer rate is a separate profit pool with its own credit risk.",
      },
      {
        title: "Capital returns",
        detail:
          "Dividend and buybacks are funded from industrial cash flow, which is why the free-cash-flow margin matters more than the net margin.",
      },
    ],
  },
  valuation: {
    paragraphs: [
      "At $671.65 Deere trades at 37.2x trailing earnings, 26.7x EV/EBITDA, 4.9x sales and 30.1x free cash flow. Those are not trough-cycle multiples. Caterpillar, a comparable capital-goods manufacturer with a similar customer base, trades at 21.6x earnings and 14.5x EV/EBITDA. Deere is at a substantial premium on both, and the gap has to be explained by something other than the current earnings.",
      "The explanation is a mixture of mix and expectation. Precision agriculture gives Deere a software-like revenue stream and pricing power that Caterpillar does not have in the same proportion. The consensus expects EPS to rise from $18.11 this year to $22.89 next year, so the forward multiple is lower than the trailing one. And the market has a long history of paying for the Deere franchise through cycles because the dealer network and the installed base are hard to replicate.",
      "The risk in the multiple is that it is being applied to earnings that are still falling. If the consensus is wrong and FY2026 revenue comes in below $41.12B, the earnings base shrinks while the multiple stays high, and the stock has to re-rate. Stockmonk does not publish a target price; the consensus figure is third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 23 analysts with a mean target of $694.01 and a range of $500.00 to $813.18. Current fiscal-year estimates call for $41.12B of revenue and $18.11 of EPS, with 22 analysts contributing; next year carries $44.69B and $22.89. The coming quarter is expected to produce $10.35B and $4.06.",
      "The mean target is close to the current share price, which is unusual for a stock that has returned 42.9% over the past year. It suggests the analysts see the price as roughly fair on their estimates and are waiting for the order cycle to confirm the recovery. The range from $500.00 to $813.18 is wide and reflects genuine disagreement about how deep the downturn goes before it turns.",
      "These are third-party forecasts built on crop-price assumptions that the analysts do not control. A mean target that sits at the current price is a statement about balance, not about direction.",
    ],
  },
  risks: {
    intro:
      "Deere's risks are agricultural rather than industrial. Farm income, used-equipment values and the finance book drive the cycle, and the balance sheet is levered enough that the finance arm's funding cost matters.",
    items: [
      {
        title: "Farm income and crop prices",
        severity: "High",
        detail:
          "A farmer buys a machine out of cash flow and confidence. Weak crop prices or a poor harvest push purchases into a later year.",
        watch:
          "Crop prices, farm income forecasts and the company's retail sales commentary.",
      },
      {
        title: "Used-equipment values and dealer inventory",
        severity: "High",
        detail:
          "Trade-ins are part of the purchase. If used values fall, the dealer carries a loss and the new machine becomes more expensive in net terms.",
        watch:
          "Dealer inventory levels and used-equipment pricing.",
      },
      {
        title: "Tariffs and input costs",
        severity: "High",
        detail:
          "Steel, components and cross-border production are exposed to trade policy. Costs that rise faster than list prices come straight out of margin.",
        watch:
          "Gross margin and the price-cost commentary on the earnings call.",
      },
      {
        title: "Precision-agriculture competition",
        severity: "Medium",
        detail:
          "The software layer is attractive, and competitors and independent technology suppliers are building their own. Losing the data relationship weakens the switching cost.",
        watch:
          "Attach rates for precision packages and subscription revenue disclosure.",
      },
      {
        title: "Captive finance credit and funding",
        severity: "Medium",
        detail:
          "A lending book funded with debt carries credit risk and refinancing risk. Rising funding costs compress the spread before they reach the industrial margin.",
        watch:
          "Finance-arm receivables, delinquencies and the spread between funding cost and customer rate.",
      },
    ],
    watchlist: [
      {
        title: "Dealer inventory",
        detail:
          "Inventory sitting on dealer lots is the clearest sign that production is ahead of retail demand.",
      },
      {
        title: "Production versus retail sales",
        detail:
          "When production runs above retail sales for more than a quarter, a production cut usually follows.",
      },
      {
        title: "Finance-arm credit",
        detail:
          "Delinquencies in the loan book show whether farmers are under stress before equipment orders fall.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Deere is the strongest franchise in agricultural equipment. The dealer network, the installed base and the precision-agriculture stack give it pricing power that most capital-goods companies do not have, and the business has earned a premium multiple for years because of it.",
      "The current numbers describe a downcycle, not a growth story. Revenue is $47.98B on a trailing basis, down from $61.25B in FY2023, and the consensus expects $41.12B this year. Operating income has fallen from $13.02B at the peak to $6.26B in FY2025. Free cash flow has held up because inventory is being released, which is a sign of discipline rather than of demand.",
      "The valuation is the open question. At 37.2x earnings and 26.7x EV/EBITDA, the shares already assume the cycle turns and that precision agriculture keeps lifting the mix. If the turn is delayed, the multiple has to adjust. The reader should decide whether the premium is for the franchise or for a recovery that has not yet appeared in the orders.",
    ],
    questions: [
      "How much of the trailing revenue decline is volume rather than price?",
      "What are dealer inventory levels relative to retail sales?",
      "How much of the finance book's profit depends on the spread rather than on volume?",
      "Does the precision-agriculture revenue grow through the downturn, or only with equipment sales?",
    ],
  },
};
