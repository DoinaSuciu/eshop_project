<template>
  <main class="contact">
    <h1 class="myContact">Contact</h1>

    <form class="body-small form-contact" @submit.prevent="submitForm">
      <input
        class="body-small"
        type="text"
        id="first-name"
        placeholder="First name"
      />

      <input
        class="body-small"
        type="text"
        id="last-name"
        placeholder="Last name"
      />

      <input
        class="body-small"
        type="text"
        id="email-contact"
        placeholder="Email"
      />
      <div class="select-group body-small">
        <select
          class="select-subject body-small-dark-gray"
          name="subject"
          v-model="select"
        >
          <option class="body-small" disabled value=""></option>
          <option class="body-small">Subject</option>
          <option class="body-small">Online Purchase</option>
          <option class="body-small">Return</option>
          <option class="body-small">Shipping Options</option>
        </select>
      </div>

      <textarea
        class="message body-small"
        name="message"
        placeholder="Message"
      ></textarea>

      <p v-if="!formIsValid" class="msg-error-formIsNotValid">
        Please enter a valid email.
      </p>

      <button class="btn-send-contact body-small" @click="">SEND</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      formIsValid: true,
      select: "Subject",
    };
  },
  methods: {
    submitForm() {
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
.myContact {
  margin: 69px auto 0 auto;
}

.msg-error-formIsNotValid {
  margin: 0 auto;
}
.form-contact {
  margin-top: 0;
  width: 100%;
  // width: 288px;
  padding: 0;
  #email-contact,
  #first-name,
  #last-name {
    width: 100%;
    height: 25px;
    padding: 0;
    margin-top: 47px;
    margin-bottom: 0;
    border-bottom: 1px $light-gray;
    border-style: none none solid none;
    background-color: $white;
    color: $dark-grey;
    outline: none;
  }
  .select-group {
    margin-top: 47px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: $dark-grey;
    width: 100%;
    border: none;
    // margin-top: 47px;
    border-bottom: 1px $light-gray;
    border-style: none none solid none;
    background-color: $white;
    color: $dark-grey;
  }
  .select-subject {
    width: 100%;
    border: none;
    outline: none;
  }

  option {
    color: $dark-grey;
  }

  .message {
    min-height: 85px;
    margin-top: 47px;
    width: 100%;
    border: none;
    // margin-top: 47px;
    border-bottom: 1px $light-gray;
    border-style: none none solid none;
    background-color: $white;
    color: $dark-grey;
    outline: none;
  }
}

.btn-send-contact {
  display: flex;
  margin: 24px auto 0 auto;
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
