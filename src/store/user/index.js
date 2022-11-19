import { reqGetCode, reqUserInfo, reqUserLogin, reqUserRegister } from "@/api";
import

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
    //获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit("GETUSERINFO", result.data);
        }
    },

    //登录业务
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        // 服务器下发token，用户唯一标识符(uuid)
        if (result.code == 200) {
            commit("USERLOGIN", result.data.token);
            //持久化存储token
            localStorage.setItem("TOKEN",result.data.token);
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
};
const state = {
    code: "",
    token: "",
    userInfo: {},
};
const getters = {};
export default {
    actions,
    mutations,
    state,
    getters,
};
