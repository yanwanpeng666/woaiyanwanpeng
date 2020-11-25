import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import vuescroll from 'vuescroll';
import './assets/css/reset.css'; // 重置样式
import 'element-ui/lib/theme-chalk/index.css';
import components from './components/index.js';
import './assets/css/main.css'; // main样式
Vue.config.productionTip = false
Vue.use(components);  // 全局组件
Vue.use(ElementUI);
Vue.use(vuescroll);
Vue.component('vue-scroll', vuescroll);
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
