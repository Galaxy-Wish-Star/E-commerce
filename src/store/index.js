// /**
//  * 该文件用于创建vuex中最核心的store
//  */

// //引入Vuex
// import Vuex from "vuex";
// import Vue from "vue";

// //使用vuex来集中管理状态,必要
// //new store的前提是必须要使用Vuex插件
// Vue.use(Vuex);

// //创建actions(本质就是对象) 用于响应组件中的动作
// const actions = {
// 	//收到上下文对象(包含commit)和dispatch过来的值
// };

// //创建mutations(本质也是对象) 用于修改数据(state)
// const mutations = {};

// //准备getters用于加工state，将其共享于各个组件当中
// const getters = {};

// //准备state(数据) 存储数据
// //类似于各个组件里的computed(计算属性),只不过它是共享的
// const state = {};

// //创建并暴露store
// export default new Vuex.Store({
//     actions,
//     mutations,
//     state,
// });
