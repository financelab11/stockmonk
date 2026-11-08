import type { StockStory } from "./types";

export const ECL: StockStory = {
  ticker: "ECL",
  kicker: "Materials · Water, hygiene and sanitation",
  title: "Ecolab rents out chemistry and gets paid per wash",
  dek: "The dishwasher, the dispenser and the chemicals are installed on the customer's site and billed as a service. Revenue then follows the number of covers a restaurant serves, not the price of a drum of caustic soda.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $17.4B, up 9.3%, with a 16.7% operating margin and 12.0% net margin.",
    "Operating income rose 41% from FY2023 to FY2024 on 2.7% revenue growth, after two years of input-cost pressure.",
    "Free cash flow is $1.80B, a 10.3% margin, against $12.47B of net debt at 3.4x EBITDA.",
    "At $300.68 the shares trade at 40.5x earnings and 26.7x EV/EBITDA, while return on invested capital is 10.0%.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/31462/000110465926018357/ecl-20251231x10k.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000031462&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Ecolab sells cleaning, sanitation and water-treatment programmes to businesses. Its customers are restaurants, hotels, hospitals, food and beverage plants, data centres, mines and refineries: organisations for which hygiene, food safety and water chemistry are operating requirements rather than discretionary purchases.",
      "The product is not a bottle of detergent. It is a system: a dispenser plumbed into the customer's dish machine or laundry, a chemical concentrate calibrated to the local water, a service representative who visits to check dosing and train staff, and a contract that bundles all of it into a price per wash, per cover or per litre treated.",
      "That structure makes the revenue recurring and tied to the customer's activity. A restaurant that serves more meals uses more chemistry. A hospital that admits more patients launders more linen. The company is valued at $84.3B at $300.68 a share, with revenue of $17.4B, operating margin of 16.7% and $12.47B of net debt.",
    ],
    quote:
      "Selling a chemical is a transaction. Installing a dosing system and servicing it is a relationship, and relationships are what get renewed.",
  },
  whatItDoes: {
    paragraphs: [
      "The institutional business serves restaurants, hotels, schools and healthcare facilities with dishwashing, laundry, surface cleaning and hand hygiene. The customer cares about labour cost, water and energy use, and compliance with health regulations, which is why the service component matters as much as the chemistry.",
      "The industrial business treats water in cooling towers, boilers and process systems, and provides sanitation for food and beverage production. Water treatment is a chemical and engineering service: the wrong dose corrodes a boiler or breeds bacteria, and the right one extends the life of very expensive equipment.",
      "The company also serves life sciences and high-tech customers, where cleaning and contamination control are part of the manufacturing process, and it provides pest elimination and repair services that sit alongside the chemical programmes.",
    ],
    bullets: [
      {
        title: "Institutional and hospitality",
        detail:
          "Dishwashing, laundry and surface hygiene for restaurants, hotels and healthcare. Revenue tracks covers and occupancy.",
      },
      {
        title: "Industrial water",
        detail:
          "Cooling, boiler and process water treatment. Sold on equipment protection and regulatory compliance.",
      },
      {
        title: "Food and beverage",
        detail:
          "Sanitation programmes for processors. The customer's product recall risk is the reason the contract is sticky.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is a price per unit of use multiplied by the volume the customer consumes. Because the chemistry is dosed into a machine, the volume is measurable and the billing can be tied to it, which makes the revenue more predictable than a simple product sale. Contracts typically run for several years and renew automatically unless cancelled.",
      "The cost structure has two halves. Manufacturing the chemicals produces the 43.9% gross margin. The field organisation, the service representatives, the equipment and the logistics consume most of what is left, leaving a 16.7% operating margin. Ecolab is therefore a service business with a chemical plant behind it, and the density of the service network is a real barrier to a new entrant.",
      "The pricing mechanism is annual escalation plus value-based increases. Because the chemical is a small part of the customer's total cost but a large part of their compliance risk, the company can raise prices without the customer renegotiating the whole relationship. That is the source of the pricing power, and it is why the margin recovered so quickly once input costs stopped rising.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew at a 4.2% compound rate from $12.7B in FY2021 to $16.1B in FY2025, and the trailing $17.4B grew 9.3%. The latest quarter grew 12.7%, which is faster than the historical rate and suggests both volume and price are contributing.",
      "The profit record is the more instructive one. Operating income was $1.60B in FY2021, fell to $1.56B in FY2022 despite 11.5% revenue growth, then rose to $1.99B, $2.80B and $2.74B. The FY2022 dip and the FY2024 jump are the same phenomenon seen from both ends: input costs rose faster than price for a period, and then price caught up and overshot.",
      "Third-party estimates point to $17.9B of revenue and $8.16 of EPS this fiscal year, then $19.4B and $9.41. That is a return to low-double-digit growth, which is roughly what the business delivered before the inflation episode.",
    ],
    bullets: [
      {
        title: "Customer activity",
        detail:
          "Volumes follow restaurant covers, hotel occupancy, hospital admissions and plant output.",
      },
      {
        title: "Price escalation",
        detail:
          "Annual contract increases plus value-based pricing lift revenue without new customers.",
      },
      {
        title: "New accounts",
        detail:
          "Winning a site means installing equipment, so the revenue starts slowly and builds over the contract term.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly record shows a business recovering through the year. Operating margin was 15.3% in Q1 FY26, 17.2% in Q2 and 17.3% in Q3, with revenue rising from $4.07B to $4.42B to $4.69B. That is volume growth plus a stable margin, which is the healthier version of the recovery.",
      "Return on equity is 19.9% and return on invested capital is 10.0%. The gap is leverage: $12.47B of net debt sits ahead of the equity. A 10.0% return on invested capital is not exceptional for a company trading at 40.5x earnings, and that mismatch is the central tension in the valuation.",
      "The margin recovery from 2022 to 2024 was large: operating income rose 79% from $1.56B to $2.80B while revenue rose 11%. Some of that was price, some was cost control, and some was the operating leverage of a fixed service network absorbing more volume.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $1.80B, a 10.3% margin, or 2.1% of the market value. Across the five fiscal years it has run at $1.42B, $1.08B, $1.64B, $1.82B and $1.90B.",
      "The FY2022 dip is instructive. Input cost inflation absorbed cash at the same time as margin compression, which is common in a business that holds inventory of chemicals and extends credit to thousands of small customers. Price recovery restored both the margin and the cash conversion within two years.",
      "Net debt of $12.47B at 3.4x EBITDA is the highest leverage among the large materials companies in this coverage group. For a business with recurring revenue and modest capital intensity, that is manageable, but it does mean the equity is sensitive to the cost of refinancing.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $300.68 the shares trade at 40.5x trailing earnings, 26.7x EV/EBITDA, 5.6x sales and 47.0x free cash flow for a 2.1% yield. That is the highest earnings multiple in the materials peer group, above Sherwin-Williams at 31.1x and Linde at 33.6x.",
      "The market is paying for the recurring revenue and the contract structure, not for the current return on capital. A 10.0% return on invested capital does not on its own justify 26.7x EBITDA; what justifies it is the expectation that the revenue base is durable and that pricing will keep pace with costs. If that expectation holds, the multiple is defensible. If pricing power weakens, the multiple and the earnings would fall together.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-one analysts cover the shares. The attributed mean target is $330.57, with a range of $300.00 to $360.00. The low end is essentially the current price, which is a narrower range than most companies in this coverage group.",
      "Estimates call for $17.9B of revenue and $8.16 of EPS this fiscal year across 23 analysts, then $19.4B and $9.41 across 24. Next quarter is forecast at $4.75B and $2.19, above the $4.69B just reported, followed by a seasonal step down to $4.50B and $1.88.",
      "A tight target range around a high multiple is worth noticing. It suggests the analysts agree about the earnings and about the multiple, which is a more fragile consensus than a wide range supported by different assumptions.",
    ],
  },
  risks: {
    intro:
      "Ecolab's risks are input costs, customer volumes, leverage and the multiple. The demand for hygiene and water treatment is not going away; the question is what the company can charge for it.",
    items: [
      {
        title: "Input cost inflation",
        severity: "High",
        detail:
          "Caustic soda, surfactants, packaging and energy are the main costs. Price increases lag, and margin absorbs the difference in the interim.",
        watch: "Gross margin by quarter and commentary on raw material cost against pricing.",
      },
      {
        title: "Customer volumes",
        severity: "High",
        detail:
          "Revenue is tied to restaurant covers, hotel occupancy and plant output. A consumer slowdown reaches the top line quickly.",
        watch: "Organic volume growth and the institutional segment's sales trends.",
      },
      {
        title: "Leverage",
        severity: "Medium",
        detail:
          "Net debt of $12.47B at 3.4x EBITDA is the highest in the peer group. For a business with recurring revenue and modest capital intensity that is not alarming, but a rise in refinancing rates would reach the equity quickly.",
        watch: "Interest cost, when the term debt matures and how fast the balance falls.",
      },
      {
        title: "Competition and private label",
        severity: "Medium",
        detail:
          "Chemical suppliers and distributors can undercut on price for accounts where the service component is not valued.",
        watch: "Retention rates, price realisation and any shift in the mix toward lower-service accounts.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "At 26.7x EBITDA, a modest earnings miss would compress the multiple as well as the earnings.",
        watch: "The gap between the earnings multiple and the return on invested capital.",
      },
    ],
    watchlist: [
      {
        title: "Price versus input cost",
        detail:
          "The spread is the margin, and it has moved sharply in both directions within four years.",
      },
      {
        title: "Organic volume growth",
        detail:
          "Separates real demand from revenue added by acquisitions or price alone.",
      },
      {
        title: "Return on invested capital",
        detail:
          "The measure that has to improve for the multiple to be justified over time.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Ecolab is a service business built on chemistry. Revenue of $17.4B, a 16.7% operating margin and $1.80B of free cash flow describe a company with recurring demand and real pricing power, delivered through a field organisation that would be expensive to replicate.",
      "The four-year profit record is the best evidence of how that pricing power works in practice. Operating income fell in a year when revenue rose 11.5%, then rose 79% over the next two years while revenue grew 11%. Cost and price do not move together, and the margin is where the difference shows up.",
      "The valuation is the unresolved part. At 26.7x EBITDA and 40.5x earnings, the market is capitalising the contract structure rather than the current return on capital, which is 10.0%. That can hold for a long time, but it leaves little room for a year when pricing does not keep up.",
    ],
    questions: [
      "What share of revenue is under multi-year contracts with automatic escalation?",
      "How much of the recent margin recovery came from price versus cost reduction?",
      "What does volume growth look like in a weaker consumer environment?",
      "Why is a 10.0% return on invested capital worth 26.7x EBITDA?",
    ],
  },
};
