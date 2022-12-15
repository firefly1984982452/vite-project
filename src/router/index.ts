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
        meta: { title: 'elementUI' },
      },
      {
        path: '/echarts',
        name: 'echarts',
        component: () => import('@/views/echarts/index.vue'),
        meta: { title: 'echarts' },
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('@/views/table/index.vue'),
        meta: { title: 'table' },
      },
      {
        path: '/api',
        name: 'api',
        component: () => import('@/views/api/index.vue'),
        meta: { title: 'api' },
      },
      {
        path: '/hotlist',
        name: 'hotlist',
        component: () => import('@/views/hotlist/index.vue'),
        meta: { title: 'hotlist' },
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;

