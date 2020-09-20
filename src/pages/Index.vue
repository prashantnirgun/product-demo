<template>
  <div class="row wrap fit justify-evenly items-start">
    <q-card class="my-card col-4 q-ma-sm " v-for="list in lists" :key="list">
      <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
    <div>
      <q-select
        label="Select Language"
        v-model="lang"
        map-options
        :options="langs"
        class="row"
      />
      <div class="row q-pt-md">Phrase for Success: {{ $t("success") }}</div>
      <div class="row q-pt-md">Phrase for Failure: {{ $t("failed") }}</div>
      <div class="row q-pt-md">Current Language: {{ $i18n.locale }}</div>
      <div class="row q-pt-md">Currency: {{ $n(100, "currency") }}</div>
      Currency with functional Component:
      <i18n-n :value="100" format="currency"></i18n-n>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      //lists: [1, 2, 3, 4, 5]
      lists: [1, 2],
      langs: [
        {
          label: "German",
          value: "de"
        },
        {
          label: "US English",
          value: "en-us"
        }
      ],
      lang: this.$i18n.locale
    };
  },
  watch: {
    lang(lang) {
      this.$i18n.locale = lang.value;
      // set quasar's language too!!
      import(`quasar/lang/${lang.value}`).then(language => {
        this.$q.lang.set(language.default);
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
