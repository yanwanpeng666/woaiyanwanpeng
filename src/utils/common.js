'use strict'
let common = {
    install: function($Vue, options) {
        let Vue = $Vue.prototype;
        let common = {
            //home页标记
            routTab: [],
             //公用的滚动条样式
            ops: {
                vuescroll: {},
                scrollPanel: {},
                rail: {
                    size: '12px',
                    opacity: 0.3,
                    background: "#235",
                    gutterOfSide: '0'
                },
                scrollPanel: {
                    // 是否禁止x或y方向上的滚动
                    scrollingX: false
                },
                bar: {
                    showDelay: 500,
                    onlyShowBarOnScroll: false,
                    background: '#f4f4ff',
                    opacity: 0.8
                }
            },
            userInfo: {},
            excel(value) {
                // Vue.$alert('导出excel')
                window.open('https://bbs.csdn.net/topics/394960088')
            }
        };
        $Vue.prototype.$common = common;
    }
}
export default common;