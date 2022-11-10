<template>
    <div>
        <!-- 三级联动全局组件 -->
        <NavList></NavList>
        <Wicket></Wicket>
    </div>
</template>

<script>
    import NavList from "@/pages/Personal/NavList";
    import Wicket from "@/pages/Personal/Wicket";
    export default {
        components:{
            NavList,
            Wicket,
        }
    }
</script>

<style lang="scss" scoped>
    div{
        margin: 0 auto;
        width: 1230px;
        display: flex;
    }
</style>