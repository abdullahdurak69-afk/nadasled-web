# Amplify yönlendirmeleri

`redirects.json` — Amplify Hosting'in "Rewrites and redirects" ekranına
yapıştırılacak kural listesi. `scripts/amplify-redirects.mjs` üretir, elle
düzenlenmez.

## Neden burada, neden CloudFront'ta değil

`infra/cloudfront/redirects.js` aynı kuralları bir CloudFront Function olarak
yazıyordu ve plan onu dağıtıma bağlamaktı. **Bu kurulumda uygulanamıyor.**

2 Eylül 2026'da ölçüldü:

- AWS hesabında CloudFront **Distributions listesi boş**
- `www.nadasled.com.tr` → `d2zquvgsei0152.cloudfront.net` CNAME'i
- Yanıtlarda `via: … (CloudFront)` ve `x-amz-cf-id` var

Yani siteyi bir CloudFront dağıtımı sunuyor ama dağıtım **Amplify'a ait**;
müşteri konsolunda görünmediği için ona function bağlanamıyor. Amplify Hosting'te
yönlendirmelerin tek yeri konsoldaki Rewrites and redirects ekranı.

`redirects.js` yine de duruyor: kural tablosunun tek kaynağı o dosya, bu JSON
ondan türetiliyor. Barındırma bir gün kendi CloudFront dağıtımımıza taşınırsa
function olduğu gibi kullanılabilir.

## Kurulum

1. Amplify Console → uygulamayı seç → **Hosting** → **Rewrites and redirects**
2. **Manage redirects** → **Open text editor**
3. `redirects.json` içeriğinin tamamını yapıştır → **Save**

114 kayıt var (57 kural × slash'lı ve slash'sız). Amplify kaynak yollarını
birebir eşleştirdiği ve sondaki slash'ı kendisi yok saymadığı için iki biçim de
yazılıyor. Amplify kural sayısı sınırına takılırsa slash'lı varyantları
düşürmek listeyi 57'ye indirir; script'te `for (const source of [from, ...])`
döngüsünü kısaltmak yeterli.

## non-www → www

Bu listede **yok** — Amplify'da alan adı yönlendirmesi ayrı yerde yapılır:
**Hosting → Custom domains → Manage domains**, apex (`nadasled.com.tr`) kaydını
`www`'ya yönlendirecek şekilde ayarlanır. Şu anda apex de www de aynı içeriği
200 ile sunuyor; canonical etiketleri www'yu gösterdiği için kritik değil, ama
Search Console'daki "doğru standart etikete sahip alternatif sayfa" kalabalığının
sebebi bu.

## Doğrulama

```
npm run verify-redirects
```

Kuralların canlıda 301 ile doğru hedefe gidip gitmediğini yoklar. Kurulumdan
önce hepsi hatalı çıkar; bu beklenen.
