<template>
    <div class="root">
        <Header></Header>
        <Footer></Footer>
        <div class="test-viewport">测试转换</div>
    </div>
</template>

<script>
// import axios from "axios"
// import bootstrap from "bootstrap"

// 引入页面
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default {
    name: "App",
    //注册组件
    comments: {
        Header,
        Footer,
    },
};
</script>

<style lang="scss" scoped>
.test-viewport {
    width: 750px;
    height: 100px;
    font-size: 40px;
    text-align: center;
    line-height: 100px;
    background: #13b5b1;
}
</style>
