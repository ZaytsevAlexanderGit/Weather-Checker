import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 5000,
  },
  plugins: [react()],
  base: '/Weather-Checker/',
  // base: process.env.VITE_NODE_ENV === 'production' ? '/Weather-Checker/' : '/',
});
