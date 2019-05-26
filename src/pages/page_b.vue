<template>
  <div class="pageB">
    <div class="pageitem">
      <ContentItem content_item_content="B"></ContentItem>
    </div>
    <div class="pageitem">
      <ContentItem content_item_content="B"></ContentItem>
    </div>
    <div class="pageitem">
      <ContentItem content_item_content="B"></ContentItem>
    </div>
    <div class="pageitem">
      <ContentItem content_item_content="B"></ContentItem>
    </div>
  </div>
</template>

<script>
import ContentItem from "../components/content_item";

export default {
  name: "PageB",
  components: {
    ContentItem
  }
};
</script>
<style scoped>
.pageB {
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
