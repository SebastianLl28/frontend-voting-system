import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@api': path.resolve(__dirname, './src/api'),
      '@hook': path.resolve(__dirname, './src/hook'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@service': path.resolve(__dirname, './src/service'),
      '@helpers': path.resolve(__dirname, './src/helpers')
    }
  }
})
