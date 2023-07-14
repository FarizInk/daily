// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Daily",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: { name: "page", mode: "out-in" },
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
  modules: ["@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "Daily",
      short_name: "Daily",
      description: "Fariz daily log.",
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png'
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'  
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },
    workbox: {
      navigateFallback: "/",
      // globDirectory: "/Users/fariz/projects/mine/daily/.nuxt/dev-sw-dist",
      // globPattern: "**/*.{js,css,html}",
      // globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
