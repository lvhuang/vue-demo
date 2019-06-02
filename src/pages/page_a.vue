<template>
   <div>
    <a-button type="primary">Primary</a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
import Vue from 'Vue'
Vue.use(Button);

export default {
  name: "PageA",
  components: {
  }
};
</script>
<style scoped>
.pageA {
  display: grid;
  grid-template-rows: 2fr 2fr;
  grid-template-columns: 2fr 2fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  height: 100%;
}

.pageitem {
  border: 1px solid black;
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>
