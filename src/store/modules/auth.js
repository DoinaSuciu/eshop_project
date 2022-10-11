import { getAuth, updateProfile } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import VueRouter from "vue-router";
import db from "../../firebase/firebaseInit";

export default {
  state: {
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
    isAuthenticated: false,

    userId: null,
    token: null,
    tokenExpiration: null,
  },

  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
  },

  mutations: {
    SET_IS_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    UPDATE_USER(state, payload) {
      state.user = payload;
    },
    SET_PROFILE_ADMIN(state, payload) {
      state.profileAdmin = payload;
    },
    SET_PROFILE_INFO(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUsername = doc.data().username;
      state.profileInitials =
        state.profileFirstName[0] + state.profileLastName[0];
    },
    SET_PROFILE_INITIALS(state) {
      state.profileInitials =
        state.profileFirstName[0] + state.profileLastName[0];
    },
    CHANGE_FIRST_NAME(state, payload) {
      state.profileFirstName = payload;
    },
    CHANGE_LAST_NAME(state, payload) {
      state.profileLastName = payload;
    },
    CHANGE_USER_NAME(state, payload) {
      state.profileUsername = payload;
    },
  },

  actions: {
    async getCurrentUser({ commit }, user) {
      const dataBase = doc(db, "users", getAuth().currentUser.uid);
      const dbResults = await getDoc(dataBase);
      commit("SET_PROFILE_INFO", dbResults);
      commit("SET_PROFILE_INITIALS");
      const token = await user.getIdTokenResult();
      const admin = await token.claims.admin;
      commit("SET_PROFILE_ADMIN", admin);
    },
    async updateUserSettings({ commit, state }) {
      const dataBase = doc(db, "users", state.profileId);
      await updateProfile(dataBase, {
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUsername,
      });
      commit("SET_PROFILE_INITIALS");
    },

    logout(context) {
      getAuth().signOut();
    },
  },
};
