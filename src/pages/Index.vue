<template>
  <q-page class="flex flex-center">
    <div class="text-h3 q-ma-lg">Inventory & Accounting Software</div>
    <div class="row wrap fit justify-evenly items-start">
      <q-card
        class="my-card col-4 q-ma-sm "
        v-for="list in lists"
        :key="list.heading"
      >
        <q-card-section class="text-center">
          <q-avatar
            square
            size="100px"
            font-size="100px"
            text-color="blue"
            :icon="list.icon"
          />
        </q-card-section>
        <q-separator inset />
        <q-card-section>
          <div class="text-subtitle2 text-center">{{ list.heading }}</div>
          <!-- <div class="text-subtitle2">{{ list.subHeading }}</div> -->
        </q-card-section>
        <q-separator inset />
        <q-card-section class="">
          {{ list.text }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      //lists: [1, 2, 3, 4, 5]
      lists: [
        {
          heading: "Best in APMC",
          subHeading: "",
          text:
            "Suitable for all types of Vegetales, Fruis, Onion Potato Traders. Best in Industry reliable software.",
          icon: "star"
        },
        {
          heading: "300+ Satisfied Customer",
          subHeading: "",
          text:
            "More than 300 satisfied customer all over APMC's accross Maharashtra.",
          icon: "verified"
        },
        {
          heading: "Multilingual",
          subHeading: "",
          text:
            "Languages English, Marathi or combination of both can be used to maintain records of your company.",
          icon: "g_translate"
        },
        {
          heading: "Trusted over 14 Years",
          subHeading: "",
          text:
            "Sucessfully completed its 14th year in business. Strong fundamentals values providing trunky solutions in cost effective manner.",
          icon: "insights"
        },
        {
          heading: "More than 100+ Reports",
          subHeading: "",
          text:
            "All important APMC, Stock, Caret & Audited Reports are ready to use. Taxes of different state and APMC are covered.",
          icon: "dvr"
        },
        {
          heading: "Network Ready",
          subHeading: "",
          text:
            "It works on Client Server technology so you can connect computer and share the data in Local Network.",
          icon: "queue_play_next"
        },
        {
          heading: "Cost effetive",
          subHeading: "",
          text:
            "Yes its cost effective in all respect. All its product, module, services are very much competative in its industry",
          icon: "favorite"
        },
        {
          heading: "Minimum Requirement",
          subHeading: "",
          text:
            "It didn't required any costly hardware or Software requirement. You can connect any printer Dot Matrix, Laser Jet, InkJet. Only requirement is Windows XP onward any Operating System.",
          icon: "emoji_events"
        }
      ],
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
  }
  // watch: {
  //   lang(lang) {
  //     this.$i18n.locale = lang.value;
  //     // set quasar's language too!!
  //     import(`quasar/lang/${lang.value}`).then(language => {
  //       this.$q.lang.set(language.default);
  //     });
  //   }
  // }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
