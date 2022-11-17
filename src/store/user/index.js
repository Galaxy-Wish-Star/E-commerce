import { reqUserLogin } from "@/api";

const actions = {
  //登录业务
  async userLogin({ commit },data) {
    console.log("aaaaaaaa",data)
    let result = await reqUserLogin(data);
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
