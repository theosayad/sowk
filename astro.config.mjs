import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://theosayad.github.io/sowk", // ✅ Needed for sitemaps, robots.txt, and some image helpers
  base: "/sowk/",                           // ✅ Critical: ensures all routes/assets are prefixed correctly
  output: "static"                          // ✅ Required for GitHub Pages (it’s a static host)
});
