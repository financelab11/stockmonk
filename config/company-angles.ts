/**
 * Company-specific editorial angles for the 271 names added in the 500-name
 * expansion. These are deliberately short: the generator uses them to frame
 * the business, moat, main risk, catalyst and valuation debate in original
 * language rather than a shared sector template.
 */
export type CompanyAngle = {
  angle: string;
  moat?: string;
  risk?: string;
  catalyst?: string;
  valuation?: string;
};

export const COMPANY_ANGLES: Record<string, CompanyAngle> = {
  AAP: {
    angle:
      "Advance Auto is a turnaround story in a mature aftermarket, where the question is whether a smaller, better-run store base can earn a normal margin again.",
    moat:
      "The moat is local convenience and same-day availability, not brand pricing power; scale in distribution and private-label parts is what protects the gross margin.",
    risk:
      "The DIY customer is trading down and the professional channel is under-served, so sales and margin can keep falling together.",
    catalyst:
      "The next catalyst is evidence that store closures, distribution changes and SG&A cuts are lifting operating margin without losing professional customers.",
    valuation:
      "The multiple looks low against trailing earnings because the earnings base is depressed; the real question is what mid-cycle margin the chain can earn.",
  },
  ACGL: {
    angle:
      "Arch Capital is a disciplined specialty underwriter whose returns depend on pricing cycles in reinsurance, specialty lines and mortgage insurance.",
    moat:
      "The moat is underwriting culture, cycle management and a diversified book that lets management shrink lines when prices are inadequate.",
    risk:
      "A soft reinsurance market or a large catastrophe year can compress the combined ratio faster than premium growth offsets it.",
    catalyst:
      "The next catalyst is rate change at the January renewals and whether mortgage insurance losses stay benign.",
    valuation:
      "The shares trade on price-to-book and normalized ROE, so the debate is whether current underwriting margins are above or below mid-cycle.",
  },
  ACHC: {
    angle:
      "Acadia is a behavioral-health operator whose growth comes from beds, acquisitions and payer mix rather than from a single blockbuster product.",
    moat:
      "The moat is local facility density and referral relationships; behavioral health is hard to replicate because licensure, staffing and community trust take years.",
    risk:
      "Labor shortages and reimbursement pressure can leave new beds understaffed and underpaid.",
    catalyst:
      "The next catalyst is occupancy and rate improvement at acquired facilities, plus evidence that labor cost per patient is stabilizing.",
    valuation:
      "The EBITDA multiple assumes the acquisition pipeline keeps adding beds at similar returns while leverage comes down.",
  },
  ACIW: {
    angle:
      "ACI Worldwide runs payments infrastructure for banks and billers, a recurring-revenue business where renewals matter more than new logos.",
    moat:
      "The moat is mission-critical software embedded in payment rails; ripping it out is risky and slow, which supports renewal rates and pricing.",
    risk:
      "Cloud-native competitors and in-house bank platforms can pressure renewals and take rate.",
    catalyst:
      "The next catalyst is cloud migration and renewal pricing, especially in the biller segment.",
    valuation:
      "The multiple reflects a mature software vendor; upside depends on accelerating recurring revenue rather than a re-rating.",
  },
  ACLS: {
    angle:
      "Axcelis is a focused ion-implant supplier whose fortunes follow memory and power-semiconductor capital spending.",
    moat:
      "The moat is process know-how in ion implantation and a installed base that generates service revenue through the cycle.",
    risk:
      "Memory capex is cyclical and China exposure adds geopolitical and customer-concentration risk.",
    catalyst:
      "The next catalyst is orders for silicon-carbide and power devices, which are less tied to the memory cycle.",
    valuation:
      "The shares are priced as a cyclical equipment maker; the debate is where the next capex upcycle starts.",
  },
  ACM: {
    angle:
      "AECOM is an infrastructure consultant whose revenue follows government and private construction budgets, with a backlog that is longer than a typical industrial order book.",
    moat:
      "The moat is technical expertise, long-standing agency relationships and a global delivery network that few competitors can match on large projects.",
    risk:
      "Government budget delays and fixed-price project execution can hit revenue and margin at the same time.",
    catalyst:
      "The next catalyst is backlog conversion in water, transportation and data-center work, plus margin improvement in the Americas.",
    valuation:
      "The multiple assumes steady backlog growth and mid-single-digit margins; a budget slowdown would compress both.",
  },
  ADP: {
    angle:
      "ADP sells payroll and human-capital software, a recurring-revenue business whose growth tracks employment and client funds rather than a single product cycle.",
    moat:
      "The moat is switching cost and regulatory complexity: payroll is embedded in how clients pay people and file taxes.",
    risk:
      "A weaker labor market reduces pays per control and new client additions, while higher rates can change client-fund income.",
    catalyst:
      "The next catalyst is pricing, new-business bookings and the yield on client funds.",
    valuation:
      "The multiple is a premium recurring-revenue multiple; it assumes steady employment growth and continued pricing power.",
  },
  ADSK: {
    angle:
      "Autodesk sells design software into construction, manufacturing and media, so its growth depends on customer design activity and subscription expansion.",
    moat:
      "The moat is the file format and workflow lock-in: designs, models and project histories live inside Autodesk tools.",
    risk:
      "A construction or manufacturing slowdown can reduce seat growth, and AI-native design tools could change the workflow.",
    catalyst:
      "The next catalyst is subscription renewals, cloud migration and evidence that AI features are monetizable.",
    valuation:
      "The multiple assumes durable double-digit growth and margin expansion; either one slipping would compress it.",
  },
  AEM: {
    angle:
      "Agnico Eagle is a senior gold miner whose cash flow is geared to the gold price, production volumes and cost inflation.",
    moat:
      "The moat is a portfolio of long-life, low-cost mines in stable jurisdictions, which lets it earn through the gold cycle.",
    risk:
      "Gold-price weakness or cost inflation can compress margins even when production is on plan.",
    catalyst:
      "The next catalyst is production growth from Canadian and Australian assets and the pace of cost inflation.",
    valuation:
      "The shares trade on free-cash-flow yield and net asset value, so the gold-price assumption matters more than the trailing P/E.",
  },
  AEP: {
    angle:
      "American Electric Power is a regulated utility whose earnings depend on rate-base growth, allowed returns and the cost of financing its grid.",
    moat:
      "The moat is a regulated service territory with a captive customer base and a long pipeline of transmission and distribution investment.",
    risk:
      "Rate cases can disallow costs, and higher financing costs can pressure both earnings and the multiple.",
    catalyst:
      "The next catalyst is data-center load growth and the outcome of pending rate cases.",
    valuation:
      "The multiple is a bond-proxy utility multiple; it assumes rate-base growth and constructive regulation.",
  },
  AES: {
    angle:
      "AES owns and operates power generation and utilities across markets, so its returns depend on contracts, project execution and leverage.",
    moat:
      "The moat is a diversified operating fleet and long-term power purchase agreements that reduce merchant price exposure.",
    risk:
      "Construction delays, higher financing costs and volatile merchant power prices can strain the balance sheet.",
    catalyst:
      "The next catalyst is renewable project completions and the repricing of legacy contracts.",
    valuation:
      "The shares trade at a discount to regulated utilities because the portfolio is more complex and more levered.",
  },
  AFL: {
    angle:
      "Aflac sells supplemental health insurance in Japan and the US, a mature business where sales, persistency and investment yield drive earnings.",
    moat:
      "The moat is brand recognition, agent relationships and a product design that pays cash when a policyholder is diagnosed.",
    risk:
      "A stronger yen or higher yen rates can change the value of the Japanese earnings stream, while US competition limits growth.",
    catalyst:
      "The next catalyst is Japan sales through new channels and US benefit enrollment.",
    valuation:
      "The multiple reflects a mature insurer with a high dividend; the debate is currency and persistency, not growth.",
  },
  AIT: {
    angle:
      "Applied Industrial distributes motion, fluid-power and automation components, a business that grows with industrial maintenance and small-project spending.",
    moat:
      "The moat is local technical sales and same-day availability; customers rely on distributors to keep lines running.",
    risk:
      "An industrial slowdown can reduce maintenance and project demand, and acquired growth can mask weaker organic sales.",
    catalyst:
      "The next catalyst is organic growth in automation and the margin contribution from acquired businesses.",
    valuation:
      "The multiple is a distributor multiple; it assumes steady industrial demand and modest operating leverage.",
  },
  AIZ: {
    angle:
      "Assurant sells protection products attached to devices, homes and autos, a fee-like insurance model that depends on partner relationships and claims costs.",
    moat:
      "The moat is deep integration with carriers, retailers and lenders who bundle protection at the point of sale.",
    risk:
      "Higher claims severity, device inflation and partner concentration can compress the combined ratio.",
    catalyst:
      "The next catalyst is mobile-device protection growth and global housing margins.",
    valuation:
      "The multiple reflects a specialized insurer with recurring, fee-like revenue; claims trends are the swing factor.",
  },
  AJG: {
    angle:
      "Arthur J. Gallagher is an insurance broker that grows by acquiring agencies and retaining clients, so organic growth and acquisition multiples matter together.",
    moat:
      "The moat is client relationships, specialized expertise and a decentralized operating model that keeps producers close to customers.",
    risk:
      "A soft commercial-rate market reduces commission growth, and acquisition multiples can make deals less accretive.",
    catalyst:
      "The next catalyst is organic growth in brokerage and the margin contribution from recent acquisitions.",
    valuation:
      "The multiple assumes continued double-digit earnings growth from a mix of organic growth and acquisitions.",
  },
  AKAM: {
    angle:
      "Akamai is evolving from a content-delivery network into security and cloud computing, so the mix shift matters more than the legacy CDN business.",
    moat:
      "The moat is a globally distributed edge network and long-standing relationships with large content and enterprise customers.",
    risk:
      "Cloudflare and hyperscaler edge offerings can take security and delivery share, while CDN pricing keeps falling.",
    catalyst:
      "The next catalyst is security and compute revenue growth as a share of the total.",
    valuation:
      "The multiple is a low-growth infrastructure multiple; a faster security mix would justify a higher one.",
  },
  ALB: {
    angle:
      "Albemarle is a lithium producer whose earnings swing with battery-grade lithium prices and the pace of EV demand.",
    moat:
      "The moat is access to low-cost lithium resources and processing capacity, which matters most when prices are weak.",
    risk:
      "Lithium prices can stay below reinvestment economics for longer than the balance sheet expects.",
    catalyst:
      "The next catalyst is volume growth from new capacity and the signing of index-linked contracts.",
    valuation:
      "The shares trade on mid-cycle lithium prices; the spot earnings multiple is close to meaningless.",
  },
  ALGM: {
    angle:
      "Allegro sells magnetic sensors and power ICs into autos and industrials, a content-growth story tied to electrification and automation.",
    moat:
      "The moat is application-specific analog and sensor design, qualified into customer platforms over multi-year cycles.",
    risk:
      "Auto production cuts and inventory corrections can hit revenue faster than design wins add it.",
    catalyst:
      "The next catalyst is content growth in EVs and industrial automation, plus inventory normalization.",
    valuation:
      "The multiple assumes auto content growth resumes; a prolonged inventory correction would compress it.",
  },
  ALK: {
    angle:
      "Alaska Air is a premium-leisure airline integrating Hawaiian, so the question is whether network synergies can offset integration and fuel costs.",
    moat:
      "The moat is a West Coast network, a loyal co-brand card and a cost structure that has historically been below the large network carriers.",
    risk:
      "Integration disruption, fuel prices and a leisure-demand slowdown can hit margins at the same time.",
    catalyst:
      "The next catalyst is Hawaiian integration, corporate travel recovery and premium-seat growth.",
    valuation:
      "The multiple is an airline multiple; it assumes integration synergies and mid-cycle margins.",
  },
  ALLY: {
    angle:
      "Ally is a digital bank with a large auto-finance book, so deposits, credit losses and used-car values drive the earnings.",
    moat:
      "The moat is a low-cost digital deposit franchise and dealer relationships in auto lending.",
    risk:
      "A weaker used-car market and higher charge-offs can force provisions that overwhelm net interest income.",
    catalyst:
      "The next catalyst is deposit growth, credit normalization and the trajectory of the auto book.",
    valuation:
      "The shares trade below book because the market is pricing credit risk; the debate is whether losses are peaking.",
  },
  ALNY: {
    angle:
      "Alnylam is a commercial-stage RNAi company whose value depends on the launch of Amvuttra and the durability of its patent estate.",
    moat:
      "The moat is a validated RNAi platform and a pipeline of products that share delivery technology and manufacturing.",
    risk:
      "A clinical or safety setback in the pipeline, or a competitor with a better delivery system, can reset the growth story.",
    catalyst:
      "The next catalyst is Amvuttra launch metrics and label expansion in transthyretin amyloidosis.",
    valuation:
      "The multiple is a growth-biotech multiple; it assumes the launch curve and pipeline readouts both cooperate.",
  },
  ALTR: {
    angle:
      "Altair is an archived industrial-software company, and the useful question is what its simulation and data-analytics franchise was worth to Siemens.",
    moat:
      "The moat was simulation software embedded in engineering workflows, where switching costs are high and design data is sticky.",
    risk:
      "The archive risk is that the final statements are the last available data and will not update.",
    catalyst:
      "There is no live catalyst; the final consideration was $113 per share in cash.",
    valuation:
      "The final deal value is the reference, not a live multiple.",
  },
  AME: {
    angle:
      "AMETEK is a serial acquirer of niche electronic and electromechanical instruments, so the quality of acquisitions and pricing power drive returns.",
    moat:
      "The moat is brand specification and application engineering in niches where the instrument is a small part of the customer's total cost.",
    risk:
      "Industrial capex weakness and acquisition multiples can slow growth and dilute returns.",
    catalyst:
      "The next catalyst is order growth in aerospace and automation, plus the margin contribution from recent deals.",
    valuation:
      "The multiple is a premium industrial multiple; it assumes the acquisition engine keeps compounding.",
  },
  AMGN: {
    angle:
      "Amgen is a mature biopharma with a patent cliff in some products and a large obesity opportunity in MariTide, so the pipeline is doing most of the work.",
    moat:
      "The moat is biologics manufacturing, commercial scale and a portfolio of durable franchises in inflammation, bone and oncology.",
    risk:
      "Patent expirations and pricing pressure can shrink the base business faster than new products replace it.",
    catalyst:
      "The next catalyst is MariTide data and launch preparation, plus the pace of biosimilar competition.",
    valuation:
      "The multiple assumes the base business funds the pipeline while obesity becomes a second growth engine.",
  },
  AMP: {
    angle:
      "Ameriprise is a wealth-management and asset-management business whose earnings depend on advisor productivity, client assets and markets.",
    moat:
      "The moat is a large advisor network and a planning-led client relationship that keeps assets sticky.",
    risk:
      "Market declines reduce fee revenue, and advisor attrition can slow net flows.",
    catalyst:
      "The next catalyst is advisor recruiting, client net flows and margin in the advice segment.",
    valuation:
      "The multiple is a wealth-manager multiple; it assumes steady net flows and market-level returns.",
  },
  ANF: {
    angle:
      "Abercrombie is a apparel brand that has rebuilt its product and store fleet, so the question is whether the current brand heat can be sustained.",
    moat:
      "The moat is brand relevance and a smaller, more productive store base; fashion brands are only as durable as their next collection.",
    risk:
      "A fashion misstep or a consumer slowdown can reverse comparable sales quickly.",
    catalyst:
      "The next catalyst is comparable sales in the core Abercrombie brand and international expansion.",
    valuation:
      "The multiple reflects peak brand momentum; it assumes comps stay positive without heavy markdowns.",
  },
  AON: {
    angle:
      "Aon is an insurance broker that earns fees on risk and people advisory, so organic growth, retention and the NFP acquisition matter more than underwriting cycles.",
    moat:
      "The moat is global placement scale, data and advisory expertise; clients buy access to markets and specialized advice.",
    risk:
      "Soft commercial rates and integration costs at NFP can slow organic growth and margin expansion.",
    catalyst:
      "The next catalyst is NFP synergies, middle-market organic growth and commercial-rate trends.",
    valuation:
      "The multiple assumes recurring fee growth and margin expansion; a soft rate cycle would test it.",
  },
  APD: {
    angle:
      "Air Products is an industrial-gas producer with a large clean-hydrogen bet, so project execution and capital discipline matter more than the base gas business.",
    moat:
      "The moat is long-term take-or-pay contracts and on-site plants that make the gas supplier part of the customer's process.",
    risk:
      "Large hydrogen projects can cost more and take longer than planned, and the CEO transition adds execution risk.",
    catalyst:
      "The next catalyst is final investment decisions and partner commitments on clean-hydrogen projects.",
    valuation:
      "The multiple reflects the base gas business plus a hydrogen option; the option is only worth what the projects earn.",
  },
  APO: {
    angle:
      "Apollo is an alternative-asset manager with a large retirement-services balance sheet, so fee growth and spread income are both part of the story.",
    moat:
      "The moat is origination capability in credit and a permanent-capital base through Athene that few peers can match.",
    risk:
      "Credit losses in the insurance portfolio or a slowdown in fundraising can hit earnings and the multiple.",
    catalyst:
      "The next catalyst is net inflows, spread income and the deployment of dry powder.",
    valuation:
      "The multiple is a sum of fee-related earnings and spread income; credit quality is the swing factor.",
  },
  APPF: {
    angle:
      "AppFolio sells property-management software to small and mid-sized managers, a vertical SaaS business with a long runway of customer expansion.",
    moat:
      "The moat is workflow lock-in: leases, payments, maintenance and accounting all run through the platform.",
    risk:
      "A housing slowdown can reduce property-management customers, and larger competitors can bundle similar features.",
    catalyst:
      "The next catalyst is value-added services and AI features that raise revenue per unit.",
    valuation:
      "The multiple assumes durable growth and margin expansion as the customer base scales.",
  },
  ARES: {
    angle:
      "Ares is an alternative manager whose earnings depend on credit fundraising, deployment and the carry realised on private-credit and real-asset vintages.",
  },
  ARGX: {
    angle:
      "argenx is a commercial-stage immunology company whose value rests on VYVGART's label expansion and the durability of its FcRn franchise.",
  },
  ARM: {
    angle:
      "Arm licenses CPU IP into phones, data centers and edge devices, so royalty rates and chip content per device drive the long-run economics.",
  },
  ARRY: {
    angle:
      "Array makes solar trackers, a project-driven business where utility-scale installations, steel costs and customer concentration drive margins.",
  },
  ASML: {
    angle:
      "ASML is the monopoly supplier of EUV lithography, so revenue is tied to leading-edge fab capex and the pace of the next node transition.",
  },
  ASND: {
    angle:
      "Ascendis uses its TransCon platform to make long-acting versions of existing drugs, so label expansion and launch execution are the value drivers.",
  },
  ASX: {
    angle:
      "ASE is the world's largest chip packaging and test house, a scale business whose margins follow utilisation and advanced-packaging mix.",
  },
  AUR: {
    angle:
      "Aurora is a pre-revenue autonomy developer, so the investment case is an option on driverless-trucking milestones and the cash runway to reach them.",
  },
  AVY: {
    angle:
      "Avery Dennison makes labels and packaging materials, a GDP-plus business where pricing, volume and the digital-ID mix drive margins.",
  },
  AXGN: {
    angle:
      "Axogen sells peripheral-nerve repair products, a small medtech franchise where procedure adoption and reimbursement are the gating factors.",
  },
  AZEK: {
    angle:
      "AZEK is an archived building-products company, and the useful question is what its composite-decking franchise was worth to James Hardie.",
  },
  AZN: {
    angle:
      "AstraZeneca is a global pharma with oncology, respiratory and rare-disease franchises, so patent timing and pipeline readouts matter more than the quarter.",
  },
  AZO: {
    angle:
      "AutoZone is an aftermarket retailer with a mature store base, so same-store sales, inventory turns and buybacks drive per-share value.",
  },
  BABA: {
    angle:
      "Alibaba is a Chinese e-commerce and cloud group whose value depends on GMV, take rate, cloud growth and the regulatory environment.",
  },
  BALL: {
    angle:
      "Ball makes aluminium beverage cans, a volume-driven packaging business where capacity utilisation and metal costs determine margins.",
  },
  BAX: {
    angle:
      "Baxter sells hospital equipment and supplies, a medtech business rebuilding margins after portfolio changes and operational setbacks.",
  },
  BDX: {
    angle:
      "Becton Dickinson sells medical devices and lab equipment, a broad medtech franchise where hospital capex and procedure volumes drive growth.",
  },
  BIDU: {
    angle:
      "Baidu is a Chinese search and AI company whose advertising business funds an uncertain but option-rich AI cloud and autonomous-driving portfolio.",
  },
  BIIB: {
    angle:
      "Biogen is a biopharma transitioning from a multiple-sclerosis base to new neurology and rare-disease launches.",
  },
  BILL: {
    angle:
      "BILL sells accounts-payable and spend-management software to small businesses, so payment volume and take rate matter as much as subscriptions.",
  },
  BJ: {
    angle:
      "BJ's is a membership warehouse club, a low-margin retail model where membership income, traffic and private-label mix drive returns.",
  },
  BKR: {
    angle:
      "Baker Hughes sells oilfield equipment and industrial technology, so energy capex, LNG orders and service utilisation drive the cycle.",
  },
  BLDR: {
    angle:
      "Builders FirstSource sells building materials to homebuilders, a cyclical distribution business tied to housing starts and repair-and-remodel demand.",
  },
  BMY: {
    angle:
      "Bristol Myers is a large pharma facing patent cliffs in oncology and immunology, so pipeline replacement is the central issue.",
  },
  BNTX: {
    angle:
      "BioNTech is an mRNA platform company whose post-Covid value depends on oncology pipelines and partnership economics.",
  },
  BOX: {
    angle:
      "Box sells cloud content management to enterprises, a mature SaaS business where retention and margin expansion matter more than logo growth.",
  },
  BR: {
    angle:
      "Broadridge provides investor communications and back-office technology, a recurring-revenue business embedded in proxy, fund and trading workflows.",
  },
  BRO: {
    angle:
      "Brown & Brown is an insurance broker growing through acquisitions and organic retention, so local market density and producer productivity drive returns.",
  },
  BURL: {
    angle:
      "Burlington is an off-price retailer, a traffic-driven model where buying discipline and inventory turns determine margins.",
  },
  BX: {
    angle:
      "Blackstone is the largest alternative manager, so fundraising, real-estate valuations and carry realisations drive earnings.",
  },
  CAG: {
    angle:
      "Conagra is a packaged-food company with mature brands, so volume, pricing and input costs determine whether it can stabilise margins.",
  },
  CARR: {
    angle:
      "Carrier sells HVAC and refrigeration equipment, a building-products business tied to construction, replacement demand and efficiency rules.",
  },
  CART: {
    angle:
      "Instacart is a grocery-delivery platform earning fees on order volume, so take rate, advertising and basket size drive profitability.",
  },
  CASY: {
    angle:
      "Casey's is a convenience-store chain with a fuel and prepared-food mix, so traffic, cigarette volumes and food margins drive earnings.",
  },
  CBOE: {
    angle:
      "Cboe operates options and equities exchanges, a toll-road business where volumes, product mix and pricing determine revenue.",
  },
  CCJ: {
    angle:
      "Cameco is a uranium producer and fuel-services supplier, so contract prices, production volumes and the nuclear fuel cycle drive cash flow.",
  },
  CCK: {
    angle:
      "Crown makes metal packaging for food and beverages, a volume business where capacity utilisation and metal costs determine margins.",
  },
  CCL: {
    angle:
      "Carnival is a cruise operator, so occupancy, ticket pricing and fuel costs determine the earnings recovery.",
  },
  CF: {
    angle:
      "CF Industries makes nitrogen fertiliser, a commodity business where gas spreads, urea prices and plant utilisation drive margins.",
  },
  CFG: {
    angle:
      "Citizens is a regional bank, so net interest margin, credit costs and capital returns drive earnings.",
  },
  CFLT: {
    angle:
      "Confluent is an archived data-streaming company, and the useful question is what its Kafka platform was worth to IBM.",
  },
  CG: {
    angle:
      "Carlyle is an alternative manager with private equity, credit and real-asset funds, so fundraising and carry realisations drive earnings.",
  },
  CHD: {
    angle:
      "Church & Dwight owns value brands in household and personal care, a steady consumer business where volume, pricing and gross margin matter.",
  },
  CHKP: {
    angle:
      "Check Point sells network security software, a mature franchise where renewals, product refresh and cloud security matter.",
  },
  CHWY: {
    angle:
      "Chewy is an online pet retailer, so active customers, autoship retention and fulfilment costs drive the path to margin.",
  },
  CI: {
    angle:
      "Cigna is a managed-care and pharmacy-benefits company, so medical costs, client retention and Evernorth margins drive earnings.",
  },
  CINF: {
    angle:
      "Cincinnati Financial is a property-casualty insurer, so underwriting discipline, reserve development and investment income drive returns.",
  },
  CLX: {
    angle:
      "Clorox sells household staples, a mature consumer business where volume recovery and pricing power determine margins.",
  },
  CNC: {
    angle:
      "Centene is a managed-care company focused on Medicaid, so enrollment, acuity and state rate updates drive margins.",
  },
  COIN: {
    angle:
      "Coinbase is a crypto exchange and custodian, so trading volume, take rate and regulatory clarity drive earnings.",
  },
  COTY: {
    angle:
      "Coty sells prestige and consumer beauty brands, a brand portfolio where pricing, innovation and channel mix determine margins.",
  },
  COUR: {
    angle:
      "Coursera is an online learning platform, so learner growth, enterprise contracts and content costs drive the path to profit.",
  },
  CPNG: {
    angle:
      "Coupang is a Korean e-commerce and logistics platform, so active customers, basket size and fulfilment density drive margins.",
  },
  CPRT: {
    angle:
      "Copart runs online vehicle auctions, a high-margin marketplace where salvage volumes, international growth and fee per unit drive returns.",
  },
  CR: {
    angle:
      "Crane is a diversified industrial with flow-control and aerospace businesses, so aftermarket mix and acquisition integration drive margins.",
  },
  CROX: {
    angle:
      "Crocs sells casual footwear, a brand-driven business where HEYDUDE integration and international growth determine the next leg.",
  },
  CRUS: {
    angle:
      "Cirrus Logic sells audio and mixed-signal chips, a concentrated customer base where content per device and smartphone cycles drive revenue.",
  },
  CTAS: {
    angle:
      "Cintas rents uniforms and provides facility services, a route-based business where retention, route density and cross-sell drive margins.",
  },
  CTRA: {
    angle:
      "Coterra is an archived shale producer, and the useful question is what its Permian and Marcellus inventory was worth to Devon.",
  },
  CTVA: {
    angle:
      "Corteva sells seeds and crop protection, an agricultural-input business where volume, pricing and trait royalties drive margins.",
  },
  CW: {
    angle:
      "Curtiss-Wright sells engineered products to aerospace, defense and nuclear markets, so backlog and programme execution drive returns.",
  },
  CWAN: {
    angle:
      "Clearwater is an archived investment-accounting platform, and the useful question is what its recurring data franchise was worth to Permira and Warburg Pincus.",
  },
  CYBR: {
    angle:
      "CyberArk is an archived identity-security company, and the useful question is what its privileged-access franchise was worth to Palo Alto Networks.",
  },
  GOLD: {
    angle:
      "Gold.com is a precious-metals dealer whose earnings depend on wholesale volumes, premiums and the gold price rather than on a recurring subscription.",
  },
  GPC: {
    angle:
      "Genuine Parts distributes automotive and industrial replacement parts, a steady aftermarket business where same-store demand and acquisition integration drive growth.",
  },
  GPN: {
    angle:
      "Global Payments sells merchant acquiring and payment software, so volume growth, take rate and the integration of acquisitions determine returns.",
  },
  GSK: {
    angle:
      "GSK is a vaccines and specialty-medicines company whose value depends on vaccine franchises, oncology launches and the patent timetable.",
  },
  GWRE: {
    angle:
      "Guidewire sells core software to property-casualty insurers, a mission-critical vertical SaaS business where cloud migrations and renewals drive revenue.",
  },
  GWW: {
    angle:
      "Grainger distributes maintenance, repair and operating supplies, a scale distribution business where pricing, availability and customer penetration drive margins.",
  },
  HAL: {
    angle:
      "Halliburton sells oilfield services and equipment, so drilling activity, completion intensity and international capex drive the cycle.",
  },
  HALO: {
    angle:
      "Halozyme licenses drug-delivery enzymes and earns royalties on partner products, a high-margin business whose value depends on partner launches and patent timing.",
  },
  HAPN: {
    angle:
      "Happen is the renamed LendingClub bank, a digital lender where credit quality, funding costs and the loan marketplace determine earnings.",
  },
  HBAN: {
    angle:
      "Huntington is a regional bank, so net interest margin, credit costs and fee income drive returns through the rate cycle.",
  },
  HCA: {
    angle:
      "HCA operates hospitals and surgery centers, a volume-driven healthcare business where reimbursement, acuity and labor costs determine margins.",
  },
  HEI: {
    angle:
      "HEICO sells aftermarket aerospace parts and electronic technologies, a niche business where PMA approvals, flight hours and acquisitions drive growth.",
  },
  HII: {
    angle:
      "Huntington Ingalls builds and maintains military ships, a backlog business where program execution and Navy budgets determine revenue and margin.",
  },
  HLT: {
    angle:
      "Hilton is an asset-light hotel franchisor, so system growth, revenue per available room and unit economics drive fee income.",
  },
  HOLX: {
    angle:
      "Hologic is an archived women's-health company, and the useful question is what its diagnostics and breast-health franchise was worth to Blackstone and TPG.",
  },
  HOUS: {
    angle:
      "Anywhere is an archived real-estate brokerage, and the useful question is what its franchise and owned-brokerage network was worth to Compass.",
  },
  HRL: {
    angle:
      "Hormel sells branded meat and shelf-stable foods, a mature consumer business where volume, input costs and brand investment determine margins.",
  },
  HUBB: {
    angle:
      "Hubbell sells electrical and utility equipment, a grid-infrastructure business tied to utility capex, electrification and replacement demand.",
  },
  HUBS: {
    angle:
      "HubSpot sells CRM and marketing software to small and mid-sized businesses, so seat growth, retention and multi-hub adoption drive revenue.",
  },
  IBKR: {
    angle:
      "Interactive Brokers is an electronic brokerage, so client accounts, trading volume, net interest income and execution efficiency drive earnings.",
  },
  IEX: {
    angle:
      "IDEX makes niche flow, health and safety products, a diversified industrial where pricing, aftermarket mix and acquisitions drive margins.",
  },
  ILMN: {
    angle:
      "Illumina sells gene-sequencing instruments and consumables, a platform business where installed-base growth and consumable pull-through drive revenue.",
  },
  INCY: {
    angle:
      "Incyte is a commercial biopharma with a JAKAFI base and a pipeline in oncology and inflammation, so patent timing and new launches matter.",
  },
  IR: {
    angle:
      "Ingersoll Rand sells air, fluid and medical technologies, an industrial compounder where aftermarket share and acquisition integration drive margins.",
  },
  IRDM: {
    angle:
      "Iridium operates a satellite-communications network, a subscription business where subscriber growth, ARPU and constellation capex determine cash flow.",
  },
  ITW: {
    angle:
      "Illinois Tool Works runs a decentralized portfolio of industrial franchises, so segment margins, pricing and the 80/20 operating model drive returns.",
  },
  J: {
    angle:
      "Jacobs is an infrastructure and advanced-facilities consultant, a backlog business tied to government, water and data-center spending.",
  },
  JAZZ: {
    angle:
      "Jazz Pharmaceuticals sells sleep and oncology therapies, a specialty-pharma business where launch execution and patent timing drive the out-year.",
  },
  JBL: {
    angle:
      "Jabil provides electronics manufacturing and supply-chain services, a scale business where program ramps, mix and capital efficiency drive margins.",
  },
  JCI: {
    angle:
      "Johnson Controls sells building equipment and services, a installation-and-aftermarket business tied to construction, efficiency retrofits and service contracts.",
  },
  JD: {
    angle:
      "JD.com is a Chinese direct-retail and logistics platform, so active customers, category mix and fulfillment efficiency drive the thin margin.",
  },
  JKHY: {
    angle:
      "Jack Henry sells core banking and payments software to community banks, a recurring-revenue business where renewals and cross-sell drive growth.",
  },
  JNPR: {
    angle:
      "Juniper is an archived networking company, and the useful question is what its enterprise and service-provider franchise was worth to Hewlett Packard Enterprise.",
  },
  KEY: {
    angle:
      "KeyCorp is a regional bank, so net interest margin, credit quality and fee income drive earnings through the rate cycle.",
  },
  KHC: {
    angle:
      "Kraft Heinz owns mature food brands, so volume recovery, pricing and brand reinvestment determine whether the portfolio can grow again.",
  },
  KKR: {
    angle:
      "KKR is an alternative manager with private equity, credit, real assets and an insurance balance sheet, so fundraising and spread income both matter.",
  },
  KMI: {
    angle:
      "Kinder Morgan owns natural-gas pipelines and terminals, a fee-based midstream business where volumes, contract rates and capex drive cash flow.",
  },
  KNSA: {
    angle:
      "Kiniksa commercializes ARCALYST and royalty-bearing immunology assets, a small biopharma where label expansion and partnership revenue drive value.",
  },
  KOD: {
    angle:
      "Kodiak is a clinical-stage retinal-disease biotech with no product revenue, so the investment case is a binary bet on its durability data and cash runway.",
  },
  KVYO: {
    angle:
      "Klaviyo sells marketing automation to e-commerce brands, a usage-based SaaS business where customer growth and data-platform expansion drive revenue.",
  },
  KYMR: {
    angle:
      "Kymera is a clinical-stage protein-degradation biotech, so the value sits in pipeline readouts and the cash needed to reach them.",
  },
  LH: {
    angle:
      "Labcorp runs diagnostic labs and biopharma research services, a volume business where reimbursement, test mix and lab efficiency drive margins.",
  },
  LHX: {
    angle:
      "L3Harris sells defense electronics and mission systems, a backlog business where program execution and defense budgets drive revenue.",
  },
  LNG: {
    angle:
      "Cheniere owns LNG liquefaction terminals and sells contracted cargoes, so utilization, contract prices and expansion capex drive cash flow.",
  },
  LPLA: {
    angle:
      "LPL provides brokerage and advisory infrastructure to independent advisors, so recruited assets, fee rates and advisor productivity drive earnings.",
  },
  LULU: {
    angle:
      "Lululemon sells technical athletic apparel, a brand-led business where product innovation, international growth and full-price sell-through drive margins.",
  },
  LUV: {
    angle:
      "Southwest is a domestic airline with a point-to-point network, so load factors, fare pricing and cost per available seat mile drive margins.",
  },
  LVS: {
    angle:
      "Las Vegas Sands owns integrated resorts in Macao and Singapore, so gaming volumes, hotel occupancy and capex drive cash flow.",
  },
  LW: {
    angle:
      "Lamb Weston makes frozen potato products, a volume food business where restaurant traffic, pricing and capacity utilization determine margins.",
  },
  LYV: {
    angle:
      "Live Nation runs concerts, ticketing and sponsorship, a scale business where event attendance, ticket pricing and venue economics drive profit.",
  },
  MANH: {
    angle:
      "Manhattan Associates sells supply-chain and omnichannel software, a mission-critical vertical SaaS business where cloud migrations and renewals drive revenue.",
  },
  MAR: {
    angle:
      "Marriott is an asset-light hotel franchisor, so system growth, revenue per available room and loyalty economics drive fee income.",
  },
  MASI: {
    angle:
      "Masimo is an archived medical-device company, and the useful question is what its pulse-oximetry and hospital-monitoring franchise was worth to Danaher.",
  },
  MBLY: {
    angle:
      "Mobileye sells ADAS and autonomous-driving chips and software, a design-win business where auto production and program ramps drive revenue.",
  },
  MCO: {
    angle:
      "Moody's sells credit ratings and analytics, a toll-road business where issuance volumes, recurring data subscriptions and pricing drive margins.",
  },
  MDB: {
    angle:
      "MongoDB sells a general-purpose document database, a developer-led business where workload growth, Atlas consumption and retention drive revenue.",
  },
  MDLZ: {
    angle:
      "Mondelez owns global snack brands, a mature consumer business where volume, pricing and emerging-market growth determine margins.",
  },
  MELI: {
    angle:
      "MercadoLibre runs e-commerce and fintech in Latin America, so GMV, take rate, credit growth and logistics density drive the earnings.",
  },
  MET: {
    angle:
      "MetLife sells life insurance and employee benefits, a spread business where underwriting, investment income and capital returns drive value.",
  },
  MGM: {
    angle:
      "MGM operates casinos and entertainment resorts, so gaming volumes, hotel occupancy and Macao/Strip capex determine cash flow.",
  },
  MKSI: {
    angle:
      "MKS sells vacuum, photonics and materials solutions to semiconductor and industrial customers, a cyclical equipment supplier where fab capex drives orders.",
  },
  MKTX: {
    angle:
      "MarketAxess runs an electronic corporate-bond trading platform, a network business where volumes, dealer participation and take rate drive revenue.",
  },
  MLM: {
    angle:
      "Martin Marietta supplies aggregates and heavy building materials, a local-quarry business where pricing, volume and reserves determine returns.",
  },
  MOH: {
    angle:
      "Molina is a managed-care company focused on Medicaid and Medicare, so enrollment, acuity and state rate updates drive margins.",
  },
  MORN: {
    angle:
      "Morningstar sells investment data, research and index products, a recurring-revenue business where subscriptions, retention and PitchBook growth drive margins.",
  },
  MOS: {
    angle:
      "Mosaic produces phosphate and potash fertiliser, a commodity business where crop prices, nutrient affordability and plant utilisation drive margins.",
  },
  MPC: {
    angle:
      "Marathon Petroleum refines and markets fuel, a crack-spread business where utilisation, crude differentials and midstream integration drive cash flow.",
  },
  MPWR: {
    angle:
      "Monolithic Power sells power-management chips into data centers, autos and industrials, a content-growth story tied to electrification and AI power demand.",
  },
  MRNA: {
    angle:
      "Moderna is an mRNA platform company whose post-Covid value depends on respiratory vaccines, oncology and the cash runway to commercialise them.",
  },
  MRSH: {
    angle:
      "Marsh McLennan is an insurance broker and consulting group, so organic fee growth, retention and the risk/consulting mix drive earnings.",
  },
  MSA: {
    angle:
      "MSA Safety sells breathing apparatus, gas detection and fall protection, a safety-equipment business where industrial capex and regulation drive demand.",
  },
  MSCI: {
    angle:
      "MSCI sells indexes, analytics and ESG data, a high-margin subscription business where assets under benchmark, retention and pricing drive revenue.",
  },
  MTCH: {
    angle:
      "Match Group owns dating apps, a consumer-subscription business where paying users, ARPU and product innovation determine growth.",
  },
  NBIX: {
    angle:
      "Neurocrine sells neurological and endocrine therapies, a commercial biopharma where label expansion and pipeline readouts drive the out-year.",
  },
  NDSN: {
    angle:
      "Nordson makes dispensing and precision-flow equipment, a niche industrial where aftermarket parts and acquisition integration drive margins.",
  },
  NEM: {
    angle:
      "Newmont is the largest gold miner, so production volumes, gold prices and cost inflation across a global mine portfolio drive cash flow.",
  },
  NET: {
    angle:
      "Cloudflare sells edge security, networking and compute, a usage-based platform where customer growth and product attach drive revenue.",
  },
  NEWR: {
    angle:
      "New Relic is an archived observability company, and the useful question is what its telemetry platform was worth to Francisco Partners and TPG.",
  },
  NICE: {
    angle:
      "NICE sells customer-engagement and financial-crime software, a recurring-revenue business where cloud migrations and analytics attach drive growth.",
  },
  NOC: {
    angle:
      "Northrop Grumman is a defense prime with aerospace, mission and space franchises, so backlog, program execution and budget priorities drive revenue.",
  },
  NRG: {
    angle:
      "NRG sells electricity and home services, a retail-and-generation business where customer growth, power prices and hedging drive earnings.",
  },
  NTES: {
    angle:
      "NetEase is a Chinese gaming and music company, so game launches, licensing and in-game monetisation drive the earnings.",
  },
  NTSK: {
    angle:
      "Netskope sells cloud security and network analytics, a high-growth cybersecurity business where platform consolidation and retention drive revenue.",
  },
  NU: {
    angle:
      "Nu Holdings is a Latin American digital bank, so customer growth, deposit funding and credit quality drive the earnings model.",
  },
  NUE: {
    angle:
      "Nucor is a steel producer and recycler, a commodity business where mill utilisation, scrap spreads and end-market demand drive margins.",
  },
  NVS: {
    angle:
      "Novartis is a global pharma focused on innovative medicines, so patent timing, launch execution and pipeline readouts drive the out-year.",
  },
  NXPI: {
    angle:
      "NXP sells automotive and industrial semiconductors, a content-growth business tied to vehicle electrification, connectivity and factory automation.",
  },
  NXT: {
    angle:
      "Nextpower makes solar trackers and energy technology for utility-scale projects, a project business where installations, steel costs and backlog drive revenue.",
  },
  OKE: {
    angle:
      "ONEOK owns natural-gas liquids and refined-product pipelines, a fee-based midstream business where volumes, contract rates and acquisitions drive cash flow.",
  },
  OKTA: {
    angle:
      "Okta sells identity and access management, a security platform where seat growth, retention and large-enterprise adoption drive revenue.",
  },
  ON: {
    angle:
      "ON Semiconductor sells power and sensing chips into autos and industrials, a content-growth story tied to electrification and factory automation.",
  },
  OPLN: {
    angle:
      "OPENLANE runs a digital wholesale-vehicle marketplace, a network business where auction volumes, take rate and dealer penetration drive revenue.",
  },
  OSCR: {
    angle:
      "Oscar Health sells individual and small-group insurance, a technology-enabled insurer where membership, medical costs and ACA subsidies drive margins.",
  },
  OTIS: {
    angle:
      "Otis makes and services elevators and escalators, an installed-base business where service contracts and new-equipment cycles drive margins.",
  },
  OXY: {
    angle:
      "Occidental is an oil and gas producer with a large Permian position and a chemicals arm, so oil prices, production and debt reduction drive the equity.",
  },
  PPG: {
    angle:
      "PPG makes industrial and architectural coatings, a volume business where pricing, raw materials and end-market mix determine margins.",
  },
  PPLI: {
    angle:
      "People Inc. is the renamed IAC, a collection of internet and media assets whose value depends on sum-of-the-parts execution and capital allocation.",
  },
  QGEN: {
    angle:
      "Qiagen sells sample-preparation and diagnostic tools, a life-sciences supplier where consumable volumes and instrument placements drive revenue.",
  },
  RGLD: {
    angle:
      "Royal Gold owns precious-metal streams and royalties, a high-margin financing model where production volumes and gold prices drive cash flow.",
  },
  ROP: {
    angle:
      "Roper owns vertical software and technology-enabled products, a serial acquirer where recurring revenue and capital deployment drive returns.",
  },
  RPM: {
    angle:
      "RPM sells specialty coatings and sealants, a brand-and-project business where pricing, volume and acquisition integration drive margins.",
  },
  SG: {
    angle:
      "Sweetgreen is a fast-casual restaurant chain, so same-store sales, new-unit payback and food/labor costs determine the path to profit.",
  },
  SN: {
    angle:
      "SharkNinja sells small appliances and cleaning products, a product-innovation business where new launches, retail distribution and international growth drive revenue.",
  },
  TGT: {
    angle:
      "Target is a general-merchandise retailer, so traffic, discretionary mix, inventory and shrink determine whether margins can recover.",
  },
  VLTO: {
    angle:
      "Veralto sells water-quality and product-integrity solutions, a recurring-revenue industrial where consumables, service and pricing drive margins.",
  },
  ZS: {
    angle:
      "Zscaler sells cloud security gateways, a consumption-based platform where enterprise adoption, retention and workload growth drive revenue.",
  },
  DAL: {
    angle:
      "Delta is a network airline with premium and loyalty revenue, so corporate travel recovery, premium mix and fuel costs drive margins.",
  },
  DASH: {
    angle:
      "DoorDash is a local-delivery marketplace, so order volume, take rate, advertising and courier costs drive profitability.",
  },
  DBX: {
    angle:
      "Dropbox sells cloud content collaboration, a mature SaaS business where retention and margin expansion matter more than logo growth.",
  },
  DCI: {
    angle:
      "Donaldson makes filtration systems and replacement parts, a replacement-driven industrial where production and aftermarket mix drive margins.",
  },
  DECK: {
    angle:
      "Deckers owns UGG and Hoka, a brand portfolio where Hoka's growth and UGG's durability determine whether the multiple holds.",
  },
  DFS: {
    angle:
      "Discover is an archived card issuer and network, and the useful question is what its closed-loop network was worth to Capital One.",
  },
  DGX: {
    angle:
      "Quest Diagnostics runs diagnostic labs, a volume business where reimbursement, test mix and lab efficiency drive margins.",
  },
  DHR: {
    angle:
      "Danaher sells life-science and diagnostics tools, a portfolio where bioprocessing demand and post-Covid normalisation drive growth.",
  },
  DIOD: {
    angle:
      "Diodes sells discrete and analog chips, a cyclical component supplier where inventory and end-market demand drive margins.",
  },
  DKS: {
    angle:
      "Dick's is a sporting-goods retailer, so comparable sales, Foot Locker integration and inventory turns drive margins.",
  },
  DNN: {
    angle:
      "Denison is a pre-revenue uranium developer, so the value is an option on the Wheeler River project and the uranium price.",
  },
  DOCN: {
    angle:
      "DigitalOcean sells cloud infrastructure to developers, so customer growth, AI inference demand and net retention drive revenue.",
  },
  DOCS: {
    angle:
      "Doximity is a medical-professional network, so physician engagement and pharmaceutical marketing budgets drive revenue.",
  },
  DOCU: {
    angle:
      "DocuSign sells e-signature and agreement software, a mature SaaS business where retention and expansion matter.",
  },
  DOV: {
    angle:
      "Dover sells industrial equipment and clean-energy fueling, a diversified industrial where segment mix and acquisitions drive margins.",
  },
  DPZ: {
    angle:
      "Domino's is a global pizza franchisor, so same-store sales, store growth and supply-chain margins drive earnings.",
  },
  DRS: {
    angle:
      "Leonardo DRS sells defense electronics, so program awards and backlog conversion drive revenue.",
  },
  DT: {
    angle:
      "Dynatrace sells observability software, so cloud migration, consumption and retention drive revenue.",
  },
  DVA: {
    angle:
      "DaVita runs kidney-dialysis centers, so treatment volumes, reimbursement and labor costs drive margins.",
  },
  DVN: {
    angle:
      "Devon is a shale oil producer, so oil prices, Permian inventory and capital discipline drive cash flow.",
  },
  DXCM: {
    angle:
      "DexCom sells continuous glucose monitors, so CGM adoption, reimbursement and competition drive growth.",
  },
  EA: {
    angle:
      "Electronic Arts is an archived gaming company, and the useful question is what its live-services and sports franchises were worth in the take-private.",
  },
  EBAY: {
    angle:
      "eBay is a marketplace for secondary goods, so GMV, take rate and advertising drive revenue.",
  },
  EG: {
    angle:
      "Everest is a reinsurer, so catastrophe losses, reserve development and pricing drive returns.",
  },
  EHC: {
    angle:
      "Encompass operates inpatient rehabilitation hospitals, so admissions, acuity and labor costs drive margins.",
  },
  EL: {
    angle:
      "Estee Lauder sells prestige beauty, so travel retail, China and brand innovation drive growth.",
  },
  ELV: {
    angle:
      "Elevance is a managed-care insurer, so medical costs, enrollment and rate updates drive margins.",
  },
  EMN: {
    angle:
      "Eastman makes specialty chemicals, so volume, pricing and feedstock costs drive margins.",
  },
  EMR: {
    angle:
      "Emerson sells automation and software, so process-industry capex and software mix drive growth.",
  },
  ENPH: {
    angle:
      "Enphase sells solar microinverters and storage, so residential solar demand, channel inventory and competition drive revenue.",
  },
  ENTG: {
    angle:
      "Entegris sells semiconductor materials and filtration, so fab capex and consumable intensity drive growth.",
  },
  EPAM: {
    angle:
      "EPAM provides digital-engineering services, so client spending, headcount and utilisation drive margins.",
  },
  EQT: {
    angle:
      "EQT is a natural-gas producer, so gas prices, production and midstream integration drive cash flow.",
  },
  ERIE: {
    angle:
      "Erie Indemnity manages the Erie Insurance Exchange, so policy growth and management-fee rates drive revenue.",
  },
  ETON: {
    angle:
      "Eton sells rare-disease pharmaceuticals, so product launches and acquisitions drive growth.",
  },
  ETSY: {
    angle:
      "Etsy is a marketplace for handmade goods, so GMS, take rate and active buyers drive revenue.",
  },
  EW: {
    angle:
      "Edwards sells heart valves and critical-care devices, so procedure growth and TAVR adoption drive revenue.",
  },
  EXEL: {
    angle:
      "Exelixis sells oncology therapies, so cabozantinib franchise durability and pipeline readouts drive value.",
  },
  EXP: {
    angle:
      "Eagle Materials makes cement and wallboard, so construction demand, pricing and capacity drive margins.",
  },
  EXPE: {
    angle:
      "Expedia is an online travel agency, so bookings, take rate and marketing efficiency drive margins.",
  },
  FANG: {
    angle:
      "Diamondback is a Permian oil producer, so oil prices, inventory and capital returns drive cash flow.",
  },
  FAST: {
    angle:
      "Fastenal distributes industrial fasteners and supplies, so industrial demand, onsite penetration and pricing drive margins.",
  },
  FDS: {
    angle:
      "FactSet sells financial data and analytics, so subscriptions, retention and AI products drive growth.",
  },
  FFIV: {
    angle:
      "F5 sells application delivery and security, so hardware refresh and software-subscription mix drive revenue.",
  },
  FIS: {
    angle:
      "FIS sells banking and capital-markets software, so renewals, cloud migration and margin improvement drive earnings.",
  },
  FISV: {
    angle:
      "Fiserv sells merchant acquiring and banking software, so volume, take rate and integration drive margins.",
  },
  FITB: {
    angle:
      "Fifth Third is a regional bank, so net interest margin, credit and fees drive earnings.",
  },
  FIVE: {
    angle:
      "Five Below is a value retailer, so comparable sales, new stores and shrink drive margins.",
  },
  FIVN: {
    angle:
      "Five9 sells contact-center software, so seat growth, AI attach and retention drive revenue.",
  },
  FLEX: {
    angle:
      "Flex provides electronics manufacturing, so program ramps, data-center power and margin mix drive revenue.",
  },
  FLS: {
    angle:
      "Flowserve makes flow-control equipment, so aftermarket, backlog and energy capex drive margins.",
  },
  FLYW: {
    angle:
      "Flywire enables cross-border education and healthcare payments, so payment volume, take rate and client growth drive revenue.",
  },
  FMC: {
    angle:
      "FMC sells crop-protection chemicals, so volume, pricing and channel inventory drive margins.",
  },
  FN: {
    angle:
      "Fabrinet makes optical and precision components, so AI optical demand and customer concentration drive revenue.",
  },
  FND: {
    angle:
      "Floor & Decor sells hard-surface flooring, so housing turnover, comparable sales and new stores drive margins.",
  },
  FNF: {
    angle:
      "Fidelity National Financial sells title insurance, so mortgage volumes, claims and investment income drive earnings.",
  },
  FRSH: {
    angle:
      "Freshworks sells customer-support software, so seat growth, retention and margin expansion drive revenue.",
  },
  FSLR: {
    angle:
      "First Solar makes thin-film solar modules, so bookings, manufacturing capacity and policy credits drive margins.",
  },
  GD: {
    angle:
      "General Dynamics is a defense prime with aerospace and marine franchises, so backlog and program execution drive revenue.",
  },
  GDDY: {
    angle:
      "GoDaddy sells domains and small-business tools, so ARPU, payments and retention drive revenue.",
  },
  GDYN: {
    angle:
      "Grid Dynamics provides AI and digital-engineering services, so client spending and utilisation drive margins.",
  },
  GEN: {
    angle:
      "Gen Digital sells consumer cyber-safety software, so subscriptions, bundling and retention drive revenue.",
  },
  GENI: {
    angle:
      "Genius Sports provides sports data and betting technology, so league rights, betting volumes and margin mix drive revenue.",
  },
  GEO: {
    angle:
      "GEO operates secure facilities and monitoring for governments, so contract wins, occupancy and reimbursement drive revenue.",
  },
  GFL: {
    angle:
      "GFL provides waste management, so volume, pricing and acquisition integration drive margins.",
  },
  GGG: {
    angle:
      "Graco makes fluid-handling equipment, so contractor and industrial demand drive margins.",
  },
  GILD: {
    angle:
      "Gilead sells HIV, oncology and cell therapies, so patent timing, launches and pipeline readouts drive value.",
  },
  GKOS: {
    angle:
      "Glaukos sells ophthalmic devices, so procedure adoption and reimbursement drive growth.",
  },
  GL: {
    angle:
      "Globe Life sells life and supplemental health insurance, so underwriting, persistency and investment income drive earnings.",
  },
  GLW: {
    angle:
      "Corning makes optical fiber, display glass and specialty materials, so AI data-center demand and display pricing drive margins.",
  },
  GMAB: {
    angle:
      "Genmab develops antibody therapeutics, so royalty streams and pipeline readouts drive value.",
  },
  GNRC: {
    angle:
      "Generac sells backup generators and energy technology, so outage activity, residential demand and clean-energy products drive revenue.",
  },
};
