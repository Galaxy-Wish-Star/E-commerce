import { reqGetCode, reqUserLogin,reqUserRegister } from "@/api";

const actions = {
    //获取验证码
    async getCode({ commit }, email) {
        let result = await reqGetCode(email);
        if (result.code === 200) {
            commit("GETCODE", result.data);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    //注册业务
    //用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },

    //登录业务
    async userLogin({ commit }, data) {
        console.log("aaaaaaaa", data);
        let result = await reqUserLogin(data);
        console.log(result);
    },
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
};
const state = {
    code: " ",
};
const getters = {};
export default {
    actions,
    mutations,
    state,
    getters,
};
