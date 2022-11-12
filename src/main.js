import Vue from "vue";
import App from "./App.vue";
// import store from './store'

//引入router
import router from "@/router";

//三级联动全局组件
import TypeNav from "@/components/TypeNav";
Vue.component(TypeNav.name, TypeNav);

//引入vuex仓库
import store from "@/store";

//引入MockServer.js----mock数据
import '@/mock/mockServe'

//使用element ui插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
    render: (h) => h(App),
    //全局事件总线$bus配置
    beforeCreate() {
        Vue.prototype.$bus=this
    },
    // store,
    //注册路由
    router,
    //注册vuex仓库
    store,
}).$mount("#app");
