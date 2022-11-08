import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Regster";
import Search from "@/pages/Search";
//配置路由
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            name: "home",
        },
        {
            path: "/search",
            component: Search,
            name: "search",
        },
        {
            path: "/register",
            component: Register,
            name: "register",
        },
        {
            path: "/login",
            component: Login,
            name: "login",
        },
        {
            path: "*",
            redirect: "/home",
        },
    ],
});
