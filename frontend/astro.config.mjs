import { defineConfig } from 'astro/config';
import pandacss from '@pandacss/astro';
import solidJs from "@astrojs/solid-js";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), pandacss()],
  server: {
    port: 3000
  },
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});