import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  
  const routeFilePath = isProduction ? './src/router/prod' : './src/router/dev';

  console.debug('Vite mode:', mode);
  console.debug('Using route file:', routeFilePath);
  
  return {
    plugins: [
      vue(),
      mode === 'development' ? vueDevTools() : undefined,
    ].filter(Boolean),
    resolve: {
      alias: {
        '@dynamicRoute': fileURLToPath(new URL(routeFilePath, import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 3000,
      host: true,
      strictPort: true,
      allowedHosts: isProduction ? [] : true,
      hmr: {
        host: 'localhost',
        port: 3000,
      },
    },
    esbuild: {
      pure: isProduction
        ? ['console.log', 'console.debug']
        : [],
      drop: isProduction
        ? ['debugger']
        : [],
    },
  }
})