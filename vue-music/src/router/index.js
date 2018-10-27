import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import Ranking from "@/views/Ranking";
import User from "@/views/User";

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ranking_list',
      name: '排行榜',
      component: Ranking,
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
