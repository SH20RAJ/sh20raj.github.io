import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configure base path for GitHub Pages
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}));
