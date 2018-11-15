import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import LeftNav from '@/components/LeftNav'
import Content from '@/components/Content'
import Bottom from '@/components/Bottom'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Top', component: Top },
    { path: '/', name: 'LeftNav', component: LeftNav },
    { path: '/', name: 'Content', component: Content },
    { path: '/', name: 'Bottom', component: Bottom }
  ]
})
