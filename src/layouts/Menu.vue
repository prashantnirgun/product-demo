<template>
  <div>
    <q-list class="text-grey-8" v-for="option in model" :key="option.label">
      <q-expansion-item
        class="GNL__drawer-item"
        v-if="!!option.children"
        expand-separator
        :icon="option.icon"
        :label="option.label"
        :header-inset-level="0"
        :content-inset-level="option.level"
      >
        <Menu :model="option.children" :depth="option.children" />
      </q-expansion-item>

      <q-list v-else>
        <q-item class="GNL__drawer-item" clickable v-ripple :to="option.to">
          <q-item-section avatar>
            <q-icon :name="option.icon" />
          </q-item-section>
          <q-item-section>{{ option.label }}</q-item-section>
        </q-item>
      </q-list>

      <!-- <q-item
        class="GNL__drawer-item"
        v-ripple
        v-for="link in model"
        :key="link.label"
        clickable
      >
        <q-item-section avatar>
          <q-icon :name="link.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ link.label }}</q-item-label>
        </q-item-section>
      </q-item> -->

      <!-- <q-separator inset class="q-my-sm" />

      <div class="q-mt-md">
        <div class="flex flex-center q-gutter-xs">
          <a
            class="GNL__drawer-footer-link"
            href="javascript:void(0)"
            aria-label="Privacy"
            >Privacy</a
          >
          <span> · </span>
          <a
            class="GNL__drawer-footer-link"
            href="javascript:void(0)"
            aria-label="Terms"
            >Terms</a
          >
          <span> · </span>
          <a
            class="GNL__drawer-footer-link"
            href="javascript:void(0)"
            aria-label="About"
            >About Google</a
          >
        </div>
      </div> -->
    </q-list>
  </div>
</template>

<script>
import { fasGlobeAmericas, fasFlask } from "@quasar/extras/fontawesome-v5";
//import root from "src/config/menu.json";

export default {
  name: "Menu",
  props: ["model", "depth"],
  data() {
    return {
      expanded: false
    };
  }
};
</script>

<style></style>
