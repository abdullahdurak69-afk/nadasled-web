"use client";

/**
 * Trafo amper hesaplama.
 *
 * Formül blog'daki LED trafo hesaplama yazısıyla aynı: ham güç → güvenlik payı
 * → voltaja bölme. Aracın yazıdan farkı, sonucun üstüne trafo kademesini,
 * bölme önerisini ve kablo kesitini de koyması.
 */

import { useState } from "react";
import {
  MODULE_PRESETS,
  STRIP_PRESETS,
  SPLIT_THRESHOLD_W,
  cableSection,
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

export default function TrafoCalc() {
  const [mode, setMode] = useState<"modul" | "serit">("modul");

  const [adet, setAdet] = useState("100");
  const [modulPreset, setModulPreset] = useState("m150");
  const [modulOzel, setModulOzel] = useState("");

  const [metraj, setMetraj] = useState("18");
  const [seritPreset, setSeritPreset] = useState("cob-480");
  const [seritOzel, setSeritOzel] = useState("");

  const [volt, setVolt] = useState("12");
  const [pay, setPay] = useState("20");

  const voltNum = Number(volt);
  const payOran = 1 + Number(pay) / 100;

  const modulW =
    modulPreset === CUSTOM ? parseNum(modulOzel) : (MODULE_PRESETS.find((m) => m.id === modulPreset)?.w ?? NaN);
  const seritW =
    seritPreset === CUSTOM ? parseNum(seritOzel) : (STRIP_PRESETS.find((s) => s.id === seritPreset)?.w ?? NaN);

  const miktar = mode === "modul" ? parseNum(adet) : parseNum(metraj);
  const birimW = mode === "modul" ? modulW : seritW;

  const hamW = miktar > 0 && birimW > 0 ? miktar * birimW : NaN;
  const payliW = Number.isFinite(hamW) ? hamW * payOran : NaN;
  const amper = Number.isFinite(payliW) ? payliW / voltNum : NaN;
  const psu = pickPsu(payliW, voltNum);

  const gecerli = Number.isFinite(payliW) && psu !== null;

  // Kablo kesiti trafonun etiket akımına değil, o kablodan geçecek gerçek yüke
  // göre seçilir; yük bölündüğünde her segment toplamın bir kısmını taşır.
  const segmentAmper = psu ? amper / psu.count : amper;

  const birimAdi = mode === "modul" ? "modül" : "metre";
  const birimGucAdi = mode === "modul" ? "W/modül" : "W/m";

  const steps = gecerli
    ? [
        `1 · ${nf(miktar, 1)} ${birimAdi} × ${nf(birimW, 2)} ${birimGucAdi} = ${nf(hamW, 1)} W ham güç`,
        `2 · ${nf(hamW, 1)} W × ${nf(payOran, 2)} (%${pay} güvenlik payı) = ${nf(payliW, 1)} W`,
        `3 · ${nf(payliW, 1)} W ÷ ${volt} V = ${nf(amper, 2)} A`,
      ]
    : [];

  const oneriMetni = psu
    ? psu.count === 1
      ? `${volt}V ${nf(psu.watt, 0)}W (${nf(psu.amper, 1)}A)`
      : `${psu.count} × ${volt}V ${nf(psu.watt, 0)}W (${nf(psu.amper, 1)}A)`
    : "—";

  const waMesaj = gecerli
    ? `Merhaba, trafo hesabı yaptım:\n` +
      (mode === "modul"
        ? `• ${nf(miktar, 0)} adet modül × ${nf(birimW, 2)} W\n`
        : `• ${nf(miktar, 1)} metre şerit × ${nf(birimW, 2)} W/m\n`) +
      `• Sistem: ${volt}V, %${pay} güvenlik payı\n` +
      `• Gereken güç: ${nf(payliW, 0)} W / ${nf(amper, 1)} A\n` +
      `• Önerilen trafo: ${oneriMetni}\n` +
      `Bu trafo için fiyat verebilir misiniz?`
    : "";

  return (
    <Panel>
      <Kicker>Trafo Hesabı</Kicker>

      <div className="flex flex-col gap-5">
        <Segmented
          label="Ne besleyeceksiniz?"
          value={mode}
          onChange={(v) => setMode(v as "modul" | "serit")}
          options={[
            { value: "modul", label: "LED modül" },
            { value: "serit", label: "LED şerit / neon" },
          ]}
        />

        {mode === "modul" ? (
          <Grid>
            <NumberField
              label="Toplam modül adedi"
              value={adet}
              onChange={setAdet}
              suffix="adet"
              placeholder="100"
              hint="Tüm harflerdeki modüllerin toplamı — harf başına değil."
            />
            <SelectField
              label="Modül gücü"
              value={modulPreset}
              onChange={setModulPreset}
              options={[
                ...MODULE_PRESETS.map((m) => ({ value: m.id, label: m.label })),
                { value: CUSTOM, label: "Özel değer gireceğim" },
              ]}
              hint="Kesin sonuç için ürün etiketindeki watt değerini kullanın."
            />
            {modulPreset === CUSTOM && (
              <NumberField label="Modül başına güç" value={modulOzel} onChange={setModulOzel} suffix="W" placeholder="1,5" />
            )}
          </Grid>
        ) : (
          <Grid>
            <NumberField
              label="Toplam metraj"
              value={metraj}
              onChange={setMetraj}
              suffix="m"
              placeholder="18"
              hint="Beslenecek tüm hatların toplam uzunluğu."
            />
            <SelectField
              label="Şerit tipi"
              value={seritPreset}
              onChange={(v) => {
                setSeritPreset(v);
                const p = STRIP_PRESETS.find((s) => s.id === v);
                if (p) setVolt(String(p.volt));
              }}
              options={[
                ...STRIP_PRESETS.map((s) => ({ value: s.id, label: `${s.label} — ${nf(s.w, 1)} W/m` })),
                { value: CUSTOM, label: "Özel değer gireceğim" },
              ]}
              hint="Değerler tipik ortalamalardır; etiketteki W/m farklıysa özel değer girin."
            />
            {seritPreset === CUSTOM && (
              <NumberField label="Metre başına güç" value={seritOzel} onChange={setSeritOzel} suffix="W/m" placeholder="12" />
            )}
          </Grid>
        )}

        <Grid>
          <Segmented
            label="Sistem voltajı"
            value={volt}
            onChange={setVolt}
            options={[
              { value: "12", label: "12 V" },
              { value: "24", label: "24 V" },
            ]}
          />
          <Segmented
            label="Güvenlik payı"
            value={pay}
            onChange={setPay}
            options={[
              { value: "20", label: "%20 — iç mekan" },
              { value: "30", label: "%30 — dış / kapalı kasa" },
            ]}
          />
        </Grid>
      </div>

      {gecerli ? (
        <>
          <Results>
            <Result label="Ham güç" value={nf(hamW, 0)} unit="W" />
            <Result label={`Güvenlik paylı`} value={nf(payliW, 0)} unit="W" />
            <Result label="Gereken akım" value={nf(amper, 1)} unit="A" accent />
            <Result label="Önerilen trafo" value={oneriMetni} />
          </Results>

          <Steps items={steps} />

          {psu && psu.count > 1 && (
            <Note tone="warn">
              Toplam güç {SPLIT_THRESHOLD_W} W&apos;ı aştığı için yük {psu.count} trafoya bölündü. Bölmek zorunlu
              değil ama sahada neredeyse her zaman daha iyi çalışır: arıza anında tabelanın tamamı sönmez, voltaj
              düşümü azalır, ısı tek noktada birikmez. Trafoların çıkışlarını birbirine paralel bağlamayın; her trafo
              kendi segmentini beslesin.
            </Note>
          )}

          <Note>
            Segment başına {nf(segmentAmper, 1)} A için önerilen kablo kesiti{" "}
            <strong>{cableSection(segmentAmper)}</strong>. Hat 10 metreyi aşıyorsa bir kademe kalın kesite çıkın —
            hattın sonundaki modüllerin sönük yanmasının en sık sebebi trafo değil kablodur.
          </Note>

          {pay === "30" && (
            <Note>
              Dış mekan ve kapalı kasa seçtiniz. Kasa içi sızdırmaz bir hacim değildir; gece-gündüz sıcaklık farkı
              yoğuşma yaratır, bu yüzden kasa içinde bile IP67 trafo tercih edin.
            </Note>
          )}

          <WhatsappResult message={waMesaj} />
        </>
      ) : (
        <EmptyState>Hesap için miktar ve güç değerlerini girin.</EmptyState>
      )}
    </Panel>
  );
}
