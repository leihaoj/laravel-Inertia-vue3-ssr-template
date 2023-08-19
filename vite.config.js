import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import ViteCompression from "vite-plugin-compression";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    laravel({
      input: ["resources/js/app.js"],
      ssr: "resources/js/ssr.js",
      refresh: true // 保存时刷新
    }),
    ViteCompression()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./resources/js")
    }
  },
  server: {
    port: 3008,
    host: "127.0.0.1",
    proxy: {}
  }
});
