"use client";

/**
 * Tabela maliyet hesaplama.
 *
 * Araç iki iş yapıyor: ölçüden malzeme listesini çıkarıyor ve o listeyi
 * toplayıp maliyeti veriyor. Birim fiyatlar boş geliyor, kullanıcı kendi alış
 * fiyatlarını yazıyor — siteye gömülü fiyat koymuyoruz. İki sebep var: fiyat
 * proje bazlı veriliyor (llms.txt ve tüm kategori sayfaları böyle diyor) ve
 * gömülü bir fiyat listesi birkaç ay içinde yanlış bilgiye dönüşür.
 */

import { useState } from "react";
import { moduleCount, moduleDensity, nf, parseNum, pickPsu, STRIP_PRESETS, STROKE_RATIOS } from "@/lib/led-calc";
import { EmptyState, Grid, Kicker, Note, NumberField, Panel, Result, Results, Segmented, SelectField, WhatsappResult } from "./CalcUI";

type Tip = "kutu-harf" | "light-box" | "neon";

interface Row {
  id: string;
  name: string;
  qty: number;
  unit: string;
}

/** Elle fiyatlanan, miktarı ölçüden çıkmayan kalemler. */
const MANUEL_ROWS: Row[] = [
  { id: "iscilik", name: "İşçilik ve montaj", qty: 1, unit: "kalem" },
  { id: "diger", name: "Diğer (nakliye, vinç, ruhsat)", qty: 1, unit: "kalem" },
];

const LIGHT_BOX_SPACING = 15;
const KUTU_HARF_SPACING = 12;

