import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5277,
    host: '0.0.0.0',
    // 是否开启 https
    https: false,
    cors: true, // 默认启用并允许任何源
    proxy: {
      '/msg-adaptor-cube-api': 'http://192.168.118.81:10315/',
    },
  },
})
