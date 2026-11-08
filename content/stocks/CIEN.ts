import type { StockStory } from "./types";

export const CIEN: StockStory = {
  ticker: "CIEN",
  kicker: "Optical networking · AI data-centre interconnect",
  title: "Ciena's margins tripled before its revenue did",
  dek: "A telecom optical vendor whose growth now comes from linking data centres. Operating margin went from 0.8% to 18.0% in five quarters, and that is the number to explain.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $6.02B, up 32.6%, with operating margin at 12.3% for the year and 18.0% in the latest quarter.",
    "Quarterly operating margin rose from 0.8% in Q4 FY25 to 18.0% in Q3 FY26 on 24% more revenue.",
    "Free cash flow reached $814.4M, a 13.5% margin, against net debt of only $236.6M.",
    "The shares trade at 52.6x trailing earnings, the highest earnings multiple in its peer group.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/936395/000162828025056698/cien-20251101.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000936395&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Ciena builds the optical equipment that carries traffic across long distances. Its products sit in telecom networks, cable systems, government and enterprise backbones, and increasingly in the links between data centres. The hardware terminates, amplifies and routes light, and the software around it manages the network.",
      "The business spent years as a cyclical supplier to telephone companies, growing with their capital budgets and shrinking when they paused. Revenue went from $3.62B in FY2021 to $3.63B, then $4.39B, then down to $4.01B, then $4.77B in FY2025. That is a five-year round trip. Trailing revenue is now $6.02B, up 32.6%, and the composition of that growth has changed.",
      "The financial signature of that change is in the margin. Operating margin was 0.8% in Q4 FY25, 13.3% in Q1 FY26, 15.1% in Q2 and 18.0% in Q3. Revenue rose 24% over the same period. A margin that moves eighteen points on a quarter of revenue growth is not a pricing story; it is a volume story in a business with a large fixed cost base.",
    ],
    quote:
      "Optical transport is a fixed-cost business with a variable revenue line. Once the port ships, every additional wavelength on the same chassis is close to pure margin.",
  },
  whatItDoes: {
    paragraphs: [
      "The core product is a coherent optical transport system: a chassis full of line cards that converts electrical signals into light, sends them down a fibre, and recovers them at the other end. Around that sit amplifiers, reconfigurable optical add-drop multiplexers that route wavelengths without converting them back to electrical, and switching equipment for the network layer above. Ciena also sells network management software and the planning tools that telcos use to design routes.",
      "The customer base is concentrated in communications service providers, which is why the business historically tracked telecom capital spending. The newer demand comes from hyperscalers who need to move training data and model traffic between buildings and campuses, and who buy optical gear on a shorter cycle than a telephone company. The two buyers have very different purchasing behaviour: telcos plan in years and run competitive tenders, while cloud operators move faster and specify more of the design themselves.",
      "Ciena employs 7,032 people. The data does not break revenue by segment or geography, so the split between telecom and cloud demand is not disclosed in the numbers a reader has here.",
    ],
    bullets: [
      {
        title: "Optical transport",
        detail:
          "Coherent line systems that carry traffic over metro, regional and long-haul fibre. The core revenue line.",
      },
      {
        title: "Switching and routing",
        detail:
          "Packet equipment that sits around the optical layer and decides where traffic goes.",
      },
      {
        title: "Software and services",
        detail:
          "Network management, planning and support. Recurring revenue attached to the installed base.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Ciena sells systems, usually as a chassis plus line cards, with software licences and support attached. The initial sale is competitive and often won on price; the money is made on the installed base, because expanding a network means buying more cards for a chassis that is already there, and the software and service revenue renews with the equipment.",
      "Gross margin is 44.1%. That is mid-range for optical hardware: the components, especially the coherent digital signal processors and the optical sub-assemblies, are expensive, and the customer is technically sophisticated enough to know what they cost. The operating margin is where the model differs from a component supplier. Ciena carries a large engineering organisation and its own manufacturing and test operations, so the cost base is fixed relative to a quarter's revenue.",
      "That is the operating leverage mechanism, and the quarterly record shows both directions. Revenue of $1.35B produced a 0.8% operating margin in Q4 FY25; revenue of $1.67B produced 18.0% in Q3 FY26. The increment, about $320M of quarterly revenue, carried almost all of its gross profit to the operating line. In a flat quarter the same structure works against the company, which is exactly what happened in FY2024.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 6.2% a year across the fiscal years in the data, which is the honest long-run number and a reminder of how cyclical the telecom equipment market is. The latest quarter grew 37.0%. The gap between those two figures is the whole investment question.",
      "The attributed consensus expects $6.43B of revenue and $7.17 of EPS this fiscal year, then $8.43B and $10.33 next year. Next year's growth would be about 31% on top of an already strong year, and it is the average of seven analysts rather than the nineteen covering the current year. The next-quarter estimate of $1.76B is only 5% above the latest quarter, so the annual number again depends on acceleration later in the year.",
      "The demand drivers are data-centre interconnect, where the distance between buildings is too long for copper and too short for a long-haul system, and the general growth of network traffic. The constraint is capacity and component supply, particularly the coherent optics and DSPs that every vendor needs. A shortage is good for margin while it lasts and bad for it once capacity catches up.",
    ],
    bullets: [
      {
        title: "Data-centre interconnect",
        detail:
          "Links between data centres on a campus or in a metro. The fastest-growing use of the product line.",
      },
      {
        title: "Telco capacity upgrades",
        detail:
          "Incumbent carriers upgrading line rates. Large, lumpy orders that arrive in multi-year cycles.",
      },
      {
        title: "Installed-base expansion",
        detail:
          "More cards in existing chassis and renewals of software and support. The most predictable part of revenue.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a business that struggles to convert revenue into profit when it is not growing. FY2021 operating income was $495.4M on $3.62B of revenue. FY2022 fell to $222.8M, FY2023 recovered to $357.5M, FY2024 dropped to $166.6M on lower revenue, and FY2025 reached $197.5M. Five years of effort produced less operating income than the first year of the series.",
      "The trailing figures look much better than that history, which is the point: $6.02B of revenue at a 12.3% operating margin, a 10.9% net margin, and $4.48 of diluted EPS. Return on equity is 23.4% and return on invested capital 19.3%. Neither is exceptional for a technology company, and both depend on the recent margin expansion holding.",
      "The quarterly progression from a 0.8% operating margin to 18.0% is the most important six lines in the dataset. It tells a reader that the earnings base is not stable enough for a trailing multiple to be very meaningful. A year of margins at the current level would transform the earnings; a return to the FY2025 level would undo it.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $814.4M over the trailing period, a 13.5% margin that exceeds the net margin. That is a healthy sign: the business is collecting more than it is booking, which happens when revenue grows and customers pay on schedule while depreciation runs ahead of capital spending.",
      "The annual cash record is more uneven, and worth reading. FY2021 produced $462.1M of free cash flow, FY2022 produced negative $258.6M despite $222.8M of operating income, and FY2023 through FY2025 produced $62.1M, $377.9M and $665.3M. The FY2022 swing was working capital, not a change in the business: inventory and receivables absorbed the profit when revenue and the supply chain both moved at once.",
      "Net debt is $236.6M, about 0.3x EBITDA. For a company with this much cyclicality in its cash flow, a small debt load is a genuine advantage: it means a bad year does not force a financing decision. The cash flow supports continued investment in coherent optics and the working capital needed for larger orders, without relying on the capital markets.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $243.39 the shares trade at 52.6x trailing earnings, 39.9x EV/EBITDA, 5.8x sales and 42.3x free cash flow. Every one of those multiples is high for an equipment vendor, and the earnings multiple is the highest in the peer group by a wide margin: Celestica is at 20.9x, Credo at 60.2x, but Credo is growing at 165% rather than 32.6%.",
      "The multiple is best understood as a bet on the margin. Trailing EPS of $4.48 was earned across a year in which operating margin averaged 12.3%; if the business runs at the 18.0% of the latest quarter, earnings would be materially higher on the same revenue. The market is paying for that normalisation, and the 52.6x P/E is really a statement that the trailing earnings understate the run rate.",
      "The risk in that logic is that the latest quarter reflects a supply-constrained market where prices are firm. If capacity catches up and pricing normalises, the margin goes back toward the mid-teens and the multiple expands on falling earnings rather than compressing on rising ones. Stockmonk does not publish a target price; the consensus figure in the next section is third-party context only.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty analysts contribute to the attributed consensus, with a mean target of $512.99 and a range of $347.00 to $660.00. The mean is more than double the last close of $243.39, and the low end is still 43% above it. A distribution that skewed is unusual and usually means the estimates were set before a sharp move in the share price, or that the market is discounting something the analyst community is not.",
      "The estimates are $1.76B of revenue and $1.62 of EPS next quarter, $6.43B and $7.17 for the fiscal year, and $8.43B and $10.33 for the next. The EPS step from $7.17 to $10.33 is 44% growth on 31% revenue growth, which assumes further margin expansion. That is consistent with the latest quarter but it is an assumption, and it is the one to test against the next two quarters.",
    ],
  },
  risks: {
    intro:
      "Ciena's risks are demand cyclicality, customer concentration and the durability of a margin that expanded very quickly.",
    items: [
      {
        title: "Margin normalisation",
        severity: "High",
        detail:
          "Operating margin moved from 0.8% to 18.0% in five quarters. Part of that is operating leverage and part is a tight supply market. Only the first part is durable.",
        watch:
          "Gross margin by quarter and any commentary on pricing and lead times.",
      },
      {
        title: "Telecom capital spending",
        severity: "High",
        detail:
          "Service providers remain a large part of the customer base, and their budgets are cyclical. FY2024 showed what a pause does to revenue and margin together.",
        watch:
          "Carrier capital expenditure guidance and order intake from service providers.",
      },
      {
        title: "Customer concentration",
        severity: "Medium",
        detail:
          "A small number of large buyers, whether telcos or hyperscalers, can move a quarter. Losing a programme is a step change, not a gradual decline.",
        watch:
          "Disclosure of revenue from the largest customers.",
      },
      {
        title: "Component supply",
        severity: "Medium",
        detail:
          "Coherent optics and DSPs are specialised. A shortage supports price but caps revenue; a glut does the opposite.",
        watch:
          "Lead times and the availability of coherent components.",
      },
      {
        title: "Valuation on peak margins",
        severity: "Medium",
        detail:
          "At 52.6x trailing earnings, the price already assumes the current margin persists. A reversion to the FY2025 margin would leave the multiple looking very different.",
        watch:
          "The gap between trailing EPS and the run rate implied by the latest quarter.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The single variable that separates a re-rating from a de-rating in this story.",
      },
      {
        title: "Data-centre interconnect orders",
        detail:
          "The newer demand pool is what makes this different from the last telecom cycle.",
      },
      {
        title: "Free cash flow conversion",
        detail:
          "FY2022 showed how quickly working capital can turn positive cash flow negative.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Ciena is a $6.02B revenue optical equipment maker that has just discovered operating leverage. Revenue grew 32.6% and operating margin reached 18.0% in the latest quarter, up from 0.8% five quarters earlier. Free cash flow of $814.4M and net debt of $236.6M mean the balance sheet is not the issue.",
      "The educational point is the difference between a cyclical recovery and a structural change. The margin expansion is arithmetically consistent with operating leverage in a fixed-cost business, and that is a real mechanism. It is also consistent with a supply-constrained market where prices are temporarily high. Both explanations fit the same six quarters of data, and they imply very different things about the next three years.",
      "What is not known is how much of the growth comes from hyperscalers rather than telcos, how much of the margin is price versus volume, and whether the next-year consensus of $8.43B rests on orders already won. The AI build-out is part of the demand picture here, but optical transport was a cyclical business long before AI existed, and the cycle has not been abolished.",
    ],
    questions: [
      "How much of the revenue growth came from data-centre interconnect rather than carrier networks?",
      "Is the 18.0% operating margin a volume effect, a pricing effect, or both?",
      "What happens to gross margin if coherent component supply loosens?",
      "Does the next-year estimate reflect awarded orders or expected ones?",
    ],
  },
};
