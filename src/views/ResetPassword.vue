<template>
  <main>
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <Loading v-if="loading" />

    <h1 class="lost-password">Have you Forgotten Your Password ?</h1>
    <p class="body-medium info-forgot-password">
      If you've forgotten your password, enter your email in the form below and
      we'll send you instructions to set a new one.
    </p>

    <form class="body-small" @submit.prevent="resetPassword">
      <input
        class="body-small"
        type="text"
        id="email-reset-password"
        placeholder="Email"
        v-model="email"
      />

      <p v-if="emailIsNotValid" class="msg-error-formIsNotValid">
        Please enter a valid email.
      </p>

      <button class="btn-reset-password body-small" type="submit">
        RESET PASSWORD
      </button>
    </form>
  </main>
</template>

<script>
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import db from "../firebase/firebaseInit";

export default {
  data() {
    return {
      // formIsValid: true,
      email: "",
      emailIsNotValid: false,
      modalActive: false,
      modalMessage: "",
      loading: null,
      regex:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
  },
  methods: {
    resetPassword() {
      if (!this.regex.test(this.email)) {
        this.emailIsNotValid = true;
      } else {
        this.emailIsNotValid = false;
        this.loading = true;
        const auth = getAuth();
        sendPasswordResetEmail(auth, this.email)
          .then(() => {
            this.modalMessage =
              "If your account exists, you will receive an email";
            this.loading = false;
            this.modalActive = true;
          })
          .catch((err) => {
            // console.log(JSON.stringify(err, null, 3));
            if (err.code === "auth/user-not-found") {
              this.modalMessage = `This email address does not appear to be registered. <br/>
                Please check you have entered it correctly.`;
            } else {
              this.modalMessage = err.message;
            }
            this.loading = false;
            this.modalActive = true;
          });
      }
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
  components: { Modal, Loading },
};
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
@import "../styles/vars.scss";
@import "../styles/typography.scss";

@media only screen and (min-width: 0) {
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }
  .lost-password {
    margin: 69px auto 16px auto;
  }

  .info-forgot-password {
    margin: 0;
  }

  .msg-error-formIsNotValid {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    color: $errors;
  }
  form {
    margin-top: 64px;
    width: 100%;
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
}

@media only screen and (min-width: 1024px) {
  main {
    max-width: 561px;
  }

  .lost-password {
    margin-bottom: 39px;
  }

  form {
    margin-top: 76px;
  }

  .btn-reset-password {
    height: 53px;
    font-size: 16px;
    margin-top: 25px;

    &:hover {
      background-color: white;
      font-weight: 700;
      color: $black;
      border: 1px solid black;
    }
  }
}
</style>
>
