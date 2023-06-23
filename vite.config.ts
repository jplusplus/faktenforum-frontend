import vueI18n from "@intlify/vite-plugin-vue-i18n";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import pages from "vite-plugin-pages";
import layouts from "vite-plugin-vue-layouts";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };

  return defineConfig({
    plugins: [
      vue(),
      vueI18n({
        include: path.resolve(__dirname, "./locales/*")
      }),
      pages(),
      layouts()
    ],
    server: {
      port: 8080,
      proxy: {
        "^/api": {
          target: "http://localhost:8081",
          rewrite: (path) => path.replace(/^\/api/, "")
        }
      }
    }
  });
};
