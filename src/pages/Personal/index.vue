<template>
    <div>
        <!-- 三级联动全局组件 -->
        <NavList></NavList>
        <!--      路由出口-->
        <router-view></router-view>
        <div class="foolter-banner">
            <Glike></Glike>
            <Adver></Adver>
        </div>
    </div>
</template>

<script>
import NavList from "@/pages/Personal/NavList";
import Glike from "@/pages/Personal/Glike";
import Adver from "@/pages/Personal/Adver";

// import Wicket from "@/pages/Personal/Wicket";
// import groupOrder from './groupOrder'
export default {
    components: {
        NavList,
        Glike,
        Adver,
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

.foolter-banner {
    border-top: 1px solid #00a818;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 850px;
}
</style>
