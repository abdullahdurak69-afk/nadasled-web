/**
 * /araclar altındaki hesaplama araçlarının ortak matematiği.
 *
 * Bileşenlerden ayrı duruyor: dört araç da aynı trafo kademelerini, aynı
 * güvenlik payını ve aynı kablo kesiti eşiklerini kullanmalı. Formüller
 * blog'daki [LED trafo hesaplama] yazısıyla birebir aynı sayıları vermeli,
 * yoksa aynı soruya iki farklı cevap veren iki sayfamız olur.
 */

/** Piyasada bulunan standart trafo güçleri (W). */
export const PSU_LADDER = [60, 100, 150, 200, 250, 300, 350, 400, 500];

/**
 * Tek trafonun beslemesi önerilen üst sınır (W).
 *
 * Teknik sınır değil tercih: bunun üstünde yükü bölmek arıza anında tabelanın
 * tamamının sönmesini önler, voltaj düşümünü ve tek noktada ısı birikmesini
 * azaltır.
 */
export const SPLIT_THRESHOLD_W = 250;

export interface PsuPick {
  /** Kaç adet trafo. */
  count: number;
  /** Trafo başına güç (W). */
  watt: number;
  /** Trafo başına amper. */
  amper: number;
  /** Toplam kurulu güç (count × watt). */
  totalWatt: number;
}

/** Güvenlik payı eklenmiş güce göre trafo adedi ve kademesini seçer. */
export function pickPsu(needW: number, volt: number): PsuPick | null {
  if (!Number.isFinite(needW) || needW <= 0) return null;

  const count = needW <= SPLIT_THRESHOLD_W ? 1 : Math.ceil(needW / SPLIT_THRESHOLD_W);
  const perUnit = needW / count;
  const watt = PSU_LADDER.find((w) => w >= perUnit) ?? PSU_LADDER[PSU_LADDER.length - 1];
  return { count, watt, amper: watt / volt, totalWatt: count * watt };
}

/**
 * Akıma göre önerilen bakır kablo kesiti.
 *
 * Düşük voltajlı sistemlerde akım yüksektir; kesit yetersizse hat ısınır ve
 * hattın sonunda voltaj düşer. 10 metreyi aşan hatlarda bir kademe artırılır.
 */
export function cableSection(amper: number): string {
  if (!Number.isFinite(amper) || amper <= 0) return "—";
  if (amper <= 5) return "0,75 mm²";
  if (amper <= 10) return "1 mm²";
  if (amper <= 16) return "1,5 mm²";
  if (amper <= 25) return "2,5 mm²";
  return "4 mm²";
}

/** Tek uçtan beslenebilecek azami şerit uzunluğu (m). */
export function maxFeedLength(volt: number): number {
  return volt >= 24 ? 10 : 5;
}

export interface ModulePreset {
  id: string;
  label: string;
  /** Modül başına güç (W). */
  w: number;
}

/** Tabela modüllerinde en sık karşılaşılan güç değerleri. */
export const MODULE_PRESETS: ModulePreset[] = [
  { id: "m072", label: "3 LED 2835 mercekli — 0,72 W", w: 0.72 },
  { id: "m096", label: "3 LED 2835 — 0,96 W", w: 0.96 },
  { id: "m120", label: "3 LED 5730 — 1,2 W", w: 1.2 },
  { id: "m144", label: "3 LED 3030 — 1,44 W", w: 1.44 },
  { id: "m150", label: "4 LED 2835 — 1,5 W", w: 1.5 },
  { id: "m240", label: "6 LED 2835 — 2,4 W", w: 2.4 },
];

export interface StripPreset {
  id: string;
  label: string;
  /** Metre başına güç (W/m). */
  w: number;
  /** Tipik çalışma gerilimi. */
  volt: number;
}

/**
 * Şerit güçleri tipik ortalamalardır; aynı LED sayısına sahip iki şerit
 * arasında %20'ye varan fark olabilir. Değerler blog'daki güç tablosuyla aynı.
 */
export const STRIP_PRESETS: StripPreset[] = [
  { id: "2835-60", label: "2835 · 60 LED/m", w: 7, volt: 12 },
  { id: "2835-120", label: "2835 · 120 LED/m", w: 11, volt: 12 },
  { id: "2835-240", label: "2835 · 240 LED/m", w: 19, volt: 24 },
  { id: "5050-60", label: "5050 · 60 LED/m", w: 13, volt: 12 },
  { id: "5050-rgb", label: "5050 RGB · 60 LED/m", w: 14.4, volt: 12 },
  { id: "cob-480", label: "COB · 480 LED/m", w: 12, volt: 24 },
  { id: "cob-720", label: "COB · 720 LED/m", w: 16, volt: 24 },
  { id: "neon", label: "Neon LED (flex)", w: 10, volt: 24 },
];

/** Modül aralığına göre metrekareye düşen modül adedi. */
export function moduleDensity(spacingCm: number): number {
  return 10000 / (spacingCm * spacingCm);
}

