
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
      import(/* webpackChunkName: "SiteView" */ "../views/Post.vue"),
    meta: {
      showHeader: true,
    },
    
  },
  {
    path: "/user",
    name: "User",
    component: () =>
      import(/* webpackChunkName: "Building" */ "../views/User.vue"),
    meta: {
      showHeader: true,
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