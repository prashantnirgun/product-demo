<template>
  <div class="q-px-lg q-pb-md">
    <div class="text-h4 q-ma-lg">{{ chapter }} / {{ topic }}</div>

    <q-media-player type="video" :sources="sources" v-if="data.video" />
    <div class="q-my-lg">{{ this.data.description }}</div>
    <div class="row q-gutter-md">
      <div v-for="list in data.seeAlso" :key="list.title">
        <q-btn
          color="primary"
          :label="list.title"
          @click="$router.replace(`/en/${list.link}`)"
        />
      </div>
      <div>
        <q-markdown ref="markdown" :src="markdown" v-if="data.markdown" />
      </div>
    </div>
  </div>
</template>

<script>
import { contents } from "src/config/content.js";
export default {
  props: ["chapter", "topic"],
  name: "PageIndex",
  data() {
    return {
      contents,
      data: {},
      markdown: null,
      sources: [
        {
          src:
            "http://www.peach.themazzone.com/durian/movies/sintel-2048-surround.mp4",
          type: "video/mp4"
        }
      ]
    };
  },
  computed: {
    layout() {
      return this.$q.screen.lt.sm
        ? "dense"
        : this.$q.screen.lt.md
        ? "comfortable"
        : "loose";
    },
    componentLoader() {
      return () => import(`src/markdown/${this.data.markdown}`);
    }
  },
  methods: {
    async loadComponent() {
      let data = await this.componentLoader();
      this.markdown = data.default;
    }
  },
  mounted() {
    //console.log("chapter", this.chapter, "topic", this.topic);
    this.data = this.contents.find(obj => obj.topic === this.topic);
    this.sources[0].src = this.data.video;

    if (this.data.markdown) {
      this.loadComponent();
    }
  }
};
</script>
