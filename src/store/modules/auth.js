export default {
  state: {
    userId: null,
    token: null,
    tokenExpiration: null,
  },
  getters: {
    userId(state) {
      return state.userId;
    },
    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      console.log(`isAuthenticated ${state.token}`);
      return !!state.token;
    },
  },
  mutations: {
    SET_USER(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.tokenExpiration = payload.tokenExpiration;
      console.log(`token: ${state.token}`);
    },
  },
  actions: {
    async signIn(context, payload) {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDesA7LU8NRvlbeVIQU_Z51KrGyRkhng8c",
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );
      // this.$router.push("/");

      const responseData = await response.json();
      if (!response.ok) {
        console.log(`errorSignIn ${responseData}`);
        const error = new Error(
          responseData.message ||
            "Failed to authenticate. Check your sign in data."
        );
        throw error;
      }

      console.log(`okSignIn ${responseData}`);

      context.commit("SET_USER", {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
    },

    async register(context, payload) {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDesA7LU8NRvlbeVIQU_Z51KrGyRkhng8c",
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
        }
      );

      const responseData = await response.json();
      if (!response.ok) {
        console.log(`errorRegister ${responseData}`);
        const error = new Error(
          responseData.message ||
            "Failed to authenticate. Check your sign in data."
        );
        throw error;
      }

      console.log(`okRegister ${responseData}`);
      context.commit("SET_USER", {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn,
      });
      console.log(`token is ${state.token}`);
    },

    logout(context) {
      context.commit("SET_USER", {
        token: null,
        userId: null,
        tokenExpiration: null,
      });
    },
  },
};
