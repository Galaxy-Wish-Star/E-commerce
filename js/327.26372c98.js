"use strict";(self["webpackChunkAgricultural_online_marketing_platform"]=self["webpackChunkAgricultural_online_marketing_platform"]||[]).push([[327],{327:function(t,a,s){s.r(a),s.d(a,{default:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"login-container"},[a("div",{staticClass:"login-wrap"},[a("div",{staticClass:"login"},[a("div",{staticClass:"loginform"},[a("ul",{staticClass:"tab clearFix"},[a("div",{staticClass:"phone"},[a("font-awesome-icon",{attrs:{icon:"fa-solid fa-phone"}}),t._v(" 客服中心电话："),a("span",[t._v("400-1188-832")])],1),t._m(0)]),a("div",{staticClass:"content"},[a("form",[a("div",{staticClass:"input-text clearFix"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"手机"},domProps:{value:t.phone},on:{input:function(a){a.target.composing||(t.phone=a.target.value)}}}),a("font-awesome-icon",{attrs:{icon:"fas fa-user"}})],1),a("div",{staticClass:"input-text clearFix"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(a){a.target.composing||(t.password=a.target.value)}}}),a("font-awesome-icon",{attrs:{icon:"fa-solid fa-eye-slash"}})],1),t._m(1),a("button",{staticClass:"btn",on:{click:function(a){return a.preventDefault(),t.getLogin.apply(null,arguments)}}},[t._v("登  录")])]),a("div",{staticClass:"call clearFix"},[a("ul",[a("li",[a("font-awesome-icon",{attrs:{icon:"fa-brands fa-weibo"}})],1),a("li",[a("font-awesome-icon",{attrs:{icon:"fa-brands fa-qq"}})],1),a("li",[a("font-awesome-icon",{attrs:{icon:"fa-brands fa-weixin"}})],1),a("li",[a("font-awesome-icon",{attrs:{icon:"fa-brands fa-github"}})],1)]),a("router-link",{staticClass:"register",attrs:{to:"/register"}},[t._v("立即注册")])],1)])])])])])},i=[function(){var t=this,a=t._self._c;return a("li",[a("a",{staticClass:"current",attrs:{href:"##"}},[t._v("账户登录")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"setting clearFix"},[a("label",{staticClass:"checkbox inline"},[a("input",{attrs:{name:"m1",type:"checkbox",value:"2",checked:""}}),t._v(" 自动登录 ")]),a("span",{staticClass:"forget"},[t._v("忘记密码？")])])}],n=(s(7658),{name:"Login",data(){return{phone:"",password:""}},methods:{async getLogin(){try{const{phone:t,password:a}=this;t&&a&&await this.$store.dispatch("userLogin",{phone:t,password:a});let s=this.$route.query.redirect||"/home";this.$router.push(s)}catch(t){alert(t.message)}}}}),o=n,r=s(1001),l=(0,r.Z)(o,e,i,!1,null,"0a0c729e",null),c=l.exports}}]);
//# sourceMappingURL=327.26372c98.js.map