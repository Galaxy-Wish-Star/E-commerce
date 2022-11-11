import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Personal from "@/pages/Personal"

//重写push、replace防止控制台报错
let originPush = VueRouter.prototype.push;
let originReplace =VueRouter.prototype.replace
VueRouter.prototype.push = function (location,resolve,reject) {
    if(reject&&resolve){
        originPush.call(this,location,resolve,reject);
    }else{
        originPush.call(this,location,()=>{},()=>{});
    }
};
VueRouter.prototype.replace = function (location,resolve,reject) {
    if(reject&&resolve){
        originReplace.call(this,location,resolve,reject);
    }else{
        originReplace.call(this,location,()=>{},()=>{});
    }
};

//配置路由
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            name: "home",
        },
        {
            path: "/search/:keyword",
            component: Search,
            name: "search",
        },
        {
            path: "/register",
            component: Register,
            name: "register",
        },
        {
            path:"/personal",
            component:Personal,
            name:"personal",
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
