import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    csrf: {
      checkOrigin: false,
    },
    alias: {
      $lib: "./src/lib",
      $app: "./src",
      $api: "./src/api",
    },
  },
  paths: {
    base: "/ton-website/",
  },
}

export default config
