import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Maps "@" to "./src"
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/Pages"),
      "@data": path.resolve(__dirname, "./src/data"),

      // Add more aliases as needed
    },
  },
  server: {
    port: 4002,
    allowedHosts: true,
    // "https://be3f-102-89-84-40.ngrok-free.app",
  },
  css: {
    postcss: "./postcss.config.js", // Explicit path if needed
  },
});
