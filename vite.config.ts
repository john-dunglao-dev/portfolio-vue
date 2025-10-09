import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig, loadEnv } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  const routeFilePath = isProduction ? "./src/router/prod" : "./src/router/dev";

  console.debug("Vite mode:", mode);
  console.debug("Using route file:", routeFilePath);

  const env = loadEnv(mode, process.cwd());

  console.debug("Loaded environment variables");

  return {
    plugins: [
      vue(),
      tailwindcss(),
      mode === "development" ? vueDevTools() : undefined,
    ].filter(Boolean),
    resolve: {
      alias: {
        "@dynamicRoute": fileURLToPath(new URL(routeFilePath, import.meta.url)),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    preview: {
      port: parseInt(env.VITE_PREVIEW_PORT || "0", 10),
      allowedHosts: env.VITE_PREVIEW_HOST?.split(",") || [],
    },
    server: {
      port: parseInt(env.VITE_APP_PORT || "0", 10),
      host: true,
      strictPort: true,
      allowedHosts: isProduction ? env.VITE_APP_HOST?.split(",") || [] : true,
      hmr: {
        host: "localhost",
        port: parseInt(env.VITE_APP_PORT || "0", 10),
      },
    },
    esbuild: {
      pure: isProduction ? ["console.log", "console.debug"] : [],
      drop: isProduction ? ["debugger"] : [],
    },
  };
});
