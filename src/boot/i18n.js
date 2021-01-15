import Vue from "vue";
import VueI18n from "vue-i18n";
import { messages, numberFormats } from "src/i18n";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
  numberFormats
});

export default async ({ app, Vue }) => {
  // Vue.use(VueI18n);
  // //console.log(messages, numberFormats);

  // app.i18n = new VueI18n({
  //   locale: "en-us",
  //   fallbackLocale: "en-us",
  //   messages,
  //   numberFormats
  // });

  // Set i18n instance on app
  //app.i18n = new VueI18n({
  app.i18n = i18n;
};

export { i18n };
