/** Sach gerçek model / uygulama görselleri — eski canlı siteden taşındı, AI değil */

export interface SiteImage {
  id: string;
  webp: string;
  jpg: string;
  alt: string;
  caption?: string;
  /** Görselin hangi bağlamda kullanılabileceği */
  context: 'mikro' | 'genel' | 'keratin' | 'nanofilament' | 'kisa-sac' | 'ince-sac' | 'renk';
}

const base = '/images';

export const IMAGES = {
  mikroDogalGorunum: {
    id: 'mikro-sac-kaynak-dogal-gorunum',
    webp: `${base}/mikro-sac-kaynak-dogal-gorunum.webp`,
    jpg: `${base}/mikro-sac-kaynak-dogal-gorunum.jpg`,
    alt: 'Mikro saç kaynak uygulaması sonrası doğal görünüm — Sach model',
    caption: 'Mikro saç kaynak uygulamasında ince tutam profili ve doğal düşüş hedeflenir.',
    context: 'mikro',
  },
  kisaSacDonusum: {
    id: 'kisa-saca-sac-kaynak-donusum',
    webp: `${base}/kisa-saca-sac-kaynak-donusum.webp`,
    jpg: `${base}/kisa-saca-sac-kaynak-donusum.jpg`,
    alt: 'Kısa saça saç kaynak dönüşümü — Sach model, geçiş planlaması örneği',
    caption: 'Kısa saçta dönüşüm; katman, geçiş hattı ve yoğunluk planlaması gerektirir.',
    context: 'kisa-sac',
  },
  renkUyumu: {
    id: 'sach-sac-kaynak-renk-uyumu',
    webp: `${base}/sach-sac-kaynak-renk-uyumu.webp`,
    jpg: `${base}/sach-sac-kaynak-renk-uyumu.jpg`,
    alt: 'Sach saç kaynak renk uyumu — doğal saç rengiyle harmanlanmış model görünümü',
    caption: '141 renk sisteminde doğal saç rengiyle uyumlu harmanlama hedeflenir.',
    context: 'renk',
  },
  model1: {
    id: 'sach-sac-kaynak-model-1',
    webp: `${base}/sach-sac-kaynak-model-1.webp`,
    jpg: `${base}/sach-sac-kaynak-model-1.jpg`,
    alt: 'Sach saç kaynak model görünümü — doğal hacim ve renk uyumu',
    caption: 'Gerçek model görünümü; saç kalitesi ve renk eşleştirmesini yansıtır.',
    context: 'genel',
  },
  model2: {
    id: 'sach-sac-kaynak-model-2',
    webp: `${base}/sach-sac-kaynak-model-2.webp`,
    jpg: `${base}/sach-sac-kaynak-model-2.jpg`,
    alt: 'Sach saç kaynak model görünümü — ince telli saçta doğal sonuç örneği',
    caption: 'İnce telli saç profillerinde kontrollü yoğunluk ve hafif tutam tercihi önemlidir.',
    context: 'ince-sac',
  },
  model3: {
    id: 'sach-sac-kaynak-model-3',
    webp: `${base}/sach-sac-kaynak-model-3.webp`,
    jpg: `${base}/sach-sac-kaynak-model-3.jpg`,
    alt: 'Sach saç kaynak model görünümü — uzun saçta doğal düşüş',
    caption: 'Yerleşim planı ve tutam ağırlığı, görünümün doğallığını belirler.',
    context: 'genel',
  },
  keratin1: {
    id: 'keratin-sac-kaynak-ornek-1',
    webp: `${base}/keratin-sac-kaynak-ornek-1.webp`,
    jpg: `${base}/keratin-sac-kaynak-ornek-1.jpg`,
    alt: 'Keratin tip saç kaynak uygulama örneği — Sach model',
    caption: 'Keratin kaynak farklı bağlantı profili kullanır; yöntem seçimi saç yapısına göre yapılmalıdır.',
    context: 'keratin',
  },
  keratin2: {
    id: 'keratin-sac-kaynak-ornek-2',
    webp: `${base}/keratin-sac-kaynak-ornek-2.webp`,
    jpg: `${base}/keratin-sac-kaynak-ornek-2.jpg`,
    alt: 'Keratin saç kaynak model görünümü',
    context: 'keratin',
  },
  keratinBaglanti: {
    id: 'keratin-sac-kaynak-baglanti',
    webp: `${base}/keratin-sac-kaynak-baglanti.webp`,
    jpg: `${base}/keratin-sac-kaynak-baglanti.jpg`,
    alt: 'Keratin bağlantı profili örneği — mikro kaynaktan farklı bağ noktası',
    context: 'keratin',
  },
  nanofilament: {
    id: 'nanofilament-sac-kaynak-ornek',
    webp: `${base}/nanofilament-sac-kaynak-ornek.webp`,
    jpg: `${base}/nanofilament-sac-kaynak-ornek.jpg`,
    alt: 'Nanofilament saç kaynak uygulama örneği — ince bağlantı profili',
    caption: 'Nanofilament yöntemi farklı bağlantı malzemesi kullanır; mikro kaynakla karıştırılmamalıdır.',
    context: 'nanofilament',
  },
  ombreRenk: {
    id: 'sac-kaynak-ombre-renk-ornek',
    webp: `${base}/sac-kaynak-ombre-renk-ornek.webp`,
    jpg: `${base}/sac-kaynak-ombre-renk-ornek.jpg`,
    alt: 'Saç kaynak ombre renk harmanlama örneği — 141 renk sisteminde ton geçişi',
    context: 'renk',
  },
} as const satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof IMAGES;

/** Gerçek uygulama / model galerisi — yanlış yöntem iddiası olmadan genel güven görselleri */
export const applicationGallery: SiteImage[] = [
  IMAGES.mikroDogalGorunum,
  IMAGES.model1,
  IMAGES.model2,
  IMAGES.renkUyumu,
];

export const thinHairGallery: SiteImage[] = [
  IMAGES.model2,
  IMAGES.renkUyumu,
  IMAGES.mikroDogalGorunum,
];

export const shortHairGallery: SiteImage[] = [
  IMAGES.kisaSacDonusum,
  IMAGES.model3,
  IMAGES.mikroDogalGorunum,
];

export const keratinComparisonGallery: SiteImage[] = [
  IMAGES.mikroDogalGorunum,
  IMAGES.keratin1,
  IMAGES.keratinBaglanti,
];
