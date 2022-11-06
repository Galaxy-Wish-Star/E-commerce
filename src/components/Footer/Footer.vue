<template>
    <div>
        <!-- /*---------------- 脚部---------------- */ -->

		<div class="footer-head">
			<div class="footer-header">
				<div class="introduce">
					<i class="fa fa-leaf"></i>
					<div class="foolter-header-title">绿色</div>
				</div>

				<div class="introduce">
					<i class="fa fa-cloud"></i>
					<div class="foolter-header-title">智能</div>
				</div>
				<div class="introduce">
					<i class="fa fa-tags"></i>
					<div class="foolter-header-title">实惠</div>
				</div>
				<div class="introduce">
					<i class="fa fa-paper-plane"></i>
					<div class="foolter-header-title">安全</div>
				</div>
				<div class="introduce">
					<i class="fa fa-desktop"></i>
					<div class="foolter-header-title">便捷</div>
				</div>
			</div>
		</div>
		<div class="footer-head-body">
			<div class="footer-header-body">
				<span>xx农产网是一家专注于绿色有机农产品的专业服务网</span>

				<span>xx专注于满足市场需求不断拓展服务区域</span>

				<span>没有中间商，免除差价让交易更加简单</span>

				<span>实名认证登录、注册专业渠道让交易更加有保障</span>

				<span>快速稳定的销往全国各地经销商和个体户</span>
			</div>
		</div>
		<div class="footer-body">
			<ul class="aboutt">
				<li><a href="javascript:;">关于我们</a></li>
				<span>|</span>
				<li><a href="javascript:;">法律申明</a></li>
				<span>|</span>
				<li><a href="javascript:;">使用协议</a></li>
				<span>|</span>
				<li><a href="javascript:;">版权隐私</a></li>
				<span>|</span>
				<li><a href="javascript:;">友情链接</a></li>
				<span>|</span>
				<li><a href="javascript:;">成功案例</a></li>
				<span>|</span>
				<li><a href="javascript:;">XX大事件</a></li>
				<span>|</span>
				<li><a href="javascript:;">产品库</a></li>
				<span>|</span>
				<li><a href="javascript:;">品种库</a></li>
				<span>|</span>
				<li><a href="javascript:;">产品价格大全</a></li>
				<span>|</span>
				<li><a href="javascript:;">产品地图</a></li>
			</ul>
		</div>
		<div class="foolter-bootm">
			<ul class="infor ip-infor" id="ipadrees-infor"></ul>
			<ol class="infor">
				<li>蜀ICP备12345678号-1服务热线:400-008-8888</li>
				<li>
					互联网农产品信息服务资格证书:(蜀)–经营性-2019-0001四川xx农产品网营业执照
				</li>
				<li>&copy;-2022 Cnhnb B2B SYSTEN ALL Rights Reserved</li>
			</ol>
		</div>
		
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
/*---------------- 脚部---------------- */

@import "src/assets/css/_color.scss";
@import "src/assets/css/_fonts.scss";
.footer-head {
    padding-top: 40px;
    background-image: linear-gradient(to right, #1d99e3, rgb(134, 191, 50));
    width: 100%;
    background-size: 1400% 300%;
    animation: dynamics 5s ease infinite;
    @keyframes dynamics {
        0% {
            background-position: 0% 0%;
        }

        10% {
            background-position: 40% 50%;
        }
        30% {
            background-position: 100% 100%;
        }
    }
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
.footer-head-body {
    background-image: linear-gradient(to right, #1d99e3, rgb(134, 191, 50));
    animation: dynamics 5s ease infinite;
    width: 100%;
    background-size: 1400% 300%;
    .footer-header-body {
        /* 固定容器的宽度 */
        width: 1226px;
        /* 设置容器居中 */
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        span {
            position: relative;
            top: -30px;
            left: 5px;
            width: 170px;
            color: #f3f3f3;
            font-size: 14px;
        }
    }
}
.footer-body {
    background-color: rgb(64, 64, 64);
    .aboutt {
        li{
            a{
                color: $words-color;
            }
        }
        padding-top: 10px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            color: #000;
            margin: 0 18px;
        }
    }
}
.foolter-bootm {
    padding-top: 10px;
    background-color: rgb(64, 64, 64);
    color: #f3f3f3;
    font-size: 14px;
    .infor {
        text-align: center;
        li {
            padding-top: 5px;
            &:last-child {
                padding-bottom: 10px;
            }
        }
    }
    .ip-infor {
        display: flex;
        justify-content: center;
        li {
            margin: 10px 10px;

            a {
                &:hover {
                    color: $bule-color;
                }
            }
            &:nth-child(2n) {
                color: $green-color !important;
                font-weight: bold;
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
