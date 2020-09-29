import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/index.vue'

Vue.use(Router)
Vue.component('hello-world',HelloWorld)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
