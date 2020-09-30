import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);

let store = new Vue.store({
    // 1.state
    state: {
        item: '闫万鹏'
    },
    // 2.getters
    getters: {
        getItem(state) {
            return state.item
        }
    },
    // 3.mutations
    mutations: {
        setItem(state, name) { // 自定义
            state.item = name
        }
    }
})
export default store;