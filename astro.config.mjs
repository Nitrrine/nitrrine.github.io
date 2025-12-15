// @ts-check
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://nitrrine.github.io",
  redirects: {
    "/bluesky": "https://bsky.app/profile/nitrrine.lodine.xyz",
  },
})
