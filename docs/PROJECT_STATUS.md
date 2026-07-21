# MikroSaçKaynak.com — Proje Durumu

**Son güncelleme:** 21 Temmuz 2026  
**Branch:** `cursor/premium-mikro-kaynak-seo-site`  
**Stack:** Astro 7 · Static · Cloudflare Pages

## Özet

| Alan | Durum |
|------|-------|
| İçerik / konum | ✅ Fethiye / Ölüdeniz · 0532 592 88 42 · 141 renk |
| Yasaklı kalıntılar | ✅ Florya, 151, 0530, WebTasarimPro yok |
| Grand Slam Offer | ✅ Site geneli entegre |
| Görseller | ✅ Gerçek Sach model WebP · SEO alt text |
| SEO teknik | ✅ Title, canonical, H1, schema, sitemap, robots |
| Build | ✅ `npm run build` başarılı |
| Production | ✅ Cloudflare Pages (branch deploy) |

## Grand Slam Offer

- **Teklif:** Mikro Saç Kaynak Ön Analiz Protokolü
- **CTA:** Fotoğraf Gönder, Mikro Kaynak Planını Al
- **Kaynak:** `src/data/site.ts` → `GRAND_SLAM_OFFER`
- **Kullanım:** Header, Footer, SplitHero, PremiumCTA, LocalShowcase, FethiyeContactBlock, iletişim sayfası

## Ana Sayfalar (12 sitemap URL)

1. `/` — Ana sayfa
2. `/mikro-sac-kaynak/` — Pillar
3. `/mikro-sac-kaynak-fiyatlari/`
4. `/kisa-saca-mikro-kaynak/`
5. `/ince-telli-saca-mikro-kaynak/`
6. `/mikro-kaynak-bakimi/`
7. `/mikro-kaynak-kac-gram-mi-kac-adet-mi/`
8. `/mikro-kaynak-mi-keratin-kaynak-mi/`
9. `/fethiye-mikro-sac-kaynak/`
10. `/iletisim/`
11. `/gizlilik-politikasi/`
12. `/cerez-politikasi/`

## Deploy

- **Preview:** https://mikrosackaynak-com.pages.dev/
- **Canonical domain:** https://mikrosackaynak.com (DNS bağlantısı ayrı adım)
- **Deploy:** Push → Cloudflare Pages otomatik build

## Komutlar

```bash
npm run dev          # geliştirme
astro dev --background
npm run build        # production build
npm run preview      # dist önizleme
```

## Sonraki Adımlar (opsiyonel)

- Custom domain DNS → Cloudflare Pages
- Google Search Console + GBP doğrulama
- Core Web Vitals field data izleme
