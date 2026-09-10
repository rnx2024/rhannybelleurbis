import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://rnx2024.github.io",
  base: process.env.GITHUB_ACTIONS === "true" ? "/rhannybelleurbis" : undefined,
  integrations: [tailwind()],
});
