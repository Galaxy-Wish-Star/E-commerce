//search模块仓库
// //创建actions(本质就是对象) 用于响应组件中的动作
/* eslint-disable */
import {reqGetSearchInfo} from "@/api"
import async from "async";
const actions = {
    //收到上下文对象(包含commit)和dispatch过来的值
    //获取search模块数据
    async getSearchList({commit},params={}) {
        //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
        //params形参:是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
       let result= await reqGetSearchInfo(params)
        if(result.code == 200){
            console.log(result)
            commit('GETSEARCHLIST',result.data)
        }
    }
};

// //创建mutations(本质也是对象) 用于修改数据(state)
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList;
    }
};


// //准备state(数据) 存储数据
// //类似于各个组件里的computed(计算属性),只不过它是共享的
const state = {
    // 仓库初始状态
    searchList:{}
};

// //准备getters用于加工state，将其共享于各个组件当中
const getters = {};

// //创建并暴露store
export default {
    actions,
    mutations,
    state,
    getters,
};
