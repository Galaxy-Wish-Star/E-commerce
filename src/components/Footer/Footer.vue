<template>
    <div>
        <!-- /*---------------- 脚部---------------- */ -->

        <div class="footer-head">
            <div class="footer-header">
                <div class="introduce">
                    <i class="fa fa-leaf"></i>
                    <div class="foolter-header-title">精准帮扶</div>
                </div>

                <div class="introduce">
                    <i class="fa fa-cloud"></i>
                    <div class="foolter-header-title">售后无忧</div>
                </div>
                <div class="introduce">
                    <i class="fa fa-tags"></i>
                    <div class="foolter-header-title">产地保证</div>
                </div>
                <div class="introduce">
                    <i class="fa fa-paper-plane"></i>
                    <div class="foolter-header-title">双向信用</div>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <div class="footer">
            <div class="footer-container">
                <div class="footerList">
                    <div class="footerItem">
                        <h4>购物指南</h4>
                        <ul class="footerItemCon">
                            <li>购物流程</li>
                            <li>会员介绍</li>
                            <li>生活旅行/团购</li>
                            <li>购物指南</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>配送方式</h4>
                        <ul class="footerItemCon">
                            <li>上门自提</li>
                            <li>211限时达</li>
                            <li>配送服务查询</li>
                            <li>配送费收取标准</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>支付方式</h4>
                        <ul class="footerItemCon">
                            <li>货到付款</li>
                            <li>在线支付</li>
                            <li>分期付款</li>
                            <li>邮局汇款</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>售后服务</h4>
                        <ul class="footerItemCon">
                            <li>售后政策</li>
                            <li>价格保护</li>
                            <li>退款说明</li>
                            <li>返修/退换货</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>特色服务</h4>
                        <ul class="footerItemCon">
                            <li>夺宝岛</li>
                            <li>DIY装机</li>
                            <li>延保服务</li>
                            <li>E卡通</li>
                        </ul>
                    </div>
                    <div class="footerItem">
                        <h4>帮助中心</h4>
                        <img src="./images/qrcode-login.jpg" />
                    </div>
                </div>
                <div class="copyright">
                    <ul class="helpLink">
                        <li>
                            关于我们
                            <span class="space"></span>
                        </li>
                        <li>
                            联系我们
                            <span class="space"></span>
                        </li>
                        <li>
                            关于我们
                            <span class="space"></span>
                        </li>
                        <li>
                            商家入驻
                            <span class="space"></span>
                        </li>
                        <li>
                            营销中心
                            <span class="space"></span>
                        </li>
                        <li>
                            友情链接
                            <span class="space"></span>
                        </li>
                        <li>
                            关于我们
                            <span class="space"></span>
                        </li>
                        <li>
                            营销中心
                            <span class="space"></span>
                        </li>
                        <li>
                            友情链接
                            <span class="space"></span>
                        </li>
                        <li>关于我们</li>
                    </ul>
                    <p>地址：北京市昌平区宏福科技园综合楼6层</p>
                    <p><img src="./images/国徽.png" alt="" />京ICP备19006430号</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
/*---------------- 脚部---------------- */

@import "src/assets/css/_color.scss";
@import "src/assets/css/_fonts.scss";

