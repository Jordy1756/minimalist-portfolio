// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jordy756-minimalist-portfolio.vercel.app',

  integrations: [sitemap()],

  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    },
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Nunito Sans',
      cssVariable: '--font-nunito-sans',
      weights: [400, 600, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      formats: ['woff2'],
      fallbacks: ['system-ui', 'sans-serif'],
      unicodeRange: ['U+0020-007F', 'U+00A0-017F'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
