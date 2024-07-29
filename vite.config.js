import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            // generates 'manifest.webmanifest' file on build
            manifest: {
                // caches the assets/icons mentioned (assets/* includes all the assets present in your src/ directory)
                includeAssets: [
                    "favicon.ico",
                    "apple-touch-icon.png",
                    "assets/*",
                ],
                name: "Simplifying Progressive Web App (PWA) Development with Vite: A Beginners Guide",
                short_name: "PWA Guide",
                scope: "/lt-rules/",
                start_url: "/lt-rules/index.html",
                background_color: "#ffffff",
                theme_color: "#000000",
                icons: [
                    {
                        src: "/lt-rules/icons/android-chrome-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/lt-rules/icons/android-chrome-512x512.png",
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
                // defining cached files formats
                globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
            },
        }),
    ],
    base: "/lt-rules/", // Ensures the assets are served relative to the docs directory
    build: {
        outDir: "docs", // Changes the output directory to docs
        assetsDir: "", // Optionally, you can set this to an empty string if you want to place assets directly in the docs folder
    },
});
