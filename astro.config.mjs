import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// For GitHub Pages project site: base must be repo name. Switch to base: '/' when using custom domain erzoc.dev
export default defineConfig({
  site: 'https://emmazoccoli1.github.io',
  base: '/erzoc.dev/',
  integrations: [sitemap(), mdx()],
});
