import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElContainer from '@/views/ElContainer'
import ButtonL from '@/views/ButtonL'
import FormL from '@/views/FormL'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/container',
      name: '容器',
      component: ElContainer
    },
    {
      path: '/button',
      name: '按钮',
      component: ButtonL
    },
    {
      path: '/form',
      name: '表单',
      component: FormL
    }
  ]
})
