import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cv.fuheng.vip',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
