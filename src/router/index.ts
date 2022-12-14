import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../layout/BasicLayout.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '',
        redirect: 'table'
      },
      {
        path: '/elementUI',
        name: 'elementUI',
        component: () => import('../views/elementUI/index.vue'),
        meta: { title: 'elementUI', keepAlive: true },
      },
      {
        path: '/echarts',
        name: 'echarts',
        component: () => import('../views/echarts/index.vue'),
        meta: { title: 'echarts', keepAlive: true },
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('../views/table/index.vue'),
        meta: { title: 'table', keepAlive: true },
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;

