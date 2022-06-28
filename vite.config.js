import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    open: true,
  },
  build: {
    rollupOptions: {
      input: { index: './index.html' },
    },
  },
})