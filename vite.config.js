import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/lt-rules/", // Ensures the assets are served relative to the docs directory
    build: {
        outDir: "docs", // Changes the output directory to docs
        assetsDir: "", // Optionally, you can set this to an empty string if you want to place assets directly in the docs folder
    },
});
