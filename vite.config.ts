import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      reporter: ['text'],
    },
  },
  plugins: [
    reactRefresh(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 3001,
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss"; 
        @import "@/styles/mixins.scss";`,
      },
    },
  },
});
