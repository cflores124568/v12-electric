import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://v12electric.com",
  output: "static",
  server: {
    host: true,
  },
});
