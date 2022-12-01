<template>
    <div class="banner">
        <a href="https://m.cnhnb.com/html/hammer/course/detail/?id=538"><img src="../image/土鸡.jpg" alt=""></a>
        <a href="https://m.cnhnb.com/html/hammer/course/detail/?id=280"><img src="../image/猪.jpg" alt=""></a>
        <a href="https://m.cnhnb.com/html/hammer/course/detail/?id=473"><img src="../image/鱼.jpg" alt=""></a>
    </div>
  </template>
  
  <script>
    export default {
        
    }
  </script>
  <style lang="scss" scoped>
    .banner{
        display: flex;
        justify-content: space-around;
        margin-top: 30px;       
        img{
            transition: all 1s;
        }:hover{
        transform: scale(1.2);
    }
    }
  </style>
  