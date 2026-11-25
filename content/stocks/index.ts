import type { StockStory } from "./types";
import { NVDA } from "./NVDA";
import { MSFT } from "./MSFT";
import { AAPL } from "./AAPL";
import { GOOGL } from "./GOOGL";
import { AMZN } from "./AMZN";
import { META } from "./META";
import { AVGO } from "./AVGO";
import { TSLA } from "./TSLA";
import { LLY } from "./LLY";
import { JPM } from "./JPM";
import { ORCL } from "./ORCL";
import { AMD } from "./AMD";
import { MU } from "./MU";
import { AMAT } from "./AMAT";
import { LRCX } from "./LRCX";
import { KLAC } from "./KLAC";
import { ANET } from "./ANET";
import { CDNS } from "./CDNS";
import { SNPS } from "./SNPS";
import { NOW } from "./NOW";
import { PANW } from "./PANW";
import { CRWD } from "./CRWD";
import { INTU } from "./INTU";
import { APH } from "./APH";
import { PLTR } from "./PLTR";
import { ADI } from "./ADI";
import { FICO } from "./FICO";
import { ADBE } from "./ADBE";
import { CRM } from "./CRM";
import { CSCO } from "./CSCO";
import { DELL } from "./DELL";
import { HPQ } from "./HPQ";
import { IBM } from "./IBM";
import { INTC } from "./INTC";
import { QCOM } from "./QCOM";
import { TXN } from "./TXN";
import { DDOG } from "./DDOG";
import { SNOW } from "./SNOW";
import { NFLX } from "./NFLX";
import { TMUS } from "./TMUS";
import { DIS } from "./DIS";
import { CMCSA } from "./CMCSA";
import { SPOT } from "./SPOT";
import { PINS } from "./PINS";
import { HD } from "./HD";
import { LOW } from "./LOW";
import { MCD } from "./MCD";
import { BKNG } from "./BKNG";
import { TJX } from "./TJX";
import { ORLY } from "./ORLY";
import { RCL } from "./RCL";
import { CMG } from "./CMG";
import { DHI } from "./DHI";
import { ABNB } from "./ABNB";
import { UBER } from "./UBER";
import { SHOP } from "./SHOP";
import { COST } from "./COST";
import { WMT } from "./WMT";
import { PG } from "./PG";
import { KO } from "./KO";
import { PM } from "./PM";
import { CL } from "./CL";
import { PEP } from "./PEP";
import { JNJ } from "./JNJ";
import { ABBV } from "./ABBV";
import { ISRG } from "./ISRG";
import { TMO } from "./TMO";
import { VRTX } from "./VRTX";
import { ABT } from "./ABT";
import { BSX } from "./BSX";
import { SYK } from "./SYK";
import { MRK } from "./MRK";
import { REGN } from "./REGN";
import { ZTS } from "./ZTS";
import { IDXX } from "./IDXX";
import { PFE } from "./PFE";
import { UNH } from "./UNH";
import { BAC } from "./BAC";
import { GS } from "./GS";
import { MS } from "./MS";
import { V } from "./V";
import { MA } from "./MA";
import { BRK_B } from "./BRK.B";
import { SPGI } from "./SPGI";
import { BLK } from "./BLK";
import { AXP } from "./AXP";
import { SCHW } from "./SCHW";
import { CB } from "./CB";
import { PGR } from "./PGR";
import { ICE } from "./ICE";
import { CME } from "./CME";
import { AIG } from "./AIG";
import { C } from "./C";
import { WFC } from "./WFC";
import { GE } from "./GE";
import { GEV } from "./GEV";
import { CAT } from "./CAT";
import { RTX } from "./RTX";
import { ETN } from "./ETN";
import { VRT } from "./VRT";
import { PH } from "./PH";
import { URI } from "./URI";
import { UNP } from "./UNP";
import { WM } from "./WM";
import { TT } from "./TT";
import { HWM } from "./HWM";
import { AXON } from "./AXON";
import { BA } from "./BA";
import { DE } from "./DE";
import { HON } from "./HON";
import { LMT } from "./LMT";
import { XOM } from "./XOM";
import { CVX } from "./CVX";
import { COP } from "./COP";
import { EOG } from "./EOG";
import { WMB } from "./WMB";
import { NEE } from "./NEE";
import { CEG } from "./CEG";
import { VST } from "./VST";
import { SO } from "./SO";
import { DUK } from "./DUK";
import { LIN } from "./LIN";
import { SHW } from "./SHW";
import { FCX } from "./FCX";
import { ECL } from "./ECL";
import { PLD } from "./PLD";
import { EQIX } from "./EQIX";
import { WELL } from "./WELL";
import { CRDO } from "./CRDO";
import { ALAB } from "./ALAB";
import { CLS } from "./CLS";
import { CIEN } from "./CIEN";
import { LITE } from "./LITE";
import { COHR } from "./COHR";
import { POWL } from "./POWL";
import { NVT } from "./NVT";
import { FIX } from "./FIX";
import { STRL } from "./STRL";
import { BE } from "./BE";
import { NBIS } from "./NBIS";
import { IREN } from "./IREN";
import { APLD } from "./APLD";
import { CRWV } from "./CRWV";
import { AMSC } from "./AMSC";
import { PSTG } from "./PSTG";
import { ONTO } from "./ONTO";
import { CAMT } from "./CAMT";
import { FORM } from "./FORM";
import { RMBS } from "./RMBS";
import { SITM } from "./SITM";
import { LSCC } from "./LSCC";
import { MTSI } from "./MTSI";
import { AEIS } from "./AEIS";
import { POWI } from "./POWI";
import { AMKR } from "./AMKR";
import { S } from "./S";
import { RBRK } from "./RBRK";
import { TENB } from "./TENB";
import { GTLB } from "./GTLB";
import { IOT } from "./IOT";
import { PEGA } from "./PEGA";
import { ESTC } from "./ESTC";
import { MNDY } from "./MNDY";
import { IONQ } from "./IONQ";
import { RGTI } from "./RGTI";
import { QBTS } from "./QBTS";
import { SOFI } from "./SOFI";
import { AFRM } from "./AFRM";
import { UPST } from "./UPST";
import { TOST } from "./TOST";
import { FOUR } from "./FOUR";
import { HOOD } from "./HOOD";
import { CRCL } from "./CRCL";
import { PYPL } from "./PYPL";
import { PODD } from "./PODD";
import { TMDX } from "./TMDX";
import { INSP } from "./INSP";
import { PEN } from "./PEN";
import { GMED } from "./GMED";
import { TEM } from "./TEM";
import { HIMS } from "./HIMS";
import { VKTX } from "./VKTX";
import { CRNX } from "./CRNX";
import { RYTM } from "./RYTM";
import { INSM } from "./INSM";
import { MDGL } from "./MDGL";
import { KRYS } from "./KRYS";
import { BBIO } from "./BBIO";
import { ACLX } from "./ACLX";
import { RKLB } from "./RKLB";
import { ASTS } from "./ASTS";
import { LUNR } from "./LUNR";
import { KTOS } from "./KTOS";
import { AVAV } from "./AVAV";
import { PL } from "./PL";
import { JOBY } from "./JOBY";
import { ACHR } from "./ACHR";
import { SYM } from "./SYM";
import { RDW } from "./RDW";
import { OKLO } from "./OKLO";
import { SMR } from "./SMR";
import { UEC } from "./UEC";
import { LEU } from "./LEU";
import { FLNC } from "./FLNC";
import { MP } from "./MP";
import { USAR } from "./USAR";
import { ATI } from "./ATI";
import { CDE } from "./CDE";
import { IDR } from "./IDR";
import { TPL } from "./TPL";
import { CAVA } from "./CAVA";
import { BROS } from "./BROS";
import { ELF } from "./ELF";
import { ONON } from "./ONON";
import { CELH } from "./CELH";
import { DUOL } from "./DUOL";
import { RDDT } from "./RDDT";
import { WING } from "./WING";
import { AAON } from "./AAON";
import { MLI } from "./MLI";
import { ROAD } from "./ROAD";
import { WTS } from "./WTS";
import { DY } from "./DY";
import { BWXT } from "./BWXT";
import { KNF } from "./KNF";
import { KNSL } from "./KNSL";
import { RYAN } from "./RYAN";
import { PLMR } from "./PLMR";
import { EVR } from "./EVR";
import { BILL } from "./BILL";
import { BOX } from "./BOX";
import { CHKP } from "./CHKP";
import { EPAM } from "./EPAM";
import { GDYN } from "./GDYN";
import { KVYO } from "./KVYO";
import { NTSK } from "./NTSK";
import { ZS } from "./ZS";
import { APPF } from "./APPF";
import { CFLT } from "./CFLT";
import { COUR } from "./COUR";
import { CYBR } from "./CYBR";
import { DBX } from "./DBX";
import { DOCN } from "./DOCN";
import { DOCU } from "./DOCU";
import { DT } from "./DT";
import { FIVN } from "./FIVN";
import { FLYW } from "./FLYW";
import { FRSH } from "./FRSH";
import { GDDY } from "./GDDY";
import { GWRE } from "./GWRE";
import { HUBS } from "./HUBS";
import { MANH } from "./MANH";
import { MDB } from "./MDB";
import { NEWR } from "./NEWR";
import { OKTA } from "./OKTA";
import { ADSK } from "./ADSK";
import { ALTR } from "./ALTR";
import { FFIV } from "./FFIV";
import { GEN } from "./GEN";
import { JNPR } from "./JNPR";
import { NET } from "./NET";
import { NICE } from "./NICE";
import { ACIW } from "./ACIW";
import { ACLS } from "./ACLS";
import { ALGM } from "./ALGM";
import { ARM } from "./ARM";
import { ASML } from "./ASML";
import { ASX } from "./ASX";
import { CRUS } from "./CRUS";
import { ENTG } from "./ENTG";
import { MKSI } from "./MKSI";
import { MPWR } from "./MPWR";
import { NXPI } from "./NXPI";
import { ON } from "./ON";
import { DIOD } from "./DIOD";
import { BABA } from "./BABA";
import { BIDU } from "./BIDU";
import { CART } from "./CART";
import { CHWY } from "./CHWY";
import { CPNG } from "./CPNG";
import { DASH } from "./DASH";
import { EBAY } from "./EBAY";
import { ETSY } from "./ETSY";
import { EXPE } from "./EXPE";
import { JD } from "./JD";
import { LYV } from "./LYV";
import { MELI } from "./MELI";
import { MTCH } from "./MTCH";
import { NTES } from "./NTES";
import { NU } from "./NU";
import { PPLI } from "./PPLI";
import { EA } from "./EA";
import { AKAM } from "./AKAM";
import { GENI } from "./GENI";
import { IRDM } from "./IRDM";
import { ADP } from "./ADP";
import { BR } from "./BR";
import { FDS } from "./FDS";
import { FISV } from "./FISV";
import { FIS } from "./FIS";
import { GPN } from "./GPN";
import { JKHY } from "./JKHY";
import { MCO } from "./MCO";
import { MSCI } from "./MSCI";
import { MORN } from "./MORN";
import { CWAN } from "./CWAN";
import { BIIB } from "./BIIB";
import { ETON } from "./ETON";
import { GILD } from "./GILD";
import { GMAB } from "./GMAB";
import { KNSA } from "./KNSA";
import { KOD } from "./KOD";
import { KYMR } from "./KYMR";
import { ALNY } from "./ALNY";
import { AMGN } from "./AMGN";
import { ARGX } from "./ARGX";
import { ASND } from "./ASND";
import { AXGN } from "./AXGN";
import { AZN } from "./AZN";
import { BNTX } from "./BNTX";
import { BMY } from "./BMY";
import { GSK } from "./GSK";
import { HALO } from "./HALO";
import { INCY } from "./INCY";
import { JAZZ } from "./JAZZ";
import { MRNA } from "./MRNA";
import { NBIX } from "./NBIX";
import { NVS } from "./NVS";
import { EXEL } from "./EXEL";
import { LH } from "./LH";
import { ACHC } from "./ACHC";
import { CI } from "./CI";
import { CNC } from "./CNC";
import { DGX } from "./DGX";
import { DHR } from "./DHR";
import { DOCS } from "./DOCS";
import { DVA } from "./DVA";
import { DXCM } from "./DXCM";
import { EHC } from "./EHC";
import { ELV } from "./ELV";
import { EW } from "./EW";
import { HCA } from "./HCA";
import { HOLX } from "./HOLX";
import { ILMN } from "./ILMN";
import { MASI } from "./MASI";
import { MOH } from "./MOH";
import { OSCR } from "./OSCR";
import { QGEN } from "./QGEN";
import { GKOS } from "./GKOS";
import { BAX } from "./BAX";
import { BDX } from "./BDX";
import { AIT } from "./AIT";
import { AME } from "./AME";
import { AZEK } from "./AZEK";
import { BLDR } from "./BLDR";
import { CARR } from "./CARR";
import { CPRT } from "./CPRT";
import { CR } from "./CR";
import { CTAS } from "./CTAS";
import { DCI } from "./DCI";
import { DOV } from "./DOV";
import { EMR } from "./EMR";
import { FAST } from "./FAST";
import { FLEX } from "./FLEX";
import { FLS } from "./FLS";
import { FN } from "./FN";
import { GGG } from "./GGG";
import { GLW } from "./GLW";
import { GWW } from "./GWW";
import { HUBB } from "./HUBB";
import { IEX } from "./IEX";
import { IR } from "./IR";
import { ITW } from "./ITW";
import { J } from "./J";
import { JBL } from "./JBL";
import { JCI } from "./JCI";
import { MSA } from "./MSA";
import { NDSN } from "./NDSN";
import { OTIS } from "./OTIS";
import { ROP } from "./ROP";
import { VLTO } from "./VLTO";
import { CW } from "./CW";
import { ACM } from "./ACM";
import { GEO } from "./GEO";
import { GFL } from "./GFL";
import { DRS } from "./DRS";
import { GD } from "./GD";
import { HEI } from "./HEI";
import { HII } from "./HII";
import { LHX } from "./LHX";
import { NOC } from "./NOC";
import { ALK } from "./ALK";
import { AUR } from "./AUR";
import { DAL } from "./DAL";
import { LUV } from "./LUV";
import { MBLY } from "./MBLY";
import { OPLN } from "./OPLN";
import { BKR } from "./BKR";
import { CTRA } from "./CTRA";
import { DVN } from "./DVN";
import { EQT } from "./EQT";
import { FANG } from "./FANG";
import { HAL } from "./HAL";
import { KMI } from "./KMI";
import { LNG } from "./LNG";
import { MPC } from "./MPC";
import { OKE } from "./OKE";
import { OXY } from "./OXY";
import { AEP } from "./AEP";
import { AES } from "./AES";
import { ARRY } from "./ARRY";
import { ENPH } from "./ENPH";
import { FSLR } from "./FSLR";
import { GNRC } from "./GNRC";
import { NRG } from "./NRG";
import { NXT } from "./NXT";
import { AEM } from "./AEM";
import { ALB } from "./ALB";
import { APD } from "./APD";
import { AVY } from "./AVY";
import { BALL } from "./BALL";
import { CCJ } from "./CCJ";
import { CCK } from "./CCK";
import { CF } from "./CF";
import { CTVA } from "./CTVA";
import { DNN } from "./DNN";
import { EMN } from "./EMN";
import { EXP } from "./EXP";
import { FMC } from "./FMC";
import { GOLD } from "./GOLD";
import { MLM } from "./MLM";
import { MOS } from "./MOS";
import { NEM } from "./NEM";
import { NUE } from "./NUE";
import { PPG } from "./PPG";
import { RGLD } from "./RGLD";
import { RPM } from "./RPM";
import { ANF } from "./ANF";
import { SG } from "./SG";
import { SN } from "./SN";
import { TGT } from "./TGT";
import { AAP } from "./AAP";
import { AZO } from "./AZO";
import { BJ } from "./BJ";
import { BURL } from "./BURL";
import { CASY } from "./CASY";
import { CCL } from "./CCL";
import { COTY } from "./COTY";
import { CROX } from "./CROX";
import { DECK } from "./DECK";
import { DKS } from "./DKS";
import { DPZ } from "./DPZ";
import { FIVE } from "./FIVE";
import { FND } from "./FND";
import { GPC } from "./GPC";
import { HLT } from "./HLT";
import { HOUS } from "./HOUS";
import { LULU } from "./LULU";
import { LVS } from "./LVS";
import { MAR } from "./MAR";
import { MGM } from "./MGM";
import { EL } from "./EL";
import { CAG } from "./CAG";
import { CHD } from "./CHD";
import { CLX } from "./CLX";
import { HRL } from "./HRL";
import { KHC } from "./KHC";
import { LW } from "./LW";
import { MDLZ } from "./MDLZ";
import { ACGL } from "./ACGL";
import { AFL } from "./AFL";
import { AIZ } from "./AIZ";
import { AJG } from "./AJG";
import { ALLY } from "./ALLY";
import { AON } from "./AON";
import { BRO } from "./BRO";
import { CINF } from "./CINF";
import { DFS } from "./DFS";
import { EG } from "./EG";
import { ERIE } from "./ERIE";
import { FITB } from "./FITB";
import { FNF } from "./FNF";
import { GL } from "./GL";
import { HBAN } from "./HBAN";
import { KEY } from "./KEY";
import { MET } from "./MET";
import { MRSH } from "./MRSH";
import { CFG } from "./CFG";
import { AMP } from "./AMP";
import { APO } from "./APO";
import { ARES } from "./ARES";
import { BX } from "./BX";
import { CBOE } from "./CBOE";
import { CG } from "./CG";
import { HAPN } from "./HAPN";
import { IBKR } from "./IBKR";
import { KKR } from "./KKR";
import { LPLA } from "./LPLA";
import { MKTX } from "./MKTX";
import { COIN } from "./COIN";

