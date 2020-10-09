import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/index.vue'
import login from '@/views/login.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(Router)

const router = new Router({
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

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
});
router.afterEach(() => {
    NProgress.done();
});

export default router