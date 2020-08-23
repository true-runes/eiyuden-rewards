import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import WhatIsAddOn from '../views/WhatIsAddOn'
import StretchGoals from '../views/StretchGoals'
import NotFound from '../views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/what-is-add-on',
    name: 'WhatIsAddOn',
    component: WhatIsAddOn,
  },
  {
    path: '/stretch-goals',
    name: 'StretchGoals',
    component: StretchGoals,
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return { selector: to.hash }
    }

    return { x: 0, y: 0 }
  },
})

export default router
