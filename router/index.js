import VueRouter from "vue-router";
export default new VueRouter({
	routes: [
		{
			path: "/",
			redirect: "/helloHome",
		},
	],
});
