import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["markmap-lib"], // Ensure Markmap is pre-bundled
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for @ pointing to src
    },
  },
});
