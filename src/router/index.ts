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
        redirect: 'a'
      },
      {
        path: '/a',
        name: 'a',
        component: () => import('../views/a/index.vue'),
        meta: { title: '实例管理', keepAlive: true },
      },
      {
        path: '/b',
        name: 'b',
        component: () => import('../views/b/index.vue'),
        meta: { title: '实例管理xx', keepAlive: true },
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;

