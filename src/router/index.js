import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CellSwipe from '@/components/CellSwipe'
import ActionSheet from '@/components/ActionSheet'
import Countdown from '@/components/Countdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 侧滑菜单
    {
      path: '/cell-swipe',
      name: 'CellSwipe',
      component: CellSwipe
    },
    // 动作面板
    {
      path: '/action-sheet',
      name: 'ActionSheet',
      component: ActionSheet
    },
    // 倒计时
    {
      path: '/count-down',
      name: 'Countdown',
      component: Countdown
    }
  ]
})
