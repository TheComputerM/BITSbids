import { defineConfig } from 'astro/config';
import pandacss from '@pandacss/astro';
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), pandacss()],
  server: {
    port: 3000
  }
});