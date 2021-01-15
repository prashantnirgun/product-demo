<template>
  <div class="q-ma-lg">
    <q-markdown ref="markdown" :src="markdown" />
  </div>
</template>

<script>
import mysql from "src/markdown/mysql.md";
import version from "src/markdown/version.md";
import faq from "src/markdown/faq.md";
import tally from "src/markdown/tally.md";
import tax from "src/markdown/tax.md";
import enquiry from "src/markdown/enquiry.md";

export default {
  props: ["post"],
  data() {
    return {
      //markdown: null,
    };
  },
  watch: {
    // post(newVal) {
    //   console.log("props is changed", this.post, newVal);
    // }
  },

  computed: {
    markdown() {
      switch (this.$route.params.article.toLowerCase()) {
        case "mysql":
          return mysql;
          break;
        case "version":
          return version;
          break;
        case "faq":
          return faq;
          break;
        case "tally":
          return tally;
          break;
        case "enquiry":
          return enquiry;
          break;
        case "tax":
          //return async () => await import("../markdown/tax.md");
          //return this.callMe();
          return tax;
          break;
        default:
          return version;
          break;
      }
    }
  },
  methods: {
    async callMe() {
      let abc = await import("../markdown/tax.md");
      console.log(typeof abc, abc);
      return abc;
    }
  }
  //   mounted() {
  //     console.log(
  //       "lang",
  //       this.$i18n.locale,
  //       this.$route.path,
  //       this.$route,
  //       this.$route.params.post
  //     );
  //     //this.markdown = this.$route.params.post;
  //     switch (this.$route.params.post.toLowerCase) {
  //       case "mysql":
  //         this.markdown = mysql;
  //         break;

  //       default:
  //         break;
  //     }
  //   }
};
</script>

<style></style>
