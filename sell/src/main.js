// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
/* eslint-disable no-new */
// new Vue({
//   el: '#container',
//   components: {
//     App
//   },
//   template: '<App/>'
// })

let app = Vue.extend(App);

let router = new VueRouter();

router.map({
  '/goods':{
    components:
  }
})
