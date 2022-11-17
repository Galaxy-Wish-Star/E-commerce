import { reqAddressInfo } from "@/api";

const actions = {
    //获取用户地址信息
    async getUserAddress({ commit }) {
        let result = await reqAddressInfo();
        console.log(result);
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
