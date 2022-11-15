import { reqCartList } from "@/api";

const actions = {
    //获取购物车列表数据
    async getCartList({ commit }) {
        let result = await reqCartList();
        console.log(result)
    },
};
const mutations = {};
const state = {};
const getters = {};

export default {
    actions,
    mutations,
    state,
    getters,
};
