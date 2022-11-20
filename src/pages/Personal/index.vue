<template>
    <div>
        <!-- 三级联动全局组件 -->
        <NavList></NavList>
        <!--      路由出口-->
        <router-view></router-view>
    </div>
</template>

<script>
import NavList from "@/pages/Personal/NavList";
// import Wicket from "@/pages/Personal/Wicket";
// import groupOrder from './groupOrder'
export default {
    components: {
        NavList,
        //   Wicket,
        // groupOrder,
    },
};
</script>

<style lang="scss" scoped>
div {
    margin: 0 auto;
    width: 1230px;
    display: flex;
}
</style>
