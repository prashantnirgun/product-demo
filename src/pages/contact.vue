<template>
  <div>
    <q-markdown :src="markdown" toc="true" no-emoji="false" class="q-ma-sm" />
  </div>
</template>

<script>
import markdown from "src/assets/contact.md";

export default {
  data() {
    return {
      markdown: markdown
    };
  }
};
</script>

<style></style>
