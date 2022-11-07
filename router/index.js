import Vue from "Vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)

//引入路由组件
import Home from ""
//配置路由
export default new VueRouter({
	routes: [
		{
			path: "/",
			redirect: "/helloHome",
		},
	],
});
