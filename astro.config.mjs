// @ts-check
import { defineConfig } from 'astro/config';


import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  integrations: [

  ],
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svg: true,
  },
});