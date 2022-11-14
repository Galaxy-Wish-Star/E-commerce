<template>
    <div class="img">
      <div class="img-banner">
           <img src="../Adver/images/banner1.jpg" alt="">
      </div>
    </div>
</template>

<script>

export default {
    components: {
    },
  mounted(){
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/scss/_color.scss";
@import "../../../assets/scss/_fonts.scss";

.img{
  background-color: $white-color;
  height: 150px;
  margin-top: 20px;
  .img-banner{
    padding-top: 25px;
  }
}
</style>
