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
    </div>
</template>

<script>
    export default {
        name:"left"
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
}
.new-tag{
    margin-top: 6px;
    border-right: 1.5px solid #bbb;
    font-size: 10px;
    color: #888;
    .font{
        word-spacing:6px;
    }
}
.new-tag span{
    color: #888;
    margin-right: 10px;
    text-decoration: none;
}

</style>