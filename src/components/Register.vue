<template>
  <section class="register">
    <form class="body-small register-form" @submit.prevent="register">
      <input
        class="body-small"
        type="text"
        id="firstName"
        placeholder="First Name"
        v-model="firstName"
      />

      <input
        class="body-small"
        type="text"
        id="lastName"
        placeholder="Last Name"
        v-model="lastName"
      />

      <input
        class="body-small"
        type="text"
        id="username"
        placeholder="Username"
        v-model="username"
      />

      <input
        class="body-small"
        type="text"
        id="email"
        placeholder="Email"
        v-model="email"
      />
      <input
        class="body-small"
        type="password"
        id="password"
        placeholder="Password"
        v-model.trim="password"
      />
      <input
        class="body-small"
        type="password"
        id="password-confirm"
        placeholder="Confirm password"
        v-model.trim="passwordConfirm"
      />

      <label class="remember-checkbox">
        <input class="checkbox" type="checkbox" value="Remember me" />Remember
        me</label
      >
      <!-- <p v-if="!formIsValid" class="msg-error-formIsNotValid">
        Please enter a valid email and password (must be at least 6 characters
        long).
      </p> -->
      <div v-show="error" class="msg-error-formIsNotValid">
        {{ this.errorMessage }}
      </div>

      <button type="submit" class="btn-auth-mode body-small">REGISTER</button>

      <p class="body-small">
        By continuing you agree to the
        <router-link class="link-terms" to="/terms-and-conditions"
          >terms & conditions
        </router-link>
      </p>
    </form>
  </section>
</template>

<script>
// import firebase from "firebase/app";
// import "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import db from "../firebase/firebaseInit";

export default {
  name: "Account",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      error: null,
      errorMessage: "",
    };
  },
  computed: {},

  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.passwordConfirm !== "" &&
        this.passwordConfirm === this.password &&
        this.firstName !== "" &&
        this.username !== "" &&
        this.lastName !== ""
      ) {
        this.error = false;
        this.errorMessage = "";
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            await setDoc(doc(db, "users", user.uid), {
              firstName: this.firstName,
              lastName: this.lastName,
              username: this.username,
              email: this.email,
            });
            this.$router.push({ name: "home" });
            return;
          })
          .catch((err) => {
            this.error = true;
            this.errorMessage = err.message;
            return;
          });
      }
      this.error = true;
      this.errorMessage = "Please fill out all the fields!";
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

@media only screen and (min-width: 0) {
  .register {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    line-height: 20px;
    font-family: "DM Sans Regular", sans-serif;
  }

  .register-form {
    width: 288px;
    margin: 50px auto 92px;

    #firstName,
    #lastName,
    #username,
    #email,
    #password,
    #password-confirm {
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
      margin: 25px auto 0 auto;
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

    .forgot-password {
      display: flex;
      margin: 16px auto 0 auto;
      border: none;
      background-color: $white;
      color: $black;
    }
  }

  .link-terms {
    // text-decoration: none;
    color: black;
  }
}
</style>
