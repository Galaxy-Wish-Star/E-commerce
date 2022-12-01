<template>
    <div>
        <Nav></Nav>
        <!-- 三级联动全局组件 -->
        <div class="content">
            <Hall></Hall>
        </div>
    </div>
  </template>
  
  <script>
    import Hall from "@/pages/School/Hall";
    import Nav from "@/components/Nav";
    export default {
        components:{
            Hall,
            Nav,
        }
    }
  </script>
  <style lang="scss" scoped>
      .content{
            margin: 0 auto;
            width: 1230px;
          }
  </style>
  