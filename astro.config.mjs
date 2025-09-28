// astro.config.mjs
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sowk.org/",   // keep this correct production URL
  base: "/",
  output: "static",
  integrations: [sitemap()],       // ← new line activates the plugin
});