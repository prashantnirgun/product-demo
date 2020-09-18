<template>
  <div>
    <q-markdown :src="markdown" />
  </div>
</template>

<script>
import markdown from "src/assets/README.md";

export default {
  data() {
    return {
      markdown: markdown
    };
  }
};
</script>

<style></style>
