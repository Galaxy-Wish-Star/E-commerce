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
import Nav from "@/components/Nav";

export default {
    name: "news",
    components: {
        Right,
        Left,
        Nav,
    },
};
</script>
div{ }
<style lang="scss" scoped></style>
