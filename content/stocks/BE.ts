import type { StockStory } from "./types";

export const BE: StockStory = {
  "ticker": "BE",
  "kicker": "Fuel cells · On-site power generation",
  "title": "Bloom Energy sells power that skips the grid queue",
  "dek": "Fuel cells give data-centre developers electricity without waiting years for a utility connection. Revenue doubled, and so did the price of the shares relative to earnings.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue of $3.8B more than doubled, and the 14.9% operating margin follows a year and a half of expansion from negative 6.0%.",
    "The September quarter produced $1.2B at an 18.3% operating margin but negative $180.6M of free cash flow, so cash timing is lumpy.",
    "Net debt is negligible and interest cover is 29.6x, a balance sheet that can fund capacity without stressing the model.",
    "At 80.8x EBITDA and 13.2x sales, the shares require the service fleet to earn a margin the equipment sale alone does not."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1664703/000162828026006516/be-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001664703&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "A year and a half of margin expansion took Bloom Energy from negative 6.0% operating margin to 18.3% in the September 2026 quarter. Revenue over the same span went from $319.3M to $1.2B. The factory, engineering and field organisation were already in place, so the additional revenue carried most of its gross profit to the operating line. That is the same mechanism that produced losses when revenue was smaller. The next test is whether that leverage survives a quarter of slower deliveries.",
      "The product sells time. A data-centre developer that cannot wait years for a utility connection can install modular solid oxide fuel cells and generate power on site, using natural gas, biogas or hydrogen. The advantage is speed, not cheapness, and it disappears if interconnection timelines shorten or grid power gets cheaper. Service contracts extend the relationship and add a recurring revenue stream with a real cost obligation. The service contract is therefore a hedge against the equipment cycle and a liability at the same time.",
      "After years of losses the business is funding itself: free cash flow of $436.7M, 11.5% of revenue, and a balance sheet with roughly no net debt. The price reflects that: 80.8x EBITDA and 13.2x sales, among the highest multiples in the group. The debate is whether the service obligation and stack replacements consume the margin that the equipment sale appears to earn. The multiple is a claim on the installed base, not on the next quarter's shipments."
    ],
    "quote": "Bloom's fuel cells sell time to data-centre developers, and the multiple assumes that time stays scarce."
  },
  "whatItDoes": {
    "paragraphs": [
      "The Energy Server is a modular generator. Fuel, usually natural gas but potentially hydrogen, is fed into stacks of solid oxide cells that produce electricity electrochemically rather than by combustion. Because there is no flame, the emissions profile is different from a gas turbine, and because the units are modular, capacity can be added in blocks as a site grows.",
      "Bloom sells the equipment and, in many cases, keeps servicing it afterwards. Data centres buy the power, not the box, in some structures, which makes Bloom responsible for availability. The company also sells into microgrids, where a site uses its own generation as the primary supply rather than as backup.",
      "The manufacturing base is in the United States, and the fuel cell stacks are the expensive, technically difficult part. The company is small relative to its revenue, 1,524 people producing $3.81B, which says most of the cost of goods is materials and manufacturing rather than labour."
    ],
    "bullets": [
      {
        "title": "Energy Server",
        "detail": "Modular solid oxide fuel cell generators. Sold as equipment or as power under a service arrangement."
      },
      {
        "title": "Service and maintenance",
        "detail": "Ongoing support for installed units. Recurring revenue that grows with the installed base rather than with new orders."
      },
      {
        "title": "Data-centre power",
        "detail": "On-site generation for campuses that need electricity before the grid can deliver it. The fastest-growing use case."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The revenue model has two parts. Equipment sales are recognised when a unit is delivered and accepted, at a gross margin of 32.5%. Service arrangements run for years and generate revenue per kilowatt-hour or per month, with a cost structure that is mostly field engineers and replacement stacks.",
      "The unit economics depend on the installed cost per kilowatt against the cost of grid power in that location, and on how long the stacks last before they need replacing. A fuel cell that runs continuously wears out, so the service contract is not a free annuity: it carries an obligation to replace the expensive part of the machine. That is why the gross margin is 32.5% rather than the 50% or more that a pure equipment vendor might earn.",
      "The operating leverage is now visible. Revenue went from $396.3M in Q2 FY25 to $1.23B in Q3 FY26, and the operating margin went from negative 0.9% to 18.3%. The factory, the engineering and the field organisation were already in place; the additional revenue carried most of its gross profit to the operating line. That is the same mechanism that produced the losses in the other direction when revenue was $1.27B in FY2023."
    ]
  },
  "growth": {
    "paragraphs": [
      "Interconnection queues, not fuel costs, are the demand driver. A campus that needs power faster than a utility can connect it can install modular fuel cells and generate on site, and the installation can be permitted and energised in a fraction of the time a new line takes. The revenue evidence is the ramp from $396.3M in the June 2025 quarter to $1.23B in September 2026, a tripling in five quarters.",
      "The service business is the part that compounds. Every unit sold adds a multi-year maintenance and stack-replacement obligation, which produces recurring revenue but also a cost that arrives later. The gross margin of 32.5% is lower than a pure equipment vendor's precisely because that obligation is carried in the same line. Growth in the installed base therefore adds revenue and liability together, and the balance decides the eventual return.",
      "The estimates assume $4.5B of revenue in FY2026, 123.8% growth, and $7.1B in FY2027, 56.4%. They also imply a pause: the December quarter is put at $1.5B and the March quarter at $1.4B, a sequential decline. A company growing 56% for the year with two flat quarters is either digesting capacity or waiting for projects to convert. The quarterly estimates are the part of the forecast closest to the reported record, and they are also the least ambitious."
    ],
    "bullets": [
      {
        "title": "Grid queue",
        "detail": "The product's premium is measured in years of avoided utility interconnection, which is why speed rather than efficiency sells it."
      },
      {
        "title": "Service obligation",
        "detail": "Each installed unit carries stack replacements and maintenance, so the annuity is also a future cost."
      },
      {
        "title": "Modular capacity",
        "detail": "Units are added in blocks as a site grows, which lets a developer match supply to installed compute."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The 32.5% gross margin is the hinge. It is high enough to cover manufacturing and field service but not high enough to behave like a software margin, and it carries the stack-replacement obligation. Operating margin of 14.9% and net margin of 13.7% are close, which means the reported profit is mostly operational, unlike some peers where non-operating items dominate. That is a better quality of earnings than a net margin lifted by one-off gains, and it is the reason the operating line is the one to follow.",
      "The quarterly path shows how fast the operating leverage works: negative 6.0%, negative 0.9%, 1.5%, 11.3%, 9.7%, 17.2% and 18.3%. Revenue advanced every quarter, and the margin followed with a lag. Return on invested capital of 12.8% and return on equity of 27.1% are now positive, but they are calculated on a base that was loss-making two years ago and on a service book whose costs are still maturing."
    ]
  },
  "cash": {
    "paragraphs": [
      "FCF is lumpy because project milestones are. The September quarter consumed $180.6M after generating $174.8M in June, and the twelve-month figure is $436.7M, 11.5% of revenue. FY2025 produced $57.2M on $113.9M of operating cash flow and $56.8M of capex, so the improvement is recent and sensitive to the timing of deliveries and acceptances. The direction of travel is clear even if the quarterly path is not.",
      "The balance sheet is not the constraint. Net debt is negligible, interest cover is 29.6x, and capex of $56.8M is small relative to $3.8B of revenue because the manufacturing footprint already exists. The constraint is the service obligation: stack replacements are a future cash cost that sits inside the gross margin rather than below it. No dividend is paid, so the cash stays in the business."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At 80.8x EBITDA, Bloom is the most expensive large-cap industrial in the group on that measure, and 13.2x sales is close to Lumentum's 13.4x despite a lower gross margin. The multiple is not a claim about the current year; it is a claim about the installed base and the service revenue that comes with it, and about a manufacturing cost curve that has not finished falling.",
      "On FY2026 EPS of $3.27 the shares at $170 are at about 52x, and on $5.32 for FY2027 at about 32x. Those multiples are high but not absurd for a company growing revenue 123.8% and then 56.4%, provided the margin holds. The risk is that the service cost arrives before the service revenue, which would make the 2027 estimate the peak rather than a step.",
      "What justifies the price is a durable speed advantage: grid queues that stay long, a service annuity that earns more than it costs, and manufacturing scale that lifts the gross margin above 32.5%. What breaks it is faster interconnection, cheaper grid power or a stack-replacement cycle that consumes the margin. The 29.6x interest cover gives time to find out; the multiple does not give much room."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Twenty-six analysts contribute to the Yahoo Finance count of 18 November 2026, and the range of views is the widest in the group: a mean target of $284 against a $170 price, with a low of $102 and a high of $380. A low target 40% below the market price is a genuine disagreement about the business, not a rounding difference.",
      "The estimates have been raised 20.8% over thirty days and 21.6% over sixty, and the last four quarters beat the published figures, most recently $0.94 against $0.68. FY2026 is $4.5B of revenue and $3.27 of EPS, FY2027 $7.1B and $5.32. The consensus assumes the service business scales without a step-up in warranty or replacement costs, which is the assumption the cash flow will test."
    ]
  },
  "risks": {
    "intro": "Bloom's risks are execution at scale, the cost of the service obligation, and a valuation that has already priced several years of success.",
    "items": [
      {
        "title": "Service obligation",
        "severity": "High",
        "detail": "Fuel cell stacks wear out. A service contract sold with the equipment is a multi-year cost obligation that may not be fully reflected in the year of sale.",
        "watch": "Gross margin on service revenue and the disclosure of warranty and service liabilities."
      },
      {
        "title": "Valuation",
        "severity": "High",
        "detail": "78.4x EV/EBITDA and 12.8x sales leave little room for a growth disappointment, and the earnings base is only a year old.",
        "watch": "The gap between trailing EBITDA and the consensus for next year."
      },
      {
        "title": "Dependence on grid delays",
        "severity": "Medium",
        "detail": "The product's advantage is speed relative to a utility connection. Faster interconnection or cheaper grid power reduces the premium customers will pay.",
        "watch": "Interconnection timelines in the markets where Bloom sells and the pricing relative to grid power."
      },
      {
        "title": "Fuel and permitting",
        "severity": "Medium",
        "detail": "The units need a gas supply and a permit to operate on site. Either can delay a project that was sold on speed.",
        "watch": "Project conversion timelines and any regulatory change to on-site generation."
      },
      {
        "title": "Reported profit versus operating profit",
        "severity": "Medium",
        "detail": "A 28.1% net margin against a 14.9% operating margin means non-operating items are a large part of reported earnings.",
        "watch": "The reconciliation between operating income and net income each quarter."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin",
        "detail": "The measure that reflects the manufacturing and service business rather than the reported net figure."
      },
      {
        "title": "Free cash flow",
        "detail": "One year of positive cash flow is not a track record. Watch whether it survives a slower order quarter."
      },
      {
        "title": "Installed base",
        "detail": "Service revenue depends on the number of units in the field, not the number sold this quarter."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Bloom Energy sells on-site fuel cell power, mostly to customers who need electricity faster than the grid can provide it. Revenue is $3.81B, up 112.2%, operating margin is 14.9% and free cash flow is $436.7M. After years of losses and cash burn, the business is now funding itself.",
      "The educational point is the difference between a technology that is finally working and a valuation that assumes it keeps working. The operating turnaround is visible in six consecutive quarters of margin improvement. The price is visible in a 78.4x EV/EBITDA multiple that requires the growth to continue for years. Both facts are in the same report.",
      "What is not known is how much of the revenue comes from data centres, how large the future service obligation is relative to the equipment margin, and whether the near-term pause implied by the quarterly estimates is a blip or the start of a slower phase. The AI build-out is a genuine source of demand for on-site power; it is not the only thing that determines whether this business earns its cost of capital."
    ],
    "questions": [
      "What share of revenue comes from data-centre customers rather than industrial and institutional ones?",
      "How much of the service revenue is consumed by stack replacements over the contract life?",
      "What happens to demand if a utility can connect a campus in two years instead of five?",
      "How much of the reported net income comes from operations rather than from below the line?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
