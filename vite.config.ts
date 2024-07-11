import path from "node:path"
import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vitest/config"

export default defineConfig({
  plugins: [sveltekit()],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
  build: {
    commonjsOptions: {
      include: [/@repo-ui/, /node_modules/],
    },
  },
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
      $app: path.resolve("./src"),
      $api: path.resolve("./src/api"),
    },
  },
})
