// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mikrosackaynak.com',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()],
  redirects: {
    '/mikro-kaynak-nedir/': '/mikro-sac-kaynak/',
    '/mikro-kaynak-fiyatlari/': '/mikro-sac-kaynak-fiyatlari/',
    '/ince-sacta-mikro-kaynak/': '/ince-saca-mikro-kaynak/',
    '/mikro-kaynak-keratin-nanofilament-farki/': '/mikro-kaynak-mi-keratin-kaynak-mi/',
    '/fethiye-mikro-kaynak-sac-merkezi/': '/fethiye-mikro-sac-kaynak/',
    '/mikro-kaynak-kimlere-uygundur/': '/mikro-sac-kaynak/#kimler-icin',
    '/sik-sorulan-sorular/': '/mikro-sac-kaynak/',
    '/istanbul-mikro-sac-kaynak/': '/iletisim/',
    '/keratin-kaynak/': '/mikro-kaynak-mi-keratin-kaynak-mi/',
    '/nanofilament-sac-kaynak/': '/mikro-kaynak-mi-keratin-kaynak-mi/',
    '/bant-sac-kaynak/': '/mikro-sac-kaynak/',
    '/sac-kaynak/': '/mikro-sac-kaynak/',
    '/tres-sac-kaynak/': '/mikro-sac-kaynak/',
    '/s-s-s/': '/mikro-sac-kaynak/',
  },
});
