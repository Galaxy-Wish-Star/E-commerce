import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

//引入路由组件
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Regster"
import Search from "@/pages/Search"
//配置路由
export default new VueRouter({
	routes: [
		{
			path: "/home",
			component:Home,
		},
		{
			path: "/search",
			component:Search,
		},
		{
			path: "/register",
			component:Register,
		},
		{
			path: "/login",
			component:Login,
		},
		{
			path:"*",
			redirect:"/home",
		}
	],
});
