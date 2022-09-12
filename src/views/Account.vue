<template>
  <main class="account">
    <base-dialog></base-dialog>
    <h1>My account</h1>
    <div class="signIn-register-btn">
      <button class="btn-log body-small">Sign in</button>
      <button class="btn-log body-small">Register</button>
    </div>

    <form class="body-small" @submit.prevent="submitForm">
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
      <div class="remember-checkbox">
        <input
          class="checkbox"
          type="checkbox"
          id="checkbox"
          value="Remember me"
        />
        <!-- v-model="checked" -->
        <label>Remember me</label>
      </div>
      <p v-if="!formIsValid">
        Please enter a valid email and password (must be at least 6 characters
        long).
      </p>
      <div>
        <button>{{ submitButtonCaption }}</button>
        <button @click="switchAuthMode">{{ switchModeButtonCaption }}</button>
      </div>
      <span>Have you forgotten your password?</span>
    </form>
  </main>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {
      email: "",
      paswword: "",
      formIsValid: true,
      mode: "signIn",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "signIn") {
        return "SIGN IN";
      } else {
        return "REGISTER";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "signIn") {
        return "REGISTER";
      } else {
        return "SIGN IN";
      }
    },
  },
  methods: {
    async submitForm() {
      this.FormIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;

      try {
        if (this.mode === "signIn") {
        } else {
          await this.$store.dispatch("register", {
            email: this.email,
            password: this.password,
          });
        }
      } catch (err) {
        this.error = err.message || "Failed to authenticate, try later.";
      }

      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === "signIn") {
        this.mode = "register";
      } else {
        this.mode = "signIn";
      }
    },
  },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

@media only screen and (min-width: 0) {
  .account {
    padding-top: 24px;
    display: block;
    // font-size: 12px;
    line-height: 20px;
    // font-weight: 400;
    font-family: "DM Sans Regular", sans-serif;
  }
  .signIn-register-btn {
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    align-items: center;
    height: 32px;
    margin: 0 auto;
    border-radius: 4px;
    background-color: $light-gray;
  }

  .btn-log {
    width: 134px;
    height: 30px;
    border: none;
    padding: 0;
    border-radius: 5px;

    // margin: 0 auto;
  }
  form {
    width: 288px;
    margin: 87px auto 92px;
    input {
      width: 100%;
      margin-bottom: 16px;
      height: 38px;
      border-radius: 4px;
      // border: none;
      padding: 0 8px;
    }

    .checkbox {
      width: 13px;
    }
    .remember-checkbox {
      display: flex;
      flex-direction: row;
      // justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
