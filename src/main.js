import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import components from './components/index.js';
Vue.config.productionTip = false
Vue.use(components);  // 全局组件
Vue.use(ElementUI);
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
