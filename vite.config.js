import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Sprint-16__BoomtownSupply/",
  server: {
    port: 3000,
  },
});
