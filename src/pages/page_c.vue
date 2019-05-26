<template>
  <div class="pageC">
    <div class="pageitem">
      <ContentItem content_item_content="C"></ContentItem>
    </div>
    <div class="pageitem">
      <ContentItem content_item_content="C"></ContentItem>
    </div>
    <div class="pageitem">
      <ContentItem content_item_content="C"></ContentItem>
    </div>
    <div class="pageitem">
      <ContentItem content_item_content="C"></ContentItem>
    </div>
  </div>

</template>

<script>
import ContentItem from "../components/content_item";

export default {
  name: "PageC",
  components: {
    ContentItem
  }
};
</script>
<style scoped>
.pageC {
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
