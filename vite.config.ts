import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import tsPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4130,
  },
  plugins: [
    mkcert({
      source: "coding",
    }),
    tsPaths(),
  ],
  css: {
    transformer: "postcss",
  },
  build: {
    cssMinify: "lightningcss",
  },
});