export interface LensAdvice {
  angle: string;
  note: string;
}

/** Harf derinliğine göre mercek açısı önerisi. */
export function lensAdvice(depthCm: number): LensAdvice | null {
  if (!Number.isFinite(depthCm) || depthCm <= 0) return null;
  if (depthCm < 6)
    return {
      angle: "170°",
      note: "Sığ harfte ışık yayılacak mesafe yok. Geniş açılı mercek kullanın ve modül aralığını 8-10 cm'e düşürün, yoksa yüzeyde nokta nokta parlama olur.",
    };
  if (depthCm <= 10)
    return { angle: "160°", note: "Tabela harflerinin en yaygın derinliği; 160° mercek 12 cm aralıkla dengeli bir yüzey verir." };
  if (depthCm <= 15)
    return { angle: "145-160°", note: "Derinlik arttıkça ışık yayılacak mesafe bulur; aralığı 15 cm'e kadar açabilirsiniz." };
  return {
    angle: "120-140°",
    note: "Derin harfte dar açılı mercek gerekir; geniş açı yan duvarları aydınlatır, ön yüzey sönük kalır.",
  };
}

/**
 * Yazı tipi kalınlığına göre iki oran:
 *  - `ratio`: harf gövdesinin, harfi çevreleyen dikdörtgene alan oranı
 *  - `strokeRatio`: gövde kalınlığının harf yüksekliğine oranı
 */
export const STROKE_RATIOS = [
  { id: "ince", label: "İnce (light)", ratio: 0.3, strokeRatio: 0.1 },
  { id: "normal", label: "Normal (regular)", ratio: 0.42, strokeRatio: 0.15 },
  { id: "kalin", label: "Kalın (bold)", ratio: 0.58, strokeRatio: 0.22 },
];

/** Harf genişliğinin yüksekliğine tipik oranı. */
export const LETTER_ASPECT = 0.7;

export interface ModuleEstimate {
  /** Harf başına modül adedi. */
  perLetter: number;
  /** Tüm harflerin toplamı. */
  total: number;
  /** Aydınlatılacak toplam gövde alanı (m²). */
  areaM2: number;
}

/**
 * Kutu harf tabelada gereken modül adedini tahmin eder.
 *
 * İki tahmin alınır ve büyük olan kullanılır:
 *  - **Alan tabanlı**: gövde alanı ÷ (aralık × aralık). Büyük harflerde gövde
 *    kalınlığı modül aralığını aştığı için modüller iki boyutlu ızgaraya
 *    yerleşir; orada bu tahmin doğru olan.
 *  - **Hat tabanlı**: gövde uzunluğu ÷ aralık. Küçük harflerde gövde tek sıra
 *    modül alır, alan tahmini burada gerçeğin çok altında kalır.
 *
 * Sonuç bir tahmindir: gerçek adet harflerin şekline (O ile I aynı kutuda çok
 * farklı gövde uzunluğu verir) ve dizilim tercihine göre değişir.
 */
export function moduleCount(
  heightCm: number,
  letters: number,
  ratio: number,
  strokeRatio: number,
  spacingCm: number
): ModuleEstimate | null {
  if (!(heightCm > 0 && letters > 0 && spacingCm > 0)) return null;

  const boxAreaCm2 = heightCm * (heightCm * LETTER_ASPECT);
  const inkAreaCm2 = boxAreaCm2 * ratio;
  const strokeWidthCm = heightCm * strokeRatio;

  const areaBased = inkAreaCm2 / (spacingCm * spacingCm);
  const lengthBased = inkAreaCm2 / strokeWidthCm / spacingCm;

  // En küçük harf bile tek modülle aydınlatılmaz; alt sınır harf başına 2.
  const perLetter = Math.max(2, Math.ceil(Math.max(areaBased, lengthBased)));
  return {
    perLetter,
    total: perLetter * Math.ceil(letters),
    areaM2: (inkAreaCm2 * Math.ceil(letters)) / 10000,
  };
}

/**
 * Sayıları tr-TR biçiminde yazar (binlik ".", ondalık ",").
 *
 * toLocaleString yerine elle yazılıyor: araçlar statik export'ta önce Node'da
 * prerender ediliyor, sonra tarayıcıda hydrate oluyor. İki ortamın ICU sürümü
 * farklı biçimlendirirse React hydration uyarısı verir.
 */
export function nf(n: number, digits = 1): string {
  if (!Number.isFinite(n)) return "—";
  const neg = n < 0;
  const fixed = Math.abs(n).toFixed(digits);
  const [rawInt, rawDec] = fixed.split(".");
  const int = rawInt.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const dec = rawDec ? rawDec.replace(/0+$/, "") : "";
  return (neg ? "-" : "") + int + (dec ? "," + dec : "");
}

/** Girilen metni sayıya çevirir; virgüllü yazım da kabul edilir. */
export function parseNum(s: string): number {
  if (typeof s !== "string" || s.trim() === "") return NaN;
  return Number(s.replace(/\s/g, "").replace(",", "."));
}