.footer {
    background-color: #eaeaea;

    .footer-container {
        width: 1226px;
        margin: 0 auto;
        padding: 0 15px;

        .footerList {
            padding: 20px;
            border-bottom: 1px solid #e4e1e1;
            border-top: 1px solid #e4e1e1;
            overflow: hidden;
            padding-left: 40px;
            .footerItem {
                border-right: 1px solid #616161;
                &:last-child {
                    border-right: none;
                }
                text-align: center;
                width: 15.6666667%;
                float: left;

                h4 {
                    font-size: 17px;
                    font-weight: bold;
                }

                .footerItemCon {
                    li {
                        font-size: 14px;
                        line-height: 30px;
                    }
                }

                &:last-child img {
                    width: 121px;
                }
            }
        }

        .copyright {
            padding: 20px;

            .helpLink {
                text-align: center;

                li {
                    display: inline;

                    .space {
                        border-left: 1px solid #666;
                        width: 1px;
                        height: 13px;
                        background: #666;
                        margin: 8px 10px;
                    }
                }
            }

            p {
                img {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                margin: 20px 0;
                text-align: center;
            }
        }
    }
}
body {
    background: #f5f5f5;
}
.footer-head {
    .footer-header {
        /* 固定容器的宽度 */
        width: 1226px;
        /* 设置容器居中 */
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 200px;
        .introduce {
            position: relative;
            width: 120px;
            height: 120px;
            border: 1px solid #f3f3f3;
            border-radius: 50%;
            i {
                position: absolute;
                top: 50px;
                left: 50px;
                transform: scale(3.5, 3.5);
                color: #f3f3f3;
            }
            .foolter-header-title {
                font-family: "myfont";
                font-size: 22px;
                position: absolute;
                top: -25px;
                left: 39px;
                color: #f3f3f3;
            }
        }
    }
}
.container {
    /* 固定容器的宽度 */
    width: 1200px;
    /* 设置容器居中 */
    margin: 25px auto;
    box-sizing: border-box; //IE盒模型
}
.shar-to {
    .shar-to-one {
        .shar-one {
            background-color: #f3f3f3;
            i {
                padding: 12px 16px;
                scale: 1.5;
                color: #494949;
            }
            color: #494949;
            display: inline-block;
            width: 46px;
            height: 60px;
            position: fixed;
            top: 580px;
            right: 2px;
            font-size: 12px;
            box-shadow: 0 0 6px rgb(0 0 0 / 30%);
            cursor: pointer;
            border-radius: 6px;
            p {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &:hover {
                background-color: #e3e5e7;
            }
        }
    }
}
.shar-to {
    display: block;
    .shar-to-two {
        background-color: #f3f3f3;
        position: fixed;
        top: 519px;
        right: 2px;
        width: 46px;
        height: 51px;
        overflow: hidden;
        display: block;
        box-shadow: 0 0 6px rgb(0 0 0 / 30%);
        cursor: pointer;
        border-radius: 6px;
        .shar-two {
            i {
                padding: 12px 16px;
                scale: 1.5;
                color: #494949;
            }
            color: #494949;
            display: inline-block;
            width: 46px;
            height: 60px;
            font-size: 12px;
            border-radius: 6px;
            p {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            &:hover {
                background-color: #e3e5e7;
            }
            overflow: hidden;
            position: relative;
            animation: locmoveclipslider 6s infinite ease-out;
            animation-delay: 1.5s;
            &:nth-child(1) {
                position: relative;
                top: -2px;
                height: 55px;
            }
            &:nth-child(2) {
                scale: 1.2;
                position: relative;
                top: -5px;
                height: 55px;
                margin-top: 25px;
            }
            &:nth-child(3) {
                position: relative;
                top: -32px;
            }
        }
    }
}
.shar-to {
    .shar-to-three {
        display: none;
        .shar-three {
            background-color: #f3f3f3;
            i {
                padding: 9px 16px;
                scale: 1.5;
                color: #494949;
            }
            color: #494949;
            display: inline-block;
            width: 46px;
            height: 64px;
            position: fixed;
            top: 650px;
            right: 2px;
            font-size: 12px;
            box-shadow: 0 0 6px rgb(0 0 0 / 30%);
            cursor: pointer;
            border-radius: 6px;
            p {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 35px;
                position: absolute;
                left: 11px;
            }
            &:hover {
                background-color: #e3e5e7;
            }
        }
    }
}
#ul {
    border: 1px solid #ddd;
    border-top: 0;
    background-color: #fff;
    box-shadow: 0 6px 6px rgb(0 0 0 / 30%);
    position: absolute;
    z-index: 99999999;
    width: 100%;
    li {
        a {
            color: #333;
            display: inline-block;
            width: 579px;
            height: 100%;
            padding: 10px 0 3px 14px;
            &:last-child {
                padding-bottom: 10px;
            }
            &:hover {
                background-color: #1d99e3;
                color: #f3f3f3;
            }
        }
    }
}
</style>
