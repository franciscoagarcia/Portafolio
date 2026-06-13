// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://franciscoagarcia.github.io",
  base: "/portafolio",

  vite: {
    plugins: [tailwindcss()],
  },
});
