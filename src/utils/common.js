'use strict'
let common = {
    install: function($Vue, options) {
        let Vue = $Vue.prototype;
        let common = {
            //home页标记
            routTab: [],
        };
        $Vue.prototype.$common = common;
    }
}
export default common;