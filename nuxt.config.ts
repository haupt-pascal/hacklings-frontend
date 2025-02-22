// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  css: ["~/assets/css/var.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/color-mode"],
  icon: {
    collections: ["simple-icons"],
  },
  colorMode: {
    classSuffix: "",
    fallback: "winter",
    preference: "winter",
    dataValue: "theme",
    storageKey: "nuxt-color-mode",
  },
});
