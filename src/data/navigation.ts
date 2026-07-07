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
  { label: 'İnce Saç', href: '/ince-saca-mikro-kaynak/' },
  { label: 'Keratin mi?', href: '/mikro-kaynak-mi-keratin-kaynak-mi/' },
  { label: 'Bakım', href: '/mikro-kaynak-bakimi/' },
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
    label: 'Mikro Saç Kaynak Fiyatları',
    href: '/mikro-sac-kaynak-fiyatlari/',
    description: 'Gram dışı fiyatlandırma faktörleri',
  },
  {
    label: 'Kısa Saça Mikro Kaynak',
    href: '/kisa-saca-mikro-kaynak/',
    description: 'Kısa saçta dönüşüm planlaması',
  },
  {
    label: 'İnce Saça Mikro Kaynak',
    href: '/ince-saca-mikro-kaynak/',
    description: 'İnce telli saçlarda yoğunluk dengesi',
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
