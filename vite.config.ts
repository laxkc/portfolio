import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path"

// Get base path from environment variable, default to "/" for user pages
// For project pages, set BASE_PATH="/repo-name/" in GitHub Actions
const base = process.env.BASE_PATH || "/";

// https://vite.dev/config/
export default defineConfig({
  base: base,
  plugins: [preact(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
