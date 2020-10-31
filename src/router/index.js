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
    if(to.name != 'login') {
        let token = JSON.parse(window.sessionStorage.getItem('userItem'))||{};
        if(token.item) {
            next();
        } else {
            next({
                path: '/',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            });
        }
    } else {
        next();
    }
});
router.afterEach(() => {
    NProgress.done();
});

export default router