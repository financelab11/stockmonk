import type { StockStory } from "./types";

export const NBIS: StockStory = {
  ticker: "NBIS",
  kicker: "AI cloud · GPU capacity",
  title: "Nebius is buying revenue with capital and the bill arrives later",
  dek: "Revenue grew 479% and free cash flow was negative $3.68B. In a business that rents out GPUs, growth is a purchase, and the depreciation comes after.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $1.36B, up 479.0%, with a 74.3% gross margin.",
    "Free cash flow was negative $3.68B, roughly 2.7 times revenue, because capacity is bought before it is rented.",
    "The annual series before FY2024 describes a different company, so the multi-year growth rate is not comparable.",
    "The consensus expects revenue of $12.24B next year with a loss of $6.16 per share, so growth and losses widen together.",
  ],
  filingUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001513845&type=10-K&dateb=&owner=include&count=40",
  irUrl: "https://nebius.com",
  bigPicture: {
    paragraphs: [
      "Nebius sells access to artificial intelligence computing. It builds and operates data centres full of accelerators and rents the capacity by the hour to companies training models, running inference, or building products on top of other models. It is one of a small group of independent providers that sit between the chip suppliers and the customers, competing with the cloud divisions of the largest technology companies.",
      "The company is legally domiciled in the Netherlands, employs 1,543 people, and is based for operational purposes around Amsterdam. Its filing record here is thin: the description is essentially the legal name, and there is no quarterly table. That matters, because the quarterly progression is exactly what a reader needs to judge a business growing this fast.",
      "Trailing revenue is $1.36B, up 479.0%, with a gross margin of 74.3% and an operating margin of negative 0.2%. Free cash flow is negative $3.68B. The market capitalisation is $35.20B, so the shares change hands at roughly twenty-six times trailing revenue with no trailing earnings multiple available.",
    ],
    quote:
      "Renting compute is a straightforward business: buy the machine, rent it out, depreciate it faster than it becomes obsolete. The difficulty is that the buying happens years before the renting pays for it.",
  },
  whatItDoes: {
    paragraphs: [
      "The core product is GPU capacity delivered as a cloud service. A customer rents accelerators by the hour, usually with storage, networking and the software layer that makes a cluster usable. The appeal is access without procurement: buying accelerators directly requires a relationship with a supplier, a data centre, and the engineering to run it. Renting converts that into an operating expense.",
      "Around the cloud business sit other operations that the financial data does not separate. The consolidated revenue line is the only figure available, so a reader cannot see how much comes from renting compute, how much from services, and how much from businesses that are not really AI infrastructure at all. That is a significant limitation for a company whose investment case rests entirely on one of them.",
      "The physical footprint is the real product. Land, power, cooling, networking and buildings take years to assemble, and the accelerators inside them have a useful life measured in a few years. The company's competitive position therefore depends on three things it controls and one it does not: the cost of capital, the price it pays for accelerators, the utilisation it achieves, and the price its larger competitors decide to charge.",
    ],
    bullets: [
      {
        title: "GPU cloud",
        detail:
          "Accelerator capacity rented by the hour, with storage and networking. The revenue line the investment case rests on.",
      },
      {
        title: "Managed AI services",
        detail:
          "Tooling that helps customers train and run models on the rented capacity. Improves retention and revenue per customer.",
      },
      {
        title: "Adjacent businesses",
        detail:
          "Operations outside the cloud that the consolidated accounts do not break out. A source of opacity in the revenue mix.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is metered: customers pay for accelerator hours, storage and data transfer. The gross margin of 74.3% is the difference between the rental rate and the running cost of the facility, principally power, cooling, rack space and the depreciation of the equipment. It looks high because depreciation on the machines is often charged over a longer period than the market's useful life for them.",
      "The cost structure below the gross line is where the money goes. Operating margin is negative 0.2%, which means the company consumes essentially all of its 74.3% gross margin on sales, engineering, administration and whatever impairments the year carries. That is a lot for a business with $1.36B of revenue, and it is the reason the loss is not simply a depreciation artefact.",
      "The financing is the third layer. Building capacity requires capital before the revenue arrives, which is why free cash flow is so deeply negative. If the capital is equity, the cost is dilution. If it is debt, the cost is interest, which sits below the operating line and shows up in the net margin. The 3.1% trailing net margin against a negative operating margin tells a reader that something outside operations contributed to the reported profit.",
    ],
  },
  growth: {
    paragraphs: [
      "The reported multi-year compound rate is negative 16.3%, and it should be ignored. Revenue was $4.79B in FY2021, then $13.5M and $9.8M in the following two years, then $91.5M in FY2024 and $529.8M in FY2025. A business that goes from $4.79B to $13.5M has been restructured, not shrunk, and the earlier figures describe a different set of assets. The comparable progression starts at $91.5M.",
      "On that basis the growth is extraordinary: $91.5M to $529.8M in one year, then to $1.36B trailing. The attributed consensus expects $905.7M next quarter and $1.46B the quarter after, which would be another step up, then $3.35B for the fiscal year and $12.24B the year after. Those are third-party estimates with wide disagreement, and the next-year number would make the company roughly nine times its current size in two years.",
      "The driver is demand for accelerator capacity that the largest cloud providers cannot or will not supply on the terms customers want. The constraint is capital: every dollar of revenue requires several dollars of equipment and buildings first. That is why the growth rate and the cash burn are the same story told twice.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is not a performance history in the usual sense. FY2022 and FY2023 show net income of $745.6M and $241.3M on revenue of $13.5M and $9.8M, with free cash flow of $682.4M and $746.9M. Profit and cash flow many times larger than revenue cannot come from operations; they come from disposals, settlements and accounting effects around the restructuring.",
      "The operating line tells the real story: negative $178.7M, negative $158.0M, negative $285.7M, negative $399.6M and negative $611.7M across five years. The loss has grown every year except one, and it grew fastest in the year revenue grew most. That is the signature of a business where growth requires spending ahead of revenue.",
      "There is no quarterly table in the data, so the margin trend within the year cannot be checked. Return on equity is 0.6%, which is close to zero and consistent with a business whose reported profit is a rounding error against its asset base. A reader has to rely on the operating loss and the cash flow, which both point the same way.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $3.68B over the trailing period, a negative 694.8% margin. For every dollar of revenue, the company spent about two dollars and seventy cents on capital and working capital beyond what it collected. That is the defining fact of the business, and it is not a temporary condition: it is what building capacity ahead of demand looks like.",
      "The annual history shows the same pattern intensifying: positive $682.4M and $746.9M in FY2022 and FY2023 during the restructuring, then negative $561.9M in FY2024 and negative $3.68B in FY2025. The positive years were asset sales, not operations. The negative years are the build.",
      "No net debt figure is available, which is a gap a reader should notice. For a company spending at this rate, the split between equity and debt funding determines how much of the future belongs to existing shareholders. The 3.1% net margin and the 0.6% return on equity suggest the reported profit is not yet the thing to watch; the funding structure is.",
    ],
  },
  valuation: {
    paragraphs: [
      "There is no trailing P/E and no EV/EBITDA in the data, because the trailing earnings are not meaningful. What a reader can compute is the sales multiple: $35.20B of market value against $1.36B of trailing revenue is about twenty-six times sales. Against the $12.24B consensus for next year it would be under three times.",
      "That gap is the entire valuation argument. A twenty-six times sales multiple is only reasonable if the revenue arrives. A three times sales multiple, on the other hand, would be cheap for a business with a 74.3% gross margin, which is why the shares have held up despite the cash burn. The price is a statement that the capacity under construction will be rented at something close to the expected rate.",
      "The alternative is worth stating plainly. If the revenue arrives but the margin does not, the company will be a large, low-return rental business with a heavy depreciation charge. If the revenue does not arrive, the equipment is worth what used accelerators are worth. Neither outcome is captured by a sales multiple, which is why the cash flow statement matters more than the valuation table here.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty analysts contribute to the attributed consensus, with a mean target of $281.00 and a range of $84.00 to $410.00. The mean is more than double the last close of $129.49, and the low end is 35% below it. A range that wide on a company with no trailing multiple is a disagreement about the business model, not about the next quarter.",
      "The estimates are $905.7M of revenue and a loss of $1.24 per share next quarter, $1.46B and a loss of $1.78 the quarter after, $3.35B and a loss of $2.11 for the fiscal year, and $12.24B and a loss of $6.16 for the next. The pattern is unusual and important: the loss per share widens as revenue grows. That is what a capital-intensive expansion looks like when depreciation and interest scale with the asset base. These are third-party forecasts, and the widening loss is the part a reader should take most seriously.",
    ],
  },
  risks: {
    intro:
      "Nebius is a capital allocation story as much as an operating one. The risks are financing, depreciation, competition from larger balance sheets, and a revenue mix the accounts do not reveal.",
    items: [
      {
        title: "Funding the build",
        severity: "High",
        detail:
          "Negative $3.68B of free cash flow against $1.36B of revenue. The company must keep raising capital to keep growing, on whatever terms are available.",
        watch:
          "The split between debt and equity raised, and the cost of each.",
      },
      {
        title: "Depreciation and useful life",
        severity: "High",
        detail:
          "A 74.3% gross margin depends on how quickly the equipment is written down. A shorter assumed life would raise the reported cost of revenue immediately.",
        watch:
          "The depreciation schedule for accelerators and any change to useful-life assumptions.",
      },
      {
        title: "Competition from larger clouds",
        severity: "High",
        detail:
          "The largest cloud providers can price capacity to defend share and fund losses from other businesses. A price war would hit a pure-play renter hardest.",
        watch:
          "Rental pricing per accelerator hour and utilisation rates.",
      },
      {
        title: "Revenue mix opacity",
        severity: "Medium",
        detail:
          "The consolidated revenue line does not separate the cloud from adjacent businesses, so the quality of the growth cannot be assessed.",
        watch:
          "Any future segment disclosure and the gross margin attached to each part.",
      },
      {
        title: "History that does not compare",
        severity: "Medium",
        detail:
          "The FY2021 to FY2023 figures describe a restructured business. Anyone using the multi-year growth rate is measuring the wrong thing.",
        watch:
          "The FY2024 base and any restatement of prior periods.",
      },
    ],
    watchlist: [
      {
        title: "Capital raised",
        detail:
          "The pace and terms of new funding decide how much of the future the current shares own.",
      },
      {
        title: "Gross margin",
        detail:
          "A 74.3% gross margin is the buffer that has to cover everything else. A decline would be serious.",
      },
      {
        title: "Utilisation",
        detail:
          "Revenue per unit of installed capacity is the difference between a rental business and an empty building.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Nebius rents out AI computing capacity and is growing extremely fast from a small base: $91.5M in FY2024, $529.8M in FY2025, $1.36B trailing. It also spends far more than it earns, with negative $3.68B of free cash flow, and its reported loss grows as revenue grows.",
      "The educational point is that a high gross margin and a negative operating margin can coexist comfortably in a capital-intensive rental business, because the machine is paid for before it is rented and depreciated after. The gross margin describes a good unit; the operating and free cash flow margins describe the financing of a fleet. A reader who only looks at the 74.3% will misjudge the company.",
      "What is not known is how the build is funded, how long the equipment is assumed to last, how much of revenue comes from the cloud rather than adjacent businesses, and what utilisation the capacity achieves. The AI build-out is the reason this company exists; it does not tell a reader whether the capital being spent will earn a return above its cost.",
    ],
    questions: [
      "How is the capacity build funded, and at what cost of capital?",
      "Over how many years are the accelerators depreciated, and is that realistic?",
      "What share of revenue comes from renting compute rather than from other businesses?",
      "What utilisation rate does the installed capacity currently run at?",
    ],
  },
};
