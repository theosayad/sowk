// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://theosayad.github.io/sowk",
  // 👉 In dev:  "/", in prod: "/sowk/"
  base: process.env.NODE_ENV === "production" ? "/sowk/" : "/",
  output: "static",
});
