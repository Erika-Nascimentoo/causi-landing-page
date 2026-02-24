import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    base: '',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          estruturacao: path.resolve(__dirname, 'estruturacao-estrategica/index.html'),
          aceleracao: path.resolve(__dirname, 'programa-de-aceleracao-juridica/index.html'),
        }
      }
    }
  };
});
