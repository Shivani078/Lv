import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', 
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.localvolts.com/v1',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});
