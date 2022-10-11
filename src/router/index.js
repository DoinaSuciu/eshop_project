import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blogs from "../views/Blogs.vue";
import BlogPost from "../views/BlogPost.vue";
import OurStory from "../views/OurStory.vue";
import Shop from "../views/Shop.vue";
import ProductView from "../views/ProductView.vue";
import About from "../views/About.vue";
import AccountSignIn from "../views/AccountSignIn.vue";
import MyAccount from "../views/MyAccount.vue";
import ResetPassword from "../views/ResetPassword.vue";
import Contact from "../views/Contact.vue";
import TermsAndConditions from "../views/TermsAndConditions";
import DeliveriesAndReturns from "../views/DeliveriesAndReturns";
import ShoppingCart from "../views/ShoppingCart.vue";
import Checkout from "../views/Checkout.vue";
import store from "../store/index.js";
import NotFound from "../views/NotFound.vue";

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
    path: "/blogs",
    name: "blogs",
    component: Blogs,
  },
  {
    path: "/blog-post/:id",
    name: "blog-post",
    component: BlogPost,
    meta: {
      requiresAuth: true,
    },
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
    path: "/account-sign-in",
    name: "account-sign-in",
    component: AccountSignIn,
    meta: {
      requiresUnauth: true,
    },
  },
  {
    path: "/my-account",
    name: "my-account",
    component: MyAccount,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: ResetPassword,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/terms-and-conditions",
    name: "terms and conditions",
    component: TermsAndConditions,
  },
  {
    path: "/deliveries-and-returns",
    name: "deliveries and returns",
    component: DeliveriesAndReturns,
  },
  {
    path: "/shopping-cart",
    name: "shopping cart",
    component: ShoppingCart,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
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
  {
    path: "/:notFound(.*)",
    name: "404 - Page not Found",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  store.commit("SET_PREV_ROUTE", from);

  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/account-sign-in");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
