
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/post",
    name: "Post",
    component: () =>
      import(/* webpackChunkName: "SiteView" */ "../views/SiteView.vue"),
    meta: {
      showHeader: true,
    },
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "Site" */ "../views/Site.vue"),
        meta: {
          showHeader: true,
        },
      },
      {
        path: "building/:id",
        component: () =>
          import(/* webpackChunkName: "Building" */ "../views/Building.vue"),
        meta: {
          showHeader: true,
        },
      }
    ],
  },
  {
    path: "/building",
    name: "Building",
    component: () =>
      import(/* webpackChunkName: "Building" */ "../views/Building.vue"),
    meta: {
      showHeader: true,
    },
  },

  {
    path: "/equipment",
    name: "Equipment",
    component: () =>
      import(/* webpackChunkName: "Equipment" */ "../views/Equipment.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/signin",
    name: "Signin",
    component: () =>
      import(/* webpackChunkName: "Equipment" */ "../views/Signin.vue"),
    meta: {
      showHeader: false,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () =>
      import(/* webpackChunkName: "Equipment" */ "../views/Signup.vue"),
    meta: {
      showHeader: false,
    },
  },
  

  {
    path: "/report",
    name: "Report",
    component: () =>
      import(/* webpackChunkName: "Report" */ "../views/Report.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/setting",
    name: "Setting",
    component: () =>
      import(/* webpackChunkName: "Setting" */ "../views/Setting.vue"),
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ "../views/Profile.vue"),
    meta: {
      showHeader: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;