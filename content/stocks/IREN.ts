import type { StockStory } from "./types";

export const IREN: StockStory = {
  ticker: "IREN",
  kicker: "Bitcoin mining · Data-centre capacity",
  title: "IREN is converting a mining business into a landlord",
  dek: "A 72.2% gross margin and a negative 173.4% operating margin in the same year. The gap is what happens when a commodity producer borrows to become an infrastructure owner.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $666.7M, up 46.4%, with a 72.2% gross margin.",
    "Operating margin was negative 173.4%, so costs below the gross line were more than twice revenue.",
    "Net debt reached $6.38B against $707.0M of FY2026 revenue, which is the central fact of the balance sheet.",
    "The company has 102 employees, so almost all of the capital is in machines and buildings rather than people.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1878848/000187884826000052/iren-20260630.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001878848&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "IREN began as a bitcoin miner. It built data centres where electricity is cheap, filled them with mining rigs, and sold the coins those rigs produced. Mining is a commodity business with a simple spread: the value of the coins mined against the cost of the power consumed. The company was incorporated in 2018, is based in Sydney, and employs 102 people.",
      "The business is now in the middle of a conversion. The same sites, power contracts and buildings that host mining rigs can host accelerators, and accelerator capacity can be rented to AI customers on contracts rather than sold at a market price. That is the strategic logic: change a commodity producer into a landlord with contracted revenue.",
      "The financial statements show a company in the middle of that change and paying for it. Trailing revenue is $666.7M, up 46.4%. Gross margin is 72.2%. Operating margin is negative 173.4%. Net debt is $6.38B. Those four numbers do not describe the same kind of business, and reconciling them is the point of this report.",
    ],
    quote:
      "A miner sells a commodity at whatever the market pays. A data-centre landlord sells a contract at a price agreed years earlier. The second is worth more per dollar of revenue and costs far more to build.",
  },
  whatItDoes: {
    paragraphs: [
      "The operating asset is data-centre capacity. Land, a power connection, buildings, cooling and electrical distribution are the expensive parts, and they are shared between mining and AI hosting. A mining rig and an accelerator rack need the same things: a lot of electricity, a way to remove the heat, and a network connection.",
      "The mining operation is the incumbent business. It generates revenue by producing bitcoin, which means the revenue line moves with the coin price and the network difficulty rather than with a customer contract. That is why the quarterly revenue series is erratic: mining economics change with the market, and the reported periods include reclassifications and one-off items that make a simple trend hard to read.",
      "The AI hosting operation is the new business. Capacity is rented to customers who need accelerators, usually on multi-year terms. The attraction for the customer is speed and price; the attraction for IREN is contracted revenue that does not move with a commodity price. The cost is that the build requires capital before the first invoice.",
    ],
    bullets: [
      {
        title: "Mining",
        detail:
          "Bitcoin production at owned sites. Revenue follows the coin price and network difficulty, and cost follows the power price.",
      },
      {
        title: "AI hosting",
        detail:
          "Accelerator capacity rented on contract. The strategic destination and the reason for the capital spending.",
      },
      {
        title: "Power and sites",
        detail:
          "Land, interconnection and cooling shared by both businesses. The scarce asset that makes the conversion possible.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Mining revenue is the coin output multiplied by the market price. The cost is dominated by electricity, which is why miners locate where power is cheap and why a change in the power price or the network difficulty can wipe out the margin. Gross margin of 72.2% is the spread between the coins produced and the direct cost of producing them, before the depreciation of the rigs.",
      "Hosting revenue is a rental rate per unit of capacity per unit of time. The cost is power, cooling, maintenance and depreciation on the building and the equipment. A hosting contract has a known price and a known term, which makes the revenue more predictable than mining, but the capital required to serve it is much larger per dollar of revenue.",
      "The operating margin is where the two businesses meet their overheads. Negative 173.4% means the costs below the gross line came to more than twice the revenue line itself. That cannot be field staff at 102 employees. It is depreciation, impairments, share-based payments and fair-value movements on financial instruments, and the quarterly record shows how violent those can be: one quarter reported an operating margin of negative 1,085.7% on $7.0M of revenue.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 161.9% a year across the fiscal years in the data, from $59.0M in FY2022 to $707.0M in FY2026. The latest quarter grew 2,757.1%, which is not a growth rate in any useful sense: it compares a period with almost no revenue to a period with $200.0M. The quarterly series runs $187.3M, $7.0M, $184.7M, $144.8M, $137.2M and $200.0M, which tells a reader that the periods are not consistently defined.",
      "The attributed consensus expects $303.8M of revenue next quarter and $868.5M the quarter after, then $2.53B for the fiscal year and $7.52B for the next. Those figures come from one and three analysts respectively, which is very thin coverage for numbers that imply a tenfold increase in two years. The loss per share is expected to widen from $4.17 to $5.53 over the same period.",
      "The growth depends on converting power and sites into contracted AI capacity. The constraint is capital and time: a new building needs an interconnection, equipment and construction, and the debt to fund it is already $6.38B. A rise in the cost of that debt would slow the conversion more than a fall in demand would.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a business that has never consistently earned an operating profit. Operating income was $14.4M, negative $157.2M, negative $27.2M, $17.3M and negative $1.05B across five fiscal years. Net income was modestly positive in three of those years, which is the tell: the profit came from revaluing assets and instruments, not from mining or hosting.",
      "The FY2026 operating loss of $1.05B on $707.0M of revenue is the number that matters. Return on equity is negative 13.0% and return on invested capital negative 7.9%, both of which are consistent with a large asset base that is not yet earning. A negative return on invested capital in a capital-intensive business is a warning, not a rounding error: it means the capital employed is currently producing less than it costs.",
      "The quarterly operating margins, negative 63.0%, negative 161.3%, negative 452.1% and negative 93.0%, are too volatile to read as a trend. They are better understood as a record of charges and revaluations arriving in different periods. Until the AI hosting contracts are in place and the mining assets are stable, the operating margin will not describe the underlying economics.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $2.46B over the trailing period, a negative 369.2% margin. The company spent more than three times its revenue on capital and working capital. That is a deliberate choice, and it is the only way to convert a mining site into an AI data centre, but it has to be funded.",
      "The funding shows up as $6.38B of net debt. Against $707.0M of FY2026 revenue, that is roughly nine times revenue in net borrowings, and it is the reason the interest charge matters more than the tax line. A business with this much leverage and this little operating profit has a narrow margin for error: a delay in a hosting contract or a fall in mining revenue goes straight to the equity.",
      "The annual cash flow history makes the same point. Free cash flow was negative $110.3M, negative $89.6M and negative $327.6M in the three years before FY2026, then negative $897.6M in FY2026. The company has been consuming cash for its entire public life, and the recent spending is an acceleration of that pattern rather than a departure from it. Leverage is a way of buying time, and the question is whether the time bought is enough to finish the build.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $21.64 the shares trade at 312.2x trailing earnings, 23.3x sales, and no EV/EBITDA is available. The earnings multiple is an artefact: trailing EPS is negative $4.08, so a positive P/E can only come from a period in which the reported profit was driven by a non-operating gain. It should be discarded.",
      "The sales multiple is the one to use, and 23.3x is high for a business with negative returns on capital. It is a forward-looking number: the market is valuing the capacity under construction, not the revenue currently produced. On the $7.52B consensus for next year, the multiple would be about 1.2x, which shows how much of the price depends on the build being completed and rented.",
      "Stockmonk does not publish a target price. What can be said is that a 23.3x sales multiple on a levered, loss-making builder requires two things at once: the capacity has to be finished, and it has to be rented at the expected rate. If only the first happens, the company owns a large asset with a heavy interest bill.",
    ],
  },
  analysts: {
    paragraphs: [
      "Nineteen analysts contribute to the attributed consensus, with a mean target of $64.08 and a range of $23.00 to $139.00. The mean is almost three times the last close of $21.64, and the low end is 6% above it. The shares are down 67.7% over the past year, which explains most of that gap.",
      "The estimates are thin at the quarterly level, with a single analyst for each of the next two quarters, and three for each of the annual periods. They call for $303.8M and $868.5M of revenue in the next two quarters, $2.53B this fiscal year and $7.52B next, with losses of $4.17 and $5.53 per share. A consensus built on three analysts is a set of individual models rather than a market view, and the widening loss is the part that deserves the most attention.",
    ],
  },
  risks: {
    intro:
      "IREN's risks are leverage, execution, commodity exposure and a set of accounts that are hard to read while the business is being rebuilt.",
    items: [
      {
        title: "Leverage",
        severity: "High",
        detail:
          "$6.38B of net debt against $707.0M of FY2026 revenue. Interest has to be paid whether or not the hosting contracts arrive on schedule.",
        watch:
          "Net debt, interest expense and the maturity profile of the borrowings.",
      },
      {
        title: "Negative returns on capital",
        severity: "High",
        detail:
          "Return on invested capital is negative 7.9%. The asset base is not yet earning what it cost, and the build is still growing it.",
        watch:
          "Return on invested capital as capacity comes online, and the operating margin excluding one-off charges.",
      },
      {
        title: "Commodity revenue",
        severity: "High",
        detail:
          "Mining revenue moves with the coin price and network difficulty. A fall in either reduces the cash available to service debt.",
        watch:
          "The split between mining and hosting revenue, and the cost of production per coin.",
      },
      {
        title: "Execution on the conversion",
        severity: "Medium",
        detail:
          "Converting a mining site to accelerator hosting requires power, cooling and networking upgrades. Delays push revenue past the interest payments.",
        watch:
          "Contract announcements, delivery schedules and the capacity actually energised.",
      },
      {
        title: "Reporting clarity",
        severity: "Medium",
        detail:
          "Quarterly revenue ranges from $7.0M to $200.0M and operating margins from negative 63.0% to negative 1,085.7%, which makes trends hard to establish.",
        watch:
          "Restatements and the disclosure of one-off items in each period.",
      },
    ],
    watchlist: [
      {
        title: "Net debt",
        detail:
          "The number that decides whether the conversion is a strategy or a refinancing risk.",
      },
      {
        title: "Hosting contracts",
        detail:
          "Contracted revenue is what turns a commodity producer into an infrastructure owner.",
      },
      {
        title: "Operating margin excluding charges",
        detail:
          "The reported figure is too volatile to use. The underlying margin is the one that matters.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "IREN is a bitcoin miner with 102 employees, $666.7M of trailing revenue, a 72.2% gross margin and $6.38B of net debt. It is spending heavily to convert its power and sites into AI hosting capacity, and the financial statements currently show the cost of that conversion rather than the benefit.",
      "The educational point is that a high gross margin says very little about a capital-intensive business. The gross margin describes the spread on a unit of production. The operating margin, the return on invested capital and the free cash flow describe whether the capital employed to produce those units is earning its keep. Here the first is attractive and the other three are negative, which is what a build-out looks like before it is finished.",
      "What is not known is the contracted revenue from AI hosting, the cost and maturity of the debt, and the true operating margin once one-off items are removed. The AI build-out is the reason for the conversion; it does not reduce the interest bill, and it does not make the timing risk disappear.",
    ],
    questions: [
      "How much of the $6.38B of net debt matures in the next two years?",
      "What contracted hosting revenue is already signed, and at what rate per unit of capacity?",
      "What is the operating margin once impairments and fair-value movements are excluded?",
      "How much of revenue is still mining rather than hosting?",
    ],
  },
};
