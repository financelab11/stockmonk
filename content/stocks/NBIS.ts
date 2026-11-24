import type { StockStory } from "./types";

export const NBIS: StockStory = {
  "ticker": "NBIS",
  "kicker": "AI cloud · GPU capacity",
  "title": "Nebius is buying revenue with capital and the bill arrives later",
  "dek": "Revenue grew 479% and free cash flow was negative $3.68B. In a business that rents out GPUs, growth is a purchase, and the depreciation comes after.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue of $529.8M grew 479% from $91.5M, yet operating margin is negative 115.5% and free cash flow negative $3.7B.",
    "Gross margin of 68.6% depends on the depreciation schedule for accelerators, the single assumption that moves reported profit most.",
    "Capex of $4.1B in FY2025 was more than ten times operating cash flow, so the build is funded from outside the business.",
    "At 56.1x sales and no meaningful EBITDA multiple, the shares are valued on capacity that has not yet been installed."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1513845/000110465926052948/nbis-20251231x20f.htm",
  "irUrl": "https://nebius.com",
  "bigPicture": {
    "paragraphs": [
      "Capital spending of $4.1B against $529.8M of revenue is the defining fact about Nebius. The company generated $384.8M of operating cash flow and spent ten times that on capacity, leaving a $3.7B deficit. Revenue grew 479% and gross margin reached 68.6%, but operating margin was negative 115.5%, so the income statement describes a business whose costs are running well ahead of its revenue. The gap between the two numbers is the capital that has been committed but not yet earned.",
      "The product is rented accelerator capacity with storage, networking and the software to make a cluster usable. Customers pay by the hour rather than buying equipment, which converts a capital purchase into an operating expense for them and a depreciation obligation for Nebius. The physical footprint, land, power, cooling and buildings, takes years to assemble; the chips inside it lose value in a few. That mismatch between asset lives is the core of the depreciation debate.",
      "Enterprise value is 56.1 times trailing sales at the current market price, and there is no EBITDA multiple because EBITDA is not meaningful at this stage. The net margin of 15.6% is positive while the operating margin is deeply negative, which means something below the operating line produced the profit. The debate is whether the capital being spent earns a return above its cost, and the reported figures do not yet show it."
    ],
    "quote": "Nebius is selling compute it has to build first, and the equity is underwriting the difference."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core product is GPU capacity delivered as a cloud service. A customer rents accelerators by the hour, usually with storage, networking and the software layer that makes a cluster usable. The appeal is access without procurement: buying accelerators directly requires a relationship with a supplier, a data centre, and the engineering to run it. Renting converts that into an operating expense.",
      "Around the cloud business sit other operations that the financial data does not separate. The consolidated revenue line is the only figure available, so a reader cannot see how much comes from renting compute, how much from services, and how much from businesses that are not really AI infrastructure at all. That is a significant limitation for a company whose investment case rests entirely on one of them.",
      "The physical footprint is the real product. Land, power, cooling, networking and buildings take years to assemble, and the accelerators inside them have a useful life measured in a few years. The company's competitive position therefore depends on three things it controls and one it does not: the cost of capital, the price it pays for accelerators, the utilisation it achieves, and the price its larger competitors decide to charge."
    ],
    "bullets": [
      {
        "title": "GPU cloud",
        "detail": "Accelerator capacity rented by the hour, with storage and networking. The revenue line the investment case rests on."
      },
      {
        "title": "Managed AI services",
        "detail": "Tooling that helps customers train and run models on the rented capacity. Improves retention and revenue per customer."
      },
      {
        "title": "Adjacent businesses",
        "detail": "Operations outside the cloud that the consolidated accounts do not break out. A source of opacity in the revenue mix."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is metered: customers pay for accelerator hours, storage and data transfer. The gross margin of 74.3% is the difference between the rental rate and the running cost of the facility, principally power, cooling, rack space and the depreciation of the equipment. It looks high because depreciation on the machines is often charged over a longer period than the market's useful life for them.",
      "The cost structure below the gross line is where the money goes. Operating margin is negative 0.2%, which means the company consumes essentially all of its 74.3% gross margin on sales, engineering, administration and whatever impairments the year carries. That is a lot for a business with $1.36B of revenue, and it is the reason the loss is not simply a depreciation artefact.",
      "The financing is the third layer. Building capacity requires capital before the revenue arrives, which is why free cash flow is so deeply negative. If the capital is equity, the cost is dilution. If it is debt, the cost is interest, which sits below the operating line and shows up in the net margin. The 3.1% trailing net margin against a negative operating margin tells a reader that something outside operations contributed to the reported profit."
    ]
  },
  "growth": {
    "paragraphs": [
      "From $91.5M of revenue in FY2024 to $529.8M in FY2025, the growth is real and unusually fast. It comes from a small base and a single product line: GPU capacity rented by the hour. The consolidated revenue figure does not separate the cloud from adjacent businesses, so the quality of the growth cannot be assessed from the accounts, and the segment split is not disclosed.",
      "Capacity is the product, and capacity is a function of power, buildings and accelerators. Each of those has a lead time, and the accelerators have a useful life shorter than the buildings that house them. Utilisation is therefore the variable that decides the return: a fleet that is 70% rented earns a very different return from one that is 95% rented, and the company does not report the figure."
    ],
    "bullets": [
      {
        "title": "Installed capacity",
        "detail": "Revenue follows energised racks, so the build schedule is a better predictor than the order pipeline."
      },
      {
        "title": "Utilisation",
        "detail": "A rented hour and an idle hour cost the same to own but earn very different amounts, and utilisation is not disclosed."
      },
      {
        "title": "Depreciation life",
        "detail": "The assumed useful life of an accelerator sets the cost of revenue and therefore the 68.6% gross margin."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Below the gross line is where the money goes. A 68.6% gross margin leaves 184 points of operating expense and impairment before the operating line reaches negative 115.5%. Sales, engineering and administration for a $529.8M revenue business cannot account for that alone, so the figure includes items that are not recurring in a normal sense. The FY2024 operating margin was negative 436.7% on $91.5M of revenue.",
      "The net margin of 15.6% is the anomaly. A company with a negative operating margin should report a loss, and the positive net figure means a gain below the operating line, most likely on investments or asset revaluations. That is not a criticism of the business; it is a warning that the reported profit cannot be used to value it, and that the earnings multiple of 355.0x describes an accounting residual rather than an operating result.",
      "Return on invested capital of negative 7.3% is the cleanest summary. The asset base is being built faster than it is earning, which is normal in a construction phase and dangerous if the phase lasts longer than the financing. CoreWeave, with a 67.4% gross margin and a negative 3.0% operating margin, is further along the same path; IREN, at negative 173.4%, is earlier."
    ]
  },
  "cash": {
    "paragraphs": [
      "The build is funded from outside the business. Operating cash flow of $384.8M in FY2025 covered less than a tenth of the $4.1B capex programme, and free cash flow was negative $3.7B, or negative 694.8% of revenue. The filings do not break out how much of the funding came from equity and how much from debt, which is the single most important missing disclosure for a company at this stage.",
      "Net debt of $425.1M is small relative to the asset base, but interest cover is not reported because EBITDA is negative. The absence of a meaningful leverage ratio does not mean the balance sheet is conservative; it means the conventional measure does not apply. The negative 12.6% free cash flow yield is the relevant number for a holder, because it measures how much external capital each year of growth requires."
    ]
  },
  "valuation": {
    "paragraphs": [
      "A 56.1x sales multiple is the highest in the group by a wide margin: IREN is at 19.1x, Applied Digital at 14.9x and CoreWeave at 2.8x. The difference is not gross margin, which is similar across the GPU landlords, but the stage of the build and the market's willingness to pay for capacity that is contracted or planned rather than installed and earning.",
      "On the FY2026 revenue estimate of $3.2B, the market value is about nine times sales; on FY2027's $12.4B it is about two times. Those are the numbers that matter, because the trailing multiple describes a company one-tenth the size of the one the estimates describe. The P/E of 355.0x is not usable: it rests on a net profit produced below the operating line."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Twenty analysts cover Nebius, with a mean target of $235 against a $100 price and a range of $84 to $395. The sample is Yahoo Finance's, dated 18 November 2026. The dispersion is enormous and reflects a genuine disagreement about how much capacity will be built, when it is energised, and at what utilisation it will run.",
      "The revision history is the warning. EPS estimates fell 86.1% over thirty days and 88.3% over sixty, while the FY2027 revenue estimate stands at $12.4B and the EPS estimate at -$5.31. Carrying a nine-figure revenue forecast alongside a widening loss is what a capital-intensive build looks like when depreciation and financing costs are added. Only eight or nine analysts contribute to the annual estimates."
    ]
  },
  "risks": {
    "intro": "Nebius is a capital allocation story as much as an operating one. The risks are financing, depreciation, competition from larger balance sheets, and a revenue mix the accounts do not reveal.",
    "items": [
      {
        "title": "Funding the build",
        "severity": "High",
        "detail": "Negative $3.68B of free cash flow against $1.36B of revenue. The company must keep raising capital to keep growing, on whatever terms are available.",
        "watch": "The split between debt and equity raised, and the cost of each."
      },
      {
        "title": "Depreciation and useful life",
        "severity": "High",
        "detail": "A 74.3% gross margin depends on how quickly the equipment is written down. A shorter assumed life would raise the reported cost of revenue immediately.",
        "watch": "The depreciation schedule for accelerators and any change to useful-life assumptions."
      },
      {
        "title": "Competition from larger clouds",
        "severity": "High",
        "detail": "The largest cloud providers can price capacity to defend share and fund losses from other businesses. A price war would hit a pure-play renter hardest.",
        "watch": "Rental pricing per accelerator hour and utilisation rates."
      },
      {
        "title": "Revenue mix opacity",
        "severity": "Medium",
        "detail": "The consolidated revenue line does not separate the cloud from adjacent businesses, so the quality of the growth cannot be assessed.",
        "watch": "Any future segment disclosure and the gross margin attached to each part."
      },
      {
        "title": "History that does not compare",
        "severity": "Medium",
        "detail": "The FY2021 to FY2023 figures describe a restructured business. Anyone using the multi-year growth rate is measuring the wrong thing.",
        "watch": "The FY2024 base and any restatement of prior periods."
      }
    ],
    "watchlist": [
      {
        "title": "Capital raised",
        "detail": "The pace and terms of new funding decide how much of the future the current shares own."
      },
      {
        "title": "Gross margin",
        "detail": "A 74.3% gross margin is the buffer that has to cover everything else. A decline would be serious."
      },
      {
        "title": "Utilisation",
        "detail": "Revenue per unit of installed capacity is the difference between a rental business and an empty building."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Nebius rents out AI computing capacity and is growing extremely fast from a small base: $91.5M in FY2024, $529.8M in FY2025, $1.36B trailing. It also spends far more than it earns, with negative $3.68B of free cash flow, and its reported loss grows as revenue grows.",
      "The educational point is that a high gross margin and a negative operating margin can coexist comfortably in a capital-intensive rental business, because the machine is paid for before it is rented and depreciated after. The gross margin describes a good unit; the operating and free cash flow margins describe the financing of a fleet. A reader who only looks at the 74.3% will misjudge the company.",
      "What is not known is how the build is funded, how long the equipment is assumed to last, how much of revenue comes from the cloud rather than adjacent businesses, and what utilisation the capacity achieves. The AI build-out is the reason this company exists; it does not tell a reader whether the capital being spent will earn a return above its cost."
    ],
    "questions": [
      "How is the capacity build funded, and at what cost of capital?",
      "Over how many years are the accelerators depreciated, and is that realistic?",
      "What share of revenue comes from renting compute rather than from other businesses?",
      "What utilisation rate does the installed capacity currently run at?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
