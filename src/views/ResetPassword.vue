<template>
  <main>
    <h1 class="lost-password">Lost password</h1>
    <p class="body-small">
      If you've forgotten your password, enter your e-mail address and we'll
      send you an e-mail
    </p>

    <form class="body-small" @submit.prevent="resetPasswordClicked">
      <input
        class="body-small"
        type="text"
        id="email-reset-password"
        placeholder="Email"
        v-model="email"
      />

      <p v-if="!formIsValid" class="msg-error-formIsNotValid">
        Please enter a valid email.
      </p>

      <button class="btn-reset-password body-small" @click="">
        RESET PASSWORD
      </button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      formIsValid: true,
      email: "",
    };
  },
  methods: {
    resetPasswordClicked() {
      this.FormIsValid = true;
      if (this.email === "" || !this.email.includes("@")) {
        this.formIsValid = false;
        return;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}
.lost-password {
  margin: 69px auto 16px auto;
}

.msg-error-formIsNotValid {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  // margin-bottom: 39px;
  color: $errors;
}
form {
  margin-top: 64px;
  width: 100%;
  // width: 288px;
  padding: 0;
  #email-reset-password {
    width: 100%;
    height: 25px;
    padding: 0;
    margin-bottom: 39px;
    border: none;
    border-bottom: 1px $light-gray;
    border-style: none none solid none;
  }
}

.btn-reset-password {
  display: flex;
  margin: 0 auto;
  border: none;
  border-radius: 4px;
  background-color: $black;
  color: $white;
  width: 288px;
  height: 32px;
  align-items: center;
  justify-content: center;
}
</style>
>
