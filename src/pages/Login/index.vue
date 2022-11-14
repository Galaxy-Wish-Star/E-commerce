<template>
    <div class="login-container">
        <!-- 登录 -->
        <div class="login-wrap">
            <div class="login">
                <div class="loginform">
                    <ul class="tab clearFix">
                        <!-- <li>
                            <a href="##" style="border-right: 0;">扫描登录</a>
                            <div class="lllsz" style="display:none">
                                <img src="../Login/images/wx_cz.jpg" alt="">
                            </div>
                        </li> -->

                        <li>
                            <a href="##" class="current">账户登录</a>
                        </li>
                    </ul>

                    <div class="content">
                        <form action="##">
                            <div class="input-text clearFix">
                                <input type="text" placeholder="邮箱/用户名/手机号" v-model="userName" />
                            </div>
                            <div class="input-text clearFix">
                                <input type="text" placeholder="请输入密码" v-model="password" />
                            </div>
                            <div class="setting clearFix">
                                <label class="checkbox inline">
                                    <input name="m1" type="checkbox" value="2" checked="" />
                                    自动登录
                                </label>
                                <span class="forget">忘记密码？</span>
                            </div>
                            <button class="btn" @click="getLogin">登&nbsp;&nbsp;录</button>
                        </form>

                        <div class="call clearFix">
                            <ul>
                                <li><img src="./images/qq.png" alt="" /></li>
                                <li><img src="./images/sina.png" alt="" /></li>
                                <li><img src="./images/ali.png" alt="" /></li>
                                <li><img src="./images/weixin.png" alt="" /></li>
                            </ul>
                            <router-link class="register" to="/register">立即注册</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Login",
    data() {
        return {
            userName: "admin",
            password: "123456",
        };
    },
    methods: {
        getLogin() {
            // axios
            //     .post(
            //         "http://192.168.157.250:8080/api/login?username=" +
            //             this.userName +
            //             "&password=" +
            //             this.password +
            //             "",
            //     )
            //     .then(function (response) {
            //         console.log(response.data);
            //     });
        },
    },
};
</script>

<style lang="scss" scoped>
.login-container {
    .login-wrap {
        height: 600px;
        background-color: #e93854;

        .login {
            width: 1200px;
            height: 487px;
            margin: 60 auto;
        }

        .loginform {
            width: 420px;
            height: 500px;
            box-sizing: border-box;
            background: rgb(199, 194, 194);
            float: right;
            top: 60px;
            position: relative;
            padding: 20px;

            .tab {
                li {
                    width: 50%;
                    float: left;
                    text-align: center;

                    a {
                        width: 100%;
                        display: block;
                        height: 50px;
                        line-height: 50px;
                        font-size: 20px;
                        font-weight: 700;
                        color: #333;
                        border: 1px solid #ddd;
                        box-sizing: border-box;
                        text-decoration: none;
                    }

                    .current {
                        width: 380px;
                        border-top-color: #28a3ef;
                        color: #e1251b;
                    }
                }
            }

            .content {
                width: 380px;
                height: 450px;
                box-sizing: border-box;
                border: 1px solid #ddd;
                border-top: none;
                padding: 18px;

                form {
                    margin: 15px 0 18px 0;
                    font-size: 12px;
                    line-height: 18px;

                    .input-text {
                        padding-top: 48px;
                        height: 20px;
                        width: 342px;

                        span {
                            float: left;
                            width: 37px;
                            height: 32px;
                            border: 1px solid #ccc;
                            // background: url(../../assets/img/icons.png) no-repeat -10px -201px;
                            box-sizing: border-box;
                            border-radius: 2px 0 0 2px;
                        }

                        .pwd {
                            background-position: -72px -201px;
                        }

                        input {
                            width: 342px;
                            height: 40px;
                            box-sizing: border-box;
                            border: 1px solid #ccc;
                            border-left: none;
                            float: left;
                            padding-top: 6px;
                            padding-bottom: 6px;
                            font-size: 14px;
                            line-height: 22px;
                            padding-right: 8px;
                            padding-left: 8px;

                            border-radius: 0 2px 2px 0;
                            outline: none;
                        }
                    }

                    .setting {
                        label {
                            float: left;
                            font-size: 18px;
                            padding-top: 28px;
                        }

                        .forget {
                            float: right;
                            font-size: 18px;
                            padding-top: 28px;
                        }
                    }

                    .btn {
                        background-color: #e1251b;
                        padding: 6px;
                        border-radius: 0;
                        font-size: 16px;
                        font-family: 微软雅黑;
                        word-spacing: 4px;
                        border: 1px solid #e1251b;
                        color: #fff;
                        width: 100%;
                        height: 45px;
                        margin-top: 30px;
                        outline: none;
                    }
                }

                .call {
                    margin-top: 30px;

                    ul {
                        float: left;

                        li {
                            float: left;
                            margin-right: 5px;
                        }
                    }

                    .register {
                        float: right;
                        font-size: 15px;
                        line-height: 38px;
                        font-size: 18px;
                    }

                    .register:hover {
                        color: #4cb9fc;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>
