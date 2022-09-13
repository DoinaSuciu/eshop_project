<template>
  <main class="account">
    <h1 class="myAccount">My account</h1>
    <div class="signIn-register-btn">
      <button class="btn-log body-small">Sign in</button>
      <button class="btn-log body-small">Register</button>
    </div>

    <form class="body-small account-form" @submit.prevent="submitForm">
      <input
        v-if="!isLoading"
        class="body-small"
        type="text"
        id="name"
        placeholder="Name"
        v-model="name"
      />

      <input
        v-if="!isLoading"
        class="body-small"
        type="text"
        id="surname"
        placeholder="Surname"
        v-model="surname"
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

      <!-- v-model="checked" -->
      <label class="remember-checkbox">
        <input class="checkbox" type="checkbox" value="Remember me" />Remember
        me</label
      >
      <p v-if="!formIsValid" class="msg-error-formIsNotValid">
        Please enter a valid email and password (must be at least 6 characters
        long).
      </p>

      <button class="btn-auth-mode body-small" @click="switchAuthMode">
        {{ switchModeButtonCaption }}
      </button>

      <button
        @click="redirectToResetPassword()"
        class="forgot-password body-small"
      >
        Have you forgotten your password?
      </button>
    </form>
  </main>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "signIn",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },

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

      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      try {
        if (this.mode === "signIn") {
          console.log("signIn");
          await this.$store.dispatch("signIn", actionPayload);
        } else {
          console.log("register");
          await this.$store.dispatch("register", actionPayload);
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
    redirectToResetPassword() {
      this.$router.push({ path: "/reset-password" });
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
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    line-height: 20px;
    font-family: "DM Sans Regular", sans-serif;

    .myAccount {
      margin: 0 auto 24px auto;
    }
  }

  .signIn-register-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    width: 288px;
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
  }

  .account-form {
    width: 288px;
    margin: 87px auto 92px;

    #name,
    #surname,
    #email,
    #password {
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

    .forgot-password {
      display: flex;
      margin: 16px auto 0 auto;
      border: none;
      background-color: $white;
      color: $black;
    }
  }
}
</style>
