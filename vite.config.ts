import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    base: '/advogado/solucoes/',
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      {
        name: 'handle-trailing-slash',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const url = req.url?.split('?')[0] || '';
            const baseUrl = '/advogado/solucoes';
            
            const targetPaths = [
              '/programa-de-aceleracao-juridica/confirmacao-conta',
              '/programa-de-aceleracao-juridica/criar-conta',
              '/programa-de-aceleracao-juridica/obrigado-30091986',
              '/programa-de-aceleracao-juridica',
              '/estruturacao-estrategica'
            ];

            const fullPaths = targetPaths.map(p => baseUrl + p);

            if (fullPaths.includes(url)) {
              res.statusCode = 301;
              res.setHeader('Location', url + '/');
              res.end();
            } else {
              next();
            }
          });
        }
      }
    ],
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
          obrigado: path.resolve(__dirname, 'programa-de-aceleracao-juridica/obrigado-30091986/index.html'),
          cadastro: path.resolve(__dirname, 'programa-de-aceleracao-juridica/criar-conta/index.html'),
          confirmacao: path.resolve(__dirname, 'programa-de-aceleracao-juridica/confirmacao-conta/index.html'),
        }
      }
    }
  };
});
