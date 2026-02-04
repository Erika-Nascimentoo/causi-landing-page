import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      proxy: {
        '/api/webhook': {
          target: 'https://n8n.aceleracaojuridica.com.br',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/webhook/, '/webhook-test/b08bb74b-0502-4e53-854f-7fedca4fa300'),
        },
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
