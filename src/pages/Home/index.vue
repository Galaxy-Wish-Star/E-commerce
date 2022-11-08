<template>
    <div>
        <!-- 三级联动全局组件 -->
        <TypeNav></TypeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
    </div>
</template>

<script>
// 引入其他的组件
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend/Recommend";
export default {
    name: "",
    components: {
        ListContainer,
        Recommend,
    },
};
</script>

<style lang="scss" scoped></style>
