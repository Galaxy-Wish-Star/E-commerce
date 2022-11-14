<template>
    <!--    <nav class="nav">-->

    <div class="nav">
        <a href="###" class="active">全部商品分类</a>
        <router-link to="/news">农业新闻</router-link>
        <a href="###">美妆馆</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">全球购</a>
    </div>

    <!--    </nav>-->
</template>

<script>
export default {
    name: "Nav",
};
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    justify-content: center;

    a {
        display: inline-block;
        width: 200px;
        line-height: 45px;
        cursor: pointer;
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
        text-align: center;

        &:hover {
            background-color: #8dc742;
            color: #fff;
        }
    }

    .active {
        background-color: #8dc742;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
    }
}
</style>
