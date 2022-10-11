import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/base.scss";
import "./styles/vars.scss";
import { currency } from "@/currency";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import db from "./firebase/firebaseInit";

Vue.config.productionTip = false;
Vue.filter("currency", currency);

new Vue({
  router,
  store,
  render: (h) => h(App),
  created: function () {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const dbUser = await getDoc(docRef);
        store.commit("SET_IS_AUTHENTICATED", true);
        store.commit("SET_PROFILE_INFO", dbUser);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
      } else {
        store.commit("SET_IS_AUTHENTICATED", false);
      }
    });
  },
}).$mount("#app");
