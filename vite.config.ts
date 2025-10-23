import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Allow external access
    allowedHosts: [
      "9b2da9c88f7c.ngrok-free.app", // 👈 your ngrok domain here
    ],
    port: 5173,
  },
});
