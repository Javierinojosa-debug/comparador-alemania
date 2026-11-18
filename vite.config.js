import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        "cookie-richtlinie": resolve(__dirname, "cookie-richtlinie.html"),
        "datenschutz": resolve(__dirname, "datenschutz.html"),
        "impressum": resolve(__dirname, "impressum.html"),
        "main": resolve(__dirname, "index.html")
      }
    }
  }
})
