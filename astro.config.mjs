import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

export default defineConfig({
  site: "https://nitrrine.github.io",
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
})
