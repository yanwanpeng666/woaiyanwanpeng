import 'babel-polyfill'; //ie兼容插件
import Vue from 'vue'
import App from './App'
import router from './router' //路由
import ElementUI from 'element-ui';
import vuescroll from 'vuescroll'; //vue滚动条插件
import 'vuescroll/dist/vuescroll.css';
import './assets/css/reset.css'; // 重置样式
import 'element-ui/lib/theme-chalk/index.css';
import components from './components/index.js';
import './assets/css/main.css'; // main样式 压缩后的样式
import common from './utils/common'; // 公共js
import * as echarts from 'echarts';
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
Vue.use(components);  // 全局组件
Vue.use(ElementUI);
Vue.use(common);
Vue.component('vue-scroll', vuescroll);
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
