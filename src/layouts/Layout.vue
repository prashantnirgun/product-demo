<template>
  <q-layout view="lHh lpR lFf" class="bg-grey-1">
    <q-header
      reveal
      elevated
      style="background-color: #1f509e;"
      height-hint="64"
    >
      <q-toolbar class="GNL__toolbar">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
        />

        <q-toolbar-title
          v-if="$q.screen.gt.xs"
          shrink
          class="row items-center no-wrap"
        >
          <q-avatar square>
            <img src="images/logo.jpg" />
          </q-avatar>
          <!-- <span class="q-ml-sm text-capitalize">{{ siteName }}</span> -->
          <span class="q-ml-sm text-capitalize">{{ $t("site_name") }}</span>
        </q-toolbar-title>

        <!-- <q-space /> -->
        <!-- <search-bar /> -->

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn-dropdown
            icon="g_translate"
            class="text-capitalize"
            :label="language"
          >
            <q-list dense>
              <q-item clickable v-close-popup @click="changeLanguage('en-us')">
                <q-item-section>
                  <q-item-label>English</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="changeLanguage('mr')">
                <q-item-section>
                  <q-item-label>मराठी</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="changeLanguage('hi')">
                <q-item-section>
                  <q-item-label>हिंदी</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn round dense flat color="grey-8" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notifications</q-tooltip>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-tooltip>Account</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <Sidebar model="root" :leftDrawerOpen="leftDrawerOpen" />

    <q-page-container>
      <router-view />
      <!-- place QPageScroller at end of page -->
      <q-page-scroller
        position="bottom-left"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
      <div class="bg-primary text-white q-pa-md" style="overflow: hidden;">
        <div class="text-subtitle1 text-weight-bold">About</div>
      </div>
      <!-- <q-footer reveal elevated>
        <q-toolbar>
         
        </q-toolbar>
      </q-footer> -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { fasGlobeAmericas, fasFlask } from "@quasar/extras/fontawesome-v5";
export default {
  name: "GoogleNewsLayout",
  components: {
    Sidebar: () => import("./Drawer")
    //"search-bar": () => import("src/layouts/SearchBar")
  },
  data() {
    return {
      leftDrawerOpen: false,
      language: "English"
    };
  },
  computed: {
    siteName() {
      console.log("site name", process.env.SITE_NAME);
      return process.env.SITE_NAME;
    }
  },
  methods: {
    changeLanguage(locale) {
      this.language = locale;
      this.$i18n.locale = locale;
      console.log("new langauge is ", locale, this.$i18n.locale);
      this.$router.push({
        params: { lang: locale }
      });
      //i18n.locale = locale;
    }
  }
};
</script>
<style lang="sass">
.GNL
  &__toolbar
    height: 60px
  &__toolbar-input
    width: 55%
  &__drawer-item
    line-height: 20px
    border-radius: 0 20px 20px 0
    margin-right: 12px
    .q-item__section--avatar
      .q-icon
        color: #5f6368
    .q-item__label
      color: #3c4043
      letter-spacing: .01785714em
      font-size: .875rem
      font-weight: 500
      line-height: 1rem
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>
