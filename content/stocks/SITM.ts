import type { StockStory } from "./types";

export const SITM: StockStory = {
  ticker: "SITM",
  kicker: "Semiconductors · Timing and oscillators",
  title: "SiTime replaced quartz with silicon, and the profit has not caught up",
  dek: "Revenue went from $144.0M in FY2023 to $683.0M on a trailing basis. Operating margin is 0.9%, and $994.8M of net debt sits between a 56.2% gross margin and the bottom line.",
  readingMinutes: 9,
  takeaways: [
    "Revenue grew from $144.0M in FY2023 to $683.0M on a trailing basis, a 142.6% year-over-year increase.",
    "Operating margin is 0.9% on a trailing basis and 2.8% in the latest quarter, despite a 56.2% gross margin.",
    "Net debt of $994.8M is 8.8x EBITDA, a heavy load for a company with 377 employees.",
    "The shares trade at 476.0x trailing earnings and 120.7x EV/EBITDA, multiples that only make sense on forward estimates.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1451809/000145180926000012/sitm-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001451809&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Every digital circuit needs a clock, and most clocks have been built from quartz for the better part of a century. SiTime builds them from silicon instead: a MEMS resonator fabricated on a semiconductor process, paired with a clock integrated circuit and packaged as an oscillator. The argument for the substitution is physical. A silicon resonator is smaller, survives shock and vibration better, and can be programmed at the factory or in the field, which matters for automotive, industrial and communications equipment that has to work across temperature for a decade.",
      "The company sells through distributors and resellers into communications and enterprise, automotive, industrial, IoT, mobile, consumer, and aerospace and defence. It employs 377 people and is headquartered in Santa Clara, California, with a manufacturing model built on partners rather than its own fabs. The end markets are fragmented, which is a strength for a component supplier: no single customer's product cycle should decide the year.",
      "The trailing numbers are the puzzle. Revenue of $683.0M was up 142.6% year over year, the latest quarter brought in $298.7M, and yet the operating margin is 0.9% and the net margin 3.9%. Diluted EPS is $1.00. At $416.92 the shares sit about 26% of the way up a 52-week range of $243.68 to $901.81, on a $12.60B market capitalisation.",
    ],
    quote:
      "A timing device is a small fraction of a bill of materials and a large fraction of the field failures if it drifts. That is the argument for paying more for a better oscillator.",
  },
  whatItDoes: {
    paragraphs: [
      "The product set is a hierarchy. At the bottom is the resonator, the vibrating element that generates a reference frequency. Above it sits the clock IC that drives the resonator and shapes the output. At the top is the packaged oscillator that a customer solders onto a board. SiTime sells all three levels, which means it can supply a discrete component to a customer who wants to design the rest, or a finished oscillator to one who wants a single part number.",
      "The applications are chosen for difficulty rather than size. Automotive electronics need timing that does not drift over temperature and does not fail from vibration. Communications infrastructure needs very low noise so that a radio or a SerDes link can lock. Industrial equipment needs a part that will still be available in ten years. Those requirements are where a programmable silicon resonator wins against a fixed quartz blank.",
      "The distribution model matters for the economics. Selling through distributors and resellers means a broad customer base can be reached without a large direct sales force, and it means volume arrives as many small orders rather than a few contracts. That structure supports a 56.2% gross margin while keeping the fixed cost base small enough for 377 employees to run.",
    ],
    bullets: [
      {
        title: "Resonators",
        detail:
          "The MEMS element that replaces a quartz blank. Small, shock-resistant and manufactured on a semiconductor process.",
      },
      {
        title: "Clock ICs",
        detail:
          "The circuit that drives the resonator and produces the output frequency. Programmability is the differentiator.",
      },
      {
        title: "Oscillators",
        detail:
          "The packaged part a customer places on a board. The highest-value form of the product and the one closest to the design decision.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin of 56.2% is the healthy part of the model. A silicon resonator costs less to produce at volume than a precision quartz part, and the programmable architecture means one design can serve many frequencies. That is a real cost advantage, and it is why the company has been able to take share while holding price.",
      "The operating line is where the model breaks down. Operating margin of 0.9% against a 56.2% gross margin means operating expense is consuming almost the entire contribution. Research and development, applications engineering and the field support needed to displace an entrenched incumbent technology are all expensive, and they have to be spent before the revenue arrives.",
      "The capital structure adds a second claim on the business. Net debt of $994.8M, at 8.8x EBITDA, is unusual for a company of this size and this profitability. It means the income statement carries a financing cost that a debt-free competitor does not, and it means the equity is leveraged to any change in operating profit. The trailing net margin of 3.9% sits slightly above the operating margin, so non-operating items are not currently a net drag, but the debt is the reason the balance sheet deserves as much attention as the growth rate.",
    ],
  },
  growth: {
    paragraphs: [
      "The revenue history is a cycle with a structural story underneath it. Revenue was $218.8M in FY2021, $283.6M in FY2022, then $144.0M in FY2023 as the inventory correction hit, $202.7M in FY2024 and $326.7M in FY2025. The trailing figure of $683.0M and the latest quarter of $298.7M are a different order of magnitude, which suggests the customer base or the product scope changed rather than the cycle simply turned.",
      "The sequential quarterly path makes that explicit. Revenue went from $69.5M in Q2 FY25 to $83.6M, $113.3M, $113.6M, $157.4M and then $298.7M in Q3 FY26. A doubling in a single quarter is not a normal oscillator cycle. Whatever produced it, the reader should treat the trailing growth rate of 142.6% as a one-time reset rather than a run rate.",
      "Third-party estimates assume the new level holds and grows: $336.6M of revenue next quarter, $906.4M for the current fiscal year and $1.44B next year, with EPS of $12.73 and $18.24. The revenue path is a plateau at the new level. The EPS path is not a plateau at all.",
    ],
    bullets: [
      {
        title: "Quartz displacement",
        detail:
          "Each socket converted from a quartz oscillator to a silicon one adds a customer that does not switch back.",
      },
      {
        title: "Automotive and industrial",
        detail:
          "Long design cycles and qualification requirements make these the stickiest end markets.",
      },
      {
        title: "Programmability",
        detail:
          "One silicon design can serve many frequencies, which lowers inventory risk for distributors and customers.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows how far the company has travelled and how little of it reached the bottom line. Operating income was $32.8M in FY2021, $16.1M in FY2022, then -$107.2M, -$115.2M and -$67.0M. Even in FY2025, with revenue at a record $326.7M, the operating loss was $67.0M. This is a company that has bought growth with operating expense.",
      "The quarterly series shows the inflection, and also its limits. Operating margin went from -35.4% in Q2 FY25 to -19.2%, 1.6%, -10.9%, 5.2% and 2.8% in Q3 FY26. Revenue in that last quarter more than doubled sequentially, but the operating margin fell from 5.2% to 2.8% and net income from $18.2M to $4.4M. Incremental revenue arrived with less incremental margin, not more.",
      "That combination is the single most important observation in the dataset. A business with a 56.2% gross margin should convert a doubling of revenue into a large profit step. It did not. Either the cost of that revenue was much higher than the gross margin implies, or something below the gross line absorbed the contribution. Until that is explained, the 476.0x trailing multiple is being applied to a number that does not describe the current business.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $41.4M on a trailing basis, a 6.1% margin, and the annual record is erratic: $28.2M, $8.0M, -$0.9M, -$13.0M and $35.1M. For a fabless company with a 56.2% gross margin, those are low numbers, and they say that cash is being consumed by something other than capital expenditure.",
      "Net debt of $994.8M explains part of the gap. Interest has to be paid before free cash flow is calculated, and 8.8x EBITDA is a ratio that constrains what the company can do in a downturn. The free-cash-flow yield of 0.3% and the price-to-free-cash-flow multiple of 304.0x are the market's way of saying that current cash generation is not the basis for the valuation.",
      "What the cash flow does support is the operating plan: the company can fund development and field support at the current scale. What it does not support is a long period of margin disappointment. A leveraged balance sheet and a 6.1% cash margin leave little room for a revenue miss.",
    ],
  },
  valuation: {
    paragraphs: [
      "The multiples are extreme by any standard: 476.0x trailing earnings, 120.7x EV/EBITDA, 19.9x sales and 304.0x free cash flow, for a 0.3% free-cash-flow yield. None of those can be justified by the trailing business. They are forward multiples in disguise, and the disguise is thin.",
      "The forward arithmetic is where the argument lives. Consensus EPS of $12.73 for this fiscal year against trailing EPS of $1.00 is not a growth assumption; it is an assumption that the cost structure stops absorbing the gross profit. If that happens, the trailing multiple collapses without the share price moving. If it does not, the multiple stays where it is and the price has to adjust.",
      "Stockmonk does not publish a target price. The peer comparison is of limited use here because no other company in the table has a comparable debt load and margin structure; 120.7x EV/EBITDA is the highest in the group by a wide margin.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twelve analysts contribute to the consensus, with a mean target of $713.75 and a range of $425.00 to $900.00. The range is wide in absolute terms and every point in it is above the $416.92 close, which reflects how difficult it is to anchor a valuation on near-zero earnings.",
      "The estimate path is the story. After $0.14 of EPS in Q3 FY26, the consensus expects $4.77 next quarter and $4.20 the quarter after, on revenue of $336.6M and $331.1M. Note the shape: revenue is expected to plateau while EPS multiplies. That is a margin forecast, not a demand forecast, and it is the most aggressive assumption in the dataset.",
      "For the full year the consensus is $906.4M of revenue and $12.73 of EPS, then $1.44B and $18.24. These are third-party forecasts. A reader should ask what operating margin is embedded in $12.73, because the trailing margin is 0.9% and the gap between the two is the entire investment case.",
    ],
  },
  risks: {
    intro:
      "SiTime carries more financial risk than its growth rate suggests. The leverage is real, the operating margin is thin, and the valuation depends on a margin recovery that has not yet appeared.",
    items: [
      {
        title: "Margin conversion failure",
        severity: "High",
        detail:
          "Revenue more than doubled sequentially in Q3 FY26 while the operating margin fell from 5.2% to 2.8%. If a 56.2% gross margin cannot produce operating leverage at this scale, the forward estimates are unreachable.",
        watch:
          "Operating margin each quarter and the ratio of operating expense to revenue.",
      },
      {
        title: "Leverage",
        severity: "High",
        detail:
          "Net debt of $994.8M is 8.8x EBITDA. A revenue miss reduces EBITDA and raises that ratio at the same time, which is the wrong direction for a company with a 6.1% cash margin.",
        watch:
          "Net debt to EBITDA, interest cost and any refinancing disclosure.",
      },
      {
        title: "One-quarter revenue concentration",
        severity: "High",
        detail:
          "The step from $157.4M to $298.7M in a single quarter is not typical oscillator demand. If it came from a narrow set of programmes, it can reverse as quickly.",
        watch:
          "Sequential revenue and any disclosure about large customers or distributor inventory.",
      },
      {
        title: "Technology substitution risk in reverse",
        severity: "Medium",
        detail:
          "The business exists because silicon can replace quartz. Incumbent timing suppliers can improve their own parts, and the switching argument weakens if the performance gap narrows.",
        watch:
          "Gross margin and design-win commentary at automotive and communications customers.",
      },
      {
        title: "Inventory in the channel",
        severity: "Medium",
        detail:
          "Selling through distributors means revenue can be pulled forward by channel stocking. The FY2023 collapse from $283.6M to $144.0M shows how violent the unwind can be.",
        watch:
          "Distributor inventory commentary and days of inventory.",
      },
      {
        title: "Valuation sensitivity",
        severity: "Medium",
        detail:
          "At 120.7x EV/EBITDA, small changes in the earnings denominator produce large changes in the implied value. The shares have traded between $243.68 and $901.81 in a year.",
        watch:
          "The gap between trailing and forward earnings, and the dispersion of analyst estimates.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The only variable that can justify the forward estimates, and the one that has not moved.",
      },
      {
        title: "Net debt",
        detail:
          "$994.8M at 8.8x EBITDA leaves little room for a slow quarter.",
      },
      {
        title: "Sequential revenue durability",
        detail:
          "Whether the $298.7M quarter becomes a base or a spike decides the next two years.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "SiTime has a genuine technology substitution story, a 56.2% gross margin and revenue that has multiplied. It also has a 0.9% operating margin, $994.8M of net debt and a valuation that assumes a profitability inflection the reported accounts have not delivered.",
      "Several facts would change the analysis and none of them is in the dataset: what caused revenue to double in a single quarter, whether that level is a base or a spike, and how much of the 56.2% gross margin survives the next product mix.",
      "Growth and progress are different things. Tripling sales while the operating margin sits at 0.9% and the balance sheet carries $994.8M of debt is not the same achievement as tripling sales with a widening margin, and only one of those supports the current price.",
    ],
    questions: [
      "What produced the jump from $157.4M to $298.7M of quarterly revenue?",
      "Why did operating profit fall when revenue doubled?",
      "What operating margin is embedded in the consensus EPS of $12.73?",
      "How much of the $994.8M net debt matures in the next three years?",
    ],
  },
};
