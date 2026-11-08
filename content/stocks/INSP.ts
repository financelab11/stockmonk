import type { StockStory } from "./types";

export const INSP: StockStory = {
  ticker: "INSP",
  kicker: "Healthcare Growth · Sleep apnoea devices",
  title: "Inspire's implant works; the referral funnel is the problem",
  dek: "A surgically implanted nerve stimulator treats obstructive sleep apnoea, but every procedure depends on a diagnosis, a referral and a trained surgeon. Revenue has stopped growing, and the estimates now assume a down year.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $880.9M, down 0.2%, and the latest quarter fell 7.9% to $206.7M.",
    "The Q3 FY26 operating margin was negative 13.9%, a sharp reversal from the 17.1% posted in Q4 FY25.",
    "Free cash flow is still positive at $97.9M, and the balance sheet holds $328M of net cash.",
    "The consensus expects $855.4M of revenue this year, below the $912.0M reported in FY2025.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1609550/000160955026000016/insp-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001609550&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Inspire Medical Systems sells an implanted device for obstructive sleep apnoea. A surgeon places a small neurostimulator under the skin near the collarbone and a lead on the hypoglossal nerve, which controls the tongue. The device senses breathing and delivers mild stimulation to keep the airway open during sleep. It is an alternative for patients with moderate to severe apnoea who cannot tolerate a CPAP mask.",
      "Revenue reached $880.9M over the trailing twelve months, down 0.2% from the prior period. The latest quarter was $206.7M, 7.9% lower than a year earlier, and the operating margin turned negative at minus 13.9%. That is a different company from the one that grew revenue from $233.4M in FY2021 to $912.0M in FY2025.",
      "At $63.98 the shares are 77.2% below where they traded five years ago, and the market capitalisation is $1.85B. The company still has $328M of net cash, so it is not in financial distress. The question is whether the addressable market is simply harder to convert than the early years suggested, or whether something in the referral and reimbursement chain has broken.",
    ],
    quote:
      "A sleep apnoea implant is sold three times before it reaches a patient: to the doctor who diagnoses, to the surgeon who implants, and to the payer who covers it.",
  },
  whatItDoes: {
    paragraphs: [
      "The customer is a patient with moderate to severe obstructive sleep apnoea, usually diagnosed through a sleep study after a referral from a primary care doctor or a sleep specialist. The procedure is performed by trained surgeons, often ear, nose and throat specialists, at accredited centres. After implantation, the device is programmed and titrated over follow-up visits.",
      "That chain is the business. Inspire does not sell to consumers directly; it sells through a network of trained surgeons and accredited centres, and it depends on sleep physicians continuing to refer patients who fail CPAP. The company employs about 755 people, a large share of them in field sales and clinical support.",
      "Inspire operates in the United States and internationally, including European markets and Japan through partners. The international business adds geographies but requires separate reimbursement work, which is slower and more expensive than adding another US centre.",
    ],
    bullets: [
      {
        title: "The implant",
        detail:
          "A neurostimulator and a nerve lead placed in a short surgical procedure. The device is the revenue event.",
      },
      {
        title: "Titration and follow-up",
        detail:
          "Programming visits and remote adjustments. They keep the patient on therapy and create switching costs.",
      },
      {
        title: "The referral network",
        detail:
          "Sleep physicians, surgeons and accredited centres. Without referrals, the implant has no pipeline.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Inspire is paid per implant. The hospital buys the system, performs the procedure and bills the payer using established surgical and neurostimulation codes. The company also sells accessories and replacement components, but the implant is the main revenue line. There is no recurring subscription and no disposable consumed every month.",
      "The 86.2% gross margin is typical of an implantable device: the cost of goods is small relative to the price, and the expensive part is the sales and clinical infrastructure. That is why the operating margin can swing from 17.1% in Q4 FY25 to minus 13.9% in Q3 FY26 without a comparable swing in gross margin. The company is carrying a fixed field organisation against a softer procedure volume.",
      "The operating leverage works in both directions. When procedure volumes grow, the sales force and training costs spread across more implants and margin expands quickly. When volumes stall, the same cost base produces losses. The recent quarters show the second direction.",
    ],
  },
  growth: {
    paragraphs: [
      "The historical growth rate was exceptional: revenue compounded at 49.4% a year from FY2021 to FY2025. That phase is over. Trailing revenue is slightly below the FY2025 total, and the latest quarter is down 7.9%. The consensus for this fiscal year is $855.4M, which is lower than FY2025, and next year's estimate is $877.8M, still below the prior peak.",
      "The drivers that remain are penetration of the existing centre base, expansion into new geographies and better identification of patients who fail CPAP. The constraint is the funnel: a patient has to be diagnosed, referred, evaluated, scheduled and covered. Each step leaks, and the company does not control most of them.",
      "Competition adds another constraint. CPAP is cheap and works for many patients. Oral appliances, weight-loss drugs and other neurostimulation approaches compete for the same moderate-to-severe group. A GLP-1-driven reduction in obesity could shrink the pool of patients with severe apnoea, or it could increase diagnosis by bringing more people into care. The direction is not settled.",
    ],
    bullets: [
      {
        title: "Centre penetration",
        detail:
          "More procedures at existing accredited centres, rather than more centres, is the cheapest source of growth.",
      },
      {
        title: "Diagnosis and referral",
        detail:
          "The upstream bottleneck. Better screening and sleep-physician relationships would expand the funnel.",
      },
      {
        title: "International",
        detail:
          "Europe and Japan add patients but require local reimbursement and partner management.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a company that reached operating profitability in FY2024, with $36.1M of operating income on $802.8M of revenue, and improved to $51.0M in FY2025. The trailing operating margin is 1.8%, and the latest quarter is negative. The direction reversed within a year.",
      "The quarterly table is volatile. Operating margin was minus 1.5% in Q2 FY25, 4.3% in Q3, 17.1% in Q4, then minus 0.5%, minus 0.3% and minus 13.9% in the first three quarters of FY2026. Q4 is seasonally strong as hospitals use remaining budgets, so the Q4 FY25 figure should not be treated as a run rate.",
      "Net margin is 11.4% even though the operating margin is 1.8%, and Q4 FY25 alone produced $136.1M of net income on $269.1M of revenue. That gap is too large to come from operations; it reflects an item below the operating line, such as a tax benefit. Return on equity of 12.2% and return on invested capital of 2.5% tell the more accurate story: the underlying business is barely earning its cost of capital.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $97.9M over the trailing period, an 11.1% margin, and $78.5M in FY2025. Positive cash flow alongside a 1.8% operating margin is possible because depreciation, share-based compensation and working capital do not move one-for-one with accounting profit. It is still a thin cushion for a company with a large field organisation.",
      "The balance sheet is a genuine strength: $328M of net cash, no meaningful leverage and a 5.3% free-cash-flow yield. The company can fund its commercial organisation through a downturn without raising equity.",
      "What the cash does not do is create demand. Capital is not the constraint on growth; procedure volume is. That distinction matters because a net-cash balance sheet protects the downside but does not fix the referral funnel.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $63.98 the shares trade at 18.4x trailing earnings and 44.3x EV/EBITDA, on 1.7x EV/sales. Those multiples do not fit together. The P/E looks modest, the EV/EBITDA looks expensive and the sales multiple looks like a low-growth industrial company.",
      "The explanation is the earnings base. Trailing net income is flattered by the Q4 FY25 tax item, while EBITDA is depressed by the operating losses in FY2026. Neither is a good denominator. EV/sales of 1.7x is the cleanest measure here, and it says the market is valuing Inspire as a mature, slow-growing device company rather than the high-growth story it was five years ago.",
      "The peer comparison makes the point. Penumbra trades at 7.6x EV/sales, Insulet at 3.3x and Globus Medical at 2.9x. Inspire at 1.7x is at the low end, which is what a declining revenue line deserves unless the funnel improves.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sixteen analysts contribute to the attributed consensus, with a mean target of $69.63 and a range of $45.00 to $97.00. The spread is wide and the mean is only slightly above the current price, which reflects genuine disagreement about whether the decline is cyclical or structural.",
      "Estimates call for $855.4M of revenue and $1.30 of EPS this fiscal year, then $877.8M and $1.50 next year. For the next quarter the consensus is $243.7M of revenue and $0.91 of EPS, a sequential increase that assumes the fourth quarter behaves normally.",
      "Only five analysts contribute to the next-quarter estimate and two to the following quarter, so the near-term consensus is thin. The annual figures rest on more estimates, but they still embed a recovery that has not appeared in the reported numbers.",
    ],
  },
  risks: {
    intro:
      "Inspire's risk is concentrated in the commercial funnel rather than the balance sheet. The device is approved, reimbursed and clinically established; the uncertainty is how many patients actually reach the procedure.",
    items: [
      {
        title: "Referral and diagnosis bottleneck",
        severity: "High",
        detail:
          "The company depends on sleep physicians and primary care doctors to identify and refer patients. If referrals slow, procedure volume falls regardless of clinical demand.",
        watch:
          "Procedure volumes, active centre counts and any disclosure on referral trends.",
      },
      {
        title: "Reimbursement and hospital economics",
        severity: "High",
        detail:
          "Hospitals must be paid enough to cover the implant and the operating room. A change in coverage or a shift toward outpatient payment can alter the economics overnight.",
        watch:
          "Payer policies, CMS rates and hospital margin on the procedure.",
      },
      {
        title: "Competitive alternatives",
        severity: "Medium",
        detail:
          "CPAP, oral appliances, weight-loss drugs and other neurostimulation devices all compete for the same patients. A cheaper or less invasive option can shrink the addressable pool.",
        watch:
          "New device approvals, GLP-1 adoption in sleep clinics and CPAP adherence rates.",
      },
      {
        title: "Operating leverage in reverse",
        severity: "Medium",
        detail:
          "The field organisation is expensive and largely fixed. A sustained revenue decline turns a profitable business into a loss-making one quickly.",
        watch:
          "Operating margin, headcount and sales-and-marketing spend as a share of revenue.",
      },
      {
        title: "International execution",
        severity: "Low",
        detail:
          "Europe and Japan require local reimbursement and partner management. They add complexity without the scale of the US market.",
        watch:
          "International revenue growth and partner performance.",
      },
    ],
    watchlist: [
      {
        title: "Procedure volume",
        detail:
          "The single variable that drives revenue, margin and the share price. Watch it before the revenue line.",
      },
      {
        title: "Operating margin",
        detail:
          "A second consecutive negative quarter would suggest the cost base is too large for the demand.",
      },
      {
        title: "Referral trends",
        detail:
          "Any disclosure on sleep-study referrals or implant conversions is more useful than the backlog.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Inspire has a differentiated implant, an 86.2% gross margin and $328M of net cash. It also has a revenue line that has stopped growing, a negative operating margin in the latest quarter and a share price 77.2% below its five-year-ago level.",
      "The company is not in trouble. Free cash flow is positive, the balance sheet is clean and the procedure is reimbursed. The problem is that the referral funnel is outside its control, and the estimates assume a recovery that the reported numbers have not yet shown.",
      "The useful next step is to separate a cyclical pause from a structural ceiling. If procedure volumes recover, the fixed cost base produces strong operating leverage. If they do not, the company becomes a cash-rich but slow-growing device maker.",
    ],
    questions: [
      "How many accredited centres are active, and what is the average procedure volume per centre?",
      "What share of diagnosed apnoea patients are referred for an implant evaluation?",
      "Is the Q3 FY26 loss a seasonal effect or a permanent cost problem?",
      "How much of the $855.4M estimate depends on the fourth quarter?",
    ],
  },
};
