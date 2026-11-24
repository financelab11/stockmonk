import type { StockStory } from "./types";

export const KLAC: StockStory = {
  "ticker": "KLAC",
  "kicker": "Semiconductors · Process control and metrology",
  "title": "KLA sells the measurement that decides whether a wafer is worth keeping",
  "dek": "A 90% gross margin from a hardware company comes from selling optics and algorithms, and from the cost of a bad wafer lot.",
  "readingMinutes": 9,
  "takeaways": [
    "First-quarter fiscal 2027 revenue of $4.1B carried a 44.1% operating margin, the highest in the semiconductor equipment group.",
    "Process control generated 90.2% of segment revenue, and China plus Taiwan accounted for 56.6% of the geographic mix.",
    "Free cash flow of $4.0B is 27.8% of revenue, while net debt of $4.2B equals 0.6x EBITDA.",
    "At 35.8x earnings and 29.5x EV/EBITDA, KLA carries the richest multiple in the equipment group on the highest margin."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/319201/000031920126000027/klac-20260630.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000319201&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "KLA's first fiscal quarter, ended 30 September 2026, produced $4.1B of revenue, a 44.1% operating margin and $1.18 of diluted EPS. Revenue was 28.9% higher than a year earlier and the operating margin rose from 40.8%. The result matters because process control is bought on the cost of a bad wafer lot rather than on throughput, so the revenue is less sensitive to fab utilisation than a deposition or etch tool.",
      "The portfolio is unusually concentrated: Semiconductor Process Control was 90.2% of segment revenue, with PCB and component inspection at 5.5% and specialty semiconductor process at 4.3%. Inspection, metrology and e-beam review are sold to process engineers at a specific node and step, and once a recipe is qualified the switching cost is high. That is why the gross margin is the highest in the group and why the operating margin can reach 44.1% on a $4.1B revenue base.",
      "KLA carries the most demanding valuation in the group. At $144 the shares carry 35.8x earnings, 29.5x EV/EBITDA, 13.3x sales and 46.6x free cash flow. Fiscal 2027 EPS of $5.77 is 25.0x the current price, so the multiple depends on the 39.0% revenue estimate arriving. A large neutral group sits on the sidelines, which suggests the margin is respected but the price is not. The debate is about how long the process-control franchise can compound at this rate."
    ],
    "quote": "Inspection is a toll on the cost of a bad wafer lot, which is why KLA can charge a hardware price with a software margin."
  },
  "whatItDoes": {
    "paragraphs": [
      "The portfolio has three parts. Inspection systems look for defects — particles, scratches, pattern errors — across a wafer. Metrology systems measure critical dimensions, film thickness and overlay, which is how precisely one layer aligns with the next. E-beam review zooms in on a defect that optical inspection has flagged.",
      "Customers are the logic and memory fabs, and to a lesser extent the equipment makers who need to characterise their own processes. The buying decision is made by process engineers, and it is tied to a specific node and a specific step, which makes the sale technical and the qualification slow.",
      "The software layer matters more than the revenue it produces. The value of an inspection tool depends on how quickly its output can be turned into a decision about a process, and that is a data and algorithms problem as much as an optics problem."
    ],
    "bullets": [
      {
        "title": "Inspection",
        "detail": "Optical systems that find defects across the wafer. The largest product line and the closest thing to a toll booth in the portfolio."
      },
      {
        "title": "Metrology",
        "detail": "Measurement of dimensions, films and overlay. Sold on the same process steps as inspection."
      },
      {
        "title": "Service",
        "detail": "Spares, upgrades and field service on an installed base that grows with every node transition."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Gross margin of 90.0% is not a normal hardware margin, and it is worth understanding why. The tool is an optical system plus a computing system plus the algorithms that interpret what the optics see. The materials cost is a small fraction of the price; the value comes from precision and from the cost of the mistake the tool prevents.",
      "Operating margin of 42.2% leaves roughly 48 points of gross profit for research, field support and administration. That is a much heavier cost ratio than Lam or Applied Materials carry, because KLA funds a large research organization relative to a smaller revenue base. The result is a 42% operating margin on 90% gross margin rather than a 40% operating margin on 51%.",
      "Pricing power comes from qualification. Once a fab has built a process around a particular inspection recipe, changing the tool means requalifying the process, which is expensive and risky. That is why incumbency in process control is worth more than incumbency in a tool that only moves wafers."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue expanded from $9.8B in fiscal 2024 to $12.2B in fiscal 2025 and $13.6B in fiscal 2026, and the first quarter of fiscal 2027 is running at roughly $16.4B annualised. The latest quarter grew 28.9%, well above the 15.8% trailing rate, so the order cycle is still accelerating. Consensus for the December quarter is $4.7B, a 14.6% sequential step. That would extend the run of sequential gains by another quarter.",
      "The driver is inspection intensity. Each node adds process steps, tighter tolerances and more expensive wafers, so the cost of letting a defective lot through rises faster than the cost of the tool. The service base grows with the installed fleet, but upgrades are discretionary and are cut first in a downturn, so the recurring revenue is less defensive than it looks.",
      "Consensus assumes the cycle has another year. Fiscal 2027 revenue of $18.9B would be 39.0% above fiscal 2026, and fiscal 2028 at $22.6B adds 19.6%. China at 29.8% and Taiwan at 26.8% mean more than half of revenue sits in the two most geopolitically exposed markets. The 90-day EPS revision of 5.9% shows estimates rising, but KLA is not the fastest grower in the group."
    ],
    "bullets": [
      {
        "title": "Node intensity",
        "detail": "Inspection and metrology content rises with each node because the cost of an undetected defect rises faster than the tool price."
      },
      {
        "title": "Process-control share",
        "detail": "At 90.2% of segment revenue, process control is the franchise; the PCB and specialty businesses are too small to change the group result."
      },
      {
        "title": "Customer geography",
        "detail": "China and Taiwan supplied 56.6% of revenue, so export rules and foundry schedules are the two variables that matter most."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "KLA's margin structure is unusual for a hardware company. The gross margin is the highest in the equipment group because the tool is an optical and computing system whose value comes from precision and the losses it prevents, not from the materials inside it. That gross profit converts into a 42.2% operating margin and a 36.2% net margin, with research, field support and administration absorbing the difference.",
      "The latest quarter improved again: a 44.1% operating margin and a 37.4% net margin, against 40.8% and 34.9% a year earlier. The annual operating margin has risen from 32.5% in fiscal 2024 to 41.3% in fiscal 2026. Return on equity was 80.6% and return on invested capital 42.9%, the latter below Lam's 47.6% but above Applied Materials' 23.7%. That is the highest return on equity in the equipment group and the reason the multiple carries a premium.",
      "The per-share line is not a clean guide. Quarterly diluted EPS in the table swings from -$22.60 to $9.12 while net income stays positive, so the reported EPS reflects items below the operating line rather than the economics of the quarter. Net margin, operating margin and free cash flow are the measures to use, and all three point to a business earning more as revenue scales."
    ]
  },
  "cash": {
    "paragraphs": [
      "KLA generated $4.0B of free cash flow, 27.8% of revenue, and capital spending was $375.9M in fiscal 2026. The asset base is light because the tool is assembled from optics and computing hardware and the company does not own fabs, so most of the operating cash reaches the free-cash-flow line. The 46.6x P/FCF is therefore a function of the multiple rather than of poor conversion.",
      "KLA is not debt-free. Net debt was $4.2B, or 0.6x EBITDA, with interest cover of 21.8x. That is modest leverage for a business with a 42% operating margin, but it is a change from the net cash position KLA carried in fiscal 2023. The cash flow supports the debt; the question is what the borrowing funded, which the summary statements do not break out.",
      "Capital returns are small relative to cash generation: the dividend yield is 0.7%, and no buyback large enough to change the share count is disclosed. The company is retaining cash while carrying net debt, a combination that usually signals acquisition spending or a deliberate liquidity buffer. Either way, the balance sheet is not the constraint on the investment case. The more important question is what the debt bought."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At $144 the equity is valued at $188.2B, or 35.8x trailing earnings, 29.5x EV/EBITDA, 13.3x sales and 46.6x free cash flow. The peer medians are 31.0x and 24.8x, so KLA trades at a premium on both earnings and EBITDA. The premium is explained by a 42.2% operating margin and a 42.9% ROIC, both well above the group, and by the durability of a qualified process-control position.",
      "The forward arithmetic depends on a large step. Fiscal 2027 EPS of $5.77 is 25.0x the current price and fiscal 2028 at $7.11 is 20.3x, but those numbers require revenue to rise 39.0% and then 19.6%. Lam at 31.0x and Applied Materials at 29.6x are cheaper on trailing earnings and have more diversified product lines. The gap is defensible only if KLA's process-control share holds through the next node.",
      "A range of $110 to $307 leaves the shares near the bottom of that range. A 13.3x sales multiple on a cyclical capital-goods business is the number that would break first if inspection budgets are cut. The neutral analysts are a reasonable response to that asymmetry. At 29.5x EBITDA the shares already assume the 39.0% revenue step, so the margin of safety is thin."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Coverage from Yahoo Finance, as of 18 November 2026, spans 26 analysts with a mean target of $220 and a range of $175 to $275. The views lean positive but include a large neutral group, with none negative. The mean is 53% above the $144 price, but the tight range, with the high only 1.6x the low, suggests analysts agree on the destination and differ on timing.",
      "Revisions have been firm: 5.6% over 30 days, 5.8% over 60 days and 5.9% over 90 days, with no move in the last week. Fiscal 2027 revenue of $18.9B and EPS of $5.77 assume the December quarter reaches $4.7B and the inspection cycle runs through calendar 2027. The consensus is implicitly assuming that China stays open and that leading-edge logic spending does not pause."
    ]
  },
  "risks": {
    "intro": "KLA's risks are competitive and cyclical. Its balance sheet is close to pristine, so the uncertainty is about pricing power and order timing rather than solvency.",
    "items": [
      {
        "title": "Process-control competition",
        "severity": "High",
        "detail": "A 90% gross margin invites competition. A rival that qualifies an inspection step can take a franchise that lasts for years.",
        "watch": "Gross margin and share of process-control spending at leading-edge nodes."
      },
      {
        "title": "Customer capital budgets",
        "severity": "High",
        "detail": "A small number of fabs decide when inspection tools are bought. A delayed node ramp delays the revenue with it.",
        "watch": "Bookings and the split between logic, memory and foundry."
      },
      {
        "title": "Cyclicality of the installed base",
        "severity": "Medium",
        "detail": "Service revenue cushions a downturn, but upgrades are discretionary and are cut first.",
        "watch": "Service revenue growth compared with tool revenue."
      },
      {
        "title": "Export controls",
        "severity": "Medium",
        "detail": "Restrictions on advanced equipment sales can remove demand from specific regions.",
        "watch": "License changes and the geographic revenue split."
      },
      {
        "title": "Earnings quality",
        "severity": "Medium",
        "detail": "The per-share line has swung by tens of dollars between quarters while net income stayed positive, so headline EPS is misleading.",
        "watch": "Net income and free cash flow rather than diluted EPS."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "The single number that justifies the sales multiple. Any sustained move below 90% changes the valuation arithmetic."
      },
      {
        "title": "Bookings",
        "detail": "The leading indicator for revenue that arrives several quarters later."
      },
      {
        "title": "Cash conversion",
        "detail": "Free cash flow has tracked net income closely. Watch whether that continues through the next ramp."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "KLA is the process-control specialist of the semiconductor equipment industry, with a 90.0% gross margin, a 42.2% operating margin and $4.04B of free cash flow. Revenue of $14.51B is up 15.8% and the latest quarter grew 28.9%.",
      "The investment question is whether a 90% gross margin is a durable feature of the industry or a temporary consequence of being the qualified supplier at the leading edge. Twelve and a half times sales says the market believes the first. Eight neutral ratings out of 26 suggest the analysts are less sure.",
      "The educational point is that gross margin is where competitive advantage shows up first. For a company selling machines, a 90% gross margin is an assertion that the customer is buying the result, not the hardware."
    ],
    "questions": [
      "How much of the gross margin comes from service and software rather than tools?",
      "What share of revenue depends on the leading-edge logic customers?",
      "Why does the diluted EPS line swing so far between quarters?",
      "How much inspection content does each new node add?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
