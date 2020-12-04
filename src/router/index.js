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
            meta: {
                title: '登录',
            },
            component: login
        },
        {
            path: '/home',
            name: 'home',
            meta: {
                title: '首页',
            },
            redirect: '/workplatform',
            component: home,
            children: [
                {
                    path: '/workplatform',
                    name: 'workplatform',
                    meta: {
                        title: '工作台',
                    },
                    component: () => import('@/views/workplatform/workplatform.vue'),
                },
                {
                    path: '/thinktanks',
                    name: 'thinktanks',
                    meta: {
                        title: '智库',
                    },
                    component: () => import('@/views/workplatform/thinktanks.vue'),
                }
            ]
        },
        
        {
            path: '*',
            name: '404',
            meta: {
                title: '404',
            },
            component: () => import('@/views/404.vue'),
        }
    ]
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    if(to.name != 'login') {
        let token = JSON.parse(window.sessionStorage.getItem('userItem'))||{};
        Vue.prototype.$common.userInfo = token; // 获取用户信息
        if(token.item) {
            let item = {
                name: to.name,
                path: to.path,
                title: to.meta.title
            }
            let index = 0;
            Vue.prototype.$common.routTab.forEach((td)=>{
                if(td.name.indexOf(item.name) !=-1){
                    index = 1
                }
            })
            if(index == 0 && to.name != '404') {
                Vue.prototype.$common.routTab.push(item);
            }
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