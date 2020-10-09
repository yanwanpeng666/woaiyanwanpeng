import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/index.vue'
import login from '@/views/login.vue'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '*',
            name: '404',
            component: () => import('@/views/404.vue'),
        }
    ]
})
