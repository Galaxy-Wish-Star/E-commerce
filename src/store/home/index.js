//home模块仓库
/* eslint-disable */
import { reqCategoryList, reqGetBannerList } from "@/api";

// //创建actions(本质就是对象) 用于响应组件中的动作
const actions = {
    //收到上下文对象(包含commit)和dispatch过来的值
    // 获取服务器数据
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    //获取首页轮播图的数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data);
        }
    },
};

// //创建mutations(本质也是对象) 用于修改数据(state)
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
};
/* eslint-disable */
// //准备getters用于加工state，将其共享于各个组件当中
const getters = {};

// //准备state(数据) 存储数据
// //类似于各个组件里的computed(计算属性),只不过它是共享的
const state = {
    categoryList: [],
    //轮播图数据
    bannerList: [],
};

// //创建并暴露store
export default {
    actions,
    mutations,
    state,
    getters,
};