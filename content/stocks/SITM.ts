import type { StockStory } from "./types";

export const SITM: StockStory = {
  "ticker": "SITM",
  "kicker": "Semiconductors · Timing and oscillators",
  "title": "SiTime replaced quartz with silicon, and the profit has not caught up",
  "dek": "Revenue went from $144.0M in FY2023 to $683.0M on a trailing basis. Operating margin is 0.9%, and $994.8M of net debt sits between a 56.2% gross margin and the bottom line.",
  "readingMinutes": 9,
  "takeaways": [
    "September quarter revenue nearly doubled to $298.7M while the operating margin fell from 5.2% to 2.8% and free cash flow turned negative.",
    "Gross margin of 56.2% produced a 0.9% operating margin and a 0.2% return on invested capital, against a 9.4% peer median.",
    "At 18.7x sales and 493.8x earnings the shares are valued on revenue because the profit base is close to zero.",
    "The $12.73 current-year EPS estimate is more than twelve times the roughly $1.00 earned across the last four quarters."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1451809/000145180926000012/sitm-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001451809&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Revenue nearly doubled in the September 2026 quarter, from $157.4M to $298.7M, and the operating margin fell from 5.2% to 2.8%. Free cash flow turned negative at -$16.7M. Trailing revenue is $683.0M, up 142.6%, and gross margin is 56.2%. Growth of that size without operating leverage is the anomaly the accounts present, and it is the reason the shares carry a 493.8x earnings multiple. A company that nearly doubles revenue and still earns a 0.9% operating margin is not through the investment phase of the substitution.",
      "SiTime sells silicon timing in three forms: the MEMS resonator that replaces a quartz blank, the clock IC that drives it, and the packaged oscillator a customer places on a board. The applications are chosen for difficulty, from automotive timing that must not drift to communications links that need low noise and industrial equipment that must remain available for a decade. A 56.2% gross margin says the substitution economics work at the product level; a 0.9% operating margin says the cost of displacing an entrenched technology does not yet.",
      "At 18.7x sales and 113.2x EBITDA, the shares are priced on the revenue line because the earnings line is almost empty. The current-year EPS estimate of $12.73 would put them at 34x, below the 54.4x peer median, but that estimate assumes a profitability step-change rather than an extension of the trend. Against that, the accounts show a 0.9% operating margin and a 6.1% cash margin; the multiple is a wager on which of those two pictures is temporary."
    ],
    "quote": "SiTime tripled revenue and still earned a 0.9% operating margin; the shares are a wager on the second half of that sentence changing."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product set is a hierarchy. At the bottom is the resonator, the vibrating element that generates a reference frequency. Above it sits the clock IC that drives the resonator and shapes the output. At the top is the packaged oscillator that a customer solders onto a board. SiTime sells all three levels, which means it can supply a discrete component to a customer who wants to design the rest, or a finished oscillator to one who wants a single part number.",
      "The applications are chosen for difficulty rather than size. Automotive electronics need timing that does not drift over temperature and does not fail from vibration. Communications infrastructure needs very low noise so that a radio or a SerDes link can lock. Industrial equipment needs a part that will still be available in ten years. Those requirements are where a programmable silicon resonator wins against a fixed quartz blank.",
      "The distribution model matters for the economics. Selling through distributors and resellers means a broad customer base can be reached without a large direct sales force, and it means volume arrives as many small orders rather than a few contracts. That structure supports a 56.2% gross margin while keeping the fixed cost base small enough for 377 employees to run."
    ],
    "bullets": [
      {
        "title": "Resonators",
        "detail": "The MEMS element that replaces a quartz blank. Small, shock-resistant and manufactured on a semiconductor process."
      },
      {
        "title": "Clock ICs",
        "detail": "The circuit that drives the resonator and produces the output frequency. Programmability is the differentiator."
      },
      {
        "title": "Oscillators",
        "detail": "The packaged part a customer places on a board. The highest-value form of the product and the one closest to the design decision."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Gross margin of 56.2% is the healthy part of the model. A silicon resonator costs less to produce at volume than a precision quartz part, and the programmable architecture means one design can serve many frequencies. That is a real cost advantage, and it is why the company has been able to take share while holding price.",
      "The operating line is where the model breaks down. Operating margin of 0.9% against a 56.2% gross margin means operating expense is consuming almost the entire contribution. Research and development, applications engineering and the field support needed to displace an entrenched incumbent technology are all expensive, and they have to be spent before the revenue arrives.",
      "The capital structure adds a second claim on the business. Net debt of $994.8M, at 8.8x EBITDA, is unusual for a company of this size and this profitability. It means the income statement carries a financing cost that a debt-free competitor does not, and it means the equity is leveraged to any change in operating profit. The trailing net margin of 3.9% sits slightly above the operating margin, so non-operating items are not currently a net drag, but the debt is the reason the balance sheet deserves as much attention as the growth rate."
    ]
  },
  "growth": {
    "paragraphs": [
      "Timing sockets are won on performance, and the substitution from quartz to silicon is the long driver. A programmable resonator can serve many frequencies from one design and survives shock and vibration better than a quartz blank, which matters in automotive and communications equipment. Revenue went from $144.0M in FY2023 to $326.7M in FY2025 and $683.0M trailing, and the September quarter alone was 3.6x the year-earlier quarter. That is adoption, not a normal cycle.",
      "Forecast revenue continues the adoption at a slower rate. Revenue is forecast at $906.4M for the current year, up 177.5%, and $1.4B next, up 59.1%. The step from $157.4M to $298.7M in one quarter is not typical oscillator demand, and the company does not disclose how much came from a small number of programmes. If it was a single customer's ramp, the estimate path is fragile; if it was broad, the operating margin should be rising, and it is not."
    ],
    "bullets": [
      {
        "title": "Silicon substitution",
        "detail": "Programmable MEMS timing replaces quartz in applications where shock, size or temperature drift decide the design."
      },
      {
        "title": "AI and data-centre timing",
        "detail": "Low-noise oscillators sit inside communications and compute equipment, the fastest-growing part of the customer base."
      },
      {
        "title": "Distribution",
        "detail": "Selling through distributors reaches many small customers, but it also means channel inventory can flatter or distort a quarter."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Operating expense consumed almost the entire gross profit. Gross margin is 56.2%, but the operating margin is 0.9%, and the quarterly path has been -10.9%, 5.2% and 2.8% in the last three reports. Revenue rose 89.7% in the September quarter while operating income was broadly unchanged, which means the incremental gross profit went to research, applications engineering and field support. Net margin of 3.9% is above the operating margin because non-operating items contributed.",
      "Returns are close to zero. ROIC is 0.2% and ROE 0.8%, against peer medians of 9.4% and 8.3%, and the 56.2% gross margin has not translated into a return anywhere near the peer median. EPS of $0.14 in the September quarter compares with $0.66 in June, so the profit base is not compounding with revenue. The distance between the product economics and the company economics is the whole story."
    ]
  },
  "cash": {
    "paragraphs": [
      "Capex consumed most of the cash the business generated. FY2025 produced $87.2M of operating cash flow and $52.0M of capex, a 15.9% capital intensity, leaving $35.1M of free cash flow. The trailing figure is $41.4M, or 6.1% of revenue, and the September quarter was -$16.7M despite record revenue. Inventory and receivables are growing faster than sales, which is what a ramp of this shape usually does to a balance sheet.",
      "The capital structure is the constraint. Interest cover of 0.8x means operating profit does not cover the interest line, and the balance-sheet figures published across the annual and trailing periods do not reconcile, so net debt to EBITDA should be treated as unreliable here. What is clear is that the equity is leveraged to any change in operating profit. No distribution is reported, and the funding requirement sits with the debt and the cash balance."
    ]
  },
  "valuation": {
    "paragraphs": [
      "A 493.8x earnings multiple and 113.2x EBITDA are not valuation measures in any ordinary sense; they are descriptions of a near-zero denominator. EV/Sales of 18.7x, second only to Lattice in the group, and a 0.3% free-cash-flow yield are the numbers that describe what is being paid. The peer medians are 54.4x earnings and 30.1x EBITDA, so the premium is not marginal. The 52-week range of $265 to $902 shows how violently the market has repriced the same business.",
      "On the current-year estimate of $12.73 the multiple falls to about 34x, which is below the peer median. That is the bull case in one line: the shares are expensive only on trailing numbers. The estimate is more than twelve times the roughly $1.00 earned across the last four quarters, so it requires a profitability inflection, not a continuation. If the operating margin stays near 1%, no revenue estimate makes the multiple ordinary."
    ]
  },
  "analysts": {
    "paragraphs": [
      "The 18 November 2026 Yahoo Finance mean of $714 against $433 implies a 65% gain, and the range of $425 to $900 spans 2.1x. All twelve analysts sit on the positive side, four at the most constructive end and eight less emphatic. The revision trend is extraordinary: EPS estimates rose 13.7% over seven days and 14.5% over ninety, and the last four quarters beat by 12% to 26%.",
      "The consensus is not a margin forecast so much as a revenue forecast. Current-year revenue of $906.4M is 177.5% above the trailing $683.0M, and the EPS figure follows from an assumed operating leverage that the September quarter did not show. The dispersion reflects that uncertainty: the $425 low target is below the current price, while the $900 high is more than double it. The estimate revision is the only evidence the inflection is starting."
    ]
  },
  "risks": {
    "intro": "SiTime carries more financial risk than its growth rate suggests. The leverage is real, the operating margin is thin, and the valuation depends on a margin recovery that has not yet appeared.",
    "items": [
      {
        "title": "Margin conversion failure",
        "severity": "High",
        "detail": "Revenue more than doubled sequentially in Q3 FY26 while the operating margin fell from 5.2% to 2.8%. If a 56.2% gross margin cannot produce operating leverage at this scale, the forward estimates are unreachable.",
        "watch": "Operating margin each quarter and the ratio of operating expense to revenue."
      },
      {
        "title": "Leverage",
        "severity": "High",
        "detail": "Net debt of $994.8M is 8.8x EBITDA. A revenue miss reduces EBITDA and raises that ratio at the same time, which is the wrong direction for a company with a 6.1% cash margin.",
        "watch": "Net debt to EBITDA, interest cost and any refinancing disclosure."
      },
      {
        "title": "One-quarter revenue concentration",
        "severity": "High",
        "detail": "The step from $157.4M to $298.7M in a single quarter is not typical oscillator demand. If it came from a narrow set of programmes, it can reverse as quickly.",
        "watch": "Sequential revenue and any disclosure about large customers or distributor inventory."
      },
      {
        "title": "Technology substitution risk in reverse",
        "severity": "Medium",
        "detail": "The business exists because silicon can replace quartz. Incumbent timing suppliers can improve their own parts, and the switching argument weakens if the performance gap narrows.",
        "watch": "Gross margin and design-win commentary at automotive and communications customers."
      },
      {
        "title": "Inventory in the channel",
        "severity": "Medium",
        "detail": "Selling through distributors means revenue can be pulled forward by channel stocking. The FY2023 collapse from $283.6M to $144.0M shows how violent the unwind can be.",
        "watch": "Distributor inventory commentary and days of inventory."
      },
      {
        "title": "Valuation sensitivity",
        "severity": "Medium",
        "detail": "At 120.7x EV/EBITDA, small changes in the earnings denominator produce large changes in the implied value. The shares have traded between $243.68 and $901.81 in a year.",
        "watch": "The gap between trailing and forward earnings, and the dispersion of analyst estimates."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin",
        "detail": "The only variable that can justify the forward estimates, and the one that has not moved."
      },
      {
        "title": "Net debt",
        "detail": "$994.8M at 8.8x EBITDA leaves little room for a slow quarter."
      },
      {
        "title": "Sequential revenue durability",
        "detail": "Whether the $298.7M quarter becomes a base or a spike decides the next two years."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "SiTime has a genuine technology substitution story, a 56.2% gross margin and revenue that has multiplied. It also has a 0.9% operating margin, $994.8M of net debt and a valuation that assumes a profitability inflection the reported accounts have not delivered.",
      "Several facts would change the analysis and none of them is in the dataset: what caused revenue to double in a single quarter, whether that level is a base or a spike, and how much of the 56.2% gross margin survives the next product mix.",
      "Growth and progress are different things. Tripling sales while the operating margin sits at 0.9% and the balance sheet carries $994.8M of debt is not the same achievement as tripling sales with a widening margin, and only one of those supports the current price."
    ],
    "questions": [
      "What produced the jump from $157.4M to $298.7M of quarterly revenue?",
      "Why did operating profit fall when revenue doubled?",
      "What operating margin is embedded in the consensus EPS of $12.73?",
      "How much of the $994.8M net debt matures in the next three years?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
