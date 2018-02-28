import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CellSwipe from '@/components/CellSwipe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cell-swipe',
      name: 'CellSwipe',
      component: CellSwipe
    }
  ]
})
