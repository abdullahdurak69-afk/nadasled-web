"use client";

/**
 * Kutu harf modül adedi hesaplama.
 *
 * Sonuç bir tahmindir ve bunu ekranda saklamıyoruz: harf şekilleri aynı kutuda
 * çok farklı gövde uzunluğu verdiği için kesin adet ancak dizilim çiziminde
 * çıkar. Aracın işi, sipariş öncesi doğru büyüklük mertebesini ve buna uyan
 * trafoyu vermek.
 */

import { useState } from "react";
import {
  MODULE_PRESETS,
  STROKE_RATIOS,
  cableSection,
  lensAdvice,
  moduleCount,
  nf,
  parseNum,
  pickPsu,
} from "@/lib/led-calc";
import {
  EmptyState,
  Grid,
  Kicker,
  Note,
  NumberField,
  Panel,
  Result,
  Results,
  Segmented,
  SelectField,
  Steps,
  WhatsappResult,
} from "./CalcUI";

const CUSTOM = "ozel";

export default function KutuHarfCalc() {
  const [yukseklik, setYukseklik] = useState("50");
  const [harfAdedi, setHarfAdedi] = useState("8");
  const [kalinlik, setKalinlik] = useState("normal");
  const [aralik, setAralik] = useState("12");
  const [derinlik, setDerinlik] = useState("8");
  const [modulPreset, setModulPreset] = useState("m150");
  const [modulOzel, setModulOzel] = useState("");
  const [volt, setVolt] = useState("12");

  const h = parseNum(yukseklik);
  const adet = parseNum(harfAdedi);
  const spacing = parseNum(aralik);
  const stroke = STROKE_RATIOS.find((s) => s.id === kalinlik) ?? STROKE_RATIOS[1];
  const modulW =
    modulPreset === CUSTOM ? parseNum(modulOzel) : (MODULE_PRESETS.find((m) => m.id === modulPreset)?.w ?? NaN);

  const est = moduleCount(h, adet, stroke.ratio, stroke.strokeRatio, spacing);
  const voltNum = Number(volt);

  const hamW = est && modulW > 0 ? est.total * modulW : NaN;
  const payliW = Number.isFinite(hamW) ? hamW * 1.2 : NaN;
  const amper = Number.isFinite(payliW) ? payliW / voltNum : NaN;
  const psu = pickPsu(payliW, voltNum);
  const lens = lensAdvice(parseNum(derinlik));

  const gecerli = est !== null && Number.isFinite(payliW) && psu !== null;

  const oneriMetni = psu
    ? psu.count === 1
      ? `${volt}V ${nf(psu.watt, 0)}W`
      : `${psu.count} × ${volt}V ${nf(psu.watt, 0)}W`
    : "—";

  const steps =
    gecerli && est
      ? [
          `1 · ${nf(h, 0)} cm harf, ${stroke.label.toLowerCase()} → harf başına ${est.perLetter} modül`,
          `2 · ${est.perLetter} × ${nf(adet, 0)} harf = ${est.total} modül`,
          `3 · ${est.total} × ${nf(modulW, 2)} W = ${nf(hamW, 1)} W ham güç`,
          `4 · ${nf(hamW, 1)} W × 1,2 (%20 pay) = ${nf(payliW, 1)} W → ${nf(amper, 2)} A`,
        ]
      : [];

  const waMesaj =
    gecerli && est
      ? `Merhaba, kutu harf hesabı yaptım:\n` +
        `• ${nf(adet, 0)} harf, ${nf(h, 0)} cm yükseklik, ${nf(parseNum(derinlik), 0)} cm derinlik\n` +
        `• Tahmini ${est.total} adet modül (${nf(modulW, 2)} W, ${nf(spacing, 0)} cm aralık)\n` +
        `• Toplam güç: ${nf(payliW, 0)} W → ${oneriMetni} trafo\n` +
        `Bu liste için toptan fiyat verebilir misiniz?`
      : "";

  return (
    <Panel>
      <Kicker>Kutu Harf Modül Hesabı</Kicker>

      <div className="flex flex-col gap-5">
        <Grid>
          <NumberField
            label="Harf yüksekliği"
            value={yukseklik}
            onChange={setYukseklik}
            suffix="cm"
            placeholder="50"
            hint="Büyük harflerin yüksekliği; küçük harfler ortalamaya dahil."
          />
          <NumberField
            label="Toplam harf adedi"
            value={harfAdedi}
            onChange={setHarfAdedi}
            suffix="harf"
            placeholder="8"
            hint="Boşluklar sayılmaz. Logo varsa alanına göre 2-3 harf sayın."
          />
        </Grid>

        <Grid>
          <Segmented
            label="Yazı tipi kalınlığı"
            value={kalinlik}
            onChange={setKalinlik}
            options={STROKE_RATIOS.map((s) => ({ value: s.id, label: s.label }))}
            hint="Gövde kalınlaştıkça aynı kutuya daha çok modül girer."
          />
          <Segmented
            label="Modül aralığı"
            value={aralik}
            onChange={setAralik}
            options={[
              { value: "10", label: "10 cm" },
              { value: "12", label: "12 cm" },
              { value: "15", label: "15 cm" },
            ]}
            hint="Sık aralık daha homojen yüzey, daha yüksek maliyet demek."
          />
        </Grid>

        <Grid>
          <NumberField
            label="Harf derinliği"
            value={derinlik}
            onChange={setDerinlik}
            suffix="cm"
            placeholder="8"
            hint="Mercek açısı önerisi bu değerden çıkar."
          />
          <SelectField
            label="Modül gücü"
            value={modulPreset}
            onChange={setModulPreset}
            options={[
              ...MODULE_PRESETS.map((m) => ({ value: m.id, label: m.label })),
              { value: CUSTOM, label: "Özel değer gireceğim" },
            ]}
          />
          {modulPreset === CUSTOM && (
            <NumberField label="Modül başına güç" value={modulOzel} onChange={setModulOzel} suffix="W" placeholder="1,5" />
          )}
          <Segmented
            label="Sistem voltajı"
            value={volt}
            onChange={setVolt}
            options={[
              { value: "12", label: "12 V" },
              { value: "24", label: "24 V" },
            ]}
          />
        </Grid>
      </div>

      {gecerli && est ? (
        <>
          <Results>
            <Result label="Toplam modül" value={nf(est.total, 0)} unit="adet" accent />
            <Result label="Harf başına" value={nf(est.perLetter, 0)} unit="adet" />
            <Result label="Toplam güç (+%20)" value={nf(payliW, 0)} unit="W" />
            <Result label="Önerilen trafo" value={oneriMetni} />
          </Results>

          <Steps items={steps} />

          {lens && (
            <Note>
              {nf(parseNum(derinlik), 0)} cm derinlik için önerilen mercek açısı <strong>{lens.angle}</strong>.{" "}
              {lens.note}
            </Note>
          )}

          <Note>
            Bu sistem {nf(amper, 1)} A çeker; segment başına önerilen kablo kesiti{" "}
            <strong>{cableSection(psu ? amper / psu.count : amper)}</strong>. Zincir uzunluğunda üreticinin verdiği azami
            modül sayısını aşmayın — aşılan hatlarda son modüller sönük yanar.
          </Note>

          <Note tone="warn">
            Çıkan adet bir tahmindir. &quot;O&quot; ile &quot;İ&quot; aynı kutuda çok farklı gövde uzunluğu verir;
            kesin adet dizilim çiziminde belli olur. Sipariş öncesi %10 yedek modül eklemek yaygın pratiktir.
          </Note>

          <WhatsappResult message={waMesaj} />
        </>
      ) : (
        <EmptyState>Harf ölçülerini girin, modül adedi ve trafo önerisi burada çıksın.</EmptyState>
      )}
    </Panel>
  );
}
