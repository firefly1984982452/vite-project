import { createApp } from 'vue'
import router from '@/router/index'
import App from './App.vue'
import './style.css'
import '@/assets/css/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import echarts from '@/utils/echarts'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$echarts = echarts
app.use(ElementPlus)
app.use(router)
app.mount('#app')
