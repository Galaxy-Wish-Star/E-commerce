<template>
    <div class="register-container">
        <!-- 注册内容 -->
        <div class="register">
            <h3>
                注册新用户
                <span class="go">我有账号，去 <a href="login.html" target="_blank">登陆</a> </span>
            </h3>
            <div class="Register_sFill">
            <div class="zcym">
            <div class="bossradio_sBox s_radioBox" style ="margin-right: 15px;">
                <label claa="s_radi">
                    <input type="radio" name="user-type" id="caigoushang" value="1">
                    <span>我是采购人</span>
                </label>
            </div>
            <div class="radio_sBox s_radioBox" style ="margin-right: 15px;">
                <label claa="s_radi">
                    <input type="radio" name="user-type" id="gongyingshang" value="1">
                    <span>我是供应商</span>
                </label>
            </div>
        </div>
           
        
            <div class="content">
                <label>账号：</label>
                <input type="text" placeholder="请输入你的账号" />
                <span class="error-msg">请输入4-32字符，只包括英文字母，数字和下划线</span>
            </div>
            <div class="content">
                <label>邮箱号:</label>
                <input type="text" placeholder="请输入你的邮箱" />
                <span class="error-msg">请输入邮箱号（以此来接收你的验证码）</span>
            </div>
            <div class="content">
                <label>邮箱验证:</label>
                <input type="text" placeholder="请输入验证码" />
                <span class="error-msg">请输入验证码</span>
            </div>
            <div class="content">
                <label>登录密码:</label>
                <input type="text" placeholder="请输入你的登录密码" />
                <span class="error-msg">请输入8-30密码，密码必须同时包含字母数字</span>
            </div>
            <div class="content">
                <label>确认密码:</label>
                <input type="text" placeholder="请输入确认密码" />
                <span class="error-msg">请与上方填写的密码一致</span>
            </div>
            <div class="controls">
                <input name="m1" type="checkbox" />
                <span>我已阅读并同意</span>
                <a herf="yhzcxy" class="xy">《用户注册协议》</a>
                <a herf="ysxy" class="ys">《隐私协议》</a>
                
            </div>
            <div class="btn">
                <button>完成注册</button>
            </div>
        
        </div>
    </div>
</div>    
</template>

<script>
export default {
    name: "Register",
};
</script>

<style lang="scss" scoped>
.register-container {
    .register {
        width: 1200px;
        height: 615px;
        border: 1px solid rgb(223, 223, 223);
        margin: 0 auto;

        h3 {
            margin: 0;
            padding: 6px 15px;
            color: #333;
            font-size: 20.04px;
            line-height: 30.06px;
            margin-right: 20px;
            margin-left: 260px;

            span {
                font-size: 14px;
                float: right;

                a {
                    color: #e1251b;
                }
            }
        }

        div:nth-of-type(1) {
            margin-top: 40px;
        }

        .content {
            padding-left: 390px;
            margin-bottom: 20px;
            position: relative;

            label {
                font-size: 14px;
                width: 96px;
                text-align: right;
                display: inline-block;
                text-align: left;
            }

            input {
                width: 270px;
                height: 38px;
                padding-left: 8px;
                box-sizing: border-box;
                margin-left: 5px;
                outline: none;
                border: 1px solid rgb(231, 229, 229);
            }

            img {
                vertical-align: sub;
            }

            .error-msg {
                
                top: 100%;
                left: 495px;
                color: #999;
                font-size: 10px;
                padding-left: 10px;
            }
        }

        .controls {
            text-align: center;
            position: relative;
            font-size: 15px;
            .xy {
             font-size: 14px;
             color: #e1251b;
            }
            .ys {
             font-size: 14px;
             color: #e1251b;
            }

            input {
                vertical-align: middle;
            }

            .error-msg {
                top: 100%;
                left: 495px;
                color:#999;
                font-size: 10px;
                padding-left: 10px;
            }
        }

        .btn {
            text-align: center;
            line-height: 36px;
            margin: 17px 0 0 55px;

            button {
                outline: none;
                width: 270px;
                height: 36px;
                background: #e1251b;
                color: #fff !important;
                display: inline-block;
                font-size: 16px;
            }
        }
    }
}
 .zcym{
    width: 300px;
    display: flex;
    align-items: baseline;
    padding-left: 444px;
    margin: 0 42px;
    margin-bottom: 28px;
    position: relative;
    color: #333;
    font-size: 16px;
     }
.register>.row {
    margin-bottom: 15px;
}
</style>
