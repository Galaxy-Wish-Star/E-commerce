"use strict";(self["webpackChunkAgricultural_online_marketing_platform"]=self["webpackChunkAgricultural_online_marketing_platform"]||[]).push([[682],{6682:function(t,s,e){e.r(s),e.d(s,{default:function(){return l}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"register-container"},[s("div",{staticClass:"register"},[s("h3",[t._v(" 注册新用户 "),s("span",{staticClass:"go"},[t._v("我有账号，去 "),s("router-link",{attrs:{to:"/login"}},[t._v("登陆")])],1)]),s("div",{staticClass:"Register_sFill"},[s("div",{staticClass:"content"},[s("label",[t._v("手机号:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请输入你的手机号"},domProps:{value:t.phone},on:{input:function(s){s.target.composing||(t.phone=s.target.value)}}}),s("span",{staticClass:"error-msg"},[t._v("请输入手机号（以此来接收你的验证码）")])]),s("div",{staticClass:"content"},[s("label",[t._v("验证码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],attrs:{type:"text",placeholder:"请输入验证码"},domProps:{value:t.code},on:{input:function(s){s.target.composing||(t.code=s.target.value)}}}),s("button",{staticStyle:{width:"100px",height:"38px"},on:{click:t.getCode}},[t._v("获取验证码")]),s("span",{staticClass:"error-msg"},[t._v("请输入验证码")])]),s("div",{staticClass:"content"},[s("label",[t._v("登录密码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入你的登录密码"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),s("span",{staticClass:"error-msg"},[t._v("请输入8-30密码，密码必须同时包含字母数字")])]),s("div",{staticClass:"content"},[s("label",[t._v("确认密码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],attrs:{type:"password",placeholder:"请输入确认密码"},domProps:{value:t.confirmPassword},on:{input:function(s){s.target.composing||(t.confirmPassword=s.target.value)}}}),s("span",{staticClass:"error-msg"},[t._v("请与上方填写的密码一致")])]),s("div",{staticClass:"controls"},[s("input",{attrs:{name:"m1",type:"checkbox"},domProps:{checked:t.agree}}),s("span",[t._v("我已阅读并同意")]),s("a",{staticClass:"xy",attrs:{herf:"yhzcxy"}},[t._v("《用户注册协议》")]),s("a",{staticClass:"ys",attrs:{herf:"ysxy"}},[t._v("《隐私协议》")])]),s("div",{staticClass:"btn"},[s("button",{on:{click:t.userRegister}},[t._v("完成注册")])])])])])},r=[],o=(e(7658),{name:"Register",data(){return{phone:"",code:"",password:"",confirmPassword:"",agree:!0}},methods:{submitForm(t){this.$refs[t].validate((t=>{if(!t)return console.log("error submit!!"),!1;alert("submit!")}))},async getCode(){try{const{phone:t}=this;t&&await this.$store.dispatch("getCode",t),this.code=this.$store.state.user.code}catch(t){}},async userRegister(){try{const{phone:t,code:s,password:e,confirmPassword:a}=this;t&&s&&e==a&&await this.$store.dispatch("userRegister",{phone:t,code:s,password:e}),this.$router.push("/login")}catch(t){alert(t.message)}}}}),i=o,n=e(1001),c=(0,n.Z)(i,a,r,!1,null,"cc9c80aa",null),l=c.exports}}]);
//# sourceMappingURL=682.529ff12e.js.map