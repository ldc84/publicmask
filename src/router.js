import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);



export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Store',
      component: () => import('~@/store')
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: () => import('~@/inventory')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('~@/about')
    },
  ]
})