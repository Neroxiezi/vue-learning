import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Table from '@/views/nav1/Table.vue'
import Main from '@/views/Main.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Home,
      name: '导航一',
      iconCls: 'fa fa-home', //图标样式class
      children: [{
          path: '/main',
          component: Main,
          name: '主页',
          hidden: true
        },
        {
          path: '/table',
          component: Table,
          name: '表格',
          iconCls: 'fa fa-table',
        },
        // { path: '/form', component: Form, name: 'Form' },
        // { path: '/user', component: user, name: '列表' },
      ]
    },
    {
      path: '/login',
      component: Login,
      name: '',
      hidden: true
    }
  ]
})
