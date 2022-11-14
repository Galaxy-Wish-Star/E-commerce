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
const getters = {
    //state.goodInfo初始状态空对象，空对象的categoryView属性值undefined
    categoryView(state) {
        //当前计算出的categoryview属性值至少是一个空对象，假的报错不会有
        return state.goodsInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {};
    },
};

export default {
    state,
    actions,
    mutations,
    getters,
};