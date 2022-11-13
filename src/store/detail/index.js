import { reqGoodsInfo } from "@/api";

const actions = {
    //获取产品信息
    async getGoodsInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code === 200) {
            commit("GETGOODSINFO", result.data);
        }
    },
};
const mutations = {
    GETGOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo;
    },
};
const state = {
    goodsInfo: {},
};
const getters = {};

export default {
    state,
    actions,
    mutations,
    getters,
};
