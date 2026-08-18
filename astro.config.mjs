import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://okcar.mx/',
  image: {
    domains: ["okcar.mx"],
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [tailwind(), sitemap()]
});