<template>
  <div class="control_panel">
    <div class="controlitem">
      <router-link :to="'/A'">AAAAA</router-link>
    </div>
    <div class="controlitem">
      <router-link :to="'/B'">BBBBB</router-link>
    </div>
    <div class="controlitem">
      <router-link :to="'/C'">CCCCC</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ControlPanel"
};
</script>
<style scoped>
.controlitem {
  height: 70px;
  background: gold;
  border: 1px solid black;
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>
