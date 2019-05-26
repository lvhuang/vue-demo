<template>
  <div class="banner">
    <div class="banner_left_logo">logo</div>
    <div class="banner_right">我是banner_right</div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
}
</script>
<style scoped>
.banner{
  display: grid;
  grid-template-columns: 1fr 7fr;
  height: 50px;
  line-height: 3;
 
}
 .banner_left_logo{
   background: lavender;
   text-align: center;
 }
</style>
