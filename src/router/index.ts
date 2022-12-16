import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/layout/BasicLayout.vue'
const routes = [
  {
    path: '/',
    redirect: 'table',
    component: HomeView,
    children: [
      {
        path: '/element',
        name: 'element',
        component: () => import('@/views/element/index.vue'),
        meta: { title: 'element', icon: 'ElementPlus' },
      },
      {
        path: '/echarts',
        name: 'echarts',
        component: () => import('@/views/echarts/index.vue'),
        meta: { title: 'echarts', icon: 'PieChart'  },
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('@/views/table/index.vue'),
        meta: { title: 'table', icon: 'List'  },
      },
      {
        path: '/api',
        name: 'api',
        component: () => import('@/views/api/index.vue'),
        meta: { title: 'api', icon: 'MagicStick'  },
      },
      {
        path: '/hotlist',
        name: 'hotlist',
        component: () => import('@/views/hotlist/index.vue'),
        meta: { title: 'hotlist', icon: 'Orange'  },
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;

