<template>
    <div class="left">
     <div class="news-first">
        <div class="news-title">
            <h3>深度 印度外长访问莫斯科，顶住西方压力称要继续“买俄油”</h3>
        </div>
        <div class="new-tag">
            <div class="keywords">
                <a herf="font">印度</a>
                <a herf="font">莫斯科</a>
                <a herf="font">拉夫罗夫</a>
            </div>
            <span class="time">4天前</span>
        </div>
     </div>
     <div class="news-scond">
        <a class="photo">
            <img src="" alt="新闻助农">
        </a>
        <div class="news-title">
            <h3>用新闻的力量，以最大的努力，帮助更多的农民脱贫致富奔小康”</h3>
        </div>
        <div class="new-tag">
            <div class="keywords">
                <a herf="font">印度</a>
                <a herf="font">莫斯科</a>
                <a herf="font">拉夫罗夫</a>
            </div>
            <span class="time">4天前</span>
        </div>
     </div>
     </div>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.left{
    height: 200px;
    width: 600px;
}
.news-title h3{
    width: 600px;
    height: 40px;
    padding-bottom: 7px;
    font: normal 20px/26px "Microsoft Yahei";
    min-height: 35px;
    margin: top 15px;;
}
.new-tag{
    margin-top: 6px;
    font-size: 10px;
    color: #888;
    width: 200px;
    display: flex;
    .keywords{
        border-right: 1.5px solid #bbb;
        a{
            margin: 5px;
        }
    }
    span{
    color: #888;
    margin-right: 10px;
    text-decoration: none;
    margin-left: 4px;
}
    .font{
        word-spacing:6px;
    }
}


</style>