import { defineConfig } from "@pandacss/dev"

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx,astro}"],

    // Files to exclude
    exclude: [],

    presets: ['@pandacss/preset-base', '@park-ui/panda-preset'],

    // Useful for theme customization
    theme: {
      extend: {
        tokens: {
          fonts: {
            body: {
              value: "var(--font-body)", 
            }
          }
        }
      }
    },
    
    conditions: {
      light: "[data-color-mode=light] &",
      dark: "[data-color-mode=dark] &",
    },

    // The output directory for your css system
    outdir: "styled-system",
    
    jsxFramework: 'solid'
})