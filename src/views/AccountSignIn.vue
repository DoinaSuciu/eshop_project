<template>
  <main class="account-sign-in">
    <span
      class="body-medium notification-blog-sign-in"
      v-if="prevPage.fullPath === '/blogs'"
    >
      Please Sign In to read the full blog
    </span>

    <h1 class="account-sign-in-title">My account</h1>
    <div class="wrapper">
      <tabs>
        <tab title="Sign In">
          <SignIn />
        </tab>
        <tab title="Register">
          <Register />
        </tab>
      </tabs>
    </div>
  </main>
</template>

<script>
import Tab from "@/components/Tab.vue";
import Tabs from "@/components/Tabs.vue";
import SignIn from "@/components/SignIn.vue";
import Register from "@/components/Register.vue";

export default {
  name: "AccountSignIn",
  components: {
    Tab,
    Tabs,
    SignIn,
    Register,
  },
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
    prevPage() {
      return this.$store.state.prevPage;
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
          // console.log("signIn");
          await this.$store.dispatch("signIn", actionPayload);
        } else {
          // console.log("register");
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

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

@media only screen and (min-width: 0) {
  .notification-blog-sign-in {
    margin-bottom: 20px;
  }

  .account-sign-in {
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    line-height: 20px;
    font-family: "DM Sans Regular", sans-serif;

    .account-sign-in-title {
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
