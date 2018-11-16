import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/views/introduction/Welcome.vue'
import About from '@/views/introduction/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/introduction/about',
      name: 'About',
      component: About
    }
  ]
})
