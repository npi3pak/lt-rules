import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        includeAssets: ["favicon.ico", "apple-touch-icon.png", "assets/*"],
        name: "LituCheats: Cheat sheet for lithuanian language rules",
        short_name: "LituCheats",
        scope: "/lt-rules/",
        start_url: "/lt-rules/index.html",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/lt-rules/icons/LituCheat-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/lt-rules/icons/LituCheat-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "/lt-rules/screenshots/screenshot1.png",
            sizes: "1080x1920",
            type: "image/png",
            form_factor: "wide",
            label: "Wonder Widgets",
          },
          {
            src: "/lt-rules/screenshots/narrow.png",
            sizes: "900x600",
            type: "image/png",
            form_factor: "narrow",
            label: "Wonder Widgets",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
      },
    }),
  ],
  base: "/lt-rules/",
  build: {
    outDir: "docs",
    assetsDir: "",
  },
});
