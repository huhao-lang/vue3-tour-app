import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      // name: 'home',
      component: () => import('@/views/home/index.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/collect',
      component: () => import('@/views/collect/index.vue')
    },
    {
      path: '/order',
      component: () => import('@/views/order/index.vue')
    },
    {
      path: '/message',
      component: () => import('@/views/message/index.vue')
    },
    {
      path: '/city',
      component: () => import('@/views/city/index.vue'),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/search',
      component: () => import('@/views/search/index.vue'),
    },
    {
      path: '/detil/:id',
      name: "detil",
      meta: {
        keepAlive: false
      },
      component: () => import('@/views/detil/index.vue'),
    },
  ]
})

export default router
