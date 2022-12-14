import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/layout/BasicLayout.vue'
const routes = [
  {
    path: '/',
    redirect: 'table',
    component: HomeView,
    children: [
      {
        path: '/elementUI',
        name: 'elementUI',
        component: () => import('@/views/elementUI/index.vue'),
        meta: { title: 'elementUI', keepAlive: true },
      },
      {
        path: '/echarts',
        name: 'echarts',
        component: () => import('@/views/echarts/index.vue'),
        meta: { title: 'echarts', keepAlive: true },
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('@/views/table/index.vue'),
        meta: { title: 'table', keepAlive: true },
      },
      {
        path: '/api',
        name: 'api',
        component: () => import('@/views/api/index.vue'),
        meta: { title: 'api', keepAlive: true },
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;

