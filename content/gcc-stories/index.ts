import type { StockStory } from "@/content/stocks/types";
import { saudiAramco } from "./2222";
import { alRajhiBank } from "./1120";
import { saudiNationalBank } from "./1180";
import { riyadBank } from "./1010";
import { saudiAwwalBank } from "./1060";
import { alinmaBank } from "./1150";
import { arabNationalBank } from "./1080";
import { banqueSaudiFransi } from "./1050";
import { bankAlbilad } from "./1140";
import { bankAljazira } from "./1020";
import { maaden } from "./1211";
import { saudiTelecom } from "./7010";
import { sabic } from "./2010";
import { acwaPower } from "./2082";
import { drSulaimanAlHabib } from "./4013";
import { saudiElectricity } from "./5110";
import { sabicAgriNutrients } from "./2020";
import { elmCompany } from "./7203";
import { mobily } from "./7020";
import { almarai } from "./2280";
import { internationalHolding } from "./IHC";
import { firstAbuDhabiBank } from "./FAB";
import { emiratesNbd } from "./EMIRATESNBD";
import { etisalat } from "./ETISALAT";
import { qatarNationalBank } from "./QNBK";
import { abuDhabiCommercialBank } from "./ADCB";
import { abuDhabiIslamicBank } from "./ADIB";
import { alphaDhabi } from "./ALPHADHABI";
import { mashreq } from "./MASQ";
import { du } from "./DU";
import { taqa } from "./TAQA";
import { adnocGas } from "./ADNOCGAS";
import { dewa } from "./DEWA";
import { emaar } from "./EMAAR";
import { adnocDrill } from "./ADNOCDRILL";
import { borouge } from "./BOROUGE";
import { aldar } from "./ALDAR";
import { industriesQatar } from "./IQCD";
import { dubaiIslamicBank } from "./DIB";
import { qatarIslamicBank } from "./QIBK";
import { emaarDevelopment } from "./EMAARDEV";
import { adnocLogistics } from "./ADNOCLS";
import { adnocDistribution } from "./ADNOCDIST";
import { salik } from "./SALIK";
import { ooredoo } from "./ORDS";
import { bahri } from "./4030";
import { abuDhabiPorts } from "./ADPORTS";
import { commercialBankOfDubai } from "./CBD";
import { talabat } from "./TALABAT";
import { bupaArabia } from "./8210";
import { rabigh } from "./2380";
import { airArabia } from "./AIRARABIA";
import { nakilat } from "./QGTS";
import { multiplyGroup } from "./MULTIPLY";
import { ezdan } from "./ERES";
import { solutionsByStc } from "./7202";
import { jarirMarketing } from "./4190";
import { darAlArkan } from "./4300";
import { tawuniya } from "./8010";
import { nmdc } from "./NMDC";

const STORIES: Record<string, StockStory> = {
  "2222": saudiAramco,
  "1120": alRajhiBank,
  "1180": saudiNationalBank,
  "1010": riyadBank,
  "1060": saudiAwwalBank,
  "1150": alinmaBank,
  "1080": arabNationalBank,
  "1050": banqueSaudiFransi,
  "1140": bankAlbilad,
  "1020": bankAljazira,
  "1211": maaden,
  "7010": saudiTelecom,
  "2010": sabic,
  "2082": acwaPower,
  "4013": drSulaimanAlHabib,
  "5110": saudiElectricity,
  "2020": sabicAgriNutrients,
  "7203": elmCompany,
  "7020": mobily,
  "2280": almarai,
  IHC: internationalHolding,
  FAB: firstAbuDhabiBank,
  EMIRATESNBD: emiratesNbd,
  ETISALAT: etisalat,
  QNBK: qatarNationalBank,
  ADCB: abuDhabiCommercialBank,
  ADIB: abuDhabiIslamicBank,
  ALPHADHABI: alphaDhabi,
  MASQ: mashreq,
  DU: du,
  TAQA: taqa,
  ADNOCGAS: adnocGas,
  DEWA: dewa,
  EMAAR: emaar,
  ADNOCDRILL: adnocDrill,
  BOROUGE: borouge,
  ALDAR: aldar,
  IQCD: industriesQatar,
  DIB: dubaiIslamicBank,
  QIBK: qatarIslamicBank,
  EMAARDEV: emaarDevelopment,
  ADNOCLS: adnocLogistics,
  ADNOCDIST: adnocDistribution,
  SALIK: salik,
  ORDS: ooredoo,
  "4030": bahri,
  ADPORTS: abuDhabiPorts,
  CBD: commercialBankOfDubai,
  TALABAT: talabat,
  "8210": bupaArabia,
  "2380": rabigh,
  AIRARABIA: airArabia,
  QGTS: nakilat,
  MULTIPLY: multiplyGroup,
  ERES: ezdan,
  "7202": solutionsByStc,
  "4190": jarirMarketing,
  "4300": darAlArkan,
  "8010": tawuniya,
  NMDC: nmdc,
};

export function getGccStockStory(ticker: string): StockStory | null {
  return STORIES[ticker.toUpperCase()] ?? null;
}

export const GCC_STORY_TICKERS = Object.keys(STORIES);
