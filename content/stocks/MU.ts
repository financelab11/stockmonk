import type { StockStory } from "./types";

export const MU: StockStory = {
  "ticker": "MU",
  "kicker": "Semiconductors · Memory and storage",
  "title": "Micron's 80% gross margin is a price, not a permanent feature",
  "dek": "Memory is the most violently cyclical business in the chip industry, and the current numbers sit at the top of a very steep curve.",
  "readingMinutes": 9,
  "takeaways": [
    "Fourth-quarter revenue of $54.2B and an 80.7% operating margin show memory prices, not unit costs, drove the latest step-change.",
    "Trailing free cash flow reached $59.0B, 44.3% of revenue, and the balance sheet swung to $70.2B of net cash.",
    "The 9.5x trailing multiple is below every large-cap comparable because the earnings base sits at a cyclical peak.",
    "Consensus puts fiscal 2027 revenue at $275.9B and EPS at $176.50, assuming high-bandwidth memory holds its pricing."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/723125/000072312526000023/mu-20260903.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000723125&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Micron's fiscal fourth quarter, reported on 3 September 2026, produced $54.2B of revenue, an 80.7% operating margin and $32.93 of diluted EPS. Revenue was roughly 379% higher than the $11.3B booked a year earlier, and the sequential step from $41.5B in the third quarter was just as violent. The result matters because it converts a memory shortage into balance-sheet capacity: net cash moved from $157M of net debt at the end of fiscal 2025 to $70.2B of net cash.",
      "The mechanism is familiar from every memory upturn. A fab's cost base is fixed once the tools are installed, so when DRAM and high-bandwidth memory are scarce the price rises faster than depreciation and wafer cost. Micron's operating margin of 74.6% leaves only about six points of revenue between gross profit and operating profit, which is why incremental revenue falls almost directly to the bottom line. The difference this cycle is demand: accelerators consume far more memory per system, and high-bandwidth stacks are qualified with the accelerator designer before they ship.",
      "The valuation argument is not whether 9.5x is cheap. It is whether the denominator survives. At $712 the shares carry 6.8x EV/EBITDA and 13.7x free cash flow, against a 25.5x peer EV/EBITDA and a 28.7% peer FCF margin; Micron's cash generation is the higher of the two, which is why the earnings multiple looks so low. A single-digit P/E on peak earnings can be more expensive than a high multiple on mid-cycle earnings, and the $70.2B cash pile is what lets Micron keep building fabs when prices turn."
    ],
    "quote": "An 80.7% operating margin is a price signal from a shortage, not proof that the memory business has been rebuilt."
  },
  "whatItDoes": {
    "paragraphs": [
      "Micron sells into four product areas: DRAM, high-bandwidth memory, NAND storage and a collection of embedded and specialty memories. DRAM is the largest. High-bandwidth memory is the fastest-growing, because every AI accelerator needs stacks of it and the stack has to be qualified with the accelerator designer before it ships.",
      "Customers are the companies that assemble servers, PCs and phones, plus the hyperscalers that buy memory directly and the automotive and industrial buyers who need long-lived, qualified parts. The memory maker sells to a relatively small number of very large purchasers, and the price is often negotiated quarterly or under contract.",
      "Manufacturing is the constraint. A memory fab costs billions of dollars, takes years to build, and produces output that is essentially a commodity once the process is qualified. That combination is why the industry alternates between periods of shortage and periods of oversupply."
    ],
    "bullets": [
      {
        "title": "DRAM and HBM",
        "detail": "Working memory for servers, PCs and accelerators. High-bandwidth memory is the premium tier and the tightest part of the market."
      },
      {
        "title": "NAND",
        "detail": "Storage for devices, data centers and removable media. More fragmented competition and a wider spread of cost positions."
      },
      {
        "title": "Embedded and specialty",
        "detail": "Long-lifecycle parts for automotive and industrial customers, where qualification takes years and switching is slow."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "A memory fab has a fixed cost base: the building, the tools and the depreciation arrive before a single wafer is sold. When demand exceeds supply, price rises faster than unit cost, and almost all of the increase falls to operating profit. That is the mechanism behind an 80.7% gross margin.",
      "The operating margin of 74.6% shows how little sits between gross profit and operating profit — about six points of revenue, covering research, sales and administration. In a shortage, incremental revenue is almost pure profit; in a glut, the same cost base produces losses on falling prices. FY2023 is the proof: operating income of -$5.75B on $15.54B of revenue.",
      "The demand side has changed shape. Memory used to be sold mostly into PCs and phones, where the cycle followed consumer replacement. AI accelerators consume far more memory per system, and high-bandwidth memory is sold under contracts that are agreed earlier and run longer. That does not repeal the cycle; it changes its timing and its amplitude."
    ]
  },
  "growth": {
    "paragraphs": [
      "The quarterly revenue path tells the story more clearly than any annual growth rate: $13.6B, $23.9B, $41.5B and $54.2B through fiscal 2026. That is a fourfold increase in twelve months, and it came from price and mix as much as from bits shipped. Third-party estimates extend the curve to $61.8B for the November quarter and $67.2B for the following one, which implies the shortage is expected to persist into calendar 2027.",
      "Mix is the second lever. The largest reportable unit generated 32.3% of revenue, with the next two at 28.2% and 27.5%, so no single product line dominates the total. High-bandwidth memory matters disproportionately because it is contracted earlier, qualified per accelerator generation and priced at a premium to commodity DRAM. The United States accounted for 68.6% of revenue, which reduces the immediate exposure to Chinese demand but does not remove export-control risk.",
      "Durability is the open question. Fiscal 2027 consensus of $275.9B would double revenue again, and fiscal 2028 at $320.1B assumes a further 16.0% gain rather than a downcycle. The question is whether two clean up-years can pass without a supply response, and the industry's capex is rising everywhere. The 60-day EPS revision of 13.0% shows estimates chasing price rather than forecasting it."
    ],
    "bullets": [
      {
        "title": "Price before volume",
        "detail": "The $54.2B quarter came with an 80.7% operating margin, so the increment is price-led; a flattening contract price would hit earnings before it hit revenue."
      },
      {
        "title": "Contract mix",
        "detail": "High-bandwidth memory is qualified per accelerator generation and sold earlier than commodity DRAM, which lengthens the order book but raises the cost of a missed qualification."
      },
      {
        "title": "Supply response",
        "detail": "Capex of $30.7B in fiscal 2026 is the next industry supply; the question is how much of it arrives after demand has already been served."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Margin progression is almost vertical. Gross margin of 80.7% becomes a 74.6% operating margin, a 63.8% net margin and $74.33 of fiscal 2026 EPS. The latest quarter was stronger still at an 80.7% operating margin and a 69.5% net margin, with $32.93 of EPS. Almost none of the improvement came from cost discipline: it came from selling the same wafer at a higher price.",
      "The historical range is the warning. Fiscal 2023 produced a negative 9.1% gross margin, a negative 37.0% operating margin and a $5.34 loss per share on $15.5B of revenue. Return on invested capital went from -8.1% that year to 81.4% in fiscal 2026. A business that can swing 90 points of gross margin in three years is not a compounder, and the 59.7% trailing ROIC should be read as a cycle statistic rather than a steady-state return.",
      "Against Nvidia's 65.2% operating margin and Broadcom's 48.0%, Micron's 74.6% looks like the highest-quality business in the group. It is not. Nvidia's margin comes from a platform and software ecosystem; Micron's comes from a commodity price that every competitor can respond to with capacity. The comparison that matters is Micron's own fiscal 2024, when operating margin was 5.2%. The market's low multiple is a verdict on that comparison, not on the quality of Micron's fabs."
    ]
  },
  "cash": {
    "paragraphs": [
      "Fiscal 2026 operating cash flow was $89.7B against $30.7B of capex, leaving $59.0B of free cash flow, or 44.3% of revenue. That is unusually high for a manufacturer, and it explains how net debt of $157M became net cash of $70.2B in a single year. Interest cover of 937x and net debt/EBITDA of -0.6x make the balance sheet a non-issue.",
      "The cash conversion is clean. Net income was roughly $85B and operating cash flow $89.7B, so working capital did not absorb the upcycle; capex did, and even that was only 23% of revenue. The contrast with fiscal 2023, when free cash flow was -$6.1B, is the whole memory cycle in two lines. The balance sheet, not the income statement, is where the upcycle is most visible.",
      "Capital allocation now matters more than solvency. Capex of $30.7B is the highest in the company's history and is aimed at capacity that will arrive into an unknown price environment. A $70.2B cash balance gives Micron the option to keep spending through a downturn, which is when market position is actually won. It does not tell you whether the spending earns a return."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At $712 the equity is valued at $805.2B, or 9.5x trailing earnings, 6.8x EV/EBITDA, 5.5x sales and 13.7x free cash flow. The peer medians are 32.0x earnings and 25.5x EBITDA, while Micron's 44.3% FCF margin exceeds the peer 28.7%, so the earnings discount is not marginal. It is the market's statement that $74.33 of EPS is not a sustainable earnings number. On sales the multiple is 5.5x, low against Arista's 18.0x and KLA's 13.3x, but those businesses do not sell a commodity.",
      "The forward arithmetic makes the same point from the other side. Fiscal 2027 consensus EPS of $176.50 is 4.0x the current price; fiscal 2028 at $207.76 is 3.4x. Those multiples are not a valuation of the business, they are a price for the cycle. If mid-cycle EPS were a quarter of the fiscal 2026 figure, the shares would be on roughly 38x.",
      "Nvidia trades at 20.9x with an 83.4% growth rate and a 65.2% operating margin; Broadcom at 38.6x with 48.7% growth. Micron is cheaper than both because its earnings are less durable, not because the market has missed something. The 60-day EPS upgrade of 13.3% shows how fast the estimate can move in both directions. Neither comparison settles whether high-bandwidth memory changes the cycle; it only shows how little the market will pay for the possibility."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Yahoo Finance's survey, dated 18 November 2026, covers 45 analysts with a mean target of $1.6K and a range of $361 to $3.0K. The views are overwhelmingly positive, with a small neutral minority and no negative ones. The mean sits about 124% above the $712 price, which is less a forecast than a restatement of spot memory prices.",
      "The estimates have moved with the cycle. The 90-day EPS revision is 13.3% and the 60-day is 13.0%, while the 30-day is 0.3% and the seven-day is flat, so the upgrade cycle has lost momentum even as the target stays high. Fiscal 2027 revenue of $275.9B and EPS of $176.50 implicitly assume high-bandwidth memory keeps its premium and that no competitor adds enough capacity to break the shortage."
    ]
  },
  "risks": {
    "intro": "Micron's risks are the risks of a commodity producer with a fixed cost base: price, capacity and the timing of both.",
    "items": [
      {
        "title": "The cycle turns",
        "severity": "High",
        "detail": "FY2023 showed what a downcycle looks like: revenue halved, operating income went negative and free cash flow turned negative. Nothing in the current cost structure prevents a repeat.",
        "watch": "Contract prices for DRAM and NAND, and the direction of gross margin."
      },
      {
        "title": "Industry capacity additions",
        "severity": "High",
        "detail": "Every producer is adding wafers at the same time. Supply that arrives together can end a shortage quickly.",
        "watch": "Industry capital spending and wafer start announcements."
      },
      {
        "title": "High-bandwidth memory qualification",
        "severity": "High",
        "detail": "The premium part of the market depends on qualifying at each accelerator generation. A missed qualification removes the highest-margin revenue.",
        "watch": "Customer qualifications and the mix of high-bandwidth memory within DRAM revenue."
      },
      {
        "title": "Depreciation and capital intensity",
        "severity": "Medium",
        "detail": "Fabs depreciate whether they run at full utilization or not. Idle capacity is expensive.",
        "watch": "Utilization rates and capital expenditure guidance."
      },
      {
        "title": "Export controls",
        "severity": "Medium",
        "detail": "Rules on selling advanced memory into certain markets can remove demand that the capacity was built to serve.",
        "watch": "License changes and the geographic revenue split."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "The fastest-moving indicator of the price environment. An 80% margin is a signal about scarcity, not efficiency."
      },
      {
        "title": "Inventory",
        "detail": "Rising inventory across the industry usually precedes a price decline by a quarter or two."
      },
      {
        "title": "Capital spending",
        "detail": "The industry's collective capex is the supply that arrives two years later."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Micron is a well-run manufacturer in the middle of an extraordinary price environment. Revenue of $133.19B, an operating margin of 74.6% and free cash flow of $58.96B are the result of scarce memory being sold into an AI build-out, not of a permanently better business model.",
      "The balance sheet is genuinely stronger than it was: $38.26B of net cash against a net debt position in the last downturn. That matters because it determines whether the company can keep investing when prices fall, which is when market position is actually won.",
      "The educational point is that a single-digit P/E can be the most expensive multiple in the market. When earnings are at a cyclical peak, the multiple is low because the denominator is about to change. Whether high-bandwidth memory alters that pattern is the question the reader has to answer."
    ],
    "questions": [
      "What share of DRAM revenue now comes from high-bandwidth memory under contract?",
      "How much industry capacity is under construction for delivery in the next two years?",
      "What does mid-cycle gross margin look like across a full cycle?",
      "How much of the $320.06B next-year estimate depends on prices rather than bits shipped?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
