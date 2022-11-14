<template>
    <div class="right">
     <div class="news-first">
        <div class="news-title">
            <h3>深度 印度外长访问莫斯科，顶住西方压力称要继续“买俄油”</h3>
        </div>
        <div class="new-tag">
            <div class="place">
                <a>印度</a>
                <a>莫斯科</a>
                <a>拉夫罗夫</a>
            </div>
            <span class="time">4天前</span>
        </div>
     </div>
    </div>
</template>

<script>
    export default {
        name:"Right"
    }
</script>

<style lang="scss" scoped>
.right{
    float: left;
    width: 600px;
}
.news-first{
    width: 600px;
    margin-left: 0px;
}
.new-tag{
    float: left;
    padding-right: 4px;
    height: 12px;
    line-height: 11px;
    margin-top: 4px;
    border-right: 1px solid #bbb;
    max-width: 180px;
    margin-right: 12px;
}
</style>