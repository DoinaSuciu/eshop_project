import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blog from "../views/Blog.vue";
import OurStory from "../views/OurStory.vue";
import Shop from "../views/Shop.vue";
import ProductView from "../views/ProductView.vue";
import About from "../views/About.vue";
import Account from "../views/Account.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/our-story",
    name: "our-story",
    component: OurStory,
  },
  {
    path: "/product-view/:productId",
    name: "product-view",
    component: ProductView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/account",
    name: "account",
    component: Account,
  },
  // {
  // path: "/help",
  // name: "help",
  // component: Help,
  // },
  // {
  //   path: "/search",
  //   name: "",
  //   component: Search,
  // },
  // {
  //   path: "/bag",
  //   name: "",
  //   component: Bag,
  // },
  // {
  // path: "/contact",
  // name: "contact",
  // component: Contact,
  // },
  // {
  // path: "/terms-of-services",
  // name: "terms of services",
  // component: TermsOfServices,
  // },
  // {
  // path: "/shipping-and-returns",
  // name: "shipping and returns",
  // component: ShippingAndReturns,
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
