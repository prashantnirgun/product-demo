import Vue from "vue";
import VueRouter from "vue-router";
import { i18n } from "src/boot/i18n";
import routes from "./routes";

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function(/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  // use beforeEach route guard to set the language
  Router.beforeEach((to, from, next) => {
    // use the language from the routing param or default language
    let language = to.params.lang;
    if (!language) {
      language = "en-us";
    }

    // set the current language for i18n.
    i18n.locale = language;
    next();
  });

  return Router;
}
