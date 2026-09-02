<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Tipografi

Başlıklarda `fontFamily: "var(--font-display)"` (Clash Display) **fontWeight 400**
kullanır. Tek istisna ana sayfa hero H1'idir (`components/Hero.tsx`), orada 600
bilinçli bir vurgudur.

Bu kural 2 Eylül 2026'da yazıldı: sprint 1-2'de eklenen sayfalar (blog, araclar,
urunler/[slug], Prose, CalcUI) display başlıklarını 600 ile yazmıştı ve sitenin
geri kalanından görünür biçimde sapıyordu. 21 satır 400'e çekildi.

Gövde fontundaki küçük etiketler (13-17px rozet, tablo başlığı, buton) **600
kullanmaya devam eder** — bu sapma değil, orijinal tasarımın parçası.
