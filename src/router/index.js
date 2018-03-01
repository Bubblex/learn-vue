import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CellSwipe from '@/components/CellSwipe'
import ActionSheet from '@/components/ActionSheet'

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
    },
    {
      path: '/action-sheet',
      name: 'ActionSheet',
      component: ActionSheet
    }
  ]
})
