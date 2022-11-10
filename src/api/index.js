//api统一管理
import requests from "./request";
//引入mock
import mockRequest from "./mockRequest";
//三级联动接口
export const reqCategoryList = () => requests({ url: "/product/getBaseCategoryList", method: "get" });

//获取轮播图
export const reqGetBannerList = () => mockRequest({url:"/banner",method: "get"});
