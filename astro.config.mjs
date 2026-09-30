import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio della cliente: oggi ospita il sito Wix, sarà sostituito da questo.
export const SITE_URL = 'https://www.saratonellistudio.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
