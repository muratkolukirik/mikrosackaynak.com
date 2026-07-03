/** Fethiye merkez — adres, telefon, WhatsApp ve çalışma saatleri (tek kaynak) */
export const CONTACT_FETHIYE = {
  pagePath: '/fethiye-mikro-kaynak-sac-merkezi/',
  /** Google Business Profile / resmi marka adı */
  brandName: 'Sach & Vogue Hair',
  /** Sayfa H1 ve lokal rehber bağlamı */
  businessName: 'Fethiye Mikro Kaynak Saç Merkezi',
  regionNote: 'Fethiye ve Ölüdeniz çevresi',
  phoneDisplay: '0532 592 88 42',
  phoneInternational: '+90 532 592 88 42',
  phoneE164: '905325928842',
  whatsappNumber: '905325928842',
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
  name: 'Mikro Kaynak Saç Rehberi',
  tagline: 'Doğru yöntemi anlamak için sakin ve net bir rehber',
  domain: 'https://mikrosackaynak.com',
  ogImage: '/og-mikro-kaynak-rehberi.png',
  locale: 'tr-TR',
  organization: {
    name: 'Mikro Kaynak Saç Rehberi',
    description:
      'Mikro kaynak ve saç uzatma yöntemleri hakkında bağımsız, kullanıcı odaklı bilgilendirme rehberi.',
  },
} as const;

/** İstanbul — yalnızca profesyonel saç kaynak uygulaması talepleri */
export const CONTACT_ISTANBUL = {
  name: 'BERAT KOLUKIRIK',
  phoneDisplay: '0536 507 90 28',
  phoneE164: '905365079028',
  whatsappNumber: '905365079028',
  whatsappDefaultMessage:
    'Merhaba, İstanbul\'da mikro saç kaynak uygulaması hakkında bilgi almak istiyorum. Saç yapım ve hedeflediğim görünüm için uygun yöntemi görüşebilir miyiz?',
  pagePath: '/istanbul-mikro-sac-kaynak/',
} as const;

export type ContactChannel = 'general' | 'istanbul';

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.domain}${normalized}`;
}

export function telUrl(e164: string): string {
  return `tel:+${e164}`;
}

export function whatsappUrl(
  message?: string,
  channel: ContactChannel = 'general',
): string {
  const contact =
    channel === 'istanbul' ? CONTACT_ISTANBUL : CONTACT_GENERAL;
  const text = encodeURIComponent(
    message ?? contact.whatsappDefaultMessage,
  );
  return `https://wa.me/${contact.whatsappNumber}?text=${text}`;
}

/** @deprecated CONTACT_FETHIYE.whatsappNumber kullanın */
export const whatsappNumber = CONTACT_FETHIYE.whatsappNumber;

/** @deprecated CONTACT_GENERAL.whatsappDefaultMessage kullanın */
export const whatsappDefaultMessage = CONTACT_GENERAL.whatsappDefaultMessage;
