<template>
  <q-input
    class="GNL__toolbar-input"
    outlined
    bg-color="white"
    rounded
    dense
    v-model="search"
    color="bg-grey-7 shadow-1"
    placeholder="Search for topics, locations & sources"
  >
    <template v-slot:prepend>
      <q-icon v-if="search === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''" />
    </template>
    <template v-slot:append>
      <q-btn flat dense round aria-label="Menu" icon="arrow_drop_down">
        <q-menu anchor="bottom right" self="top right">
          <div class="q-pa-md" style="width: 400px">
            <div class="text-body2 text-grey q-mb-md">
              Narrow your search results
            </div>

            <div class="row items-center">
              <div class="col-3 text-subtitle2 text-grey">
                Exact phrase
              </div>
              <div class="col-9 q-pl-md">
                <q-input dense v-model="exactPhrase" />
              </div>

              <div class="col-3 text-subtitle2 text-grey">
                Has words
              </div>
              <div class="col-9 q-pl-md">
                <q-input dense v-model="hasWords" />
              </div>

              <div class="col-3 text-subtitle2 text-grey">
                Exclude words
              </div>
              <div class="col-9 q-pl-md">
                <q-input dense v-model="excludeWords" />
              </div>

              <div class="col-3 text-subtitle2 text-grey">
                Website
              </div>
              <div class="col-9 q-pl-md">
                <q-input dense v-model="byWebsite" />
              </div>

              <div class="col-12 q-pt-lg row justify-end">
                <q-btn
                  flat
                  dense
                  no-caps
                  color="grey-7"
                  size="md"
                  style="min-width: 68px;"
                  label="Search"
                  v-close-popup
                />
                <q-btn
                  flat
                  dense
                  no-caps
                  color="grey-7"
                  size="md"
                  style="min-width: 68px;"
                  @click="onClear"
                  label="Clear"
                  v-close-popup
                />
              </div>
            </div>
          </div>
        </q-menu>
      </q-btn>
    </template>
  </q-input>
</template>

<script>
export default {
  date() {
    return {
      search: "",
      showAdvanced: false,
      showDateOptions: false,
      exactPhrase: "",
      hasWords: "",
      excludeWords: "",
      byWebsite: "",
      byDate: "Any time"
    };
  }
};
</script>

<style></style>
