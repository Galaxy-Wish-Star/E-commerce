(self["webpackChunkAgricultural_online_marketing_platform"]=self["webpackChunkAgricultural_online_marketing_platform"]||[]).push([[657],{9657:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return f}});a(7658);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"cart"},[e("h4",[t._v("全部商品")]),e("div",{staticClass:"cart-main"},[t._m(0),e("div",{staticClass:"cart-body"},t._l(t.cartInfoList,(function(a){return e("ul",{key:a.id,staticClass:"cart-list"},[e("li",{staticClass:"cart-list-con1"},[e("input",{attrs:{type:"checkbox",name:"chk_list"},domProps:{checked:1==a.isChecked},on:{change:function(e){return t.updateChecked(a,e)}}})]),e("li",{staticClass:"cart-list-con2"},[e("img",{attrs:{src:a.imgUrl}}),e("div",{staticClass:"item-msg"},[t._v(t._s(a.skuName))])]),e("li",{staticClass:"cart-list-con4"},[e("span",{staticClass:"price"},[t._v(t._s(a.skuPrice)+".00")])]),e("li",{staticClass:"cart-list-con5"},[e("a",{staticClass:"mins",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.handler("minus",-1,a)}}},[t._v("-")]),e("input",{staticClass:"itxt",attrs:{autocomplete:"off",type:"text",minnum:"1"},domProps:{value:a.skuNum},on:{change:function(e){return t.handler("change",1*e.target.value,a)}}}),e("a",{staticClass:"plus",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.handler("add",1,a)}}},[t._v("+")])]),e("li",{staticClass:"cart-list-con6"},[e("span",{staticClass:"sum"},[t._v(t._s(a.skuNum*a.skuPrice))])]),e("li",{staticClass:"cart-list-con7"},[e("a",{staticClass:"sindelet",on:{click:function(e){return t.deleteCartById(a)}}},[t._v("删除")]),e("br"),e("a",{attrs:{href:"#none"}},[t._v("移到收藏")])])])})),0)]),e("div",{staticClass:"cart-tool"},[e("div",{staticClass:"select-all"},[e("input",{staticClass:"chooseAll",attrs:{type:"checkbox",disabled:0==t.cartInfoList.length},domProps:{checked:t.isAllCheck&&t.cartInfoList.length>0},on:{change:t.updateAllCartChecked}}),e("span",[t._v("全选")])]),e("div",{staticClass:"option"},[e("a",{on:{click:t.deleteAllCheckCart}},[t._v("删除选中的商品")]),e("a",{attrs:{href:"#none"}},[t._v("移到我的关注")]),e("a",{attrs:{href:"#none"}},[t._v("清除下柜商品")])]),e("div",{staticClass:"money-box"},[e("div",{staticClass:"chosed"},[t._v(" 已选择 "),e("span",[t._v(t._s(t.cartCheckedNum))]),t._v("件商品 ")]),e("div",{staticClass:"sumprice"},[e("em",[t._v("总价（不含运费） ：")]),e("i",{staticClass:"summoney"},[t._v(t._s(t.totalPrice))])]),e("div",{staticClass:"sumbtn"},[e("a",{staticClass:"sum-btn",on:{click:function(e){return t.$router.push("/trade")}}},[t._v("结算")])])])])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"cart-th"},[e("div",{staticClass:"cart-th1"},[t._v("全部")]),e("div",{staticClass:"cart-th2"},[t._v("商品")]),e("div",{staticClass:"cart-th3"},[t._v("单价（元）")]),e("div",{staticClass:"cart-th4"},[t._v("数量")]),e("div",{staticClass:"cart-th5"},[t._v("小计（元）")]),e("div",{staticClass:"cart-th6"},[t._v("操作")])])}],r=a(629),n=a(3493),c=a.n(n),o={name:"ShopCart",mounted(){this.getData()},methods:{getData(){this.$store.dispatch("getCartList")},handler:c()((async function(t,e,a){switch(t){case"add":e=1;break;case"minus":e=a.skuNum>1?-1:0;break;case"change":e=isNaN(e)||e<1?1:parseInt(e)-a.skuNum;break}try{await this.$store.dispatch("addOrUpdateShopCart",{skuId:a.skuId,skuNum:e}),this.getData()}catch(s){return s}}),1e3),async deleteCartById(t){try{await this.$store.dispatch("deleteCartListBySkuId",t.skuId),this.getData()}catch(e){console.log("删除商品失败!")}},async updateChecked(t,e){try{let a=e.target.checked?"1":"0";await this.$store.dispatch("updateCheckedById",{skuId:t.skuId,isChecked:a}),this.getData()}catch(a){alert(a.message)}},async deleteAllCheckCart(){try{await this.$store.dispatch("deleteAllCheckedCart"),this.getData()}catch(t){alert(t.message)}},async updateAllCartChecked(){try{let t=event.target.checked?"1":0;await this.$store.dispatch("updateAllCartIsChecked",t),this.getData()}catch(t){alert(t.message)}}},computed:{...(0,r.Se)(["cartList"]),cartInfoList(){return this.cartList.cartInfoList||[]},totalPrice(){let t=0;return this.cartInfoList.forEach((e=>{1==e.isChecked&&(t+=e.skuNum*e.skuPrice)})),t},isAllCheck(){return this.cartInfoList.every((t=>1==t.isChecked))},cartCheckedNum(){let t=0;return this.cartInfoList.forEach((e=>{let a=1==e.isChecked?1:0;t+=a})),t}}},u=o,l=a(1001),d=(0,l.Z)(u,s,i,!1,null,"43b239e1",null),f=d.exports},2705:function(t,e,a){var s=a(5639),i=s.Symbol;t.exports=i},4239:function(t,e,a){var s=a(2705),i=a(9607),r=a(2333),n="[object Null]",c="[object Undefined]",o=s?s.toStringTag:void 0;function u(t){return null==t?void 0===t?c:n:o&&o in Object(t)?i(t):r(t)}t.exports=u},7561:function(t,e,a){var s=a(7990),i=/^\s+/;function r(t){return t?t.slice(0,s(t)+1).replace(i,""):t}t.exports=r},1957:function(t,e,a){var s="object"==typeof a.g&&a.g&&a.g.Object===Object&&a.g;t.exports=s},9607:function(t,e,a){var s=a(2705),i=Object.prototype,r=i.hasOwnProperty,n=i.toString,c=s?s.toStringTag:void 0;function o(t){var e=r.call(t,c),a=t[c];try{t[c]=void 0;var s=!0}catch(o){}var i=n.call(t);return s&&(e?t[c]=a:delete t[c]),i}t.exports=o},2333:function(t){var e=Object.prototype,a=e.toString;function s(t){return a.call(t)}t.exports=s},5639:function(t,e,a){var s=a(1957),i="object"==typeof self&&self&&self.Object===Object&&self,r=s||i||Function("return this")();t.exports=r},7990:function(t){var e=/\s/;function a(t){var a=t.length;while(a--&&e.test(t.charAt(a)));return a}t.exports=a},3279:function(t,e,a){var s=a(3218),i=a(7771),r=a(4841),n="Expected a function",c=Math.max,o=Math.min;function u(t,e,a){var u,l,d,f,h,v,p=0,C=!1,m=!1,k=!0;if("function"!=typeof t)throw new TypeError(n);function g(e){var a=u,s=l;return u=l=void 0,p=e,f=t.apply(s,a),f}function y(t){return p=t,h=setTimeout(x,e),C?g(t):f}function _(t){var a=t-v,s=t-p,i=e-a;return m?o(i,d-s):i}function b(t){var a=t-v,s=t-p;return void 0===v||a>=e||a<0||m&&s>=d}function x(){var t=i();if(b(t))return I(t);h=setTimeout(x,_(t))}function I(t){return h=void 0,k&&u?g(t):(u=l=void 0,f)}function j(){void 0!==h&&clearTimeout(h),p=0,u=v=l=h=void 0}function w(){return void 0===h?f:I(i())}function N(){var t=i(),a=b(t);if(u=arguments,l=this,v=t,a){if(void 0===h)return y(v);if(m)return clearTimeout(h),h=setTimeout(x,e),g(v)}return void 0===h&&(h=setTimeout(x,e)),f}return e=r(e)||0,s(a)&&(C=!!a.leading,m="maxWait"in a,d=m?c(r(a.maxWait)||0,e):d,k="trailing"in a?!!a.trailing:k),N.cancel=j,N.flush=w,N}t.exports=u},3218:function(t){function e(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=e},7005:function(t){function e(t){return null!=t&&"object"==typeof t}t.exports=e},3448:function(t,e,a){var s=a(4239),i=a(7005),r="[object Symbol]";function n(t){return"symbol"==typeof t||i(t)&&s(t)==r}t.exports=n},7771:function(t,e,a){var s=a(5639),i=function(){return s.Date.now()};t.exports=i},3493:function(t,e,a){var s=a(3279),i=a(3218),r="Expected a function";function n(t,e,a){var n=!0,c=!0;if("function"!=typeof t)throw new TypeError(r);return i(a)&&(n="leading"in a?!!a.leading:n,c="trailing"in a?!!a.trailing:c),s(t,e,{leading:n,maxWait:e,trailing:c})}t.exports=n},4841:function(t,e,a){var s=a(7561),i=a(3218),r=a(3448),n=NaN,c=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;function d(t){if("number"==typeof t)return t;if(r(t))return n;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=s(t);var a=o.test(t);return a||u.test(t)?l(t.slice(2),a?2:8):c.test(t)?n:+t}t.exports=d}}]);
//# sourceMappingURL=657.70cef5cd.js.map