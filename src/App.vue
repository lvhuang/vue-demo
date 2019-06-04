<template>
  <div id="app">
    <div class="banner">
      <Banner></Banner>
    </div>
    <div class="container">
      <div class="control_panel">
        <ControlPanel></ControlPanel>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/banner";
import ControlPanel from "./components/control_panel";

export default {
  name: "app",
  components: {
    Banner,
    ControlPanel
  }
};
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 1fr 7fr;
  height: 500px;
}
.content {
  /* text-align: center;
  background: antiquewhite; */
  border: 20px solid #F7F5FA;
}
.control_panel {
  /* background: yellow; */
}
</style>
