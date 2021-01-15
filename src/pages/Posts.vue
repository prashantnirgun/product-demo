<template>
  <div class="q-ma-lg">
    <q-markdown ref="markdown" :src="markdown" />
  </div>
</template>

<script>
export default {
  props: ["article"],
  data() {
    return {
      markdown: null
    };
  },
  watch: {
    article() {
      this.loadComponent();
    }
  },
  computed: {
    componentLoader() {
      return () =>
        import(`src/markdown/${this.$route.params.article.toLowerCase()}.md`);
    }
  },
  methods: {
    async loadComponent() {
      let data = await this.componentLoader();
      this.markdown = data.default;
    }
  },
  mounted() {
    this.loadComponent();
  }
};
</script>

<style></style>