export const STOCK_STORIES: Record<string, StockStory> = {
  "NVDA": NVDA,
  "MSFT": MSFT,
  "AAPL": AAPL,
  "GOOGL": GOOGL,
  "AMZN": AMZN,
  "META": META,
  "AVGO": AVGO,
  "TSLA": TSLA,
  "LLY": LLY,
  "JPM": JPM,
  "ORCL": ORCL,
  "AMD": AMD,
  "MU": MU,
  "AMAT": AMAT,
  "LRCX": LRCX,
  "KLAC": KLAC,
  "ANET": ANET,
  "CDNS": CDNS,
  "SNPS": SNPS,
  "NOW": NOW,
  "PANW": PANW,
  "CRWD": CRWD,
  "INTU": INTU,
  "APH": APH,
  "PLTR": PLTR,
  "ADI": ADI,
  "FICO": FICO,
  "ADBE": ADBE,
  "CRM": CRM,
  "CSCO": CSCO,
  "DELL": DELL,
  "HPQ": HPQ,
  "IBM": IBM,
  "INTC": INTC,
  "QCOM": QCOM,
  "TXN": TXN,
  "DDOG": DDOG,
  "SNOW": SNOW,
  "NFLX": NFLX,
  "TMUS": TMUS,
  "DIS": DIS,
  "CMCSA": CMCSA,
  "SPOT": SPOT,
  "PINS": PINS,
  "HD": HD,
  "LOW": LOW,
  "MCD": MCD,
  "BKNG": BKNG,
  "TJX": TJX,
  "ORLY": ORLY,
  "RCL": RCL,
  "CMG": CMG,
  "DHI": DHI,
  "ABNB": ABNB,
  "UBER": UBER,
  "SHOP": SHOP,
  "COST": COST,
  "WMT": WMT,
  "PG": PG,
  "KO": KO,
  "PM": PM,
  "CL": CL,
  "PEP": PEP,
  "JNJ": JNJ,
  "ABBV": ABBV,
  "ISRG": ISRG,
  "TMO": TMO,
  "VRTX": VRTX,
  "ABT": ABT,
  "BSX": BSX,
  "SYK": SYK,
  "MRK": MRK,
  "REGN": REGN,
  "ZTS": ZTS,
  "IDXX": IDXX,
  "PFE": PFE,
  "UNH": UNH,
  "BAC": BAC,
  "GS": GS,
  "MS": MS,
  "V": V,
  "MA": MA,
  "BRK.B": BRK_B,
  "SPGI": SPGI,
  "BLK": BLK,
  "AXP": AXP,
  "SCHW": SCHW,
  "CB": CB,
  "PGR": PGR,
  "ICE": ICE,
  "CME": CME,
  "AIG": AIG,
  "C": C,
  "WFC": WFC,
  "GE": GE,
  "GEV": GEV,
  "CAT": CAT,
  "RTX": RTX,
  "ETN": ETN,
  "VRT": VRT,
  "PH": PH,
  "URI": URI,
  "UNP": UNP,
  "WM": WM,
  "TT": TT,
  "HWM": HWM,
  "AXON": AXON,
  "BA": BA,
  "DE": DE,
  "HON": HON,
  "LMT": LMT,
  "XOM": XOM,
  "CVX": CVX,
  "COP": COP,
  "EOG": EOG,
  "WMB": WMB,
  "NEE": NEE,
  "CEG": CEG,
  "VST": VST,
  "SO": SO,
  "DUK": DUK,
  "LIN": LIN,
  "SHW": SHW,
  "FCX": FCX,
  "ECL": ECL,
  "PLD": PLD,
  "EQIX": EQIX,
  "WELL": WELL,
  "CRDO": CRDO,
  "ALAB": ALAB,
  "CLS": CLS,
  "CIEN": CIEN,
  "LITE": LITE,
  "COHR": COHR,
  "POWL": POWL,
  "NVT": NVT,
  "FIX": FIX,
  "STRL": STRL,
  "BE": BE,
  "NBIS": NBIS,
  "IREN": IREN,
  "APLD": APLD,
  "CRWV": CRWV,
  "AMSC": AMSC,
  "PSTG": PSTG,
  "ONTO": ONTO,
  "CAMT": CAMT,
  "FORM": FORM,
  "RMBS": RMBS,
  "SITM": SITM,
  "LSCC": LSCC,
  "MTSI": MTSI,
  "AEIS": AEIS,
  "POWI": POWI,
  "AMKR": AMKR,
  "S": S,
  "RBRK": RBRK,
  "TENB": TENB,
  "GTLB": GTLB,
  "IOT": IOT,
  "PEGA": PEGA,
  "ESTC": ESTC,
  "MNDY": MNDY,
  "IONQ": IONQ,
  "RGTI": RGTI,
  "QBTS": QBTS,
  "SOFI": SOFI,
  "AFRM": AFRM,
  "UPST": UPST,
  "TOST": TOST,
  "FOUR": FOUR,
  "HOOD": HOOD,
  "CRCL": CRCL,
  "PYPL": PYPL,
  "PODD": PODD,
  "TMDX": TMDX,
  "INSP": INSP,
  "PEN": PEN,
  "GMED": GMED,
  "TEM": TEM,
  "HIMS": HIMS,
  "VKTX": VKTX,
  "CRNX": CRNX,
  "RYTM": RYTM,
  "INSM": INSM,
  "MDGL": MDGL,
  "KRYS": KRYS,
  "BBIO": BBIO,
  "ACLX": ACLX,
  "RKLB": RKLB,
  "ASTS": ASTS,
  "LUNR": LUNR,
  "KTOS": KTOS,
  "AVAV": AVAV,
  "PL": PL,
  "JOBY": JOBY,
  "ACHR": ACHR,
  "SYM": SYM,
  "RDW": RDW,
  "OKLO": OKLO,
  "SMR": SMR,
  "UEC": UEC,
  "LEU": LEU,
  "FLNC": FLNC,
  "MP": MP,
  "USAR": USAR,
  "ATI": ATI,
  "CDE": CDE,
  "IDR": IDR,
  "TPL": TPL,
  "CAVA": CAVA,
  "BROS": BROS,
  "ELF": ELF,
  "ONON": ONON,
  "CELH": CELH,
  "DUOL": DUOL,
  "RDDT": RDDT,
  "WING": WING,
  "AAON": AAON,
  "MLI": MLI,
  "ROAD": ROAD,
  "WTS": WTS,
  "DY": DY,
  "BWXT": BWXT,
  "KNF": KNF,
  "KNSL": KNSL,
  "RYAN": RYAN,
  "PLMR": PLMR,
  "EVR": EVR,
  "BILL": BILL,
  "BOX": BOX,
  "CHKP": CHKP,
  "EPAM": EPAM,
  "GDYN": GDYN,
  "KVYO": KVYO,
  "NTSK": NTSK,
  "ZS": ZS,
  "APPF": APPF,
  "CFLT": CFLT,
  "COUR": COUR,
  "CYBR": CYBR,
  "DBX": DBX,
  "DOCN": DOCN,
  "DOCU": DOCU,
  "DT": DT,
  "FIVN": FIVN,
  "FLYW": FLYW,
  "FRSH": FRSH,
  "GDDY": GDDY,
  "GWRE": GWRE,
  "HUBS": HUBS,
  "MANH": MANH,
  "MDB": MDB,
  "NEWR": NEWR,
  "OKTA": OKTA,
  "ADSK": ADSK,
  "ALTR": ALTR,
  "FFIV": FFIV,
  "GEN": GEN,
  "JNPR": JNPR,
  "NET": NET,
  "NICE": NICE,
  "ACIW": ACIW,
  "ACLS": ACLS,
  "ALGM": ALGM,
  "ARM": ARM,
  "ASML": ASML,
  "ASX": ASX,
  "CRUS": CRUS,
  "ENTG": ENTG,
  "MKSI": MKSI,
  "MPWR": MPWR,
  "NXPI": NXPI,
  "ON": ON,
  "DIOD": DIOD,
  "BABA": BABA,
  "BIDU": BIDU,
  "CART": CART,
  "CHWY": CHWY,
  "CPNG": CPNG,
  "DASH": DASH,
  "EBAY": EBAY,
  "ETSY": ETSY,
  "EXPE": EXPE,
  "JD": JD,
  "LYV": LYV,
  "MELI": MELI,
  "MTCH": MTCH,
  "NTES": NTES,
  "NU": NU,
  "PPLI": PPLI,
  "EA": EA,
  "AKAM": AKAM,
  "GENI": GENI,
  "IRDM": IRDM,
  "ADP": ADP,
  "BR": BR,
  "FDS": FDS,
  "FISV": FISV,
  "FIS": FIS,
  "GPN": GPN,
  "JKHY": JKHY,
  "MCO": MCO,
  "MSCI": MSCI,
  "MORN": MORN,
  "CWAN": CWAN,
  "BIIB": BIIB,
  "ETON": ETON,
  "GILD": GILD,
  "GMAB": GMAB,
  "KNSA": KNSA,
  "KOD": KOD,
  "KYMR": KYMR,
  "ALNY": ALNY,
  "AMGN": AMGN,
  "ARGX": ARGX,
  "ASND": ASND,
  "AXGN": AXGN,
  "AZN": AZN,
  "BNTX": BNTX,
  "BMY": BMY,
  "GSK": GSK,
  "HALO": HALO,
  "INCY": INCY,
  "JAZZ": JAZZ,
  "MRNA": MRNA,
  "NBIX": NBIX,
  "NVS": NVS,
  "EXEL": EXEL,
  "LH": LH,
  "ACHC": ACHC,
  "CI": CI,
  "CNC": CNC,
  "DGX": DGX,
  "DHR": DHR,
  "DOCS": DOCS,
  "DVA": DVA,
  "DXCM": DXCM,
  "EHC": EHC,
  "ELV": ELV,
  "EW": EW,
  "HCA": HCA,
  "HOLX": HOLX,
  "ILMN": ILMN,
  "MASI": MASI,
  "MOH": MOH,
  "OSCR": OSCR,
  "QGEN": QGEN,
  "GKOS": GKOS,
  "BAX": BAX,
  "BDX": BDX,
  "AIT": AIT,
  "AME": AME,
  "AZEK": AZEK,
  "BLDR": BLDR,
  "CARR": CARR,
  "CPRT": CPRT,
  "CR": CR,
  "CTAS": CTAS,
  "DCI": DCI,
  "DOV": DOV,
  "EMR": EMR,
  "FAST": FAST,
  "FLEX": FLEX,
  "FLS": FLS,
  "FN": FN,
  "GGG": GGG,
  "GLW": GLW,
  "GWW": GWW,
  "HUBB": HUBB,
  "IEX": IEX,
  "IR": IR,
  "ITW": ITW,
  "J": J,
  "JBL": JBL,
  "JCI": JCI,
  "MSA": MSA,
  "NDSN": NDSN,
  "OTIS": OTIS,
  "ROP": ROP,
  "VLTO": VLTO,
  "CW": CW,
  "ACM": ACM,
  "GEO": GEO,
  "GFL": GFL,
  "DRS": DRS,
  "GD": GD,
  "HEI": HEI,
  "HII": HII,
  "LHX": LHX,
  "NOC": NOC,
  "ALK": ALK,
  "AUR": AUR,
  "DAL": DAL,
  "LUV": LUV,
  "MBLY": MBLY,
  "OPLN": OPLN,
  "BKR": BKR,
  "CTRA": CTRA,
  "DVN": DVN,
  "EQT": EQT,
  "FANG": FANG,
  "HAL": HAL,
  "KMI": KMI,
  "LNG": LNG,
  "MPC": MPC,
  "OKE": OKE,
  "OXY": OXY,
  "AEP": AEP,
  "AES": AES,
  "ARRY": ARRY,
  "ENPH": ENPH,
  "FSLR": FSLR,
  "GNRC": GNRC,
  "NRG": NRG,
  "NXT": NXT,
  "AEM": AEM,
  "ALB": ALB,
  "APD": APD,
  "AVY": AVY,
  "BALL": BALL,
  "CCJ": CCJ,
  "CCK": CCK,
  "CF": CF,
  "CTVA": CTVA,
  "DNN": DNN,
  "EMN": EMN,
  "EXP": EXP,
  "FMC": FMC,
  "GOLD": GOLD,
  "MLM": MLM,
  "MOS": MOS,
  "NEM": NEM,
  "NUE": NUE,
  "PPG": PPG,
  "RGLD": RGLD,
  "RPM": RPM,
  "ANF": ANF,
  "SG": SG,
  "SN": SN,
  "TGT": TGT,
  "AAP": AAP,
  "AZO": AZO,
  "BJ": BJ,
  "BURL": BURL,
  "CASY": CASY,
  "CCL": CCL,
  "COTY": COTY,
  "CROX": CROX,
  "DECK": DECK,
  "DKS": DKS,
  "DPZ": DPZ,
  "FIVE": FIVE,
  "FND": FND,
  "GPC": GPC,
  "HLT": HLT,
  "HOUS": HOUS,
  "LULU": LULU,
  "LVS": LVS,
  "MAR": MAR,
  "MGM": MGM,
  "EL": EL,
  "CAG": CAG,
  "CHD": CHD,
  "CLX": CLX,
  "HRL": HRL,
  "KHC": KHC,
  "LW": LW,
  "MDLZ": MDLZ,
  "ACGL": ACGL,
  "AFL": AFL,
  "AIZ": AIZ,
  "AJG": AJG,
  "ALLY": ALLY,
  "AON": AON,
  "BRO": BRO,
  "CINF": CINF,
  "DFS": DFS,
  "EG": EG,
  "ERIE": ERIE,
  "FITB": FITB,
  "FNF": FNF,
  "GL": GL,
  "HBAN": HBAN,
  "KEY": KEY,
  "MET": MET,
  "MRSH": MRSH,
  "CFG": CFG,
  "AMP": AMP,
  "APO": APO,
  "ARES": ARES,
  "BX": BX,
  "CBOE": CBOE,
  "CG": CG,
  "HAPN": HAPN,
  "IBKR": IBKR,
  "KKR": KKR,
  "LPLA": LPLA,
  "MKTX": MKTX,
  "COIN": COIN,
};

export function getStockStory(ticker: string): StockStory | null {
  return STOCK_STORIES[ticker.toUpperCase()] ?? null;
}

export type { StockStory } from "./types";
