// /**
//  * 该文件用于创建vuex中最核心的store
//  */

//引入Vuex
import Vue from "vue";
import Vuex from "vuex";
//引入其他小模块
import home from "./home";
import search from "./search";
import detail from "./detail";
// //使用vuex来集中管理状态,必要
// //new store的前提是必须要使用Vuex插件
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
    },
});
