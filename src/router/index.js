import Vue from 'vue'
import Router from 'vue-router'
import AboutComponent from '@/components/About'
import WorkComponent from '@/components/Work'
import NotFoundComponent from '@/components/NotFound'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AboutComponent
    },
    {
      path: '/about',
      component: AboutComponent
    },
    {
      path: '/work',
      component: WorkComponent
    },
    {
      path: '/*',
      component: NotFoundComponent
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
