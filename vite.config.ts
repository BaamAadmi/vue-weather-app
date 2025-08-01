import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import path from 'path'
import vue from '@vitejs/plugin-vue'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        
      }
    }
  },
  server: {
    port: 5173,
    open: true
  }
})
