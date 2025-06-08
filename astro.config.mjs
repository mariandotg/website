import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';
import { defaultLocale, localesArray } from "./src/data/locales";
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://marianoguillaume.com',
  integrations: [tailwind(), react(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
    i18n: {
      defaultLocale,
      locales: localesArray
    },
  }), mdx()],
  i18n: {
    defaultLocale,
    locales: localesArray,
    routing: {
      prefixDefaultLocale: true
    }
  }
});