# CloudFront yönlendirmeleri

`redirects.js` — eski URL'leri 301 ile yeni karşılıklarına yönlendiren CloudFront Function.

## Neyi çözer

1. **non-www → www.** Şu an `nadasled.com.tr` ve `www.nadasled.com.tr` aynı içeriği
   200 ile servis ediyor. Canonical etiketleri www'yu işaret ettiği için felaket değil,
   ama iki hostname aynı sayfayı sunduğu sürece arama motorları için gereksiz belirsizlik.
2. **Eski WordPress URL'leri.** 2022–2025 arasındaki WordPress sitesinin URL'leri
   hâlâ indeksli ama 404 dönüyor. Liste, `web.archive.org` CDX arşivinden çekilen
   gerçek URL yapısına dayanıyor — tahmin yok.
3. **Kaldırılmış kategoriler.** Haziran 2026 katalog yeniden yapılandırmasında
   (`984c114`) silinen `/urunler/kablo/` ve `/urunler/aksesuar/`.
   (`power-led` ve `light-box-led` yönlendirilmiyor — kategori olarak geri getirildi.)

Toplam 57 yönlendirme.

## Dağıtım

1. AWS Konsolu → **CloudFront** → sol menüden **Functions** → *Create function*
   - Name: `nadasled-redirects`
   - Runtime: **cloudfront-js-2.0**
2. `redirects.js` içeriğini yapıştır → **Save changes**.
3. **Test** sekmesinde birkaç yolu dene (aşağıdaki tabloya bak) → **Publish**.
4. Dağıtımı seç → **Behaviors** → Default (`*`) behavior → *Edit*
   → **Function associations** → Viewer request → Function type: *CloudFront Function*,
   Function ARN: `nadasled-redirects` → **Save**.

> **Önemli:** Bir behavior'ın viewer-request olayına yalnızca **tek** function
> bağlanabilir. Dağıtımda hâlihazırda bir viewer-request function varsa
> (`/urunler/led-modul` gibi slash'sız yolların 301 dönmesi böyle bir function
> olabileceğini gösteriyor) bu kodu mevcut function ile **birleştir**, üzerine yazma.
> `handler()` içindeki iki blok mevcut mantığın başına eklenebilir.

## Dağıtım sonrası doğrulama

```bash
for u in https://nadasled.com.tr/ https://www.nadasled.com.tr/modul-led/ https://www.nadasled.com.tr/urunler/kablo/ https://www.nadasled.com.tr/category/rgb-kontrol-cihazlari/; do curl -sS -o /dev/null -w "%{http_code} %{redirect_url}  <- $u\n" "$u"; done
```

Beklenen: hepsi `301` ve `redirect_url` yeni sayfayı göstermeli.

## Yerel test

```bash
node -e "eval(require('fs').readFileSync('infra/cloudfront/redirects.js','utf8')); console.log(handler({request:{uri:'/modul-led/',querystring:{},headers:{host:{value:'nadasled.com.tr'}}}}))"
```
