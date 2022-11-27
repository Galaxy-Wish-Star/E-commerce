<template>
    <div
        class="root"
        :style="{
            transform: `scale(${scalesNum}) translate(-50%,0)`,
            '-webkit-transform': `scale(${scalesNum}) translate(-50%,0)`,
            '-moz-transform': `scale(${scalesNum}) translate(-50%,0)`,
            '-o-transform': `scale(${scalesNum}) translate(-50%,0)`,
            '-ms-transform': `scale(${scalesNum}) translate(-50%,0)`,
        }"
    >
        <Header></Header>
        <!-- 路由出口 -->
        <router-view></router-view>
        <Footer></Footer>
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
    data() {
        return {
            scalesNum: 1, // 缩放比例
        };
    },
    //注册组件
    components: {
        Header,
        Footer,
    },
    mounted() {
        //通知Vuex发请求,获取数据,存储于仓库当中
        this.$store.dispatch("categoryList");
        // 计算缩放比例

        this.resize_window();

        window.addEventListener("resize", () => {
            this.resize_window();
        });
    },
    methods: {
        resize_window() {
            // 因为设计图是带1920*1080的，但是浏览器本身带顶部工具栏，所以缩放到时候稍微更小一点，这样不会有滚动条，这个值可以选择更大些，比如2300，这样左右两边会有空白
            let myWidth = document.documentElement.clientWidth;
            let myHeight = document.documentElement.clientHeight;
            if (myHeight / 2220 !== 0 && myWidth / 2220 / (myHeight / 1080) >= 2) {
                this.scalesNum = myHeight / 1080;
            } else {
                this.scalesNum = myWidth / 1920;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.root {
    margin: 0;

    padding: 0;

    transform-origin: 0 0;

    position: relative;

    left: 50%;
    overflow: hidden;
}
</style>
