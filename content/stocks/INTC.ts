import type { StockStory } from "./types";

export const INTC: StockStory = {
  ticker: "INTC",
  kicker: "Semiconductors · Processors and foundry",
  title: "Intel pays for its factories whether or not it fills them",
  dek: "Revenue fell from $79.02B to $52.85B in four years while the manufacturing base stayed. A 39.9% gross margin is what that decision costs, and the recovery is what the share price is paying for.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $59.89B, up 12.1%, after four years of decline.",
    "Gross margin is 39.9% and operating margin 2.9%; net margin is negative 20.1%.",
    "Free cash flow turned positive at $3.77B after four years of cash burn.",
    "At $56.28 the shares trade at 21.9x EV/EBITDA and 4.9x sales, with negative earnings.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/50863/000005086326000011/intc-20251227.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000050863&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Intel designs processors and manufactures them in its own factories. That combination, known as an integrated device manufacturer, is unusual among leading-edge chip companies. Most competitors design chips and outsource fabrication. Intel's choice gives it control over process technology and supply, and it also means the company carries the fixed cost of those fabs on its own income statement.",
      "The last four years have been a test of that structure. Revenue fell from $79.02B in FY2021 to $63.05B, $54.23B, $53.10B and $52.85B in FY2025, while the factory base remained. Gross margin fell to 39.9% and operating margin to 2.9% on a trailing basis. Free cash flow was negative in each of those four years, including negative $15.66B in FY2024.",
      "At $56.28 the market capitalisation is $299.1B, or 21.9x EV/EBITDA and 4.9x sales. Trailing earnings are negative, so the price-to-earnings multiple is not usable. The shares are 21% of the way up a 52-week range of $32.89 to $142.35 and returned 51.1% over the past year, which means the market has already started to price a recovery.",
    ],
    quote:
      "A fab is a bet placed years before the revenue arrives. When demand falls in the meantime, the loss is not a surprise; it is the cost of the bet.",
  },
  whatItDoes: {
    paragraphs: [
      "The company sells processors for personal computers and servers, chipsets, networking silicon and memory, and it is building a foundry business that would manufacture chips for other companies. The client business supplies PC makers; the data-centre business supplies cloud providers, enterprises and governments. Both depend on Intel's process technology being competitive.",
      "The foundry effort changes the economics. A foundry earns revenue by manufacturing for others, which spreads fixed costs across more volume. It also requires capital spending ahead of demand and a customer base that is willing to design chips around Intel's process. That is a multi-year project, and its success is not visible in a single quarter.",
      "Intel employed 110,600 people at the last count. That headcount reflects a manufacturing organisation with fabs, test facilities and process engineering, not just a design team. It is the main reason the company's cost base is so much heavier than a fabless competitor's.",
    ],
    bullets: [
      {
        title: "Client computing",
        detail:
          "PC processors. A large volume business tied to the corporate and consumer replacement cycle.",
      },
      {
        title: "Data centre",
        detail:
          "Server processors. Higher margin than client, and the segment where competition has been most intense.",
      },
      {
        title: "Foundry",
        detail:
          "Manufacturing for external customers. Strategically important, capital-hungry and still early.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Chip revenue depends on unit volume, average selling price and mix. A server processor sells for far more than a PC processor, so a shift in mix moves revenue and margin at the same time. The cost of goods includes wafer fabrication, packaging and test, and those costs are largely fixed once the fab is built.",
      "That is why gross margin is the number to watch. At 39.9%, Intel is earning much less per dollar of revenue than a leading-edge manufacturer needs to fund its next generation of capacity. The shortfall is not primarily a pricing problem; it is the cost of running factories at low utilisation and of investing in new process nodes before they generate revenue.",
      "Operating margin of 2.9% and net margin of negative 20.1% diverge because of items below the operating line. A single quarter, Q2 FY2026, recorded a net loss of $11.03B, which is large enough to swamp the operating result of the surrounding quarters. The reader should treat that quarter as an exceptional item until the filing explains it.",
    ],
  },
  growth: {
    paragraphs: [
      "The five-year record is a contraction: revenue compounded at negative 5.0% a year from $79.02B in FY2021 to $52.85B in FY2025. The causes are a shrinking PC market, share loss in data centre and a product transition that did not go to plan. None of those is permanent, and all of them take time to fix.",
      "The recovery is now visible in the numbers. Trailing revenue is up 12.1% and the latest quarter grew 20.9% to $16.51B. The attributed consensus expects $61.74B this fiscal year and $69.13B next year, with EPS of $1.49 and $1.79. Next quarter is expected to produce $15.62B, a sequential decline from the September quarter but above the prior year.",
      "The drivers are a PC replacement cycle, server share stabilisation and foundry customer wins. The brake is that all three require Intel's process technology to be competitive on power and performance. If it is not, the revenue recovery stalls regardless of how much capital has been spent.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows the scale of the damage. Operating income was $19.46B in FY2021, $2.33B in FY2022, $93.0M in FY2023, negative $11.68B in FY2024 and negative $2.21B in FY2025. Revenue fell from $79.02B to $52.85B over that period, and the cost base did not shrink with it.",
      "The quarterly trend is improving from a low base. Operating margin was negative 24.7% in Q2 FY2025, 5.0% in Q3, 4.2% in Q4, negative 23.1% in Q1 FY2026, 11.1% in Q2 and 15.3% in Q3. The swings are enormous, which is what happens when fixed costs meet volatile volume. Two good quarters do not yet make a trend.",
      "Return on equity is negative 9.1% and return on invested capital is 1.1%. A 1.1% return on capital is far below any reasonable cost of capital, which is the clearest statement that the current asset base is not earning its keep. The investment case is that this improves as utilisation rises.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative in four consecutive years: negative $9.41B in FY2022, negative $14.28B in FY2023, negative $15.66B in FY2024 and negative $4.95B in FY2025. The trailing figure is now positive $3.77B, a 6.3% margin. That swing is the most important improvement in the financial statements.",
      "The cash burn came from capital expenditure on new fabs and process technology while revenue was falling. A manufacturing business cannot cut capital spending quickly without abandoning the products it needs for the next cycle, so the company funded the gap from the balance sheet. Net cash is now $3.87B, which is thin relative to the capital programme.",
      "The dividend yield is 5.0%, which is high for a company with negative net income. A dividend is a cash payment, and free cash flow of $3.77B is not obviously enough to cover both the payout and the capital spending. This is a line to check against the cash-flow statement rather than the income statement.",
    ],
  },
  valuation: {
    paragraphs: [
      "Trailing earnings are negative, so the price-to-earnings multiple of negative 23.8x is an artefact. The usable measures are 21.9x EV/EBITDA, 4.9x sales and 79.4x free cash flow. None of them is cheap for a company with a 2.9% operating margin.",
      "The multiple is being applied to depressed EBITDA. If margins recover toward the levels Intel earned historically, EBITDA rises and the multiple falls without the share price moving. That is the arithmetic the market is using: 21.9x a trough number can become a reasonable multiple on a normal number.",
      "The peer table shows how far the company has drifted from the leaders. Nvidia trades at 22.0x EV/EBITDA with a 65.2% operating margin, AMD at 82.3x with a 17.7% margin. Intel at 21.9x with a 2.9% margin is a different kind of bet: not on growth, but on recovery.",
    ],
  },
  analysts: {
    paragraphs: [
      "Forty-three analysts contribute to the attributed consensus, with a mean target of $91.12 and a range of $63.00 to $160.00. The mean is well above the $56.28 close, and the range is extraordinarily wide for a company of this size. That spread is a measure of how uncertain the recovery is.",
      "Estimates call for $61.74B of revenue and $1.49 of EPS this fiscal year, then $69.13B and $1.79. Next quarter is expected to produce $15.62B and $0.25. The revenue recovery is expected to continue; the profit recovery is expected to be slow.",
      "Those are third-party figures. When the range runs from $63 to $160 against a $56 share price, the average is less useful than the distribution. The low end implies the current price is already generous.",
    ],
  },
  risks: {
    intro:
      "Intel's risks are industrial rather than financial. The company has the balance sheet to keep investing; the question is whether the investment produces products customers want to buy.",
    items: [
      {
        title: "Process technology execution",
        severity: "High",
        detail:
          "Every product and every foundry customer depends on Intel's manufacturing process being competitive. A delay resets the roadmap and the revenue that goes with it.",
        watch:
          "Node introductions, yield commentary and product launch timing.",
      },
      {
        title: "Fab utilisation",
        severity: "High",
        detail:
          "Fixed manufacturing costs dominate the cost of goods. Low utilisation is what turned a high-margin manufacturing model into a 39.9% gross margin.",
        watch:
          "Gross margin and capital expenditure against revenue.",
      },
      {
        title: "Competitive share loss",
        severity: "High",
        detail:
          "Server and PC processors face strong competitors with better margins and, in some generations, better performance per watt.",
        watch:
          "Data-centre revenue and unit share disclosures.",
      },
      {
        title: "Capital intensity",
        severity: "Medium",
        detail:
          "Free cash flow was negative for four years because capital spending outran cash generation. The programme is not finished.",
        watch:
          "Capital expenditure, depreciation and free cash flow.",
      },
      {
        title: "Dividend coverage",
        severity: "Medium",
        detail:
          "A 5.0% yield on negative earnings is a cash commitment that may compete with capital spending.",
        watch:
          "Dividends paid against free cash flow.",
      },
    ],
    watchlist: [
      {
        title: "Gross margin",
        detail:
          "39.9% is the recovery's scoreboard. A move back toward its historical range would change the earnings base.",
      },
      {
        title: "Free cash flow",
        detail:
          "Positive $3.77B is the first sign that the capital cycle is maturing.",
      },
      {
        title: "Foundry customers",
        detail:
          "External manufacturing revenue is the proof that the fab strategy works for anyone other than Intel.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Intel is a manufacturing company in the middle of an expensive transition. The revenue decline, the negative free cash flow and the 1.1% return on invested capital are the cost of that transition. The improvement in the last three quarters is the first evidence that it may be working.",
      "The valuation is not based on current earnings. It is based on the belief that margins normalise as utilisation rises and that the foundry business eventually contributes. Both are plausible and neither is certain.",
      "The reader should decide which risk matters more: a technology delay, which would reset the timeline, or a demand shortfall, which would leave the fixed costs stranded. The gross margin line will show which one is happening.",
    ],
    questions: [
      "What utilisation level is needed to restore gross margin toward its historical range?",
      "How much of the revenue recovery is share gain versus market recovery?",
      "How much capital spending is still committed before free cash flow is sustainably positive?",
      "What does the foundry business need to win to justify its cost?",
    ],
  },
};
