<template>
  <div>
    {{ $t("name") }} {{ $t("surname") }}
    <!-- <q-markdown ref="markdown" :src="markdown" toc /> -->
    <q-markdown ref="markdown" :src="markdown" toc @data="onToc" />
  </div>
</template>

<script>
import markdown from "src/markdown/README.md";

export default {
  data() {
    return {
      markdown: markdown,
      toc: [
        { id: "h2-Heading", label: "h2 Heading", level: 2, children: [] },
        { id: "h3-Heading", label: "h3 Heading", level: 3, children: [] }
      ]
    };
  },
  methods: {
    onToc(toc) {
      //this.toc = toc;
      this.toc = this.toc.splice(0, this.toc.length, ...toc);
    }
  }
};
</script>

<style></style>
