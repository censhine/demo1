import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// const pathResolve = (dir:string) => resolve(__dirname, dir)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')  // 注意这里可能需要根据你的项目结构调整，通常应该是 './src'
    }
  }
})
