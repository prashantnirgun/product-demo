const routes = [
  {
    path: "/",
    component: () => import("layouts/Layout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "test", component: () => import("pages/Test.vue") },
      { path: "contact", component: () => import("pages/contact.vue") }
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
