import { i18n } from "src/boot/i18n";
//import i18n from "src/i18n";
import store from "src/store";
//console.log("i18n 1", this.$i18n);
//console.log("i18n 2", this.$i18n.locale);
console.log("i18n 3", i18n.locale);
//console.log("i18n 4", axios);

//https://medium.com/quasar-framework/adding-full-i18n-to-quasar-150da2d5bba4
//https://medium.com/@nafaabout/app-internationalization-with-quasar-framework-bfc222e6247c
const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`
    //redirect: `/en`
  },
  {
    path: "/:lang",
    // component: {
    //   render(c) {
    //     return c("router-view");
    //   }
    // },
    component: () => import("layouts/Layout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("pages/Index.vue")
      },
      // {
      //   path: ":post?/",
      //   name: "posts",
      //   props: true,
      //   component: () => import("pages/Posts.vue")
      // }
      {
        path: "training",
        name: "training",
        component: () => import("pages/Overview.vue")
      },
      // {
      //   name: "faq",
      //   path: "faq",
      //   component: () => import("pages/Faq.vue")
      // },
      {
        name: "posts",
        path: "posts/:article",
        props: true,
        component: () => import("pages/Posts.vue")
      },
      {
        path: ":chapter/:topic?",
        props: true,
        name: "lesson",
        component: () => import("pages/Lesson.vue")
      }
      // { path: "faq", component: () => import("pages/Faq.vue") },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
