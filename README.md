# mikrosackaynak.com

Mikro kaynak saç hakkında premium, kullanıcı odaklı Türkçe SEO rehber sitesi.

## Teknoloji

- [Astro](https://astro.build/) 7
- TypeScript (strict)
- Minimal CSS, gereksiz JavaScript yok
- `@astrojs/sitemap` ile otomatik sitemap

## Geliştirme

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:4321` adresini açın.

## Production build

```bash
npm run build
npm run preview
```

Build çıktısı `dist/` klasöründedir.

## Yapılandırma

- Site URL: `astro.config.mjs` → `site: 'https://mikrosackaynak.com'`
- Genel iletişim: `src/data/site.ts` → `CONTACT_GENERAL` (0532 592 88 42)
- Fethiye rehber: `src/data/site.ts` → `CONTACT_FETHIYE`
- İstanbul uygulama: `src/data/site.ts` → `CONTACT_ISTANBUL` (BERAT KOLUKIRIK)

## Sayfalar

1. `/` — Ana sayfa
2. `/mikro-kaynak-nedir/`
3. `/mikro-kaynak-kimlere-uygundur/`
4. `/kisa-saca-mikro-kaynak/`
5. `/ince-sacta-mikro-kaynak/`
6. `/mikro-kaynak-fiyatlari/`
7. `/mikro-kaynak-keratin-nanofilament-farki/`
8. `/mikro-kaynak-bakimi/`
9. `/sik-sorulan-sorular/`
10. `/iletisim/`
11. `/istanbul-mikro-sac-kaynak/` — İstanbul profesyonel uygulama rehberi
12. `/fethiye-mikro-kaynak-sac-merkezi/` — Fethiye ve Ölüdeniz danışmanlık rehberi
