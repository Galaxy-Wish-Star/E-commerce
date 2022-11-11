<template>
    <div class="order-my">
        <a class="myorder">我的订单</a>
        <div class="parti">
            <div class="parti-headr">
                <ul>
                    <li><a href="">全部订单</a></li>
                    <li><a href="">待付款</a></li>
                    <li><a href="">待收货</a></li>
                    <li><a href="">待评价</a></li>
                </ul>
                <ul>
                    <li><a href="">我的常购商品</a></li>
                    <li><a href="">订单回收站</a></li>
                </ul>
                <ul>
                    <li><input type="text" placeholder="商品名称/商品编号/订单号"><i class="fa fa-search"></i><a href="">高级</a></li>
                </ul>
            </div>
            <div class="parti-header">
                <ul>
                    <li><a href="">近三个月订单</a></li>
                    <li><a>订单详情</a></li>
                </ul>
                <ul>
                    <li><a>收货人</a></li>
                    <li><a>金额</a></li>
                    <li><a href="">全部状态</a></li>
                    <li><a>操作</a></li>
                </ul>
            </div>
            <div class="parti-car">
                <div class="card">
                    <div class="card-header">
                            <ul>
                                <li><a>2022-09-22</a></li>
                                <li><a href="">订单号：<span>66666666</span></a></li>
                                <li><a href="">旗舰店</a></li>
                            </ul>
                    </div>
                    <div class="card-content">
                        <div class="card-content-left">
                            <div class="card-cotent-img">
                            <img src="../Wicket/image/东北新鲜大白菜.jpg" alt="">
                        </div>
                        <a href="">新鲜东北大白菜,让品质在路上</a>
                        <h3>X1</h3>
                        </div>
                        <div class="card-content-right">
                            <div><a href="">用户名</a></div>                          
                        <div class="perple-q">
                            <a href="">￥25.5</a>
                            &nbsp;
                            <a href="">在线支付</a>
                        </div>
                        <div class="perple-x">
                            <a href="">已完成</a>
                            &nbsp;
                            <a href="">订单详情</a>
                        </div>
                        <div class="div-btn">
                            <button>立即购买</button>
                        </div>   
                        </div>          
                    </div>
                </div>
            </div>
            <div class="parti-car">
                <div class="card">
                    <div class="card-header">
                            <ul>
                                <li><a>2022-09-22</a></li>
                                <li><a href="">订单号：<span>66666666</span></a></li>
                                <li><a href="">旗舰店</a></li>
                            </ul>
                    </div>
                    <div class="card-content">
                        <div class="card-content-left">
                            <div class="card-cotent-img">
                            <img src="../Wicket/image/东北新鲜大白菜.jpg" alt="">
                        </div>
                        <a href="">新鲜东北大白菜,让品质在路上</a>
                        <h3>X1</h3>
                        </div>
                        <div class="card-content-right">
                            <div><a href="">用户名</a></div>                          
                        <div class="perple-q">
                            <a href="">￥25.5</a>
                            &nbsp;
                            <a href="">在线支付</a>
                        </div>
                        <div class="perple-x">
                            <a href="">已完成</a>
                            &nbsp;
                            <a href="">订单详情</a>
                        </div>
                        <div class="div-btn">
                            <button>立即购买</button>
                        </div>   
                        </div>          
                    </div>
                </div>
            </div>
            <div class="parti-car">
                <div class="card">
                    <div class="card-header">
                            <ul>
                                <li><a>2022-09-22</a></li>
                                <li><a href="">订单号：<span>66666666</span></a></li>
                                <li><a href="">旗舰店</a></li>
                            </ul>
                    </div>
                    <div class="card-content">
                        <div class="card-content-left">
                            <div class="card-cotent-img">
                            <img src="../Wicket/image/东北新鲜大白菜.jpg" alt="">
                        </div>
                        <a href="">新鲜东北大白菜,让品质在路上</a>
                        <h3>X1</h3>
                        </div>
                        <div class="card-content-right">
                            <div><a href="">用户名</a></div>                          
                        <div class="perple-q">
                            <a href="">￥25.5</a>
                            &nbsp;
                            <a href="">在线支付</a>
                        </div>
                        <div class="perple-x">
                            <a href="">已完成</a>
                            &nbsp;
                            <a href="">订单详情</a>
                        </div>
                        <div class="div-btn">
                            <button>立即购买</button>
                        </div>   
                        </div>          
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
      
    },
};
</script>

<style lang="scss" scoped>
@import "src/assets/css/_color.scss";
@import "src/assets/css/_fonts.scss";
    .order-my{
        margin-top: 30px;
        margin-left: -900px;
        display: block;
        .myorder{
            display: block;
            width: 100%;
            height: 60px;
            line-height: 60px;
            background-color: $white-color;
            color: $black-color;
            padding-left: 15px;
        }
        .parti{
            margin-top: 10px;
            width: 100%;
            background-color: $white-color;
            .parti-headr{
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding-top: 20px;
                padding-left: 10px;
                ul{
                    display: flex;
                    li{
                        margin: 0 50px 0 0;
                        a{
                            width: 60px;
                        }
                    }
                }
            }
            .parti-header{
                display: flex;
                justify-content: space-between;
                width: 99%;
                margin: 0 auto;
                margin-top: 15px;
                background-color: $words-color;
                height: 30px;
                line-height: 30px;
                ul{
                    display: flex;
                    padding-left: 30px;
                    li{
                        margin: 0 100px 0 0;
                        a{
                            font-size: 12px;
                        }
                    }
                }
            }
            .parti-car{
                width: 95%;
                height: 130px;
                margin: 0 auto;
                border: 2px solid $words-color;
                margin-top: 20px;
                .card-header{
                    background-color: $words-color;
                    margin-top: -2px;
                    width: 100%;
                    ul{
                        width: 100%;
                        height: 35px;
                        line-height: 35px;
                        display: flex;
                        margin-left: 30px;
                        li{
                            margin: 0 100px 0 0;
                            a{
                                font-size: 12px;
                            }
                        }
                    }
                }
                .card-content{
                    display: flex;
                    height: 100px;
                    .card-content-left{
                        display: flex;
                        line-height: 100px;
                        width: 500px;
                        .card-cotent-img{
                        img{
                            height: 70px;
                            margin: 15px;
                           }
                        }
                        a{
                            font-size: 12px;
                        }
                        h3{
                            margin: 0 0 0 30px;
                        }
                    }
                    .card-content-right{
                        width: 100%;
                        display: flex;
                        justify-content: space-around;
                        line-height: 100px;
                    }       
                }
            }
        }
    }
</style>