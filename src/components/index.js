// 组件
import BackToTop from './BackToTop'
import HelloWorld from './HelloWorld'
import myheader from './header'
import formSearch from './form/formSearch'
import vuePage from './form/vuePage'

import yCustomerService from '../views/component/yCustomerService'
export default {
    install (Vue) {
      Vue.component('back-to-top', BackToTop); // 回到顶部组件
      Vue.component('hello-world', HelloWorld);
      Vue.component('my-header', myheader); // 顶部
      Vue.component('y-customer-service', yCustomerService); // 人工客服
      Vue.component('form-search', formSearch); //  公共搜索
      Vue.component('vue-page', vuePage); //  公共分页
    }
  }