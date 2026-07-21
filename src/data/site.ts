/**
 * Lokal Türkiye iletişim — tek kaynak (tüm site).
 * Görünen: 0532 592 88 42 · WhatsApp: https://wa.me/905325928842
 */
export const LOCAL_PHONE = {
  display: '0532 592 88 42',
  international: '+90 532 592 88 42',
  e164: '905325928842',
  whatsappUrl: 'https://wa.me/905325928842',
} as const;

/** Sach & Vogue Hair — marka ve ürün sabitleri */
export const BRAND = {
  name: 'Sach & Vogue Hair',
  colorCount: 141,
  colorNote:
    '141 renk sisteminde doğal saç rengiyle uyumlu harmanlama hedeflenir.',
} as const;

/** Fethiye merkez — adres, telefon, WhatsApp ve çalışma saatleri (tek kaynak) */
export const CONTACT_FETHIYE = {
  pagePath: '/fethiye-mikro-sac-kaynak/',
  /** Google Business Profile / resmi marka adı */
  brandName: 'Sach & Vogue Hair',
  /** Sayfa H1 ve lokal rehber bağlamı */
  businessName: 'Fethiye Mikro Kaynak Saç Merkezi',
  regionNote: 'Fethiye ve Ölüdeniz çevresi',
  phoneDisplay: LOCAL_PHONE.display,
  phoneInternational: LOCAL_PHONE.international,
  phoneE164: LOCAL_PHONE.e164,
  whatsappNumber: LOCAL_PHONE.e164,
  whatsappDefaultMessage:
    'Merhaba, Fethiye bölgesinde mikro kaynak saç hakkında danışmanlık almak istiyorum. Saç yapım ve hedeflediğim görünüm için uygun yöntemi birlikte değerlendirebilir miyiz?',
  address: {
    display:
      'Taşyaka Mah., Ölüdeniz Caddesi (TSK), No: 45/1, Fethiye / Muğla, 48300 — Türkiye',
    streetAddress: 'Taşyaka Mah., Ölüdeniz Caddesi (TSK), No: 45/1',
    addressLocality: 'Fethiye',
    addressRegion: 'Muğla',
    postalCode: '48300',
    addressCountry: 'TR',
  },
  openingHours: {
    summary: 'Pazar hariç her gün 09:00–19:00',
    opens: '09:00',
    closes: '19:00',
    weekdays: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ] as const,
  },
} as const;

/** Türkiye geneli ve Fethiye — bilgilendirme / ön danışmanlık (telefon: CONTACT_FETHIYE ile aynı) */
export const CONTACT_GENERAL = {
  phoneDisplay: CONTACT_FETHIYE.phoneDisplay,
  phoneE164: CONTACT_FETHIYE.phoneE164,
  whatsappNumber: CONTACT_FETHIYE.whatsappNumber,
  whatsappDefaultMessage:
    'Merhaba, mikro kaynak saç hakkında danışmanlık almak istiyorum. Saç yapım ve hedeflediğim görünüm için uygun yöntemi birlikte değerlendirebilir miyiz?',
  regionNote: 'Türkiye geneli ve Fethiye',
} as const;

export const SITE = {
  name: 'Mikro Saç Kaynak Rehberi',
  tagline: 'Türkiye\'nin mikro saç kaynak uzmanlık kaynağı',
  domain: 'https://mikrosackaynak.com',
  ogImage: '/og-mikro-kaynak-rehberi.png',
  locale: 'tr-TR',
  organization: {
    name: 'Mikro Saç Kaynak Rehberi',
    description:
      'Mikro saç kaynak konusunda kapsamlı, uzman ve güvenilir bilgilendirme rehberi. Fethiye / Ölüdeniz hizmet merkezi: Sach & Vogue Hair.',
  },
} as const;

/** Pillar sayfa — tüm cluster iç linklerin merkezi */
export const PILLAR_PATH = '/mikro-sac-kaynak/' as const;

/** Hormozi Grand Slam Offer — site geneli CTA ve vaat metni */
export const GRAND_SLAM_OFFER = {
  name: 'Mikro Saç Kaynak Ön Analiz Protokolü',
  ctaLabel: 'Fotoğraf Gönder, Mikro Kaynak Planını Al',
  promise:
    'Kısa, ince veya zayıf saçlarda mikro kaynak yaptırmadan önce saçınıza gerçekten uygun yöntemi, gereken gramajı, renk uyumunu ve doğal kapanma ihtimalini fotoğraflı uzman analizle öğrenin. Uygun değilse işlem önermeyiz.',
  whatsappMessage:
    'Merhaba, Mikro Saç Kaynak Ön Analiz Protokolü kapsamında fotoğrafla ön analiz almak istiyorum. Saç yapım ve hedeflediğim görünüm için uygun yöntemi birlikte değerlendirebilir miyiz?',
  trustLine: 'Fotoğrafla ön analiz · Kişiye özel plan · Uygun değilse işlem önermeyiz',
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.domain}${normalized}`;
}

export function telUrl(e164: string): string {
  return `tel:+${e164}`;
}

export function whatsappUrl(message?: string): string {
  const text = encodeURIComponent(
    message ?? CONTACT_GENERAL.whatsappDefaultMessage,
  );
  return `${LOCAL_PHONE.whatsappUrl}?text=${text}`;
}

/** @deprecated CONTACT_FETHIYE.whatsappNumber kullanın */
export const whatsappNumber = CONTACT_FETHIYE.whatsappNumber;

/** @deprecated CONTACT_GENERAL.whatsappDefaultMessage kullanın */
export const whatsappDefaultMessage = CONTACT_GENERAL.whatsappDefaultMessage;
