<template>
  <div class="banner">
    <div class="banner_left_logo">Chiron</div>
    <div class="banner_right">我是banner_right</div>
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>
<style scoped>
.banner {
  display: grid;
  grid-template-columns: 1fr 7fr;
  height: 60px;
}
.banner_left_logo {
  background: #1890ff;
  display: grid;
  align-items: center;
  justify-items: center;
  font: 20px Roboto;
  color: #ffff;
  width: 256px;
}
.banner_right {
  box-shadow: 0 1px 2px gray;
  background: #F5F7FA;
  z-index: 10;
}
</style>
