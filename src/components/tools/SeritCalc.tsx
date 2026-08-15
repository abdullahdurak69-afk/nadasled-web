"use client";

/**
 * LED şerit güç ve metraj hesaplama.
 *
 * Trafo aracından farkı: metrajı çevreden çıkarabilmesi ve gücün yanında
 * besleme noktası / makara adedi vermesi. Sahada şerit işlerinin bozulduğu yer
 * genelde watt değil, tek uçtan beslenen fazla uzun hat.
 */

import { useState } from "react";
import { STRIP_PRESETS, cableSection, maxFeedLength, nf, parseNum, pickPsu } from "@/lib/led-calc";
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
const MAKARA_M = 5;

export default function SeritCalc() {
  const [mode, setMode] = useState<"metraj" | "cevre">("metraj");

  const [metraj, setMetraj] = useState("20");
  const [en, setEn] = useState("200");
  const [boy, setBoy] = useState("80");
  const [pano, setPano] = useState("1");

  const [preset, setPreset] = useState("cob-480");
  const [ozelW, setOzelW] = useState("");
  const [volt, setVolt] = useState("24");
  const [pay, setPay] = useState("20");

  const cevreMetraj = (parseNum(pano) * 2 * (parseNum(en) + parseNum(boy))) / 100;
  const metre = mode === "metraj" ? parseNum(metraj) : cevreMetraj;

  const wPerM = preset === CUSTOM ? parseNum(ozelW) : (STRIP_PRESETS.find((s) => s.id === preset)?.w ?? NaN);
  const voltNum = Number(volt);
  const payOran = 1 + Number(pay) / 100;

  const hamW = metre > 0 && wPerM > 0 ? metre * wPerM : NaN;
  const payliW = Number.isFinite(hamW) ? hamW * payOran : NaN;
  const amper = Number.isFinite(payliW) ? payliW / voltNum : NaN;
  const psu = pickPsu(payliW, voltNum);

  const maxFeed = maxFeedLength(voltNum);
  const beslemeSayisi = metre > 0 ? Math.ceil(metre / maxFeed) : 0;
  const makara = metre > 0 ? Math.ceil(metre / MAKARA_M) : 0;

  const gecerli = Number.isFinite(payliW) && psu !== null;

  const oneriMetni = psu
    ? psu.count === 1
      ? `${volt}V ${nf(psu.watt, 0)}W`
      : `${psu.count} × ${volt}V ${nf(psu.watt, 0)}W`
    : "—";

  const steps = gecerli
    ? [
        ...(mode === "cevre"
          ? [
              `0 · ${nf(parseNum(pano), 0)} × 2 × (${nf(parseNum(en), 0)} + ${nf(parseNum(boy), 0)}) cm = ${nf(metre, 1)} m şerit`,
            ]
          : []),
        `1 · ${nf(metre, 1)} m × ${nf(wPerM, 1)} W/m = ${nf(hamW, 1)} W ham güç`,
        `2 · ${nf(hamW, 1)} W × ${nf(payOran, 2)} (%${pay} pay) = ${nf(payliW, 1)} W`,
        `3 · ${nf(payliW, 1)} W ÷ ${volt} V = ${nf(amper, 2)} A`,
        `4 · ${nf(metre, 1)} m ÷ ${maxFeed} m = ${beslemeSayisi} besleme noktası`,
      ]
    : [];

  const waMesaj = gecerli
    ? `Merhaba, LED şerit hesabı yaptım:\n` +
      `• ${nf(metre, 1)} metre ${preset === CUSTOM ? "şerit" : STRIP_PRESETS.find((s) => s.id === preset)?.label} (${nf(wPerM, 1)} W/m)\n` +
      `• ${makara} makara (5 m), ${volt}V sistem\n` +
      `• Toplam güç: ${nf(payliW, 0)} W / ${nf(amper, 1)} A → ${oneriMetni} trafo\n` +
      `• ${beslemeSayisi} besleme noktası\n` +
      `Bu liste için toptan fiyat verebilir misiniz?`
    : "";

  return (
    <Panel>
      <Kicker>LED Şerit Hesabı</Kicker>

      <div className="flex flex-col gap-5">
        <Segmented
          label="Metrajı nasıl vereceksiniz?"
          value={mode}
          onChange={(v) => setMode(v as "metraj" | "cevre")}
          options={[
            { value: "metraj", label: "Metrajı biliyorum" },
            { value: "cevre", label: "Çevreden hesapla" },
          ]}
        />

        {mode === "metraj" ? (
          <Grid cols={1}>
            <NumberField
              label="Toplam şerit metrajı"
              value={metraj}
              onChange={setMetraj}
              suffix="m"
              placeholder="20"
              hint="Tüm hatların toplamı."
            />
          </Grid>
        ) : (
          <Grid>
            <NumberField label="Pano / tabela eni" value={en} onChange={setEn} suffix="cm" placeholder="200" />
            <NumberField label="Pano / tabela boyu" value={boy} onChange={setBoy} suffix="cm" placeholder="80" />
            <NumberField
              label="Kaç adet"
              value={pano}
              onChange={setPano}
              suffix="adet"
              placeholder="1"
              hint={`Çevre × adet = ${Number.isFinite(cevreMetraj) ? nf(cevreMetraj, 1) : "—"} m şerit`}
            />
          </Grid>
        )}

        <Grid>
          <SelectField
            label="Şerit tipi"
            value={preset}
            onChange={(v) => {
              setPreset(v);
              const p = STRIP_PRESETS.find((s) => s.id === v);
              if (p) setVolt(String(p.volt));
            }}
            options={[
              ...STRIP_PRESETS.map((s) => ({ value: s.id, label: `${s.label} — ${nf(s.w, 1)} W/m` })),
              { value: CUSTOM, label: "Özel değer gireceğim" },
            ]}
            hint="Değerler tipik ortalamadır; etiketteki W/m farklıysa özel değer girin."
          />
          {preset === CUSTOM && (
            <NumberField label="Metre başına güç" value={ozelW} onChange={setOzelW} suffix="W/m" placeholder="12" />
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
            <Result label={`Toplam güç (+%${pay})`} value={nf(payliW, 0)} unit="W" />
            <Result label="Gereken akım" value={nf(amper, 1)} unit="A" accent />
            <Result label="Önerilen trafo" value={oneriMetni} />
            <Result label="Makara (5 m)" value={nf(makara, 0)} unit="adet" />
          </Results>

          <Steps items={steps} />

          {beslemeSayisi > 1 && (
            <Note tone="warn">
              {volt}V sistemde tek uçtan beslenebilecek azami uzunluk yaklaşık {maxFeed} metredir. {nf(metre, 1)}{" "}
              metrelik hat bu yüzden <strong>{beslemeSayisi} ayrı segmente</strong> bölünmeli ve her segment kendi
              hattından beslenmelidir. Şeritleri uç uca ekleyip tek noktadan beslerseniz hattın sonu gözle görülür
              biçimde sönük ve sarımsı yanar.
            </Note>
          )}

          <Note>
            Besleme noktası başına düşen akım için önerilen kablo kesiti{" "}
            <strong>{cableSection(amper / Math.max(beslemeSayisi, 1))}</strong>. Şerit ile trafo arası 10 metreyi aşıyorsa bir
            kademe kalın kesit kullanın.
          </Note>

          {volt === "12" && metre > 10 && (
            <Note>
              Bu uzunlukta 24V bir şerit tipi kullanmak işi kolaylaştırır: aynı watt&apos;ta yarı akım çekilir,
              besleme noktası sayısı ve kablo kesiti düşer.
            </Note>
          )}

          <WhatsappResult message={waMesaj} />
        </>
      ) : (
        <EmptyState>Metraj ve şerit tipini girin.</EmptyState>
      )}
    </Panel>
  );
}
