import Vue from "vue";
import App from "./App.vue";
// import store from './store'

//引入router
import router from "@/router";

//三级联动全局组件
import TypeNav from "@/pages/Home/TypeNav/TypeNav.vue";
Vue.component(TypeNav.name, TypeNav);

//使用element ui插件
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

new Vue({
    render: (h) => h(App),
    // store,
    //注册路由
    router,
}).$mount("#app");
