// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module'],
  experimental: {
    inlineSSRStyles: false
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
              primary: "#ff5064",
              "primary-darken-1": "#ff7383",
              "primary-darken-2": "#ff8492",
              "primary-darken-3": "#ffdce0",
              "primary-darken-4": "#ff5064",
              "primary-darken-5": "#ff5064",
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


      styles: { configFile: "/assets/settings.scss" }, // true | 'none' | 'expose' | 'sass' | { configFile: string },

    }
  },
  css: ["vuetify/lib/styles/main.sass"]
});
