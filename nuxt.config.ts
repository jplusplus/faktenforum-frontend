// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["vuetify/lib/styles/main.sass"],
  modules: [
    "@invictus.codes/nuxt-vuetify",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },

    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true, //  true | false,
      useIconCDN: true, //true | false,

      /* vite-plugin-vuetify options */
      styles: true, // true | 'none' | 'expose' | 'sass' | { configFile: string },
      autoImport: true, // true | false,
      useVuetifyLabs: false, // true | false,
    },
  },
});
