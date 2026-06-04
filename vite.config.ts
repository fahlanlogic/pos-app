import { defineConfig } from 'vite'
import optimizeLocales from '@react-aria/optimize-locales-plugin';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      ...optimizeLocales.vite({
        locales: ['en-US', 'fr-FR']
      }),
      enforce: 'pre'
    },
    tailwindcss()
  ],
})
