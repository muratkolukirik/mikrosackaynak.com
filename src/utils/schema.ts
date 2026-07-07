import { SITE, absoluteUrl, CONTACT_FETHIYE } from '../data/site';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FAQEntry {
  question: string;
  answer: string;
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.organization.name,
    url: SITE.domain,
    description: SITE.organization.description,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.domain,
    description: SITE.organization.description,
    inLanguage: SITE.locale,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(options: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    url: absoluteUrl(options.path),
    inLanguage: SITE.locale,
    author: {
      '@type': 'Organization',
      name: SITE.organization.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.organization.name,
      url: SITE.domain,
    },
    datePublished: options.datePublished ?? '2026-07-01',
    dateModified: options.dateModified ?? '2026-07-01',
  };
}

export function faqSchema(faqs: FAQEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/** Fethiye fiziksel merkez — yalnızca doğrulanmış adres için */
export function fethiyeHairSalonSchema() {
  const { openingHours } = CONTACT_FETHIYE;

  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: CONTACT_FETHIYE.brandName,
    alternateName: CONTACT_FETHIYE.businessName,
    url: absoluteUrl(CONTACT_FETHIYE.pagePath),
    telephone: `+${CONTACT_FETHIYE.phoneE164}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_FETHIYE.address.streetAddress,
      addressLocality: CONTACT_FETHIYE.address.addressLocality,
      addressRegion: CONTACT_FETHIYE.address.addressRegion,
      postalCode: CONTACT_FETHIYE.address.postalCode,
      addressCountry: CONTACT_FETHIYE.address.addressCountry,
    },
    openingHoursSpecification: openingHours.weekdays.map((day) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day,
      opens: openingHours.opens,
      closes: openingHours.closes,
    })),
  };
}

export function schemaScript(schemas: Record<string, unknown>[]) {
  return JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
}

export function serviceSchema(options: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: options.name,
    description: options.description,
    url: absoluteUrl(options.path),
    provider: {
      '@type': 'Organization',
      name: SITE.organization.name,
      url: SITE.domain,
    },
    areaServed: options.areaServed ?? 'TR',
  };
}

export function imageObjectSchema(options: {
  url: string;
  caption: string;
  name: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: absoluteUrl(options.url),
    name: options.name,
    caption: options.caption,
  };
}
