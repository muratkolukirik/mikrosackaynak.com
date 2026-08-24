export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

/** İlk canlı sürüm — ana navigasyon */
export const primaryNav: NavItem[] = [
  { label: 'Mikro Saç Kaynak', href: '/mikro-sac-kaynak/' },
  { label: 'Fiyatlar', href: '/mikro-sac-kaynak-fiyatlari/' },
  { label: 'Kısa Saç', href: '/kisa-saca-mikro-kaynak/' },
  { label: 'İnce Telli Saç', href: '/ince-telli-saca-mikro-kaynak/' },
  { label: 'Gram mı Adet mi?', href: '/mikro-kaynak-kac-gram-mi-kac-adet-mi/' },
  { label: 'Fethiye', href: '/fethiye-mikro-sac-kaynak/' },
  { label: 'İletişim', href: '/iletisim/' },
];

/** Cluster rehber bağlantıları — pillar etrafında */
export const guideLinks: NavItem[] = [
  {
    label: 'Mikro Saç Kaynak',
    href: '/mikro-sac-kaynak/',
    description: 'Pillar rehber: yöntem, uygunluk ve uzmanlık mesajı',
  },
  {
    label: 'Kaç Gram mı Kaç Adet mi?',
    href: '/mikro-kaynak-kac-gram-mi-kac-adet-mi/',
    description: 'Gramaj ve adet planlaması — amiral rehber',
  },
  {
    label: 'Mikro Saç Kaynak Fiyatları',
    href: '/mikro-sac-kaynak-fiyatlari/',
    description: 'Gram dışı fiyatlandırma faktörleri',
  },
  {
    label: '2026 Fethiye Salon Fiyatları',
    href: '/fethiye-salon-uygulama-fiyatlari/',
    description: 'KDV dahil resmi salon uygulama tarifeleri — SACH_SALON_PRICES_2026_V1',
  },
  {
    label: 'Kısa Saça Mikro Kaynak',
    href: '/kisa-saca-mikro-kaynak/',
    description: 'Kısa saçta dönüşüm planlaması',
  },
  {
    label: 'İnce Telli Saça Mikro Kaynak',
    href: '/ince-telli-saca-mikro-kaynak/',
    description: 'İnce telli saçlarda tutam başına gramaj ve taşıma kapasitesi',
  },
  {
    label: 'Mikro Kaynak mı Keratin mi?',
    href: '/mikro-kaynak-mi-keratin-kaynak-mi/',
    description: 'Yöntem karşılaştırması ve seçim kriterleri',
  },
  {
    label: 'Mikro Kaynak Bakımı',
    href: '/mikro-kaynak-bakimi/',
    description: 'Günlük rutin ve yenileme döngüsü',
  },
  {
    label: 'Fethiye Mikro Saç Kaynak',
    href: '/fethiye-mikro-sac-kaynak/',
    description: 'Fethiye / Ölüdeniz hizmet merkezi danışmanlık',
  },
];

export const localGuides: NavItem[] = [
  {
    label: 'Fethiye Mikro Saç Kaynak',
    href: '/fethiye-mikro-sac-kaynak/',
    description: 'Fethiye ve Ölüdeniz için ön danışmanlık',
  },
];

export const legalLinks: NavItem[] = [
  { label: 'Gizlilik Politikası', href: '/gizlilik-politikasi/' },
  { label: 'Çerez Politikası', href: '/cerez-politikasi/' },
];
