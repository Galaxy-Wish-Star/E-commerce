//api统一管理
import requests from "./request";
//引入mock
import mockRequest from "./mockRequest";

//三级联动接口
export const reqCategoryList = () => requests({ url: "/product/getBaseCategoryList", method: "get" });

//获取轮播图
export const reqGetBannerList = () => mockRequest({ url: "/banner", method: "get" });

//获取搜索模块数据
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params });

//获取floor模块轮播图
export const reqGetFloorBannerList = () => mockRequest({ url: "/floorBanner", method: "get" });

//获取商品详情
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`,method: "get"})

//将产品添加到购物车中（获取更新某一个产品的个数)
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method: "post"})

//获取购物车列表
export const reqCartList = () => requests({ url:'/cart/cartList', method:'get'})