export default function MaliyetCalc() {
  const [tip, setTip] = useState<Tip>("kutu-harf");

  // Kutu harf
  const [yukseklik, setYukseklik] = useState("50");
  const [harfAdedi, setHarfAdedi] = useState("8");
  const [derinlik, setDerinlik] = useState("8");
  const [kalinlik, setKalinlik] = useState("normal");

  // Light box
  const [en, setEn] = useState("200");
  const [boy, setBoy] = useState("80");
  const [panoAdet, setPanoAdet] = useState("1");

  // Neon / şerit
  const [metraj, setMetraj] = useState("20");
  const [seritPreset, setSeritPreset] = useState("neon");

  const [fiyat, setFiyat] = useState<Record<string, string>>({});

  const rows = buildRows();
  const gecerli = rows.length > 0;

  function buildRows(): Row[] {
    if (tip === "kutu-harf") {
      const h = parseNum(yukseklik);
      const adet = parseNum(harfAdedi);
      const d = parseNum(derinlik);
      const stroke = STROKE_RATIOS.find((s) => s.id === kalinlik) ?? STROKE_RATIOS[1];
      const est = moduleCount(h, adet, stroke.ratio, stroke.strokeRatio, KUTU_HARF_SPACING);
      if (!est || !(d > 0)) return [];

      // Harf çevresi yaklaşık 3,2 × yükseklik; kenar bandı ve yan yüzey buradan çıkar.
      const cevreM = (adet * 3.2 * h) / 100;
      const yuzeyM2 = (adet * h * h * 0.7) / 10000;
      const psu = pickPsu(est.total * 1.5 * 1.2, 12);

      return [
        { id: "modul", name: "LED modül (12 cm aralık)", qty: est.total, unit: "adet" },
        { id: "trafo", name: `LED trafo 12V ${psu ? nf(psu.watt, 0) : "—"}W`, qty: psu?.count ?? 1, unit: "adet" },
        { id: "kablo", name: "Besleme kablosu", qty: Math.ceil(adet * 2 + 5), unit: "m" },
        { id: "konnektor", name: "Hızlı konnektör / klemens", qty: Math.ceil(adet + 2), unit: "adet" },
        { id: "kompozit", name: "Alüminyum kompozit (sırt)", qty: round1(yuzeyM2), unit: "m²" },
        { id: "yan", name: "Yan yüzey profili / kompozit şerit", qty: round1((cevreM * d) / 100), unit: "m²" },
        { id: "pleksi", name: "Pleksi / akrilik ön yüz", qty: round1(yuzeyM2), unit: "m²" },
        { id: "bant", name: "Kenar bandı (kalın kenar)", qty: round1(cevreM), unit: "m" },
        ...MANUEL_ROWS,
      ];
    }

    if (tip === "light-box") {
      const e = parseNum(en);
      const b = parseNum(boy);
      const n = parseNum(panoAdet);
      if (!(e > 0 && b > 0 && n > 0)) return [];

      const alanM2 = (e * b * n) / 10000;
      const cevreM = (2 * (e + b) * n) / 100;
      const modul = Math.ceil(alanM2 * moduleDensity(LIGHT_BOX_SPACING));
      const psu = pickPsu(modul * 1.5 * 1.2, 12);

      return [
        { id: "modul", name: "Light box LED modül (15 cm aralık)", qty: modul, unit: "adet" },
        { id: "trafo", name: `LED trafo 12V ${psu ? nf(psu.watt, 0) : "—"}W`, qty: psu?.count ?? 1, unit: "adet" },
        { id: "kablo", name: "Besleme kablosu", qty: Math.ceil(alanM2 * 3 + 5), unit: "m" },
        { id: "konnektor", name: "Hızlı konnektör / klemens", qty: Math.ceil(modul / 10) + 2, unit: "adet" },
        { id: "profil", name: "Kasa profili / alüminyum çerçeve", qty: round1(cevreM), unit: "m" },
        { id: "opal", name: "Opal pleksi veya lexan yüzey", qty: round1(alanM2), unit: "m²" },
        { id: "vinil", name: "Baskı vinil / folyo", qty: round1(alanM2), unit: "m²" },
        ...MANUEL_ROWS,
      ];
    }

    const m = parseNum(metraj);
    const strip = STRIP_PRESETS.find((s) => s.id === seritPreset);
    if (!(m > 0) || !strip) return [];
    const psu = pickPsu(m * strip.w * 1.2, strip.volt);

    return [
      { id: "serit", name: strip.label, qty: round1(m), unit: "m" },
      { id: "kanal", name: "Montaj kanalı / profil", qty: round1(m), unit: "m" },
      {
        id: "trafo",
        name: `LED trafo ${strip.volt}V ${psu ? nf(psu.watt, 0) : "—"}W`,
        qty: psu?.count ?? 1,
        unit: "adet",
      },
      { id: "kablo", name: "Besleme kablosu", qty: Math.ceil(m * 0.4 + 5), unit: "m" },
      { id: "konnektor", name: "Konnektör ve uç kapağı", qty: Math.ceil(m / 5) * 2, unit: "adet" },
      ...MANUEL_ROWS,
    ];
  }

  const satirTutar = (r: Row) => {
    const p = parseNum(fiyat[r.id] ?? "");
    return p > 0 ? p * r.qty : 0;
  };
  const toplam = rows.reduce((n, r) => n + satirTutar(r), 0);
  const fiyatliSatir = rows.filter((r) => satirTutar(r) > 0).length;

  const waMesaj = gecerli
    ? `Merhaba, tabela malzeme listemi çıkardım:\n` +
      rows
        .filter((r) => !MANUEL_ROWS.some((m) => m.id === r.id))
        .map((r) => `• ${r.name}: ${nf(r.qty, 1)} ${r.unit}`)
        .join("\n") +
      `\nBu liste için toptan fiyat verebilir misiniz?`
    : "";

  return (
    <Panel>
      <Kicker>Tabela Maliyet Hesabı</Kicker>

      <div className="flex flex-col gap-5">
        <Segmented
          label="Tabela tipi"
          value={tip}
          onChange={(v) => setTip(v as Tip)}
          options={[
            { value: "kutu-harf", label: "Kutu harf" },
            { value: "light-box", label: "Işıklı kutu" },
            { value: "neon", label: "Neon / şerit" },
          ]}
        />

        {tip === "kutu-harf" && (
          <Grid>
            <NumberField label="Harf yüksekliği" value={yukseklik} onChange={setYukseklik} suffix="cm" />
            <NumberField label="Harf adedi" value={harfAdedi} onChange={setHarfAdedi} suffix="harf" />
            <NumberField label="Harf derinliği" value={derinlik} onChange={setDerinlik} suffix="cm" />
            <Segmented
              label="Yazı tipi kalınlığı"
              value={kalinlik}
              onChange={setKalinlik}
              options={STROKE_RATIOS.map((s) => ({ value: s.id, label: s.label }))}
            />
          </Grid>
        )}

        {tip === "light-box" && (
          <Grid>
            <NumberField label="Pano eni" value={en} onChange={setEn} suffix="cm" />
            <NumberField label="Pano boyu" value={boy} onChange={setBoy} suffix="cm" />
            <NumberField label="Kaç adet" value={panoAdet} onChange={setPanoAdet} suffix="adet" />
          </Grid>
        )}

        {tip === "neon" && (
          <Grid>
            <NumberField label="Toplam metraj" value={metraj} onChange={setMetraj} suffix="m" />
            <SelectField
              label="Ürün tipi"
              value={seritPreset}
              onChange={setSeritPreset}
              options={STRIP_PRESETS.map((s) => ({ value: s.id, label: s.label }))}
            />
          </Grid>
        )}
      </div>

      {gecerli ? (
        <>
          <div
            className="overflow-x-auto"
            style={{ marginTop: "28px", border: "1px solid var(--nadas-line2)", borderRadius: "2px" }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", minWidth: "560px" }}>
              <thead>
                <tr style={{ background: "var(--nadas-bg3)" }}>
                  {["Malzeme", "Miktar", "Birim fiyat", "Tutar"].map((h, i) => (
                    <th
                      key={h}
                      style={{
                        textAlign: i === 0 ? "left" : "right",
                        padding: "12px 16px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--nadas-orange)",
                        borderBottom: "1px solid var(--nadas-line2)",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const tutar = satirTutar(r);
                  return (
                    <tr key={r.id} style={{ borderBottom: "1px solid var(--nadas-line2)" }}>
                      <td style={{ padding: "10px 16px", color: "var(--nadas-ink)", fontWeight: 600 }}>{r.name}</td>
                      <td
                        style={{
                          padding: "10px 16px",
                          textAlign: "right",
                          color: "var(--nadas-ink2)",
                          fontFamily: "var(--font-mono)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {nf(r.qty, 1)} {r.unit}
                      </td>
                      <td style={{ padding: "8px 16px", textAlign: "right" }}>
                        <input
                          type="number"
                          inputMode="decimal"
                          min={0}
                          step="any"
                          value={fiyat[r.id] ?? ""}
                          placeholder="—"
                          aria-label={`${r.name} birim fiyatı`}
                          onChange={(e) => setFiyat((f) => ({ ...f, [r.id]: e.target.value }))}
                          style={{
                            width: "104px",
                            textAlign: "right",
                            background: "var(--nadas-bg)",
                            border: "1px solid var(--nadas-line2)",
                            borderRadius: "2px",
                            padding: "8px 10px",
                            fontSize: "14px",
                            fontFamily: "var(--font-mono)",
                            color: "var(--nadas-ink)",
                            outline: "none",
                          }}
                        />
                      </td>
                      <td
                        style={{
                          padding: "10px 16px",
                          textAlign: "right",
                          fontFamily: "var(--font-mono)",
                          color: tutar > 0 ? "var(--nadas-ink)" : "var(--nadas-ink3)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {tutar > 0 ? `${nf(tutar, 2)} ₺` : "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <Results>
            <Result label="Kalem sayısı" value={nf(rows.length, 0)} />
            <Result label="Fiyatı girilen" value={`${fiyatliSatir}/${rows.length}`} />
            <Result label="Toplam (KDV hariç)" value={toplam > 0 ? `${nf(toplam, 2)} ₺` : "—"} accent />
            <Result label="KDV dahil (%20)" value={toplam > 0 ? `${nf(toplam * 1.2, 2)} ₺` : "—"} />
          </Results>

          <Note>
            Birim fiyatlar bilerek boş geliyor. Nadasled liste fiyatı yayınlamaz — fiyat proje ve miktara göre
            verilir. Kendi alış fiyatlarınızı yazarak maliyeti çıkarabilir, güncel toptan fiyat için listeyi
            WhatsApp&apos;tan gönderebilirsiniz.
          </Note>

          <Note tone="warn">
            Miktarlar ölçüden çıkarılmış tahminlerdir; fire, yedek malzeme ve harf şekilleri sonucu değiştirir.
            Sipariş öncesi modül ve şeritte %10 yedek eklemek yaygın pratiktir.
          </Note>

          <WhatsappResult message={waMesaj} />
        </>
      ) : (
        <EmptyState>Tabela ölçülerini girin, malzeme listesi burada çıksın.</EmptyState>
      )}
    </Panel>
  );
}

function round1(n: number) {
  return Math.round(n * 10) / 10;
}
