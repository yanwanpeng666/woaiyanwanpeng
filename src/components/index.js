// 组件
import BackToTop from './BackToTop'
import HelloWorld from './HelloWorld'
import myheader from './header'
export default {
    install (Vue) {
      Vue.component('back-to-top', BackToTop); // 回到顶部组件
      Vue.component('hello-world', HelloWorld);
      Vue.component('my-header', myheader); // 顶部
    }
  }