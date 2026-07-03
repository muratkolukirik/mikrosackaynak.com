export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const primaryNav: NavItem[] = [
  { label: 'Mikro Kaynak Nedir?', href: '/mikro-kaynak-nedir/' },
  { label: 'Kimlere Uygundur?', href: '/mikro-kaynak-kimlere-uygundur/' },
  { label: 'Kısa Saç', href: '/kisa-saca-mikro-kaynak/' },
  { label: 'İnce Saç', href: '/ince-sacta-mikro-kaynak/' },
  { label: 'Fiyatlar', href: '/mikro-kaynak-fiyatlari/' },
  { label: 'Yöntem Farkları', href: '/mikro-kaynak-keratin-nanofilament-farki/' },
  { label: 'Bakım', href: '/mikro-kaynak-bakimi/' },
  { label: 'SSS', href: '/sik-sorulan-sorular/' },
  { label: 'İletişim', href: '/iletisim/' },
];

export const guideLinks: NavItem[] = [
  {
    label: 'Mikro Kaynak Nedir?',
    href: '/mikro-kaynak-nedir/',
    description: 'Mikro kapsül kaynak yönteminin temel prensipleri',
  },
  {
    label: 'Kimlere Uygundur?',
    href: '/mikro-kaynak-kimlere-uygundur/',
    description: 'Uygunluk kriterleri ve dikkat edilmesi gerekenler',
  },
  {
    label: 'Kısa Saça Mikro Kaynak',
    href: '/kisa-saca-mikro-kaynak/',
    description: 'Kısa saçta planlama, harmanlama ve işçilik',
  },
  {
    label: 'İnce Saçta Mikro Kaynak',
    href: '/ince-sacta-mikro-kaynak/',
    description: 'İnce telli saçlarda yoğunluk ve ağırlık dengesi',
  },
  {
    label: 'Fiyatlar Neye Göre Değişir?',
    href: '/mikro-kaynak-fiyatlari/',
    description: 'Gram dışındaki fiyatlandırma faktörleri',
  },
  {
    label: 'Keratin ve Nanofilament Farkı',
    href: '/mikro-kaynak-keratin-nanofilament-farki/',
    description: 'Yöntem karşılaştırması ve seçim kriterleri',
  },
  {
    label: 'Mikro Kaynak Bakımı',
    href: '/mikro-kaynak-bakimi/',
    description: 'Günlük rutin ve uzun ömürlü sonuç için ipuçları',
  },
];

/** Ana menüde gösterilmeyen lokal rehber sayfaları */
export const localGuides: NavItem[] = [
  {
    label: 'Fethiye Mikro Kaynak Saç',
    href: '/fethiye-mikro-kaynak-sac-merkezi/',
    description: 'Fethiye ve Ölüdeniz için ön danışmanlık rehberi',
  },
  {
    label: 'İstanbul Mikro Saç Kaynak',
    href: '/istanbul-mikro-sac-kaynak/',
    description: 'Şehirde profesyonel uygulama arayanlar için rehber',
  },
];
