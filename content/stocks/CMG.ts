import type { StockStory } from "./types";

export const CMG: StockStory = {
  ticker: "CMG",
  kicker: "Restaurants · Company-operated fast casual",
  title: "Chipotle owns its restaurants, so every burrito carries the rent",
  dek: "The company runs its own stores rather than franchising them. That gives it control of the menu and the queue, and it also means restaurant-level costs land on its own income statement.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $12.7B, up 7.9%, at a 14.1% operating margin.",
    "Operating margin has fallen from 18.2% in Q2 FY25 to 13.7% in Q3 FY26, which is the central issue in the numbers.",
    "A single quarter, Q4 FY25, reported a net loss of $8.61B and made the trailing net margin and return on equity meaningless.",
    "The balance sheet holds $634.2M of net cash and free cash flow was $1.51B, so the margin problem is not a solvency problem.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1058090/000105809026000009/cmg-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001058090&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Chipotle Mexican Grill operates restaurants that sell burritos, burrito bowls, tacos and salads built from fresh ingredients. It does not franchise in the way most large restaurant chains do: the company owns the stores, employs the staff and keeps the sales line, which is why revenue of $12.7B is roughly the total of what customers hand over at the counter.",
      "That choice defines the financial profile. A franchisor reports royalty income at very high margins and very little capital. A company-operated chain reports the full ticket as revenue, pays food, labour and rent out of it, and carries the cost of building each new restaurant. Chipotle's 14.1% operating margin is therefore not comparable with McDonald's 46.9% — the two numbers describe different business models.",
      "The shares closed at $34.43, for a market capitalisation of $43.6B, inside a 52-week range of $27.31 to $41.42. The trailing P/E of negative 10.4x is an artefact of one accounting quarter and should be ignored; 19.6x EV/EBITDA and 28.8x free cash flow are the usable multiples.",
    ],
    quote:
      "The question is not whether people still want the food. It is whether a restaurant that sells roughly the same number of burritos can keep its labour, food and occupancy costs from eating the margin.",
  },
  whatItDoes: {
    paragraphs: [
      "The menu is deliberately short: a protein, a format, a set of toppings. That simplicity is an operating strategy. A small number of ingredients turns over quickly, prep work is standardised, and a single production line can serve a high volume of orders per hour. Restaurants are built around that line, with a digital order channel running alongside the counter.",
      "Most locations are in the United States, with a smaller international footprint. The customer is buying speed and consistency at a price above traditional fast food, which puts the brand in the fast-casual band where the competition is other chains, fast-food trade-ups and casual dining. The company employs 88,000 people, most of them in restaurants.",
      "Growth comes from three places: new restaurants, higher sales at existing ones and better throughput — more orders served per hour from the same kitchen. The third is the cheapest form of growth because it needs no new rent, but it depends on staffing and on equipment that can keep up at peak.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "A single restaurant is a small factory. Sales per year are set by how many transactions it serves and the average ticket. Food and packaging take a share, labour another, and occupancy — rent, utilities, common-area charges — a third. What is left is the restaurant-level margin, and it is where the whole company's profit is made or lost.",
      "Above the restaurant sits a layer of corporate cost: marketing, technology, food safety, support staff and the depreciation of the buildings and equipment. Add those and the restaurant margin becomes the operating margin of 14.1%. Add interest and tax and it becomes net income. Because the corporate layer is fairly fixed, a small change in restaurant margin moves consolidated profit much more than it moves revenue.",
      "Pricing is the main short-term lever. Raising menu prices lifts the ticket immediately and usually costs some traffic; holding prices protects traffic and lets wage and food inflation squeeze the margin. The quarterly record shows the company has been living through that trade-off: operating margin was 18.2% in Q2 FY25, 15.9% in Q3 FY25 and 12.9% by Q1 FY26, before recovering to 15.7% in Q2 FY26 and 13.7% in Q3 FY26.",
    ],
    bullets: [
      {
        title: "Food and packaging",
        detail:
          "Fresh produce and meat are bought at market prices. A short menu helps, but protein costs still move with commodity cycles.",
      },
      {
        title: "Labour",
        detail:
          "Restaurant wages are the largest controllable cost. Staffing enough hours to serve the queue quickly is what protects both sales and morale.",
      },
      {
        title: "Occupancy",
        detail:
          "Rent is fixed for the lease term. A store with weak volume carries the same rent as a strong one, which is why site selection matters so much.",
      },
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 13.5% a year over the fiscal years covered here, from $7.55B in fiscal 2021 to $11.93B in fiscal 2025. The trailing figure is $12.7B after 7.9% growth, and the latest quarter grew 9.6% year over year. The slowdown from the earlier pace is the honest signal in the data.",
      "The consensus expects $13.00B of revenue and $1.09 of EPS this fiscal year, then $14.38B and $1.33 next year. The second year is the more demanding forecast: revenue above the current year's $13.00B together with EPS above $1.09 assumes the margin recovers at the same time as new stores open. That is possible, but it is an assumption rather than a fact.",
      "New restaurants remain the structural driver. Each opening adds a fixed cost base that has to be covered by volume, so the company's growth rate and its margin are linked: opening stores faster than the organisation can staff and train them is how restaurant chains damage their own unit economics.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating income went from $804.9M in fiscal 2021 to $1.94B in fiscal 2025, and revenue more than doubled over the same period. But the last step was flat: operating income rose only from $1.92B to $1.94B while revenue grew from $11.31B to $11.93B. Margin, not volume, is where the pressure has appeared.",
      "The quarterly pattern shows the same thing at higher resolution. Q2 FY25 earned an 18.2% operating margin on $3.06B of revenue; Q3 FY25 earned 15.9%; Q1 FY26 fell to 12.9% on $3.09B; Q3 FY26 recovered to 13.7% on $3.29B. Revenue kept growing while the margin fell, which is the signature of cost inflation outpacing price.",
      "Two reported figures need care. The fourth quarter of fiscal 2025 shows a net loss of $8.61B while operating income was positive, so the loss arose below the operating line; the trailing net margin of negative 59.5% and the negative return on equity are consequences of that one quarter. The reported gross margin is also negative, which means that line is not measuring restaurant-level economics for a company-operated chain. Use the operating margin.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $1.51B over the trailing period, an 11.9% margin, and $1.45B in fiscal 2025 against net income of $1.54B. That near-equality is a good sign: the business is turning reported profit into cash rather than sinking it into working capital.",
      "The capital budget is the main use of cash. New restaurants, kitchen equipment and remodels are funded out of operating cash flow, and because the company owns its buildings' improvements rather than leasing a turnkey box from a franchisee, the spend scales with the store count. Land and buildings are mostly leased, which keeps the balance sheet lighter than the income statement suggests.",
      "Net cash of $634.2M means the company is not relying on borrowing to fund expansion. That matters at a moment when margins are under pressure: a chain with net debt would have to choose between opening stores and servicing lenders. Chipotle can do the first while it fixes the second.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $34.43 the shares trade at 19.6x EV/EBITDA, 3.4x sales and 28.8x free cash flow. The trailing P/E is negative and tells you nothing; a negative multiple is a prompt to look at the operating line, not a valuation.",
      "The peer comparison in this report is not like for like. McDonald's trades at 17.3x EV/EBITDA but earns a 46.9% operating margin because franchisees carry the restaurant costs. Home Depot trades at 16.1x on a 12.4% operating margin, Lowe's at 12.9x on 11.4%. Chipotle at 19.6x is being valued as a growth chain with a brand, not as a mature restaurant operator.",
      "That multiple assumes unit growth continues and the operating margin stabilises. If margin stays near 14% and new stores earn less than the last cohort, the multiple has room to compress even if revenue keeps rising. Stockmonk does not publish a target price; the consensus figure below is third-party context.",
      "The five-year return of negative 4.4% is a useful warning. Revenue more than doubled over that stretch while the share price went nowhere, which means the multiple fell faster than earnings grew. A business can compound and still disappoint if the price paid for it starts from an optimistic level.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty analysts contribute to the third-party consensus, with a mean target of $40.57 and a range of $32.00 to $53.00. The range brackets the current share price, which is unusual and suggests the analysts disagree about the margin path rather than about demand.",
      "Estimates call for $3.27B of revenue and $0.25 of EPS next quarter, then $3.43B and $0.31, with $13.00B and $1.09 for the full fiscal year. The quarterly EPS figures are small enough that a few cents of restaurant margin swing changes the year materially.",
      "A mean target is not a view from Stockmonk. For a company with a compressed margin, the useful part of the consensus is the direction of the EPS estimates, not the average price.",
    ],
  },
  risks: {
    intro:
      "Chipotle's risks are concentrated in the restaurant P&L. The brand is strong and the balance sheet is clean, so the things that can hurt are the costs inside each store and the pace at which new stores are added.",
    items: [
      {
        title: "Restaurant margin compression",
        severity: "High",
        detail:
          "Food, wage and occupancy inflation has already taken the operating margin from 18.2% to the low teens. If price increases cannot close the gap, earnings fall even with revenue growth.",
        watch:
          "Restaurant-level margin and the split between traffic and average ticket.",
      },
      {
        title: "Food safety and supply",
        severity: "High",
        detail:
          "A short menu of fresh ingredients means a single supplier problem can affect many restaurants at once. An incident would hit traffic and require spending on remediation.",
        watch:
          "Supplier concentration, incident disclosures and any change in sourcing.",
      },
      {
        title: "New store productivity",
        severity: "Medium",
        detail:
          "Growth depends on opening stores that reach similar volumes to the existing base. Weaker sites add revenue but dilute returns and absorb management attention.",
        watch:
          "Average unit volume of new cohorts and the pace of openings.",
      },
      {
        title: "Labour availability",
        severity: "Medium",
        detail:
          "Throughput depends on having enough trained staff at peak hours. Understaffing shows up as slower lines, which costs sales as well as morale.",
        watch:
          "Staffing levels, turnover and overtime as a share of labour cost.",
      },
      {
        title: "Consumer trade-down",
        severity: "Medium",
        detail:
          "Fast casual sits above fast food on price. In a squeeze, customers can trade down without abandoning the category, which shows up as fewer transactions rather than lower prices.",
        watch:
          "Transaction counts versus average check in the quarterly release.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The single number that decides whether revenue growth becomes earnings growth. Compare each quarter with the same quarter a year earlier, not with the previous quarter.",
      },
      {
        title: "Average unit volume",
        detail:
          "Sales per restaurant shows whether new stores are as productive as the base and whether existing stores are holding traffic.",
      },
      {
        title: "Free cash flow after new stores",
        detail:
          "Expansion should be funded from operations, not from the net cash balance, if the model is working.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Chipotle is a high-quality restaurant concept with a simple menu, a strong brand and a balance sheet that carries more cash than debt. It earned a 14.1% operating margin on $12.7B of trailing revenue and generated $1.51B of free cash flow.",
      "The interesting part of the story is the margin. Revenue grew 7.9% over the year while the operating margin fell from the high teens to the low teens. A company-operated chain cannot pass all of its wage and food inflation through immediately, so the gap between price and cost is the number to follow.",
      "Two figures in the dataset are misleading and worth understanding: the negative P/E and the negative trailing net margin both come from a single quarter's $8.61B net loss, taken below the operating line. Nothing in the operating record suggests the restaurants stopped making money.",
    ],
    questions: [
      "How much of the margin decline is food, how much is labour, and how much is new-store depreciation?",
      "Is traffic falling, or only the average ticket rising more slowly?",
      "What return do the newest restaurants earn compared with stores opened five years ago?",
      "How much menu pricing can be taken before transactions fall?",
    ],
  },
};
