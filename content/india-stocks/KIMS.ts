import type { StockStory } from "@/content/stocks/types";

export const KIMS: StockStory = {
  ticker: "KIMS",
  kicker: "Hospitals · Tertiary and quaternary care",
  title: "KIMS bought beds first and earnings second",
  dek: "Revenue rose by a third and earnings per share fell. Krishna Institute of Medical Sciences is paying for new hospitals today and hoping patients fill them tomorrow.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is ₹4,597 crore, up 35.1% year over year, and the latest quarter grew 39.9%.",
    "Quarterly operating margin slipped from 24.2% in Q3 FY25 to 19.3% in Q2 FY27.",
    "Diluted EPS fell from ₹9.61 in FY2025 to ₹6.03 in FY2026 even as revenue rose 29%.",
    "Net debt is ₹4,182 crore, or 4.7 times EBITDA, with interest cover of 3.2 times.",
    "Free cash flow was negative ₹902 crore over the trailing year, a -23.1% margin.",
  ],
  filingUrl:
    "https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=KIMS",
  irUrl: "https://www.kimshospitals.com",
  bigPicture: {
    paragraphs: [
      "Krishna Institute of Medical Sciences runs a chain of multi-specialty hospitals under the KIMS Hospitals brand, with its base in Secunderabad and a model built on complex work: cardiac surgery, neurosciences, oncology, organ transplants, gastroenterology and high-end mother-and-child care. The company was incorporated in 1973, so the brand predates most of the corporate hospital chains listed in India today.",
      "A hospital group is a simple machine on paper. It owns beds, fills them with patients, and bills each patient for the days and procedures used. The complication is time: a new block opens with full staff costs and no patients, then takes years to reach the occupancy where it earns its cost of capital. KIMS is in the middle of that cycle. Revenue reached ₹4,597 crore on a trailing basis, up 35.1%, but the trailing net margin is only 4.8% and free cash flow is negative.",
      "At ₹734.70 the shares give a market capitalisation of ₹30,858 crore, 156.6 times trailing earnings and 39.5 times EV/EBITDA. The 52-week range is ₹575.80 to ₹858.00, so the price sits a little above the middle of its own recent band. The sections below describe the operating model and the arithmetic behind those multiples; they do not rate the stock.",
    ],
    quote:
      "In hospitals, growth and profit rarely arrive in the same year. New beds consume cash and depreciation before they produce revenue per bed.",
  },
  whatItDoes: {
    paragraphs: [
      "KIMS sells inpatient care. Its hospitals cover cardiology and cardiothoracic surgery, neurology and neurosurgery, medical and surgical gastroenterology, nephrology and urology, orthopaedics, oncology, transplant programmes, critical care and emergency medicine, alongside obstetrics, fertility and neonatology. It also runs dedicated centres for bone marrow and organ transplants, stroke, dialysis, joint replacement and trauma, plus diagnostics, imaging and telemedicine support.",
      "The mix matters because not all beds earn the same. A cardiac or transplant bed carries a high revenue per patient but also consumes implants, consumables, intensive-care time and a specialist team. A general medical bed has a lower ticket but fills faster and keeps the fixed hospital running. KIMS has positioned itself toward the higher end, with a secondary-care layer in smaller cities to feed volume into the tertiary units.",
      "The customer is not one payer. Patients paying out of pocket, private insurers and third-party administrators, corporate employers and state health schemes all buy the same bed at different prices. Government scheme rates are typically the lowest and come with volume; cash and insured patients carry the margin. The company reports a single consolidated line rather than a segment split, so the revenue figure below is the whole hospital business.",
    ],
    bullets: [
      {
        title: "Tertiary and quaternary work",
        detail:
          "Cardiac, neuro, oncology and transplant programmes carry the highest revenue per admission and the heaviest staffing.",
      },
      {
        title: "Payer mix",
        detail:
          "Cash, private insurance, corporate tie-ups and government schemes each price the same bed differently.",
      },
      {
        title: "Geography",
        detail:
          "Telangana and Andhra Pradesh are the home market; newer units extend the brand into other states.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is occupied bed days multiplied by average revenue per occupied bed, usually shortened to ARPOB. ARPOB rises when the case mix shifts toward complex procedures, when insurer negotiations improve, or when the hospital raises list prices. Volume rises with bed count and occupancy. Because staff, rent, power and administration are largely fixed, an established hospital converts extra occupancy into operating profit at a high rate.",
      "The cost stack explains why the reported gross margin of 59.3% is so much higher than the operating margin. Consumables, drugs, implants and doctor fees sit in the direct cost line. What remains must cover nursing salaries, technicians, radiology and laboratory staff, housekeeping, power, maintenance, land rent, depreciation on medical equipment and interest on the borrowings that paid for the buildings.",
      "That is the operating-leverage mechanism, and it cuts both ways. When a hospital matures, incremental revenue arrives with almost no incremental fixed cost and margins expand quickly. When a group is adding hospitals, each new unit starts in the opposite position: costs first, revenue later. KIMS currently sits on the adding side of that curve, which is why a 35.1% revenue increase did not translate into higher earnings per share.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at about 22.5% a year between FY2021 and FY2026, from ₹1,330 crore to ₹3,905 crore. That is faster than the underlying growth of Indian hospital demand, which points to capacity added through new hospitals and acquisitions rather than same-store volume alone. The latest quarter grew 39.9% year over year to ₹1,344 crore, so the expansion is still running.",
      "The attributed third-party consensus expects ₹5,182 crore of revenue this fiscal year and ₹6,214 crore next year, with EPS of ₹10.29 and then ₹16.70. The revenue numbers imply continued bed additions; the EPS numbers imply something more: that the new units start contributing and that interest and depreciation grow more slowly than revenue.",
      "Three things would slow the story. New hospitals take three to five years to reach stable occupancy, so the revenue from today's beds arrives in future periods. Specialist supply is the binding constraint in tertiary care. And the home market around Hyderabad already has several large private chains competing for the same consultants and the same insured patients.",
    ],
    bullets: [
      {
        title: "Bed additions",
        detail:
          "The fastest route to revenue growth for a hospital chain, and the slowest to earn a return.",
      },
      {
        title: "Case-mix upgrade",
        detail:
          "Moving routine work out and complex work in lifts ARPOB without adding a single bed.",
      },
      {
        title: "Scheme and insurance volumes",
        detail:
          "Government schemes bring occupancy but at rates that leave little margin.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly table shows margin compression in slow motion. Operating margin was 24.2% in Q3 FY25 and 24.8% in Q4 FY25. It fell to 22.1%, then 21.2%, 19.9%, 19.2% and 18.9% across the next five quarters before a small recovery to 19.3% in Q2 FY27. Net income moved the same way: ₹92 crore in Q3 FY25 against ₹75 crore in Q2 FY27, on revenue that was 74% higher.",
      "For the full years, revenue nearly tripled from ₹1,330 crore in FY2021 to ₹3,905 crore in FY2026, but net income went from ₹205 crore to ₹242 crore and actually fell from ₹415 crore in FY2025. Diluted EPS was ₹9.61 in FY2025 and ₹6.03 in FY2026. Return on equity is 10.8% and return on invested capital 10.0%, both of which are modest for a business that trades at a triple-digit earnings multiple.",
      "The trailing operating margin in the dataset is 10.4% and the net margin 4.8%, both lower than the annual and quarterly figures above would suggest. When ratios computed over different periods disagree this sharply, the underlying statements matter more than the headline: the trailing number appears to carry costs that the quarterly operating line excludes, most likely depreciation on the new buildings and equipment. Either way, the direction is the same. Profit per rupee of revenue has been falling.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow has been negative in every year from FY2023 onward: -₹140 crore, -₹125 crore, -₹380 crore and -₹902 crore. The trailing figure is a -23.1% margin. This is what a hospital roll-up looks like from the inside. Building a bed costs several times what the bed will earn in its first year, and the cash leaves before the patients arrive.",
      "Net debt is ₹4,182 crore, which is 4.7 times EBITDA. Interest cover is 3.2 times, meaning operating profit covers interest a little over three times. That is not distressed, but it leaves little room for a bad year. Together, negative free cash flow and 4.7 turns of leverage mean the growth is being funded by lenders and shareholders rather than by the existing hospitals.",
      "What the cash flow supports is a simple test. EBITDA must grow faster than debt, and the interest bill must fall as a share of revenue. If new beds mature while the debt stays flat, free cash flow turns. If the company keeps buying hospitals at the same pace, the balance sheet carries the risk instead.",
    ],
  },
  valuation: {
    paragraphs: [
      "At ₹734.70 the shares trade at 156.6 times trailing earnings, 39.5 times EV/EBITDA and 7.6 times sales. Those are not valuations for a mature hospital. They are valuations that assume the current pipeline of beds matures and margins return to the mid-twenties.",
      "The peer table is a useful sanity check, though hospital chains and pharmaceutical manufacturers are not strictly comparable. Among the five listed comparables, trailing P/E ranges from 24.2 times to 96.1 times and EV/EBITDA from 16.9 times to 54.9 times. KIMS sits above the earnings range and near the top of the EV/EBITDA range despite a lower operating margin than most of the group.",
      "The honest way to read the multiple is as a bet on time. On the current-year EPS estimate of ₹10.29, the shares are still expensive; on the next-year estimate of ₹16.70, they are less so. Neither figure is a Stockmonk target, and both depend on the margin recovery the company has yet to deliver.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sixteen analysts contribute to the attributed third-party consensus, with a mean target of ₹866.44 and a range of ₹680.00 to ₹1,000.00. The mean sits roughly a fifth above the current price, while the low end is below it. That spread is wide enough to say the market has not settled on what the new hospitals are worth.",
      "Estimates call for ₹5,182 crore of revenue and ₹10.29 of EPS this fiscal year, then ₹6,214 crore and ₹16.70 next year. Two analysts cover the nearer quarters: ₹1,275 crore of revenue and ₹1.97 of EPS for the next quarter, then ₹1,481 crore and ₹3.09. The quarterly path implies the margin trough has passed and the recovery is expected within the year.",
      "The estimate direction matters more than the target. A revenue forecast of 20% growth with EPS growth of more than 60% is a margin-recovery forecast in disguise. If the recovery slips by a year, the forward numbers fall and the multiple looks different without the share price moving.",
    ],
  },
  risks: {
    intro:
      "KIMS carries the risks of a hospital group that is expanding faster than its cash generation. The list below is ordered by how much each one would change the numbers.",
    items: [
      {
        title: "Slow bed ramp-up",
        severity: "High",
        detail:
          "New hospitals carry fixed costs from day one. If occupancy builds more slowly than planned, depreciation and interest run ahead of revenue and margins stay compressed.",
        watch:
          "Occupancy, ARPOB and same-store revenue growth for hospitals older than three years.",
      },
      {
        title: "Leverage and interest cost",
        severity: "High",
        detail:
          "Net debt of ₹4,182 crore is 4.7 times EBITDA and interest cover is only 3.2 times. A weak year or a rise in borrowing costs takes a large share of operating profit.",
        watch:
          "Net debt to EBITDA, interest cover and the maturity profile of borrowings.",
      },
      {
        title: "Payer mix and scheme pricing",
        severity: "Medium",
        detail:
          "Government health schemes and insurers negotiate hard. A shift toward lower-rate payers reduces ARPOB even when patient volumes rise.",
        watch:
          "Share of revenue from schemes and insurers, and ARPOB by hospital.",
      },
      {
        title: "Consultant retention",
        severity: "Medium",
        detail:
          "Tertiary care depends on a small number of senior surgeons and physicians. Losing a department head can move a whole service line to a competitor.",
        watch:
          "Doctor attrition, new department launches and competitor capacity in Hyderabad.",
      },
      {
        title: "Clinical and regulatory compliance",
        severity: "Medium",
        detail:
          "Hospital accreditation, fire safety, biomedical waste and price caps on devices and procedures can raise costs or cap revenue per case.",
        watch:
          "Accreditation findings, state audits and any revision to capped device prices.",
      },
    ],
    watchlist: [
      {
        title: "Occupancy and ARPOB",
        detail:
          "The two variables that decide whether new beds become profitable.",
      },
      {
        title: "EBITDA against interest",
        detail:
          "EBITDA must grow faster than the interest bill for the equity story to hold.",
      },
      {
        title: "Capex commitments",
        detail:
          "Announced projects consume cash before they contribute revenue.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "KIMS is a well-known tertiary hospital brand that has chosen size over near-term profit. Revenue of ₹4,597 crore, a 35.1% growth rate and negative free cash flow of ₹902 crore describe a company reinvesting everything it earns and borrowing more. Whether that is wise depends on the return the new beds eventually earn.",
      "The evidence so far is mixed. Revenue has compounded at 22.5% a year, which shows the model can absorb new capacity. But EPS fell in FY2026, return on capital is 10.0% and interest cover is 3.2 times. The multiple of 39.5 times EV/EBITDA already assumes a successful outcome.",
      "The educational point is that hospital growth is a timing business. Two chains can add the same number of beds and report very different profits for three years, purely because of when the beds opened. Reading the occupancy and margin trend by cohort tells you more than the consolidated revenue growth rate.",
    ],
    questions: [
      "How much of the revenue growth came from new beds versus higher volumes at existing hospitals?",
      "At what occupancy do the newest hospitals cover their depreciation and interest?",
      "What share of revenue now comes from government schemes, and how does that ARPOB compare with cash patients?",
      "How much capex is already committed for the next two years, and how will it be funded?",
    ],
  },
};
