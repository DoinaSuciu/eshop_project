<template>
  <section class="sign-in">
    <form class="body-small sign-in-form" @submit.prevent="signIn">
      <input
        class="body-small"
        type="text"
        id="email-sign-in"
        placeholder="Email"
        v-model="email"
      />
      <input
        class="body-small"
        type="password"
        id="password-sign-in"
        placeholder="Password"
        v-model.trim="password"
      />

      <label class="remember-checkbox">
        <input class="checkbox" type="checkbox" value="Remember me" />Remember
        me</label
      >
      <!-- <p v-if="!formIsValid" class="msg-error-formIsNotValid">
        Please enter a valid email and password (must be at least 6 characters
        long).
      </p> -->
      <button class="btn-auth-mode body-small">SIGN IN</button>
    </form>
    <button
      @click="redirectToResetPassword()"
      class="forgot-password body-small"
    >
      Have you forgotten your password?
    </button>
  </section>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import db from "../firebase/firebaseInit";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      // formIsValid: true,
      error: null,
      errorMessage: "",
    };
  },
  computed: {
    prevPage() {
      return this.$store.state.prevPage;
    },
  },

  methods: {
    signIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.error = false;
          this.errorMsg = "";
          if (this.prevPage.fullPath === "/blogs") {
            this.$router.go(-1);
            return;
          }
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          this.error = true;
          this.errorMsg = err.message;
        });
    },

    redirectToResetPassword() {
      this.$router.push({ name: "reset-password" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

@media only screen and (min-width: 0) {
  .sign-in {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

  .sign-in-form {
    width: 288px;
    margin: 87px auto 0px;

    #email-sign-in,
    #password-sign-in {
      width: 100%;
      height: 25px;
      margin-bottom: 16px;
      height: 38px;
      border: none;
      border-bottom: 1px $light-gray;
      border-style: none none solid none;
      background-color: $white;
      padding: 0 8px;
    }

    .checkbox {
      width: 13px;
      margin: 0 4px 0 0;
    }

    .remember-checkbox {
      display: flex;
      align-items: center;
    }

    .msg-error-formIsNotValid {
      color: $errors;
    }

    .btn-auth-mode {
      display: flex;
      margin: 12px auto 0 auto;
      border: none;
      border-radius: 4px;
      background-color: $black;
      color: $white;
      width: 288px;
      height: 32px;
      align-items: center;
      justify-content: center;
      // padding: 6px 32px 6px 32px;
    }
  }
  .forgot-password {
    display: flex;
    margin: 16px auto 92px auto;
    border: none;
    background-color: $white;
    color: $black;
  }
}
</style>
