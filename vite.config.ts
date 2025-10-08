import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
    hmr:
      process.env.CODESPACE_NAME && process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN
        ? {
            host: `${process.env.CODESPACE_NAME}-8080.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`,
            protocol: "wss",
            clientPort: 443,
          }
        : undefined,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
