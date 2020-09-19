<template>
  <div>
    <q-markdown :src="markdown" toc="true" no-emoji="false" class="q-ma-sm" />
  </div>
</template>

<script>
import markdown from "src/markdown/faq.md";

export default {
  data() {
    return {
      markdown
    };
  }
};
</script>

<style></style>
