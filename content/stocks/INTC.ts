import type { StockStory } from "./types";

export const INTC: StockStory = {
  "ticker": "INTC",
  "kicker": "Semiconductors · Processors and foundry",
  "title": "Intel pays for its factories whether or not it fills them",
  "dek": "Revenue fell from $79.02B to $52.85B in four years while the manufacturing base stayed. A 39.9% gross margin is what that decision costs, and the recovery is what the share price is paying for.",
  "readingMinutes": 9,
  "takeaways": [
    "Trailing revenue is $59.9B, up 12.1%, but the operating margin is 2.9% and net income is negative.",
    "Q2 FY2026 recorded an $11.03B net loss, which swamps the operating result of the surrounding quarters.",
    "Free cash flow turned positive at $3.8B, and the balance sheet now holds $3.9B of net cash.",
    "At 22.6x EV/EBITDA and 81.8x free cash flow, the shares price a margin recovery that has barely started."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086326000011/intc-20251227.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000050863&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Intel's balance sheet has flipped from net debt to net cash, and that is the most important change in the story. Net cash was $3.9B on a trailing basis, against $9.2B of net debt in FY2025, while trailing revenue rose 12.1% to $59.9B. Q3 FY2026 produced $16.5B at a 15.3% operating margin and $0.60 of EPS, the third consecutive quarter of improvement after a loss in the March quarter. The reported numbers show a recovery, but not yet a normal earnings base.",
      "The business is still dominated by client computing and data centre, which together with networking and edge account for 93.0% of revenue. The United States is 29.8%, China 24.0% and Singapore 18.0%. Foundry is the strategic variable: it would spread fixed manufacturing costs across external customers, but it requires capital spending ahead of demand and customers willing to design around Intel's process. The 39.9% gross margin is the measure of how far that strategy has to travel.",
      "At $58 the shares have no meaningful P/E because trailing earnings are negative. The usable multiples are 22.6x EV/EBITDA, 5.1x sales and 81.8x free cash flow, with a 1.2% free-cash-flow yield. The peer median EV/EBITDA is 25.5x, so the stock is not expensive on that measure. The debate is whether the fab base is an asset that will earn a return or a fixed cost that will keep consuming capital."
    ],
    "quote": "Intel's factories cost the same whether they run at half capacity or near full, and the entire equity case is a bet on the second."
  },
  "whatItDoes": {
    "paragraphs": [
      "The company sells processors for personal computers and servers, chipsets, networking silicon and memory, and it is building a foundry business that would manufacture chips for other companies. The client business supplies PC makers; the data-centre business supplies cloud providers, enterprises and governments. Both depend on Intel's process technology being competitive.",
      "The foundry effort changes the economics. A foundry earns revenue by manufacturing for others, which spreads fixed costs across more volume. It also requires capital spending ahead of demand and a customer base that is willing to design chips around Intel's process. That is a multi-year project, and its success is not visible in a single quarter.",
      "Intel employed 110,600 people at the last count. That headcount reflects a manufacturing organisation with fabs, test facilities and process engineering, not just a design team. It is the main reason the company's cost base is so much heavier than a fabless competitor's."
    ],
    "bullets": [
      {
        "title": "Client computing",
        "detail": "PC processors. A large volume business tied to the corporate and consumer replacement cycle."
      },
      {
        "title": "Data centre",
        "detail": "Server processors. Higher margin than client, and the segment where competition has been most intense."
      },
      {
        "title": "Foundry",
        "detail": "Manufacturing for external customers. Strategically important, capital-hungry and still early."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Chip revenue depends on unit volume, average selling price and mix. A server processor sells for far more than a PC processor, so a shift in mix moves revenue and margin at the same time. The cost of goods includes wafer fabrication, packaging and test, and those costs are largely fixed once the fab is built.",
      "That is why gross margin is the number to watch. At 39.9%, Intel is earning much less per dollar of revenue than a leading-edge manufacturer needs to fund its next generation of capacity. The shortfall is not primarily a pricing problem; it is the cost of running factories at low utilisation and of investing in new process nodes before they generate revenue.",
      "Operating margin of 2.9% and net margin of negative 20.1% diverge because of items below the operating line. A single quarter, Q2 FY2026, recorded a net loss of $11.03B, which is large enough to swamp the operating result of the surrounding quarters. The reader should treat that quarter as an exceptional item until the filing explains it."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue fell from $79.0B in FY2021 to $63.1B, $54.2B, $53.1B and $52.9B in the following four years, then recovered to $59.9B on a trailing basis. The decline has stopped, but the recovery is only four quarters old. Consensus expects $61.7B in FY2026, up 16.8%, and $69.1B in FY2027, up 12.0%. The forecast assumes the client and data-centre businesses recover while foundry begins to contribute.",
      "The mix is concentrated: client computing, data centre and networking and edge are reported together at 93.0% of revenue, with Other Bets at 6.7%. That aggregation hides the split between the high-margin data-centre business and the lower-margin client business, which is the mix variable that matters most. Foundry external revenue is not broken out, so the strategic business cannot be sized from the segment disclosure.",
      "The consensus is a recovery forecast, not a growth forecast. FY2026 EPS of $1.49 is up 254.0% from a depressed base, and FY2027 EPS of $1.79 is up 20.4%. Those numbers assume gross margin expands from 39.9% toward the mid-40s and that the loss-making quarters do not repeat. The estimate is sensitive to utilisation, which is the one variable management cannot fully control."
    ],
    "bullets": [
      {
        "title": "Fab utilisation",
        "detail": "Fixed manufacturing costs dominate the cost of goods. Low utilisation is what turned a high-margin model into a 39.9% gross margin."
      },
      {
        "title": "Process roadmap",
        "detail": "Every product and foundry customer depends on the node being competitive. A delay resets the revenue timeline."
      },
      {
        "title": "Foundry customers",
        "detail": "External volume would spread the fixed cost, but the business is early and the customer commitments are not disclosed."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Gross margin reached 39.9%, operating margin 2.9% and net margin negative 20.1%. The quarterly operating margin went from negative 23.1% in March 2026 to 11.1% in June and 15.3% in September, while EPS went from negative $0.73 to negative $2.16 and then positive $0.60. The June quarter's net loss of $11.03B is the outlier: it came from below the operating line, not from the chip business.",
      "Return on invested capital was 0.8% and return on equity negative 10.5%, against a 22.6% peer median. That gap is the measure of the turnaround still ahead. The asset base is large and the profit base is small, so the return is low even though the operating business has improved. A return to a mid-teens ROIC would require a substantial increase in operating income, not just a better quarter.",
      "AMD is the closest comparison: it trades at 99.9x earnings and 178.5x EV/EBITDA with a 17.7% operating margin, 10.2% ROIC and 41.9% growth. Intel's 2.9% operating margin and 0.8% ROIC are far below that, but its 5.1x sales multiple is the market's estimate of the manufacturing discount. The gap is capital intensity as much as execution, and it will not close until utilisation does."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow after capex was $3.8B, a 6.3% margin, after FY2025 free cash flow of negative $4.9B. The swing came from capex: $14.6B in FY2025 against $9.7B of operating cash flow, down from $24.8B in FY2022 and $25.8B in FY2023. Net cash is $3.9B, so the balance sheet is no longer the constraint it was. The improvement is real, but it depends on holding capex at the lower level.",
      "The capex history is the story. Capital spending was $24.8B in FY2022, $25.8B in FY2023, $23.9B in FY2024 and $14.6B in FY2025. The step-down is what turned free cash flow positive, not a sudden improvement in operating cash flow, which was $9.7B in FY2025 against $8.3B in FY2024. The foundry programme is not finished, so the capex line can rise again.",
      "Capital allocation is now internal investment rather than a shareholder payout. The net cash position gives the company room to fund the foundry build without new equity. The risk is that the capital is committed before the revenue arrives, which is what produced four years of negative free cash flow. The 1.2% free-cash-flow yield is the market's estimate of how long that lasts."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Intel has no trailing P/E because earnings are negative. The usable multiples are 22.6x EV/EBITDA, 5.1x sales and 81.8x free cash flow, with a 1.2% free-cash-flow yield. The peer median EV/EBITDA is 25.5x, so the stock is below the median on that measure. The free-cash-flow multiple is the outlier, and it is high because the cash flow is only beginning to recover.",
      "Forward numbers are high on earnings. FY2026 EPS of $1.49 implies 38.9x, and FY2027 EPS of $1.79 implies 32.4x. Those multiples are not cheap for a company with a 2.9% operating margin, but they are calculated on a depressed earnings base. On a mid-teens operating margin, the multiple would be much lower; on a stalled recovery, it would be higher.",
      "The market is valuing the fab base and the foundry option, not the current earnings. That is a legitimate approach for a capital-intensive turnaround, but it is sensitive to two variables: utilisation and node execution. A return to a 50% gross margin would transform the earnings; a delay would leave the fixed costs stranded. The 5.1x sales multiple is the price of that option."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Forty-three analyst estimates underlie The 18 November 2026 Yahoo Finance snapshot: mean target $91, range $63 to $160. The mean is above the $58 price, but the balance of the analyst views is neutral, which is a contradiction worth noting.",
      "FY2026 estimates are $61.7B of revenue and $1.49 of EPS; FY2027 is $69.1B and $1.79. The consensus assumes the December quarter produces $15.6B and $0.25 of EPS, up 66.0%, which is a modest sequential step from September's $16.5B."
    ]
  },
  "risks": {
    "intro": "Intel's risks are industrial rather than financial. The company has the balance sheet to keep investing; the question is whether the investment produces products customers want to buy.",
    "items": [
      {
        "title": "Process technology execution",
        "severity": "High",
        "detail": "Every product and every foundry customer depends on Intel's manufacturing process being competitive. A delay resets the roadmap and the revenue that goes with it.",
        "watch": "Node introductions, yield commentary and product launch timing."
      },
      {
        "title": "Fab utilisation",
        "severity": "High",
        "detail": "Fixed manufacturing costs dominate the cost of goods. Low utilisation is what turned a high-margin manufacturing model into a 39.9% gross margin.",
        "watch": "Gross margin and capital expenditure against revenue."
      },
      {
        "title": "Competitive share loss",
        "severity": "High",
        "detail": "Server and PC processors face strong competitors with better margins and, in some generations, better performance per watt.",
        "watch": "Data-centre revenue and unit share disclosures."
      },
      {
        "title": "Capital intensity",
        "severity": "Medium",
        "detail": "Free cash flow was negative for four years because capital spending outran cash generation. The programme is not finished.",
        "watch": "Capital expenditure, depreciation and free cash flow."
      },
      {
        "title": "Dividend coverage",
        "severity": "Medium",
        "detail": "A 5.0% yield on negative earnings is a cash commitment that may compete with capital spending.",
        "watch": "Dividends paid against free cash flow."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "39.9% is the recovery's scoreboard. A move back toward its historical range would change the earnings base."
      },
      {
        "title": "Free cash flow",
        "detail": "Positive $3.77B is the first sign that the capital cycle is maturing."
      },
      {
        "title": "Foundry customers",
        "detail": "External manufacturing revenue is the proof that the fab strategy works for anyone other than Intel."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Intel is a manufacturing company in the middle of an expensive transition. The revenue decline, the negative free cash flow and the 1.1% return on invested capital are the cost of that transition. The improvement in the last three quarters is the first evidence that it may be working.",
      "The valuation is not based on current earnings. It is based on the belief that margins normalise as utilisation rises and that the foundry business eventually contributes. Both are plausible and neither is certain.",
      "The reader should decide which risk matters more: a technology delay, which would reset the timeline, or a demand shortfall, which would leave the fixed costs stranded. The gross margin line will show which one is happening."
    ],
    "questions": [
      "What utilisation level is needed to restore gross margin toward its historical range?",
      "How much of the revenue recovery is share gain versus market recovery?",
      "How much capital spending is still committed before free cash flow is sustainably positive?",
      "What does the foundry business need to win to justify its cost?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
