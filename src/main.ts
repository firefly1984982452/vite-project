import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import echarts from './utils/echarts'

const app = createApp(App)
app.config.globalProperties.$echarts = echarts
app.use(ElementPlus).mount('#app')
