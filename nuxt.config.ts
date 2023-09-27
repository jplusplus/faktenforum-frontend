// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  // devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "vuetify-nuxt-module", "@vueuse/nuxt"],
  experimental: {
    inlineSSRStyles: false
  },

  i18n: {
    locales: [
      {
        code: "en",
        iso: "en",
        file: "en.json",
        name: "English",
        dir: "ltr"
      },
      {
        code: "de",
        iso: "de",
        file: "de.json",
        name: "Deutsch",
        dir: "ltr"
      }
    ],
    lazy: true,
    strategy: "no_prefix",
    detectBrowserLanguage: false,
    // put your json files in this folder or configure your own path
    langDir: "locales/",
    defaultLocale: "de",
    types: "composition",
    pages: undefined,
    dynamicRouteParams: false,
    skipSettingLocaleOnNavigate: true,
    // debug: true,
    // Vue configuration file, you can move it to the root folder
    vueI18n: "./i18n.config.ts"
  },
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
      theme: {
        defaultTheme: "light",
        themes: {
          light: {
            dark: false,
            colors: {
              background: "#dddddd",
              surface: "#FFFFFF",
              "surface-primary": "#ffedef",
              primary: "#ff5064",
              "primary-darken-1": "#ff7383",
              "primary-darken-2": "#ff8492",
              "primary-darken-3": "#ffdce0",
              "primary-darken-4": "#ff5064",
              "primary-darken-5": "#ff5064",
              "primary-lighten-3": "#ff8492",
              secondary: "#fde162",
              "secondary-darken-1": "#caae2f",
              "secondary-darken-2": "#b09415",
              "secondary-darken-3": "#4a2e00",
              "secondary-darken-4": "#311500",
              "secondary-darken-5": "#180000",
              error: "#a33a3a",
              info: "#ff5064",
              success: "#4f9045",
              warning: "#f5cc5b"
            }
          }
        }
      }
    },

    moduleOptions: {
      /* nuxt-vuetify module options */

      styles: { configFile: "/assets/main.scss" } // true | 'none' | 'expose' | 'sass' | { configFile: string },
    }
  },
  css: ["vuetify/lib/styles/main.sass"]
});
