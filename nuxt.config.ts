import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Daily",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  css: ["~/assets/css/fonts.css", "~/assets/css/main.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["vue-sonner"],
  },
  modules: [
    '@vite-pwa/nuxt'
  ],
  pwa: {
    /* PWA options */
  },
  // nitro: {
  //   storage: {
  //     redis: {
  //       driver: 'redis',
  //       /* redis connector options */
  //     },
  //     db: {
  //       driver: 'fs',
  //       base: './.data/db'
  //     }
  //   }
  // },
  // runtimeConfig: {
  //   API_URL: process.env.API_URL,
  //   public: {
  //     API_URL: process.env.API_URL,
  //   }
  // }
});
