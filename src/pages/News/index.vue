<template>
    <div>
        <Nav></Nav>
        <Right />
        <Left />
    </div>
</template>

<script>
import Right from "./Right/Right";
import Left from "./Left/Left";

export default {
    name: "news",
    components: {
        Right,
        Left,
    },
};
</script>

<style lang="scss" scoped></style>
