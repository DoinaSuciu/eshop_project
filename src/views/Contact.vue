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
          <option class="body-small" value="" disabled>Subject</option>
          <option
            class="body-small"
            v-for="option in options"
            :value="option.id"
          >
            {{ option.name }}
          </option>
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

      <button class="btn-send-contact body-small">SEND</button>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      formIsValid: true,
      select: "",
      options: [
        { id: 1, name: "Online Purchase" },
        { id: 2, name: "Return" },
        { id: 3, name: "Shipping Options" },
        { id: 4, name: "Gift Bag & Gift card options" },
      ],
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
    margin-bottom: 96px;
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
    cursor: pointer;
  }
}

@media only screen and (min-width: 1024px) {
  .btn-send-contact {
    width: 288px;
    height: 53px;
    font-weight: 900;

    &:hover {
      background-color: $white;
      color: $black;
      border: 1px solid $black;
    }
  }
}
</style>
>
